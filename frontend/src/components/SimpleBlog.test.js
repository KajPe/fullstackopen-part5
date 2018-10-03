import React from 'react'
import { shallow } from 'enzyme'
import SimpleBlog from './SimpleBlog'

describe.only('<SimpeBlog />', () => {
  const blog = {
    title: 'Life in a shadow',
    author: 'The big elefant',
    likes: 79
  }

  it('renders content', () => {
    const tstComponent = shallow(<SimpleBlog blog={blog} />)

    const contentDiv = tstComponent.find('.titleauthor')
    expect(contentDiv.text()).toContain(blog.title)
    expect(contentDiv.text()).toContain(blog.author)

    const likesDiv = tstComponent.find('.likes')
    expect(likesDiv.text()).toContain(blog.likes)
  })

  it('Click the button twice and check event is called twice', () => {
    const mockHandler = jest.fn()

    const tstComponent = shallow(<SimpleBlog blog={blog} onClick={mockHandler} />)

    const button = tstComponent.find('button')
    button.simulate('click')
    button.simulate('click')

    expect(mockHandler.mock.calls.length).toBe(2)
  })
})