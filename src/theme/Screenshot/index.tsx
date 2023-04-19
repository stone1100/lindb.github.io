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
import styles from "./screenshot.module.scss";
import useBaseUrl from "@docusaurus/useBaseUrl";

const Screenshot: React.FC<{
  alt: string;
  height?: number;
  margin: boolean;
  shadow: boolean;
  small: boolean;
  src: string;
  title?: string;
  width?: number;
}> = (props) => {
  const {
    alt,
    height,
    src,
    width,
    title,
    margin = true,
    shadow = true,
    small,
  } = props;
  return (
    <figure>
      <img
        alt={alt}
        className={clsx(styles.image, {
          [styles.margin]: margin,
          [styles.shadow]: shadow,
          [styles.small]: small,
          [styles.title]: title != null,
        })}
        height={height}
        src={useBaseUrl(src)}
        width={width}
      />
      {title != null && (
        <figcaption className={styles.caption}>{title}</figcaption>
      )}
    </figure>
  );
};

export default Screenshot;
