import NexAuth from 'next-auth'

const handler = NexAuth()

export { handler as GET, handler as POST }