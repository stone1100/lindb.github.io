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
import React from "react";
import styles from "./downloads.module.scss";
import { Card, Section } from "@site/src/components/index";
import Link from "@docusaurus/Link";
import Heading from "@theme/Heading";
import { Products } from "@site/src/constants/product";

const Download: React.FC = () => {
  return (
    <Layout>
      <Section>
        <div className={styles.downloads}>
          {Object.keys(Products).map((key: string) => {
            const product = Products[key];
            return (
              <Card border key={key}>
                <Heading as="h2" className={styles.title}>
                  <img
                    src={`img/logos/${key}.svg`}
                    style={{ width: 28, marginRight: 12 }}
                  />
                  <span>{key}</span>
                </Heading>
                <div>{product.desc}</div>
                <div className={styles.buttons}>
                  <Link to={product.downloads} className="button">
                    Download
                  </Link>
                  <Link to={product.home} className="button light">
                    More info
                  </Link>
                </div>
              </Card>
            );
          })}
        </div>
      </Section>
    </Layout>
  );
};

export default Download;
