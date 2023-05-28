# MongoDB Atlas

After installing the Agent, the next step is to establish a connection between the Agent and MongoDB Atlas through Tapdata Cloud. This connection is crucial as it allows you to utilize the MongoDB Atlas for various data replication or development tasks.

MongoDB Atlas is a multi-cloud database service by the same people that build MongoDB. Before establishing the connection, it is essential to complete the necessary preparations outlined in the provided article. These preparations may include authorizing an account and performing other relevant steps to ensure a smooth and secure connection.


## Supported Versions

MongoDB Atlas 5.0.15

:::tip

When synchronrizing data between MongoDB, it is recommended source/target database are 5.0 and above for ensure data compatibility.

:::

## Procedure

1. Log in to [MongoDB Atlas](https://cloud.mongodb.com/v2).

2. Set up network access control to ensure network connectivity.

   1. In the left navigation panel, click **Network Access**.

   2. On the right, click **ADD IP ADDRESS**.

   3. In the pop-up dialog, fill in the public address of the Tapdata Agent (CIDR format) and click **Confirm**.

      ![Set Network Whitelist](../../../images/atlas_add_ip_address.png)

3. Create an account and grant permissions for database connectivity.

   1. In the left navigation panel, click **Database Access**.

   2. On the right side of the page, click **ADD NEW DATABASE USER**.

   3. In the pop-up dialog, select the authentication method and grant permissions.

      ![Create an account and authorize](../../../images/atlas_create_user.png)

      In this case, we will use password authentication as an example to demonstrate the operation process. The permission selection instructions are as follows.

      * **As a Source Database**: Select **Built-in Role** as **Only read any database**.

      * **As a Target Database**: Select **Built-in Role** for **Read and Write to any Database**.

   4. Click **Add User**.

4. Gets database connection information.

   1. In the left navigation panel, click **Database**.

   2. Locate the target database and click **Connect**.

   3. In the pop-up dialog, select **Connect to your application** to get connection information, which will be used when connecting to the database.

      ![Get Connection Information](../../../images/atlas_obtain_connection.png)

## Next step

Now that you have completed the preparations, you can connect to the [MongoDB Atlas](../../../user-guide/connect-database/beta/connect-mongodb-atlas.md).