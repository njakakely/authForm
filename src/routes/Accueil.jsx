import { Box, Stack, Typography } from "@mui/material"
import Myform from "../login/Myform"

const Accueil = () => {

    return (
      <Box sx={{
        display: "flex",
        alignItems: "center",
        minHeight: "100vh",
        justifyContent: "center"
      }}>
        <Stack spacing={4}>
          <Typography variant="body1" sx={{
            textTransform:"capitalize"
          }}>Connexion</Typography>
          <Myform />
        </Stack>
  
      </Box>
    )
  }

  export default Accueil