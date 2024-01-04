import express from "express"
import * as dotenv from "dotenv"
import { nextApp, nextHandler } from "./next-app"
import payload from "payload"

dotenv.config()
const app = express()
const PORT = process.env.PORT ?? 3333

const start =  async () => {
    await payload.init({
        secret  : process.env.PAYLOAD_SECRET ?? "" ,
        express : app
    })
    payload.logger.info("Initializing payload")
    app.use( async (req, res) =>  await nextHandler(req,res) )

    nextApp.prepare().then( () => {
    app.listen( PORT,  () => {
        console.log(`Server up at ${process.env.SERVER_PUBLIC_URL}`) 
    })
})
} 

start()