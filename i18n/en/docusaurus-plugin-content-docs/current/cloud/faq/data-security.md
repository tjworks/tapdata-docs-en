# Data Security and Network Configuration

This article lists common problems related to data security and network configuration.

### How does data flow when using Tapdata Cloud?

The data flow is done by the Tapdata Agent installed on your local machine, which is the execution instance of the Tapdata Cloud data synchronization service. Tapdata Cloud is only responsible for configuring, distributing, and monitoring synchronization tasks, and only communicating with Agent for the scheduling information.

![](../images/architecture.png)



### When synchronizing data, does Tapdata Cloud retain user data?

No, the data will not be uploaded or saved to the Tapdata Cloud during synchronization, it will only pass through the Agent you deployed.



### How do I synchronize data without port mapping?

External network access is only required for the Tapdata Agent.



### There is no fixed IP address for the source database, how can it be used?

You can install Tapdata Agent locally, use a private address, and deploy Tapdata Agent to the source database without public IP.



