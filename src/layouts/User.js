import React from 'react'
import PublicNavbar from 'publicIndex/PublicNavbar/PublicNavbar'
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { makeStyles } from '@material-ui/core/styles';
import "./User.scss";
const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        backgroundColor:"#f2f2f2",
        height:"100vh",
        
      },
      font:{
        fontFamily: "'Almarai', sans-serif",
      },
      userMenu:{
          margin:15,
      }
    }));
export default function User() {
    const classes  = useStyles();

    return (
        <div >
            <Grid spacing={2} className={classes.root}>
                <Grid item xs={12} sm={5} md={4} lg={4} className={classes.userMenu} >
                    <Paper style={{borderRadius:15}}>
                        <List className={classes.font}>
                        <ListItem>
                            <ListItemText >همه سفارش ها</ListItemText>
                        </ListItem>
                        <ListItem>
                            <ListItemText >سفارش های من</ListItemText>
                        </ListItem>
                        </List>
                    </Paper>
                    </Grid>
                <Grid item xs={12} sm={5} md={6} lg={6} style={{margin:15}} className={classes.font}>نمایش لیست سفارش ها</Grid>
            </Grid>
        </div>
    )
}
