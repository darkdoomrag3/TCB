import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import CardMedia from "@material-ui/core/CardMedia";
import Carousel from "react-elastic-carousel";
import Item from "./Item";
import { Link } from "react-router-dom";

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 1 },
  { width: 768, itemsToShow: 1 },
  { width: 1200, itemsToShow: 1 },
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
export default function BannerCarosel() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <div className={classes.root}>
        <Carousel breakPoints={breakPoints}>
          <Item>
            <CardMedia 
              component="img"
              image="http://tcb-co.com/images/slider-22jpg.jpg"
              alt=""
            />
          </Item>
          <Item>
            <CardMedia
              component="img"
              image="http://tcb-co.com/images/windenergy_2016_16_9-schaeffler-20160929-01_rwd_1200.jpg"
              alt=""
            />
          </Item>
          <Item>
            <CardMedia
              component="img"
              image="http://www.tcb-co.com/images/slider-2.jpg"
              alt=""
            />
          </Item>
        </Carousel>
      </div>
    </React.Fragment>
  );
}
