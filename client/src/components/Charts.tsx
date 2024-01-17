import { ResponsivePie } from "@nivo/pie";
import { useEffect, useState } from "react";
import { artistData } from "../data/seed";
import { AnyObject } from "../types";

const Charts = (props: any) => {
	const [data, setData] = useState<Array<AnyObject>>(artistData);

	const [data1, setData1] = useState<AnyObject>();

	let colors: any = [
		"#2f4f4f",
		"#2e8b57",
		"#8b0000",
		"#808000",
		"#000080",
		"#ff0000",
		"#ff8c00",
		"#7fff00",
		"#ba55d3",
		"#00ffff",
		"#0000ff",
		"#f08080",
		"#ff00ff",
		"#1e90ff",
		"#ffff54",
		"#dda0dd",
		"#ff1493",
		"#f5deb3",
		"#98fb98",
		"#808080",
		"#000000",
	];

	const idiomas = [
		{
			id: "sass",
			label: "sass",
			value: 265,
			color: "hsl(169, 70%, 50%)",
		},
		{
			id: "go",
			label: "go",
			value: 141,
			color: "hsl(180, 70%, 50%)",
		},
		{
			id: "java",
			label: "java",
			value: 480,
			color: "hsl(131, 70%, 50%)",
		},
		{
			id: "make",
			label: "make",
			value: 272,
			color: "hsl(74, 70%, 50%)",
		},
		{
			id: "stylus",
			label: "stylus",
			value: 68,
			color: "hsl(312, 70%, 50%)",
		},
	];

	const fetchData = async () => {
		const resp = await fetch("/aggregate");
		const respData = await resp.json();
	};

	useEffect(() => {
		fetchData();
	}, []);

	return (
		<ResponsivePie
			data={idiomas}
			margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
			padAngle={0.7}
			cornerRadius={3}
			activeOuterRadiusOffset={8}
			borderWidth={1}
			borderColor={{
				from: "color",
				modifiers: [["darker", 0.2]],
			}}
			arcLinkLabelsSkipAngle={10}
			arcLinkLabel={(d) => `${d.id}: ${(d.value / 1226) * 100}`}
			arcLinkLabelsTextColor="#333333"
			arcLinkLabelsThickness={2}
			arcLinkLabelsColor={{ from: "color" }}
			arcLabelsSkipAngle={10}
			arcLabelsTextColor={{
				from: "color",
				modifiers: [["darker", 2]],
			}}
			enableArcLabels={false}
		/>
	);
};

export default Charts;
