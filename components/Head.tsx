import Head from "next/head";

interface HeadType {
HeadTitle:String
}

const HeadHTML =(props:HeadType) =>  {
	return (
	<Head>
		<title>{props.HeadTitle}</title>
	</Head>
	)
}

export default HeadHTML;
