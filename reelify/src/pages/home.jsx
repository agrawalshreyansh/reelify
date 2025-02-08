import Videogrid from "../components/videogrid";
import Sidebar from "../layouts/side_navbar";
import Navbar from "../layouts/top_navbar";

function Home() {
    return (
        <>
            <Navbar/>
            <div className="flex">
                <Sidebar/>
                <Videogrid/>
            </div>
        </>
    )
}

export default Home;