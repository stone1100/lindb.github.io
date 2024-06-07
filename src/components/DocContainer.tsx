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
import { MDXRemote } from "next-mdx-remote/rsc";
import {
  DocsFooter,
  CodeSnippet,
  Heading,
  DocHeader,
  TOCItem,
  TableOfContents,
} from "@site/components";
import rehypeShiki from "@shikijs/rehype";
import remarkGfm from "remark-gfm";
import { remarkAlert } from "remark-github-blockquote-alert";
import {
  transformerNotationDiff,
  transformerMetaHighlight,
  transformerNotationHighlight,
  transformerNotationFocus,
} from "@shikijs/transformers";
import { PageInfo } from "@site/navs/documentation";
import { VFileCompatible } from "vfile";

import "remark-github-blockquote-alert/alert.css";

export const DocContainer: React.FC<{
  page: PageInfo;
  source: VFileCompatible;
  tocItems?: TOCItem[];
  pages: PageInfo[];
}> = (props) => {
  const { page, source, tocItems, pages } = props;
  const headingComponents: object = {};
  for (let i = 1; i <= 6; i++) {
    headingComponents[`h${i}`] = (props) => {
      return <Heading level={i} {...props} />;
    };
  }
  return (
    <div className="mx-auto max-w-3xl xl:ml-0 xl:mr-[15.5rem] xl:max-w-none xl:pr-16">
      <DocHeader page={page} />
      <div
        id="content-wrapper"
        className="prose prose-slate relative mt-8 dark:prose-dark"
      >
        <MDXRemote
          source={source}
          components={{
            CodeSnippet,
            ...headingComponents,
            table: (props) => (
              // eslint-disable-next-line tailwindcss/no-custom-classname
              <table {...props} className="markdown-table">
                {props.children}
              </table>
            ),
          }}
          options={{
            mdxOptions: {
              remarkPlugins: [
                [remarkAlert, {}],
                [
                  remarkGfm,
                  {
                    footnotes: { labelTagName: "h4" },
                  },
                ],
              ],
              rehypePlugins: [
                [
                  rehypeShiki,
                  {
                    // ref: https://shiki.style/themes
                    themes: {
                      // light: "github-light",
                      light: "material-theme-lighter",
                      // light: "catppuccin-latte",
                      dark: "catppuccin-macchiato",
                    },
                    //ref: https://shiki.style/packages/transformers
                    transformers: [
                      transformerMetaHighlight(),
                      transformerNotationDiff(),
                      transformerNotationHighlight(),
                      transformerNotationFocus(),
                    ],
                    colorReplacements: { "#24273a": "#1e293b" },
                  },
                ],
              ],
            },
            parseFrontmatter: true,
          }}
        />
      </div>
      <DocsFooter pages={pages} />
      {tocItems && <TableOfContents tocItems={tocItems} />}
    </div>
  );
};
