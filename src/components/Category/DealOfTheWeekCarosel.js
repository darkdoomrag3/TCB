import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import CardMedia from "@material-ui/core/CardMedia";
import Carousel from "react-elastic-carousel";
import Item from "./Item";
import { Link } from "react-router-dom";
import Card from "@material-ui/core/Card";
import { CardContent, Typography } from "@material-ui/core";

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 1 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 3 },
];
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
export default function DealOfTheWeekCarosel() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <div className={classes.root}>
      <p className={classes.typography} style={{textAlign:"center", fontWeight: 500}}>معاملات این هفته</p>
        <Carousel breakPoints={breakPoints}>
          <Item style={{  borderRadius:25, height:250 ,backgroundColor: "rgb(255, 189, 193)"}}>

          </Item>
          <Item style={{ borderRadius:25,  height:250 ,backgroundColor: "rgb(87, 209, 201)"}}>

          </Item>
          <Item style={{ borderRadius:25, height:250 ,backgroundColor: "rgb(253, 255, 158)"}}>
              
          </Item>
          <Item style={{ borderRadius:25, height:250 ,backgroundColor: "rgb(122, 177, 255)"}}>
            
          </Item>
          <Item style={{ borderRadius:25, height:250 ,backgroundColor: "rgb(196, 162, 205)"}}>

          </Item>
        </Carousel>
      </div>
    </React.Fragment>
  );
}
