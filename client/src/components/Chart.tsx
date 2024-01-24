import { Center, Text, VStack } from "@chakra-ui/react";
import { Pie } from "@nivo/pie";

const Chart = (props: any) => {
	const title = <Text>{props.title}</Text>;

	const mobile = props.mobile !== undefined ? true : false;

	return (
		<Center>
			<VStack>
				{title}
				<Pie
					data={props.data}
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
					isInteractive={mobile ? false : true}
				/>
			</VStack>
		</Center>
	);
};

export default Chart;
