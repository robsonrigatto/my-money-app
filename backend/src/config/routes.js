const express = require('express')

module.exports = function(server) {
    const router = express.Router()
    server.use('/api', router)
    
    // Rotas do Ciclo de Pagamento

    const BilligCycle = require('../api/billingCycle/billingCycleService')
    BilligCycle.register(router, '/billingCycles')
}