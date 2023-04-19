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
import React, { CSSProperties, ReactNode } from "react";
import styles from "./browser.module.scss";
import clsx from "clsx";
interface Props {
  children: ReactNode;
  minHeight?: number;
  url?: string;
  style?: CSSProperties;
  bodyStyle?: CSSProperties;
}
export default function BrowserWindow({
  children,
  minHeight,
  url,
  style,
  bodyStyle,
}: Props): JSX.Element {
  return (
    <div className={styles["browser-window"]} style={{ ...style, minHeight }}>
      <div className={styles.header}>
        <div className={styles.buttons}>
          <span className={styles.dot} style={{ background: "#f25f58" }} />
          <span className={styles.dot} style={{ background: "#fbbe3c" }} />
          <span className={styles.dot} style={{ background: "#58cb42" }} />
        </div>
        {url && (
          <>
            <div
              className={clsx(styles["adderss-bar"], styles["text-truncate"])}
            >
              {url}
            </div>
            <div className={styles["menu-icon"]}>
              <div>
                <span className={styles.bar} />
                <span className={styles.bar} />
                <span className={styles.bar} />
              </div>
            </div>
          </>
        )}
      </div>
      <div className={styles.body} style={bodyStyle}>
        {children}
      </div>
    </div>
  );
}
