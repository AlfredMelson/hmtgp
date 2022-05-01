import { NextApiRequest, NextApiResponse } from 'next'
import { getAllContent } from '../../../lib/fauna'

export default async function index(req: NextApiRequest, res: NextApiResponse) {
  try {
    if (req.method === 'GET') {
      const content = await getAllContent()

      res.status(200).json(content)
    } else {
      res.status(405).json({ message: 'Method Not Allowed' })
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    // eslint-disable-next-line no-console
    console.error(error)
    res.status(500).json({ message: error.message ?? 'Internal Server Error' })
  }
}

