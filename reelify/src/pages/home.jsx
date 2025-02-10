import SideLayout from "../layouts/sideLayout";
import PropTypes from "prop-types";



function Home({Component}) {
    return (
        <>
            <SideLayout Component={Component}/>
        </>
    )
}

Home.propTypes = {
    Component: PropTypes.elementType.isRequired,
  };

export default Home;