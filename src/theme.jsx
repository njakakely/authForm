import { createTheme } from "@mui/material";
import { grey, orange } from "@mui/material/colors";

export const theme = createTheme({
    palette: {
        primary: {
            main: orange[500]
        }
    },
    typography: {
        body1:{
            color: grey[600]
        }
    }
})