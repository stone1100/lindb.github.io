# 简介

import BrowserWindow from '@site/src/components/browser';

Admin Console 是 LinDB 提供的图形化界面，可用于监控集群状态，及查询集群中的数据。Admin Console 内置于 LinDB 的 Broker
节点中，无需独立部署。

:::tip
目前支持`dark`/`light`两种 UI 样式。
:::

<BrowserWindow>

![overview](/img/lindb/guide/admin_ui/overview.png)

</BrowserWindow>

以下列出了 Admin Console 的主要功能，可分别点击小节内的链接进一步了解详情。

## 集群状态

查看整个集群中 Broker、Storage 组件的运行状态及其所在主机的运行状态。

参阅[集群状态页面](/docs/lindb/reference/admin-ui/overview)了解更多详情。

## 数据查询

通过 [LinQL](/docs/lindb/reference/lin-ql) 来查询集群的数据，以及查看具体某个 [LinQL](/docs/lindb/reference/lin-ql) 的执行计划和执行状态统计。

参阅[数据查询页面](/docs/lindb/reference/admin-ui/search)了解更多详情。

## 数据浏览

通过 UI 点击流的方式查看集群中的数据，同时生成浏览数据对应的 [LinQL](/docs/lindb/reference/lin-ql) 。

参阅[数据浏览页面](/docs/lindb/reference/admin-ui/explore)了解更多详情。

## 监控

无需外部组件，即可对集群各组件进行监控。

- [Dashboard](/docs/lindb/reference/admin-ui/monitoring#dashboard)：提供丰富的 Dashboard 来监控集群中各组件的运行状态；
- [Replication](/docs/lindb/reference/admin-ui/monitoring#replication)：实时查看各副本通道的运行状态，包括`WAL`复制状态以及内存中写入状态；
- [Request](/docs/lindb/reference/admin-ui/monitoring#request)：实时查看当前进行执行的查询语句；
- [Log View](/docs/lindb/reference/admin-ui/monitoring#log-view)：实时浏览集群各组件节点上的日志文件；

## 元数据管理

当前集群元数据配置管理。

- [Storage](/docs/lindb/reference/admin-ui/metadata#storage)：管理集群中对应 Storage 集群配置；
- [Database](/docs/lindb/reference/admin-ui/metadata#database)：管理集群中对应的数据库配置；
- [Explore](/docs/lindb/reference/admin-ui/metadata#explore)：浏览集群中调度信息，以及各组件节点内存中的调度结果状态；
