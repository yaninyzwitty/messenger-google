import Pusher from "pusher"
import ClientPusher from "pusher-js"


// nodejs
export const serverPusher = new Pusher({
appId: process.env.APP_ID!,
  key: process.env.APP_KEY!,
  secret: process.env.APP_SECRET!,
  cluster: "ap2",
  useTLS: true

})

// react
export const clientPusher = new ClientPusher('248e77db2b917f71b7a1', {
    cluster: 'ap2',
    forceTLS: true,

    
  })


