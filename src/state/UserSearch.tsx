import { useState } from "react";

interface Guest {
    name: string;
    age: number;
}
interface UserSearchProps {
    guests: Guest[];
}
const UserSearch: React.FC<UserSearchProps> = ({ guests }) => {

    const [name, setName] = useState('');
    const [user, setUser] = useState<Guest[]>([])
    const onclick = () => {
        const foundUser = guests.filter((guest) => {
            return guest.name === name;
        });
        setUser(foundUser);
    };
    return (
        <div>
            <h3 className="text-xl font-bold mb-2">People Search</h3>
            <input className="border p-2" type="text" value={name} onChange={(e) => setName(e.target.value)} />
            <button className="bg-orange-500 p-2 font-bold font-sans rounded-md" onClick={onclick}>Find Guest</button>
            <div className="mt-2">
                {user.length > 0 ? (
                    user.map((g, index) => (
                        <div className="bg-white p-2" key={index}>
                            <p>{g.name} ({g.age} year)</p>
                        </div>
                    ))
                ) : (
                    <span className=" p-1">No guest found</span>
                )}
            </div>
        </div>
    )
}

export default UserSearch;