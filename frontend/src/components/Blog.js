import React from 'react'

class Blog extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      visible: false
    }
  }

  toggleVisibility = () => {
    this.setState({ visible: !this.state.visible })
  }

  delete = (event) => {
    event.preventDefault()
    const result = window.confirm('Delete "' + this.props.blog.title + '" by ' + this.props.blog.author + '?')
    if (result) {
      this.props.delete(this.props.blog)
    }
  }

  updateLike = (event) => {
    event.preventDefault()
    this.props.like(this.props.blog)
  }  

  render() {
    const showWhenVisible = { display: this.state.visible ? '' : 'none' }

    const blogStyle = {
      paddingTop: 10,
      paddingLeft: 2,
      border: 'solid',
      borderWidth: 1,
      marginBottom: 5
    }

    const mouseStyle = {
      cursor: 'pointer'
    }

    const paddingStyle = {
      paddingLeft: 20
    }

    return (
      <div style={blogStyle}>
        <div style={mouseStyle} onClick={this.toggleVisibility}>{this.props.blog.title}</div>
        <div style={{...showWhenVisible,...paddingStyle}}>
          <div><a href={this.props.blog.url}>{this.props.blog.url}</a></div>
          <div>{this.props.blog.likes} likes <button onClick={this.updateLike} >like</button></div>
          <div>Added by: {this.props.blog.author}</div>
          <div><button onClick={this.delete} >Delete</button></div>
        </div>
      </div>
    )
  }
}

export default Blog