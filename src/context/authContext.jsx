import { createContext, useState} from "react"

export const Myauth = createContext()

export const AuthContext = ({ children }) => {
    const [auth, setauth] = useState({
        connexion:null,
        users:[
            {login: "admin", mdp:"admin"},
            {login: "test", mdp:"test"},
        ]
    })

    const updateAuth = (nv) => {
        setauth(nv)
    }

    return (
        <Myauth.Provider value={{ auth, updateAuth }}>
            {children}
        </Myauth.Provider>
    )
}