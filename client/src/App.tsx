import { AnimatePresence } from "framer-motion";
import { Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import Collection from "./pages/Collection";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";

export const URL = process.env.REACT_APP_SERVER_URL;

function App() {
	const location = useLocation();

	return (
		<div className="App">
			<AnimatePresence>
				<Routes location={location} key={location.pathname}>
					<Route path="/" element={<Home />} />
					<Route path="/collection" element={<Collection />} />
					<Route path="*" element={<NotFound />} />
				</Routes>
			</AnimatePresence>
		</div>
	);
}

export default App;
