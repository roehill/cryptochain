"use client";
import styles from "./page.module.scss";

import axios from "@/utils/axios.js";
import { useRouter } from "next/navigation";
import { signOut, useSession } from "next-auth/react";
import Transactions from "@/components/transactions/Transactions";
import Alerts from "@/components/alerts/Alerts";

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
        <Transactions />
        <Alerts />
      </div>
    );
  }
}
