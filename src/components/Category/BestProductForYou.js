import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import CardMedia from "@material-ui/core/CardMedia";
import Carousel from "react-elastic-carousel";
import Item from "./Item";
import { Link } from "react-router-dom";
import { Typography } from "@material-ui/core";

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
  typography: { fontFamily: "Almarai", fontSize: "1rem", color:"black" },
  imageStyle:{
      opacity: 0.5,
      borderRadius:15
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
  discount:{
    width:"fit",
    fontWeight: 400,
    color: "#fff",
    backgroundColor:"#ff6262",
    display: "inline-block",
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
    <React.Fragment>
      <div className={classes.root}>
      <div className="MuiGrid-root MuiGrid-container" style={{marginBottom: 10}}>
          <div className="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-true">
            <a className={classes.typography} style={{marginLeft: 10,fontWeight: 500 }}
            href="#">
            بهترین انتخاب ها برای شما
            </a>
            </div>
              </div> 
        <Carousel breakPoints={breakPoints}>
          <Item style={{  borderRadius:25, height:250 ,backgroundColor: "rgb(255, 189, 193)"}}>
          <CardMedia
                className={classes.imageStyle}
                component="img"
                image="http://tcb-co.com/images/stories/virtuemart/product/resized/%D9%85%D8%AC%D9%85%D9%88%D8%B9%D9%87%20%D9%88%D8%A7%D8%B4%D8%B1%20%DA%AF%D9%84%D9%88%DB%8C%DB%8C%20%D8%A7%DA%AF%D8%B2%D9%88%D8%B2%20%D8%A7%D9%88%D8%B1%D8%AC%DB%8C%D9%86%D8%A7%D9%84%20%D9%85%D8%AF%D9%84%20405EWO%20%D9%85%D9%86%D8%A7%D8%B3%D8%A8%20%D8%A8%D8%B1%D8%A7%DB%8C%20%D9%BE%DA%98%D9%88%20405_22_0x500.jpg"
                alt=""
                />
                <Typography className={classes.textStyle}>
                </Typography>
          </Item>
          <Item style={{ borderRadius:25,  height:250 ,backgroundColor: "rgb(87, 209, 201)"}}>
          <CardMedia
                className={classes.imageStyle}
                component="img"
                image="https://as1.ftcdn.net/jpg/02/23/02/46/500_F_223024681_xVM6iIkdGMgJRZ5V9RKFNV89Uk8Yoy9c.jpg"
                alt=""
                />
          </Item>
          <Item style={{ borderRadius:25, height:250 ,backgroundColor: "rgb(253, 255, 158)"}}>
          <CardMedia
                className={classes.imageStyle}
                component="img"
                image="https://as1.ftcdn.net/jpg/02/27/34/84/500_F_227348402_YZsfh6T5quwvspI6VzZAimzoLOtJKHtj.jpg"
                alt=""
                />
          </Item>
          <Item style={{ borderRadius:25, height:250 ,backgroundColor: "rgb(122, 177, 255)"}}>
          <CardMedia
                className={classes.imageStyle}
                component="img"
                image="https://as1.ftcdn.net/jpg/02/91/63/44/500_F_291634423_ylMumohb59vI53quvNPJf9q3kYdBIzd7.jpg"
                alt=""
                />
          </Item>
          <Item style={{ borderRadius:25, height:250 ,backgroundColor: "rgb(196, 162, 205)"}}>
          <CardMedia
                className={classes.imageStyle}
                component="img"
                image="https://as1.ftcdn.net/jpg/02/36/35/04/500_F_236350431_eH2xcpT6fK2MuHopojnqlEk2XJBfSznx.jpg"
                alt=""
                />
          </Item>
        </Carousel>
      </div>
    </React.Fragment>
  );
}
