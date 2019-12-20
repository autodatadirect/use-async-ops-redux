import * as actions from './actions'

export default dispatch => (name, ...args) => {
  dispatch(actions.start({ name, args }))
  return {
    onError: e => dispatch(actions.error({ name, args, error: e })),
    onComplete: response => dispatch(actions.complete({ name, args, response }))
  }
}
