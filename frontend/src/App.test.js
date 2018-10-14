import React from 'react'
import { shallow, mount } from 'enzyme'
import App from './App'
jest.mock('./services/blogs')

describe('<App />', () => {
  let app

  beforeAll(() => {
    app = mount(<App />)
  })

  it('Not loggedin: Loginform should show with no blogs', () => {
    app.update()

    // Check for login form
    const loginform = app.find('.loginform')
    expect(loginform.length).toEqual(1)

    // Check that there is no blogs
    const blogs = app.find('.blogTitle')
    expect(blogs.length).toEqual(0)
  })
})
