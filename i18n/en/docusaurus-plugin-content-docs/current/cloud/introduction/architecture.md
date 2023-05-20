# Architecture and Workflow

Tapdata Cloud components include Tapdata cloud manager and Tapdata agent:

* **Tapdata Cloud Manager** (TCM): Responsible for installing and configuring agents, as well as monitoring the status of tasks.
* **Tapdata Agent:** Obtain task information from the Task Control Manager (TCM), processing and converting the data to be sent to the target, and reporting the task status back to the TCM during the execution of the task.

![](../images/architecture.png)



Tapdata Cloud employs a range of cyber-security measures to ensure the protection and security of user data and information.

* **One-way Connection**: The Tapdata Agent instance does not actively expose network information, and only connects to the TCM management service to obtain task information and report status information.
* **HTTPS Protocol**: Tapdata Agent instances establish communication with TCM using the HTTPS protocol, ensuring protection against information theft and tampering.
* **Trusted Environment**: In self-built mode, all data is transmitted exclusively within the user's server and networking environment, ensuring that there is no risk of data leakage.



:::tip

If the network environment does not support access to the external network, you can deploy [Tapdata](https://tapdata.net/pricing.html) locally.

:::
