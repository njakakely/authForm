import { Alert, Snackbar } from "@mui/material";

export default function Notification({ open, setOpen, message, type }) {

    /**
     * NOTIFICATION ON SOMETHING HAPPEN
    */

    return (
        <Snackbar
            open={open}
            onClose={() => setOpen(false)}
        >
            <Alert severity={type} sx={{ width: '100%' }}>
                {message}
            </Alert>
        </Snackbar>
    )
}