import { Outlet } from "react-router-dom";
import Header from "../pages/shared/Header";

const Main = () => {
    return (
        <>
            <Header></Header>
            <Outlet></Outlet>
        </>
    );
};

export default Main;