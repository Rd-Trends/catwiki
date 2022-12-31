import { NextApiRequest, NextApiResponse } from "next";
import nextConnect from "next-connect";

import { image } from "../../../interface";

const handler = nextConnect();

handler.get(async (req: NextApiRequest, res: NextApiResponse) => {
  const { id } = req.query;
  //   return res.status(200).json({ id });
  try {
    const response = await fetch(
      `https://api.thecatapi.com/v1/images/search?limit=8&breed_ids=${id}&order=RAND`,
      {
        headers: {
          "x-api-key":
            "live_A1WvrTMvRPw21apXysbZf37U9WN5iKK77fJnW0WLncP0JmLne72NT32kOAJqLHts",
          "Content-Type": "application/json",
        },
      }
    );

    if (response.status === 200) {
      const data = await response.json();
      const images = data.map((image: image) => {
        const { id, url, width, height } = image;
        return { id, url, width, height };
      });
      res.status(200).json(images);
    }
  } catch (err) {
    res.status(500).send("an error occured");
  }
});

export default handler;
