import { useNavigate } from "react-router-dom";

import SelectAllMenus from "../components/SelectAllMenus";

function Main() {

    const navigate = useNavigate();

    return (
        <div>
            <h1>main page</h1>
            <div
                onClick={() => { navigate("/regist"); }}
                style={{ width: "40px", height: "25px", backgroundColor: "black", color: "white",}}
            >
                regist
            </div>
            <SelectAllMenus />
        </div>
    );
}

export default Main;