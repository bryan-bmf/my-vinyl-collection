import { Center, Text, VStack } from "@chakra-ui/react";
import { Pie } from "@nivo/pie";
import { AnyObject } from "../types";

const Chart = ({ title, mobile, data, total }: Props) => {
	return (
		<Center>
			<VStack sx={sx.container}>
			<Text>{title}</Text>
				<Pie
					data={data}
					width={mobile ? 400 : 450}
					height={mobile ? 200 : 260}
					margin={{ top: 30, right: 30, bottom: 30, left: 30 }}					
					padAngle={0.7}
					animate={false}
					colors={{ scheme: "category10" }}
					cornerRadius={3}
					activeOuterRadiusOffset={8}
					borderWidth={1}
					borderColor={{
						from: "color",
						modifiers: [["darker", 0.2]],
					}}
					arcLinkLabelsSkipAngle={10}
					arcLinkLabel={(d) =>
						`${d.id}: ${((d.value / total) * 100).toFixed(0)}%`
					}
					arcLinkLabelsTextColor="#333333"
					arcLinkLabelsThickness={2}
					arcLinkLabelsColor={{ from: "color" }}
					arcLinkLabelsDiagonalLength={10}
					arcLinkLabelsStraightLength={10}
					arcLabelsSkipAngle={10}
					arcLabelsTextColor={{
						from: "color",
						modifiers: [["darker", 2]],
					}}
					enableArcLabels={false}
					isInteractive={mobile ? false : true}
				/>
			</VStack>
		</Center>
	);
};

interface Props {
	title: string;
	data: Array<AnyObject>;
	total: number;
	mobile?: boolean;
}

const sx = {
	container: {
		gap: 0
	}
}

export default Chart;
