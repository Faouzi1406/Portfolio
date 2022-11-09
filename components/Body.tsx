import Titles from "./Title";
import Image from "next/image";
import Project from "./Project";
const Body = () => {
	return (
	<div className="w-full  flex gap-5 mt-10 flex-col items-center">
	<div className="flex flex-col items-center gap-2">
	<p className="font-bold text-white">FAOUZI BOUCHKHACHEKH</p>
	<Image src="/Mij.png" width={80} height={80}  className="rounded-full aspect-square border" alt="Profile Image"/>
	</div>
	<div className="text-white">
	<Titles title="About"/>
	<p className="font-bold text-white mb-2">Wie ben ik?</p>
	<p className="w-96 text-white">
	Mijn naam is Faouzi Bouchkhachekh.
	Ik ben een software developer die op dit moment de opleiding 
	software development volg of Grafisch Lyceum Rotterdam. 
	Ik codeer voornammelijk in Rust, C# en JS. 	
	</p>
	</div>

	<div className="text-white">
	<Titles title="Projects"/>
	<p className="font-bold text-white mb-2">Mijn projecten</p>
	<div className="w-96 text-white">
		<Project />
	</div>
	</div>
	</div>
	)
}

export default Body;
