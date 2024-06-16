import { useState } from "react";
import { useNavigate } from "react-router-dom";

function UpdateMenu({ menu }) {

    const [updateMenu, setUpdateMenu] = useState({
        menuCode: menu.menuCode,
        menuName: menu.menuName,
        menuPrice: menu.menuPrice,
        categoryCode: menu.categoryCode,
        orderableStatus: menu.orderableStatus
    });

    const navigate = useNavigate();

    const valueChangeHandler = e => {
        setUpdateMenu({
            ...updateMenu,
            [e.target.name]: e.target.value
        });
    };

    const submitHandler = async () => {
        const url = 'http://localhost:8080/menus';
        const response = await fetch(url, {
            method: "PUT",
            headers: {
                'Content-Type': 'application/json',
                'Accept': '*/*'
            },
            body: JSON.stringify(updateMenu),
        });
        // .then(res => res.json());

        navigate("/detail", { state: { menuCode: response.headers.get('Location').split('/')[2] } });
    };

    return (
        <div>
            <h3>update menu</h3>
            <p>menu code</p>
            <p>{menu.menuCode}</p>
            <p>menu name</p>
            <input
                type="text"
                name="menuName"
                placeholder={`${menu.menuName}`}
                onChange={valueChangeHandler}
            />
            <p>menu price</p>
            <input
                type="number"
                name="menuPrice"
                placeholder={`${menu.menuPrice}`}
                onChange={valueChangeHandler}
            />
            <p>category code</p>
            <select
                name="categoryCode"
                onChange={valueChangeHandler}
                defaultValue={menu.categoryCode}
            >
                {/* <option value={4} selected={menu.categoryCode === 4 ? true : false}>4</option> */}
                <option value={4}>4</option>
                {/* <option value={5} selected={menu.categoryCode === 5 ? true : false}>5</option> */}
                <option value={5}>5</option>
                {/* <option value={6} selected={menu.categoryCode === 6 ? true : false}>6</option> */}
                <option value={6}>6</option>
            </select>
            <p>orderable status</p>
            <select
                name="orderableStatus"
                onChange={valueChangeHandler}
                defaultValue={menu.orderableStatus}
            >
                {/* <option value={"Y"} selected={menu.orderableStatus === "Y" ? true : false}>Y</option> */}
                <option value={"Y"}>Y</option>
                {/* <option value={"N"} selected={menu.orderableStatus === "N" ? true : false}>N</option> */}
                <option value={"N"}>N</option>
            </select>
            <br /><br />
            <div
                onClick={submitHandler}
                style={{ width: "50px", height: "25px", backgroundColor: "black", color: "white", }}
            >
                submit
            </div>
        </div>
    );
}

export default UpdateMenu;