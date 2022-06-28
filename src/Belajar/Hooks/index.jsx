import { useState } from "react";
import { useExpression } from "./Pembahasan/hook/useExpression";



const Hooks = () => {
    let [tombol, setTombol] = useState('Merah');
    let [hijau, setHijau] = useState('Green');
    let [warna, setWarna] = useExpression();
    const saklar = () => {
        setWarna(!warna);
        setHijau(h => {
            if(h === 'Green') {
                return `${{backgroundColo: 'yellow'}};`
            } else {
                return 'Green';
            }
        })
    }
    
    const merah = {
        background: warna ? 'red' : 'green',
        height: '400px',
        textAlign: 'center'
    }

    const penyambung = () => {
        setWarna(!warna);
        setTombol(d => {
            if(d === 'Merah') {
                return 'Merah';
            } else {
                return 'Merah';
            }
        })
    }

    return (
        <div style={merah}>
             <button onClick={penyambung}>{tombol}</button>
             <button onClick={saklar}>{hijau}</button>
        </div>
    )
}

export default Hooks;

























// import { useState } from "react";
// import { useExpression } from "./Pembahasan/hook/useExpression";
// import { useToogle } from "./Pembahasan/hook/useToogle";
// // import Identity from "./Pembahasan/Identity";



// const  Hooks = () => {
//     let [label, setLabel] = useState('ON');
//     let[lampu, setLampu] = useToogle();
//     let [tombol, setTombol] = useState('Merah');
//     let [merah, setMerah] = useExpression();

//     const merah = {
//         background: merah ? 'red' : 'green',
//         textAlign: 'left',
//         height: '400px'
//     }

//     const warna = {
//         background: lampu ? 'yellow' : 'black',
//         textAlign: 'center',
//         height: '400px'
//     }

//     const saklar = () => {
//         setLampu(!lampu);
//         setLabel(e => {
//             if(e === 'ON') {
//                 return 'OFF';
//             } else {
//                 return 'ON';
//             }
//         })
//     }

//     return (
//         <div style={warna}>
            
//             <button onClick={saklar}>{label}</button>
//             <div style={merah}>
//                  <button>{tombol}</button>
//             </div>
//         </div>
        
//     )
// }
// export default Hooks;