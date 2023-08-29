import React from 'react'
import { AuthContext } from './context/authContext'
import { ThemeProvider } from '@mui/material'
import { theme } from './theme'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import NotificationContext from './context/NotificationContext'
import Main from './routes/Main'
import Accueil from './routes/Accueil'


function App() {

  return (

    /**
     * HERE, WE TRY TO DECLARE AS CONTEXT ALL DATAS THAT WE NEEDS, SUCH AS:
     * USERS LIST,
     * STATE OF NOTIFICATION.
     * 
     * ALSO, WE USE REACT ROUTER FOR TESTING REDIRECTION IF AUTHENTIFICATION IS OK
     * 
     */

    <ThemeProvider theme={theme}>
      <AuthContext>
        <NotificationContext>

          <BrowserRouter>
            <Routes>
              <Route path='/' element={<Accueil />} />
              <Route path='/main' element={<Main />} />
            </Routes>
          </BrowserRouter>

        </NotificationContext>
      </AuthContext>
    </ThemeProvider>

  )
}

export default App
