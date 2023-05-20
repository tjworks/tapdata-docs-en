# Connect to Oracle

Oracle Database is a multi-model database management system produced and marketed by Oracle Corporation. Tapdata Cloud supports building data pipelines with Oracle as the source and target database, and this article describes how to add Oracle database to Tapdata Cloud.

## Preparations

[Preparations for Oracle](../../../prerequisites/config-database/certified/oracle)

## Procedure

1. Log in to [Tapdata Cloud](https://cloud.tapdata.io/).

2. In the left navigation panel, click **Connections**.

3. On the right side of the page, click **Create connection**.

4. In the pop-up dialog, click **GA data source**, and select **Oracle**.

5. On the page that you are redirected to, follow the instructions below to fill in the connection information for Oracle.

   ![Oracle Connection Example](../../../images/oracle_connection.png)

   * Connection Information Settings
      * **Connection name**: Fill in a unique name that has business significance.
      * **Connection type**: Supports Oracle as a source or target database.
      * **Connection mode**: Choose to connect through SID or Service Name.
      * **DB Address**: The database connection address.
      * **Port**: The service port of database.
      * **SID**/**Service name**: Fill in the SID or Service Name information.
      * **Schema**: Schema name, a connection corresponding to a Schema, if you need to connect multiple Schema, you need to create multiple connections.
      * **Connection Parameter String**: additional connection parameters, default empty.
      * **User**: The database account.
      * **Password**: The database password.
      * **Multi-tenant**: If Oracle is a multi-tenant mode, you need to turn on the switch and fill in the PDB information.

   * Advanced settings
      * **Log plugin name**: Keep default (**logMiner**).
      * **Timezone for datetime**: Defaults to the time zone used by the database, which you can also manually specify according to your business needs.
      * **Contain table**: defaults to **all**, you can also choose to custom and fill in the included tables, separated by commas (,) between multiple tables.
      * **Exclude tables**: After turning on the switch, you can set the tables to be excluded, separated by commas (,) between multiple tables.
      * **Agent settings**: Defaults to **Platform automatic allocation**, you can also manually specify an agent.
      * **Model loading frequency**: When the number of models in the data source is greater than 10,000, Tapdata Cloud will periodically refresh the model according to the set time.

6. Click **Connection Test**, and when passed, click **Save**.

   :::tip

   If the connection test fails, follow the prompts on the page to fix it.

   :::



## Related Topics

[Oracle to Tablestore Real-Time Sync](../../../best-practice/oracle-to-tablestore.md)
