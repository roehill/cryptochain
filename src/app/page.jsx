"use client";
import styles from "./page.module.scss";
import { useRouter } from "next/navigation";
import { signOut, useSession } from "next-auth/react";

export default function Home() {
  const router = useRouter();
  const session = useSession();

  if (session.status === "loading") {
    return <p>Loading...</p>;
  }

  if (session.status === "unauthenticated") {
    router?.push("/login");
  }

  if (session.status === "authenticated") {
    return (
      <div className={styles.container}>
        <h1>Witaj</h1>
        <button className={styles.logout} onClick={signOut}>
          Logout
        </button>
      </div>
    );
  }
}
