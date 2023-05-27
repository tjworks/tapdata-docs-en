# Connect to Oracle

Tapdata Cloud provides support for building data pipelines using Oracle Database as both the source and target database. Oracle Database, developed and marketed by Oracle Corporation, is a versatile and comprehensive multi-model database management system. 

This article serves as a guide, outlining the steps to add an Oracle database to Tapdata Cloud, enabling seamless integration for your data pipelines.

## Preparations

[Preparations for Oracle](../../../prerequisites/config-database/certified/oracle)

## Procedure

1. Log in to [Tapdata Cloud](https://cloud.tapdata.io/).

2. In the left navigation panel, click **Connections**.

3. On the right side of the page, click **Create connection**.

4. In the pop-up dialog, select **Oracle**.

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
      * **Contain table**: The default option is **All**, which includes all tables. Alternatively, you can select **Custom** and manually specify the desired tables by separating their names with commas (,).
      * **Exclude tables**: Once the switch is enabled, you have the option to specify tables to be excluded. You can do this by listing the table names separated by commas (,) in case there are multiple tables to be excluded.
      * **Agent settings**: Defaults to **Platform automatic allocation**, you can also manually specify an agent.
      * **Model loading frequency**: When the number of models in the data source is greater than 10,000, Tapdata Cloud will periodically refresh the model according to the set time.

6. Click **Connection Test**, and when passed, click **Save**.

   :::tip

   If the connection test fails, follow the prompts on the page to fix it.

   :::



## Related Topics

[Oracle to Tablestore Real-Time Sync](../../../best-practice/oracle-to-tablestore.md)
