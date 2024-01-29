import { Box, Center, HStack } from "@chakra-ui/react";
import { AnyObject } from "../types";
import Chart from "./Chart";

const ChartsTab = ({ stats, total }: Props) => {
	return (
		<>
			{stats && (
				<Box sx={sx.chartConfig}>
					<HStack>
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
					</HStack>
					<Center>
						<HStack>
							<Chart
								key={Math.random()}
								data={stats[3]}
								total={total}
								title={stats[3][0].title}
							/>
							<Chart
								key={Math.random()}
								data={stats[4]}
								total={total}
								title={stats[4][0].title}
							/>
						</HStack>
					</Center>
				</Box>
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
	},
};

export default ChartsTab;
