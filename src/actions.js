import * as types from './actionTypes'

export const start = ({ name, args, options }) => ({
  type: types.OPERATION,
  name,
  options,
  args
})

export const complete = ({ name, args, options, response }) => ({
  type: types.COMPLETE,
  name,
  args,
  options,
  response
})

export const error = ({ name, args, options, error }) => ({
  type: types.FAILURE,
  name,
  args,
  options,
  error
})
