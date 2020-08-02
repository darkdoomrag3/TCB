import React from "react";
import CardMedia from "@material-ui/core/CardMedia";
import Grid from "@material-ui/core/Grid";
import Hidden from "@material-ui/core/Hidden";
import Item from "./Item";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import { CardContent} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    margin: 15,
  },
  typography: { fontFamily: "Almarai", fontSize: "1rem" },
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


        <Grid direction="column"
>


          <Grid container
            spacing={2}
            direction="row"
            justify="center"
            alignItems="center">

              <Grid item xs={2} sm={2} md={2} lg={2}>
                <Item style={{ borderRadius: "50%",width: 100, height: 100 }}>
                  <CardMedia
                  style={{ borderRadius: "50%"}}                  
                    component="img"
                    image=""
                    alt=""
                  />
                </Item>
              </Grid>
            <Grid item xs={2} sm={2} md={2} lg={2}>
              <Item style={{ borderRadius: "50%", width: 100, height: 100 }}>
                <CardMedia
                style={{ borderRadius: "50%"}}                  
                  className={classes.grid}
                  component="img"
                  image=""
                  alt=""
                />
              </Item>
            </Grid>
            
          
          <Grid item xs={2} sm={2} md={2} lg={2}>
              <Item style={{ borderRadius: "50%", width: 100, height: 100 }}>
              <CardMedia
              style={{ borderRadius: "50%"}}                  
                    component="img"
                    image=""
                    alt=""
                    />
              </Item>
            </Grid>
            <Grid item xs={2} sm={2} md={2} lg={2}>
              <Item style={{ borderRadius: "50%", width: 100, height: 100 }}>
              <CardMedia
              style={{ borderRadius: "50%"}}                  
                    component="img"
                    image=""
                    alt=""
                    />
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
                  <CardMedia
                  style={{ borderRadius: "50%"}}                  
                    component="img"
                    image=""
                    alt=""
                  />
                </Item>
              </Grid>
            <Grid item xs={2} sm={2} md={2} lg={2}>
              <Item style={{ borderRadius: "50%", width: 100, height: 100 }}>
                <CardMedia
                style={{ borderRadius: "50%"}}                  
                  className={classes.grid}
                  component="img"
                  image=""
                  alt=""
                />
              </Item>
            </Grid>
            
          
          <Grid item xs={2} sm={2} md={2} lg={2}>
              <Item style={{ borderRadius: "50%", width: 100, height: 100 }}>
              <CardMedia
              style={{ borderRadius: "50%"}}                  
                    component="img"
                    image=""
                    alt=""
                    />
              </Item>
            </Grid>
            <Grid item xs={2} sm={2} md={2} lg={2}>
              <Item style={{ borderRadius: "50%", width: 100, height: 100 }}>
              <CardMedia
              style={{ borderRadius: "50%"}}                  
                    component="img"
                    image=""
                    alt=""
                    />
              </Item>
            </Grid>                    
          </Grid>

          </Grid>
    </div>
  );
}
