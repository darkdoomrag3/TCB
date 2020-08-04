import React from "react";
import CardMedia from "@material-ui/core/CardMedia";
import Grid from "@material-ui/core/Grid";
import Hidden from "@material-ui/core/Hidden";
import Item from "./Item";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import { CardContent, Typography} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    margin: 15,
  },
  typography: { fontFamily: "Almarai", fontSize: "1rem", color:"black" },
  paper: {
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
  paddingCard: {
    padding: 3,
  },

}));
export default function PopularCategory() {
  const classes = useStyles();

  return (
    <div className={classes.root}>


        <Grid >
          <div className="header">
          <div className="MuiGrid-root MuiGrid-container" style={{marginBottom: 10}}>
          <div className="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-true">
            <a className={classes.typography} style={{marginLeft: 10,fontWeight: 500 }}
            href="#">دسته بندی های محبوب</a>
            </div>
              </div>  
          </div>

          <Grid container
            spacing={2}
            direction="row"
            justify="center"
            alignItems="center">

              <Grid item xs={2} sm={2} md={2} lg={2} >
                <Item style={{borderRadius: "50%",width: 100, height: 100 }}>
                <img style={{ marginTop:25 }}width="50" height="50" 
              src="https://image.flaticon.com/icons/svg/2906/2906232.svg"
               alt="technical"/>
                </Item>
              </Grid>
            <Grid item xs={2} sm={2} md={2} lg={2}>
              <Item style={{ borderRadius: "50%", width: 100, height: 100 }}>
              <img style={{ marginTop:25 }}width="50" height="50" 
              src="https://image.flaticon.com/icons/svg/1088/1088250.svg"
               alt="article"/>
              
              </Item>
            </Grid>
            
          
          <Grid item xs={2} sm={2} md={2} lg={2}>
              <Item style={{ borderRadius: "50%", width: 100, height: 100 }}>
              <img style={{ marginTop:25 }} width="50" height="50" 
              src="https://image.flaticon.com/icons/svg/833/833539.svg"
               alt="gallery"/>
              </Item>

            </Grid>
            <Grid item xs={2} sm={2} md={2} lg={2} >
              <Item style={{ borderRadius: "50%", width: 100, height: 100 }}>

              <img style={{ marginTop:25 }}width="50" height="50" 
              src="https://image.flaticon.com/icons/svg/869/869636.svg"
               alt="store"/>
              </Item>
            </Grid>                    
          </Grid>


          <Grid container
            spacing={2}
            direction="row"
            justify="center"
            alignItems="center">

              <Grid item xs={2} sm={2} md={2} lg={2}>
                <Item style={{ borderRadius: "50%",width: 100, height: 100 }}>
                <img style={{ marginTop:25 }}width="50" height="50" 
              src="https://image.flaticon.com/icons/svg/2384/2384719.svg"
               alt="exhaust stuff"/>
                </Item>
              </Grid>
            <Grid item xs={2} sm={2} md={2} lg={2}>
              <Item style={{ borderRadius: "50%", width: 100, height: 100 }}>
              <img style={{ marginTop:25 }}width="50" height="50" 
              src=" https://image.flaticon.com/icons/svg/586/586157.svg"
               alt="straps"/>

              </Item>
            </Grid>
          
          <Grid item xs={2} sm={2} md={2} lg={2}>
              <Item style={{ borderRadius: "50%", width: 100, height: 100 }}>
              <img style={{ marginTop:25 }}width="50" height="50" 
              src="https://image.flaticon.com/icons/svg/2813/2813540.svg" 
              alt="ball bearing"/>

              </Item>
            </Grid>
            <Grid item xs={2} sm={2} md={2} lg={2}>
              <Item style={{ borderRadius: "50%", width: 100, height: 100 }}>
                <img style={{ marginTop:25 }}width="50" height="50" 
                src="https://image.flaticon.com/icons/svg/2906/2906193.svg" 
                alt="oil"/>
              </Item>
            </Grid>                    
          </Grid>

          </Grid>
    </div>
  );
}
