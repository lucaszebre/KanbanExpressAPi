import { type Session } from "@auth/express"

declare module "express" {
  interface Response {
    locals: {
      session?: Session
    },
    status?:any,
    json?:any
  }
  interface Request {
    body?:any,
    params?:any
  }
}
