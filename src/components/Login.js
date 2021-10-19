import { Button, TextField } from '@material-ui/core'
import React from 'react'
import Header from './Header'

const Login = () => {
    return (
        <div>
      <Header/>
      
   
  <TextField
  variant="outlined"
  fullWidth
  label="Enter Name"
  margin="normal"
  />

  <TextField
  type="number"
    margin="normal"
  variant="outlined"
  fullWidth
  label="Enter Phone number"
  />
    <TextField
  type="Enter Blood Group"
    margin="normal"
  variant="outlined"
  fullWidth
  label="Enter Blood group"
  />
  <TextField
  type="date"
    margin="normal"
  variant="outlined"
  fullWidth
  label={Date}
  />

  <Button
  variant="contained"
  color="secondary"
  fullWidth
  > REGISTER  </Button>

        </div>
    )
}

export default Login