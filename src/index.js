import * as actions from './actions'
import * as actionTypes from './actionTypes'
import * as reducerHelpers from './helpers'

const reduxPlugin = dispatch => (name, ...args) => {
  dispatch(actions.start({ name, args }))
  return {
    onError: e => dispatch(actions.error({ name, args, error: e })),
    onComplete: response => dispatch(actions.complete({ name, args, response }))
  }
}

export {
  actions,
  actionTypes,
  reducerHelpers,
  reduxPlugin
}
