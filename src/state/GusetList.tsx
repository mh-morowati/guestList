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

    return (
        <div>
            <div>
                <h3>Guset List</h3>
                <ul>
                    {gusets.map((guest, index) => <li key={index}>{guest.name} ({guest.age} years old)</li>)}
                </ul>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
                <input
                    type="number"
                    placeholder="Enter age"
                    value={age}
                    onChange={(e) => setAge(Number(e.target.value))}
                />
                <button onClick={onclick}>Add Guset</button>
            </div>
            <div>
                <UserSearch guests={gusets} />
            </div>
        </div>
    )
}

export default GusetList;