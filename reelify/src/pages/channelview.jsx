import { useParams } from "react-router-dom";

const Channelview = () => {

    const {id} = useParams()

    return (
        <>
            <h1 className="text-white">{id}</h1>
        </>
    )
}

export default Channelview;