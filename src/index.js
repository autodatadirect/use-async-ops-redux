import * as actions from './actions'
import * as actionTypes from './actionTypes'
import * as reducerHelpers from './helpers'
import reducer, { STORE_DOMAIN } from './reducer'
import * as selectors from './selectors'

const reduxMiddleware = dispatch => next => async (context, response, error) => {
  const { name, args, options } = context
  dispatch(actions.start({ name, args, options }))
  try {
    const r = await next(context, response, error)
    dispatch(actions.complete({ name, args, options, response }))
    return r
  } catch (e) {
    dispatch(actions.error({ name, args, options, error: e }))
    throw e
  }
}

export {
  actions,
  actionTypes,
  reducerHelpers,
  reduxMiddleware,
  reducer,
  selectors,
  STORE_DOMAIN
}
