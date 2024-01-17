import { Box, Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import ArtistTable from "../components/ArtistTable";
import Charts from "../components/Charts";
import GridView from "../components/GridView";
import { AnyObject } from "../types";

const Collection = () => {
	const [data, setData] = useState<Array<AnyObject>>();
	const [stats, setStats] = useState<Array<AnyObject>>();

	const fetchData = async () => {
		const resp = await fetch("/vinyls");
		const respData = await resp.json();
		const sortedData = sort(respData.Items);
		setData(sortedData);
	};

	const fetchStats = async () => {
		const resp = await fetch("/aggregate");
		const respData = await resp.json();
		setStats(respData.Items);
	};

	const sort = (data: any) => {
		let temp = [...data];
		temp.sort((a: any, b: any) => 
			// if same artist, sort by year
			a.Artist.localeCompare(b.Artist) || a.Year - b.Year
		);
		return temp;
	};

	useEffect(() => {
		fetchData();
		fetchStats();
	}, []);

	return (
		<Box padding={10}>
			<Tabs isFitted variant="enclosed">
				{data && (
					<>
						<TabList mb="1em">
							<Tab>Grid View</Tab>
							<Tab>Table View</Tab>
							<Tab>Charts</Tab>
						</TabList>
						<TabPanels>
							<TabPanel overflowY="auto">
								<GridView data={data} />
							</TabPanel>
							<TabPanel>
								<ArtistTable data={data} />
							</TabPanel>
							<TabPanel style={{ height: 400 }}>
								<Charts stats={stats} />
							</TabPanel>
						</TabPanels>
					</>
				)}
			</Tabs>
		</Box>
	);
};

export default Collection;
