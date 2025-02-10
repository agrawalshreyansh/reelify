import Sidebar from "./side_navbar";
import PropTypes from "prop-types";

const SideLayout  = ({ Component }) => {
    return (
        <>
            <div className="flex">
                <Sidebar/>
                <Component/>
            </div>
        </>
    )
}


SideLayout.propTypes = {
    Component: PropTypes.elementType.isRequired,
  };


export default SideLayout;