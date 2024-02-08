import { AnimatePresence } from "framer-motion";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Collection from "./pages/Collection";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";

export const URL = "https://d4akvuls33.execute-api.us-east-2.amazonaws.com/prod";

function App() {
	return (
		<div className="App">
			<AnimatePresence>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/collection" element={<Collection />} />
					<Route path="*" element={<NotFound />} />
				</Routes>
			</AnimatePresence>
		</div>
	);
}

export default App;
