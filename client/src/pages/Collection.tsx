import { Box, Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import ChartsTab from "../components/ChartsTab";
import GridView from "../components/GridView";
import MusicTable from "../components/MusicTable";
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

	const removeWords = (artist: string) => {
		let res = artist;
		// remove the words 'The' and 'A' from artists names to keep proper sorting
		if (artist.split(" ")[0] === "The") {
			res = artist.substring(4);
		} else if (artist.split(" ")[0] === "A") {
			res = artist.substring(2);
		}
		return res;
	};

	const sort = (data: any) => {
		let temp = [...data];
		temp.sort((a: any, b: any) => {
			let aArtist = removeWords(a.Artist);
			let bArtist = removeWords(b.Artist);

			// if same artist, sort by year
			return aArtist.localeCompare(bArtist) || a.Year - b.Year;
		});
		return temp;
	};

	useEffect(() => {
		fetchData();
		fetchStats();
	}, []);

	return (
		<Box sx={sx.pageConfig}>
			<Tabs isFitted variant="enclosed" size="sm" sx={sx.tabsContainer}>
				{data && (
					<>
						<TabList mb="1em">
							<Tab _selected={{ color: "white", bg: "primary" }}>
								Grid View
							</Tab>
							<Tab _selected={{ color: "white", bg: "secondary" }}>
								Table View
							</Tab>
							<Tab _selected={{ color: "white", bg: "highlight" }}>
								Charts
							</Tab>
						</TabList>
						<TabPanels>
							<TabPanel overflowY="auto">
								<GridView data={data} />
							</TabPanel>
							<TabPanel>
								<MusicTable data={data} />
							</TabPanel>
							<TabPanel style={{ height: "100%", padding: "0" }}>
								<ChartsTab stats={stats} />
							</TabPanel>
						</TabPanels>
					</>
				)}
			</Tabs>
		</Box>
	);
};

const sx = {
	tabsContainer: {
		bgColor: "white",
		boxShadow: "0px 0px 5px 5px gray",
		maxHeight: "95vh",
		borderTopLeftRadius: "1%",
		borderTopRightRadius: "1%",
	},
	pageConfig: {
		padding: 5,
		width: "100vw",
		height: "100vh",
	},
};

export default Collection;
