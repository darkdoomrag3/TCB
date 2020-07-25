import React from 'react'
import Grid from "@material-ui/core/Grid"
import Card from "@material-ui/core/Card"
import CardContent from "@material-ui/core/CardContent"
import Typography from "@material-ui/core/Typography"
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
  root:{margin:15},
    bgRed:{background:"red"},
    bgGreen:{background:"green"},
    bgYellow:{background:"yellow"},
}));
export default function DiffrentCountries() {
    const classes = useStyles();

    return (
      <div>
        <Grid spacing={2}
          container
          direction="row"
          justify="center"
          alignItems="center"
          className={classes.root}
        >  
          <Grid item sm={4} md={4}>
            <Card className={classes.bgRed}>
              <CardContent>
                <Typography>
                  <p>Hello</p>
                  <p>Diffrent Countries</p>
                  <p>around the world</p>
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item sm={4} md={4}>
            <Card className={classes.bgGreen}>
              <CardContent>
                <Typography>
                  <p>Hello</p>
                  <p>Diffrent Countries</p>
                  <p>around the world</p>
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item sm={4} md={4}>
            <Card className={classes.bgYellow}>
              <CardContent>
                <Typography>
                  <p>Hello</p>
                  <p>Diffrent Countries</p>
                  <p>around the world</p>
                </Typography>
              </CardContent>
            </Card>
          </Grid>
      </Grid>
      </div>
    )
}
