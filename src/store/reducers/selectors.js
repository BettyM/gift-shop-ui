import { createSelector } from 'reselect'
import { getShoppingListItems } from '../../Store'

const getGiftShopStore = state => state.giftShopReducer || []

export const getProducts = createSelector(getGiftShopStore, data => {
  return data.products
})

export const getShoppingList = createSelector(getGiftShopStore, data => {
  return getShoppingListItems()
})
