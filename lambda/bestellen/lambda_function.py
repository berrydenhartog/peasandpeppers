from botocore.exceptions import ClientError
from datetime import date

def lambda_handler(event, context):
    SENDER = "Peas & Peppers <info@peasandpeppers.nl>"
    AWS_REGION = "eu-west-1"
    CHARSET = "UTF-8"
    CONFIGURATION_SET = "ConfigSet"
    
    SUBJECT = "Peas and Peppers | Bestelling"
    
    if 'adres' not in event or 'naam' not in event or 'email' not in event or 'postcode' not in event or 'producten' not in event:
        return {
            'statusCode': 400,
            'body': 'een verplicht veld mist'
        }
        
    PRODUCTENLIJST = event['producten']
    
    textmessage = """Beste %s, Bedankt voor je bestelling. 
    
    Je hebt de volgende producten besteld.
    %s
    
    We zullen deze bestelling bezorgen op
    %s  %s
    
    Met vriendelijke groeten,
    Peas and Peppers
    """
    productenstring=""
    for product in PRODUCTENLIJST:
        product_date = date.today()
        print(product_date)
        productenstring += "Week:"+product['weeknr']+"Dag: "+product['dag']+"Naam:"+product['naam']+"aantal"+product['aantal']+"Grootte"+product['grote']+"prijs"+product['prijs']
    
    BODY_TEXT = textmessage % (event['naam'],event['adres'],event['postcode'])
    
    htlmmessage = """<html>
            <head></head>
            <body>
                Beste : %s, bedankt voor je bestelling <br>
                <br>
                Je hebt de volgende producten besteld.<br>
                %s<br>
                <br>
                We zullen deze bestelling bezorgen op<br>
                %s  %s<br>
                <br>
                Met vriendelijke groeten,<br>
                Peas and Peppers<br>
            </body>
            </html>
            """ 
    
    
    BODY_HTML = htlmmessage % (event['naam'],event['producten'],event['adres'],event['postcode'])
            
    client = boto3.client('ses',region_name=AWS_REGION)
    
    try:
        #Provide the contents of the email.
        response = client.send_email(
            Destination={
                'ToAddresses': [
                    event['email'],
                ],
                'BccAddresses': [
                    "info@peasandpeppers.nl",
                ]
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
