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


const useStyles = makeStyles((theme) => ({
    font:{
        fontFamily: "'Almarai', sans-serif",
        fontSize:'1rem',
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
        <Grid item xs={3} sm={3} md={3} className={classes.font}>
                             <IconButton aria-label="cart">
                                <StyledBadge badgeContent={0} color="secondary">
                                 <ShoppingCartOutlinedIcon />
                                 </StyledBadge>
                             </IconButton>
                             <Hidden only={["md","sm","xs"]}>
                                 <p>سبد خرید</p>
                                 </Hidden>
                         </Grid>

                        <Grid item xs={3} sm={3} md={3} className={classes.font}>
                            <IconButton aria-label="cart">
                                 <StyledBadge badgeContent={0} color="secondary">
                                     <Favoriate />
                                 </StyledBadge>
                             </IconButton>
                             <Hidden only={["md","sm","xs"]}><p>موردعلاقه ها</p></Hidden>
                         </Grid>

                         <Grid item xs={3} sm={3} md={3} className={classes.font}>
                             <Link to="user"><IconButton aria-label="cart">
                                 <StyledBadge badgeContent={0} color="secondary">
                                     <PersonOutlineOutlinedIcon />
                                 </StyledBadge>
                             </IconButton>
                             <Hidden only={["md","sm","xs"]}><p>ورود</p></Hidden></Link>
                         </Grid>

                         <Grid item xs={3} sm={3} md={3} className={classes.font}>
                             <IconButton aria-label="cart">
                                 <StyledBadge badgeContent={0} color="secondary">
                                 <NotificationsActiveOutlinedIcon />
                                 </StyledBadge>
                             </IconButton>
                             <Hidden only={["md","sm","xs"]}><p>اطلاعیه ها</p></Hidden>
                         </Grid>
</Grid>

    )
}
