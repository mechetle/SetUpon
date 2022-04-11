import boto3

def create_setups_table(dynamodb=None):
 if not dynamodb:
    dynamodb = boto3.resource('dynamodb')
    table = dynamodb.create_table(
        TableName='su-user-setups',

        # Partition key = users     ---- For getting all users setups
        # Sort key = date           ---- For getting a user's setup at a date                 

        KeySchema=[
        {
        'AttributeName': 'user',
        'KeyType': 'HASH' # Partition key
        },
        {
        'AttributeName': 'date',
        'KeyType': 'RANGE' # Sort key
        }
        ],
        AttributeDefinitions=[
        {
        'AttributeName': 'user',
        'AttributeType': 'S'
        },
        {
        'AttributeName': 'date',
        'AttributeType': 'N'
        },
        ],
        ProvisionedThroughput={
        'ReadCapacityUnits': 10,
        'WriteCapacityUnits': 10
        }
    )
    return table

def create_items_table(dynamodb=None):
 if not dynamodb:
    dynamodb = boto3.resource('dynamodb')
    table = dynamodb.create_table(
        TableName='su-items',

        # Partition key = users     ---- For getting all users setups
        # Sort key = date           ---- For getting a user's setup at a date                 

        KeySchema=[
        {
        'AttributeName': 'item', # name of the item
        'KeyType': 'HASH' # Partition key
        },
        {
        'AttributeName': 'category',
        'KeyType': 'RANGE' # Sort key
        }
        ],
        AttributeDefinitions=[
        {
        'AttributeName': 'item',
        'AttributeType': 'S'
        },
        {
        'AttributeName': 'category',
        'AttributeType': 'S'
        },
        ],
        ProvisionedThroughput={
        'ReadCapacityUnits': 10,
        'WriteCapacityUnits': 10
        }
    )
    return table
    
def create_users_table(dynamodb=None):
 if not dynamodb:
    dynamodb = boto3.resource('dynamodb')
    table = dynamodb.create_table(
        TableName='su-users',

        # Partition key = users     ---- For getting all users setups
        # Sort key = date           ---- For getting a user's setup at a date                 

        KeySchema=[
        {
        'AttributeName': 'username',
        'KeyType': 'HASH' # Partition key
        }
        ],
        AttributeDefinitions=[
        {
        'AttributeName': 'username',
        'AttributeType': 'S'
        }
        ],
        ProvisionedThroughput={
        'ReadCapacityUnits': 10,
        'WriteCapacityUnits': 10
        }
    )
    return table
    
if __name__ == '__main__':
    setups_table = create_setups_table()
    print("Table status (setups_table):", setups_table.table_status)

    items_table = create_items_table()
    print("Table status (items_table):", items_table.table_status)

    users_table = create_users_table()
    print("Table status (users_table):", users_table.table_status)