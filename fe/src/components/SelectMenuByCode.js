import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function SelectMenuByCode({ menuCode }) {

    const [menu, setMenu] = useState();

    const navigate = useNavigate();

    const call = async () => {
        const url = `http://localhost:8080/menus/${menuCode}`;
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then(res => res.json());
        const result = response.menu;
        return result;
    };

    useEffect(() => {
        call().then(res => setMenu(res));
    }, []);

    const deleteHandler = async () => {
        const url = `http://localhost:8080/menus/${menuCode}`;
        const response = await fetch(url, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
        });

        navigate("/main");
    };

    return (
        <div>
            <h3>select menu by code</h3>
            <div>
                <p>{menu?.menuCode}</p>
                <p>{menu?.menuName}</p>
                <p>{menu?.menuPrice}</p>
                <p>{menu?.categoryCode}</p>
                <p>{menu?.orderableStatus}</p>
            </div>
            <div
                onClick={() => {
                    navigate("/update", { state: { menu: menu } });
                }}
                style={{ width: "50px", height: "25px", backgroundColor: "black", color: "white" }}
            >
                update
            </div>
            <br/>
            <div
                onClick={deleteHandler}
                style={{ width: "45px", height: "25px", backgroundColor: "black", color: "white" }}
            >
                delete
            </div>
        </div>
    );
}

export default SelectMenuByCode;