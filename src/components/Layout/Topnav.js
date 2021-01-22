import React from 'react'
import {
  AppBar,
  Grid,
  Typography
} from '@material-ui/core'
import ShoppingCart from './ShoppingCart'

const Topnav = () => {
  return(
    <AppBar position="static" className="header">
      <Grid container>
        <Grid container item xs={6}>
        <Typography variant="h6">
          GIFT SHOP
        </Typography>
        </Grid>
        <Grid container item xs={6} justify="flex-end">
        <ShoppingCart />
        </Grid>
      </Grid>
    </AppBar>
  )
}

export default Topnav
