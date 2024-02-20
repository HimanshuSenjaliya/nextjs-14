"use client";

import { register } from "@/lib/action";
import styles from "./registerForm.module.css";
import { useFormState } from "react-dom";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

const RegisterForm = () => {
  const [state, formAction] = useFormState(register, undefined);

  const router = useRouter();

  useEffect(() => {
    state?.success && router.push("/login");
  }, [state?.success, router]);

  return (
    <form className={styles.form} action={formAction}>
      <input
        className={styles.input}
        type="text"
        placeholder="username"
        name="username"
      />
      <input
        className={styles.input}
        type="email"
        name="email"
        placeholder="email"
      />
      <input
        className={styles.input}
        type="password"
        name="password"
        placeholder="password"
      />
      <input
        className={styles.input}
        type="password"
        name="passwordRepeat"
        placeholder="password again"
      />
      <button className={styles.button}>Register</button>

      {state?.error}

      <Link href="/login">
        Have an account? <b>Login</b>
      </Link>
    </form>
  );
};

export default RegisterForm;
