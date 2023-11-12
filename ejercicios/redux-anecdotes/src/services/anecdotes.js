import axios from 'axios'

const baseUrl = 'http://localhost:3001/anecdotes'

const getAll = async() => {
    const response = await axios.get(baseUrl)
    return response.data
}

const createNew = async(content) => {
    const anecdote = {content, votes: 0}
    const response = await axios.post(baseUrl, anecdote)
    return response.data
}

//guardar cambios en el backend con put de los votos
const update = async(id, newObject) => {
    const response = await axios.put(`${baseUrl}/${id}`, newObject)
    return response.data
}

export default {getAll, createNew, update}