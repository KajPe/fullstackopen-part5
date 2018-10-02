import axios from 'axios'
const baseUrl = '/api/blogs'

let token = null

const setToken = (newToken) => {
  token = `bearer ${newToken}`
}

const getAll = async () => {
  const response = await axios.get(baseUrl)
  return response.data
}

const create = async (newBlog) => {
  const config = {
    headers: { 'Authorization': token }
  }
  const response = await axios.post(baseUrl, newBlog, config)
  return response.data
}

const update = async (blog) => {
  const config = {
    headers: { 'Authorization': token }
  }
  let response = await axios.put(baseUrl + '/' + blog.id, blog, config)
  response.data.id = response.data._id 
  return response.data
}

export default { getAll, create, setToken, update }