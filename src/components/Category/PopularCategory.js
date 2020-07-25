import React from "react";
import CardMedia from "@material-ui/core/CardMedia";
import Grid from "@material-ui/core/Grid";
import Hidden from "@material-ui/core/Hidden";
import Item from "./Item";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  typography: { fontFamily: "Almarai", fontSize: "1rem" },
  paper: {
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
  paddingCard: {
    padding: 3,
  },
}));
export default function PopularCategory() {
  const classes = useStyles();

  return (
    <div>
      <Grid container spacing={3} className={classes.root}>
        <Grid item xs={10} sm={10}>
          <Grid
            container
            spacing={2}
            direction="row"
            justify="center"
            alignItems="center"
          >
            <Grid item xs="auto" sm="auto" md="auto">
              <Item style={{ width: 100, height: 100 }}>
                <CardMedia component="img" image="" alt="" />
              </Item>
            </Grid>
              <Grid item xs="auto" sm="auto" md="auto">
                <Item style={{ width: 100, height: 100 }}>
                  <CardMedia
                    className={classes.grid}
                    component="img"
                    image=""
                    alt=""
                  />
                </Item>
              </Grid>
            <Grid item xs="auto" sm="auto" md="auto">
              <Item style={{ width: 100, height: 100 }}>
                <CardMedia
                  className={classes.grid}
                  component="img"
                  image=""
                  alt=""
                />
              </Item>
            </Grid>
            <Grid item xs="auto" sm="auto" md="auto">
              <Item style={{ width: 100, height: 100 }}>
                <CardMedia
                  className={classes.grid}
                  component="img"
                  image=""
                  alt=""
                />
              </Item>
            </Grid>
            <Hidden only smDown>
              <Grid item xs="auto" sm="auto" md="auto">
              <Item style={{ width: 100, height: 100 }}>
                <CardMedia
                  className={classes.grid}
                  component="img"
                  image=""
                  alt=""
                />
              </Item>
            </Grid>
            </Hidden>
          </Grid>
          <Grid
            container
            spacing={2}
            direction="row"
            justify="center"
            alignItems="center"
          >
            <Grid item xs="auto" sm="auto" md="auto">
              <Item style={{ width: 100, height: 100 }}>
                <CardMedia component="img" image="" alt="" />
              </Item>
            </Grid>
              <Grid item xs="auto" sm="auto" md="auto">
                <Item style={{ width: 100, height: 100 }}>
                  <CardMedia
                    className={classes.grid}
                    component="img"
                    image=""
                    alt=""
                  />
                </Item>
              </Grid>

            <Grid item xs="auto" sm="auto" md="auto">
              <Item style={{ width: 100, height: 100 }}>
                <CardMedia
                  className={classes.grid}
                  component="img"
                  image=""
                  alt=""
                />
              </Item>
            </Grid>
            <Grid item xs="auto" sm="auto" md="auto">
              <Item style={{ width: 100, height: 100 }}>
                <CardMedia
                  className={classes.grid}
                  component="img"
                  image=""
                  alt=""
                />
              </Item>
            </Grid>
            <Hidden only smDown>
              <Grid item xs="auto" sm="auto" md="auto">
              <Item style={{ width: 100, height: 100 }}>
                <CardMedia
                  className={classes.grid}
                  component="img"
                  image=""
                  alt=""
                />
              </Item>
            </Grid>
            </Hidden>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}
