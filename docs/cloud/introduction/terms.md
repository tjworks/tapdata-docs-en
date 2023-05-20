# Terminology

This article introduces common terms used in Tapdata Cloud to help you quickly understand product and feature concepts.

## Full data synchronization

Database migration or cloning, within the data flow task, is ideal for business scenarios involving complete data migration between different library-level data sources. This includes instances where data needs to be migrated, moved up or down the cloud, or when databases need to be split and expanded.

## Incremental data synchronization

In the data flow task, the real-time synchronization of data among multiple data sources through specific association relationships or processing is suitable for meeting user scenarios such as data analysis, processing, and disaster recovery without impacting user business operations.

## Data source

The data sources that can be connected to the Tapdata system from external sources include databases, and in the future, there are plans to gradually expand the support for other types such as files, GridFS, RestAPI, Dummy, Custom, UDP, Cache, and more.

## Source Connection

Refers to the connection configuration that can access the source data object and query the data in the data synchronization task.

## Destination Connection

Refers to the connection configuration that can access the target data object and operate the data in the data synchronization task.

## Tapdata Agent

Refers to the execution program that runs the synchronization task, and is responsible for obtaining the task from the management side, connecting the source data source, performing data conversion, and outputting to the target data source.

## TCM Management Side

The Tapdata Cloud management console enables users to define custom orchestration synchronization tasks and deploy these tasks to synchronization instances for execution.