import Image from "next/image";

const LangFrame = (props:any) => {
	return (
	<div className="bg-white w-full h-36 mb-2 shadow-xl rounded-md p-2">
		<Image src={props.image} className="rounded-md w-full h-full" width={80} height={80} alt={props.alt}/>
	</div>
	)
}	

export default LangFrame;
