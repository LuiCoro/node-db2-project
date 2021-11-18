
const cars = [
  {
    vin: '0000000000001',
    make: 'Lexus',
    model: 'RC300',
    mileage: 50000,
    title: 'salvage',
    transmission: 'manuel',
  },
  {
    vin: '0000000000002',
    make: 'Toyota',
    model: 'Tacoma',
    mileage: 20000,
    title: 'clean',
  },
  {
    vin: '0000000000003',
    make: 'Honda',
    model: 'Type R',
    mileage: 1000,
  },
]

exports.seed = async function (knex) {
  await knex('cars').truncate()
  await knex('cars').insert(cars)
}