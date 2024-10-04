import { useState } from "react";
import UserSearch from './UserSearch';

interface Guset {
    name: string;
    age: number;
}
const GusetList: React.FC = () => {
    const [name, setName] = useState('');
    const [age, setAge] = useState<number | ''>('')
    const [gusets, setGuset] = useState<Guset[]>([]);

    const onclick = () => {

        if (name && age) {
            setGuset([...gusets, { name, age: Number(age) }]);
            setName('');
            setAge('');
        }
    };
    const handleDelete = (indexToDelete: number) =>{
        const updatedGuests = gusets.filter((_,index) => index !== indexToDelete);
        setGuset(updatedGuests);
    }
    
    return (
        <div>
            <div className="m-11">
                <h3 className="text-xl font-bold">Guset List</h3>
                <ul className="my-4 bg-white p-2 font-sans text-sm font-bold text-stone-800 rounded-md">
                    {gusets.map((guest, index) => <li className="my-2" key={index}>
                        <span className="bg-orange-200 p-1 rounded-md">{guest.name} ({guest.age} years old)
                            <button onClick={() => handleDelete(index)} className="bg-red-500 ml-4 px-1 rounded-md text-white">
                                X</button></span></li>)}
                </ul>
                <input className="border p-2"
                    type="text" value={name} placeholder="name"
                    onChange={(e) => setName(e.target.value)} />
                <input className="border p-2"
                    type="number"
                    placeholder="age"
                    value={age}
                    onChange={(e) => setAge(Number(e.target.value))}
                />
                <button className="bg-green-500 p-2 font-bold font-sans rounded-md" onClick={onclick}>Add Guset</button>
            </div>
            <hr className="border-zinc-700 border-[0.1px]" />
            <div className="m-11">
                <UserSearch guests={gusets} />
            </div>
        </div>
    )
}

export default GusetList;