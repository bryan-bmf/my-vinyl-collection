import { Center, Image, Modal, ModalContent, ModalOverlay, useBreakpoint } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import spinner from "../assets/bluey.gif";
import { AnyObject } from "../types";
import SpotifyPlayer from "./SpotifyPlayer";


const PlayerModal = ({ modalDisclosure, album }: Props) => {
	const [loading, setLoading] = useState<Boolean>(true);

	const { isOpen, onClose } = modalDisclosure;

	// show loading spinner for a second
	// spotify player takes a bit to load
	useEffect(() => {
		setLoading(true);
		const timer = setTimeout(() => {
			setLoading(false);
		}, 1000);
		return () => clearTimeout(timer);
	}, [album]);

	const sizes = ['xs', 'md'];

	// check if mobile
	const breakpoint = useBreakpoint();
	let mobile = breakpoint === "base" ? true : false;

	return (
		<Modal isOpen={isOpen} onClose={onClose} size={sizes} isCentered>
			<ModalOverlay />
			{loading ? (
				// add mobile sx only if mobile version
				<Center sx={{...sx.loading, ...(mobile && sx.loadingMobile)}}>
					<Image src={spinner} alt="Blue loading spinner in the form of a spinning record" />
				</Center>
			) : (
				<ModalContent sx={sx.modal}>
					<SpotifyPlayer album={album} />
				</ModalContent>
			)}
		</Modal>
	);
};

interface Props {
	modalDisclosure: {
		isOpen: boolean,
		onOpen: Function,
		onClose: any
	};
	album: AnyObject;
}

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
	loadingMobile: {
		top: "45%",
		left: "37.5%",
	},
}

export default PlayerModal;
