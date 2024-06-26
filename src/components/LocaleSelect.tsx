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
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { LanguageIcon } from "@heroicons/react/24/solid";
import clsx from "clsx";
import { docs } from "@site/docs.config";
import languageDetector from "@site/i18n/language-detector";
import Link from "next/link";
import { useRouter } from "next/router";
import { getLocale } from "@site/utils/utils";

const mapping = {
  en: "English",
  zh: "简体中文",
};

export const LocaleSelect: React.FC = () => {
  const router = useRouter();
  const paths = router.asPath.split("/").filter((item) => item.trim() !== "");

  const getHref = (locale: string) => {
    let href = router.asPath;
    const { include } = getLocale(router.asPath);
    if (locale !== docs.i18n.defaultLocale) {
      if (include) {
        href = "/" + [locale, ...paths.slice(1)].join("/");
      } else {
        href = "/" + [locale, ...paths].join("/");
      }
    } else {
      if (include) {
        href = "/" + [...paths.slice(1)].join("/");
      }
    }
    return href;
  };

  const languageBtnCls = (l: string) => {
    const locale = languageDetector.detect();
    return clsx(
      "group flex w-full items-center gap-2 px-3 py-1.5 hover:bg-slate-400/10 dark:hover:bg-slate-600/30",
      {
        "text-sky-500 bg-slate-400/10 dark:bg-slate-600/30":
          locale === l || (l === docs.i18n.defaultLocale && !locale),
      },
    );
  };

  return (
    <Menu>
      <MenuButton className="flex items-center">
        <LanguageIcon className="size-5" />
      </MenuButton>
      <MenuItems
        anchor="bottom"
        className="z-50 mt-6 w-40 origin-top-right bg-white p-1 text-sm/6 font-semibold text-slate-700 ring-1 ring-slate-900/10 [--anchor-gap:var(--spacing-1)] focus:outline-none dark:bg-slate-900 dark:text-slate-300 dark:ring-slate-500/20"
      >
        {docs.i18n.locales.map((localeItem) => (
          <MenuItem key={localeItem}>
            <Link
              href={getHref(localeItem)}
              className={languageBtnCls(localeItem)}
            >
              {mapping[localeItem]}
            </Link>
          </MenuItem>
        ))}
      </MenuItems>
    </Menu>
  );
};
