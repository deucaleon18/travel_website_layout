import React from 'react'
import { Typography,GridList,Grid,Box,Container,Card,GridListTile,GridListTileBar,IconButton,Button} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles=makeStyles(theme=>({



  container:{
 height:'120vh',width:'100%'
  },

    text:{
    color:'white'
},

gridRow:{
alignItems:'center',
height:'40vh'
},
underline:{backgroundColor:'#707531',
width:"15%",
height:'4%',
marginTop:'5%',
marginBottom:'5%',
marginLeft:'0%'

// legth:"100%"
},
button:{
    backgroundColor:'#707531',
    borderRadius:'15px',
    width:'30%',
    height:'10%',
    color:'white',
    "&:hover":{
        backgroundColor:"#BFBD31"
    }
}



}))





const Tour = () => {
    const classes=useStyles();
    return (
      <Container >
   <Grid container className={classes.container}>
   <Grid container items style={{marginBottom:'5%'}}>
       <Typography variant="h3" className={classes.text}>
           Our Tour Blog
      </Typography> 
      {/* <div className={classes.underline}>

      </div> */}
   </Grid>
<Grid container items lg={12} styles={{height:"90vh"}}>

<Grid container items lg={6} className={classes.gridRow}>
 <Typography variant='h5' className={classes.text}>

     We seek to provide the authentic content for the traveller around the world <br>
     </br>
     Fint hosts and guests anywhere in the world.
 </Typography>
 <Button className={classes.button}><Typography>Learn More</Typography></Button>
</Grid>
<Grid container items lg={6} styles={{ height:"100%",marginTop:"5%"}}>
<iframe width="90%" height="315" src="https://www.youtube.com/embed/vOTTTX-tHKQ" title="YouTube video player" frameborder="0" 
allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</Grid>

</Grid>




<Grid container items sclassName={classes.gridRow}>

<Grid container items lg={6}>
<iframe width="90%" height="315" src="https://www.youtube.com/embed/IOY5HDBZa3k" title="YouTube video player" frameborder="0"
 allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</Grid>

<Grid container items lg={6} >
<Typography variant='h5' className={classes.text}>

     We seek to provide the authentic content for the traveller around the world <br>
     </br>
     Fint hosts and guests anywhere in the world.
 </Typography>
 <Button className={classes.button}><Typography>Learn More</Typography></Button>

</Grid>


</Grid>






</Grid>

      </Container>
    )
}


export default Tour;