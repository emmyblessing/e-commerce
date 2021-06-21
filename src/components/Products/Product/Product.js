import React from 'react';
import {Card, CardMedia, CardContent, CardActions, Typography, IconButton} from '@material-ui/core';
import AddShoppingCart from '@material-ui/icons/AddShoppingCart';
import useStyles from './styles';

const Product = ({ product, onAddToCart }) => {
  const classes = useStyles();

  /* This is used to display all product from the database to know the name */
  /* console.log( product );
  return (<div>Test</div>) */

  return (
    <Card className={classes.root}>
      <CardMedia className={classes.media} image={product.media.source} title={product.name}></CardMedia>
      <CardContent>
        <div className={classes.cardContent}>
          <Typography variant="h5" gutterBottom>
            {product.name}
          </Typography>
          <Typography variant="h5">
            {product.price.formatted_with_symbol}
          </Typography>
        </div>
        <Typography dangerouslySetInnerHTML={{ __html: product.description }} variant="body2" color="textSecondary" />
      </CardContent>
      <CardActions disableSpacing className={classes.cardActions}>
        <IconButton arial-label="Add to Cart" onClick={() => onAddToCart(product.id, 1)}>
          <AddShoppingCart />
        </IconButton>
      </CardActions>
    </Card>
  )
}

export default Product;