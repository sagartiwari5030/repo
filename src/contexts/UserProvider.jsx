import { createContext, useContext, useState } from "react"

const UserContext = createContext();

export const UserProvider = ({ children }) => {

    const [getUser, setUser] = useState(localStorage.getItem("token") ? { token: localStorage.getItem("token"), status: "success" } : { token: "", status: "fail" });

    const signInUser = (input) => {
        setUser(input);
    }

    const signOutUser = () => {
        localStorage.removeItem("token");
        setUser({ token: "", status: "fail" });
    }

    const object = {
        getUser,
        signInUser,
        signOutUser
    }


    return (<div>
        <UserContext.Provider value={object}>
            {children}
        </UserContext.Provider>
    </div>)

}

export function useUser() {
    // const context = useContext(UserContext);
    // if (!context) {
    //   throw new Error('useUser must be used within a UserProvider');
    // }
    return useContext(UserContext);
}