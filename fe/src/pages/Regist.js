import { useNavigate } from "react-router-dom";
import InsertMenu from "../components/InsertMenu";

function Regist() {

    const navigate = useNavigate();

    return (
        <div>
            <h1>regist page</h1>
            <InsertMenu />
            <br/>
            <div
                onClick={() => {
                    navigate("/main");
                }}
                style={{ width: "45px", height: "25px", backgroundColor: "black", color: "white", }}
            >
                return
            </div>
        </div>
    );
}

export default Regist;