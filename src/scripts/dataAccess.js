const API = "http://localhost:8088"
const applicationState = {}

export const fetchRetailers = () => {
    return fetch(`${API}/retailers`)
        .then(response => response.json())
        .then((responseArray) => { applicationState.retailers = responseArray })
}

export const getRetailers = () => {
    return applicationState.retailers.map(obj => ({ ...obj }))
}

export const fetchDistributors = () => {
    return fetch(`${API}/distributors`)
        .then(response => response.json())
        .then((responseArray) => { applicationState.distributors = responseArray })
}

export const getDistributors = () => {
    return applicationState.distributors.map(obj => ({ ...obj }))
}

export const fetchDistributorStock = () => {
    return fetch(`${API}/distributorStock`)
        .then(response => response.json())
        .then((responseArray) => { applicationState.distributorStock = responseArray })
}

export const getDistributorStock = () => {
    return applicationState.distributorStock.map(obj => ({ ...obj }))
}

export const fetchNurseries = () => {
    return fetch(`${API}/nurseries`)
        .then(response => response.json())
        .then((responseArray) => { applicationState.nurseries = responseArray })
}

export const getNurseries = () => {
    return applicationState.nurseries.map(obj => ({ ...obj }))
}

export const fetchNurseryStock = () => {
    return fetch(`${API}/nurseryStock`)
        .then(response => response.json())
        .then((responseArray) => { applicationState.nurseryStocks = responseArray })
}

export const getNurseryStock = () => {
    return applicationState.nurseryStock.map(obj => ({ ...obj }))
}

export const fetchFlowers = () => {
    return fetch(`${API}/flowers`)
        .then(response => response.json())
        .then((responseArray) => { applicationState.flowers = responseArray })
}

export const getFlowers = () => {
    return applicationState.flowers.map(obj => ({ ...obj }))
}
