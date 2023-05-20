# Install on Linux

Tapdata Agent (abbreviated as Agent) retrieves data from the source, processes it, and transmits it to the target. It also supports installation on multiple platforms. This article provides instructions on installing Agent on the Linux platform.

## Requirements

- CPU: x86 Architecture Processor
- Operating System: 64-bit
- Network: Ability to connect to the public network and communicate with the source/target database
- Software: Java 1.8

:::tip

To view the Java version on your device, you can execute the `java-version` command. If Java is not already installed, you will need to manually install the Java environment. For instance, you can execute the command: `yum -y install java-1.8.0-openjdk`.

:::

## Install Agent

1. Log in to [Tapdata Cloud](https://cloud.tapdata.net/console/v3/).

2. [Create an Agent](../../billing/purchase.md) according to business requirements.

3. After completing subscription, on the **deployment** page that you are redirected to, select **Linux(64 bit)** as the target operating system, and then copy the installation command.

   ![Copy the installation command](../../images/agent_on_linux.png)

4. Log in to the device where the Agent will be deployed (without root privileges), create a folder first (e.g., **tapdata**) and enter it for easier management of the Agent.

5. Paste and execute the installation command you copied in step 3, which contains the process of downloading, deploying, and launching the Agent, and the launch success is shown in the figure below.

   ![Agent Started Successfully](../../images/agent_started_on_linux.png)




## Next step

[Connect Data Sources](../connect-database.md)

## See also

* [Manage Agent](../../user-guide/manage-agent.md)
* [FAQ about Agent](../../faq/agent-installation.md)
