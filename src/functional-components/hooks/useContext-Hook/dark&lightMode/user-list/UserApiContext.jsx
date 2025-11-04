import { children, createContext, useEffect, useState } from "react"


export const UserApiContext = createContext();

export const UserApiProvider = ({ children }) => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fechUser = async () => {
            try {
                const res = await fetch("https://jsonplaceholder.typicode.com/users")
                const data = await res.json();
                setUsers(data);
            } catch (error) {
                console.error("error fetching datas:", error);

            }
        }

        fechUser();
    }, []);

    return (
        <UserApiContext.Provider value={{ users, loading }}>
            {children}
        </UserApiContext.Provider>
    )

}


export default UserApiContext
