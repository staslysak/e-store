import {
  SET_SHIPPING,
  SET_BILLING,
  AUTH_SIGN_UP,
  AUTH_LOG_IN,
  AUTH_LOG_OUT,
  AUTH_ERROR,
  FETCH_MEMBER_SUCCESS
} from './actions/auth';

const jwtToken = localStorage.getItem('JWT_TOKEN')

const initailState = {
  isAuthenticated: jwtToken ? true : false,
  token: jwtToken,
  error: false,
  fullname: '',
  addresses: {
    shipping: {
      firstname: '',
      lastname: '',
      address: '',
      country: '',
      city: '',
      zip: '',
      email: '',
      phone: ''
    },
    billing: {
      firstname: '',
      lastname: '',
      address: '',
      country: '',
      city: '',
      zip: ''
    }
  },
  orders: []
}

const auth = (state = initailState, action) => {
  switch(action.type){
    case FETCH_MEMBER_SUCCESS:
      return {
        ...state,
        fullname: action.payload.fullname,
        addresses: {
          ...state.addresses,
          ...action.payload.addresses
        },
        orders: action.payload.orders
      }
    case SET_SHIPPING:
      return {
        ...state,
        addresses: {
          ...state.addresses,
          shipping: { ...state.shipping, ...action.payload}
        }
      }
    case SET_BILLING:
      return {
        ...state,
        addresses: {
          ...state.addresses,
          billing: { ...state.billing, ...action.payload }
        }
      }
    case AUTH_SIGN_UP:
      return {
        ...state, token: action.payload, isAuthenticated: true, error: false
      }
    case AUTH_LOG_IN:
      return {
        ...state, token: action.payload, isAuthenticated: true, error: false
      }
    case AUTH_LOG_OUT:
      return {
        ...state, isAuthenticated: false, error: false, token: ''
      }
    case AUTH_ERROR:
      return {
        ...state, error: true, isAuthenticated: false, token: ''
      }
    default:
      return { ...state }
  }
}

export default auth