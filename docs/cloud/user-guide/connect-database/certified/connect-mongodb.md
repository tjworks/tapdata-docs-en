# Connect to MongoDB

Tapdata Cloud supports the integration of MongoDB as both the source and target database for building data pipelines. This article provides a comprehensive guide on how to add MongoDB to Tapdata Cloud, enabling you to leverage its scalability, flexibility, querying, and indexing capabilities for your data processing needs.

## Preparations

[Preparations for MongoDB](../../../prerequisites/config-database/certified/mongodb.md)

## Procedure

1. Log in to [Tapdata Cloud](https://cloud.tapdata.io/).

2. In the left navigation panel, click **Connections**.

3. On the right side of the page, click **Create connection**.

4. In the pop-up dialog, select **MongoDB**.

5. On the page that you are redirected to, follow the instructions below to fill in the connection information for MongoDB.

   ![MongoDB Connection Example](../../../images/mongodb_connection.png)

   * Connection Information Settings

      * **Connection name**: Fill in a unique name that has business significance.
      
      * **Connection type**: Supports MongoDB as a source or target database.
      
      * **Connection method**: Choose how you want to connect:
         * **URI mode**: After selecting this mode, you will be required to provide the necessary information for the database URI connection. The connection string should include the username and password, which are concatenated in the format. 
         
           For example, the connection string may look like: ` mongodb://admin:password@192.168.0.100:27017/mydb?replicaSet=xxx&authSource=admin`.           
         
         * **Standard mode**: After selecting this mode, you need to fill in the database address, name, account number, password and other connection string parameters. 
         
      * **Connect using TLS/SSL**: Choose how you want to connect:
         * **TSL/SSL connection:** In cases where your database is located in an inaccessible subnet, Tapdata Cloud offers the option to establish a connection through a separate server within the network. This server acts as a TSL/SSL channel to facilitate the connection to the database. This method enables connectivity to the database even when it is in a subnet that would otherwise be inaccessible.
         * **Direct connection**: Tapdata Cloud will connect directly to the database and you need to set up security rules to allow access.
      
   * Advanced settings

      * **Contain table**: The default option is **All**, which includes all tables. Alternatively, you can select **Custom** and manually specify the desired tables by separating their names with commas (,).
      * **Exclude tables**: Once the switch is enabled, you have the option to specify tables to be excluded. You can do this by listing the table names separated by commas (,) in case there are multiple tables to be excluded.
      * **Agent settings**: Defaults to **Platform automatic allocation**, you can also manually specify an agent.
      * **Model loading frequency**: When the number of models in the data source is greater than 10,000, Tapdata Cloud will periodically refresh the model according to the set time.

6. Click **Connection Test**, and when passed, click **Save**.

   :::tip

   If the connection test fails, follow the prompts on the page to fix it.

   :::