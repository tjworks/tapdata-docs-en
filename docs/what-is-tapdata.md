---
sidebar_position: 1
slug: /
---

# What is TapData?

TapData Live Data Platform (or TapData for short) is a modern and innovative data platform designed to solve many of the real time data use cases. 

You can use it as a **real time data pipeline** tool, as an alternative to Kafka based ETL pipelines, except without having to write any java code or maintaining Kafka. 

You can use it as a **real time data warehouse**, when combined with a data warehouse storage, such as Clickhouse. 

You can use it as a **real time data hub**, with a MongoDB as data store, you may sync all your silo-ed data into a centralized data platform and serve multiple applications from one single location, in an unified way. 

## How It Works

<img src="images/how-it-works-en.PNG" style="zoom: 50%;" />

- First, connect to your existing application databases using built-in connectors. You need to prepare your network access and credentials to the databases, and some configuration of your databases may be required. 
- TapData will monitor your database's log files(redo log, binlog etc) and capture the changes (inserts/updates/deletes) 
- TapData will turn the change events into an event stream with the full record as the payload
- You can then send the record to Kafka, another database or a data warehouse
- You can also store the data in the TapData platform to serve data queries from your applications using APIs


## Why Choose Tapdata

Compared to traditional data migration/synchronization tools, Tapdata offers a feature-rich, easy-to-use, secure, and reliable data flow service. It also supports instant API publishing to enhance data development efficiency.

* **[Rich Database Support](introduction/supported-databases.md)**

  Supports mainstream databases, including commercial databases, open-source databases, cloud databases, SaaS platform data sources, file data sources, and allows for custom data sources.

* **[Reliable Data Consistency](user-guide/data-pipeline/verify-data.md)**

  Ensures high consistency between target data and source data through various proprietary technologies, supports multiple verification methods, and meets the stringent requirements of production environments.

* **[Low-latency Collection Performance](user-guide/advanced-settings/share-mining.md)**

  Based on proprietary CDC log parsing technology, it enables real-time data collection with zero intrusion and virtually no impact on the source database. Every new piece of data that enters the platform is responded to, computed, processed, and written into the target table within seconds. Additionally, it supports sharing incremental data to avoid repeated reads of source database incremental logs.

* **[Unified Real-Time Data Hub](user-guide/real-time-data-hub/README.md)**

  Based on the concept of layered data governance, it synchronizes data scattered across different business systems to a unified platform cache layer. This minimizes the impact of data extraction on business and provides foundational data for subsequent data processing and business, thus building a consistent, real-time data platform and bridging data silos.

* **[No-code Operation Page](user-guide/workshop.md)**

  Say goodbye to SQL and coding. Simple mouse drag-and-drop actions can quickly complete table renaming and other transformation rules. Additionally, UDF (User-Defined Functions) based on Javascript are supported.

## Product Pricing

Tapdata offers two deployment modes, **Cloud**, **Enterprise** and **Community** , to meet your diversified needs:

| Product         | Applicable Scenarios                                                                                                                                                                                                                                                                                                                                  | Pricing Details                                               |
|-----------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------|
| Tapdata Cloud   | Using the SaaS (Software as a Service) model, sign up for a [Tapdata Cloud](https://cloud.tapdata.net/console/v3/) account for use. Suitable for scenarios requiring rapid deployment and low initial investment, helping you focus more on business development rather than infrastructure management.                                               | Provides 1 SMALL specification Agent instance for free (semi-managed mode). You can also subscribe to higher specifications or more Agent instances according to business needs. For more information, see [Product Billing](billing/billing-overview.md). |
| Tapdata Enterprise | Supports deployment to local data centers. Suitable for scenarios with strict requirements on data sensitivity or network isolation, such as financial institutions, government departments, or large enterprises that want full control over their data.                                                                                             | Pay the subscription fee annually based on the number of deployed server nodes. Before purchasing, you can click “[Apply for a Trial](https://tapdata.net/tapdata-on-prem/demo.html)” and a Tapdata engineer will contact you and assist with the trial. For more information, see [Product Pricing](https://tapdata.net/pricing.html). |
| Tapdata Community | An open-source data integration platform that provides basic data synchronization and transformation capabilities. This helps you quickly explore and implement data integration projects. As your project or business grows, you can seamlessly upgrade to Tapdata Cloud or Tapdata Enterprise to access more advanced features and service support. | [Open Source](https://github.com/tapdata/tapdata) |

## New to Tapdata?

No worries, with Tapdata's graphical operation platform, follow our [Quick Start](quick-start/README.md) tutorial, and you can easily get started in just a few minutes. Moreover, we have prepared a wealth of tutorials to help you quickly meet your data flow requirements.

:::tip

While browsing the documentation, please pay attention to the "**Applicable to**" badge at the top of each document to ensure the information you read corresponds to the version you require.

:::


## See also

- [Product Architecture and Workflow](introduction/architecture.md)
- [Features](introduction/features.md)
- [Use Cases](introduction/use-cases.md)
- [Supported Databases](introduction/supported-databases.md)
- [FAQ](faq/README.md)
