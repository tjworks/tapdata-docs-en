---
sidebar_position: 1
slug: /
---

# What is TapData?

TapData is a modern data platform designed for all your data applications that require low latency, fresh data. 

## Where would you use TapData 

Some of the most common applications enabled by TapData

- **Setup real time data pipelines** between different databases, as an alternative to Kafka based ETL pipelines. 


- **Build real time data warehouse** to support real time analytics, dashboards to assist in time decision making. 

- **Build a centralized data service** by connecting and consolidating data from various operational systems, then serve multiple applications from a single location with a unified access method and control.  

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

  If you are the ones who don't like SQL and writing code to get your data. Simple mouse drag-and-drop actions can quickly complete table renaming and other transformation rules. Additionally, UDF (User-Defined Functions) based on Javascript are supported.
 
## New to Tapdata?

No worries, with TapData's GUI , follow our [Quick Start](quick-start/README.md) tutorial, and you can easily get started in just a few minutes. Moreover, we have prepared a wealth of tutorials to help you quickly meet your data flow requirements.


:::tip

While browsing the documentation, please pay attention to the "**Applicable to**" badge at the top of each document to ensure the information you read corresponds to the version you have deployed.

:::


## See also

- [Product Architecture and Workflow](introduction/architecture.md)
- [Features](introduction/features.md)
- [Use Cases](introduction/use-cases.md)
- [Supported Databases](introduction/supported-databases.md)
- [FAQ](faq/README.md)
