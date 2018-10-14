let token = null

const blogs = [
  {
    id: "5a451df7571c224a31b5c8ce",
    title: 'Hello from us',
    author: 'Mr me',
    url: 'http://www.google.com',
    likes: 0,
    user: null
  },
  {
    id: "c224a31b5c8ce5a451df7571",
    title: 'Hello from us 2',
    author: 'Mr me',
    url: 'http://www.google.com',
    likes: 0,
    user: null
  }
]

const setToken = (newToken) => {
  token = `bearer ${newToken}`
}

const getAll = () => {
  return Promise.resolve(blogs)
}

export default { getAll, blogs, setToken }
