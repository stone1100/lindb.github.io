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
import React, { ReactNode } from "react";
import { Section, Card } from "@site/src/components";
import style from "./header.module.scss";
import Link from "@docusaurus/Link";

const Header: React.FC<{
  title: string;
  desc: string;
  getStarted?: string;
  learn: string;
  github: string;
  image?: ReactNode;
  features: string[];
}> = (props) => {
  const { title, desc, getStarted, learn, github, image, features } = props;
  return (
    <div className={style.root}>
      <Section>
        <div className={style.content}>
          <div>
            <Section.Title className={style.title}>{title}</Section.Title>
            <Section.Subtitle className={style["sub-title"]}>
              {desc}
            </Section.Subtitle>
            {features && (
              <Card>
                <ul className="feature-list">
                  {features.map((item, idx) => (
                    <li key={idx} className="item">
                      {item}
                    </li>
                  ))}
                </ul>
              </Card>
            )}
            <div className={style.buttons}>
              {getStarted && (
                <Link to={getStarted} className="button">
                  Get Started
                </Link>
              )}
              <Link to={learn} className="button light">
                Learn More
              </Link>
              <Link to={github} className="button light">
                GitHub
              </Link>
            </div>
          </div>
          {image && <div className={style.image}>{image}</div>}
        </div>
      </Section>
    </div>
  );
};

export default Header;
