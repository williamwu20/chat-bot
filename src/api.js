export const buildUrl = (param) => {
    return `${process.env.REACT_APP_API_URL}/${param}`
}

export const ping = () => {
    const url = buildUrl(`ping`)
    return fetch(url)
        .then(response => (response.ok ? response : Promise.reject(response)))
}

export const fetchJoke = () => {
    const url = buildUrl(`joke`)
    return fetch(url)
        .then(response => (response.ok ? response.json() : Promise.reject(response)))
        .then(data => data)
}