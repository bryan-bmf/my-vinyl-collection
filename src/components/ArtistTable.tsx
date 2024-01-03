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
import React, { useMemo } from "react";
import { TriangleDownIcon, TriangleUpIcon } from "@chakra-ui/icons";
import { useEffect, useState } from "react";

import { artistData } from "./seed";

const ArtistTable = () => {
	const [data, setData] = useState<Array<AnyObject>>(artistData);
	const [sortConfig, setSortConfig] = useState<AnyObject>({});

	const columns = [
		"#",
		"Artist",
		"Album",
		"Genre",
		"Year",
		"Language",
		"Location",
		"Purchased",
	];

	// const fetchData = async (controller: AbortController) => {
	// 	const resp = await fetch(url, {
	// 		signal: controller.signal,
	// 	});

	// 	if (!resp.ok) throw new Error("Explotó");

	// 	const respData = await resp.json();
	// 	setArtists(respData);
	// 	console.log(respData)
	// };

	// useEffect(() => {
	// 	let controller = new AbortController();

	// 	fetchData(controller);

	// 	return () => controller?.abort();
	// }, []);

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
								key={column}
								onClick={handleSort}
								style={{ cursor: "pointer" }}
							>
								{column}
								<span style={{ paddingLeft: 4 + "px" }}>
									{sortConfig.field === column.toLowerCase() ? (
										sortConfig.direction === "ascending" ? (
											<TriangleUpIcon />
										) : (
											<TriangleDownIcon />
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

export default ArtistTable;
