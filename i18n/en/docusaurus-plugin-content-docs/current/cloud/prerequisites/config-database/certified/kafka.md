# Kafka

Apache Kafka is an open-source distributed event streaming platform used by thousands of companies for high-performance data pipelines, streaming analytics, data integration , and mission-critical applications. 

Before you can create a Kafka connection, you need to complete the preparation following this article, and you can create a connection and use the data source in a data replication/development task.

## Supported Versions

Kafka 2.3.x



## Limitations

* Only the message format of the JSON Object string is supported, for example: `{"id":1, "name": "Jack"}`.
* The message push implementation is At least once, and the consumer side needs to design idempotence.



## Preparations

1. Log in to Kafka's server, and complete the creation of the topic. For more information, see [Kafka Quick Start](https://kafka.apache.org/23/documentation.html#quickstart).
2. Confirm the encryption method, if the kerberos authentication is enabled, you also need to prepare the key, configuration and other files.



## Next step

 [Connect to Kafka](../../../user-guide/connect-database/certified/connect-kafka.md)
