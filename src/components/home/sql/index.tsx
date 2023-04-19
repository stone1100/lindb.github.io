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
import React, { useCallback, useEffect, useState } from "react";
import clsx from "clsx";
import Chevron from "@site/src/theme/Chevron";
import useWindowWidth from "@site/src/theme/useWindowWidth";
import { Section } from "@site/src/components";
import CodeBlock from "@theme/CodeBlock";
import styles from "./sql.module.scss";

const S = [3, 1, 6, 10];
const M = [3, 0, 4, 8];
const L = [4, 0, 4, 8];
const getTopByIndex = (m: number[], index: number): number => {
  const scale = {
    1: 25 * (m[0] ?? 0),
    2: -25 * (m[1] ?? 0),
    3: -25 * (m[2] ?? 0),
    4: -25 * (m[3] ?? 0),
  };

  return scale[index] ?? 0;
};

const sqls = [
  {
    icon: "lin-search",
    title: "Search 1",
    description: "Filter and search for specific timestamps with “WHERE”",
    sql: `SELECT timestamp1, tempC
FROM sensors
WHERE timestamp IN '2021-05-14;1M';`,
  },
  {
    icon: "lin-stats",
    title: "Search 2",
    description: "desc sql",
    sql: `SELECT timestamp2, tempC
FROM sensors
WHERE timestamp IN '2021-05-14;1M';`,
  },
  {
    title: "Search 3",
    description: "desc sql",
    sql: `SELECT timestamp3, tempC
FROM sensors
WHERE timestamp IN '2021-05-14;1M';`,
  },
  {
    title: "Search 4",
    description: "desc sql",
    sql: `SELECT timestamp4, tempC
FROM sensors
WHERE timestamp IN '2021-05-14;1M';`,
  },
];

const SQL: React.FC = () => {
  const [top, setTop] = useState(S);
  const windowWidth = useWindowWidth();
  const [selected, setSelected] = useState(2);
  const handleUpClick = useCallback(() => {
    setSelected(Math.max(selected - 1, 1));
  }, [selected]);
  const handleDownClick = useCallback(() => {
    setSelected(Math.min(selected + 1, 4));
  }, [selected]);
  useEffect(() => {
    if (windowWidth != null && windowWidth < 622) {
      setTop(S);
      return;
    }

    if (windowWidth != null && windowWidth < 800) {
      setTop(M);
      return;
    }

    setTop(L);
  }, [windowWidth]);

  return (
    <Section center>
      <Section.Title>
        <h2>Lin query language</h2>
      </Section.Title>
      <Section.Subtitle>
        LinDB enhances ANSI SQL with time series extensions to manipulate time
        stamped data
      </Section.Subtitle>
      <div className={styles.showcase}>
        <div className={styles.inner}>
          <div
            className={clsx(styles.chevron)}
            onClick={handleUpClick}
            style={{ visibility: selected === 1 ? "hidden" : "visible" }}
          >
            <Chevron />
          </div>
          <div className={styles.left}>
            <div
              className={clsx(styles.offset, styles[`code${selected}`])}
              style={{ top: getTopByIndex(top, selected) }}
            >
              {sqls.map((item, index) => (
                <React.Fragment key={index}>
                  <CodeBlock language="sql">{item.sql}</CodeBlock>
                  <CodeBlock language="sql">{item.sql}</CodeBlock>
                </React.Fragment>
              ))}
            </div>
          </div>
          <div
            className={clsx(
              styles.chevron,
              styles["showcase__chevron--bottom"]
            )}
            onClick={handleDownClick}
            style={{ visibility: selected === 4 ? "hidden" : "visible" }}
          >
            <Chevron />
          </div>
          <div className={styles.right}>
            {sqls.map((item, index) => (
              <div
                key={item.title}
                className={clsx(styles.button, {
                  [styles["active"]]: selected == index + 1,
                })}
                onClick={() => setSelected(index + 1)}
              >
                <h3 className={styles.title}>
                  <i className={`linfont ${item.icon}`} />
                  {item.title}
                </h3>
                <p className={styles.description}>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
};

export default SQL;
