# Aliyun RDS for MySQL

Follow the instructions below to successfully add and use Aliyun RDS for MySQL database in Tapdata Cloud.

## Supported Versions

5.1, 5.5, 5.6, 5.7, 8.0

## Prerequisites

When connecting to Aliyun RDS for MySQL, follow these steps for both source and target databases.

1. Access the [RDS instance list](https://rdsnext.console.aliyun.com/rdsList/basic) on Aliyun Cloud, select the region at the top, and click on the target instance ID.

2. Create a high-privilege account.

   1. In the left navigation, select **Account Management**.

   2. On the right side of the page, click on **Create Account**.

   3. Complete the following settings in the panel on the right.

      * **Database Account**: Starts with a lowercase letter, ends with a lowercase letter or number, supports lowercase letters, numbers, and underscores, with a length of 2 to 32 characters.
   * **Account Type**: Choose **High Privilege** account to have access to the database's Binlog and read-write permissions. For more account types, see [Account Types](https://help.aliyun.com/document_detail/96089.htm#section-b3f-whz-q2b).
      * **Account Password**: Length of 8 to 32 characters, with at least three of the following: uppercase letter, lowercase letter, number, special character `!@#$%^&*()_+-=`.
      
   4. Click **OK**.

3. Create a database.

   1. In the left navigation, select **Database Management**.
   2. Click on **Create Database**, fill in the database name and select the character set in the pop-up dialog.
   3. Click **Create**.

4. Enable external network access address. Skip this step if your Agent-deployed machine and RDS MySQL are in the same intranet.
   1. In the left navigation, select **Database Connection**.
   2. Click on **Enable External Network Address**.
   3. In the pop-up dialog, keep the option: **Add 0.0.0.0/0 to Whitelist** selected.
   4. Click **OK**.
      :::tip
      After completing this operation, you can view the external network connection address on this page, which you will use when connecting to the data source later.
      :::

## Add Data Source
1. Log in to the [Tapdata Cloud platform](https://cloud.tapdata.net/console/v3/).

2. In the left navigation, click on **Connection Management**.

3. Click on **Create Connection** on the right side of the page.

4. In the pop-up dialog, click on **Authenticate Data Source**, then select **MySQL**.

5. On the page that opens, fill in the MySQL connection information according to the instructions below.

   * **Connection Information Settings**
      * **Connection Name**: Fill in a meaningful and unique name.
      * **Connection Type**: Supports both source and target databases.
      * **Address**: Database connection address, the external network connection address you obtained during the preparation.
      * **Port**: Database service port, default is **3306**.
      * **Database**: Database name, each connection corresponds to a database. If there are multiple databases, you need to create multiple data connections.
      * **Account**: High-privilege account name.
      * **Password**: Password corresponding to the database account.
      * **Connection Parameters**: Additional connection parameters, default is empty.
   * **Advanced Settings**
      * **Time Zone**: Default is the time zone used by the database. You can also manually specify it based on business requirements.
        If the source database is in the default time zone (+8:00), and the target database is in a specified time zone (+0:00), then assuming the source database stores the time as 2020-01-01 16:00:00, the target database will store the time as 2020-01-01 08:00:00.
      * **Include Tables**: Default is **All**, you can also choose custom and fill in included tables, separate multiple tables with commas (,).
      * **Exclude Tables**: Turn on this switch to exclude specific tables, separate multiple tables with commas (,).
      * **Agent Settings**: Default is **Automatically Assigned by Platform**, you can also manually specify an Agent.
      * **Model Loading Frequency**: When the number of models in the data source is over 10,000, Tapdata Cloud will periodically refresh the models according to the set time.
   
6. Click on **Connection Test**, once successful, click on **Save**.
   :::tip
   If the connection test fails, follow the page prompts to fix the issue.
   :::



## Frequently Asked Questions

* Question: When synchronizing between heterogeneous data sources, data updates and deletes triggered by table cascades are not synchronized to the target database?

  Answer: In this scenario, if you need to build cascade processing capability on the target side, you can use triggers or other methods to achieve this type of data synchronization.

* Question: When performing a connection test in Tapdata Cloud, it prompts an error "Unknown error 1044"?

  Answer: If the correct permissions have been granted, you can check and fix it using the following method:

  ```sql
  SELECT host,user,Grant_priv,Super_priv FROM mysql.user where user='username';
  // Check if the value of Grant_priv field is Y
  // If not, execute the following command
  UPDATE mysql.user SET Grant_priv='Y' WHERE user='username';
  FLUSH PRIVILEGES;
