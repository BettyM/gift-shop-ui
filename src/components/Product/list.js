import React, { useEffect } from 'react'
import { useSelector, useDispatch, shallowEqual } from 'react-redux'
import { giftShopActions } from '../../store/actions'
import {
  Button,
  Card,
  CardActions,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  Typography
} from '@material-ui/core'
import { AddShoppingCart } from '@material-ui/icons';

const List = () => {
  const products = useSelector(state => (state.giftShopReducer && state.giftShopReducer.products), shallowEqual)
  const dispatch = useDispatch()

  useEffect(() => {
    if(!products || products.length <= 0) {
      dispatch(giftShopActions.loadProducts())
    }
  }, [products, dispatch])

  const addItemToCart = item => {
    dispatch(giftShopActions.updateShoppingList(item))
  }
  
  return(
    <Grid container spacing={3} justify="center" alignItems="center">
      {products && products.length > 0 && products.map(item => {
        return(
        <Grid item xs={4} sm={3} key={item.name}>
          <Card key={item.id}>
            <CardActionArea>
              <CardMedia
                component="img"
                alt={item.name}
                image={`/images/${item.image}`}
                title={item.name}
                height="140"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  {item.name}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  {item.description.length > 100 ?
                    (item.description.substring(0, 100) + '...') : item.description}
                </Typography>
                <Typography gutterBottom variant="h6" component="h3">
                  $ {item.price}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small"
                  color="primary"
                  onClick={() => addItemToCart(item)}
                >
                  <AddShoppingCart />
                  Add to cart
                </Button>
              </CardActions>
            </CardActionArea>
          </Card>
        </Grid>
        )
      })}
      {(!products || products.length <= 0)  && <div>Products not available</div>}
  </Grid>
)
}

export default List
