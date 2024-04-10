# Use cases

### Database Modernization

As database technology advances, modern databases have evolved from centralized to distributed architectures and shifted from SQL to NoSQL databases to support complex business processing. With Tapdata's real-time synchronization and convergence technology, database modernization becomes effortless, resulting in more secure, reliable, scalable, and manageable applications. Tapdata simplifies complexity, enhances agility, and enables you to concentrate on business innovation.

### Accelerate Full-text Searching

Traditional relational databases accelerate data retrieval by indexing, but cannot support the need for full-text data retrieval. Tapdata offers a solution by enabling seamless data synchronization from relational databases to Elastic-Search, empowering users to effortlessly retrieve data using full-text search capabilities.

### No-dev Cache Update Method

To enhance business efficiency and optimize user experience, it is a common practice to introduce a cache layer in the business architecture, improving access speed and read concurrency. However, as cache data cannot be permanently stored, abnormal cache exits can result in data loss, impacting business stability and reliability. Tapdata's data synchronization function addresses this challenge by enabling real-time synchronization from the business database to the cached database. This facilitates a lightweight cache update strategy, simplifies the application architecture, and ensures both simplicity and safety.

### Seamless Database Migration with Zero Downtime

Traditional migration methods often require stopping data writing to the source database, resulting in downtime during the migration process to ensure data consistency. This downtime can last for hours or even days, significantly impacting business operations.

Tapdata offers a downtime-free migration solution that minimizes the impact on your business. The downtime only occurs when switching from the source instance to the target instance, and the rest of the time your business can continue to operate normally, with downtime reduced to the minute level. The migration process consists of two stages: full data synchronization and incremental data synchronization. During the incremental data synchronization stage, data from the source instance is continuously synchronized to the target instance in real-time. You can validate your business in the target database and once verified, smoothly switch your operations to the target database for a seamless migration.

### Accelerating Access with Read/Write Separation

In cross-regional/cross-border businesses, relying on a single-region deployment in traditional architectures leads to significant access delays and poor user experiences when users access services from different regions. To address this, Tapdata optimizes the deployment architecture and adjusts access logic. All write requests from users across regions are directed to the main business center, while real-time synchronization via Tapdata ensures that the data is replicated to the respective sub-business centers. Furthermore, read requests from users in various regions are routed to the nearest sub-business center, eliminating remote access and greatly enhancing the speed of business access.

### Empowering Reading Capacity with Horizontal Scaling

In scenarios with a high volume of read requests, a single database instance may not be able to handle the entire read load effectively. To address this, you can utilize the real-time synchronization feature of DFS (Distributed File System) to establish read-only instances. By redirecting read requests to these read-only instances, you can achieve elastic scalability of the read capacity while reducing the load on the primary database instance.

### Offsite Data Disaster Recovery

In order to mitigate the risk of business unavailability resulting from service disruptions, many enterprises are adopting a multi-region or multi-cloud deployment strategy. By spreading their business across different regions or public clouds, they can minimize the impact of any single point of failure. To further enhance service availability and mitigate risks at the Availability Zone level, establishing off-site Disaster Recovery Centers is a recommended approach. These centers serve as backup locations and are equipped to quickly restore service in the event of a failure at the primary business center. Real-time data synchronization through DFS ensures data consistency between the disaster recovery center and the primary business center.

You can seamlessly redirect the business traffic to the Disaster Recovery Center, enabling a swift restoration of services. This proactive measure helps minimize downtime and ensures uninterrupted service delivery.

### Geo-redundancy

With the rapid development of the business and the growth of the number of users, if the business is deployed in a single region, it may face the following problems:

- The user is widely distributed in the geographical location, and the user access delay is higher in the geographical distance, which affects the user experience.
- The capacity of the infrastructure of a single geography limits business expansion, such as power supply capacity, network bandwidth building capacity, and so on.

To solve the above problems, you can use Tapdata to synchronize data in real time between multiple business units built in the same city/off-site to ensure global data consistency. When any unit fails, just switch the traffic to other available units automatically, effectively guaranteeing the high availability of the service.