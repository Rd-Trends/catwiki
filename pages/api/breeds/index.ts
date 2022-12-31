import { NextApiRequest, NextApiResponse } from "next";
import nextConnect from "next-connect";

const handler = nextConnect();

handler.get(async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const response = await fetch("https://api.thecatapi.com/v1/breeds", {
      headers: {
        "x-api-key":
          "live_A1WvrTMvRPw21apXysbZf37U9WN5iKK77fJnW0WLncP0JmLne72NT32kOAJqLHts",
        "Content-Type": "application/json",
      },
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
