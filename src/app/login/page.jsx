"use client";

import { Avatar } from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { useRouter } from "next/navigation";
import styles from "./loginPage.module.scss";
import Link from "next/link";
import { useSession } from "next-auth/react";
import { signIn } from "next-auth/react";

export default function Home() {
  const router = useRouter();
  const session = useSession();

  const handleSubmit = (e) => {
    e.preventDefault();

    const email = e.target[0].value;
    const password = e.target[1].value;

    signIn("credentials", { email, password });
    router.push("/");
  };

  if (session.status === "loading") {
    return <p>Loading...</p>;
  }

  if (session.status === "authenticated") {
    router?.push("/");
  }

  if (session.status === "unauthenticated") {
    return (
      <div className={styles.container}>
        <div className={styles.imageContainer}>
          <img
            src="./crypto.jpg"
            alt="crypto-header"
            className={styles.image}
          />
        </div>
        <form className={styles.loginPanel} onSubmit={handleSubmit}>
          <div className={styles.avatarWrapper}>
            <Avatar sx={{ m: 1, bgcolor: "#352f44" }}>
              <LockOutlinedIcon />
            </Avatar>
            <span>Log In</span>
          </div>
          <input
            className={styles.input}
            type="email"
            name="email"
            id="email"
            placeholder="Email Address*"
          />
          <input
            className={styles.input}
            type="password"
            name="password"
            id="password"
            placeholder="Password*"
          />
          <button className={styles.button}>Sign In</button>
          <span className={styles.register}>
            You don't have an account yet?{" "}
            <Link href="/register" className={styles.registerLink}>
              Sign up.
            </Link>
          </span>
          <span className={styles.copyright}>Copyright © Cryptochain 2023</span>
        </form>
      </div>
    );
  }
}
