import json
import boto3
from botocore.exceptions import ClientError

def lambda_handler(event, context):
    SENDER = "Peas & Peppers <info@peasandpeppers.nl>"
    RECIPIENT = event['recipient']
    AWS_REGION = "eu-west-1"
    CHARSET = "UTF-8"
    CONFIGURATION_SET = "ConfigSet"
    
    SUBJECT = "Contant formulier Peas & Peppers"
    
    BODY_TEXT = (event['bodytext'])
    
    BODY_HTML = """<html>
            <head></head>
            <body>
                event['bodytext']
            </body>
            </html>
            """  
            
    client = boto3.client('ses',region_name=AWS_REGION)
    
    try:
        #Provide the contents of the email.
        response = client.send_email(
            Destination={
                'ToAddresses': [
                    RECIPIENT,
                ],
            },
            Message={
                'Body': {
                    'Html': {
                        'Charset': CHARSET,
                        'Data': BODY_HTML,
                    },
                    'Text': {
                        'Charset': CHARSET,
                        'Data': BODY_TEXT,
                    },
                },
                'Subject': {
                    'Charset': CHARSET,
                    'Data': SUBJECT,
                },
            },
            Source=SENDER,
            # If you are not using a configuration set, comment or delete the
            # following line
            #ConfigurationSetName=CONFIGURATION_SET,
        )
    except ClientError as e:
        return {
            'statusCode': 400,
            'body': json.dumps(e.response['Error']['Message'])
        }

    return {
        'statusCode': 200,
        'body': json.dumps('Bericht verstuurd!')
    }