export const register = (body) => {
    return fetch('/auth/register', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(body)
    }).then(res => res.json())
}

export const login = (body) => {
    return fetch('/auth/login', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(body)
    }).then(res => res.json())
}

export const getUser = () => {
    return fetch('/auth/getUser')
        .then(res => res.json())
}

export const logout = () => {
    return fetch('/auth/logout', {method: 'POST'})
        .then(res => res.json())
}