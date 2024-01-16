import "./App.css";
import Collection from "./pages/Collection";
import Home from "./pages/Home";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import NotFound from "./pages/NotFound";
import { AnimatePresence } from "framer-motion";

function App() {
	const location = useLocation();

	// style={{height:400}} poner esto en el parent component de los charts

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
