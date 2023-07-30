# Connect to Kafka

Apache Kafka is a distributed event store and stream-processing platform. Tapdata Cloud supports the creation of data pipelines with Apache Kafka as the source and target database. 

The following article provides a detailed guide on how to add Kafka to Tapdata Cloud. It walks you through the process of integrating Kafka into Tapdata Cloud, allowing you to leverage its capabilities for building efficient data pipelines.

## Preparations

[Preparations for Kafka](../../../prerequisites/config-database/certified/kafka.md)

## Procedure

1. Log in to [Tapdata Cloud](https://cloud.tapdata.io/).

2. In the left navigation panel, click **Connections**.

3. On the right side of the page, click **Create connection**.

4. In the pop-up dialog, select **Kafka**.

5. Complete the data source configuration according to the following instructions.

   ![](../../../images/kafka_connection.png)

   * Connection Information Settings
      * **Connection name**: Fill in a unique name that has business significance.
      * **Connection type**: Supports Kafka as a source or target database.
      * **DB host**: Kafka connection address, including the IP address and port number, separated by a colon (:). The format should be as follows: `IP_Address:Port_Number`, `113.222.22.***:9092`. Please replace the appropriate IP address of your Kafka broker, and use the corresponding port number for Kafka communication (usually 9092).
      * **Topic expression**: In Kafka, topics support regular expressions and have a maximum length of 256 characters. For more information, see [Kafka Quick Start](https://kafka.apache.org/23/documentation.html#quickstart).
      * **Kerberos authentication**: If authentication is enabled in Kafka, you need to turn on the switch. Afterwards, you should upload and configure the required key and authentication information to establish a secure connection.
      * **User name**,**Password**,**Encryption**: If password authentication is enabled in Kafka, you will be required to provide the account and password credentials. Additionally, you should choose the encryption option to ensure a secure connection.
   * Advanced Settings
      * **Ignore non-JSON Object format messages**: If a message in the specified format is encountered in the future and it is not ignored, the pull operation will be terminated.
      * **ACK confirmation mechanism**: Select the appropriate option based on your business requirements:
        * Do not confirm
        * Write to master partitions
        * Write to most ISR partitions (default)
        * Write to all ISR partitions.
      * **Message compression type**: When dealing with large message volumes, enabling compression can significantly enhance transmission efficiency. Supports gzip, snappy, lz4, and zstd. By leveraging compression, you can effectively reduce the size of the messages, resulting in improved data transfer efficiency.
      * **Ignore push message exception**: Once the switch is turned on, the system will continue to record the offset of the relevant message; however, it will not push any further messages. It's important to note that this approach carries a risk of potential data loss since the system will not deliver subsequent messages.
      * **Agent settings**: Defaults to **Platform automatic allocation**, you can also manually specify an agent.
      * **Model load time**: If there are less than 10,000 models in the data source, their information will be updated every hour. But if the number of models exceeds 10,000, the refresh will take place daily at the time you have specified.

6. Click **Connection Test**, and when passed, click **Save**.

   :::tip

   If the connection test fails, follow the prompts on the page to fix it.

   :::


