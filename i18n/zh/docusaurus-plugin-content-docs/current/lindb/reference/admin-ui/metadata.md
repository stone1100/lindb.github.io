# Metadata

import BrowserWindow from '@site/src/components/browser';

当前集群元数据配置管理。

## Broker

在多机房/Region模式下，当前集群下已经注册的`Broker`集群。

<BrowserWindow>

![broker list](/img/lindb/guide/admin_ui/broker_list.png)

</BrowserWindow>

注册相应的`Broker`配置信息。

<BrowserWindow>

![create broker](/img/lindb/guide/admin_ui/create_broker.png)

</BrowserWindow>

## Logic Database

当前集群下逻辑数据库列表。

<BrowserWindow>

![logic database list](/img/lindb/guide/admin_ui/list_logic_database.png)

</BrowserWindow>

创新或者修改对应逻辑数据库配置信息。

<BrowserWindow>

![create logic database](/img/lindb/guide/admin_ui/create_logic_database.png)

</BrowserWindow>

## Storage

当前集群下已经注册的`Storage`集群，每个`Storage`在启动的时候会完成自注册，正常情况不需要用户手动进行注册。

<BrowserWindow>

![storage list](/img/lindb/guide/admin_ui/storage_list.png)

</BrowserWindow>

当`Storage`自注册失败时，可以通过手动方式注册相应的`Storage`配置信息。

<BrowserWindow>

![create storage](/img/lindb/guide/admin_ui/create_storage.png)

</BrowserWindow>

## Database

当前集群下数据库列表。

<BrowserWindow>

![database list](/img/lindb/guide/admin_ui/database_list.png)

</BrowserWindow>

创新或者修改对应数据库配置信息。

<BrowserWindow>

![create database](/img/lindb/guide/admin_ui/create_database.png)

</BrowserWindow>

## Explore

浏览当前集群`ETCD`中的各类型的配置信息，可以通过`Compare`按钮来对应内存中各状态机中的信息。

<BrowserWindow>

![metadata explore](/img/lindb/guide/admin_ui/metadata_explore.png)

</BrowserWindow>

查看与内存状态机中信息的对比结果，是否存在状态机中的信息与配置不一致情况。

<BrowserWindow>

![metadata compare](/img/lindb/guide/admin_ui/metadata_explore_compare.png)

</BrowserWindow>
