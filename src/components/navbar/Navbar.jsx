"use client";
import { signOut } from "next-auth/react";
import styles from "./navbar.module.scss";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className={styles.container}>
      <span className={styles.logo}>
        <Link href="/">Cryptochain</Link>
      </span>
      <div className={styles.menu}>
        <Link className={styles.link} href="/wallets">
          Wallets
        </Link>
        <Link className={styles.link} href="/aml-reports">
          AML Reports
        </Link>
        <button className={styles.logout} onClick={signOut}>
          Logout
        </button>
      </div>
    </div>
  );
};

export default Navbar;
