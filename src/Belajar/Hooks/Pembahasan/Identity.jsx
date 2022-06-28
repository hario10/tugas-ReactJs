import { useCallback } from "react";
import { useEffect } from "react";
import { useState } from "react";

const Identity = () => {
    const fetchUser = useCallback(() => ['Hario', 'Aldo', 'Udin'], []);
    let [user, setUser] = useState([]);

    useEffect(() => {
        const data = fetchUser();
        setUser(data);
    }, [fetchUser])
    return (
        <div>
            {
                user.map(u => <li key = {u}>{u}</li>)
            }
        </div>
    )
}

export default Identity;