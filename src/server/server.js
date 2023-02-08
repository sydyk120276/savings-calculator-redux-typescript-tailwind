import dotenv from 'dotenv/config'
import express from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import fileUpload from 'express-fileupload'
import path from 'path'
import { fileURLToPath } from "url";

import config from './config.js'
import mongooseService from './services/mongoose.js'
import router from './router/index.js'
import errorMiddleware from './middlewares/error-middleware.js'

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PORT = config.port
const server = express()

const middleware = [
  cors({
    credentials: true,
    origin: process.env.CLIENT_URL,
  }),
  cookieParser(),
  express.json({ limit: "50kb" }),
  express.static(path.resolve(__dirname, "static")),
  fileUpload({}),
  // favicon(`${__dirname}/public/favicon.ico`)
];

middleware.forEach((it) => server.use(it))

server.use('/api', router)

server.use(errorMiddleware)

const start = () => {
  try {
    if (config.mongoEnabled) {
      // eslint-disable-next-line
      console.log('MongoDB Enabled: ', config.mongoEnabled)
      mongooseService()
    }
    server.listen(PORT, () => console.log(`Server started on PORT = ${PORT}`))
  } catch (e) {
    console.log(e)
  }
}

start()