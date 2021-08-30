export const getFetcher = (url: string) => (options?: RequestInit) => {
    return fetch(url, {
        method: 'GET',
        ...options,
    }).then((resp) => resp.json())
}
