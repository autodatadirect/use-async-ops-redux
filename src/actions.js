import * as types from './actionTypes'

export const start = ({ name, args }) => ({
  type: types.OPERATION,
  name,
  args
})

export const complete = ({ name, args, response }) => ({
  type: types.COMPLETE,
  name,
  args,
  response
})

export const error = ({ name, args, error }) => ({
  type: types.FAILURE,
  name,
  args,
  error
})
