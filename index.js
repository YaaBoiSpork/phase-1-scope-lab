var customerName = "bob";
const leastFavoriteCustomer = "likely bob"

function upperCaseCustomerName() {
    customerName = customerName.toUpperCase()
}

function setBestCustomer() {
    bestCustomer = 'not bob'
}
  
function overwriteBestCustomer() {
    bestCustomer = 'maybe bob'
}
  
  function changeLeastFavoriteCustomer() {
    return leastFavoriteCustomer = 'billy'
}