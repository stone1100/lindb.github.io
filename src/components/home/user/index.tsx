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
import { Section } from "@site/src/components";
import Marquee from "react-fast-marquee";
import styles from "./user.module.scss";

const User: React.FC = () => {
  return (
    <Section center className={styles.section}>
      <Marquee gradientColor={[33, 34, 44]} speed={20}>
        <div className={styles.logos}>
          <div className={styles.logo}>
            <img
              src="/img/logos/eleme.svg"
              width={140}
              height={40}
              alt="eleme"
            />
          </div>
          <div className={styles.logo}>Tencent</div>
          <div className={styles.logo}>c</div>
          <div className={styles.logo}>d</div>
          <div className={styles.logo}>e</div>
        </div>
      </Marquee>
    </Section>
  );
};

export default User;
