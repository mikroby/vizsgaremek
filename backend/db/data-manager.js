'use strict'
// this helper is to modifiy json files
// comment out unnecessary operations!
// to run copy to CLI:
// node .\backend\db\data-manager.js

const colors = {
  error: '\x1b[31m',  // red
  underline: '\x1b[4m\x1b[33m',  // underline + yellow
  normal: '\x1b[32m',    // green
  reset: '\x1b[0m'    // default
}

const log = (method, message = '') => {
  console.log(colors[method], message, colors.reset);
}

const { readFile, writeFile } = require('fs').promises
const { join } = require('path')

const loadData = async (filePath) => {
  const rawJson = await readFile(filePath, 'utf8')
  return JSON.parse(rawJson)
}

const storeData = async (list = [], filePath) => {
  const rawJson = JSON.stringify(list)
  await writeFile(filePath, rawJson, 'utf8')
}

const sortByProp = (list, prop) => {
  if (!prop || !list[0].hasOwnProperty(prop)) {
    log('error', 'sortByProp: given property is not valid!')
    return list
  }

  const value = list[0][prop]

  if (Array.isArray(value)) list.forEach(item => item[prop].sort((a, b) => String(a).localeCompare(String(b))))
  if (typeof value === 'number') list.sort((a, b) => a[prop] - b[prop])
  if (typeof value === 'string') list.sort((a, b) => a[prop].localeCompare(b[prop]))

  log('normal', 'sortByProp finished.')

  return list
}

const randomizePhone = (list, provider) => list.map(item => {
  const { phone } = item
  item.phone = phone.replace('20', provider[Math.trunc(Math.random() * provider.length)])
  return item
}
);

const normalizeAvailability = (list) =>
  list.map(object => {
    let { availableFrom, availableTill } = object
    if (Number(availableFrom.replace(':', '')) > Number(availableTill.replace(':', ''))) {
      [availableFrom, availableTill] = [availableTill, availableFrom]
    }

    const newObject = { ...object, availableFrom, availableTill }
    return newObject
  });

const normalizeWorkHours = (list) =>
  list.map(object => {
    const time = object.availableFrom.split(':')
    const availableTill = `${Number(time[0]) + 8}:${time[1]}`
    const newObject = { ...object, availableTill }
    return newObject
  });

const roundPrice = (list) =>
  list.map(object => {
    const price = Math.round(object.price / 100) * 100
    const newObject = { ...object, price }
    return newObject
  });

const randomizeCategory = (list, maxValue) =>
  list.map(object => {
    const categoryId = Math.trunc(Math.random() * maxValue) + 1
    object.categoryId = [categoryId]
    return object
  });

const randomizeDays = (list) =>
  list.map(object => {
    const usual = Math.round(Math.random() * 6)
    for (let i = 0; i <= usual; i++) {
      const day = Math.round(Math.random() * 6)
      if (!object.workDays.includes(day)) {
        object.workDays.push(day)
      }
    }

    // object.workDays=[]

    return object
  });


// starter
(async () => {
  // files to be modified:
  // const fileName = 'category.json'
  const fileName = 'expert.json'

  const filePath = join(__dirname, fileName)
  const list = await loadData(filePath)

  // mods done:
  // const moddedList = sortByProp(list, 'categoryId')
  // const moddedList = sortByProp(list, 'job')
  const moddedList = sortByProp(list, 'workDays')
  // const moddedList = randomizePhone(list, [20, 30, 70])
  // const moddedList = normalizeAvailability(list)
  // const moddedList = normalizeWorkHours(list)
  // const moddedList = roundPrice(list)
  // const moddedList = randomizeCategory(list, 10)
  // const moddedList = randomizeDays(list)


  await storeData(moddedList, filePath)
  log('normal', 'app terminated.')
})()