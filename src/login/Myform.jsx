import { useContext } from "react"
import { Myauth } from "../context/authContext"
import { Button, Stack, TextField } from "@mui/material"
import { useNavigate } from "react-router-dom"
import { Notif } from "../context/NotificationContext"


const Myform = () => {

    /**
     *  Declaring all contexte
    */

    const { auth, updateAuth } = useContext(Myauth)
    const { notifMe } = useContext(Notif)

    /**
     *  Declaring routeur from react-router-dom
    */


    const naviga = useNavigate()

    /**
     * ACTION ON SUBMITING FORM
    */

    const handleSave = async (e) => {
        e.preventDefault()
        const { login, mdp } = e.target

        const check = await auth.users.find(user => (user.login === login.value && user.mdp == mdp.value))

        /**
         *  CHECKING IF USER FORM IS CORRECT
        */

        if (check) {
            updateAuth({
                ...auth,
                connexion: {
                    login: e.target.login.value,
                    mdp: e.target.mdp.value
                }
            })

            /**
             * REDIRECTING TO MAIN IF USER CHECK IS OK
            */
            naviga('/main')
        } else {

            notifMe({ msg: "Erreur d'authentification", status: true, type: "error" })
            login.focus()
        }

    }

    return (
        <form onSubmit={handleSave}>
            <Stack spacing={2}>
                <TextField label="Login ou mail" name="login" size="small" autoFocus required />
                <TextField label="Mot de passe" name="mdp" size="small" type="password" required />
                <Button type="submit" variant="contained">Se connecter</Button>
            </Stack>
        </form>
    )
}

export default Myform