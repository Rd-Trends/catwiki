import { NextApiRequest, NextApiResponse } from "next";
import nextConnect from "next-connect";

const handler = nextConnect();

handler.get(async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const response = await fetch("https://api.thecatapi.com/v1/breeds", {
      headers: {
        "x-api-key": process.env.API_KEY!,
        "Content-Type": "application/json",
      },
      cache: "no-cache",
    });

    if (response.status === 200) {
      const data = await response.json();
      res.status(200).json(data);
    }
  } catch (err) {
    res.status(500).send("an error occured");
  }
});

export default handler;
