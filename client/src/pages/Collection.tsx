import {
	Box,
	Center,
	Image,
	Tab,
	TabList,
	TabPanel,
	TabPanels,
	Tabs,
	useBreakpoint,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { URL } from "../App";
import spinner from "../assets/spinner.gif";
import ChartsTab from "../components/ChartsTab";
import ChartsTabMobile from "../components/ChartsTabMobile";
import GridView from "../components/GridView";
import MusicTable from "../components/MusicTable";
import { AnyObject } from "../types";

const Collection = () => {
	const [data, setData] = useState<Array<AnyObject>>([]);
	const [stats, setStats] = useState<Array<AnyObject>>([]);
	const [loading, setLoading] = useState<boolean>(true);
	const [total, setTotal] = useState<number>(0);

	const fetchData = async () => {
		const resp = await fetch(`${URL}/vinyls`);
		const respData = await resp.json();
		const sortedData = sort(respData.Items);
		setData(sortedData);

		// wait half a second to dismiss the loading spinner
		setTimeout(() => {
			setLoading(false);
		}, 1000);
	};

	const fetchStats = async () => {
		const resp = await fetch(`${URL}/aggregate`);
		const respData = await resp.json();
		setTotal(respData.ScannedCount - 1);

		// make changes to data before setting state
		delete respData.Items[0].Album;
		delete respData.Items[0].UniqueID;

		const configuredData = configureStats(respData.Items[0]);
		setStats(configuredData);
	};

	// remove the words 'The' and 'A' from artists' names to keep proper sorting
	const removeWords = (artist: string) => {
		let res = artist;
		if (artist.split(" ")[0] === "The") {
			res = artist.substring(4);
		} else if (artist.split(" ")[0] === "A") {
			res = artist.substring(2);
		}
		return res;
	};

	const sort = (data: Array<AnyObject>) => {
		let temp = [...data];
		temp.sort((a: AnyObject, b: AnyObject) => {
			let aArtist = removeWords(a.Artist);
			let bArtist = removeWords(b.Artist);

			// if same artist, sort by year
			return aArtist.localeCompare(bArtist) || a.Year - b.Year;
		});
		return temp;
	};

	// for every stat obj, convert it to an array
	const convertToArr = (stat: AnyObject, title: string) => {
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
	const configureStats = (data: Array<AnyObject>) => {
		let arr = [];
		for (let key in data) {
			let temp = convertToArr(data[key], key);
			arr.push(temp);
		}
		return arr;
	};

	// check if mobile
	const breakpoint = useBreakpoint();
	let mobile = breakpoint === "base" ? true : false;

	useEffect(() => {
		fetchData();
		fetchStats();
	}, []);

	return (
		<Box sx={sx.pageConfig}>
			{loading ? (
				<Center sx={sx.loading}>
					<Image
						src={spinner}
						alt="Gray loading spinner in the form of a spinning record"
						role="img"
					/>
				</Center>
			) : (
				<Tabs isFitted variant="enclosed" size="sm" sx={sx.tabsContainer}>
					{data && (
						<>
							<TabList sx={sx.tabList}>
								<Tab
									_selected={{ color: "white", bg: "primary" }}
									color="black"
								>
									Grid View
								</Tab>
								<Tab
									_selected={{ color: "white", bg: "secondary" }}
									color="black"
								>
									Table View
								</Tab>
								<Tab
									_selected={{ color: "white", bg: "highlight" }}
									color="black"
								>
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
								<TabPanel sx={sx.chart}>
									{mobile ? (
										<ChartsTabMobile stats={stats} total={total} />
									) : (
										<ChartsTab stats={stats} total={total} />
									)}
								</TabPanel>
							</TabPanels>
						</>
					)}
				</Tabs>
			)}
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
	tabList: {
		mb: "1em",
		borderBottomWidth: "1px",
		borderBottomStyle: "solid",
		borderBottomColor: "#e2e8f0",
	},
	pageConfig: {
		padding: 5,
		width: "100vw",
		height: "100vh",
	},
	chart: {
		height: "100%",
		padding: "0",
		overflowY: "auto",
		overflowX: "hidden",
	},
	loading: {
		width: "inherit",
		height: "inherit",
		margin: -5, // offset el padding del homepage
	},
};

export default Collection;
