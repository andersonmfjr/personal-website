import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Home.module.css";

const SVG = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={styles.svg}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M17 8l4 4m0 0l-4 4m4-4H3"
      ></path>
    </svg>
  );
};

export default function Home() {
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

        <h1 className={styles.title}>andersonmfjr</h1>

        <p className={styles.description}>Front-end Engineer</p>

        <div className={styles.grid}>
          <a
            href="https://www.linkedin.com/in/andersonmfjr/"
            className={styles.card}
            target="_blank"
            rel="noreferrer"
          >
            <h2>LinkedIn </h2>
            {SVG()}
          </a>

          <a
            href="https://github.com/andersonmfjr"
            target="_blank"
            className={styles.card}
            rel="noreferrer"
          >
            <h2>Github</h2>
            {SVG()}
          </a>

          <Link href="/newsletter">
            <a className={styles.card}>
              <h2>Newsletter</h2>
              {SVG()}
            </a>
          </Link>
        </div>
      </main>
    </div>
  );
}
