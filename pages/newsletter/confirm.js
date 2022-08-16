import Head from "next/head";
import { useRouter } from "next/router";
import Image from "next/image";
import styles from "../../styles/Newsletter.module.css";
import Link from "next/link";

export default function NewsletterConfirm() {
  const router = useRouter();
  const { unconfirmed } = router.query;

  return (
    <div className={styles.container}>
      <Head>
        <title>andersonmfjr</title>
        <meta name="description" content="andersonmfjr personal website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <figure style={{ marginBottom: "1rem" }}>
          <Image
            src="/assets/photo.png"
            alt="andersonmfjr photo"
            width={100}
            height={100}
            style={{ borderRadius: "100%" }}
          />
        </figure>

        <Link href="/">
          <h1 className={styles.title}>andersonmfjr</h1>
        </Link>

        <p
          className={styles.description}
          style={{ fontSize: "1.5rem", marginTop: "2rem" }}
        >
          Confirme sua inscrição!
        </p>

        <p className={styles.description}>
          A confirmação que{" "}
          {unconfirmed === "true"
            ? "enviamos possivelmente caiu"
            : "enviaremos dentro de instantes possivelmente cairá"}{" "}
          na{" "}
          <strong>
            <u>caixa de promoções</u>
          </strong>{" "}
          ou{" "}
          <strong>
            <u>SPAM</u>
          </strong>{" "}
          do seu e-mail.
        </p>
      </main>
    </div>
  );
}
