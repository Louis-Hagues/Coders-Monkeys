import Head from "next/head";

import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
	return (
		<>
			<Head>
				<title>Coders Monkey</title>
				<meta
					name="description"
					content="Coders Monkey"
					/>
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1"
				/>
				<link rel="icon" href="/favicon.ico"/>
			</Head>
		</>
	);
}
