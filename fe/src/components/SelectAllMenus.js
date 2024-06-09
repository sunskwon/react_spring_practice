import { useEffect, useState } from "react";

function SelectAllMenus() {

    const [menus, setMenus] = useState([]);

    const call = async () => {
        console.log('hi');
        const url = 'http://localhost:8080/menus';
        console.log(url);
        const res = await fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });
        const result = await res.json();
        const result2 = await result.menus;
        console.log(typeof result2);
        console.log(result2);
        // console.log(result.menus);
        // console.log(result.menus[0]);
        return result2;
    };

    useEffect(() => {
        call().then(res => setMenus(res));
    }, []);

    return (
        <div>
            <h3>select all menus</h3>
            {menus.map(menu => (
                <p>hi</p>
            )
            )}
        </div>
    );
}

export default SelectAllMenus;