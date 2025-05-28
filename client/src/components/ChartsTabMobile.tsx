import { Box, Text } from "@chakra-ui/react";
import { AnyObject } from "../types";
import Chart from "./Chart";

const ChartsTabMobile = ({ stats, total }: Props) => {
	return (
		<>
			{stats && (
				<Box sx={sx.chartConfig}>
					<Text sx={sx.title}>Total Vinyl Count: {total}</Text>
					<Box mb="10px">
						<Chart
							key={Math.random()}
							data={stats[0]}
							total={total}
							title={stats[0][0].title}
							mobile={true}
						/>
					</Box>
					<Box mb="10px">
						<Chart
							key={Math.random()}
							data={stats[2]}
							total={total}
							title={stats[2][0].title}
							mobile={true}
						/>
					</Box>
					<Box mb="10px">
						<Chart
							key={Math.random()}
							data={stats[1]}
							total={total}
							title={stats[1][0].title}
							mobile={true}
						/>
					</Box>
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
		overflowX: "hidden",
		overflowY: "auto",
		flexDirection: "column",
		justifyContent: "center",
	},
	title: {
		fontWeight: "bold",
		fontSize: "x-large",
		mb: "50px",
		mt: "50px",
	},
};

export default ChartsTabMobile;
