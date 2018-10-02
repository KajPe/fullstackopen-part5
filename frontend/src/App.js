import React from 'react'
import Blog from './components/Blog'
import blogService from './services/blogs'
import loginService from './services/login'
import Notification from './components/Notification'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      blogs: [],
      error: null,
      username: '',
      password: '',
      user: null
    }
  }

  async componentDidMount() {
    try {
      const blogs = await blogService.getAll()
      this.setState({ blogs })
    } catch(exception) {
      this.setState({
        error: 'Failed to retrieve blogs',
      })
    }
  }

  handleLoginFieldChange = (event) => {
    this.setState({ [event.target.name]: event.target.value })
  }

  login = async (event) => {
    event.preventDefault()
    try {
      const user = await loginService.login({
        username: this.state.username,
        password: this.state.password
      })
      this.setState({ username:'', password:'', user:user })
    } catch(exception) {
      this.setState({
        error: 'Bad username or password',
      })
      setTimeout(() => {
        this.setState({ error: null })
      }, 3000)
    }
  }

  render() {
    const showBlogs = () => (
      <div>
        <h2>Blogs</h2>
        <p>{this.state.user.name} logged in</p>
        {this.state.blogs.map(blog => 
          <Blog key={blog.id} blog={blog}/>
        )}
      </div>
    )
  
    const loginForm = () => (
      <div>
        <h2>Login to application</h2>
        <form onSubmit={this.login}>
          <div>
            Username :
            <input
              type="text"
              name="username"
              value={this.state.username}
              onChange={this.handleLoginFieldChange}
            />
          </div>
          <div>
            Password :
            <input
              type="password"
              name="password"
              value={this.state.password}
              onChange={this.handleLoginFieldChange}
            />
          </div>
          <button type="submit">Login</button>
        </form>
      </div>
    )
  
    return (
      <div>
        <Notification message={this.state.error} />

        {this.state.user === null ?
          loginForm() : showBlogs()
        }
      </div>
    );
  }
}

export default App;