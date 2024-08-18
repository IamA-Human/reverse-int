module.exports = function reverse (n) {
  return n.toString().split("")[0] != "-" ? n.toString().split("").reverse().join("") : n.toString().split("").slice(1).reverse().join("")
} 

