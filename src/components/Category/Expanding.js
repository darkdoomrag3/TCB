import React from 'react'
import { Grid, Paper, Typography, Card, CardContent, CardMedia, Button } from '@material-ui/core'
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    root:{
      margin: 15,
    },

}));
export default function Expanding() {
    const classes = useStyles()
    return (
        <Grid container
            spacing={2}
            direction="row"
            justify="center"
            alignItems="center">
            <Grid item md={2} className={classes.root}>
                <Card>
                    <CardMedia 
                        component="img"
                        image=""
                        alt="pic"
                    />
                    <CardContent>
                        <Typography>
                            <p>Price : 5$</p>
                            <p>product title</p>
                            </Typography>
                        </CardContent>
                </Card>
            </Grid>
            <Grid item md={2} className={classes.root}>
                <Card>
                    <CardMedia 
                        component="img"
                        image=""
                        alt="pic"
                    />
                    <CardContent>
                        <Typography>
                            <p>Price : 5$</p>
                            <p>product title</p>
                            </Typography>
                        </CardContent>
                </Card>
            </Grid>
            <Grid item md={2} className={classes.root}>
                <Card>
                    <CardMedia 
                        component="img"
                        image=""
                        alt="pic"
                    />
                    <CardContent>
                        <Typography>
                            <p>Price : 5$</p>
                            <p>product title</p>
                            </Typography>
                        </CardContent>
                </Card>
            </Grid>
            <Grid item md={2} className={classes.root}>
                <Card>
                    <CardMedia 
                        component="img"
                        image=""
                        alt="pic"
                    />
                    <CardContent>
                        <Typography>
                            <p>Price : 5$</p>
                            <p>product title</p>
                            </Typography>
                        </CardContent>
                </Card>
            </Grid>
            <Grid item md={2} className={classes.root}>
                <Card>
                    <CardMedia 
                        component="img"
                        image=""
                        alt="pic"
                    />
                    <CardContent>
                        <Typography>
                            <p>Price : 5$</p>
                            <p>product title</p>
                            </Typography>
                        </CardContent>
                </Card>
            </Grid>
            <Button variant="contained">Show More</Button>
        </Grid>
    )
}
