import { Outlet} from "react-router-dom";
import CollapseNav from "./CollapseNav";

const Layout = () => {
    return (
        <>
            <CollapseNav/>
            <Outlet />
        </>
    )
};

export default Layout;