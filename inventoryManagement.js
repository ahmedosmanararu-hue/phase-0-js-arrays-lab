const products = ["Laptop", "Phone", "Headphones", "Monitor"]

const logFirstProduct = () => {
    console.log(products[0])
}
const addProduct = (product) => {
    products.push(product)
}   
const udpateProductName = (index, newName) => {
    products[index] =newName
}
const removeLastProduct = () => {
    products.pop()
}
console.log(products)
module.exports = {products, logFirstProduct, addProduct, udpateProductName, removeLastProduct}





