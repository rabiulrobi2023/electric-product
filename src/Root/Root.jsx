import { Outlet } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";

const Root = () => {
    return (
        <div className="dark:bg-gray-900">
            <Navbar></Navbar>
            <div className="max-w-[1200px] m-auto">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Root;