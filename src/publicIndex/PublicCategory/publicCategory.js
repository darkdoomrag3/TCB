import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MenuOutlinedIcon from '@material-ui/icons/MenuOutlined';import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Hidden from '@material-ui/core/Hidden';
import Box  from "@material-ui/core/Box";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ClassOutlinedIcon from '@material-ui/icons/ClassOutlined';
const useStyles = makeStyles((theme) => ({
    root: {
        marginTop:5,
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
    appbarStyle:{
        backgroundColor:'#fff',
    },
    font:{
      fontFamily:"'Almarai', sans-serif",

    }
  }));

export default function PublicCategory() {
    const classes = useStyles();

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className={classes.root}>
    <AppBar elevation={0} position="static" className={classes.appbarStyle}>
        <Toolbar>
      <Button aria-controls="menu" className={classes.font} aria-haspopup="true" onClick={handleClick}>
      <MenuOutlinedIcon />
      </Button>
      <Button aria-controls="menu" className={classes.font} aria-haspopup="true" onClick={handleClick}>
        <Hidden only smDown>گالری</Hidden>
      </Button>  
      <Button aria-controls="menu" className={classes.font} aria-haspopup="true" onClick={handleClick}>
        <Hidden only smDown>کاتالوگ</Hidden>
      </Button>      
      <Button aria-controls="menu" className={classes.font} aria-haspopup="true" onClick={handleClick}>
        <Hidden only smDown>مقالات</Hidden>
      </Button>      
      <Button aria-controls="menu" className={classes.font} aria-haspopup="true" onClick={handleClick}>
        <Hidden only smDown>اطلاعات فنی</Hidden>
      </Button>      
      <Button aria-controls="menu" className={classes.font} aria-haspopup="true" onClick={handleClick}>
        <Hidden only smDown>قطعات خودرو</Hidden>
      </Button>
      <Button aria-controls="menu" className={classes.font} aria-haspopup="true" onClick={handleClick}>
        <Hidden only smDown>تماس با ما</Hidden>
      </Button>
      <Button aria-controls="menu" className={classes.font} aria-haspopup="true" onClick={handleClick}>
        <Hidden only smDown>درباره ما</Hidden>
      </Button>
      <Button aria-controls="menu" className={classes.font} aria-haspopup="true" onClick={handleClick}>
        <Hidden only smDown>فروشگاه</Hidden>
      </Button>
      <Button aria-controls="menu" className={classes.font} aria-haspopup="true" onClick={handleClick}>
        <Hidden only smDown>صفحه اصلی</Hidden>
      </Button>
</Toolbar>
</AppBar>
      <Menu
        id="menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}>
        <MenuItem onClick={handleClose} className={classes.font}><ClassOutlinedIcon/>صفحه اصلی</MenuItem>
        <MenuItem onClick={handleClose}         className={classes.font}
><ClassOutlinedIcon/>فروشگاه</MenuItem>
        <MenuItem onClick={handleClose}         className={classes.font}
><ClassOutlinedIcon/>درباره ما</MenuItem>
        <MenuItem onClick={handleClose}         className={classes.font}
><ClassOutlinedIcon/>تماس با ما</MenuItem>
        <MenuItem onClick={handleClose} className={classes.font}><ClassOutlinedIcon/>قطعلا خودرو</MenuItem>
        <MenuItem onClick={handleClose} className={classes.font}><ClassOutlinedIcon/>اطلاعات فنی</MenuItem>
        <MenuItem onClick={handleClose} className={classes.font}><ClassOutlinedIcon/>مقالات</MenuItem>
        <MenuItem onClick={handleClose} className={classes.font}><ClassOutlinedIcon/>کاتالوگ</MenuItem>
        <MenuItem onClick={handleClose} className={classes.font}><ClassOutlinedIcon/>گالری</MenuItem>
      </Menu>
    </div>
  );
}
