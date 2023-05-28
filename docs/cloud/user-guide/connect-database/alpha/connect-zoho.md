# Connect to Zoho CRM

Zoho CRM is a SaaS cloud CRM customer management system. Tapdata Cloud supports Zoho CRM as the source database to build a data pipeline, this article describes how to add Zoho CRM data source in Tapdata Cloud.



## Procedure

1. Log in to [Tapdata Cloud](https://cloud.tapdata.io/).

2. In the left navigation panel, click **Connections**.

3. On the right side of the page, click **Create**.

4. In the pop-up **dialog**, select **Zoho-CRM**.

5. Fill in the connection information for Zoho-CRM on the redirected page, following the instructions provided below.

   ![](../../../images/zoho_connection_setting.png)
   * **Connection name**: Fill in a unique name that has business significance.
   * **Connection type**: Currently only supported as a **Source**.
   * **Client ID**,**Client secret**, and **Grant token**: Fill in the required authentication information, and see the [preparation of the Zoho CRM data source](../../../prerequisites/config-database/alpha/zoho-crm.md) for more detailed.
   :::tip
      Once you have finished configuring, click the button below to verify the authentication information, after verified successful, the page will display a message saying **OK**. However, if you receive an error message stating **invalid_client**, it could mean that the token has expired. In that case, please refer to the necessary preparations to generate a new token.
   * **Agent settings**: Defaults to **Platform automatic allocation**, you can also manually specify an agent.
   * **Model load time**: If there are less than 10,000 models in the data source, their information will be updated every hour. But if the number of models exceeds 10,000, the refresh will take place daily at the time you have specified.
   
6. Click **Test Connection**, and when passed, click **Save**.

   :::tip

   If the connection test fails, follow the prompts on the page to fix it.

   :::