import React from 'react'
import { Grid, Paper, Typography, Card, CardContent, CardMedia, Button } from '@material-ui/core'
import { makeStyles } from "@material-ui/core/styles";
import ArrowForwardIosOutlinedIcon from '@material-ui/icons/ArrowForwardIosOutlined';
import Carousel from "react-elastic-carousel";
import Item from "./Item";
import StarRateRoundedIcon from '@material-ui/icons/StarRateRounded';
import { Link } from "react-router-dom";
import { useEffect } from 'react';
import {axios} from 'axios';

const breakPoints = [
    { width: 1, itemsToShow: 2 },
    { width: 550, itemsToShow: 3 },
    { width: 768, itemsToShow: 4 },
    { width: 960, itemsToShow: 6 },
  ];
const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
      },
      typography: { fontFamily: "Almarai", fontSize: "1rem" },
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


//Should use infinite Scrolling & axios OR Vitualize list
export default function Expanding() {
    const classes = useStyles()


    return (
        
        <div className={classes.root}>  

        <Grid item md={12}>
          <div className="MuiGrid-root MuiGrid-container" style={{marginBottom: 10}}>
          <div className="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-true">
            <a className={classes.typography} style={{marginLeft: 10,fontWeight: 500 }}
            href="#">بهترین محصولات برای شما</a>
            </div>
              </div>  
          </Grid>

          <Grid container spacinf={3} direction="row" justify="center"
          alignItems="center"> 

            <Grid item xs={4} sm={3} md={2} lg={2} style={{margin:5}}>
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
                <Typography>
                  <p className={classes.typography} style={{fontSize:"0.8rem", marginTop:2, marginBottom:0}}>
                  مجموعه واشر گلویی اگزوز اورجینال مدل 405EWO مناسب برای پژو 405
                  </p>
                </Typography>
              </CardContent>
              </Card>
          </Item>
          </Grid>

          <Grid xs={4} sm={3} md={2} lg={2} style={{margin:5}}>
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
                <Typography>
                  <p className={classes.typography} style={{fontSize:"0.8rem", marginTop:2, marginBottom:0}}>
                  مجموعه واشر گلویی اگزوز اورجینال مدل 405EWO مناسب برای پژو 405
                  </p>
                </Typography>
              </CardContent>
              </Card>
          </Item>
          </Grid>
          <Grid xs={4} sm={3} md={2} lg={2} style={{margin:5}}>
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
                <Typography>
                  <p className={classes.typography} style={{fontSize:"0.8rem", marginTop:2, marginBottom:0}}>
                  مجموعه واشر گلویی اگزوز اورجینال مدل 405EWO مناسب برای پژو 405
                  </p>
                </Typography>
              </CardContent>
              </Card>
          </Item>
          </Grid>
          <Grid xs={4} sm={3} md={2} lg={2} style={{margin:5}}>
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
                <Typography>
                  <p className={classes.typography} style={{fontSize:"0.8rem", marginTop:2, marginBottom:0}}>
                  مجموعه واشر گلویی اگزوز اورجینال مدل 405EWO مناسب برای پژو 405
                  </p>
                </Typography>
              </CardContent>
              </Card>
          </Item>
          </Grid>
          <Grid xs={4} sm={3} md={2} lg={2} style={{margin:5}}>
              <Item>
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
                <Typography>
                  <p className={classes.typography} style={{fontSize:"0.8rem", marginTop:2, marginBottom:0}}>
                  مجموعه واشر گلویی اگزوز اورجینال مدل 405EWO مناسب برای پژو 405
                  </p>
                </Typography>
              </CardContent>
              </Card>
          </Item>
          </Grid>      

          </Grid>

          <Grid container justify="center">
          <div style={{margin: 10}}>
            <Button variant="outlined" className={classes.typography} style={{marginLeft: 10,fontWeight: 500 }}
            href="#">محصولات بیشتر</Button>
            </div>
          </Grid>

      </div>

    )
}
