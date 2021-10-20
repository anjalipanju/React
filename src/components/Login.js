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
  variant="outlined"
  fullWidth
  label="Enter Address"
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
  type="email"
  variant="outlined"
  fullWidth
  label="Enter your email Id"
  />
    <TextField
  type="Password"
    margin="normal"
  variant="outlined"
  fullWidth
  label="Enter Password"
  />
  <TextField
  type="password"
    margin="normal"
  variant="outlined"
  fullWidth
  label="Confirm Password"
  />

  <Button
  variant="contained"
  color="secondary"
  fullWidth
  > SUBMIT  </Button>

        </div>
    )
}

export default Login