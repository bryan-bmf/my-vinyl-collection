import { Text } from "@chakra-ui/react";
import { ResponsivePie } from "@nivo/pie";
import { useEffect, useState } from "react";
import { AnyObject } from "../types";

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
	const convertToArr = (stat: any) => {
		let arr = [];

		for (let key in stat) {
			let obj: AnyObject = {};
			obj.id = key;
			obj.label = key;
			obj.value = stat[key];
			arr.push(obj);
		}
		return arr;
	};

	// for every chart, you need an array of objects
	const configureStats = (data: any) => {
		let arr = [];
		for (let key in data) {
			let temp = convertToArr(data[key]);
			arr.push(temp);
		}
		return arr;
	};

	const title = <Text>Hi there. Your Title here!</Text>;

	useEffect(() => {
		fetchData();
	}, []);

	return (
		<>
			{
				stats && 
				<ResponsivePie
					data={stats[0]}
					margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
					padAngle={0.7}
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
					arcLabelsSkipAngle={10}
					arcLabelsTextColor={{
						from: "color",
						modifiers: [["darker", 2]],
					}}
					enableArcLabels={false}
				/>
			}
		</>
	);
};

export default Charts;
