import { Center, Image, Modal, ModalContent, ModalOverlay } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import spinner from "../assets/bluey.gif";
import SpotifyPlayer from "./SpotifyPlayer";


const PlayerModal = (props: any) => {
	const [loading, setLoading] = useState<Boolean>(true);

	const { isOpen, onClose } = props.modalDisclosure;

	//show loading spinner for a second
	useEffect(() => {
		setLoading(true);
		const timer = setTimeout(() => {
			setLoading(false);
		}, 1000);
		return () => clearTimeout(timer);
	}, [props]);

	const sizes = ['xs', 'md']

	return (
		<Modal isOpen={isOpen} onClose={onClose} size={sizes} isCentered>
			<ModalOverlay />
			{loading ? (
				<Center sx={sx.loading}>
					<Image src={spinner} />
				</Center>
			) : (
				<ModalContent sx={sx.modal}>
					<SpotifyPlayer album={props.album} />
				</ModalContent>
			)}
		</Modal>
	);
};

const sx = {
	modal: {
		borderRadius: "10%",
		backgroundColor: "transparent",
		borderColor: "transparent",
		shadow: "none",
	},
	loading: {
		top: "45%",
		left: "46.5%",
		position: "fixed",
		zIndex: 10000,
		filter: "brightness(70%)",
		margin: -5 // offset el padding del homepage
	},
};

export default PlayerModal;
