import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
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
const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 },
];
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
  },
  paper: {
    height: 140,
    width: 100,
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
export default function MainCategory() {
  const classes = useStyles();

  return (
    <div>
      <Grid container spacing={3} className={classes.root}>
        <Grid item xs={6} sm={4}>
          <Item>
            <CardMedia className={classes.grid}
              component="img"
              image=""
              alt=""
            />
          </Item>
        </Grid>

        <Grid item xs={4} sm={6}>
        <Grid container
        spacing={2}
            direction="row"
           justify="center"
          alignItems="center" breakPoints={breakPoints}>
          <Grid item xs={12} sm={6} md={4}>
          <Item>
            <CardMedia className={classes.grid}
              component="img"
              image=""
              alt=""
            />
          </Item>
            </Grid>
          <Hidden only xsDown ><Grid item sm={6} md={4}>
          <Item>
            <CardMedia className={classes.grid}
              component="img"
              image=""
              alt=""
            />
          </Item>
            </Grid></Hidden>
          <Hidden only smDown ><Grid item md={4}>
          <Item>
            <CardMedia className={classes.grid}
              component="img"
              image=""
              alt=""
            />
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
            <CardMedia className={classes.grid}
              component="img"
              image=""
              alt=""
            />
          </Item>
            </Grid>
          <Hidden only xsDown ><Grid item sm={6} md={4}>
          <Item>
            <CardMedia className={classes.grid}
              component="img"
              image=""
              alt=""
            />
          </Item>
            </Grid></Hidden>
          <Hidden only smDown ><Grid item md={4}>
          <Item>
            <CardMedia className={classes.grid}
              component="img"
              image=""
              alt=""
            />
          </Item>
            </Grid>
</Hidden>
          </Grid>
       </Grid>
      </Grid>
    </div>
  );
}