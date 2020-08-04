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
import { sizing } from '@material-ui/system';
import Box from "@material-ui/core/Box"

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    margin: 15,
  },
  typography: { fontFamily: "Almarai", fontSize: "1rem", color:"black" },
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
  },
  height:{
    height: "700px",
    minHeight: "400px",
    '@media (min-width: 600px)': {
      minHeight: "700px"
    }
  }
}));
export default function Main() {
  const classes = useStyles();

  return (    
    <div className={classes.root}>
      <Grid container spacing={3}>

        <Grid item  xs={12} sm={7} md={6} lg={4}>
          <Item className={classes.height} style={{ borderRadius: 15 ,backgroundColor: "rgb(209, 198, 235)"}}>

            <img style={{ marginTop:125 }} width="100" height="100" 
            src="https://image.flaticon.com/icons/svg/3079/3079067.svg"
            alt="belt" />
            
            <img style={{ marginTop:325 }} width="100" height="100" 
            src="https://image.flaticon.com/icons/svg/2481/2481303.svg"
            alt="help" />

            <img style={{ marginTop:125 }} width="100" height="100" 
            src="https://image.flaticon.com/icons/svg/950/950408.svg"
            alt="oil" />
            {/* <div className={classes.typography}>
                <p style={{marginTop:525, fontWeight:500}}>همه محصولات روغنی</p>
              </div> */}
          </Item>
        </Grid>

        <Grid item xs={12} sm={5} md={6} lg={8}>
          <Grid item md={12}>
          <div className="MuiGrid-root MuiGrid-container" style={{marginBottom: 10}}>
          <div className="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-true">
            <a className={classes.typography} style={{marginLeft: 10,fontWeight: 500 }}
            href="#">محصولات جذاب</a>
            </div>
            <div className="MuiGrid-root MuiGrid-item">
              <a className={classes.typography} style={{marginLeft: 10,fontWeight: 500}} 
              href="#">همه
              <ArrowForwardIosOutlinedIcon />
              </a>
              </div>
              </div>  
            </Grid>

          <Grid container
        spacing={2}
            direction="row"
           justify="center"
          alignItems="center">
          <Grid item xs={6} sm={10} md={6} lg={3}>
          <Item>
            <Card style={{borderRadius: 15}}>
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
                <Typography className={classes.typography} style={{fontSize:"0.8rem", marginTop:2, marginBottom:0}}>
                  اورینگ سوزن انژکتور زمردیدک مدل S992_128 مناسب برای پراید                  
                </Typography>
              </CardContent>
              </Card>
          </Item>
            </Grid>
          <Hidden only="sm">
            <Grid item xs={6} sm={10} md={6} lg={3}>
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
                <Typography className={classes.typography} style={{fontSize:"0.8rem", marginTop:2, marginBottom:0}}>
                  مجموعه واشر گلویی اگزوز اورجینال مدل 405EWO مناسب برای پژو 405
                </Typography>
              </CardContent>
              </Card>
          </Item>
            </Grid></Hidden>
            <Hidden only={["md","sm"]}><Grid item xs={6} sm={10} md={6} lg={3}>
          <Item>
            <Card style={{borderRadius: 15}}>
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
                <Typography className={classes.typography} style={{fontSize:"0.8rem", marginTop:2, marginBottom:0}}>
                  کاسه نمد شفت ورودی مدل LF481Q1-1701030A1 مناسب برای خودروهای لیفان
                </Typography>
              </CardContent>
              </Card>
          </Item>
            </Grid>
</Hidden>
<Hidden only={["md","sm"]}>
  <Grid item xs={6} sm={10} md={6} lg={3}>
          <Item>
            <Card style={{borderRadius: 15}}>
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
                <Typography className={classes.typography} style={{fontSize:"0.8rem", marginTop:2, marginBottom:0}}>
                  کاسه نمد شفت ورودی مدل LF481Q1-1701030A1 مناسب برای خودروهای لیفان
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
          alignItems="center">
          <Grid item xs={6} sm={10} md={6} lg={3}>
          <Item>
            <Card style={{borderRadius: 15}}>
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
                <Typography className={classes.typography} style={{fontSize:"0.8rem", marginTop:2, marginBottom:0}}>
                  مکمل سوخت خودرو لیکومولی مدل SPEED TEC PETROL حجم 250 میلی لیتر                  
                </Typography>
              </CardContent>
              </Card>
          </Item>
            </Grid>
          <Hidden only="sm"><Grid item xs={6} sm={10} md={6} lg={3}>
          <Item>
            <Card style={{borderRadius: 15}}>
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
                <Typography className={classes.typography} style={{fontSize:"0.8rem", marginTop:2, marginBottom:0}}>
                  رادیاتور شوی وورث مدل 5861510250 حجم 250 میلی لیتر                  
                </Typography>
              </CardContent>
              </Card>
          </Item>
            </Grid></Hidden>
          <Hidden only={["md","sm"]} ><Grid item xs={6} sm={10} md={6} lg={3}>
          <Item>
            <Card style={{borderRadius: 15}}> 
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
                <Typography className={classes.typography} style={{fontSize:"0.8rem", marginTop:2, marginBottom:0}}>
                  مکمل سوخت اکسیر پلاس مدل پیشرفته حجم 250 میلی لیتر                  
                </Typography>
              </CardContent>
              </Card>
          </Item>
            </Grid>
              </Hidden>
          <Hidden only={["md","sm"]}><Grid item xs={6} sm={10} md={6} lg={3}>
          <Item>
            <Card style={{borderRadius: 15}}> 
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
                <Typography className={classes.typography} style={{fontSize:"0.8rem", marginTop:2, marginBottom:0}}>
                  مکمل سوخت اکسیر پلاس مدل پیشرفته حجم 250 میلی لیتر                  
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