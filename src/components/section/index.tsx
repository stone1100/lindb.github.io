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
import clsx from "clsx";
import style from "./section.module.scss";

const Title: React.FC<{ children: React.ReactNode; className?: string }> = (
  props
) => {
  const { children, className } = props;
  return <div className={clsx(className)}>{children}</div>;
};

const Subtitle: React.FC<{ children: React.ReactNode; className?: string }> = (
  props
) => {
  const { children, className } = props;
  return <div className={clsx(style["sub-title"], className)}>{children}</div>;
};

const BaseSection: React.FC<{
  children: React.ReactNode;
  fullWidth?: boolean;
  center?: boolean;
  className?: string;
}> = (props) => {
  const { children, fullWidth, center, className } = props;
  return (
    <div
      className={clsx(
        style.root,
        {
          [style.full]: fullWidth,
          [style.center]: center,
        },
        className
      )}
    >
      {children}
    </div>
  );
};

export type SectionType = typeof BaseSection & {
  Title: typeof Title;
  Subtitle: typeof Subtitle;
};

const Section = BaseSection as SectionType;
Section.Title = Title;
Section.Subtitle = Subtitle;

export default Section;
