import React from 'react'
import deepFreeze from 'deep-freeze'
import counterReducer from './reducer'


describe('unicafe reducer', () => {
  const initialState = {
    hyva: 0,
    neutraali: 0,
    huono: 0
  }

  it('should return a proper initial state when called with undefined state', () => {
    const state = {}
    const action = {
      type: 'DO_NOTHING'
    }

    const newState = counterReducer(undefined, action)
    expect(newState).toEqual(initialState)
  })

  it('good is incremented', () => {
    const action = {
      type: 'GOOD'
    }
    const state = initialState

    deepFreeze(state)
    const newState = counterReducer(state, action)
    expect(newState).toEqual({
      hyva: 1,
      neutraali: 0,
      huono: 0
    })
  })  

  it('ok is incremented', () => {
    const action = {
      type: 'OK'
    }
    const state = initialState

    deepFreeze(state)
    const newState = counterReducer(state, action)
    expect(newState).toEqual({
      hyva: 0,
      neutraali: 1,
      huono: 0
    })
  })  

  it('bad is incremented', () => {
    const action = {
      type: 'BAD'
    }
    const state = initialState

    deepFreeze(state)
    const newState = counterReducer(state, action)
    expect(newState).toEqual({
      hyva: 0,
      neutraali: 0,
      huono: 1
    })
  })  
})
