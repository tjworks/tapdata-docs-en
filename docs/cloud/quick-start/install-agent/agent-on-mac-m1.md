# Install on Mac (M1 Chip)

Tapdata Agent (abbreviated as Agent) retrieves data from the source, processes it, and transmits it to the target. It also supports installation on multiple platforms. This article provides instructions on installing Agent on the Mac platform (M1 chip).

## Requirements

- Network: Ability to connect to the public network and communicate with the source/target database.
- Software: Dokcer, for more information, see [Install docker](https://docs.docker.com/desktop/install/mac-install/).

## Install Agent

1. Open the Mac's terminal, then execute the following command to download and launch the JDK image.

   ```shell
   # Download Image
   docker pull openjdk:8u312
   # Run Image
   docker run -t -d openjdk:8u312
   ```

2. Execute `docker ps` to get the container ID, and then execute the following format of the command to enter the container command line, for example:

   ```shell
   docker exec -it Container-ID /bin/bash
   ```

   :::tip

   Replace the Container-ID in the command, such as `docker exec -it 1dbee41b4adc/bin/bash`.

   :::

3. To manage the Agent easily, create a folder (e.g., **tapdata**) and enter it by executing the following command.

   ```shell
   mkdir tapdata&&cd tapdata
   ```

4. In the container command line, execute the following command to download the Agent program and unzip it.

   ```shell
   wget 'https://resource.tapdata.net/doc-source/tapdata.zip' && unzip tapdata.zip
   ```

5. Log in to [Tapdata Cloud](https://cloud.tapdata.io/) to get Agent-initiated configuration information.

   1. [Create an Agent](../../billing/purchase.md) according to business requirements.

   2. After completing subscription, on the **deployment** page that you are redirected to, select **Linux(64 bit)** as the target operating system. Next, copy the installation command, starting from **./tapdata**, as illustrated in the provided example.

      ![Copy the installation command](../../images/agent_on_macm1.png)

6. Paste the previously copied command in the container command line and execute it. 

   The startup is successful, you can refer to the below figure.

   ![](../../images/agent_started_on_macm1.png)





## Next step

[Connect Data Sources](../connect-database.md)

## See also

* [Manage Agent](../../user-guide/manage-agent.md)
* [FAQ about Agent](../../faq/agent-installation.md)

