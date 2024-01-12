import ArtistTable from "../components/ArtistTable";
import Landing from "../components/Landing";
import { useRef } from "react";

const Home = () => {
    const resultRef = useRef(null);

    return (
        <>
            <Landing resultRef={resultRef} />
            <ArtistTable ref={resultRef} />
        </>
    )
}

export default Home;