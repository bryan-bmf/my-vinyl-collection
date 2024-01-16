import Landing from "../components/Landing";
import { motion } from "framer-motion";

const Home = () => {
	return (
		<>
			<motion.main exit={{ opacity: 0 }}>
				<Landing />
			</motion.main>
		</>
	);
};

export default Home;
