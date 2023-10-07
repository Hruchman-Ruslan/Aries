import { Suspense } from "react";
import { Outlet } from "react-router-dom";

import { Header } from "./Header/Header";

import styles from "../styles/Container.module.css";

export const Layout = () => {
  return (
    <div className={styles.container}>
      <Header />
      <main>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </main>
    </div>
  );
};
