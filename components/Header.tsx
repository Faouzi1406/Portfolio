import Link from "next/link";

const Header = () => {

	function go_about(){
		let div = document.getElementById("imagefaouzi");
		div?.scrollIntoView({behavior:"smooth"});
	}

	return (
	<div className="sticky top-0 backdrop-blur-sm bg-white/30">
	<div>
	<div className="flex  flex-wrap justify-between font-mono p-2 bg-black text-white shadow-lg">
			<Link href={"/"}>
			FAOUZI	
			</Link>
	</div>

	</div>
		<header className="">
			<div className="flex  flex-wrap items-center justify-center font-mono p-2 text-white cursor-pointer select-none">
			<div className="flex gap-20 mr-10">
			<Link href={"/"}>Home</Link>
			<p onClick={go_about}>
			About
			</p>
			<p className="border pl-2 pr-2 rounded-lg">
			<Link href="https://github.com/Faouzi1406?tab=repositories">Github</Link>
			</p>
			</div>
			</div>
		</header>
		</div>
	)
}

export default Header;
