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
import clsx from "clsx";
import type { Props } from "@theme/Footer/Layout";
import Link from "@docusaurus/Link";
import styles from "./layout.module.scss";

export default function FooterLayout({
  style,
  links,
  logo,
}: Props): JSX.Element {
  return (
    <footer
      className={clsx("footer", styles["lin-footer"], {
        "footer--dark": style === "dark",
      })}
    >
      <div
        className={clsx(
          "container",
          "container-fluid",
          styles["footer-container"]
        )}
      >
        <div className={clsx(styles.col)}>
          <div className={clsx("navbar__brand", styles["footer-brand"])}>
            <div className={clsx("navbar__logo")}>{logo}</div>
            <div
              className={clsx(
                "navbar__title",
                "text--truncate",
                styles["footer-title"]
              )}
            >
              Lin Labs
            </div>
          </div>
          <div className={clsx(styles.social)}>
            <Link
              href="https://twitter.com/lindb_io"
              target="_blank"
              rel="noreferrer"
            >
              <i className="linfont lin-twitter" />
            </Link>
            <Link
              href="https://github.com/lindb"
              target="_blank"
              rel="noreferrer"
            >
              <i className="linfont lin-github" />
            </Link>
          </div>
        </div>
        <div className={clsx(styles.col)}>{links}</div>
      </div>
      <div
        className={clsx(
          "footer__bottom",
          "text--center",
          styles["footer-copyright"]
        )}
      >
        Copyright © {new Date().getFullYear()} Lin Labs Inc. All Rights
        Reserved.
      </div>
    </footer>
  );
}
