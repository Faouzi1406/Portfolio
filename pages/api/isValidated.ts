// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import Admin from '../../classes/AdminClass'

type AuthUser = {
 status:boolean
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<AuthUser>
) {
	const admin = new Admin("this1testsessionkey");
	const adminis = await admin.auth();

  res.status(200).json({ status:adminis})
}
