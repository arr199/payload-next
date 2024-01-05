import { Payload, getPayload } from "payload/dist/payload";
import config from './payload.config';

if (!process.env.PAYLOAD_SECRET) {
  throw new Error('PAYLOAD_SECRET environment variable is missing')
}

let cached: {
  client: Payload | null,
  promise: Promise<Payload> | null
} = (global as any).payload

if (!cached) {
  cached = (global as any).payload = { client: null, promise: null }
}

export const getPayloadClient = async (): Promise<Payload> => {
  if (cached.client) {
    return cached.client
  }

  if (!cached.promise) {
    cached.promise = getPayload({
      secret: process.env.PAYLOAD_SECRET ?? "",
      config: config,
    })
  }

  try {
    cached.client = await cached.promise
  } catch (e) {
    cached.promise = null
    throw e
  }

  return cached.client
};

export default getPayloadClient;