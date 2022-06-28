# 简介

## LinDB 是什么？

LinDB 是一款高性能开源分布式时序数据库，支持多副本，具有良好的水平扩展能力，主要运行于物联网、工业互联网、IT 运维监控等领域。

LinDB 设计目标是高可用、高性能、为查询优化、弱依赖外部组件，适合中大型规模互联网企业使用，解决海量数据下的指标存储分析的痛点。

## 主要特性

LinDB 的主要特性如下：
- 足够简单，包括使用及可运维性，只依赖 ETCD，一个二进制文件可以选择单机和分布式运行；
- 支持分布式集群，拥有良好的水平扩展能力；
- 支持多副本，保证高可用，在仅剩下一个副本的场景下仍然能对外提供服务；
- 支持多IDC，支持单机房写入，多机房聚合查询;
- 最终一致性，追求低延时、可拓展性的必然选择；
- 有一定的自监控能力，快速 FailOver；
- 有一定的自治理能力，防御恶意用户；

## 架构

LinDB 分布式时间序列数据库采用了计算、存储分离的设计，分为3个大模块，每个模块之间互相通信，分别为 Broker、Storage、ETCD。
- Compute Layer: Broker;
- Storage Layer: Storage;
- Metadata/Schedule Layout: ETCD;

![architecture](../../assets/images/design/architecture.png)

## 适用场景

1. IT 运维监控

LinDB 适合监控领域下的数值时间序列记录场景，适合 IaaS、PaaS、SaaS 及应用层的监控指标数据的存储分析，对多维数据的支持使得指标具备较强的表达力，更方便地监控运行状况和优化实例使用情况等。

2. 物联网

LinDB 使您能够更轻松快捷地分析物联网应用程序生成的时间序列数据。例如，智能家居设备制造商可以使用 LinDB 存储从设备传感器收集运动或温度数据，帮助消费者更好的了解设备的运行状况。

## 不适用场景

LinDB 目前仅支持记录数值型时序数据，时间精度支持到秒级。如果有更高时间精度、或者记录文本型数据的需求，那么 LinDB 并不是一个很好地选择。