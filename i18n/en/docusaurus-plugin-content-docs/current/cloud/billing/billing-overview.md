# Billing Overview

This article introduces billing information such as billing items, billing methods and price descriptions in Tapdata Cloud.

## Billing method

Tapdata Cloud charges according to the **specifications** and **number** of Agent instances you subscribe to, you can get 1 Agent instance by completing account registration, and you can also choose to purchase more Agent instances by monthly, annual, consecutive monthly, and consecutive annual subscriptions to meet business needs:

- **One Month Only**: One-time purchase of one-month service, the subscription will not automatically renew after the expiration, and can be renewed manually.
- **One Year Only**: One-time purchase of one-year service, the subscription will not automatically renew after the expiration, and can be renewed manually.
- **Monthly**: Pay the monthly subscription fee, and automatically deduct the subscription fee for the next month before the due.
- **Annually**: Pay the subscription fee annually, and automatically deduct the subscription fee for the next year before the due.

:::tip

When choosing the recurring monthly/annual billing method, Tapdata Cloud automatically deducts the subscription fee for the next cycle on the expiration date of each period, and you can check the details of the charge in the user center.

:::

## Payment Methods

You can pay for Tapdata Cloud by credit card.

## Product Pricing

Please select the appropriate Agent specifications according to the amount of data and the number of tasks, the specifications are priced as follows, the unit is dollar($):

<table>
<thead>
  <tr>
    <th>Specifications</th>
    <th>One Month Only</th>
    <th>Monthly</th>
    <th>One Year Only</th>
    <th>Annually</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td>SMALL</td>
    <td colspan="4">Free (1 Agent Instance) </td>
  </tr>
  <tr>
    <td>LARGE</td>
    <td>116</td>
    <td>110</td>
    <td>1254</td>
    <td>1254</td>
  </tr>
  <tr>
    <td>XLARGE</td>
    <td>232</td>
    <td>220</td>
    <td>2508</td>
    <td>2508</td>
  </tr>
  <tr>
    <td>2XLARGE</td>
    <td>464</td>
    <td>441</td>
    <td>5016</td>
    <td>5016</td>
  </tr>
  <tr>
    <td>3XLARGE</td>
    <td>696</td>
    <td>661</td>
    <td>7524</td>
    <td>7524</td>
  </tr>
  <tr>
    <td>4XLARGE</td>
    <td>928</td>
    <td>882</td>
    <td>10032</td>
    <td>10032</td>
  </tr>
  <tr>
    <td>8XLARGE</td>
    <td>1857</td>
    <td>1764</td>
    <td>20065</td>
    <td>20065</td>
  </tr>
</tbody>
</table>




## Description of the Specification

Since the data flow is usually affected by various factors such as the load performance of the Agent's machine, network transmission delay, network bandwidth, and source/target database workload, the performance of the following tables is only for reference.

<table>
<thead>
  <tr>
    <th rowspan="2">Specifications</th>
    <th rowspan="2">Running Tasks</th>
    <th colspan="2">Host hardware recommendation ①</th>
    <th rowspan="2">Performance Reference (QPS) </th>
  </tr>
  <tr>
    <th>CPU cores</th>
    <th>RAM</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td>SMALL</td>
    <td>3</td>
    <td>1 core</td>
    <td>4 GB</td>
    <td>2,000</td>
  </tr>
  <tr>
    <td>LARGE</td>
    <td>5</td>
    <td>2 cores</td>
    <td>6 GB</td>
    <td>4,000</td>
  </tr>
  <tr>
    <td>XLARGE</td>
    <td>10</td>
    <td>4 cores</td>
    <td>10 GB</td>
    <td>8,000</td>
  </tr>
  <tr>
    <td>2XLARGE</td>
    <td>20</td>
    <td>8 cores</td>
    <td>19 GB</td>
    <td>16,000</td>
  </tr>
  <tr>
    <td>3XLARGE</td>
    <td>30</td>
    <td>12 cores</td>
    <td>28 GB</td>
    <td>24,000</td>
  </tr>
  <tr>
    <td>4XLARGE</td>
    <td>40</td>
    <td>16 cores</td>
    <td>37 GB</td>
    <td>32,000</td>
  </tr>
  <tr>
    <td>8XLARGE</td>
    <td>80</td>
    <td>32 cores</td>
    <td>72 GB</td>
    <td>64,000</td>
  </tr>
</tbody>
</table>




:::tip

① In order to ensure the maximum data flow performance, it is recommended that the machine deployed by the Agent (referred to as the **host** in the above table) has sufficient resources such as computing, storage and bandwidth. For more information, see [Install Agent](../quick-start/install-agent/README.md).

:::

