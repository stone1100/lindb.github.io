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

function productList(product) {
  return `
<div class="product-select dropdown dropdown--hoverable dropdown--left">
  <a href="#" aria-haspopup="true" aria-expanded="false" role="button" class="navbar__link selected">
    <span class="product-name">
      ${product}
    </span>
  </a>
  <ul class="dropdown__menu">
    <li>
      <a href="/docs/linsight" target="_self" rel="noopener noreferrer" class="dropdown__link">
        Linsight
      </a>
    </li>
    <li>
      <a href="/docs/lindb" target="_self" rel="noopener noreferrer" class="dropdown__link">
        LinDB
      </a>
    </li>
  </ul>
</div>
`;
}

const sidebars = {
  docs: [
    "introduction",
    {
      label: "Open Source",
      type: "category",
      collapsed: false,
      items: [
        {
          type: "link",
          label: "LinDB",
          href: "/docs/lindb",
        },
        {
          type: "link",
          label: "Linsight",
          href: "/docs/linsight",
        },
      ],
    },
  ],
  lindb: [
    {
      type: "html",
      value: productList("LinDB"), // The HTML to be rendered
    },
    "lindb/introduction",
    {
      label: "Get Started",
      type: "category",
      link: {
        type: "generated-index",
        title: "Get Started",
        slug: "/lindb/category/get-started",
        description:
          "This section explains how to install and run LinDB using one of the following methods:",
        keywords: ["lindb/guides"],
      },
      items: [
        "lindb/get-started/docker",
        "lindb/get-started/binaries",
        "lindb/get-started/first-database",
        "lindb/get-started/learn-more",
      ],
    },
    {
      label: "Develop",
      type: "category",
      items: [
        "lindb/develop/connect",
        "lindb/develop/create-database",
        "lindb/develop/write-data",
        "lindb/develop/read-data",
      ],
    },
    {
      label: "Deployment",
      type: "category",
      link: {
        type: "generated-index",
        title: "Deployment",
        slug: "lindb/deployment",
        description:
          "This section explains how to deploy LinDB on servers or Kubernetes.",
        keywords: ["lindb/deployment"],
      },
      items: ["lindb/deployment/manual", "lindb/deployment/kubernetes"],
    },
    {
      label: "Reference",
      type: "category",
      items: [
        "lindb/reference/data-model",
        ,
        {
          type: "category",
          label: "Client libraries",
          link: {
            type: "doc",
            id: "lindb/reference/clients/index",
          },
          items: ["lindb/reference/clients/java", "lindb/reference/clients/go"],
        },
        {
          type: "category",
          label: "Admin UI",
          link: {
            type: "doc",
            id: "lindb/reference/admin-ui/index",
          },
          items: [
            "lindb/reference/admin-ui/overview",
            "lindb/reference/admin-ui/search",
            "lindb/reference/admin-ui/explore",
            "lindb/reference/admin-ui/monitoring",
            "lindb/reference/admin-ui/metadata",
          ],
        },
        "lindb/reference/cli",
        "lindb/reference/lin-ql",
        {
          type: "category",
          label: "API",
          link: {
            type: "doc",
            id: "lindb/reference/api/index",
          },
          items: [
            "lindb/reference/api/write",
            "lindb/reference/api/lin-ql",
            "lindb/reference/api/state",
          ],
        },
        "lindb/reference/configuration",
        "lindb/reference/self-monitor",
      ],
    },
    {
      label: "Design",
      type: "category",
      link: {
        type: "generated-index",
        title: "Design",
        slug: "/lindb/category/design",
        description:
          "This section explains the internal design and implementation of LinDB",
        keywords: ["lindb/design"],
      },
      items: [
        "lindb/design/architecture",
        "lindb/design/coordinator",
        "lindb/design/replication",
        "lindb/design/storage",
        "lindb/design/memory",
        "lindb/design/index_",
        "lindb/design/query",
      ],
    },
    {
      label: "Troubleshooting",
      type: "category",
      items: ["lindb/troubleshooting/faq"],
    },
    {
      label: "Releases",
      type: "category",
      items: [
        {
          label: "v1.0",
          type: "link",
          href: "https://github.com/lindb/lindb/blob/main/CHANGELOG/CHANGELOG-1.0.md",
        },
      ],
    },
  ],
  linsight: [
    {
      type: "html",
      value: productList("Linsight"), // The HTML to be rendered
    },
    "linsight/introduction",
    {
      label: "Get Started",
      type: "category",
      link: {
        type: "generated-index",
        title: "Get Started",
        slug: "/linsight/category/get-started",
        description:
          "This section explains how to install and run Linsight using one of the following methods:",
        keywords: ["linsight/guides"],
      },
      items: ["linsight/get-started/docker"],
    },
  ],
};

module.exports = sidebars;
