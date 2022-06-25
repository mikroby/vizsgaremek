// datas to be seeded up to cloud, run once at the beginning!

const mongoose = require('mongoose');
const { readFile } = require('fs').promises
const { join } = require('path')

// data files to be seeded:
// const modelName = ['user'];
// const modelName = ['expert'];
// const modelName = ['order'];
// const modelName = ['invoice'];
// const modelName = ['category', 'customer', 'expert', 'invoice', 'order'];

(async () => {
  modelName.forEach(async (model) => {

    mongoose.connection.dropCollection(`${model.endsWith('y') ? model.slice(0, -1) + 'ies' : model + 's'}`)

    // 1.method reading from file
    // const rawJson = await readFile(join(__dirname, `${model}.json`), 'utf8')
    // const entity = JSON.parse(rawJson)
    // return await require(`../model/${model}.js`).insertMany(entity)

    const Model = require(`../model/${model}`)
    const entities = require(`./${model}.json`)

    // 2.method for normal datas
    await Model.insertMany(entities)

    // 3.method for password encryption needed
    // await entities.forEach(async entity => {
    //   const newModel = new Model(entity)
    //   await newModel.save()
    // })

  })
  console.log('Data is seeded!')
})()