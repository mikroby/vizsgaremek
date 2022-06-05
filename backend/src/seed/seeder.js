// datas to be seeded up to cloud, run once at the beginning!

const { readFile } = require('fs').promises
const { join } = require('path')

// data files to be seeded:
// const modelName = ['category', 'expert'];
// const modelName = ['category', 'customer', 'expert', 'invoice', 'order'];

(async () => {
  modelName.forEach(async (model) => {
    const rawJson = await readFile(join(__dirname, `${model}.json`), 'utf8')
    const entity = JSON.parse(rawJson)
    return await require(`../model/${model}.js`).insertMany(entity)
  })
  console.log('Data is seeded!')
})()