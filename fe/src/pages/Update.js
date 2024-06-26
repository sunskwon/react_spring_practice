import { useNavigate, useLocation } from "react-router-dom";

import UpdateMenu from "../components/UpdateMenu";

function Update() {

    const navigate = useNavigate();

    const { state } = useLocation();

    return (
        <div>
            <h1>update page</h1>
            <UpdateMenu
                menu={state?.menu}
            />
            <br />
            <div
                onClick={() => { navigate(-1); }}
                style={{ width: "45px", height: "25px", backgroundColor: "black", color: "white", }}
            >
                return
            </div>
        </div>
    );
}

export default Update;