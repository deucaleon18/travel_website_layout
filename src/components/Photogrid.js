import React from 'react';
import "../styles/photogrid.css";
// import Typography from '@material-ui/core/Typography'

import { makeStyles } from '@material-ui/core/styles';
import { Typography,GridList,Grid,Box,Container,Card,GridListTile,GridListTileBar,IconButton} from '@material-ui/core';
import img_1 from "../utils/photo1.jpg"
import img_2 from "../utils/photo2.jpg"
import img_3 from "../utils/photo3.jpg"
import img_4 from "../utils/photo4.jpg"




const useStyles=makeStyles(theme=>({

   root:{
 backgroundColor: '#121C20'
   },
   gridlayout:{
    width:'90 vw'
   },
   
   title:{
       color:'white',
       textAlign:'center',
       alignItems:'center',
       margin:'auto',
       width:'100%',
   },
   gridImage:{
    width:'100%',
    height:'100%',
    marginLeft:'2.5%',
    marginRight:'0'
   },

  Card:{
      height:'100%',
      backgroundColor: '#121C20'
  },
  Grid:{
    overflowX:'scroll',
    marginTop:'4%',
  },

  tilebar:{
    width:'100%',
    marginLeft:'2.5%',
    // marginRight:'7.5%',

    '&:hover':{
      backgroundColor:'#BFBD31',
      cursor:'pointer'
    }
  }



}))



const Photogrid = () => {

   const classes=useStyles();

     
    return (
        <div className="photogrid">
          <Grid>
      
              <Typography variant='h3' style={{marginTop:'5%'}}className={classes.title} xs={12}> The wonders of nature</Typography>
              <Typography variant='h6' className={classes.title}> We seek to provide authentic content for traveller around the world</Typography>
          </Grid>
             <GridList cellHeight={350} style={{marginTop:'2%',width:'80%',alignItems:'center',paddingLeft:'10vw'}} cols={4} >
           <GridListTile col={1}><Card className={classes.Card}><img src={img_1} className={classes.gridImage}/><GridListTileBar
           className={classes.tilebar}

           title="Lorem ipsum"
           subtitle="Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum "
           actionIcon={
             <IconButton></IconButton>
           }
           >
             
             </GridListTileBar></Card></GridListTile>
           <GridListTile col={1}><Card className={classes.Card}><img src={img_2} className={classes.gridImage}/><GridListTileBar
              className={classes.tilebar}

              title="Lorem ipsum"
              subtitle="Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum "
              actionIcon={
                <IconButton></IconButton>
              }
           
           
           >
             
             </GridListTileBar></Card></GridListTile>
           <GridListTile col={1}><Card className={classes.Card}><img src={img_3} className={classes.gridImage}/><GridListTileBar
              className={classes.tilebar}

              title="Lorem ipsum"
              subtitle="Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum "
              actionIcon={
                <IconButton></IconButton>
              }
           
           
           >
             
             </GridListTileBar></Card></GridListTile>
           <GridListTile col={1}><Card className={classes.Card}><img src={img_4} className={classes.gridImage}/><GridListTileBar
              className={classes.tilebar}

              title="Lorem ipsum"
              subtitle="Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum "
              actionIcon={
                <IconButton></IconButton>
              }
           
           >
             
             </GridListTileBar></Card></GridListTile>
           </GridList> 
        </div>
    )
}

export default Photogrid;