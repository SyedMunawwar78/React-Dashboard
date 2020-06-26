import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import logo from './logo.svg';
import { makeStyles } from '@material-ui/core/styles';
import './App.css';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import HomeIcon from '@material-ui/icons/Home';
import MailIcon from '@material-ui/icons/Mail';
import ExchangeIcon from '@material-ui/icons/Group'
import DepositIcon from '@material-ui/icons/CreditCard'
import TradingIcon from '@material-ui/icons/BusinessCenter'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import AddCircle from '@material-ui/icons/AddCircleOutline'
import WithdrawIcon from '@material-ui/icons/TableChart'
import Icon from '@material-ui/core/Icon';
import { flexbox } from '@material-ui/system';
import Box from '@material-ui/core/Box';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import { IconButton } from '@material-ui/core';
import Create from '@material-ui/icons/Create'
import Telegram from '@material-ui/icons/Telegram'
import Delete from '@material-ui/icons/Delete'









const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  appBar: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  table: {
    minWidth: 350,
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3),
  },
}));

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('High', 1.15536, 1.15536,),
  createData('Low', 1.12336, 1.23536),
  createData('Average', 1.98536, 1.98536),
];


function App() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <Container fixed>
        <div className={classes.root}>
          <Grid container spacing={3}>
            <Grid item xs={2}>
              <Drawer
                elevation="2"
                className={classes.drawer}
                variant="permanent"
                classes={{
                  paper: classes.drawerPaper,
                }}
                anchor="left"
              >
                <Box display="flex" justifyContent="center">
                  <Grid xs={8}>
                    <br></br>
                    <Card variant="outlined" style={{padding: '10px'}}>
                      <img src="assets/logo.png" alt="LOGO" height="30" width="30" style={{display:'inline', marginTop:'12px'}} />
                      <h4 style={{float:'right', marginRight:'40px'}}>LOGO</h4>
                    </Card>
                  </Grid>
                </Box>
                
                <Box display="flex" style={{marginTop:"20px",marginBottom:"20px"}} alignContent="flex-start">
                  <IconButton color="primary" style={{ fontSize: 40, marginLeft: '50px', marginTop: '1px' }}><AddCircle/></IconButton>
                  <h3 style={{ marginLeft: '3px',color:"blue" }}>New</h3>
                </Box>
                <Divider />

                <Box display="flex" justifyContent="center">
                  <List >
                    <ListItem style={{marginBottom:"10px"}} button><ListItemIcon><HomeIcon /></ListItemIcon>Home</ListItem>
                    <ListItem style={{marginBottom:"10px"}} button><ListItemIcon><ExchangeIcon /></ListItemIcon>Exchange</ListItem>
                    <ListItem style={{marginBottom:"10px"}} button><ListItemIcon><WithdrawIcon /></ListItemIcon>Withdraw</ListItem>
                    <ListItem style={{marginBottom:"10px"}} button><ListItemIcon><DepositIcon /></ListItemIcon>Deposit</ListItem>
                    <ListItem style={{marginBottom:"10px"}} button><ListItemIcon><TradingIcon /></ListItemIcon>Trading</ListItem>
                  </List>
                </Box>
                <Card variant="outlined">
                <img style={{marginLeft:"50px"}}  height="100" width="100" src="assets/mobile.png" alt="LOGO" 
                />
                <p style={{color:"blue",textAlign:"center"}}>Add your mobile phone</p>
                <p style={{textAlign:"center"}}>eg +91 7013855186</p>
                <Divider/>
                </Card>
              </Drawer>
            </Grid>
            <Grid item xs={7}>
              <br></br>
              <Card variant="outlined">
                <div className={classes.root}>
                  <Grid container spacing={3}>
                    <Grid item xs={4}>
                      <Icon style={{ marginTop: "16px", marginLeft: "5px" }}>search</Icon>
                    </Grid>
                    <Grid item xs={4}>
                      <h4 style={{marginLeft:"70px"}} >EXCHANGE</h4>
                    </Grid>
                    <Grid item xs={4}>
                      <Box display="flex" justifyContent="flex-end" >
                        <Icon style={{ marginTop: "16px", marginLeft: "5px" }}>timer</Icon>
                        <Icon style={{ marginTop: "16px", marginLeft: "5px", marginRight: "5px" }}>addchart</Icon>
                      </Box>
                    </Grid>
                  </Grid>
                </div>
                <Grid container spacing={3}>
                  <Grid item xs={1}></Grid>
                  <Grid item xs={5}>
                    <br></br>
                    <Card  elevation="5">
                    <div style={{marginLeft:'15px'}}>
                      <Select labelId="label" id="select" value="10" style={{color:'blue', fontSize:'14px'}} >
                        <MenuItem value="" >EUR</MenuItem>  
                        <MenuItem value="10"><strong>EUR</strong></MenuItem>
                      </Select>
                      <p style={{display:'inline', color:'gray'}}> &nbsp; RESET VALUES </p>
                    </div>
                      <h1 style={{ textAlign: "center" }}>€ 17000.00</h1>
                      <p style={{ textAlign: "center" }}>1 USD ~ 0.876647 EUR</p>
                    </Card>
                  </Grid>
                  <Grid item xs={5}>
                    <br></br>
                    <Card style={{ backgroundColor: "lightgrey" }} elevation="5">
                    <div style={{marginLeft:'15px'}}>
                      <Select labelId="label" id="select" value="10" style={{color:'blue', fontSize:'14px'}} >
                        <MenuItem value="" >EUR</MenuItem>  
                        <MenuItem value="10"><strong>USD</strong></MenuItem>
                      </Select>
                    </div>
                      <h1 style={{ textAlign: "center" }}>$ 1927.28</h1>
                      <p style={{ textAlign: "center" }}>1 USD ~ 0.876647 EUR</p>
                    </Card>
                  </Grid>
                </Grid>
                <Grid container spacing={3}>
                  <Grid  xs={1}></Grid>
                  <Grid  xs={10}></Grid>
                  <br></br>
                  <img style={{marginLeft:"100px"}} src='assets/Capture.PNG' alt="Logo" />
                  <br></br>
                  </Grid>
                  <Grid container spacing={3}>
                  <Grid  xs={1}></Grid>
                  <Grid  xs={4}>
                  <br></br>
                    <Card elevation="5" style={{backgroundColor:"#E0FFFF",padding:"5px"}}>
                       <p style={{color:"blue",fontSize:15,textAlign:"center"}}><span style={{color:"blue",fontSize:30}}>18 </span> Exchanges</p>
                    </Card>
                   <br/>
                   <Card elevation="5" style={{backgroundColor:"#FFB6C1	",padding:"5px"}}>
                       <p style={{color:"purple",fontSize:15,textAlign:"center"}}><span style={{color:"purple",fontSize:30}}>26 </span> Withdraws</p>
                    </Card>
                  </Grid>
                  <Grid  xs={6}>
                    <br></br>
                    <br></br>
                  <TableContainer>
      <Table className={classes.table} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>EUR TO USD</TableCell>
            <TableCell align="right">LAST 30 DAYS</TableCell>
            <TableCell align="right">LAST 90 DAYS</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.calories}</TableCell>
              <TableCell align="right">{row.fat}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
                  </Grid>
                  </Grid>
                <br></br>
              </Card>
            </Grid>
            <Grid item xs={3}>
              <br></br>
              <Card variant="outlined">
              <Grid container spacing={3}>
                    <Grid item xs={4}>
                    <h4 style={{marginLeft:"5px"}} >PROFILE</h4>
                      </Grid>
                      <Grid item xs={8}>
                      <Box display="flex" justifyContent="flex-end" >
                      <Icon style={{ marginTop: "16px"}}>notifications</Icon>
                        </Box>
                      </Grid>
                      </Grid>
                      <br></br>
                      <img style={{marginLeft:"60px"}} src="assets/profile.png" alt="LOGO"   />
                      <h3 style={{textAlign:"center"}}>SYED MUNAWWAR</h3>
                      <p style={{textAlign:"center"}}>munawwar736@gmail.com</p>
                      <Divider/>
                      <h5 style={{textAlign:"center"}}>TODAY'S VOLUME</h5>
                      <Box display="flex" alignContent="flex-start">
                  <IconButton color="primary" style={{ fontSize: 40, marginLeft: '50px', marginTop: '1px' }}><AddCircle/></IconButton>
                  <h3 style={{ marginLeft: '3px',color:"blue" }}>$ 1840.0(10.64%)</h3>
                </Box>
                <Card variant="outlined">
                  <p style={{marginLeft:"10px"}}>Add Phone Number to Unlock Feature</p>
                </Card>
                <img style={{marginLeft:"30px"}} src="assets/bank.png" alt="LOGO"   />
                <br></br>
                <Grid container spacing={3}>
                    <Grid item xs={4}>
                      <p style={{marginLeft:"10px"}}>Actions</p>
                      </Grid>
                      <Grid item xs={8}>
                      <Box display="flex" alignContent="flex-end">
                  <IconButton  style={{ fontSize: 40, marginLeft: '50px', marginTop: '1px' }}><Create/></IconButton>
                  <IconButton  style={{ fontSize: 40, marginTop: '1px' }}><Telegram/></IconButton>
                  <IconButton  style={{ fontSize: 40, marginTop: '1px' }}><Delete/></IconButton>
                </Box>
                      </Grid>
                      </Grid>
              </Card>
            </Grid>
          </Grid>
        </div>

      </Container>
    </React.Fragment>
  );
}

export default App;
