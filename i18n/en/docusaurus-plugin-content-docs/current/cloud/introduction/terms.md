# Terminology

This article introduces common terms used in Tapdata Cloud to help you quickly understand product and feature concepts.

## Full data synchronization

In other words, database migration/database cloning, in the data flow task, the full migration of data between various database-level data sources is suitable for business scenarios such as instance data migration, data up and down cloud migration, database split and expansion.

## Incremental data synchronization

In the data flow task, the real-time synchronization of data through a specific association relationship or processing between multiple data sources is suitable for meeting the scenarios of user analysis, processing, disaster recovery and so on without affecting user business.

## Data source

Sources of data connected externally to the Tapdata system. Currently supported sources mainly refer to databases, followed by File, GridFS, RestAPI, Dummy, Custom, UDP, Cache and other types.

## Source Connection

Refers to the connection configuration that can access the source data object and query the data in the data synchronization task.

## Destination Connection

Refers to the connection configuration that can access the target data object and operate the data in the data synchronization task.

## Tapdata Agent

Refers to the execution program that runs the synchronization task, and is responsible for obtaining the task from the management side, connecting the source data source, performing data conversion, and outputting to the target data source.

## TCM Management Side

The Tapdata Cloud management console allows users to define their own orchestration synchronization tasks and issue synchronization tasks to synchronization instances.