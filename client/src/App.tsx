import { AnimatePresence } from "framer-motion";
import { HashRouter, Route, useLocation } from "react-router-dom";
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
				<HashRouter>
					<Route path="/" element={<Home />} />
					<Route path="/collection" element={<Collection />} />
					<Route path="/*" element={<NotFound />} />
				</HashRouter>
			</AnimatePresence>
		</div>
	);
}

export default App;
