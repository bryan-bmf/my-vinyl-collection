import { Center, Flex, Text } from "@chakra-ui/react";
import { AnyObject } from "../types";
import Chart from "./Chart";

const ChartsTab = ({ stats, total }: Props) => {
	return (
		<>
			{stats && (
				<Flex sx={sx.chartConfig}>
					<Center mb="50px">
						<Text sx={sx.title}>Total Vinyl Count: {total}</Text>
					</Center>
					<Center>
						<Chart
							key={Math.random()}
							data={stats[0]}
							total={total}
							title={stats[0][0].title}
						/>
						<Chart
							key={Math.random()}
							data={stats[2]}
							total={total}
							title={stats[2][0].title}
						/>
						<Chart
							key={Math.random()}
							data={stats[1]}
							total={total}
							title={stats[1][0].title}
						/>
					</Center>
				</Flex>
			)}
		</>
	);
};

interface Props {
	stats: AnyObject;
	total: number;
}

const sx = {
	chartConfig: {
		maxH: "90vh",
		height: "86.5vh",
		overflowX: "auto",
		flexDirection: "column",
		justifyContent: "center",
	},
	title: {
		fontWeight: "bold",
		fontSize: "x-large",
	},
};

export default ChartsTab;
