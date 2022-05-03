class db:
    def get_database():
        from pymongo import MongoClient

        # Provide the mongodb atlas url to connect python to mongodb using pymongo
        CONNECTION_STRING = "mongodb+srv://test:test@cluster0.vpjot.mongodb.net/react?retryWrites=true&w=majorit"

        # Create a connection using MongoClient. You can import MongoClient or use pymongo.MongoClient
        client = MongoClient(CONNECTION_STRING)

        # Create the database for our example (we will use the same database throughout the tutorial
        return client
