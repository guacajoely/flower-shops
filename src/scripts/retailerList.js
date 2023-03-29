import { getRetailers, setRetailer } from "./dataAccess.js";
import { createRetailerInfo } from "./retailerInfo.js";

export const createRetailerDropdown = () => {
    const retailers = getRetailers();
    return `
      <h3>Retailers</h3>
      <select id="dropdown-retailers">
          <option value="0">Choose A Retailer</option>
          ${retailers.map(retailer => {

        return `<option class="option" id="retailer" value="${retailer.id}">${retailer.name}</option>`
            }).join("")}
            </select>`;
};

document.addEventListener("change", (event) => {
    if (event.target.id === "dropdown-retailers") {
        const retailers = getRetailers();
        const matchingRetailer = retailers.find((retailer) => {
            return retailer.id === parseInt(event.target.value)
        })
        setRetailer(matchingRetailer.id)
    
        //if retailer is selected, display retailerInfo
        if(matchingRetailer !== null) {
        document.querySelector('#retailer-info').innerHTML = `${createRetailerInfo(matchingRetailer)}`
        }

        //if null, retailerInfo is blank
        else { document.querySelector('#retailer-info').innerHTML = '' }
    }
})  