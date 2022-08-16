import Head from "next/head";
import { useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import styles from "../../styles/Newsletter.module.css";
import Link from "next/link";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const onSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const data = await fetch("/api/subscribe", {
        body: JSON.stringify({ email }),
        method: "POST",
      });

      setLoading(false);

      if (data.status === 200 || data.status === 201) {
        router.push("/newsletter/confirm");
      }

      const res = await data.json();

      if (res.unconfirmed) {
        router.push("/newsletter/confirm", { query: { unconfirmed: true } });
      }
    } catch (error) {
      setLoading(false);
    }
  };

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

        <p className={styles.description}>
          Olá! Meu nome é Anderson Feitosa ✋
        </p>

        <p className={styles.description}>
          Eu trabalho com tecnologia e desenvolvimento de software e consumo
          conteúdos relacionados todos os dias. Minha newsletter possui o
          conteúdo curado que consumi recentemente.
        </p>

        <p className={styles.description} style={{ marginBottom: 0 }}>
          Os conteúdos podem ser de vários temas: front-end, carreira, UX,
          vídeos, back-end, etc… e também pode ter conteúdo não técnico as vezes
          😅.
        </p>

        <hr className={styles.hr}></hr>

        <form className={styles.form} onSubmit={onSubmit}>
          <p
            className={styles.description}
            style={{ marginBottom: 5, fontSize: "1rem" }}
          >
            Se inscreva na minha Newsletter:
          </p>
          <label className={styles["email-label"]}>
            <span>
              <svg
                viewBox="0 0 24 24"
                width="16"
                height="16"
                stroke="#0070c9"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
                shapeRendering="geometricPrecision"
              >
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                <path d="M22 6l-10 7L2 6"></path>
              </svg>
            </span>
            <input
              type="email"
              name="email_address"
              placeholder="Seu email principal"
              autoCorrect="off"
              autoCapitalize="off"
              spellCheck="false"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={styles["email-input"]}
            />
          </label>

          <button
            type="submit"
            className={styles["email-button"]}
            disabled={loading}
          >
            {loading ? "Enviando..." : "Inscrever-se"}
          </button>
        </form>
      </main>
    </div>
  );
}
