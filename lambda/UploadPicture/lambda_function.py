import json
import base64
import boto3
import os
from PIL import Image
from io import BytesIO

BUCKET_NAME = 'peasandpeppers1'

def resize_image(image_path, resized_path):
    with Image.open(image_path) as image:
      xs = image.width
      ys = image.height

      # resize to max 350 width
      if xs > 350:
        (width, height) = (350, int(float(ys) * float(350.0/xs)))
        newimage = image.resize((width, height),Image.ANTIALIAS)
      else:
        newimage = image

      xs = newimage.width
      ys = newimage.height

      #crop to aspex ratio 16*9
      if float(xs)/16.0 >= float(ys)/9.0:    #700X700   43. X 77
        dx=float(xs)-(float(xy)/9.0*16.0)
        left=int(dx/2.0)
        up=0
        right=int(float(xs)-(dx/2.0))
        bottom=ys
      else:
        dx=float(ys)-(float(xs)/16.0*9.0) #  700-393 = 307
        left=0
        up=int(dx/2)  #153
        right=xs
        bottom=int(float(ys)-(dx/2)) 


      border = (left, up, right, bottom) # left, up, right, bottom
      cropimage = newimage.crop(border)
      
      cropimage.save(resized_path) 



def lambda_handler(event, context):
    
    if 'context' not in event or 'groups' not in event['context'] or event['context']['groups'] != "admin":
        return {
            'statusCode': 401,
            'body': 'Not authorized'
        }
    
    if 'params' not in event or 'content' not in event['params'] or 'name' not in event['params']:
        return {
            'statusCode': 400,
            'body': 'Missing required properties'
        }
        
    basename=os.path.basename(event["params"]["name"])
    filename=os.path.splitext(basename)[0]
    ext=os.path.splitext(basename)[1]

    file_content = base64.b64decode(event["params"]["content"])
    resize_file_path = 'uploads/'+filename+"-before-resize"+ext
    file_path = 'uploads/'+filename+ext
    download_path="/tmp/"+filename+"-before-resize"+ext
    upload_path="/tmp/"+filename+ext
    
    s3 = boto3.client('s3')  
    try:
        s3_response = s3.put_object(Bucket=BUCKET_NAME, Key=resize_file_path, Body=file_content)    
    except Exception as e:
        raise IOError(e)   
        
    s3.download_file(BUCKET_NAME, resize_file_path, download_path)    
    resize_image(download_path, upload_path)
    s3.upload_file(upload_path, BUCKET_NAME, file_path)    
        


    return {
        'statusCode': 200,
        'body': {
            'file_path': file_path
        }
    }
