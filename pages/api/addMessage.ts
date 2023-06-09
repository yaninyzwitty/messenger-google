// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { serverPusher } from '../../pusher'
import redis from '../../redis'

type Data = {
  message: Message
}
type ErrorData = {
  body: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data | ErrorData>
) {
  if(req.method !== 'POST') {
      res.status(405).json({ body: 'Method not allowed' });
      return;
  }
  const { message } = req.body;

  const newMessage = {
      ...message,
      created_at: Date.now(),
  }
  await redis.hset('messages', message.id, JSON.stringify(newMessage));
  serverPusher.trigger("messages", "new-message", newMessage); //soas to subscribe to all the clients




  // pushtoredis

  
res.status(200).json({ message: newMessage })
}