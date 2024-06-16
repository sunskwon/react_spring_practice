import { useState } from "react";
import { useNavigate } from "react-router-dom";

import SelectAllMenus from "../components/SelectAllMenus";

function Main() {

    const [search, setSearch] = useState('');

    const navigate = useNavigate();

    const onChangeHandler = e => {
        setSearch(e.target.value);
        console.log(search);
    };

    return (
        <div>
            <h1>main page</h1>
            <div
                onClick={() => { navigate("/regist"); }}
                style={{ width: "40px", height: "25px", backgroundColor: "black", color: "white", }}
            >
                regist
            </div>
            <br />
            <div>
                <input
                    type='search'
                    name='type'
                    onChange={onChangeHandler}
                />
                <div
                    onClick={() => { navigate("/search", { state: { search: search } }); }}
                    style={{ width: "50px", height: "25px", backgroundColor: "black", color: "white", }}
                >
                    search
                </div>
            </div>
            <SelectAllMenus />
        </div>
    );
}

export default Main;