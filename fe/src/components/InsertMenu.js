import { useState } from "react";
import { useNavigate } from "react-router-dom";

function InsertMenu() {

    const [menu, setMenu] = useState({
        menuCode: 0,
        menuName: 'menu name',
        menuPrice: 0,
        categoryCode: 4,
        orderableStatus: 'Y'
    });

    const navigate = useNavigate();

    const valueChangeHandler = e => {
        setMenu({
            ...menu,
            [e.target.name]: e.target.value
        });
    };

    const submitHandler = async () => {
        const url = 'http://localhost:8080/menus';
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(menu)
        })
        .then(res => res.json());

        navigate("/detail", { state: { menuCode: response } })
    };

    return (
        <div>
            <h3>insert menu</h3>
            <p>menu name</p>
            <input
                type="text"
                name="menuName"
                onChange={valueChangeHandler}
            />
            <p>menu price</p>
            <input
                type="number"
                name="menuPrice"
                onChange={valueChangeHandler}
            />
            <p>category code</p>
            <select
                name="categoryCode"
                onChange={valueChangeHandler}
            >
                <option value={4}>4</option>
                <option value={5}>5</option>
                <option value={6}>6</option>
            </select>
            <p>orderable status</p>
            <select
                name="orderableStatus"
                onChange={valueChangeHandler}
            >
                <option value={"Y"}>Y</option>
                <option value={"N"}>N</option>
            </select>
            <br />
            <br />
            <div
                onClick={submitHandler}
                style={{ width: "50px", height: "25px", backgroundColor: "black", color: "white", }}
            >
                submit
            </div>
        </div>
    );
}

export default InsertMenu;