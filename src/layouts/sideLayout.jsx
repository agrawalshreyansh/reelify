import Sidebar from "../components/side_navbar";
import PropTypes from "prop-types";


const SideLayout  = ({Component, childComponent}) => {


    return (
        <>
            <div className="flex ">
                <div className="hidden sm:block">
                    <Sidebar/>
                </div>
                <div className="sm:w-[88vw] h-[92vh] overflow-x-hidden overflow-y-scroll [&::-webkit-scrollbar]:w-2
                        [&::-webkit-scrollbar-track]:rounded-full
                        [&::-webkit-scrollbar-track]:bg-gray-100
                        [&::-webkit-scrollbar-thumb]:rounded-full
                        [&::-webkit-scrollbar-thumb]:bg-gray-300
                        dark:[&::-webkit-scrollbar-track]:bg-neutral-700
                        dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500">
                    <Component {...childComponent}/>
                </div>
            </div>
        </>
    )
}

SideLayout.propTypes = {
    Component : PropTypes.elementType,
    childComponent : PropTypes.oneOfType([PropTypes.bool, PropTypes.elementType]),
  };


export default SideLayout;