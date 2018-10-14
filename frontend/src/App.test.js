import React from 'react'
import { shallow, mount } from 'enzyme'
import App from './App'
jest.mock('./services/blogs')

describe('<App />', () => {
  let app

  describe('Not loggedin', () => {
    beforeEach(() => {
      app = mount(<App />)
    })
  
    it('Loginform should show with no blogs', () => {
      app.update()

      // Check for login form
      const loginform = app.find('.loginform')
      expect(loginform.length).toEqual(1)

      // Check that there is no blogs
      const blogs = app.find('.blogTitle')
      expect(blogs.length).toEqual(0)
    })
  })

  describe('Logged In', () => {
    beforeEach(() => {
      // Simultate a loggedin user
      const user = {
        username: 'tester',
        token: '1231231214',
        name: 'Teuvo Testaaja'
      }    
      window.localStorage.setItem('loggedBlogUser', JSON.stringify(user))

      app = mount(<App />)
    })
    
    it('Loginform should not show, blogs should show', () => {
      app.update()

      //Loginform should now show up
      const loginform = app.find('.loginform')
      expect(loginform.length).toEqual(0)

      // Check blogs are rendered, should be 2
      const blogcomponents = app.find('.blogTitle')
      expect(blogcomponents.length).toEqual(2)
    })
  })

})
