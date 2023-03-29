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

    console.log(matchingdistributor)

    // Find all the nurseries that supply that distributor
    const matchingDistributorStock = distributorStock.filter((stock) => {
        return stock.distributorId === matchingdistributor.id
    })
    
    const matchingNurseryObjects = matchingDistributorStock.map((stock) => {
        return nurseries.find((nursery) => {
            return nursery.id === stock.nurseryId
        })
    })

    console.log(matchingNurseryObjects)

    // Find all the flowers those nurseries grow

    let matchingFlowers = []
    matchingNurseryObjects.forEach( (nursery) => {

        const matchingNurseryStock = nurseryStock.filter((stock) => {
            return stock.nurseryId === nursery.id
        })
        
        const matchingFlowerObjects = matchingNurseryStock.map((stock) => {
            return flowers.find((flower) => {
                return flower.id === stock.flowerId
            })
        })

        matchingFlowerObjects.forEach((obj) => {
            matchingFlowers.push(obj)
        })

    })

    console.log(matchingFlowers)
    
    
    return `<div class="employee">
                                <header class="retailer__name">
                                    <h3>${retailer.name}</h3>
                                </header>

                                <section class="retailer__distributor">
                                <h4>The Distributor for this Retailer is:</h4>
                                    <ul>
                                        <li class="distributor" id="distributor--${matchingdistributor.id}"/>${matchingdistributor.name}</li>
                                    </ul>
                                </section>

                                <section class="retailer__nurseries">
                                    <h4>The Nurseries that supply this retailer's distributor are:</h4>
                                    <ul>
                                        ${matchingNurseryObjects.map(nursery => {return `<li class="distributor" id="distributor--${nursery.id}"/>${nursery.name}</li>`}).join("")}
                                    </ul>
                                </section>

                                <section class="retailer__flowers">
                                <h4>The flowers that are grown by the nurseries that supply this retailer's distributor are:</h4>
                                <ul>
                                    ${matchingFlowers.map(flower => {return `<li class="distributor" id="distributor--${flower.id}"/>${flower.color} ${flower.name}s</li>`}).join("")}
                                </ul>
                            </section>
                      
                            </section>
                            </div>`
}