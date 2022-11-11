// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import Admin, {Authlogin} from '../../classes/AdminClass'

type AuthUser = {
 status:boolean
}


export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<AuthUser>
) {
	const login_type:Authlogin= await  {user_name: req.body.username, password: req.body.pass} 
	console.log(login_type);
	const admin = new Admin("null");
	const loggedin= await admin.login(login_type);
	console.log(loggedin);

	res.status(200).json({status:loggedin})
}
