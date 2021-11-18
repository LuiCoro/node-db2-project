
const cars = [
  {
    vin: "4JGBB8GB4BA662410",
    make: 'Lexus',
    model: 'RC300',
    mileage: 50000,
    title: 'salvage',
    transmission: 'manuel',
  },
  {
    vin: "JH4DB1570LS800098",
    make: 'Toyota',
    model: 'Tacoma',
    mileage: 20000,
    title: 'clean',
  },
  {
    vin: "YV1LZ5647W2469314",
    make: 'Honda',
    model: 'Type R',
    mileage: 1000,
  },
]

exports.seed = async function (knex) {
  await knex('cars').truncate()
  await knex('cars').insert(cars)
}