import {NextPage} from "next";

async function userAuth(){
	const userAuth = await fetch("http://localhost:3000/api/isValidated");
	const res = await userAuth.json();
	return res;
}

const Page:NextPage = async ()=> {

		const user_loggedin = await userAuth();
	
	if(user_loggedin.status) { return (
		<div>
			<p>Logged in</p>
		</div>
		)
		}
		else {
		return (
			<p>Not logged in</p>
		)
		}
}

export default Page;
