import axios from 'axios'

const api = axios.create({
    baseURL: 'https://storage.googleapis.com/dito-questions/events.json'
})

const apis = {
    loadEvents: () => api.get()
}

export default apis