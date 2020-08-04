import React from 'react'
import Grid from "@material-ui/core/Grid";
import withStyles from "@material-ui/core/styles/withStyles";
import {makeStyles} from "@material-ui/core/styles";
import NotificationsActiveOutlinedIcon from '@material-ui/icons/NotificationsActiveOutlined';
import PersonOutlineOutlinedIcon from '@material-ui/icons/PersonOutlineOutlined';
import Favoriate from '@material-ui/icons/FavoriteBorderOutlined';
import Hidden from '@material-ui/core/Hidden';
import {Link} from 'react-router-dom'
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import Box  from "@material-ui/core/Box";
import { Typography } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
    font:{
        fontFamily: "'Almarai', sans-serif",
        fontSize:'0.8rem',
        textAlign:"center"
      },
}));
const StyledBadge = withStyles((theme) => ({
    badge: {
        right: -3,
        top: 13,
        border: `2px solid ${theme.palette.background.paper}`,
        padding: '0 4px',


    },
}))(Badge);
export default function IndexIconMenu() {
    const classes  = useStyles();

    return (
        <Grid item xs={12} sm={12} md={12} lg={12} spacing={3} container
                         direction="row-reverse"
                        justify="center"
                         alignItems="center">
        <Grid item xs={3} sm={3} md={3} >
                             <IconButton aria-label="cart" style={{alignSelf:"center"}}>
                                <StyledBadge badgeContent={1} color="secondary">
                                 <ShoppingCartOutlinedIcon />
                                 </StyledBadge>
                             </IconButton>
                             <Hidden only={["sm","xs"]}>
                                 <Typography className={classes.font}>سبد خرید</Typography>
                                 </Hidden>
                         </Grid>

                        <Grid item xs={3} sm={3} md={3}>
                            <IconButton aria-label="favorite" style={{alignSelf:"center"}}>
                                 <StyledBadge badgeContent={0} color="secondary">
                                     <Favoriate />
                                 </StyledBadge>
                             </IconButton>
                             <Hidden only={["sm","xs"]}>
                             <Typography  className={classes.font}>مورد علاقه ها</Typography>

                             </Hidden>
                         </Grid>

                         <Grid item xs={3} sm={3} md={3} >
                             <Link to="user"><IconButton aria-label="user" style={{alignSelf:"center"}}>
                                 <StyledBadge badgeContent={0} color="secondary">
                                     <PersonOutlineOutlinedIcon />
                                 </StyledBadge>
                             </IconButton>
                             <Hidden only={["sm","xs"]}>
                             <Typography  className={classes.font}>ورود</Typography>
                                 </Hidden></Link>
                         </Grid>

                         <Grid item xs={3} sm={3} md={3} >
                             <IconButton aria-label="notification" style={{alignSelf:"center"}}>
                                 <StyledBadge badgeContent={0} color="secondary" >
                                 <NotificationsActiveOutlinedIcon />
                                 </StyledBadge>
                             </IconButton>
                             <Hidden only={["sm","xs"]}>
                             <Typography  className={classes.font}>اطلاعیه ها</Typography>
                             </Hidden>
                         </Grid>
</Grid>

    )
}
