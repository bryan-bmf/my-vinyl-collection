import { useEffect, useState } from "react";
import { artistData } from "../data/seed";
import { AnyObject } from "../types";
import { Badge, Box, Card, Image, Text, useDisclosure } from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons";
import { Spotify } from "react-spotify-embed";
import PlayerModal from "./PlayerModal";

const AlbumCover = (props: any) => {
	const [data, setData] = useState<Array<AnyObject>>(artistData);
	const [selectedAlbum, setSelectedAlbum] = useState<AnyObject>();

	// modal disclosure
	const {
		isOpen: isOpen,
		onOpen: openPlayer,
		onClose: handleClosePlayer,
	} = useDisclosure();

	//set selected album as a state to pass it along to the modal
	const handleOpenPlayer = (album: AnyObject) => {
		setSelectedAlbum(album);
		openPlayer();
	};

	return (
		<>
			{data.map((current) => (
				<Box
					key={current.spotifyAlbumId}
					sx={sx.albumContainer}
					onClick={() =>
						handleOpenPlayer({
							spotifyAlbumId: current.spotifyAlbumId,
							isAlbum: current.isAlbum,
						})
					}
				>
					<Image
						src={current.coverArt}
						alt={current.coverArt}
						sx={sx.link}
					/>
					<Text fontSize="md" as="b" sx={sx.link} noOfLines={1}>
						{current.album}
					</Text>
					<Text as="small" sx={sx.link} noOfLines={1}>
						{current.artist}
					</Text>
				</Box>
			))}
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

const sx = {
	albumContainer: {
		padding: "4px",
		height: "fit-content",
		boxShadow: "5px 6px 4px lightgray",
		borderRadius: "5px",
	},
	link: {
		cursor: "pointer",
		textOverflow: "ellipsis",
	},
};

export default AlbumCover;
