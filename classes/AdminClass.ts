import {PrismaClient} from "@prisma/client";


export type Authlogin={
	user_name:any,
	password:any
}


class Admin {
	
	private sessionkey:string;

	constructor(sessionkey:string){
		this.sessionkey = sessionkey;
	}

	async login(user:Authlogin):boolean{
		
		const prisma = new PrismaClient();
		
		async function main(){
	
			//get user by username from db
		const checkUser = await prisma.admin.findUnique({
		where: {
			username: user.user_name
		}}).catch((e) => {
			console.log(`user does not exist username: {${user.user_name}}, err= ${e}`)
			return false
			});

			console.log(checkUser)
			if(checkUser.password == user.password) {
				//logged in 
				console.log("i be true")
				return true;
			}
			else{ //not logged in 
				console.log("yo")
				return false}
		
		}

	return main().then( async (e) => {
			await prisma.$disconnect().catch(console.log);
			return e
		});
	}	

	async auth():boolean{
		//prisma client 
		const prisma = new PrismaClient();
		const session = this.sessionkey;


		//Main function
		//Is async to send queries
		//Main function seperate to $disconnect database
		async function main()  {
			//Auth if user is logged in return true if true 
			const get_session_key = await prisma.sessionKeys.findUnique({
				where: {
				sessionKey: session,
				},
			}).catch((e) => {
				console.log(`Error: ${e} `);
				return false;
			});
			//isValidated return json key
			return get_session_key.isValidated || false; 
		}
		
	return 	main().then(async (value:any) => {
			await prisma.$disconnect().catch(console.log);
			console.log(value);
			if(value) {
				console.log("this is true")
				return true;
			}
			else { return false}

		}).catch(async (e) => {
			console.error(e)
			await prisma.$disconnect();
			return false;
			})
	}
}

export default Admin;
