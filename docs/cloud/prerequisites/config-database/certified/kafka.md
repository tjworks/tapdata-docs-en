# Kafka

Apache Kafka is an open-source distributed event streaming platform that is utilized by numerous companies for a variety of purposes, including high-performance data pipelines, streaming analytics, data integration, and crucial applications.

In order to establish a Kafka connection and effectively utilize the data source for tasks related to data replication or development, it is necessary to complete the preparation outlined in the following article. Once the necessary preparations have been completed, you can proceed to create a connection and seamlessly utilize the data source for your intended purposes.

## Supported Versions

Kafka 2.3.x

## Limitations

* Only the message format of the JSON Object string is supported, for example: `{"id":1, "name": "Jack"}`.
* The message push implementation is At least once, and the consumer side needs to design idempotence.



## Description of the Consumption of Kafka

In the subsequent configuration of data replication/data development tasks, you can choose the synchronization method for the data, and the corresponding consumption instructions are as follows:

* **Only Full Data Synchronization**: You can choose to subscribe from the earliest offset of each partition in the Topic. If there is a previous message consumption record, you have the option to revert to the previous offset and resume message consumption from that point.

* **Only Incremental Data Synchronization**: You can subscribe to the topic from the latest offset of each partition. In the event of a previous message consumption record, you have the option to restore to the previous offset and commence message consumption from that point.

* **Full + Incremental Data Synchronization**: The subscription process will skip the full sync phase and begin directly from the incremental phase. If a full synchronization is not performed, the subscription will start from the earliest offset of each partition in the Topic. 

  However, if a full synchronization has occurred, the subscription will start from the latest offset of each partition in the Topic. In the presence of a previous message consumption record, it will be restored to the previous offset for resuming message consumption.

## Preparations

1. Log in to Kafka's server.

2. (Optional) If you use Kafka as the target database, it is recommended to create the topic to store the data in advance. If it is automatically created by Tapdata Cloud, the number of partitions and copies is 1.

   The following example creates a topic named kafa_demo_topic, which has a number of partitions and copies of 3:

   ```bash
   bin/kafka kafka-topics.sh --create --zookeeper localhost:2181 --replication-factor 3 --partitions 3 --topic kafa_demo_topic
   ```

   For more information, see [Kafka Quick Start](https://kafka.apache.org/23/documentation.html#quickstart).

3. Confirm the encryption method, if the kerberos authentication is enabled, you also need to prepare the key, configuration and other files.





## Next step

[Connect to Kafka](../../../user-guide/connect-database/certified/connect-kafka.md)
