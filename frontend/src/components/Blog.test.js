import React from 'react'
import { shallow } from 'enzyme'
import Blog from './Blog'

describe.only('Blog togglable', () => {
  const blog = {
    title: 'Hello',
    author: 'Author',
    user: {
      username: 'username'
    },
    url: 'http://www.abc.com',
    likes: 321
  }

  const user = {
    username: 'username'
  }

  it('Blog closed', () => {
    const mockHandlerDelete = jest.fn()
    const mockHandlerLike = jest.fn()

    const tstComponent = shallow(
      <Blog 
        blog={blog}
        user={user}
        delete={mockHandlerDelete}
        like={mockHandlerLike}
      />
    )

    // Should be hidden
    const showBlog = tstComponent.find('.showBlog')
    expect(showBlog.getElement().props.style).toHaveProperty('display','none')
  })

  it('Blog open', () => {
    const mockHandlerDelete = jest.fn()
    const mockHandlerLike = jest.fn()

    const tstComponent = shallow(
      <Blog 
        blog={blog}
        user={user}
        delete={mockHandlerDelete}
        like={mockHandlerLike}
      />
    )

    // Click on title
    const titleDiv = tstComponent.find('.blogTitle')
    titleDiv.simulate('click')

    // Should be visible
    const showBlog = tstComponent.find('.showBlog')
    expect(showBlog.getElement().props.style).toHaveProperty('display','')
  })
})