import { Center, Text, VStack } from "@chakra-ui/react";
import { Pie } from "@nivo/pie";

const Chart = (props: any) => {
	const title = <Text>{props.title}</Text>;

	return (
		<Center>
			<VStack>
				{title}
				<Pie
					data={props.data}
					width={450}
					height={270}
					margin={{ top: 40, right: 60, bottom: 50, left: 60 }}
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
						`${d.id}: ${((d.value / props.total) * 100).toFixed(0)}%`
					}
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
			</VStack>
		</Center>
	);
};

export default Chart;
