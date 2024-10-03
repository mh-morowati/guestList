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
            <h3>User Search</h3>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
            <button onClick={onclick}>Find User</button>
            <div>
                {user.length > 0 ? (
                    user.map((g, index) => (
                        <div key={index}>
                            <p>{g.name} ({g.age} year)</p>
                        </div>
                    ))
                ) : (
                    <p>No users found</p>
                )}
            </div>
        </div>
    )
}

export default UserSearch;