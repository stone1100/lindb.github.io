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
import { PageInfo } from "@site/navs/documentation";
import React from "react";

export interface CommitInfo {
  author: string;
  date: string;
}

export interface DocMeta {
  title?: string;
  sidebar?: string;
  description?: string;
}

export const DocHeader: React.FC<{
  page: PageInfo;
}> = (props) => {
  const { page } = props;
  if (!page.meta && !page.parent) return null;
  return (
    <header id="header" className="relative z-20">
      <div>
        {page.parent && (
          <p className="mb-2 hidden text-sm font-semibold leading-6 text-sky-500 lg:block dark:text-sky-400">
            {page.parent.title}
          </p>
        )}
        {page.meta && page.meta.title && (
          <div className="flex items-center">
            <h1 className="inline-block text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl dark:text-slate-200">
              {page.meta.title}
            </h1>
          </div>
        )}
      </div>
      {page.commitInfo && page.commitInfo.author && (
        <div className="mt-1 text-sm italic">
          Last updated on{" "}
          <span className="font-medium text-slate-900 underline decoration-sky-600 dark:text-slate-200">
            {page.commitInfo.date}
          </span>{" "}
          by{" "}
          <span className="font-medium text-slate-900 underline decoration-sky-600 dark:text-slate-200">
            {page.commitInfo.author}
          </span>
        </div>
      )}
      {page.meta && page.meta.description && (
        <p className="mt-2 text-base italic text-slate-700 dark:text-slate-400">
          {page.meta.description}
        </p>
      )}
    </header>
  );
};