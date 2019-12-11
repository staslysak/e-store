import axios from 'axios'
import {LS} from './../utils/index';
import {
  NEXT_STEP,
  PREV_STEP,
  CHANGE_DELIVERY,
  SUBMIT_SHIPPING,
  SUBMIT_CHECKOUT,
  ADD_TO_CART,
  DELETE_CART_PRODUCT,
  CHANGE_PRODUCT_QUANTITY,
  CHANGE_PRODUCT_SIZE,
  EMPTY_CART,
  RESET_CART,
  TOTAL_PRICE_RECALCULATION
} from './types';

export const addToCart = value => ({ type: ADD_TO_CART, payload: value })
export const deleteCartProduct = value => ({ type: DELETE_CART_PRODUCT, payload: value})
export const changeDelivery = value => ({ type: CHANGE_DELIVERY, payload: value })

export const totalRecalculation = (cart) => dispatch => {
  const totalPrice = cart.reduce((acc, curr) => acc + (curr.price * curr.qty), 0)
  const totalCount = cart.reduce((acc, curr) => acc + (curr.qty), 0)
  dispatch({ type: TOTAL_PRICE_RECALCULATION, payload: {
    totalPrice,
    totalCount
  }})
}

export const nextStep = () => ({ type: NEXT_STEP })
export const prevStep = () => ({ type: PREV_STEP })

export const submitShipping = value => dispatch => {
  dispatch(nextStep())
  dispatch({ type: SUBMIT_SHIPPING, payload: value })
}

export const submitCheckout = (data, callback) => async (dispatch, getState) => {

  const {cart} = getState()

  if (data.bas) {
    const {phone, email, ...shippingRest} = data.addresses.shipping
    data.addresses.billing.address = {...shippingRest}
  }

  const user_id = LS.get('USER_ID')
  const postData = {
    user_id,
    delivery: cart.defaultValues.delivery,
    order: cart.cartProducts,
    ...data
  }

  try {
    await axios.post('/order', { data: postData })
    .then((res) => {
      LS.remove('CART')
      dispatch({ type: EMPTY_CART })
      return res
    })
    .then((res) => callback('success', res.data.message))
  } catch (err) {
    await callback('error', `Couldn't connect to the server ${err}`)
  }

  dispatch({ type: SUBMIT_CHECKOUT, payload: postData })
}

export const changeProductQuantity = value => ({ type: CHANGE_PRODUCT_QUANTITY, payload: value })
export const changeProductSize = value => ({ type: CHANGE_PRODUCT_SIZE, payload: value })

export const checkCartProducts = (products, cart) => (dispatch) => {

  return new Promise((resolve, reject) => {
    resolve(cart)
  })
  .then((checked) => {
    const pchecked = []

    const checkCartRelevance = (item, cartItem) => {
      return item.id === cartItem.colorId && item.availability >= cartItem.availability && item.sizes.indexOf(cartItem.size) !== -1
    }

    const sortCart = (arr, cartItem) => arr.forEach(item => {
      if(checkCartRelevance(item, cartItem)){
        if(pchecked.indexOf(cartItem) === -1){
          pchecked.push(cartItem)
        }
      }
    })

    const loopCart = (item, cart) => {
      cart.forEach(cartItem => item.id === cartItem.productId ? sortCart(item.colors, cartItem) : null)
    }

    products.forEach(item => loopCart(item, checked))

    return pchecked
  })
  .then(res => {
    if (res.length) {
      dispatch({ type: RESET_CART, payload: res })
    }
  })

  // const forSome = []

  // products.forEach(product => {
  //   cart.forEach(item => {
  //     const some = (a) => a.id === item.colorId && a.availability >= item.availability && a.sizes.indexOf(item.size) !== -1
  //     if(product.colors.some(some)){
  //       forSome.push(item)
  //     }
  //   })
  // })
  // console.log('forSome', forSome);

  // return checked.length >= 1 ? false : true
}

export const emptyCart = () => ({ type: EMPTY_CART })