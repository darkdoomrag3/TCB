
import React from 'react';
import { fade, makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import InputBase from '@material-ui/core/InputBase';
import { withStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import './publicnavbar.scss';
import AssignmentIndIcon from '@material-ui/icons/AssignmentInd';
import ShopingCart from 'publicIndex/ShoppingIcon/ShopingCart';
import Badge from '@material-ui/core/Badge';
import MailIcon from '@material-ui/icons/Mail';
import Container from '@material-ui/core/Container';



const useStyles = makeStyles((theme) => ({
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
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: fade(theme.palette.common.white, 0.25),
        },
        marginRight: theme.spacing(2),
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(3),
            width: 'auto',
        },
    },
    searchIcon: {
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderBlockColor: 'red',
        borderColor: 'red'
    },
    inputRoot: {
        color: 'inherit',
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: '60ch',
        },
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
}));

const StyledBadge = withStyles((theme) => ({
    badge: {
        right: -3,
        top: 13,
        border: `2px solid ${theme.palette.background.paper}`,
        padding: '0 4px',


    },
}))(Badge);


{/* <Grid item xs={3} >
<IconButton aria-label="cart">
    <StyledBadge badgeContent={4} color="secondary">
        <BusinessCenterIcon />
    </StyledBadge>
</IconButton>
</Grid> */}



const PublicNavbar = () => {
    const classes = useStyles();

    return (
        <div className='nav-header'>
            <div className={classes.root}>
                <Grid container spacing={3}>

                    <Grid item xs={6} sm={3}>
                        <Paper className={classes.paper}>xs=6 sm=3</Paper>
                    </Grid>

                    <Grid item xs={12} sm={6}>
                        <InputBase
                            placeholder="Search…"
                            classes={{
                                root: classes.inputRoot,
                                input: classes.inputInput,
                            }}
                            inputProps={{ 'aria-label': 'search' }}
                        />
                    </Grid>




                    <Grid item xs={3} sm={3} container
                        direction="row-reverse"
                        justify="flex-start"
                        alignItems="flex-start">
                        <Grid item xs={3} >
                            <IconButton aria-label="cart">
                                <StyledBadge badgeContent={4} color="secondary">
                                    <BusinessCenterIcon />
                                </StyledBadge>
                            </IconButton>


                        </Grid>

                        <Grid item xs={3} >
                            <IconButton aria-label="cart">
                                <StyledBadge badgeContent={4} color="secondary">
                                    <BusinessCenterIcon />
                                </StyledBadge>
                            </IconButton>


                        </Grid>


                        <Grid item xs={3} >
                            <IconButton aria-label="cart">
                                <StyledBadge badgeContent={4} color="secondary">
                                    <BusinessCenterIcon />
                                </StyledBadge>
                            </IconButton>


                        </Grid>

                        <Grid item xs={3} >
                            <IconButton aria-label="cart">
                                <StyledBadge badgeContent={4} color="secondary">
                                    <BusinessCenterIcon />
                                </StyledBadge>
                            </IconButton>


                        </Grid>


                    </Grid>


                </Grid>
            </div>



        </div>
    );
}

export default PublicNavbar
