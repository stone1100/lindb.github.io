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
import React, {
  CSSProperties,
  MutableRefObject,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import CodeBlock from "@theme/CodeBlock";
import styles from "./typing.module.scss";

const TypingEffectCodeBlock: React.FC<{
  style?: CSSProperties;
  codes: any[];
  typingDelay?: number;
}> = (props) => {
  const { codes, typingDelay = 50, style } = props;
  const [displayedCode, setDisplayedCode] = useState("");
  const [showResult, setShowResult] = useState(false);
  const index = useRef(0);
  const codeIndex = useRef(0);
  const requestRef = useRef(0);
  const lastTime = useRef(performance.now());
  const codeString = useRef() as MutableRefObject<any>;

  useMemo(() => {
    codeString.current = codes[codeIndex.current % codes.length];
  }, [codes]);

  const type = useCallback(
    (time: number) => {
      if (time - lastTime.current > typingDelay) {
        setDisplayedCode((prev) => {
          const code = prev + codeString.current.sql.charAt(index.current);
          index.current++;
          return code;
        });
        lastTime.current = time;
      }

      if (index.current < codeString.current.sql.length) {
        requestRef.current = requestAnimationFrame(type);
      } else {
        setShowResult(true);
        // next code
        setTimeout(() => {
          index.current = 0;
          setShowResult(false);
          codeIndex.current++;
          codeString.current = codes[codeIndex.current % codes.length];
          setDisplayedCode("");
          requestRef.current = requestAnimationFrame(type);
        }, 1000);
      }
    },
    [typingDelay, codes]
  );

  useEffect(() => {
    requestRef.current = requestAnimationFrame(type);
    return () => cancelAnimationFrame(requestRef.current);
  }, [type]);

  return (
    <div style={style}>
      {!showResult ? (
        <CodeBlock className={styles.code} language="sql">
          {displayedCode}
        </CodeBlock>
      ) : (
        <img
          style={{ width: "100%", height: "100%" }}
          src={codeString.current.result}
        />
      )}
    </div>
  );
};

export default TypingEffectCodeBlock;
