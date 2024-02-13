import {
    Button,
    Modal,
    ModalBody,
    ModalContent,
    ModalFooter,
    ModalHeader,
    ModalOverlay,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

const AddVinylModal = ({ modalDisclosure, response }: Props) => {

	const { isOpen, onClose } = modalDisclosure;

    const successMessage = "Successfully added album!";
    const errorMessage = "Something went wrong! Please try again. Check AWS logs for more information.";

	return (
		<Modal
			isOpen={isOpen}
			onClose={onClose}
			isCentered
			closeOnOverlayClick={false}
		>
			<ModalOverlay />
			<ModalContent>
				<ModalHeader>Add New Album</ModalHeader>
				<ModalBody>{response === 200 ? successMessage : errorMessage}</ModalBody>

				<ModalFooter>
					<Link to="/collection">
						<Button colorScheme="red" mr={3}>
							Done
						</Button>
					</Link>
						<Button colorScheme="blue" onClick={() => window.location.reload()}>Add More</Button>
				</ModalFooter>
			</ModalContent>
		</Modal>
	);
};

interface Props {
	modalDisclosure: {
		isOpen: boolean;
		onOpen: any;
		onClose: any;
	};
	response: number;
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
		margin: -5, // offset el padding del homepage
	},
};

export default AddVinylModal;
