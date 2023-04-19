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

const { themes } = require("prism-react-renderer");
const lightTheme = themes.github;
const darkTheme = themes.dracula;
const DEFAULT_LOCALE = "en";

const products_bak = `
<div class="products-dropdown">
  <div class="products">
    <div class="category">Product</div>
    <div class="product-list">
      <div class="product">
        <div class="title">LinStack Cloud</div>
        <div class="desc">All-in-one observability cloud platform</div>
      </div>
      <div class="product">
        <div class="title">LinStack Enterprise</div>
        <div class="desc">All-in-one observability platform</div>
      </div>
    </div>
  </div> 
  <div class="products">
    <div class="category">Open source</div>
    <div class="product-list">
      <div class="product">
        <a href="/linsight">
          <div class="title">Linsight</div>
          <div class="desc">All-in-one observability platform</div>
        </a>
      </div>
      <div class="product">
        <div class="title">Lin Agent</div>
        <div class="desc">All-in-one telemetry collector</div>
      </div>
      <div class="product">
        <div class="title">Lin One</div>
        <div class="desc">A lightweight, observability pipeline</div>
      </div>
      <div class="product">
        <a href="/lindb">
          <div class="title">LinDB</div>
          <div class="desc">Distributed time-series database</div>
        </a>
      </div>
    </div>
  </div> 
</div>
`;
const products = `
<div class="products-dropdown">
  <div class="products">
    <div class="category">Open source</div>
    <div class="product-list">
      <div class="product">
        <div class="logo"><img src="/img/logos/linsight.svg"/></div>
        <a href="/linsight">
          <div class="title">Linsight</div>
          <div class="desc">All-in-one observability platform</div>
        </a>
      </div>
      <div class="product">
        <div class="logo"><img src="/img/logos/lindb.svg"/></div>
        <a href="/lindb">
          <div class="title">LinDB</div>
          <div class="desc">Distributed time-series database</div>
        </a>
      </div>
    </div>
  </div> 
</div>
`;

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Lin Labs",
  tagline: "An open-source, cloud native, observabilty platform",
  favicon: "img/favicon.ico",
  // Set the production url of your site here
  url: "https://lindb.io",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",
  trailingSlash: false,
  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "lindb", // Usually your GitHub org/user name.
  projectName: "lindb", // Usually your repo name.
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "throw",
  onDuplicateRoutes: "throw",
  staticDirectories: ["static"],

  webpack: {
    jsLoader: (isServer) => ({
      loader: require.resolve("swc-loader"),
      options: {
        jsc: {
          parser: {
            syntax: "typescript",
            tsx: true,
          },
          target: "es2017",
        },
        module: {
          type: isServer ? "commonjs" : "es6",
        },
      },
    }),
  },
  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
          // docLayoutComponent: "@site/src/theme/DocPage",
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
        },
        blog: {
          showReadingTime: true,
          blogListComponent: "@site/src/theme/BlogListPage",
          blogPostComponent: "@site/src/theme/BlogPostPage",
          blogTagsListComponent: "@site/src/theme/BlogTagsListPage",
          blogTagsPostsComponent: "@site/src/theme/BlogTagsPostsPage",
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
        },
        // sitemap: {
        //   changefreq: "daily",
        //   priority: 0.7,
        //   trailingSlash: false,
        // },
        theme: {
          customCss: require.resolve("./src/css/custom.scss"),
        },
      }),
    ],
  ],

  plugins: [
    "docusaurus-plugin-sass",
    [
      // NOTE: ony active in production
      "client-redirects",
      /** @type {import('@docusaurus/plugin-client-redirects').Options} */
      {
        redirects: [],
      },
    ],
  ],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    {
      docs: {
        sidebar: {
          hideable: false,
          autoCollapseCategories: true,
        },
      },
      colorMode: {
        defaultMode: "dark",
        respectPrefersColorScheme: true,
      },
      // Replace with your project's social card
      image: "img/docusaurus-social-card.jpg",
      navbar: {
        title: "Lin Labs",
        hideOnScroll: false,
        logo: {
          alt: "Lin Labs Logo",
          src: "img/logo.svg",
          srcDark: "img/logo.svg",
        },
        items: [
          {
            type: "dropdown",
            position: "left",
            label: "Open source",
            items: [
              {
                type: "html",
                value: products,
              },
            ],
          },
          {
            position: "left",
            label: "Docs",
            to: "/docs",
          },
          // { to: "/blog", label: "Blog", position: "left" },
          {
            label: "Downloads",
            to: "/downloads",
            position: "right",
          },
          {
            type: "localeDropdown",
            position: "right",
          },
          {
            href: "https://github.com/lindb",
            "aria-label": "GitHub repository",
            className: "header-github-link",
            position: "right",
          },
        ],
      },
      footer: {
        logo: {
          src: "img/logo.svg",
          srcDark: "img/logo.svg",
          className: "footer-logo",
          width: 36,
          height: 36,
        },
        links: [
          {
            title: "Open source",
            items: [
              {
                label: "Linsight",
                href: "/linsight",
              },
              {
                label: "LinDB",
                href: "/lindb",
              },
            ],
          },
          {
            title: "Learn More",
            items: [
              {
                label: "Documentation",
                to: "/docs",
              },
              // {
              //   label: "Community",
              //   to: "/docs",
              // },
              {
                label: "Downloads",
                to: "/downloads",
              },
              // {
              //   label: "Blog",
              //   to: "/docs",
              // },
            ],
          },
        ],
      },
      prism: {
        theme: lightTheme,
        darkTheme: darkTheme,
        additionalLanguages: [
          "go",
          "java",
          "toml",
          "sql",
          "yaml",
          "bash",
          "groovy",
          "markdown",
        ],
      },
      algolia: {
        apiKey: "a54e7b4183d11c7f6967d67dd9801ade",
        appId: "Z2Q2CCBG6Q",
        indexName: "lindb",
      },
    },
  i18n: {
    defaultLocale: DEFAULT_LOCALE,
    locales: ["en", "zh"],
    localeConfigs: {
      en: {
        label: "English",
        htmlLang: "en-US",
      },
      zh: {
        label: "简体中文",
        htmlLang: "zh-CN",
      },
    },
  },
};

module.exports = config;
