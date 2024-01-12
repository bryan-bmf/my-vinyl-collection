import ArtistTable from "../components/ArtistTable";
import GridView from "../components/GridView";
import Landing from "../components/Landing";
import { useRef } from "react";

const Home = () => {
    const resultRef = useRef(null);

    return (
        <>
            <Landing resultRef={resultRef} />
            <GridView ref={resultRef} />
        </>
    )
}

export default Home;