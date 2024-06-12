import { useNavigate, useLocation } from "react-router-dom";
import SelectMenuByCode from "../components/SelectMenuByCode";

function Detail() {

    const { state } = useLocation();
    const navigate = useNavigate();

    return (
        <div>
            <h1>detail page</h1>
            <SelectMenuByCode
                menuCode={state.menuCode}
            />
            <br/>
            <div
                onClick={() => {
                    navigate("/main");
                }}
                style={{ width: "40px", height: "25px", backgroundColor: "black", color: "white" }}
            >
                return
            </div>
        </div>
    );
}

export default Detail;