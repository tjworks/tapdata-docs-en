# Use cases

### Database Modernization

With the development of database technology, modern databases that support more complex business processing have shifted from a centralized to a distributed architecture, and from SQL to NoSQL databases. With real-time synchronization and convergence technology from Tapdata Cloud, you can easily modernize your database to make your applications more secure, reliable, scalable, and manageable. Tapdata Cloud reduces complexity and increases agility, allowing you to focus on business innovation.

### Accelerate Full-text Searching

Traditional relational databases accelerate data retrieval by indexing, but cannot support the need for full-text data retrieval. Tapdata Cloud can synchronize data from relational databases to ElasticSearch, helping users to easily retrieve data in full text.


### No-dev Cache Update Method

In order to improve business efficiency and optimize user experience, it is common practice to introduce a cache layer in the business architecture to speed up access speed and read concurrency. However, because cache data cannot be stored permanently, cache abnormal exits may cause data loss, which affects business stability and reliability. The data synchronization function provided by Tapdata Cloud can help you realize real-time synchronization from business database to cached database, realize a lightweight cache update strategy, and make the application architecture more simple and safe.


### Downtime-free Database Migration

In order to ensure data consistency, traditional migration methods require stopping the writing of data to the source database during data migration, that is, the need for downtime migration. Depending on the amount of data and the network, the migration can take hours or even days, which can have a big impact on the business.

Tapdata Cloud provides you with a downtime-free migration solution that affects your business only when it switches from the source instance to the target instance and other times when your business can serve as normal, reducing downtime to the minute level. The entire migration process includes two stages: full data synchronization and incremental data synchronization. When entering the incremental data synchronization stage, the data of the source instance will be synchronized to the target instance in real-time. You can verify your business in the target database, and once verified, you can switch your business to the target database for a smooth migration.

### Read/Write Separation to Accelerate Access

For cross-regional/cross-border business, if the business is deployed only in a single region according to the traditional architecture, the access delay is very large and the user experience is poor when the user accesses the service cross-border. Through business deployment architecture and access logic adjustment, all write requests of users in all regions are routed back to the main business center, and the data of the main business center is synchronized to the sub-business center in real-time through Tapdata Cloud, and read requests of users in various regions are routed to the nearest sub-business center, thus avoiding remote access and accelerating business access speed.

### Horizontal Scaling for Reading Capacity

For scenarios with a large number of read requests, a single database instance may not be able to bear the full read pressure. You can use the real-time synchronization function of DFS to build read-only instances, shunt read requests to these read-only instances, realize the elastic expansion of read capacity, and share the pressure of the main database instance.

### Offsite Data Disaster Recovery

In order to avoid the possibility of a single point of business due to business availability, more and more enterprises are deploying their business on different regions/public clouds. To avoid service unavailability due to service failure at the Availability Zone level, you can build off-site Disaster Preparedness Centers to improve service availability. The data of the disaster recovery center and the business center are synchronized in real-time through DFS to ensure data consistency. When the business center fails, you can switch business traffic directly to the Disaster Preparedness Center to quickly restore service.

### Geo-redundancy

With the rapid development of the business and the growth of the number of users, if the business is deployed in a single region, it may face the following problems:

- The user is widely distributed in the geographical location, and the user access delay is higher in the geographical distance, which affects the user experience.
- The capacity of the infrastructure of a single geography limits business expansion, such as power supply capacity, network bandwidth building capacity, and so on.

To solve the above problems, you can use Tapdata Cloud to synchronize data in real time between multiple business units built in the same city/off-site to ensure global data consistency. When any unit fails, just switch the traffic to other available units automatically, effectively guaranteeing the high availability of the service.