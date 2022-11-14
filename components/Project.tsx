import Image from "next/image";
import Link from "next/link";

// const fetchProjects = async  (url:URL) => {
// 	const response = await fetch(url);
// 	const json =await response.json();

// 	return json;
// }

const Project = () => { 
	return (<div>
		<div className="rounded-md border p-1 flex gap-2">

			<Image  src="/terminal.jpeg" width={80} height={80} alt="icon"/>

			<Link href={"https://github.com/Faouzi1406/getcli-rust"}><div>
				<p className="font-bold">Getcli - Rustlang</p>
				<p>Maak webrequests vanuit de terminal</p>
			</div>
<p className="mt-10 w-20 border text-center">Github </p>
			</Link>
			<div className="font-bold flex flex-col justify-center mr-0">
			</div>
		</div>
		<div className="rounded-md border p-1 flex gap-2 mt-4">

			<Image  src="/portfolio.png" width={80} height={80} alt="icon"/>

			<Link href={"https://github.com/Faouzi1406/Portfolio"}><div>
				<p className="font-bold">Portfolio - Next.js</p>
				<p>Dit is mijn Portfolio - nog niet af</p>
			</div>
			<p className="mt-10 w-20 border text-center">Github </p>
			</Link>
			<div className="font-bold flex flex-col justify-center mr-0">
			</div>
		</div>

		<div className="rounded-md border p-1 flex gap-2 mt-4">

			<Image  src="/os.jpeg" width={80} height={80} alt="icon"/>

			<Link href={"https://github.com/Faouzi1406/os"}><div>
				<p className="font-bold">Blog OS - Rustlang </p>
				<p>Dit een os waarvan ik een tutorial volg- nog niet af - Op dit moment is er een boot screen</p>
			</div>
			<p className="mt-10 w-20 border text-center">Github </p>
			</Link>
			<div className="font-bold flex flex-col justify-center mr-0">
			</div>
		</div>
	</div>)
}
export default Project;

