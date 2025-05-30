// components
import {
	Box,
	Table,
	TableContainer,
	Tbody,
	Td,
	Text,
	Th,
	Thead,
	Tr,
	useBreakpoint,
	useDisclosure
} from "@chakra-ui/react";
import { useMemo, useState } from "react";
// icons
import {
	ExternalLinkIcon,
	TriangleDownIcon,
	TriangleUpIcon,
} from "@chakra-ui/icons";
// types
import { AnyObject } from "../types";
import PlayerModal from "./PlayerModal";

const MusicTable = ({ data }: Props) => {
	const [sortConfig, setSortConfig] = useState<AnyObject>({
		field: "Artist",
		direction: "ascending",
	});
	const [selectedAlbum, setSelectedAlbum] = useState<AnyObject>({});

	const columns: Array<AnyObject> = [
		{ name: "#", isNumeric: true },
		{ name: "Artist", isNumeric: false },
		{ name: "Album", isNumeric: false },
		{ name: "Genre", isNumeric: false },
		{ name: "Year", isNumeric: true },
		{ name: "Language", isNumeric: false },
	];

	// modal disclosure
	const {
		isOpen: isOpen,
		onOpen: openPlayer,
		onClose: handleClosePlayer,
	} = useDisclosure();

	// memo checks if there were changes before executing another sort
	const sortedData = useMemo(() => {
		if (data && sortConfig !== null) {
			//copy state to make modifications to temp var
			let temp = [...data];
			//sort by clicked field
			temp.sort((a: any, b: any) => {
				// for artist, add year as a secondary sort
				if (sortConfig.field === "Artist") {
					if (sortConfig.direction === "ascending") {
						return a.Artist.localeCompare(b.Artist) || a.Year - b.Year;
					} else
						return b.Artist.localeCompare(a.Artist) || a.Year - b.Year;
				} else {
					if (a[sortConfig.field] < b[sortConfig.field]) {
						return sortConfig.direction === "ascending" ? -1 : 1;
					}
					if (a[sortConfig.field] > b[sortConfig.field]) {
						return sortConfig.direction === "ascending" ? 1 : -1;
					}
					return 0;
				}
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

	// check if mobile
	const breakpoint = useBreakpoint();
	let mobile = breakpoint === "base" ? true : false;

	let list = sortedData?.map((current: AnyObject, index: number) => (
		<Tr key={current.UniqueID} role="row" sx={sx.row}>
			{mobile ? undefined : <Td isNumeric>{index + 1}</Td>}

			<Td sx={mobile ? sx.columnMobile : undefined}>{current.Artist}</Td>
			<Td sx={mobile ? sx.columnMobile : undefined}>
				<Box
					sx={{ ...sx.album, ...(mobile && sx.albumMobile) }}
					onClick={() =>
						handleOpenPlayer({
							spotifyAlbumId: current.SpotifyAlbumID,
							isAlbum: current.IsAlbum,
						})
					}
				>
					<Text sx={sx.link}>{current.Album}</Text>
					<ExternalLinkIcon sx={sx.icon} />
				</Box>
			</Td>
			<Td>{current.Genre}</Td>
			<Td isNumeric>{current.Year}</Td>
			<Td>{current.Language}</Td>
		</Tr>
	));

	return (
		<>
			<TableContainer sx={sx.tableConfig} role="table">
				<Table size="sm">
					<Thead sx={sx.tableHeader}>
						<Tr>
							{columns.map((column) => {
								if (mobile && column.name === "#") return;
								else {
									return (
										<Th
											key={Math.random()}
											onClick={handleSort}
											isNumeric={column.isNumeric}
											role="columnheader"
											color="#4a5568"
										>
											{column.name}
											<span>
												{sortConfig.field === column.name ? (
													sortConfig.direction === "ascending" ? (
														<TriangleUpIcon
															sx={sx.triangleIcon}
														/>
													) : (
														<TriangleDownIcon
															sx={sx.triangleIcon}
														/>
													)
												) : null}
											</span>
										</Th>
									);
								}
							})}
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
		</>
	);
};

interface Props {
	data: Array<AnyObject>;
}

const sx = {
	tableHeader: {
		cursor: "pointer",
		position: "sticky",
		top: 0,
		bgColor: "white",
	},
	tableConfig: {
		maxH: "82vh",
		overflow: "auto",
	},
	triangleIcon: {
		paddingBottom: "3px",
		paddingLeft: "4px",
	},
	link: {
		textDecoration: "underline",
		cursor: "pointer",
		textOverflow: "ellipsis",
		overflow: "hidden",
	},
	columnMobile: {
		textOverflow: "ellipsis",
		overflow: "hidden",
		maxWidth: "150px",
	},
	album: {
		flexDirection: "row",
		display: "flex",
		width: "fit-content",
	},
	albumMobile: {
		width: "auto",
	},
	icon: {
		marginLeft: "2px",
		cursor: "pointer",
	},
	row: {
		"&:nth-child(odd)": { backgroundColor: "#bee3f8"},
		td: {borderBottom: "none" }
	}
};

export default MusicTable;
