/*
Licensed to LinDB under one or more contributor
license agreements. See the NOTICE file distributed with
this work for additional information regarding copyright
ownership. LinDB licenses this file to you under
the Apache License, Version 2.0 (the "License"); you may
not use this file except in compliance with the License.
You may obtain a copy of the License at
    http://www.apache.org/licenses/LICENSE-2.0
 
Unless required by applicable law or agreed to in writing,
software distributed under the License is distributed on an
"AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, either express or implied.  See the License for the
specific language governing permissions and limitations
under the License.
*/
import React from "react";
import Layout from "@site/src/theme/Layout";
import {
  Browser,
  Card,
  Header,
  Icon,
  TypingEffectCodeBlock,
  Section,
} from "@site/src/components";
import Heading from "@theme/Heading";
import styles from "./lindb.module.scss";
import Link from "@docusaurus/Link";
import { Products } from "@site/src/constants/product";

const sqls = [
  {
    sql: `# create database
CREATE DATABASE system_monitoring 
WITH ( numOfShard: 1, 
  replicaFactor: 1, 
  behead: 1h, 
  ahead: 2h) 
ROLLUP ( 
  (interval: 10s, retention: 30d), 
  (interval: 10m, retention: 180d));
`,

    result: "/img/lindb/home/create_db.png",
  },
  {
    sql: `# query data
SELECT cpu_usage 
FROM system_monitoring
WHERE time > now() - 1h AND time < now()
  AND host="us-east-host-1";`,
    result: "/img/lindb/home/query_data.png",
  },
  {
    sql: `# aggregate data and grouping region
SELECT max(cpu_usage) 
FROM system_monitoring
WHERE time > now() - 1h AND time < now()
GROUP BY region`,
    result: "/img/lindb/home/grouping2.png",
  },
  {
    sql: `# grouping/having
SELECT max(cpu_usage) as max_cpu
FROM system_monitoring
WHERE time > now() - 1h AND time < now()
  AND host like "us-east-host*"
GROUP BY region
HAVING max_cpu > 0.5`,
    result: "/img/lindb/home/having.png",
  },
];

const features = [
  {
    title: "High performance",
    icon: "performance",
    desc: (
      <ul className="feature-list">
        <li className="item">
          A single server could easily support more than one million write TPS
        </li>
        <li className="item">
          With fundamental techniques like efficient compression storage and
          parallel computing, LinDB delivers highly optimized query performance
        </li>
      </ul>
    ),
  },
  {
    title: "High availability",
    icon: "availability",
    desc: (
      <ul className="feature-list">
        <li className="item">
          The multi-channel replication protocol supports any amount of nodes,
          ensures the system availability
        </li>
      </ul>
    ),
  },
  {
    title: "Easy to use",
    icon: "easy",
    desc: (
      <ul className="feature-list">
        <li className="item">
          Schema-free multi-dimensional data model with Metric, Tags, and Fields
        </li>
        <li className="item">
          The LinQL is flexible yet handy for real-time data analytics
        </li>
      </ul>
    ),
  },
  {
    title: "Horizontal scalability",
    icon: "scale",
    desc: (
      <ul className="feature-list">
        <li className="item">
          Horizontal scalable is made simple by adding more new broker and
          storage nodes without too much thinking and manual operations
          Schema-free multi-dimensional data model with Metric, Tags, and Fields
        </li>
        <li className="item">
          Tags-based sharding strategy resolves the hotspot problem
        </li>
      </ul>
    ),
  },
  {
    title: "Cross Multiple IDCs",
    icon: "idc",
    desc: (
      <ul className="feature-list">
        <li className="item">
          LinDB is designed to work under a Multi-Active IDCs cloud
          architecture. The compute layer of LinDB, called brokers, supports
          efficient Multi-IDCs aggregation query
        </li>
      </ul>
    ),
  },
  {
    title: "Auto Rollup",
    icon: "rollup",
    desc: (
      <ul className="feature-list">
        <li className="item">
          LinDB supports rollup in specific intervals(minute, hour and day)
          automatically after creating the database(unlike the Continuous-Query
          of InfluxDB)
        </li>
      </ul>
    ),
  },
];

const resources = [
  {
    title: "Get started",
    desc: (
      <div style={{ display: "flex", flexDirection: "column" }}>
        <Link to="/downloads/lindb">Download</Link>
        <Link to="/docs/lindb/deployment">Deployment</Link>
        <Link to="/docs/lindb/develop/write-data">Write data</Link>
        <Link to="/docs/lindb/develop/read-data">Read data</Link>
      </div>
    ),
  },
  {
    title: "Get involved",
    desc: (
      <div style={{ display: "flex", flexDirection: "column" }}>
        <Link to="https://github.com/lindb/lindb/blob/main/CONTRIBUTING.md">
          Contribute
        </Link>
        <Link to="https://github.com/lindb/lindb/issues/new?assignees=&labels=feature&projects=&template=feature-request.md&title=%5Bfeature%5D%3A">
          Request a feature
        </Link>
        <Link to="https://github.com/lindb/lindb/issues/new?assignees=&labels=bug&projects=&template=bug-report.md&title=%5Bbug%5D%3A">
          Report a bug
        </Link>
      </div>
    ),
  },
  {
    title: "Learn more",
    desc: (
      <div style={{ display: "flex", flexDirection: "column" }}>
        <Link to="/docs/lindb/reference/lin-ql">LinQL</Link>
        <Link to="/docs/lindb/reference/admin-ui">Admin UI</Link>
        <Link to="/docs/lindb/reference/api">API</Link>
        <Link to="/docs/lindb/category/design">Design</Link>
      </div>
    ),
  },
];

const LinDB: React.FC = () => {
  const lindb = Products.LinDB;
  return (
    <Layout title="LinDB" description={lindb.desc}>
      <Header
        title="LinDB"
        desc={lindb.desc}
        getStarted={lindb.getStarted}
        learn={lindb.learn}
        github={lindb.github}
        features={[
          "Partitioned by series",
          "Auto rollup",
          "Columnar storage",
          "Mutiple regions",
        ]}
        image={
          <Browser
            style={{
              width: "100%",
              marginTop: 0,
              marginBottom: 0,
              height: "100%",
            }}
          >
            <TypingEffectCodeBlock codes={sqls} style={{ height: "100%" }} />
          </Browser>
        }
      />
      <main
        style={{
          backgroundColor: "var(--ifm-color-emphasis-200)",
          marginTop: 24,
        }}
      >
        <Section center>
          <Section.Title>
            <Heading as="h1">Why use LinDB?</Heading>
          </Section.Title>
          <div className={styles.features}>
            {features.map((item: any, idx: number) => (
              <Card border key={idx}>
                <Heading as="h3">
                  <Icon
                    icon={item.icon}
                    style={{
                      fontSize: 24,
                      marginRight: 8,
                      color: "var(--ifm-color-primary)",
                    }}
                  />
                  <span>{item.title}</span>
                </Heading>
                <div>{item.desc}</div>
              </Card>
            ))}
          </div>
        </Section>
        <Section center>
          <Section.Title>
            <Heading as="h1">Resources</Heading>
          </Section.Title>
          <div className={styles.features}>
            {resources.map((item: any, idx: number) => (
              <Card border key={idx}>
                <Heading as="h3">{item.title}</Heading>
                <div>{item.desc}</div>
              </Card>
            ))}
          </div>
        </Section>
      </main>
    </Layout>
  );
};

export default LinDB;
