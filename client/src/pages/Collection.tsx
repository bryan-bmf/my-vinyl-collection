import {
	Box,
	Tab,
	TabList,
	TabPanel,
	TabPanels,
	Tabs
} from "@chakra-ui/react";
import ArtistTable from "../components/ArtistTable";
import Charts from "../components/Charts";
import GridView from "../components/GridView";

const Collection = () => {
	return (
		<Box padding={10}>
			<Tabs isFitted variant="enclosed">
				<TabList mb="1em">
					<Tab>Grid View</Tab>
					<Tab>Table View</Tab>
					<Tab>Charts</Tab>
				</TabList>
				<TabPanels>
					<TabPanel>
						<GridView />
					</TabPanel>
					<TabPanel>
						<ArtistTable />
					</TabPanel>
					<TabPanel style={{ height: 400 }}>
						<Charts />
					</TabPanel>
				</TabPanels>
			</Tabs>
		</Box>
	);
};

export default Collection;
