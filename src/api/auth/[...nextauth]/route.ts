import NexAuth from 'next-auth'
import { options } from './options'

const handler = NexAuth(options)

export { handler as GET, handler as POST }