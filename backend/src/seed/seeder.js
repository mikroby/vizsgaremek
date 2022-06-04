// datas to be seeded up to cloud, run once at the beginning!

const { readFile } = require('fs').promises
const { join } = require('path')

// data files to be seeded:
const modelName = ['category', 'expert'];
// const modelName = ['category', 'customer', 'expert', 'invoice', 'order'];

(async () => {
  modelName.forEach(model => {
    const object = await readFile(join(__dirname, `${model}.json`), 'utf8')
    const rawJson = JSON.parse(object)
    return await require(`../model/${model}.json`).insertMany(rawJson)
  })
  console.log('Data is seeded!')
})()