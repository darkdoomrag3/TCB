import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import CardMedia from "@material-ui/core/CardMedia";
import Grid from "@material-ui/core/Grid"
import Carousel from "react-elastic-carousel";
import Item from "./Item";
import { Link } from "react-router-dom";
import { Typography } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import { CardContent} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    margin: 15,
  },
  typography: { marginTop:10,textAlign:"center",fontFamily: "Almarai", fontSize: "1rem", color:"black" },
  imageStyle:{
      opacity: 0.5,
      borderRadius:15,

    // '&:hover':{
    //   width: 80,
    //   height: 80,
    // },
  },
  // textStyle:{
  //   position: "relative",
  //   top:30,
  // },
  paddingCard: {
    padding: 3,
  },

  border:{
    border:"1px solid grey",
  },
  starRatedColor:{
    color:"#ff6262",
  },
  starDefaultColor:{
    color:"#e5e5e5"
  },
}));
export default function BestProductForYou() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
    <div className="MuiGrid-root MuiGrid-container" style={{marginBottom: 10}}>
          <div className="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-true">
            <a className={classes.typography} style={{marginLeft: 10,fontWeight: 500 }}
            href="#">آیتم های متنوع از کشورهای مختلف</a>
            </div>
              </div>  
    <Grid container
        spacing={2}
            direction="row"
           justify="center"
          alignItems="center">

          <Grid item xs={12} sm={4} md={4}>
          <Item style={{height:200, borderRadius:15,backgroundColor: "rgb(236, 14, 113)"}}>

              <div className={classes.typography}>
                <p style={{fontWeight:500}}>محصولات آمریکایی</p>
                <p style={{fontWeight:500}}>بهترین محصولات از سراسر جهان</p>
                <img style={{ marginTop:25 }} width="50" height="50" 
                src="https://image.flaticon.com/icons/svg/323/323310.svg"
                alt="usa" />
              </div>
          </Item>
            </Grid>

          <Grid item xs={12} sm={4} md={4}>
          <Item style={{height:200, borderRadius:15, backgroundColor: "rgb(255, 230, 22)"}}>

              <div className={classes.typography}>
                <p style={{fontWeight:500}}>محصولات اروپایی</p>
                <p style={{fontWeight:500}}>بهترین محصولات از سراسر جهان</p>
                <img style={{ marginTop:25 }} width="50" height="50" 
                src="https://image.flaticon.com/icons/svg/323/323344.svg"
                alt="europe" />
              </div>
          </Item>
            </Grid>

          <Grid item xs={12} sm={4} md={4}>
          <Item style={{height:200, borderRadius:15,backgroundColor: "rgb(0, 166, 66)"}}> 

              <div className={classes.typography}>
                <p style={{fontWeight:500}}>محصولات چینی</p>
                <p style={{fontWeight:500}}>بهترین محصولات از سراسر جهان</p>
                <img style={{ marginTop:25 }} width="50" height="50" src="https://image.flaticon.com/icons/svg/323/323363.svg"
                alt="china" />
                </div>
          </Item>
            </Grid>
            
          </Grid>
          </div>
  );
}
