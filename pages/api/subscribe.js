export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      const data = await fetch(process.env.SUBS_API, {
        body: req.body,
        method: "POST",
        headers: {
          Authorization: `Token ${process.env.SUBS_TOKEN}`,
          "Content-Type": "application/json",
        },
      });

      if (data.response === 200 || data.status === 201) {
        const json = await data.json();
        res.status(200).json(json);
      }

      const json = await data.json();
      const unconfirmed = json.some(
        (m) => m.includes("not confirmed") || m.includes("not provided")
      );
      res.status(400).json({ unconfirmed });
    } catch (error) {
      res.status(400);
    }
  } else {
    res.status(200).json({ message: "ok" });
  }
}
