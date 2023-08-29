import { useContext } from "react"
import Deconnexion from "../components/Deconnexion"
import { Myauth } from "../context/authContext"
import { Box, Container, Stack, Typography } from "@mui/material"

const Main = () => {
    const { auth } = useContext(Myauth)
    return (
        <Box sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            minHeight: "100vh"
        }}>
            <Stack spacing={4}>
                <Typography>
                    Connected on : <span style={{ textTransform: "capitalize" }}>{auth.connexion.login}</span>
                </Typography>
                <Deconnexion />
            </Stack>

        </Box>
    )
}
export default Main