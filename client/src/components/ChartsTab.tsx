import { Box, Center, HStack } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { AnyObject } from "../types";
import Chart from "./Chart";

const Charts = (props: any) => {
	const [total, setTotal] = useState<any>();
	const [stats, setStats] = useState<Array<any>>();

	const fetchData = async () => {
		const resp = await fetch("/aggregate");
		const respData = await resp.json();
		setTotal(respData.ScannedCount - 1);
		// make changes to data before setting state
		delete respData.Items[0].Album;
		delete respData.Items[0].UniqueID;
		const configuredData = configureStats(respData.Items[0]);
		setStats(configuredData);
	};

	// for every stat obj, convert it to an array
	const convertToArr = (stat: any, title: string) => {
		let arr = [];

		for (let key in stat) {
			let obj: AnyObject = {};
			obj.id = key;
			obj.label = key;
			obj.value = stat[key];
			obj.title = title;
			arr.push(obj);
		}
		return arr;
	};

	// for every chart, you need an array of objects
	const configureStats = (data: any) => {
		let arr = [];
		for (let key in data) {
			let temp = convertToArr(data[key], key);
			arr.push(temp);
		}
		return arr;
	};

	useEffect(() => {
		fetchData();
	}, []);

	return (
		<>
			{stats && (
				<Box sx={sx.chartConfig}>
					<Center>
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
					</Center>
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

const sx = {
	chartConfig: {
		maxH: "90vh",
		height: "86.5vh"
	}
	
}

export default Charts;
