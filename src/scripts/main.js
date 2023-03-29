import { fetchDistributors, fetchDistributorStock, fetchFlowers, fetchNurseries, fetchNurseryStock, fetchRetailers } from "./dataAccess.js";
import { createHTML } from "./createHTML.js";

const mainContainer = document.querySelector("#container");

// Fetch all of the database so that it's stored in application state, then regenerate html
const render = () => {
    fetchRetailers()
    .then(() => fetchDistributors())
    .then(() => fetchDistributorStock())
    .then(() => fetchNurseries())
    .then(() => fetchNurseryStock())
    .then(() => fetchFlowers())
    .then(() => {
        mainContainer.innerHTML = createHTML()
    })
};

render();

// Listen for state changes and invoke render() when it does
mainContainer.addEventListener("stateChanged", customEvent => {
    render()
})