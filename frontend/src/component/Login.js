import React,{useState} from 'react';
import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save';
import '../App.css';
import TextField from '@material-ui/core/TextField';
import {makeStyles} from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Loading from './LoadingComponent';
import TwitterIcon from '@material-ui/icons/Twitter';

let baseUrl='http://45.79.127.113:4000/';
const useStyles=makeStyles({
  button:{
    background:'linear-gradient(45deg,#073312,#A12345)',
    padding:'15px 30px',
    marginTop:'3vh'
  },
  dark:{
    textAlign: 'center',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundImage: `url('background.jpg')`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    color:'#282c34'
  },
  light:{
    backgroundColor:'#6E6E6E',
    color:'#282c34',
    boxShadow: "5px 5px 5px"
  },
})

export default function Login(){

  const handleRegister=(email,password)=>{

    fetch(baseUrl+'register',{
      method:'POST',
      body:JSON.stringify({
        email:email,
        password:password
      }),
      headers:{
        'Content-Type': 'application/json',
      },
      credentials:'same-origin'
    })
    .then(response => {
      if (response.ok) {
        return response;
      } else {
        console.log(response);
        var error = new Error('Error ' + response.status + ': ' + response.statusText);
        error.response = response;
        throw error;
      }
    },
    error => {
          var errmess = new Error(error.message);
          throw errmess;
    })
    .then(response => response.json())
    .then(res=>{alert(res.key);setRegisterEmail('');setRegisterPassword('')})
    .catch(error=>alert(error.message))

  }
  const [isLoading,setIsLoading]=useState(false);
  const classes=useStyles();
  const [registerEmail,setRegisterEmail]=useState('');
  const [registerPassword,setRegisterPassword]=useState('');

  if(!isLoading)
  return (
    <>
    <AppBar style={{backgroundColor:'transparent'}}>
      <Toolbar>
        <Typography variant="h5" className={classes.title}>
          Tweet Mention
        </Typography>
      </Toolbar>
    </AppBar>
    <Grid
      container
      direction="row"
      justify="center"
      alignItems="center" className={classes.dark}
    >
      <Container style={{height:'65vh'}}>
        <Grid container spacing={4} justify='space-around'>
          <Grid xs={12} sm={6} md={4} lg={4} item>
            <Paper className={classes.light} style={styles.loginBox}>
              <Grid >
                <h1 >Login</h1>
                <hr/>
              </Grid>
              <Grid style={styles.twitterButtonGrid}>
                <Button 
                  startIcon={<TwitterIcon/>}
                  style={styles.twitterButton}
                  variant='contained' color='primary'
                  href="http://45.79.127.113:4000/login">
                  Login with Twitter
                </Button>
              </Grid>
            </Paper>
          </Grid>
          <Grid xs={12} sm={6} md={4} lg={4} item>
            <Paper className={classes.light} style={styles.registerBox}>
              <h1 style={{paddingTop:'2vh'}}>Register</h1>
              <hr/>
              <Grid item>
              <TextField 
                variant='outlined'
                color='secondary'
                type="email"
                label="Email"
                size='large'
                value={registerEmail}
                onChange={(event)=>setRegisterEmail(event.target.value)}
                placeholder="example@temp.com"
              />
              </Grid>
              <Grid item>
              <TextField 
                style={{marginTop:'5vh'}}
                variant='outlined'
                color='secondary'
                type="password"
                label="Password"
                size='large'
                value={registerPassword}
                onChange={(event)=>setRegisterPassword(event.target.value)}
                placeholder="Password"
              />
              </Grid>
              <Button 
                className={classes.button}
                startIcon={<SaveIcon/>}
                endIcon={<SaveIcon/>}
                variant='contained' color='primary'
                onClick={()=>handleRegister(registerEmail,registerPassword)}>
                Register
              </Button>
            </Paper>
          </Grid>
        </Grid>
        
      </Container>
    </Grid>
    </>
  );
  else
    return(
      <Loading/>
    )
}

const styles={
  loginBox:{
    marginTop:'2vh',
    display:'flex',
    height:'50vh',
    width:'100%',
    flexDirection:'column'
  },
  twitterButtonGrid:{
    display:'flex',
    alignItems:'center',
    justifyContent:'center',
    marginTop:'7vh'
  },
  twitterButton:{
    paddingTop:'10px',
    paddingBottom:'10px'
  },
  registerBox:{
    height:'50vh',
    width:'100%'
  }
}