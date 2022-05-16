# 总览

## LinDB 是什么？

LinDB 诞生于饿了么，从2016年开始服务于整个技术中心，存储监控系统中的时间序列指标，包括网络、硬件、中间件、容器、网关、框架、业务、前端等监控指标，实现了海量数据的存储与计算平台。

从2019年年中开始，LinDB 以Go语言进行重构开源。现在LinDB是一个完全由社区进行维护的开源项目。

## 特性

- 足够简单，包括使用及可运维性，只依赖ETCD，一个二进制文件可以选择单机和分布式运行；
- 支持分布式集群，拥有良好的水平拓展能力；
- 支持多副本，保证高可用，在仅剩下一个副本的场景下仍然能对外提供服务；
- 支持多IDC，支持单机房写入、多机房聚合查询;
- 最终一致性，追求低延时、可拓展性的必然选择；
- 有一定的自监控能力，快速FailOver；
- 有一定的自治理能力，防御恶意用户；

## 架构

LinDB 分布式时间序列数据库采用了计算、存储分离的设计，分为3个大模块，每个模块之间互相通信。

![simple_architecture](../../assets/images/design/simple_architecture.jpg)

这三个模块分别是 Broker、Storage、ETCD

![architecture](../../assets/images/design/architecture.png)

## 适用场景
LinDB 适合监控领域下的数值时间序列记录场景，适合IaaS、PaaS、SaaS层的监控，对多维数据的支持使得指标具备较强的表达力。

LinDB 的设计目标是高可用、高性能、为查询优化、弱依赖外部组件，适合中大型规模互联网企业使用，解决海量数据尺度下的各种监控系统痛点。

## 不适用场景

LinDB 仅支持记录数值型时序数据，时间精度只支持到秒级。如果有更高时间精度、记录文本型数据的需求，那么LinDB并不是一个好选择。