# Kafka

Apache Kafka is an open-source distributed event streaming platform that is utilized by numerous companies for a variety of purposes, including high-performance data pipelines, streaming analytics, data integration, and crucial applications.

In order to establish a Kafka connection and effectively utilize the data source for tasks related to data replication or development, it is necessary to complete the preparation outlined in the following article. Once the necessary preparations have been completed, you can proceed to create a connection and seamlessly utilize the data source for your intended purposes.

## Supported Versions

Kafka 2.3.x



## Limitations

* Only the message format of the JSON Object string is supported, for example: `{"id":1, "name": "Jack"}`.
* The message push implementation is At least once, and the consumer side needs to design idempotence.



## Preparations

1. Login to Kafka's server and complete the process of creation of topic. For more information, see [Kafka Quick Start](https://kafka.apache.org/23/documentation.html#quickstart).
2. Confirm the encryption method, if the kerberos authentication is enabled, you also need to prepare the key, configuration and other files.



## Next step

 [Connect to Kafka](../../../user-guide/connect-database/certified/connect-kafka.md)
