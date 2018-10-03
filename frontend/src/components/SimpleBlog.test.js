import React from 'react'
import { shallow } from 'enzyme'
import SimpleBlog from './SimpleBlog'

describe.only('<SimpeBlog />', () => {
  it('renders content', () => {
    const blog = {
      title: 'Life in a shadow',
      author: 'The big elefant',
      likes: 79
    }

    const tstComponent = shallow(<SimpleBlog blog={blog} />)

    const contentDiv = tstComponent.find('.titleauthor')
    expect(contentDiv.text()).toContain(blog.title)
    expect(contentDiv.text()).toContain(blog.author)

    const likesDiv = tstComponent.find('.likes')
    expect(likesDiv.text()).toContain(blog.likes)
  })
})