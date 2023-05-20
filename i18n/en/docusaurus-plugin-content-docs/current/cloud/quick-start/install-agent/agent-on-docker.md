# Install on Docker

Tapdata Agent (abbreviated as Agent) retrieves data from the source, processes it, and transmits it to the target. It also supports installation on multiple platforms. This article provides instructions on installing Agent on the Docker platform.

## Requirements

- CPU: x86 Architecture Processor
- Operating System: 64-bit
- Network: Ability to connect to the public network and communicate with the source/target database
- Software:[ Docker](https://docs.docker.com/get-docker/)

:::tip

To simplify the installation process, Tapdata provides you with a Docker image with a Java environment (version 1.8). For additional images, please contact your Docker image administrator or visit the [Docker website](https://hub.docker.com/search).

:::

## Install Agent

1. Log in to [Tapdata Cloud](https://cloud.tapdata.net/console/v3/).

2. [Create an Agent](../../billing/purchase.md) according to business requirements.

3. After completing subscription, on the **deployment** page that you are redirected to, select **Docker** and copy the installation command.

   ![Copy the installation command](../../images/agent_on_docker.png)

4. To log in to the device where the Agent will be deployed (without root privileges), create a folder first, such as **tapdata**. Enter the created folder to facilitate easier management of the Agent.

5. Paste and execute the installation command that you copied in step 3, which includes the steps of downloading, deploying, and launching the Agent. 

   After a successful launch, you can retrieve the container ID, as you can see in below picture.

   ![Agent Started Successfully](../../images/agent_started_on_docker.png)




## Next step

[Connect Database](../connect-database.md)

## See also

* [Manage Agent](../../user-guide/manage-agent.md)
* [FAQ about Agent](../../faq/agent-installation.md)
