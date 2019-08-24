const BASE_URL = 'http://localhost:3000'
const LOGIN_URL = `${BASE_URL}/login`
const REGISTER_URL = `${BASE_URL}/register`
const POSTS_URL = `${BASE_URL}/posts`

const registerOpts = (name, username, password) => {
    return {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json'
        },
        body: JSON.stringify({
            user: {
                name,
                username,
                password
            }
        })
    }
}

const loginOpts = (username, password) => {
    return {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json'
        },
        body: JSON.stringify({
            user: {
                username,
                password
            }
        })
    }
}

const userOpts = (token) => {
    return {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
            Authorization: `Bearer ${token}`
        }
    }
}

const registerUser = (name, username, password) => {
    return fetch(REGISTER_URL, registerOpts(name, username, password))
        .then(res => res.json())
}

const loginUser = (username, password) => {
    return fetch(LOGIN_URL, loginOpts(username, password))
        .then(res => res.json())
}

const getPosts = (token) => {
    return fetch(POSTS_URL, userOpts)
        .then(res => res.json())
}

const createPosts = (token, body, title) => {
    return fetch(POSTS_URL, {
        ...userOpts(),
        body: JSON.stringify({
            post: { 
                title,
                body,
            }
        })
    }).then(res => res.json())
}

export default {
    registerUser,
    loginUser,
    createPosts,
    getPosts
}