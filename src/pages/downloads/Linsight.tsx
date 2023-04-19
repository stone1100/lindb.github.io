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
import Layout from "@site/src/theme/Layout";
import React, { useState } from "react";
import styles from "./downloads.module.scss";
import CodeBlock from "@theme/CodeBlock";
import clsx from "clsx";
import { Section } from "@site/src/components/index";
import releases from "./releases.json";
import Link from "@docusaurus/Link";
import Heading from "@theme/Heading";

const findDownloadUrl = (release: any, name: string) => {
  return (release.assets || []).find((item: any) => item.name.startsWith(name));
};

const osList = [
  {
    value: "linux",
    label: "Linux",
    icon: "lin-linux",
    guide: (release: any) => {
      const amd = findDownloadUrl(
        release,
        `lindb-${release.tag_name}-linux-amd64`
      );
      const arm = findDownloadUrl(
        release,
        `lindb-${release.tag_name}-linux-arm64`
      );
      return (
        <>
          {amd && (
            <>
              <Heading as="h4">Standalone Linux Binaries(64 Bit/AMD)</Heading>
              1. Download
              <CodeBlock language="shell">
                {`wget ${amd.browser_download_url}`}
              </CodeBlock>
              2. Uncompress
              <CodeBlock language="shell">{`tar -zxvf ${amd.name} `}</CodeBlock>
            </>
          )}
          {arm && (
            <>
              <Heading as="h4">Standalone Linux Binaries(64 Bit/ARM)</Heading>
              1. Download
              <CodeBlock language="shell">
                {`wget ${arm.browser_download_url}`}
              </CodeBlock>
              2. Uncompress
              <CodeBlock language="shell">{`tar -zxvf ${arm.name} `}</CodeBlock>
            </>
          )}
        </>
      );
    },
  },
  {
    value: "macos",
    label: "MacOS",
    icon: "lin-mac",
    guide: (release: any) => {
      const amd = findDownloadUrl(
        release,
        `lindb-${release.tag_name}-darwin-amd64`
      );
      const arm = findDownloadUrl(
        release,
        `lindb-${release.tag_name}-darwin-arm64`
      );
      return (
        <>
          {amd && (
            <>
              <Heading as="h4">
                Standalone MacOS/Darwin Binaries(64 Bit/AMD)
              </Heading>
              1. Download
              <CodeBlock language="shell">
                {`wget ${amd.browser_download_url}`}
              </CodeBlock>
              2. Uncompress
              <CodeBlock language="shell">
                {`unzip ${amd.name} 
`}
              </CodeBlock>
            </>
          )}
          {arm && (
            <>
              <Heading as="h4">
                Standalone MacOS/Darwin Binaries(64 Bit/ARM)
              </Heading>
              1. Download
              <CodeBlock language="shell">
                {`wget ${arm.browser_download_url}`}
              </CodeBlock>
              2. Uncompress
              <CodeBlock language="shell">
                {`unzip ${arm.name} 
`}
              </CodeBlock>
            </>
          )}
        </>
      );
    },
  },
  {
    value: "windows",
    label: "Windows",
    icon: "lin-windows",
    guide: (release: any) => {
      const windows = findDownloadUrl(
        release,
        `lindb-${release.tag_name}-windows-amd64`
      );
      if (!windows) {
        return null;
      }
      return (
        <>
          <Heading as="h4">Standalone Windows Binaries(64 Bit)</Heading>
          <Link to={windows.browser_download_url} target="_self">
            Download the zip file
          </Link>
          ({windows.name}) and follow the installation guide as below.
        </>
      );
    },
  },
  {
    value: "docker",
    label: "Docker",
    icon: "lin-docker",
    guide: (release?: any) => {
      return (
        <>
          <Heading as="h4">Docker</Heading>
          <CodeBlock language="shell">
            {`docker run -d --name=lindb -p 9000:9000 lindata/lindb:${
              release?.tag_name || "latest"
            } lind standalone run`}
          </CodeBlock>
        </>
      );
    },
  },
];

const LinsightDownload: React.FC = () => {
  const [os, setOS] = useState(osList[0]);
  const [release, setRelease] = useState<any>(releases[0]);
  return (
    <Layout>
      <Section>
        <Section.Title>
          <Heading as="h1">Download Linsight</Heading>
        </Section.Title>
        <div>
          <div className={styles["release"]}>
            <div className={styles["item"]}>
              <div className={styles.key}>Version:</div>
              <div className={styles.versions}>
                <select
                  onChange={(e) => {
                    setRelease(releases[e.target.value]);
                  }}
                >
                  {releases.map((r: any, index: any) => (
                    <option key={index} value={index}>
                      {r.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div className={styles.item}>
              <div className={styles.key}>License:</div>
              <div>Apache 2.0</div>
            </div>
            <div className={styles.item}>
              <div className={styles.key}>Release Date:</div>
              <div>{release.published_at}</div>
            </div>
            <div className={styles.item}>
              <div className={styles.key}>Release Info:</div>
              <div>
                <Link
                  href={`https://github.com/lindb/lindb/releases/tag/${release.tag_name}`}
                  target="_blank"
                  rel="noreferrer"
                  style={{ textDecoration: "none" }}
                >
                  {`What's New in Linsight ${release.name}`}
                </Link>
              </div>
            </div>
          </div>
          <div className={styles["os-list"]}>
            {osList.map((item) => (
              <div
                key={item.value}
                className={clsx(styles.os, {
                  [styles["active"]]: os.value == item.value,
                })}
                onClick={() => setOS(item)}
              >
                <i className={clsx("linfont", item.icon)} />
                <div className={styles["os-name"]}>{item.label}</div>
              </div>
            ))}
          </div>
          {os.guide && os.guide(release)}
          <div style={{ marginTop: "1rem" }}>
            Read the <Link to="/docs/lindb/deployment">deployment guide</Link>{" "}
            for more information.
          </div>
        </div>
      </Section>
    </Layout>
  );
};

export default LinsightDownload;
