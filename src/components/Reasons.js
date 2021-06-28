import React from 'react'
import { Typography,GridList,Grid,Box,Container,Card,GridListTile,GridListTileBar,IconButton,Button} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles=makeStyles(theme=>({
    
    container:{
        height:'50vh'
    }
    
    
}))


 const Reasons = () => {
     const classes=useStyles();
    return (
        <Container className={classes.container}>
            
        </Container>
    )
}


export default Reasons;