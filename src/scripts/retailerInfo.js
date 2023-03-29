import { getDistributors, getDistributorStock, getFlowers, getNurseries, getNurseryStock } from "./dataAccess.js"

export const createRetailerInfo = (retailer) => {
    const distributors = getDistributors()
    const distributorStock = getDistributorStock()
    const nurseries = getNurseries()
    const nurseryStock = getNurseryStock()
    const flowers = getFlowers()

    //Grab the matching distributor by looping through the distributors and comparing it to the distributorId on the retailer object that got passed in
    const matchingdistributor = distributors.find((distributor) => {
        return distributor.id === parseInt(retailer.distributorId)
    })

    // Find all the nurseries that supply that distributor
    const matchingDistributorStock = distributorStock.filter(() => {
        return singleStock.distributorId === matchingdistributor.id
    })
   
    // 
    const matchingNurseryObjects = matchingDistributorStock.map(stock => {
        return nurseries.find((nursery) => {
            return nursery.id === parseInt(stock.customerId)
        })
    })

    console.log(matchingNurseryIds)
    
    return `<div class="employee">
                                <header class="retailer__name">
                                    <h3>${retailer.name}</h3>
                                </header>

                                <section class="retailer__distributors">
                                    <ul>
                                        ${matchingNurseryObjects.map(nursery => {return `<li class="distributor" id="distributor--${nursery.id}"/>${nursery.name}</li>`}).join("")}
                                    </ul>
                                </section>
                      
                            </section>
                            </div>`
}