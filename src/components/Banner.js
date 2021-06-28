import React from 'react';
import "../styles/banner.css";
import Navbar from './Navbar'
import { Typography,GridList,Grid,Box,Container,Card,GridListTile,GridListTileBar,IconButton,Button} from '@material-ui/core';
import {makeStyles} from "@material-ui/styles"

const useStyles=makeStyles(them=>({

banner_header:{
    fontSize:'12rem',
    color:'white',
    fontWeight:'900',
     paddingTop:'10%',
     textAlign:'center'
    
},

text:{
    color:'#ffffff',
    textAlign:'center'
},
// text_overlay:{
//     position:'relative',
//     zIndex:'3',
//     top:"0",
//     opacity:'1'

// }


}))


const Banner = () => {
    const classes=useStyles();

    return (
        <div className="banner">
            <div className='overlay'>
            <Navbar/>
     
            <Typography className={classes.banner_header}>ADVENTURE</Typography>
            <Typography variant="h4" className={classes.text}>Create Your Outdoor Adventure Discover With Us</Typography>
          
            </div>
         
            </div>
    )  
}

export default Banner;