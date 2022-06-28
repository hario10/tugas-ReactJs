
import {useState} from 'react';

const Counter = function () {
    let [jumlah, setJumlah] = useState(0);

    return (
        <div>
            <button onClick={function() {
                if(jumlah > 0) { setJumlah(jumlah - 1)}
               
            }}>-</button>
            {' '} <span>{jumlah}</span> {' '}
            <button onClick={function() {setJumlah(jumlah + 1)}}>+</button>
        </div>
    )
}
export default Counter;