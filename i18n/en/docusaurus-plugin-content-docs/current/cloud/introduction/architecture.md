# Architecture and Workflow

Tapdata Cloud components include Tapdata cloud manager and Tapdata agent:

* **Tapdata Cloud Manager** (TCM): responsible for installing and configuring agents, and monitoring task status.

* **Tapdata Agent:** obtaining task information from TCM, processing and converting data to send to the target, and reporting task status to TCM during task execution.

![](../images/architecture.png)



Tapdata Cloud utilizes various cybersecurity measures to safeguard user data and information:

* **One-way connection**: The Tapdata Agent instance does not actively expose network information, and only connects to the TCM management service to obtain task information and report status information.
* **HTTPS protocol**: Tapdata agent instances communicate with TCM using HTTPS protocol to prevent information theft and tampering.
* **Trusted environment**: In self-built mode, all data is transferred inside the user's server and networking environment, so there is no data leakage.



:::tip

If the network environment does not support access to the external network, you can deploy [Tapdata](https://tapdata.net/pricing.html) locally.

:::
