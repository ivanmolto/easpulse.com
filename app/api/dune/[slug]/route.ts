import { DuneClient } from "@duneanalytics/client-sdk";
import { type NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { slug } = req.query;

  if (!process.env.DUNE_API_KEY) {
    return res.status(500).json({ error: "API key not configured" });
  }

  const client = new DuneClient(process.env.DUNE_API_KEY);

  try {
    const results = await client.custom.getResults({
      handle: "ivanmolto",
      slug: slug as string,
    });

    return res.status(200).json(results);
  } catch {
    return res.status(500).json({ error: "Failed to fetch data" });
  }
}
