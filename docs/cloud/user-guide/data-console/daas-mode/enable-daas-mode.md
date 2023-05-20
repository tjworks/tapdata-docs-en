# Enable Data Service Platform Mode

Due to digital transformation, data islands have become the main obstacle, and business demand for data is increasing. Traditional data delivery has become a bottleneck due to its long cycle and large resource investment. How to quickly open up data flow pipeline and explore data value has become a key factor for enterprise competitiveness.

With Tapdata Cloud's Data Service Platform Model, you can synchronize data scattered in different business systems to a unified platform cache layer, which can provide basic data for subsequent data processing and business, thus building a consistent, real-time data platform and connecting data silos.



## Data Service Platform Introduction

With the increase in the tasks carried by the source database, in order to minimize the impact of data extraction on the source database and conform to the organization's concept of data hierarchical governance, Tapdata Cloud stratifies the data service platform according to the data flow order as follows:

![Data Service Platform Architecture](../../../images/ldp_architecture.png)

| Hierarchy | Description |
| -------------------- | ------------------------------------------------------------ |
| **Source Data Layer** | Tapdata Cloud abstracts data sources from different business systems into a unified data source layer, which is the first step to connect data silos. For more information, see [Connect Data Sources](../../connect-database/README.md).  |
| **Data Cache Layer** | By synchronizing the table of the source database to the Data Cache Layer in advance, the data can be directly provided to the business directly through the Foundation Data Layer, which avoids directly reading/manipulating the data of the source database (such as union tables) during data processing, which can greatly reduce the impact on the business of the source database.  |
| **Data Processing Layer** | If you need to deeply customize the data processing/operation (such as generating a wide table), you can drag the data table of the Data Cache Layer to the Data Processing Layer to operate, so as to generate the model data for the final business.  |
| **Data Targets and Service Layer** | Tapdata Cloud aggregates and presents data sources that support being used as targets, so that you can provide the processed data to the business, so as to build a unified data service platform for the enterprise.  |



## Preparations

In the Data Service Platform Mode, we need to prepare a self-hosted MongoDB database as a data repository for the Data Cache Layer and Data Processing Layer:

1. Prepare a MongoDB database (4.0 and above), and see the [MongoDB official website](https://www.mongodb.com/docs/manual/administration/install-on-linux/) for information on deployment.

   :::tip

   In order to ensure high service availability, MongoDB is recommended to use replica/cluster architecture, and to reserve enough storage space based on the data size of the Source Data Layer.

   :::

2. [Connect to MongoDB Database](../../connect-database/certified/connect-mongodb.md)

## Procedure

Tapdata Cloud is in [Data Integration Mode](../etl-mode/README.md) by default, and next we'll introduce how to enable Data Service Platform Mode.

1. Log in to [Tapdata Cloud](https://cloud.tapdata.io/).

2. In the left navigation panel, click **Data Console**.

3. On the right side of the page, click the ![setting_icon](../../../images/setting_icon.png) icon.

4. Choose **Data Service Platform**, and then set up the storage engine used by the Data Cache Layer/Data Processing Layer, that is, the MongoDB data source we set up in the preparatory work.

   ![Enable Data Service Platform Mode](../../../images/enable_daas_mode.png)

   :::tip

   The storage engine currently only supports self-hosted MongoDB database, and once selected and saved, cannot be modified later.

   :::

5. By clicking **Save**, the page will be categorized based on the [hierarchy](daas-mode-dashboard.md) we covered earlier.



