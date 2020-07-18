import React from "react";
import { AppBar, Grid, withStyles, Paper } from "@material-ui/core";
import Box  from "@material-ui/core/Box";
import Logo from '../../assets/tcb.png';
import Search from './Search';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import './publicnavbar.scss';
import Badge from '@material-ui/core/Badge';
import NotificationsActiveOutlinedIcon from '@material-ui/icons/NotificationsActiveOutlined';
import PersonOutlineOutlinedIcon from '@material-ui/icons/PersonOutlineOutlined';
import Favoriate from '@material-ui/icons/FavoriteBorderOutlined';
import Hidden from '@material-ui/core/Hidden';

const useStyles = makeStyles((theme) => ({
    root: {
        padding: '2px 4px',
        display: 'flex',
        alignItems: 'center',
        width: "100%",
      },
    grow: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        display: 'none',
        [theme.breakpoints.up('sm')]: {
            display: 'block',
        },
    },
    image:{
        textAlign: 'center',
    },
    sectionDesktop: {
        display: 'none',
        [theme.breakpoints.up('md')]: {
            display: 'flex',
        },
    },
    sectionMobile: {
        display: 'flex',
        [theme.breakpoints.up('md')]: {
            display: 'none',
        },
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        transition: theme.transitions.create('width'),
        width: '100%',

        [theme.breakpoints.up('sm')]: {
            width: '60ch',
        },
    },
    container: {
    display: "flex"
  },
  paper: {
    height: 200,
    flex: 1,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    elevation: 8
  }
}));

const StyledBadge = withStyles((theme) => ({
    badge: {
        right: -3,
        top: 13,
        border: `2px solid ${theme.palette.background.paper}`,
        padding: '0 4px',


    },
}))(Badge);

// {/* <Grid item xs={3} >
// <IconButton aria-label="cart">
//     <StyledBadge badgeContent={4} color="secondary">
//         <BusinessCenterIcon />
//     </StyledBadge>
// </IconButton>
// </Grid> */}

export default function PublicNavbar() {
    const classes  = useStyles();
    return (
        <div className="nav-header">
        <div className={classes.root}>
        <Grid container spacing={2} justify="center">
          <Grid item xs={6} sm={6} md={2} lg={2} className={classes.image}>
              <img src={Logo} alt="logo" ></img>
          </Grid>
          <Box clone order={{ xs: 3, sm: 3, md:2, lg: 2 }}>
            <Grid item xs={12} sm={12} md={6} lg={6} container justify="center"
                         alignItems="center">
                <Search />
            </Grid>
          </Box>
          <Box clone order={{ xs: 2, sm: 2, md:3, lg: 2}}>
            <Grid item xs={6} sm={6} md={4} lg={4} container
                         direction="row-reverse"
                        justify="center"
                         alignItems="center">
                        <Grid item xs={3} md={3}>
                             <IconButton aria-label="cart">
                                <StyledBadge badgeContent={0} color="secondary">
                                 <ShoppingCartOutlinedIcon />
                                 </StyledBadge>
                             </IconButton>
                             <Hidden only mdDown><p>Shopping cart</p></Hidden>
                         </Grid>

                        <Grid item xs={3} md={3}>
                            <IconButton aria-label="cart">
                                 <StyledBadge badgeContent={0} color="secondary">
                                     <Favoriate />
                                 </StyledBadge>
                             </IconButton>
                             <Hidden only mdDown><p>Favorites</p></Hidden>
                         </Grid>

                         <Grid item xs={3} md={3}>
                             <IconButton aria-label="cart">
                                 <StyledBadge badgeContent={0} color="secondary">
                                     <PersonOutlineOutlinedIcon />
                                 </StyledBadge>
                             </IconButton>
                             <Hidden only mdDown><p>Enter</p></Hidden>
                         </Grid>

                         <Grid item xs={3} md={3}>
                             <IconButton aria-label="cart">
                                 <StyledBadge badgeContent={0} color="secondary">
                                 <NotificationsActiveOutlinedIcon />
                                 </StyledBadge>
                             </IconButton>
                             <Hidden only mdDown><p>Notifications</p></Hidden>
                         </Grid>         


            </Grid>
          </Box>
        </Grid>
      </div>
      </div>
    );
  }


