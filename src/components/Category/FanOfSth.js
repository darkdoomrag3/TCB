import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import CardMedia from "@material-ui/core/CardMedia";
import Carousel from "react-elastic-carousel";
import Item from "./Item";
import { Link } from "react-router-dom";
import StarRateRoundedIcon from '@material-ui/icons/StarRateRounded';
import Card from "@material-ui/core/Card";
import { CardContent, Typography } from "@material-ui/core";

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 768, itemsToShow: 4 },
  { width: 1200, itemsToShow: 6 },
];
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    margin: 15,
  },
  typography: { fontFamily: "Almarai", fontSize: "1rem" },
  imageStyle:{
    width:"100%",
                height:120,
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
    color:"#e5e5e5"
  },
}));
export default function FanOfSth() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <div className={classes.root}>
        <Carousel breakPoints={breakPoints}>
        <Item>
            <Card>
              <CardMedia
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
                <Typography>
                  <p className={classes.typography} style={{fontSize:"0.8rem", marginTop:2, marginBottom:0}}>
                  مجموعه واشر گلویی اگزوز اورجینال مدل 405EWO مناسب برای پژو 405
                  </p>
                </Typography>
              </CardContent>
              </Card>
          </Item>

                 <Item>
            <Card>
              <CardMedia
                className={classes.imageStyle}
                component="img"
                image="http://tcb-co.com/images/stories/virtuemart/product/resized/%D8%AA%D8%B3%D9%85%D9%87%20%D8%AF%DB%8C%D9%86%D8%A7%D9%85%20%D8%AF%D8%A7%D9%86%DA%AF%DB%8C%D9%84%204PK885%20%D9%85%D9%86%D8%A7%D8%B3%D8%A8%20%D8%A8%D8%B1%D8%A7%DB%8C%20%D8%B1%DB%8C%D9%88%20%D9%88%20%D8%AA%DB%8C%D8%A8%D8%A7%20__2_0x500.jpg"
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
                <Typography>
                  <p className={classes.typography} style={{fontSize:"0.8rem", marginTop:2, marginBottom:0}}>
                  تسمه دینام دانگیل 4PK885 مناسب برای ریو و تیبا
                 </p>
                </Typography>
              </CardContent>
              </Card>
          </Item>
          <Item>
            <Card>
              <CardMedia
                className={classes.imageStyle}
                component="img"
                image="http://tcb-co.com/images/stories/virtuemart/product/resized/%D8%AA%D8%B3%D9%85%D9%87%20%D8%AF%DB%8C%D9%86%D8%A7%D9%85%20%D8%AF%D8%A7%D9%86%DA%AF%DB%8C%D9%84%20%D9%85%D8%AF%D9%84%206pk%201575%20%D9%85%D9%86%D8%A7%D8%B3%D8%A8%20%D8%A8%D8%B1%D8%A7%DB%8C%20%D9%BE%DA%98%D9%88%20206%20%D8%AA%DB%8C%D9%BE%205%20_0x500.jpg"
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
                <Typography>
                  <p className={classes.typography} style={{fontSize:"0.8rem", marginTop:2, marginBottom:0}}>
                  تسمه دینام دانگیل مدل 6PK 1575 مناسب برای پژو 206 تیپ 5                  </p>
                </Typography>
              </CardContent>
              </Card>
          </Item>

                 <Item>
            <Card>
              <CardMedia style={{}}
                className={classes.imageStyle}
                component="img"
                image="http://tcb-co.com/images/stories/virtuemart/product/resized/%D8%A8%D9%84%D8%A8%D8%B1%DB%8C%D9%86%DA%AF%20%D9%85%D8%AF%D9%84%2085-207%20%D0%AE15%204_0x500.jpg"
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
                <Typography>
                  <p className={classes.typography} style={{fontSize:"0.8rem", marginTop:2, marginBottom:0}}>
                  بلبرینگ مدل 85-207 Ю15                 
                  </p>
                </Typography>
              </CardContent>
              </Card>
          </Item>
                 <Item>
            <Card>
              <CardMedia
                className={classes.imageStyle}
                component="img"
                image="http://tcb-co.com/images/stories/virtuemart/product/resized/1263500_0x500.jpg"
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
                <Typography>
                  <p className={classes.typography} style={{fontSize:"0.8rem", marginTop:2, marginBottom:0}}>
                  شلنگ 1/2 اینچ آکواکرفت مدل 850060 به همراه لوازم جانبی                 </p>
                </Typography>
              </CardContent>
              </Card>
          </Item>
                 <Item>
            <Card>
              <CardMedia
                className={classes.imageStyle}
                component="img"
                image="http://tcb-co.com/images/stories/virtuemart/product/resized/1263544_0x500.jpg"
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
                <Typography>
                  <p className={classes.typography} style={{fontSize:"0.8rem", marginTop:2, marginBottom:0}}>
                  شلنگ 1/2 اینچ آکواکرفت مدل 850060 به همراه لوازم جانبی                 </p>
                </Typography>
              </CardContent>
              </Card>
          </Item>
          
        </Carousel>
      </div>
    </React.Fragment>
  );
}
