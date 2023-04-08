# Connect to MongoDB

MongoDB is a document database with the scalability and flexibility that you want with the querying and indexing that you need. Tapdata Cloud supports building data pipelines with MongoDB as the source and target database, and this article describes how to add MongoDB to Tapdata Cloud.

## Preparations

[Preparations for MongoDB](../../../prerequisites/config-database/certified/mongodb.md)

## Procedure

1. Log in to [Tapdata Cloud](https://cloud.tapdata.net/console/v3/).

2. In the left navigation panel, click **Connections**.

3. On the right side of the page, click **Create connection**.

4. In the pop-up dialog, click **GA data source**, and select **MongoDB**.

5. On the page that you are redirected to, follow the instructions below to fill in the connection information for MongoDB.

   ![MongoDB Connection Example](../../../images/mongodb_connection.png)

   * Connection Information Settings

      * **Connection name**: Fill in a unique name that has business significance.
      * **Connection type**: Supports MongoDB as a source or target database.
      * **Connection method**: Choose how you want to connect:
         * **URI mode**: After selecting this mode, you need to fill in the database URI connection information, and the user name and password need to be spliced in the connection string, for example` mongodb://admin:password@192.168.0.100:27017/mydb?replicaSet=xxx&authSource=admin`
         * **Standard mode**: After selecting this mode, you need to fill in the database address, name, account number, password and other connection string parameters.
      * **Connect using TLS/SSL**: Choose how you want to connect:
         * **TSL/SSL connection:** Tapdata Cloud will connect to a separate server in the network that provides a TSL/SSL channel to the database. If your database is in an inaccessible subnet, you can try this method.
         * **Direct connection**: Tapdata Cloud will connect directly to the database and you need to set up security rules to allow access.
   * Advanced settings

      * **Contain table**: Defaults to **all**, you can also choose to custom and fill in the included tables, separated by commas (,) between multiple tables.
      * **Exclude tables**: After turning on the switch, you can set the tables to be excluded, separated by commas (,) between multiple tables.
      * **Agent settings**: Defaults to **Platform automatic allocation**, you can also manually specify an agent.
      * **Model loading frequency**: When the number of models in the data source is greater than 10,000, Tapdata Cloud will periodically refresh the model according to the set time.

6. Click **Connection Test**, and when passed, click **Save**.

   :::tip

   If the connection test fails, follow the prompts on the page to fix it.

   :::