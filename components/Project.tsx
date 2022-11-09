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

			<Image  src="/Mij.png" width={80} height={80} alt="icon"/>

			<div>
				<p className="font-bold">ProjectName</p>
				<p>Description</p>
			</div>
			<div className="font-bold flex flex-col justify-center mr-0">
			</div>
		</div>
		<Link href={"more"}>More Projects</Link>
	</div>)
}
export default Project;

