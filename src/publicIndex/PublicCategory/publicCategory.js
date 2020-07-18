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
        backgroundColor:'#fff'
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
    <AppBar position="static" className={classes.appbarStyle}>
        <Toolbar>
      <Button aria-controls="menu" aria-haspopup="true" onClick={handleClick}>
        <MenuOutlinedIcon /><Hidden only smDown> All categories</Hidden>
      </Button>
      <Button aria-controls="menu" aria-haspopup="true" onClick={handleClick}>
        <Hidden only smDown>category1</Hidden>
      </Button>
      <Button aria-controls="menu" aria-haspopup="true" onClick={handleClick}>
        <Hidden only smDown>category2</Hidden>
      </Button>
      <Button aria-controls="menu" aria-haspopup="true" onClick={handleClick}>
        <Hidden only smDown>category3</Hidden>
      </Button>
      <Button aria-controls="menu" aria-haspopup="true" onClick={handleClick}>
        <Hidden only smDown>category4</Hidden>
      </Button>
</Toolbar>
</AppBar>
      <Menu
        id="menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}>
        <MenuItem onClick={handleClose}><ClassOutlinedIcon/>category1</MenuItem>
        <MenuItem onClick={handleClose}><ClassOutlinedIcon/>category2</MenuItem>
        <MenuItem onClick={handleClose}><ClassOutlinedIcon/>category3</MenuItem>
        <MenuItem onClick={handleClose}><ClassOutlinedIcon/>category4</MenuItem>
      </Menu>
    </div>
  );
}
