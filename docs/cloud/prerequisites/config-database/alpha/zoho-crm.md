# Zoho-CRM

After installing the Agent, the next step is to establish a connection between the Agent and Zoho-CRM through Tapdata Cloud. This connection is crucial as it allows you to utilize the Zoho-CRM data source for various data replication or development tasks.

Before establishing the connection, it is essential to complete the necessary preparations outlined in the provided article. These preparations may include authorizing an account and performing other relevant steps to ensure a smooth and secure connection.

## Procedure

1. Log in to the [Zoho API console](https://api-console.zoho.com/) and click **GET STARTED**.

2. Locate the **Self Client** card, click **CREATE NOW**.

3. Click **CREATE**, and in the pop-up dialog, click **OK**.

4. After the creation is complete, you will get the **Client ID** and **Client Secret**, which will be used when connecting the data source.

   ![](../../../images/obtain_zoho_secret.png)

5. Click the **Generate Code** tab, fill in the **Scope** and description information you want to authorize, and then click **Create**.

   ![](../../../images/zoho_generate_code.png)

   :::tip

   For Scope setup references, see [official document](https://www.zoho.com/crm/developer/docs/api/v3/scopes.html).

   :::

6. In the pop-up menu, select Portal and Production, and then click **CREATE**.

7. In the pop-up dialog, copy or download the Code information (ie, token information), save the information properly, and then use it when connecting the data source.

   ![](../../../images/obtain_zoho_code.png)

   :::tip

   The default token is valid for 3 minutes. Please complete adding the data source as soon as possible. If it expires, please repeat steps 5 ~ 7 to get the new token information.

   :::



## Next step

Now that you have completed the preparations, you can [connect to Zoho CRM](../../../user-guide/connect-database/alpha/connect-zoho.md).
