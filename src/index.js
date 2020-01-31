import * as actions from './actions'
import * as actionTypes from './actionTypes'
import * as reducerHelpers from './helpers'

const reduxMiddleware = dispatch => next => async (context, response, error) => {
  const { name, args } = context
  dispatch(actions.start({ name, args }))
  try {
    const r = await next(context, response, error)
    dispatch(actions.complete({ name, args, response }))
    return r
  } catch (e) {
    dispatch(actions.error({ name, args, error: e }))
    throw e
  }
}

export {
  actions,
  actionTypes,
  reducerHelpers,
  reduxMiddleware
}
