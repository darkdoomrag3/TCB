import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import CardMedia from "@material-ui/core/CardMedia";
import Card from "@material-ui/core/Card";
import Item from "./Item";
import Grid from "@material-ui/core/Grid";
import Paper from '@material-ui/core/Paper';
import NotificationsActiveOutlinedIcon from '@material-ui/icons/NotificationsActiveOutlined';
import PersonOutlineOutlinedIcon from '@material-ui/icons/PersonOutlineOutlined';
import Favoriate from '@material-ui/icons/FavoriteBorderOutlined';
import Hidden from '@material-ui/core/Hidden';
import {Link} from 'react-router-dom'
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import ArrowForwardIosOutlinedIcon from '@material-ui/icons/ArrowForwardIosOutlined';
import StarRateRoundedIcon from '@material-ui/icons/StarRateRounded';
import { CardContent, Typography } from "@material-ui/core";

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 },
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
export default function MainCategory() {
  const classes = useStyles();

  return (
    <div>
      <Grid container spacing={3} className={classes.root}>
        <Grid item xs={6} sm={4}>
          <Item style={{minHeight:"auto",borderRadius: 15 ,backgroundColor: "rgb(209, 198, 235)"}}>

          </Item>
        </Grid>

        <Grid item xs={4} sm={6}>
        <div style={{display: "flex", alignItems: "baseline"}}>
          <div className="row" >
          {/* <div className={classes.typography} style={{fontWeight: 500, display: "flex"}}>
            <p>محصولات جذاب</p> */}
            <div justifyContent="flex-end" style={{textAlign: "right"}}>
              <p className={classes.typography} style={{fontWeight: 500}}>همه</p>
              <ArrowForwardIosOutlinedIcon />
          </div>   
          {/* </div> */}
           
        </div>
          </div>
        <Grid container
        spacing={2}
            direction="row"
           justify="center"
          alignItems="center" breakPoints={breakPoints}>
          <Grid item xs={12} sm={6} md={4}>
          <Item>
            <Card>
              <CardMedia
                component="img"
                image="http://tcb-co.com/images/stories/virtuemart/product/resized/%D8%A7%D9%88%D8%B1%DB%8C%D9%86%DA%AF%20%D8%B3%D9%88%D8%B2%D9%86%20%D8%A7%D9%86%DA%98%DA%A9%D8%AA%D9%88%D8%B1%20%D8%B2%D9%85%D8%B1%D8%AF%DB%8C%D8%AF%DA%A9%20%D9%85%D8%AF%D9%84%20s992_128%20%D9%85%D9%86%D8%A7%D8%B3%D8%A8%20%D8%A8%D8%B1%D8%A7%DB%8C%20%D9%BE%D8%B1%D8%A7%DB%8C%D8%AF%20_0x500.jpg"
                alt=""
              />
              <CardContent>
                <div className={classes.discount} style={{fontSize:"0.8rem", marginBottom:5, borderRadius: 5, paddingRight:5,paddingLeft:5}}>-10%</div>
                <div className={classes.typography} style={{fontSize:"1.5rem", marginBottom:0,fontWeight: 600 }}>                &#1778;
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
                  اورینگ سوزن انژکتور زمردیدک مدل S992_128 مناسب برای پراید                  </p>
                </Typography>
              </CardContent>
              </Card>
          </Item>
            </Grid>
          <Hidden only xsDown ><Grid item sm={6} md={4}>
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
                <div className={classes.typography} style={{fontSize:"1.5rem", marginBottom:0, fontWeight: 600 }}>
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
            </Grid></Hidden>
          <Hidden only smDown ><Grid item md={4}>
          <Item>
            <Card>
              <CardMedia
                component="img"
                image="http://tcb-co.com/images/stories/virtuemart/product/resized/%DA%A9%D8%A7%D8%B3%D9%87%20%D9%86%D9%85%D8%AF%20%D8%B4%D9%81%D8%AA%20%D9%88%D8%B1%D9%88%D8%AF%DB%8C%20%D9%85%D8%AF%D9%84%20LF481Q1-1701030A1%20%D9%85%D9%86%D8%A7%D8%B3%D8%A8%20%D8%A8%D8%B1%D8%A7%DB%8C%20%D8%AE%D9%88%D8%AF%D8%B1%D9%88%D9%87%D8%A7%DB%8C%20%D9%84%DB%8C%D9%81%D8%A7%D9%86%20_0x500.jpg"
                alt=""
              />
              <CardContent>
                <div className={classes.discount} style={{fontSize:"0.8rem", marginBottom:5, borderRadius: 5, paddingRight:5,paddingLeft:5}}>-10%</div>
                <div className={classes.typography} style={{fontSize:"1.5rem", marginBottom:0,fontWeight: 600 }}>                &#1778;
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
                  کاسه نمد شفت ورودی مدل LF481Q1-1701030A1 مناسب برای خودروهای لیفان
                  </p>
                </Typography>
              </CardContent>
              </Card>
          </Item>
            </Grid>
</Hidden>
          </Grid>
          <Grid container
        spacing={2}
            direction="row"
           justify="center"
          alignItems="center" breakPoints={breakPoints}>
          <Grid item xs={12} sm={6} md={4}>
          <Item>
            <Card>
              <CardMedia
                component="img"
                image="http://tcb-co.com/images/stories/virtuemart/product/resized/%D9%85%DA%A9%D9%85%D9%84%20%D8%B3%D9%88%D8%AE%D8%AA%20%D8%AE%D9%88%D8%AF%D8%B1%D9%88%20%D9%84%DB%8C%DA%A9%D9%88%D9%85%D9%88%D9%84%DB%8C%20%D9%85%D8%AF%D9%84%20Speed%20TEC%20Petrol%20%D8%AD%D8%AC%D9%85%20250%20%D9%85%DB%8C%D9%84%DB%8C%20%D9%84%DB%8C%D8%AA%D8%B1%20_0x500.jpg"
                alt=""
              />
              <CardContent>
                <div className={classes.discount} style={{fontSize:"0.8rem", marginBottom:5, borderRadius: 5, paddingRight:5,paddingLeft:5}}>-10%</div>
                <div className={classes.typography} style={{fontSize:"1.5rem", marginBottom:0,fontWeight: 600 }}>                &#1778;
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
                  مکمل سوخت خودرو لیکومولی مدل SPEED TEC PETROL حجم 250 میلی لیتر                  </p>
                </Typography>
              </CardContent>
              </Card>
          </Item>
            </Grid>
          <Hidden only xsDown ><Grid item sm={6} md={4}>
          <Item>
            <Card>
              <CardMedia
              className={classes.imageStyle}
                component="img"
                image="http://tcb-co.com/images/stories/virtuemart/product/resized/2025051_0x500.jpg"
                alt=""
              />
              <CardContent>
                <div className={classes.discount} style={{fontSize:"0.8rem", marginBottom:5, borderRadius: 5, paddingRight:5,paddingLeft:5}}>-10%</div>
                <div className={classes.typography} style={{fontSize:"1.5rem", marginBottom:0, fontWeight: 600 }}>
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
                  رادیاتور شوی وورث مدل 5861510250 حجم 250 میلی لیتر                  </p>
                </Typography>
              </CardContent>
              </Card>
          </Item>
            </Grid></Hidden>
          <Hidden only smDown ><Grid item md={4}>
          <Item>
            <Card>
              <CardMedia
                component="img"
                image="http://tcb-co.com/images/stories/virtuemart/product/resized/%D9%85%DA%A9%D9%85%D9%84%20%D8%B3%D9%88%D8%AE%D8%AA%20%D8%A7%DA%A9%D8%B3%DB%8C%D8%B1%20%D9%BE%D9%84%D8%A7%D8%B3%20%D9%85%D8%AF%D9%84%20%D9%BE%DB%8C%D8%B4%D8%B1%D9%81%D8%AA%D9%87%20%D8%AD%D8%AC%D9%85%20250%20%D9%85%DB%8C%D9%84%DB%8C%20%D9%84%DB%8C%D8%AA%D8%B1_0x500.jpg"
                alt=""
              />
              <CardContent>
                <div className={classes.discount} style={{fontSize:"0.8rem", marginBottom:5, borderRadius: 5, paddingRight:5,paddingLeft:5}}>-10%</div>
                <div className={classes.typography} style={{fontSize:"1.5rem", marginBottom:0,fontWeight: 600 }}>                &#1778;
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
                  مکمل سوخت اکسیر پلاس مدل پیشرفته حجم 250 میلی لیتر                  </p>
                </Typography>
              </CardContent>
              </Card>
          </Item>
            </Grid>
</Hidden>
          </Grid>
          </Grid>
      </Grid>
    </div>
  );
}