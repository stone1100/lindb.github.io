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
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@site/src/theme/Layout";
import { Header } from "@site/src/components";

const Home: React.FC = () => {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
    >
      <Header
        title="Observe your entire stack in a single pane"
        desc="An open-source, cloud native, observabilty platform."
        learn="/docs"
        features={[
          "Open source",
          "OpenTelemetry native",
          "Traces/Logs/Metrics/Events etc.",
          "Automation",
          "Context",
          "Intelligence",
        ]}
      />

      <main></main>
    </Layout>
  );
};

export default Home;
