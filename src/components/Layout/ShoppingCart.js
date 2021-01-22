import React, { useEffect } from 'react'
import { useSelector, useDispatch, shallowEqual } from 'react-redux'
// import { SwipeableDrawer } from '@material-ui/core'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { giftShopActions } from '../../store/actions'

const ShoppingCart = () => {
  const shoppingList = useSelector(state => (state.giftShopReducer && state.giftShopReducer.shoppingList), shallowEqual)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(giftShopActions.loadShoppingList())
  }, [dispatch])

  return(
    <>
    <div>
      <span className="vertical-align-text">{shoppingList && shoppingList.length}</span>
      <ShoppingCartIcon />
    </div>
      {/*<SwipeableDrawer
        open={shoppingListOpen}
        onClose={() => setShoppingListOpen(false)}
      >
        {items}
      </SwipeableDrawer>
      */}
    </>
  )
}

export default ShoppingCart
