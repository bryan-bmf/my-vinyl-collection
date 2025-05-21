import { Box, Image, Text, useDisclosure } from "@chakra-ui/react";
import { useState } from "react";
import { AnyObject } from "../types";
import PlayerModal from "./PlayerModal";


const AlbumCover = ({ data }: Props) => {
	const [selectedAlbum, setSelectedAlbum] = useState<AnyObject>({});

	// modal disclosure
	const {
		isOpen: isOpen,
		onOpen: openPlayer,
		onClose: handleClosePlayer,
	} = useDisclosure();

	// set selected album as a state to pass it along to the modal
	const handleOpenPlayer = (album: AnyObject) => {
		setSelectedAlbum(album);
		openPlayer();
	};

	return (
		<>
			{ data && data.map((current: AnyObject) => (
				<Box
					key={current.UniqueID}
					sx={sx.albumContainer}
					onClick={() =>
						handleOpenPlayer({
							spotifyAlbumId: current.SpotifyAlbumID,
							isAlbum: current.IsAlbum,
						})
					}
				>
					<Image
						src={current.SpotifyAlbumCover}
						alt={`"Cover art for ${current.Artist} - ${current.Album}`}
						sx={sx.link}
						role="img"
					/>
					<Text fontSize="md" as="b" sx={sx.link} noOfLines={1}>
						{current.Album}
					</Text>
					<Text as="small" sx={sx.link} noOfLines={1}>
						{current.Artist}
					</Text>
					<Text fontSize="xs" sx={sx.link} noOfLines={1}>
						{current.Year}
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

interface Props {
	data: Array<AnyObject>;
}

const sx = {
	albumContainer: {
		height: "fit-content",
		width: "fit-content",
		boxShadow: "5px 6px 4px lightgray",
		borderRadius: "5px",
		bgColor: "white",
		paddingBottom: "0.25rem"
	},
	link: {
		cursor: "pointer",
		textOverflow: "ellipsis",
	},
};

export default AlbumCover;
