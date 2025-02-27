import { Seo } from "@/ui/components/seo";
import { Button } from "@/ui/design-system/button/button";
import { Typography } from "@/ui/design-system/typography/typography";
import { Spinner } from "@/ui/design-system/spinner/spinner";
import { RiUser6Fill } from "react-icons/ri";

export default function Home() {
	return (
		<div className="space-y-5">
			<Seo title="Coders Monkey" description="description Coders Monkey" />

			<div className="flex items-center gap-4 p-10">
				<Spinner size="small"/>
				<Spinner />
				<Spinner size="large"/>
			</div>


			<div className="flex items-center gap-4 p-10">
				<Button isLoading size="small" icon={{icon : RiUser6Fill}}>Accent</Button>
				<Button size="small" icon={{icon : RiUser6Fill}} iconPosition="left" variant="secondary">Secondary</Button>
				<Button isLoading size="small" variant="outline">Outline</Button>
				<Button size="small" variant="disabled">Disabled</Button>
				<Button isLoading size="small" variant="ico" icon={{icon : RiUser6Fill}}/>
				<Button isLoading size="small" iconTheme="secondary" variant="ico" icon={{icon : RiUser6Fill}}/>
				<Button size="small" iconTheme="gray" variant="ico" icon={{icon : RiUser6Fill}}/>
			</div>

			<div className="flex items-center gap-4 p-10">
				<Button isLoading icon={{icon : RiUser6Fill}}>Accent</Button>
				<Button isLoading variant="secondary">Secondary</Button>
				<Button isLoading variant="outline">Outline</Button>
				<Button variant="disabled">Disabled</Button>
				<Button isLoading variant="ico" icon={{icon : RiUser6Fill}}/>
				<Button isLoading iconTheme="secondary" variant="ico" icon={{icon : RiUser6Fill}}/>
				<Button iconTheme="gray" variant="ico" icon={{icon : RiUser6Fill}}/>
			</div>

			<div className="flex items-center gap-4 p-10">
				<Button size="large" icon={{icon : RiUser6Fill}}>Accent</Button>
				<Button size="large" variant="secondary">Secondary</Button>
				<Button isLoading size="large" variant="outline">Outline</Button>
				<Button size="large" variant="disabled">Disabled</Button>
				<Button isLoading size="large" variant="ico" icon={{icon : RiUser6Fill}}/>
				<Button isLoading size="large" iconTheme="secondary" variant="ico" icon={{icon : RiUser6Fill}}/>
				<Button size="large" iconTheme="gray" variant="ico" icon={{icon : RiUser6Fill}}/>
			</div>

			{/* <Typography>Coders Monkey</Typography>
			<Typography component="div" variant="display" theme="primary">Coders Monkey</Typography>
			<Typography component="div" variant="h1" theme="secondary">Coders Monkey</Typography>
			<Typography component="div" variant="lead">Coders Monkey</Typography>
			<Typography component="div" variant="body-sm">Coders Monkey</Typography>
			<Typography component="div" variant="caption4">Coders Monkey</Typography>
			<Typography component="div" variant="caption4" weight="medium" >Coders Monkey</Typography> */}
		</div>
	);
}
