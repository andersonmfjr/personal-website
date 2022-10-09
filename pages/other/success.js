import Head from "next/head";
import Image from "next/image";
import styles from "../../styles/Newsletter.module.css";
import Link from "next/link";

export default function NewsletterSuccess() {
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
          Sucesso! 🥳
        </p>

        <p className={styles.description}>
          Sua inscrição na minha newsletter foi confirmada. Espero que goste do
          conteúdo 🤩
        </p>
      </main>
    </div>
  );
}
