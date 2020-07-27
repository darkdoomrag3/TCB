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
  typography: { textAlign:"center",fontFamily: "Almarai", fontSize: "1rem" },
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
    <React.Fragment>

    <Grid container
        spacing={1}
            direction="row"
           justify="center"
          alignItems="center">
          <Grid item xs={12} sm={6} md={4}>
          <Item style={{width: 400 ,height: 200,borderRadius:15,backgroundColor: "rgb(236, 14, 113)"}}>
              {/* <CardContent>
                <div className={classes.discount} style={{fontSize:"0.8rem", marginBottom:5, borderRadius: 5, paddingRight:5,paddingLeft:5}}>-10%</div>
                <div className={classes.typography} style={{fontSize:"1.5rem", marginBottom:0,fontWeight: 600 }}>                &#1778;
                &#1781;
                   $</div>
                <Typography>
                  <p className={classes.typography} style={{fontSize:"0.8rem", marginTop:2, marginBottom:0}}>
                  اورینگ سوزن انژکتور زمردیدک مدل S992_128 مناسب برای پراید                  </p>
                </Typography>
              </CardContent> */}
              <div className={classes.typography}>
                <p>محصولات آمریکایی</p>
                <p>بهترین محصولات از سراسر جهان</p>
              </div>
          </Item>
            </Grid>
          <Grid item xs={12} sm={6} md={4}>
          <Item style={{width: 400 ,height: 200,borderRadius:15, backgroundColor: "rgb(255, 230, 22)"}}>
              {/*<CardMedia
              className={classes.imageStyle}
                component="img"
                image="http://tcb-co.com/images/stories/virtuemart/product/resized/%D9%85%D8%AC%D9%85%D9%88%D8%B9%D9%87%20%D9%88%D8%A7%D8%B4%D8%B1%20%DA%AF%D9%84%D9%88%DB%8C%DB%8C%20%D8%A7%DA%AF%D8%B2%D9%88%D8%B2%20%D8%A7%D9%88%D8%B1%D8%AC%DB%8C%D9%86%D8%A7%D9%84%20%D9%85%D8%AF%D9%84%20405EWO%20%D9%85%D9%86%D8%A7%D8%B3%D8%A8%20%D8%A8%D8%B1%D8%A7%DB%8C%20%D9%BE%DA%98%D9%88%20405_22_0x500.jpg"
                alt=""
              />
              <CardContent>
                <div className={classes.discount} style={{fontSize:"0.8rem", marginBottom:5, borderRadius: 5, paddingRight:5,paddingLeft:5}}>-10%</div>
                <Typography>
                  <p className={classes.typography} style={{fontSize:"0.8rem", marginTop:2, marginBottom:0}}>
                  مجموعه واشر گلویی اگزوز اورجینال مدل 405EWO مناسب برای پژو 405
                  </p>
                </Typography>
              </CardContent>*/}
              <div className={classes.typography}>
                <p>محصولات اروپایی</p>
                <p>بهترین محصولات از سراسر جهان</p>
              </div>
          </Item>
            </Grid>
          <Grid item xs={12} sm={6} md={4}>
          <Item style={{width: 400 ,height: 200,borderRadius:15,backgroundColor: "rgb(0, 166, 66)"}}> 
            {/* <Card>
              <CardMedia
              className={classes.imageStyle}

                component="img"
                image="http://tcb-co.com/images/stories/virtuemart/product/resized/%DA%A9%D8%A7%D8%B3%D9%87%20%D9%86%D9%85%D8%AF%20%D8%B4%D9%81%D8%AA%20%D9%88%D8%B1%D9%88%D8%AF%DB%8C%20%D9%85%D8%AF%D9%84%20LF481Q1-1701030A1%20%D9%85%D9%86%D8%A7%D8%B3%D8%A8%20%D8%A8%D8%B1%D8%A7%DB%8C%20%D8%AE%D9%88%D8%AF%D8%B1%D9%88%D9%87%D8%A7%DB%8C%20%D9%84%DB%8C%D9%81%D8%A7%D9%86%20_0x500.jpg"
                alt=""
              />
              <CardContent>
                <div className={classes.discount} style={{fontSize:"0.8rem", marginBottom:5, borderRadius: 5, paddingRight:5,paddingLeft:5}}>-10%</div>
                <div className={classes.typography} style={{fontSize:"1.5rem", marginBottom:0,fontWeight: 600 }}>                &#1778;
                &#1781;
                   $</div>
                <Typography>
                  <p className={classes.typography} style={{fontSize:"0.8rem", marginTop:2, marginBottom:0}}>
                  کاسه نمد شفت ورودی مدل LF481Q1-1701030A1 مناسب برای خودروهای لیفان
                  </p>
                </Typography>
              </CardContent>
              </Card> */}
              <div className={classes.typography}>
                <p>محصولات چینی</p>
                <p>بهترین محصولات از سراسر جهان</p>
                </div>
          </Item>
            </Grid>
          </Grid>
    </React.Fragment>
  );
}
