# Features

This article introduces the features of Tapdata Cloud to help you quickly understand its core capabilities.

## Data Replication

Tapdata Cloud offers support for both full data synchronization and real-time incremental data synchronization. Tapdata Cloud can help you to quickly achieve real-time synchronization between the same/heterogeneous data sources, which is suitable for data migration/synchronization, data disaster recovery, reading performance expansion, and other [business scenarios](use-cases.md).

![Data Replication Workflow](../images/features_data_copy.png)



## Data transformation

Aiming at complex data processing needs, Tapdata Cloud supports a variety of [processing nodes](../user-guide/data-development/process-node.md) between data sources based on data replication capabilities. These nodes provide advanced data processing capabilities such as data splitting, data splitting, field addition, and deletion, and shared mining.

![Data Transformation Workflow](../images/features_data_dev.png)



## Data as a Service (DaaS)

With Tapdata Cloud's [Data Service Platform Model](../user-guide/data-console/daas-mode/enable-daas-mode.md), you can synchronize data scattered in different business systems to a unified platform cache layer, which can provide basic data for subsequent data processing and business, avoid the performance impact of directly reading/manipulating the source database. This helps create a consistent, real-time data platform and connects disparate data silos.

![Data Service Platform Architecture](../images/ldp_architecture.png)



## Supported sources and targets

Tapdata Cloud supports rich data sources, as detailed in [Supported Data Sources](supported-databases.md).

