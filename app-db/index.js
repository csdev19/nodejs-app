'use strict'

const setupDatabase = require('./lilb/db')
const setupAgentModel = require('./models/agent')
const setupMetricModel = require('./models/metric')

module.exports = async function (config) {
  const sequelize = setupDatabase(config)
  const AgentModel = setupAgentModel(config)
  const MetricModel = setupMetricModel(config)

  AgentModel.hasMany(MetricModel)
  MetricModel.belongTo(AgentModel)

  await sequelize.authenticate()
  // sequelize.sync()

  const Agent = {}
  const Metric = {}

  return {
    Agent,
    Metric
  }
}
