// components
import {
	Table,
	TableContainer,
	Tbody,
	Td,
	Text,
	Th,
	Thead,
	Tr,
	useDisclosure
} from "@chakra-ui/react";
import { useMemo, useState } from "react";
// icons
import { TriangleDownIcon, TriangleUpIcon } from "@chakra-ui/icons";
// types
import { AnyObject } from "../types";
import PlayerModal from "./PlayerModal";

const ArtistTable = (props: any) => {
	const [data, setData] = useState<Array<AnyObject>>(props.data);
	const [sortConfig, setSortConfig] = useState<AnyObject>({});
	const [selectedAlbum, setSelectedAlbum] = useState<AnyObject>({});

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

	// modal disclosure
	const {
		isOpen: isOpen,
		onOpen: openPlayer,
		onClose: handleClosePlayer,
	} = useDisclosure();

	//memo checks if there were changes before executing another sort
	const sortedData = useMemo(() => {
		if (data && sortConfig !== null) {
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
		let field = event.target.textContent;

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

	//set selected album as a state to pass it along to the modal
	const handleOpenPlayer = (album: AnyObject) => {
		setSelectedAlbum(album);
		openPlayer();
	};

	let list = sortedData?.map((current: AnyObject, index: number) => (
		<Tr key={current.UniqueID}>
			<Td isNumeric>{index + 1}</Td>
			<Td>{current.Artist}</Td>
			<Td>
				<Text
					sx={sx.link}
					onClick={() =>
						handleOpenPlayer({
							spotifyAlbumId: current.SpotifyAlbumID,
							isAlbum: current.IsAlbum,
						})
					}
				>
					{current.Album}
				</Text>
			</Td>
			<Td>{current.Genre}</Td>
			<Td isNumeric>{current.Year}</Td>
			<Td>{current.Language}</Td>
			<Td>{current.Location}</Td>
			<Td isNumeric>{current.Purchased}</Td>
		</Tr>
	));

	return (
		<div>
			<TableContainer maxH="500px" w="100%" overflowY="auto">
				<Table variant="striped" size="sm">
					<Thead position="sticky">
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
										{sortConfig.field ===
										column.name ? (
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
			{/* Modal */}
			<PlayerModal
				album={selectedAlbum}
				modalDisclosure={{
					isOpen: isOpen,
					onOpen: handleOpenPlayer,
					onClose: handleClosePlayer,
				}}
			/>
		</div>
	);
};

const sx = {
	tableHeader: {
		cursor: "pointer",
	},
	triangleIcon: {
		paddingBottom: "3px",
		paddingLeft: "4px",
	},
	link: {
		textDecoration: "underline",
		cursor: "pointer",
	},
};

export default ArtistTable;