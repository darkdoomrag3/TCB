import React from "react";
import { AppBar, Grid, withStyles, Paper } from "@material-ui/core";
import Box  from "@material-ui/core/Box";
import Logo from '../../assets/tcb.png';
import Search from './Search';
import { makeStyles } from '@material-ui/core/styles';
import './publicnavbar.scss';
import IndexIconMenu from "./IndexIconMenu";


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
  },
  font:{
    fontFamily: "'Almarai', sans-serif",
  },
}));


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
        <Grid
  container
  direction="row"
  justify="center"
  alignItems="center"
>
          <Grid item xs={6} sm={6} md={2} lg={2} className={classes.image}>
              <img src={Logo} alt="logo" ></img>
          </Grid>
          <Box clone order={{ xs: 3, sm: 3, md: 2, lg: 2 }}>
            <Grid item xs={12} sm={12} md={6} lg={6} container justify="center"
                         alignItems="center">
                <Search />
            </Grid>
          </Box>
          <Box clone order={{ xs: 2, sm: 2, md: 3, lg: 3 }}>
          <Grid item xs={6} sm={6} md={4} lg={4} container
                         direction="row-reverse"
                        justify="center"
                         alignItems="center">
                         <IndexIconMenu/>
                         </Grid>
            </Box>
        </Grid> 
      </div>
      </div>
    );
  }


