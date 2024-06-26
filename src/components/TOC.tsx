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
import React, { useEffect, useState } from "react";
import Link from "./Link";
import clsx from "clsx";
import { ListBulletIcon, ChevronRightIcon } from "@heroicons/react/24/solid";
import { Popover, PopoverButton, PopoverPanel } from "@headlessui/react";
import { GithubIcon } from "@site/icons";
import { PageInfo, TOCItem } from "@site/types";
import { useTranslation } from "next-i18next";
import { docs } from "@site/docs.config";

export const TableOfContents = (props: {
  page: PageInfo;
  tocItems: TOCItem[];
}) => {
  const { tocItems, page } = props;
  const [activeId, setActiveId] = useState("");
  const { t, i18n } = useTranslation();

  const getPagePath = () => {
    if (i18n.language === docs.i18n.defaultLocale) {
      return page.path;
    }
    return "/i18n/" + i18n.language + page.path;
  };

  useEffect(() => {
    let frameId = 0;
    const handleScroll = () => {
      if (frameId > 0) {
        cancelAnimationFrame(frameId);
      }
      frameId = requestAnimationFrame(() => {
        let lastHeadingId = "";
        for (const heading of tocItems) {
          const element = document.getElementById(heading.id);
          if (element) {
            const rect = element.getBoundingClientRect();
            if (rect.top >= 0 && rect.top <= window.innerHeight / 2) {
              lastHeadingId = heading.id;
              break;
            }
          }
        }
        if (lastHeadingId) {
          setActiveId(lastHeadingId);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (frameId > 0) {
        cancelAnimationFrame(frameId);
      }
    };
  }, [tocItems]);

  const Content = () => {
    return (
      <div className="px-2 xl:px-8">
        <h5 className="mb-2 text-sm font-semibold leading-6 text-slate-900 dark:text-slate-100">
          {t("On this page")}
        </h5>
        <ul className="text-sm leading-6 text-slate-700">
          {tocItems.map((item: TOCItem, idx: number) => {
            return (
              <li key={idx}>
                <Link
                  href={`#${item.id}`}
                  className={clsx("flex items-center gap-1 py-1", {
                    "text-sky-500 font-semibold dark:text-sky-400 dark:hover:text-sky-300 hover:text-sky-400":
                      activeId === item.id,
                    "ml-4": item.level > 2,
                    "group flex items-start py-1": item.level > 2,
                    "hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300":
                      activeId !== item.id,
                  })}
                >
                  {item.level > 2 && <ChevronRightIcon className="size-3" />}
                  {item.title}
                </Link>
              </li>
            );
          })}
        </ul>
        <div className="border-t border-slate-200 pt-3 text-sm leading-6 text-slate-700 sm:flex dark:border-slate-200/5">
          <Link
            href={docs.docRepo + getPagePath()}
            className="flex items-center gap-2 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300"
          >
            <GithubIcon className="size-4" />
            {t("Edit this page on Github")}
          </Link>
        </div>
      </div>
    );
  };
  return (
    <div>
      <Popover className="group fixed right-5 top-[4em] z-50 flex rounded bg-gray-200 p-1 shadow-md shadow-gray-200 ring-1 ring-gray-200 lg:right-6 lg:top-20 xl:hidden dark:bg-slate-800 dark:shadow-slate-600 dark:ring-slate-600">
        <PopoverButton>
          <ListBulletIcon className="size-6 fill-gray-400 stroke-gray-400 dark:fill-slate-500 dark:shadow-slate-600" />
        </PopoverButton>
        <PopoverPanel
          anchor="bottom start"
          className="z-20 mr-3 mt-3 w-full max-w-xs rounded-sm bg-white p-2  ring-1 ring-slate-900/10 dark:bg-slate-800 dark:text-slate-400  dark:ring-slate-500/20"
        >
          <Content />
        </PopoverPanel>
      </Popover>
      <div className="fixed bottom-0 right-[max(0px,calc(50%-45rem))] top-[3.8125rem] z-20 hidden w-[19.5rem] overflow-y-auto py-10 xl:block">
        <Content />
      </div>
    </div>
  );
};
