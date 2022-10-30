import React, { Component } from "react";
import { getAuth, signOut ,updatePassword} from "firebase/auth";
import { Box } from "@mui/system";
import { TextField,Button,IconButton,InputAdornment,OutlinedInput,FormControl,InputLabel } from "@mui/material";
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { useHistory } from "react-router-dom";

function Profile() {
  
  const auth = getAuth();
  let navigate = useHistory();
  const handleLogout = (e) => {
    signOut(auth)
      .then(() => {
        //Sign-Out Successful
        console.log("successful");
        alert("You are logged out!");
      })
      .catch((error) => {
        console.log("failed");
      });
  };
  const [values, setValues] = React.useState({
    password: '' ,
    showPassword: false,
  });
  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };
  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };


  const submit = ()=>{
    if(!values.password){
     alert("Empty value not allowed");
     return; 
    }
    updatePassword(auth.currentUser,values.password).then(()=>{
      alert("update password successfully!");
      navigate.push("/");
    }).catch((err)=>{
      alert("Fail to update password: "+err);
    })
  }

  return (
    <div>
      <nav>
        <a href="/home"> Stax | Trading Platform </a>
        <div className="nav-item">
          <a href="/learnAndEarn">Learn&Earn</a>
          <a href="/Profile">Profile</a>
          <a href="/" onClick={handleLogout}>
            Logout
          </a>
        </div>
      </nav>

      <section>
        <h1>My Profile</h1>
        <div style={{marginTop:"40px"}}>
          <Box
            sx={{
              width: 500,
              maxWidth: '100%',
            }}
          >
            <TextField fullWidth label="E-mail" type="email" defaultValue={JSON.parse(localStorage.getItem("user"))['email']} disabled />
          </Box>
          <br></br>
          <Box
            sx={{
              width: 500,
              maxWidth: '100%',
            }}
          >
            <FormControl sx={{ width: '100%' }} variant="outlined">
            <InputLabel htmlFor="outlined-adornment-password">New Password</InputLabel>
            <OutlinedInput 
              id="outlined-adornment-password"
              type={values.showPassword ? 'text' : 'password'}
              value={values.password}
              onChange={handleChange('password')}
              endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {values.showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
                label="Password"
              />
            </FormControl>
          </Box>
          <br></br>
          <Button variant="contained" onClick={submit}>Submit</Button>
        </div>

      </section>
    </div>
  );
}

export default Profile;
