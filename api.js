import { API_URL } from './config'

const fetch = (path, opts = {}) => {
  const defaults = {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
  }

  const params = { ...opts, ...defaults }

  return global.fetch(`${API_URL}/${path}`, params)
    .then(res => res.json())
}

const post = (path, body) => fetch(path, {
  body: JSON.stringify(body),
  method: 'POST'
})

export const newIdea = () => fetch('ideas/new')
export const getIdeas = () => fetch('ideas')
export const updateIdea = idea => post('idea/update', idea)
export const deleteIdea = idea => post('idea/delete', idea)
