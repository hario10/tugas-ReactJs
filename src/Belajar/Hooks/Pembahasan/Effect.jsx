import { useState } from "react";
import { useEffect } from "react";

const Effect = () => {
    
    let[text, setText] = useState('');
    let [user, setUser] = useState({});
    let [detik, setDetik] = useState(0);


    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users/1')
        .then(res => res.json())
        .then(res => setUser(res));
    }, []);

    useEffect(() => {
       localStorage.setItem('text', text);
       console.log('singkronisasi');

       return () => {
            console.log('clean up');
        }
    }, [text]);

    useEffect(() => {
        console.log('interval')
        let intervalId = setInterval(() => {
            setDetik(s => s + 1);
        }, 1000);

        return () => {
            console.log('clean up');
            clearInterval(intervalId);
        }
    }, [])

    return (
        <div>
            <textarea cols="30" rows="10" onChange={(e) => setText(e.target.value)}/>
            <p>{user.name}</p>
            <div>
                Waktu: {Math.floor(detik / 60)} Menit {detik % 60} Detik
            </div>
        </div>
    )
}
export default Effect;