from __future__ import print_function

import boto3
import json

def lambda_handler(event, context):
    '''
      - operation: one of the operations in the operations dict below
      - payload: a parameter to pass to the operation being performed
    '''

    operation = event['operation']
    dynamo = boto3.resource('dynamodb').Table('PeasAndPeppersGerechten')

    operations = {
        'create': lambda x: dynamo.put_item(**x),
        'read': lambda x: dynamo.get_item(**x),
        'update': lambda x: dynamo.update_item(**x),
        'delete': lambda x: dynamo.delete_item(**x)
    }

    if operation in operations:
        return operations[operation](event.get('payload'))
    else:
        raise ValueError('Unrecognized operation "{}"'.format(operation))