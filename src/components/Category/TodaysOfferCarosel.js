import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import CardMedia from "@material-ui/core/CardMedia";
import Card from "@material-ui/core/Card";
import Carousel from "react-elastic-carousel";
import Item from "./Item";
import StarRateRoundedIcon from '@material-ui/icons/StarRateRounded';
import { Link } from "react-router-dom";
import { CardContent, Typography } from "@material-ui/core";

const breakPoints = [
  { width: 1, itemsToShow: 2 },
  { width: 550, itemsToShow: 3 },
  { width: 768, itemsToShow: 4 },
  { width: 960, itemsToShow: 6 },
];
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    margin: 15,
  },
  typography: { fontFamily: "Almarai", fontSize: "1rem" },
  imageStyle:{

    // '&:hover':{
    //   width: 80,
    //   height: 80,
    // },
  },
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
    color:"#e5e5e5",
  }
}));
export default function TodayOfferCarosel() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <div className={classes.root}>
        <Typography className={classes.typography} style={{textAlign:"center", fontWeight: 500}}>
        پیشنهادات روز
        </Typography>
        <Carousel breakPoints={breakPoints}>
          <Item >
            <Card style={{borderRadius: 15}}>
              <CardMedia
              style={{ mixBlendMode: "multiply"}}
                className={classes.imageStyle}
                component="img"
                image="http://tcb-co.com/images/stories/virtuemart/product/resized/%D9%85%D8%AC%D9%85%D9%88%D8%B9%D9%87%20%D9%88%D8%A7%D8%B4%D8%B1%20%DA%AF%D9%84%D9%88%DB%8C%DB%8C%20%D8%A7%DA%AF%D8%B2%D9%88%D8%B2%20%D8%A7%D9%88%D8%B1%D8%AC%DB%8C%D9%86%D8%A7%D9%84%20%D9%85%D8%AF%D9%84%20405EWO%20%D9%85%D9%86%D8%A7%D8%B3%D8%A8%20%D8%A8%D8%B1%D8%A7%DB%8C%20%D9%BE%DA%98%D9%88%20405_22_0x500.jpg"
                alt=""
              />
              <CardContent>
                <div className={classes.discount} style={{fontSize:"0.8rem", marginBottom:5, borderRadius: 5, paddingRight:5,paddingLeft:5}}>-10%</div>
                <div className={classes.typography} style={{fontSize:"1rem", marginBottom:0,fontWeight: 600 }}>
                &#1778;
                &#1781;
                   $</div>
                   <div style={{marginBottom:5}}>
                <StarRateRoundedIcon className={classes.starRatedColor}/>
                <StarRateRoundedIcon className={classes.starDefaultColor}/>
                <StarRateRoundedIcon className={classes.starDefaultColor}/>
                <StarRateRoundedIcon className={classes.starDefaultColor}/>
                <StarRateRoundedIcon className={classes.starDefaultColor}/>
                </div>
                <Typography className={classes.typography} style={{fontSize:"0.8rem", marginTop:2, marginBottom:0}}>
                  مجموعه واشر گلویی اگزوز اورجینال مدل 405EWO مناسب برای پژو 405
                </Typography>
              </CardContent>
              </Card>
          </Item>
          <Item >
            <Card style={{borderRadius: 15}}>
              <CardMedia
                component="img"
                image="http://tcb-co.com/images/stories/virtuemart/product/resized/%DA%A9%D8%A7%D8%B3%D9%87%20%D9%86%D9%85%D8%AF%20%D8%B4%D9%81%D8%AA%20%D9%88%D8%B1%D9%88%D8%AF%DB%8C%20%D9%85%D8%AF%D9%84%20LF481Q1-1701030A1%20%D9%85%D9%86%D8%A7%D8%B3%D8%A8%20%D8%A8%D8%B1%D8%A7%DB%8C%20%D8%AE%D9%88%D8%AF%D8%B1%D9%88%D9%87%D8%A7%DB%8C%20%D9%84%DB%8C%D9%81%D8%A7%D9%86%20_0x500.jpg"
                alt=""
              />
              <CardContent>
                <div className={classes.discount} style={{fontSize:"0.8rem", marginBottom:5, borderRadius: 5, paddingRight:5,paddingLeft:5}}>-10%</div>
                <div className={classes.typography} style={{fontSize:"1rem", marginBottom:0,fontWeight: 600 }}>
                  &#1778;
                &#1781;
                   $</div>
                   <div style={{marginBottom:5}}>
                <StarRateRoundedIcon className={classes.starRatedColor}/>
                <StarRateRoundedIcon className={classes.starDefaultColor}/>
                <StarRateRoundedIcon className={classes.starDefaultColor}/>
                <StarRateRoundedIcon className={classes.starDefaultColor}/>
                <StarRateRoundedIcon className={classes.starDefaultColor}/>
                </div>
                <Typography className={classes.typography} style={{fontSize:"0.8rem", marginTop:2, marginBottom:0}}>
                  کاسه نمد شفت ورودی مدل LF481Q1-1701030A1 مناسب برای خودروهای لیفان
                </Typography>
              </CardContent>
              </Card>
          </Item>
          <Item >
            <Card style={{borderRadius: 15}}>
              <CardMedia
                component="img"
                image="http://tcb-co.com/images/stories/virtuemart/product/resized/%D8%A7%D9%88%D8%B1%DB%8C%D9%86%DA%AF%20%D8%B3%D9%88%D8%B2%D9%86%20%D8%A7%D9%86%DA%98%DA%A9%D8%AA%D9%88%D8%B1%20%D8%B2%D9%85%D8%B1%D8%AF%DB%8C%D8%AF%DA%A9%20%D9%85%D8%AF%D9%84%20s992_128%20%D9%85%D9%86%D8%A7%D8%B3%D8%A8%20%D8%A8%D8%B1%D8%A7%DB%8C%20%D9%BE%D8%B1%D8%A7%DB%8C%D8%AF%20_0x500.jpg"
                alt=""
              />
              <CardContent>
                <div className={classes.discount} style={{fontSize:"0.8rem", marginBottom:5, borderRadius: 5, paddingRight:5,paddingLeft:5}}>-10%</div>
                <div className={classes.typography} style={{fontSize:"1rem", marginBottom:0,fontWeight: 600 }}>
                &#1778;
                &#1781;
                   $                  </div>
                   <div style={{marginBottom:5}}>
                <StarRateRoundedIcon className={classes.starRatedColor}/>
                <StarRateRoundedIcon className={classes.starDefaultColor}/>
                <StarRateRoundedIcon className={classes.starDefaultColor}/>
                <StarRateRoundedIcon className={classes.starDefaultColor}/>
                <StarRateRoundedIcon className={classes.starDefaultColor}/>
                </div>
                <Typography className={classes.typography} style={{fontSize:"0.8rem", marginTop:2, marginBottom:0}}>
                  اورینگ سوزن انژکتور زمردیدک مدل S992_128 مناسب برای پراید                  
                </Typography>
              </CardContent>
              </Card>
          </Item>
          <Item >
            <Card style={{borderRadius: 15}}>
              <CardMedia
              className={classes.imageStyle}
                component="img"
                image="http://tcb-co.com/images/stories/virtuemart/product/resized/%D9%85%D8%AC%D9%85%D9%88%D8%B9%D9%87%20%D9%88%D8%A7%D8%B4%D8%B1%20%DA%AF%D9%84%D9%88%DB%8C%DB%8C%20%D8%A7%DA%AF%D8%B2%D9%88%D8%B2%20%D8%A7%D9%88%D8%B1%D8%AC%DB%8C%D9%86%D8%A7%D9%84%20%D9%85%D8%AF%D9%84%20405EWO%20%D9%85%D9%86%D8%A7%D8%B3%D8%A8%20%D8%A8%D8%B1%D8%A7%DB%8C%20%D9%BE%DA%98%D9%88%20405_22_0x500.jpg"
                alt=""
              />
              <CardContent>
                <div className={classes.discount} style={{fontSize:"0.8rem", marginBottom:5, borderRadius: 5, paddingRight:5,paddingLeft:5}}>-10%</div>
                <div className={classes.typography} style={{fontSize:"1rem", marginBottom:0,fontWeight: 600 }}>                &#1778;
                &#1781;
                   $</div>
                   <div style={{marginBottom:5}}>
                <StarRateRoundedIcon className={classes.starRatedColor}/>
                <StarRateRoundedIcon className={classes.starDefaultColor}/>
                <StarRateRoundedIcon className={classes.starDefaultColor}/>
                <StarRateRoundedIcon className={classes.starDefaultColor}/>
                <StarRateRoundedIcon className={classes.starDefaultColor}/>
                </div>
                <Typography className={classes.typography} style={{fontSize:"0.8rem", marginTop:2, marginBottom:0}}>
                  مجموعه واشر گلویی اگزوز اورجینال مدل 405EWO مناسب برای پژو 405
                </Typography>
              </CardContent>
              </Card>
          </Item>
          <Item >
            <Card style={{borderRadius: 15}}>
              <CardMedia
                component="img"
                image="http://tcb-co.com/images/stories/virtuemart/product/resized/%DA%A9%D8%A7%D8%B3%D9%87%20%D9%86%D9%85%D8%AF%20%D8%B4%D9%81%D8%AA%20%D9%88%D8%B1%D9%88%D8%AF%DB%8C%20%D9%85%D8%AF%D9%84%20LF481Q1-1701030A1%20%D9%85%D9%86%D8%A7%D8%B3%D8%A8%20%D8%A8%D8%B1%D8%A7%DB%8C%20%D8%AE%D9%88%D8%AF%D8%B1%D9%88%D9%87%D8%A7%DB%8C%20%D9%84%DB%8C%D9%81%D8%A7%D9%86%20_0x500.jpg"
                alt=""
              />
              <CardContent>
                <div className={classes.discount} style={{fontSize:"0.8rem", marginBottom:5, borderRadius: 5, paddingRight:5,paddingLeft:5}}>-10%</div>
                <div className={classes.typography} style={{fontSize:"1rem", marginBottom:0,fontWeight: 600 }}>                &#1778;
                &#1781;
                   $</div>
                   <div style={{marginBottom:5}}>
                <StarRateRoundedIcon className={classes.starRatedColor}/>
                <StarRateRoundedIcon className={classes.starDefaultColor}/>
                <StarRateRoundedIcon className={classes.starDefaultColor}/>
                <StarRateRoundedIcon className={classes.starDefaultColor}/>
                <StarRateRoundedIcon className={classes.starDefaultColor}/>
                </div>
                <Typography className={classes.typography} style={{fontSize:"0.8rem", marginTop:2, marginBottom:0}}>
                  کاسه نمد شفت ورودی مدل LF481Q1-1701030A1 مناسب برای خودروهای لیفان
                </Typography>
              </CardContent>
              </Card>
          </Item>
          <Item >
            <Card style={{borderRadius: 15}}>
              <CardMedia
                component="img"
                image="http://tcb-co.com/images/stories/virtuemart/product/resized/%D8%A7%D9%88%D8%B1%DB%8C%D9%86%DA%AF%20%D8%B3%D9%88%D8%B2%D9%86%20%D8%A7%D9%86%DA%98%DA%A9%D8%AA%D9%88%D8%B1%20%D8%B2%D9%85%D8%B1%D8%AF%DB%8C%D8%AF%DA%A9%20%D9%85%D8%AF%D9%84%20s992_128%20%D9%85%D9%86%D8%A7%D8%B3%D8%A8%20%D8%A8%D8%B1%D8%A7%DB%8C%20%D9%BE%D8%B1%D8%A7%DB%8C%D8%AF%20_0x500.jpg"
                alt=""
              />
              <CardContent>
                <div className={classes.discount} style={{fontSize:"0.8rem", marginBottom:5, borderRadius: 5, paddingRight:5,paddingLeft:5}}>-10%</div>
                <div className={classes.typography} style={{fontSize:"1rem", marginBottom:0,fontWeight: 600 }}>                &#1778;
                &#1781;
                   $</div>
                   <div style={{marginBottom:5}}>
                <StarRateRoundedIcon className={classes.starRatedColor}/>
                <StarRateRoundedIcon className={classes.starDefaultColor}/>
                <StarRateRoundedIcon className={classes.starDefaultColor}/>
                <StarRateRoundedIcon className={classes.starDefaultColor}/>
                <StarRateRoundedIcon className={classes.starDefaultColor}/>
                </div>
                <Typography className={classes.typography} style={{fontSize:"0.8rem", marginTop:2, marginBottom:0}}>
                  اورینگ سوزن انژکتور زمردیدک مدل S992_128 مناسب برای پراید                  
                </Typography>
              </CardContent>
              </Card>
          </Item>
          <Item>
            <Card style={{borderRadius: 15}}>
              <CardMedia
              className={classes.imageStyle}
                component="img"
                image="http://tcb-co.com/images/stories/virtuemart/product/resized/%D9%85%D8%AC%D9%85%D9%88%D8%B9%D9%87%20%D9%88%D8%A7%D8%B4%D8%B1%20%DA%AF%D9%84%D9%88%DB%8C%DB%8C%20%D8%A7%DA%AF%D8%B2%D9%88%D8%B2%20%D8%A7%D9%88%D8%B1%D8%AC%DB%8C%D9%86%D8%A7%D9%84%20%D9%85%D8%AF%D9%84%20405EWO%20%D9%85%D9%86%D8%A7%D8%B3%D8%A8%20%D8%A8%D8%B1%D8%A7%DB%8C%20%D9%BE%DA%98%D9%88%20405_22_0x500.jpg"
                alt=""
              />
              <CardContent>
                <div className={classes.discount} style={{fontSize:"0.8rem", marginBottom:5, borderRadius: 5, paddingRight:5,paddingLeft:5}}>-10%</div>
                <div className={classes.typography} style={{fontSize:"1rem", marginBottom:0,fontWeight: 600 }}>                &#1778;
                &#1781;
                   $</div>
                   <div style={{marginBottom:5}}>
                <StarRateRoundedIcon className={classes.starRatedColor}/>
                <StarRateRoundedIcon className={classes.starDefaultColor}/>
                <StarRateRoundedIcon className={classes.starDefaultColor}/>
                <StarRateRoundedIcon className={classes.starDefaultColor}/>
                <StarRateRoundedIcon className={classes.starDefaultColor}/>
                </div>
                <Typography className={classes.typography} style={{fontSize:"0.8rem", marginTop:2, marginBottom:0}}>
                  مجموعه واشر گلویی اگزوز اورجینال مدل 405EWO مناسب برای پژو 405
                </Typography>
              </CardContent>
              </Card>
          </Item>
          <Item>
            <Card style={{borderRadius: 15}}>
              <CardMedia
                component="img"
                image="http://tcb-co.com/images/stories/virtuemart/product/resized/%DA%A9%D8%A7%D8%B3%D9%87%20%D9%86%D9%85%D8%AF%20%D8%B4%D9%81%D8%AA%20%D9%88%D8%B1%D9%88%D8%AF%DB%8C%20%D9%85%D8%AF%D9%84%20LF481Q1-1701030A1%20%D9%85%D9%86%D8%A7%D8%B3%D8%A8%20%D8%A8%D8%B1%D8%A7%DB%8C%20%D8%AE%D9%88%D8%AF%D8%B1%D9%88%D9%87%D8%A7%DB%8C%20%D9%84%DB%8C%D9%81%D8%A7%D9%86%20_0x500.jpg"
                alt=""
              />
              <CardContent>
                <div className={classes.discount} style={{fontSize:"0.8rem", marginBottom:5, borderRadius: 5, paddingRight:5,paddingLeft:5}}>-10%</div>
                <div className={classes.typography} style={{fontSize:"1rem", marginBottom:0,fontWeight: 600 }}>                &#1778;
                &#1781;
                   $</div>
                   <div style={{marginBottom:5}}>
                <StarRateRoundedIcon className={classes.starRatedColor}/>
                <StarRateRoundedIcon className={classes.starDefaultColor}/>
                <StarRateRoundedIcon className={classes.starDefaultColor}/>
                <StarRateRoundedIcon className={classes.starDefaultColor}/>
                <StarRateRoundedIcon className={classes.starDefaultColor}/>
                </div>
                <Typography className={classes.typography} style={{fontSize:"0.8rem", marginTop:2, marginBottom:0}}>
                  کاسه نمد شفت ورودی مدل LF481Q1-1701030A1 مناسب برای خودروهای لیفان
                </Typography>
              </CardContent>
              </Card>
          </Item>
          <Item>
            <Card style={{borderRadius: 15}}>
              <CardMedia
                component="img"
                image="http://tcb-co.com/images/stories/virtuemart/product/resized/%D8%A7%D9%88%D8%B1%DB%8C%D9%86%DA%AF%20%D8%B3%D9%88%D8%B2%D9%86%20%D8%A7%D9%86%DA%98%DA%A9%D8%AA%D9%88%D8%B1%20%D8%B2%D9%85%D8%B1%D8%AF%DB%8C%D8%AF%DA%A9%20%D9%85%D8%AF%D9%84%20s992_128%20%D9%85%D9%86%D8%A7%D8%B3%D8%A8%20%D8%A8%D8%B1%D8%A7%DB%8C%20%D9%BE%D8%B1%D8%A7%DB%8C%D8%AF%20_0x500.jpg"
                alt=""
              />
              <CardContent>
                <div className={classes.discount} style={{fontSize:"0.8rem", marginBottom:5, borderRadius: 5, paddingRight:5,paddingLeft:5}}>-10%</div>
                <div className={classes.typography} style={{fontSize:"1rem", marginBottom:0,fontWeight: 600 }}>                &#1778;
                &#1781;
                   $</div>
                   <div style={{marginBottom:5}}>
                <StarRateRoundedIcon className={classes.starRatedColor}/>
                <StarRateRoundedIcon className={classes.starDefaultColor}/>
                <StarRateRoundedIcon className={classes.starDefaultColor}/>
                <StarRateRoundedIcon className={classes.starDefaultColor}/>
                <StarRateRoundedIcon className={classes.starDefaultColor}/>
                </div>
                <Typography className={classes.typography} style={{fontSize:"0.8rem", marginTop:2, marginBottom:0}}>
                  اورینگ سوزن انژکتور زمردیدک مدل S992_128 مناسب برای پراید                  
                </Typography>
              </CardContent>
              </Card>
          </Item>
  
        </Carousel>
      </div>
    </React.Fragment>
  );
}
