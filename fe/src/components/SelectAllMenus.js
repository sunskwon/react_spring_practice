import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function SelectAllMenus() {

    const [menus, setMenus] = useState([]);
    const navigate = useNavigate();

    const call = async () => {
        const url = 'http://localhost:8080/menus';
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then(res => res.json());
        const result = response.menus;
        return result;
    };

    useEffect(() => {
        call().then(res => setMenus(res));
    }, []);

    return (
        <div>
            <h3>select all menus</h3>
            {menus.map(menu => (
                <div key={menu.menuCode}
                    onClick={() => {
                        navigate("/detail", { state: { menuCode: menu.menuCode } });
                    }}
                >
                    <p>{menu.menuName}</p>
                    <p>{menu.menuPrice}</p>
                    <hr></hr>
                </div>
            ))}
        </div>
    );
}

export default SelectAllMenus;