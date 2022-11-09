import Link from "next/link";

const Header = () => {
	return (
	<div>
	<div>
	<div className="flex  flex-wrap justify-between font-mono p-2 bg-black text-white shadow-lg">
	
			<Link href={"/"}>
			FAOUZI	
			</Link>
	</div>

	</div>
		<header>
			<div className="flex  flex-wrap items-center justify-center font-mono p-2 text-white cursor-pointer select-none">
			<div className="flex gap-20 mr-10">
			<p>
			Home
			</p>
			<p>
			About
			</p>
			<p className="border pl-2 pr-2 rounded-lg">
			Projecten	
			</p>
			</div>
			</div>
		</header>
		</div>
	)
}

export default Header;
