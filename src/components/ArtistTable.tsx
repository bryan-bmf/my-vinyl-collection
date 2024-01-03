// components
import {
	Table,
	TableContainer,
	Tbody,
	Td,
	Tfoot,
	Th,
	Thead,
	Tr,
} from "@chakra-ui/react";
import { useMemo, useState } from "react";
// icons
import { TriangleDownIcon, TriangleUpIcon } from "@chakra-ui/icons";
// data
import { artistData } from "../data/seed";

const ArtistTable = () => {
	const [data, setData] = useState<Array<AnyObject>>(artistData);
	const [sortConfig, setSortConfig] = useState<AnyObject>({});

	const columns: Array<AnyObject> = [
		{ name: "#", isNumeric: true },
		{ name: "Artist", isNumeric: false },
		{ name: "Album", isNumeric: false },
		{ name: "Genre", isNumeric: false },
		{ name: "Year", isNumeric: true },
		{ name: "Language", isNumeric: false },
		{ name: "Location", isNumeric: false },
		{ name: "Purchased", isNumeric: true },
	];

	//memo checks if there were changes before executing another sort
	const sortedData = useMemo(() => {
		if (sortConfig !== null) {
			//copy state to make modifications to temp var
			let temp = [...data];
			//sort by clicked field
			temp.sort((a: any, b: any) => {
				if (a[sortConfig.field] < b[sortConfig.field]) {
					return sortConfig.direction === "ascending" ? -1 : 1;
				}
				if (a[sortConfig.field] > b[sortConfig.field]) {
					return sortConfig.direction === "ascending" ? 1 : -1;
				}
				return 0;
			});

			return temp;
		}
	}, [sortConfig, data]);

	const handleSort = (event: any) => {
		let field = event.target.textContent.toLowerCase();

		//don't sort by index
		if (field === "#") {
			return;
		}

		let direction = "ascending";
		//switch direction is sorted field is clicked
		if (sortConfig.field === field && sortConfig.direction === "ascending") {
			direction = "descending";
		}
		setSortConfig({ field, direction });
	};

	let list = sortedData?.map((current: AnyObject, index: number) => (
		<Tr key={current.spotifyAlbumId}>
			<Td isNumeric>{index + 1}</Td>
			<Td>{current.artist}</Td>
			<Td>{current.album}</Td>
			<Td>{current.genre}</Td>
			<Td isNumeric>{current.year}</Td>
			<Td>{current.language}</Td>
			<Td>{current.location}</Td>
			<Td isNumeric>{current.purchased}</Td>
		</Tr>
	));

	return (
		<TableContainer>
			<Table variant="striped" size="sm">
				<Thead>
					<Tr>
						{columns.map((column) => (
							<Th
								key={Math.random()}
								onClick={handleSort}
								isNumeric={column.isNumeric}
								sx={sx.tableHeader}
							>
								{column.name}
								<span>
									{sortConfig.field === column.name.toLowerCase() ? (
										sortConfig.direction === "ascending" ? (
											<TriangleUpIcon sx={sx.triangleIcon} />
										) : (
											<TriangleDownIcon sx={sx.triangleIcon} />
										)
									) : null}
								</span>
							</Th>
						))}
					</Tr>
				</Thead>
				<Tbody>{list}</Tbody>
			</Table>
		</TableContainer>
	);
};

interface AnyObject {
	[key: string]: any;
}

const sx = {
	tableHeader: {
		cursor: "pointer",
	},
	triangleIcon: {
		paddingBottom: "3px",
		paddingLeft: "4px",
	},
};

export default ArtistTable;
