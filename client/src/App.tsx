import { AnimatePresence } from "framer-motion";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import AddVinyl from "./pages/AddVinyl";
import Collection from "./pages/Collection";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";

export const URL = process.env.REACT_APP_SERVER_URL;

function App() {
	return (
		<div className="App">
			<AnimatePresence>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/collection" element={<Collection />} />
					<Route path="/add" element={<AddVinyl />} />
					<Route path="*" element={<NotFound />} />
				</Routes>
			</AnimatePresence>
		</div>
	);
}

export default App;
