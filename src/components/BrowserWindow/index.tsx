import React, { type ReactNode } from "react";
import clsx from "clsx";
import styles from "./styles.module.css";

interface Props {
  children: ReactNode;
  minHeight: number;
  url: string;
  fullscreen: boolean;
}

export default function BrowserWindow({
  children,
  minHeight = 0,
  url = "http://localhost:4000",
  fullscreen=false
}: Props): JSX.Element {
  return (
    <div className={styles.browserWindow} style={{ minHeight }}>
      <div className={styles.browserWindowHeader}>
        <div className={styles.buttons}>
          <span className={styles.dot} style={{ background: "#f25f58" }} />
          <span className={styles.dot} style={{ background: "#fbbe3c" }} />
          <span className={styles.dot} style={{ background: "#58cb42" }} />
        </div>
        <div className={clsx(styles.browserWindowAddressBar, "text--truncate")}>
          {url}
        </div>
        {/* <div className={styles.browserWindowMenuIcon}>
          <div>
            <span className={styles.bar} />
            <span className={styles.bar} />
            <span className={styles.bar} />
          </div>
        </div> */}
      </div>

      <div className={clsx(!Boolean(fullscreen) && styles.browserWindowBodyPadding, styles.browserWindowBody)}>{children}</div>
    </div>
  );
}
