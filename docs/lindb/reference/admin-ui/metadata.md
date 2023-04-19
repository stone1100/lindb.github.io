# Metadata

import BrowserWindow from '@site/src/components/browser';

Cluster metadata configuration management.

## Broker

For the `Broker` cluster that has been registered under multiple IDCs/Regions mode.

<BrowserWindow>

![broker list](/img/lindb/guide/admin_ui/broker_list.png)

</BrowserWindow>

Register `Broker` cluster.

<BrowserWindow>

![create broker](/img/lindb/guide/admin_ui/create_broker.png)

</BrowserWindow>

## Logic Database

Logic Databases in Cluster

<BrowserWindow>

![logic database list](/img/lindb/guide/admin_ui/list_logic_database.png)

</BrowserWindow>

Update or edit configuration of corresponding logic database

<BrowserWindow>

![create logic database](/img/lindb/guide/admin_ui/create_logic_database.png)

</BrowserWindow>

## Storage

For the `Storage` cluster that has been registered, each `Storage` node will do
self-registration when it's started, users doesn't need to register manually.

<BrowserWindow>

![storage list](/img/lindb/guide/admin_ui/storage_list.png)

</BrowserWindow>

When the `Storage` self-registration fails, you can perform manual registration.

<BrowserWindow>

![create storage](/img/lindb/guide/admin_ui/create_storage.png)

</BrowserWindow>

## Database

Databases in Cluster

<BrowserWindow>

![database list](/img/lindb/guide/admin_ui/database_list.png)

</BrowserWindow>

Update or edit configuration of corresponding database

<BrowserWindow>

![create database](/img/lindb/guide/admin_ui/create_database.png)
</BrowserWindow>

## Explore

Browse each configuration of current cluster in `ETCD`, click the `Compare` button to
view state machine in memory.

<BrowserWindow>

![metadata explore](/img/lindb/guide/admin_ui/metadata_explore.png)

</BrowserWindow>

Check the comparison results with the information in the memory state machine,
it's handy to check whether the information in the state
machine is inconsistent with configuration.

<BrowserWindow>

![metadata compare](/img/lindb/guide/admin_ui/metadata_explore_compare.png)

</BrowserWindow>
