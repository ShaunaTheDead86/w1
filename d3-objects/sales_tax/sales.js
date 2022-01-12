const inspect = require('util').inspect

const calculateSalesTax = function (salesData, taxRates) {
  let results = {}

  for (const entry of salesData) {
    if (!results[entry.name]) {
      results[entry.name] = {
        totalSales: 0,
        totalTaxes: 0
      }
    }

    for (const sale of entry.sales) {
      results[entry.name].totalSales += sale
      results[entry.name].totalTaxes += sale * taxRates[entry.province]
    }
  }

  return results
}

const salesTaxRates = {
  AB: 0.05,
  BC: 0.12,
  SK: 0.1
}

const companySalesData = [
  {
    name: 'Telus',
    province: 'BC',
    sales: [100, 200, 400]
  },
  {
    name: 'Bombardier',
    province: 'AB',
    sales: [80, 20, 10, 100, 90, 500]
  },
  {
    name: 'Telus',
    province: 'SK',
    sales: [500, 100]
  }
]

console.log(inspect(calculateSalesTax(companySalesData, salesTaxRates)))
