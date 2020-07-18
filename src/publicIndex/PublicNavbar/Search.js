import Button from '@material-ui/core/Button';
import React from 'react';
import { makeStyles, fade } from '@material-ui/core/styles';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import Hidden from '@material-ui/core/Hidden';
import InputAdornment from '@material-ui/core/InputAdornment';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
    width: "100%",
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
        padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    backgroundColor: fade(theme.palette.common.black, 0.02),
    '&:hover': {
        backgroundColor: fade(theme.palette.common.black, 0.04),
    },
    width: '100%',
    borderRadius:8,
    height:48,
    [theme.breakpoints.up('sm')]: {
        width: '60ch',
    },
  },
  iconButton: {
      backgroundColor:'#ff6262',
    padding: 10,
    '&:hover': {
        backgroundColor: '#ff6262',
    },
    searchIcon:{

    }
  },
}));

export default function CustomizedInputBase() {
  const classes = useStyles();

  return (
    <div component="form" className={classes.root}>
      <InputBase
        placeholder="Search…"
        className={classes.input}
        inputProps={{ 'aria-label': 'search google maps' }}
        startAdornment={
            <Hidden only={['md', 'lg']}>
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
            </Hidden>
          }
      />
      <Hidden smDown>
        <Button type="submit" variant="contained" color="secondary" className={classes.iconButton} aria-label="search">
          Search
        </Button>
      </Hidden>
    </div>
  );
}
