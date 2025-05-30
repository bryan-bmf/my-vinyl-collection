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
	const errorMessage =
		"Something went wrong! Please try again. Check AWS logs for more information.";
	const alreadyExists =
		"Looks like this album already exists. Please try again.";

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
				<ModalBody>
					{response === 200 ? successMessage
						: response === 409 ? alreadyExists
						: errorMessage}
				</ModalBody>

				<ModalFooter>
					<Link to="/collection">
						<Button colorScheme="red" mr={3} onClick={() => localStorage.removeItem("loggedIn")}>
							Done
						</Button>
					</Link>
					<Button
						colorScheme="blue"
						onClick={() => window.location.reload()}
					>
						Add More
					</Button>
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

export default AddVinylModal;