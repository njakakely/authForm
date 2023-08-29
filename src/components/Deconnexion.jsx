import { useContext } from "react"
import { Myauth } from "../context/authContext"
import { useNavigate } from "react-router-dom"
import { Button } from "@mui/material"

const Deconnexion = () => {
    const { auth, updateAuth } = useContext(Myauth)
    
    const naviga = useNavigate()
    
    const deconnecter = () => {
      updateAuth({ ...auth, connexion: null })
      naviga("/")
    }
    
    return (
      <Button variant="contained" color="error" onClick={() => deconnecter()}>
        Deconnexion
      </Button>
    )

  }

  export default Deconnexion