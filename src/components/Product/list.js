import React, { useEffect, useState } from 'react'
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  Typography
} from '@material-ui/core'
import API from '../../services/API'

const List = () => {
  const [products, setProducts] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const data = await API.getProducts()
      setProducts(data)
    }
    fetchData()
  }, [])
  
  console.log('products', products)
  return(
    <Grid container spacing={3} justify="center" alignItems="center">
      {products.length > 0 && products.map(item => {
        console.log('=>', item)
        return(
        <Grid item xs={4} sm={3}>
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
                  {item.description.length > 100 ? (item.description.substring(0, 100) + '...') : item.description}
                </Typography>
                <Typography gutterBottom variant="h6" component="h3">
                  $ {item.price}
                </Typography>
              </CardContent>
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
