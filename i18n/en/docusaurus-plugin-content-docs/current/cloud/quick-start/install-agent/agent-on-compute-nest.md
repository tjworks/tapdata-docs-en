# Install on Compute Nest

Under the traditional cloud deployment model, we need to complete complex processes such as purchasing ECS(Elastic Compute Service), preparing the environment, and configuring security policies. Due to the high reliance on manual experience, delivery cycles and quality are difficult to guarantee. 

In order to further improve the convenience and security of deployment, Tapdata helps users to deploy Tapdata Agent in a secure network environment through [Alibaba Cloud Computing Nest](https://help.aliyun.com/document_detail/290066.html). This realizes the efficiency upgrade of the whole service life cycle of deployment, delivery, operation and maintenance, and greatly reduces the threshold of use.

## Prerequisites

Register Alibaba Cloud [account](https://help.aliyun.com/knowledge_detail/37195.html).

## Procedure

1. Log in to [Tapdata Cloud](https://cloud.tapdata.net/console/v3/).

2. Click **Agent** in the left navigation panel, and then click **Create Agent** on the right.

3. On the **Agent download and installation page** , select Alibaba Cloud Computing Nest, and then select the paid method to create the ECS:

   ![](../../images/select_computing_nest.png)

   * **Trial for three days**: server resources will be automatically recycled after the expiration, the relevant data will not be retained, please back up in advance.
   * **Paid Deployment**: Create an ECS with prepaid or pay-as-you-go payment. For more information, see [ECS billing](https://help.aliyun.com/document_detail/25398.html).

   :::tip

   Next, we will demonstrate the operation process by using a free trial, and in step 6 we will use the **instance version** and **instance token** on this page.

   :::

4. On the Alibaba Cloud login page, fill in the account password and complete the login.

5. In the pop-up dialog, read and agree with service agreement, and click OK.

6. According to the prompts on the page, complete the configurations of the ECS.

   :::tip

   * Return to the Tapdata Cloud to get the **instance version** and **instance token** required by the **App instance** configuration.
   * Additionally, you can authorize Tapdata to provide O&M services on your behalf at the bottom of the page, avoiding problems such as manually modifying network configurations and exchanging login credentials during troubleshooting, eliminating potential security risks, and improving troubleshooting efficiency.

   :::

7. Click **Next: Confirm Order**: Confirm the order, read the selected service agreement and click **Use for free**.

8. Click **view the list**, jump to the list of instances of Compute Nest, and wait for the deployment to complete (about 3 minutes).




## Next step

[Connect Data Sources](../connect-database.md)

## See also

* [Manage Agent](../../user-guide/manage-agent.md)
* [FAQ about Agent](../../faq/agent-installation.md)