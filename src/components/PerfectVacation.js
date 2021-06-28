import React from 'react'

import { makeStyles } from '@material-ui/core/styles';
import { Typography,GridList,Grid,Box,Container,Card,GridListTile,GridListTileBar,IconButton,Button} from '@material-ui/core';
import img_1 from '../utils/cliff.jpg'
import img_2 from '../utils/forest.jpg'
import img_3 from '../utils/cave.jpg'

const useStyles=makeStyles(theme=>({


wrapper:{
    height:'80vh'
}
,
gridImage:{
width:'100%',
height:'100%'
},

gridContainer:{
    marginTop:'6%',height:'70vh',marginLeft:'0%'
},
gridContainer_2:{
    marginTop:'2%',height:'70vh',marginLeft:'5%'
},
text:{
color:'white'
}
,
underline:{backgroundColor:'#707531',
width:"50%",
height:'4%'
// legth:"100%"
},
button:{
    backgroundColor:'#707531',
    borderRadius:'25px',
    width:'40%',
    color:'white',
    "&:hover":{
        backgroundColor:"#BFBD31"
    }

}


}))

const PerfectVacation = () => {
    const classes=useStyles();
    return (
        <Container className={classes.wrapper} disableGutters='true'>
            
          <Grid container lg={12} className={classes.gridContainer} >
          <Grid container lg={6} style={{width:'50%'}}>
          <Grid container items style={{height:'94%',paddingRight:'2%',margin:'auto'}}lg={7}><img src={img_1} className={classes.gridImage}/></Grid>
          <Grid container items lg={5}>
          <Grid container items style={{height:'44%',paddingBottom:'2%',margin:'auto',paddingLeft:'10%'}}  ><img src={img_3} className={classes.gridImage}/></Grid>
          <Grid container items style={{height:'44%',paddingTop:'2%',margin:'auto',paddingLeft:'10%'}} ><img src={img_2} className={classes.gridImage}/></Grid>
          </Grid>
          </Grid>


         <Grid container items lg={5} className={classes.gridContainer_2}>
         <Grid container items style={{height:'25%',display:'flex',flexDirection:'vertical'}}><Typography variant='h3' className={classes.text}>Here's makes a vacation perfect for you!</Typography>
         <div className={classes.underline}></div>
         </Grid>
         <Grid container items style={{height:'30%'}}><Typography variant='h5'className={classes.text}>Whether you are planning a family vacation with your pet,or a weekend getaway,
         or an adventurous excursion,vacation rentals are ideal for trips of all types.You can find everything from charming mountain cabins and lakeside lodges 
         to breathtaking.</Typography></Grid>
         <Grid container items style={{height:'10%'}}><Button className={classes.button}><Typography variant="h5">Book Now</Typography></Button></Grid>

         </Grid>
         
          </Grid>


        </Container>
    )
}

export default PerfectVacation;