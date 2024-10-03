import { useState } from "react";

const GusetList: React.FC = () =>{
    const [name,setName] = useState('');
    const [gusets,setGuset] = useState<string[]>([]);

    const onclick = () =>{
        setName('');
        if(name){
            setGuset([...gusets,name]);
        }
    };

    return(
        <div>
            <h3>Guset List</h3>
            <ul>
                {gusets.map((guset) => <li key={guset}>{guset}</li>)}
            </ul>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
            <button onClick={onclick}>Add Guset</button>
        </div>
    )
}

export default GusetList;