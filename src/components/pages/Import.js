import { Outlet } from "react-router";
import ImportInstallablePackage from "../components/CAccordion";

const Import = () => {
    return (
        <div>
            {/* <ImportInstallablePackage/> */}
            <Outlet />
        </div>
    )
};

export default Import;