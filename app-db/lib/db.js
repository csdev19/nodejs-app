'user strict'

const Sequelize = require('sequelize')

/* que es un singleton ?
es un objeto que solo tiene una instancia, solo retorna la misma instancia
*/

let sequelize = null

module.exports = function setupDatabase (config) {
  if (!sequelize) {
    sequelize = new Sequelize(config)
  }
  return sequelize
}
