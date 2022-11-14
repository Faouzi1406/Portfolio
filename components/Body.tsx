import Titles from "./Title";
import Image from "next/image";
import Project from "./Project";
import LangFrame from "./framework_lang";

const Body = () => {
	return (
	<div className="w-full  flex gap-5 mt-10 flex-col items-center">
	<div className="flex flex-col items-center gap-2">
	<p className="font-bold text-white">FAOUZI BOUCHKHACHEKH</p>
	<Image src="/Mij.png" width={80} height={80}  className="rounded-full aspect-square border" alt="Profile Image" id="imagefaouzi"/>
	</div>
	
	<div className="text-white" id="about">
	<Titles title="About"/>
	<p className="font-bold text-white mb-2">Wie ben ik?</p>
	<p className="w-96 text-white">
	Mijn naam is Faouzi Bouchkhachekh.
	Ik ben een software developer die op dit moment de opleiding 
	software development volg of Grafisch Lyceum Rotterdam (Jaar 2). 
	Ik codeer voornammelijk in Rust, C# en JS. 	
	Ik heb ook goed kennis in JS library als React, en framework Next.js.
	Ook maak ik gebruik van vim als mijn code editor.
	Ik maak ook gebruik van linux als mij main os dus daar heb ik ook verstand van.
	Ik vind voorall system programming leuk, denk hier aan operating systems (Op dit moment maak ik een os in rustlang nog niet af), cli's(Command line interface) enz. .
	</p>
	</div>

	<div className="text-white">
	<Titles title="Projects"/>
	<p className="font-bold text-white mb-2">Mijn projecten</p>
	<div className="w-96 text-white">
		<Project />
	</div>
	</div>

	<div className="text-white">
	<Titles title="Frameworks & Languages"/>
	<p className="font-bold text-white mb-2">De frameworks en Progammeer talen die ik ken</p>
	<div className="w-96 text-white grid grid-cols-2 gap-2">
		<div className="w-full"><LangFrame  image="/rust.png" alt={"Rustlang logo"}/> Taal: Rustlang</div>
		<div className="w-full"><LangFrame image="/js.png" alt={"JS Logo"}/> Taal: JS</div>
		<div className="w-full"><LangFrame image="/react.png" alt={"REACT Logo"} /> Library: React</div>
		<div className="w-full"><LangFrame  image="/next.png" alt={"Next logo"}/> Frameworks: Next.JS</div>
		<div className="w-full"><LangFrame  image="/c.png" alt={"C# Logo"}/> Taal: C#</div>
	</div>
	</div>

	</div>
	)
}

export default Body;
