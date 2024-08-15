import { Seo } from "@/ui/components/seo";
import { Typography } from "@/ui/design-system/typography/typography";

export default function Home() {
	return (
		<div className="space-y-5">
			<Seo title="Coders Monkey" description="description Coders Monkey" />
			<Typography>Coders Monkey</Typography>
			<Typography component="div" variant="display" theme="primary">Coders Monkey</Typography>
			<Typography component="div" variant="h1" theme="secondary">Coders Monkey</Typography>
			<Typography component="div" variant="lead">Coders Monkey</Typography>
			<Typography component="div" variant="body-sm">Coders Monkey</Typography>
			<Typography component="div" variant="caption4">Coders Monkey</Typography>
			<Typography component="div" variant="caption4" weight="medium" >Coders Monkey</Typography>
		</div>
	);
}
