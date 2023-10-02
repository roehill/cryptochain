"use client";
import { Avatar } from "@mui/material";
import { useRouter } from "next/navigation";
import styles from "./registerPage.module.scss";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Link from "next/link";

const RegisterPage = () => {
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const username = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;

    try {
      const res = await fetch("/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username,
          email,
          password,
        }),
      });
      res.status === 201 &&
        router.push("/login?success=Account has been created");
    } catch (err) {
      setError(err);
      console.log(err);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <img src="./crypto.jpg" alt="crypto-header" className={styles.image} />
      </div>
      <form className={styles.loginPanel} onSubmit={handleSubmit}>
        <div className={styles.avatarWrapper}>
          <Avatar sx={{ m: 1, bgcolor: "#352f44" }}>
            <LockOutlinedIcon />
          </Avatar>
          <span>Create an account</span>
        </div>
        <input
          className={styles.input}
          type="text"
          name="username"
          id="username"
          placeholder="Username*"
        />
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
        <input
          className={styles.input}
          type="password"
          name="confirmPassword"
          id="confirmPasword"
          placeholder="Confirm Password*"
        />
        <button className={styles.button}>Sign Up</button>
        <span className={styles.login}>
          Already have an account?{" "}
          <Link href="login" className={styles.loginLink}>
            Sign in.
          </Link>
        </span>
        <span className={styles.copyright}>Copyright © Cryptochain 2023</span>
      </form>
    </div>
  );
};

export default RegisterPage;
