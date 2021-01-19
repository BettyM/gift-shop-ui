import React from 'react'
import { AppBar, Typography } from '@material-ui/core'

const Topnav = () => {
  return(
    <AppBar position="static" className="header">
      <Typography variant="h6">
        GIFT SHOP
      </Typography>
    </AppBar>
  )
}

export default Topnav
