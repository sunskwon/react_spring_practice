import { useNavigate, useLocation } from "react-router-dom";

import SearchMenu from "../components/SearchMenu";

function Search() {

    const navigate = useNavigate();

    const { state } = useLocation();

    return (
        <div>
            <h1>search page</h1>
            <div
                onClick={() => { navigate(-1); }}
                style={{ width: "45px", height: "25px", backgroundColor: "black", color: "white", }}

            >
                return
            </div>
            <SearchMenu
                search={state.search}
            />
        </div>
    );
}

export default Search;