'use strict'
// this helper is to modifiy json files
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

  if (Array.isArray(value)) list.forEach(item => item[prop].sort((a, b) => a.localeCompare(b)))
  if (typeof value === 'number') list.sort((a, b) => a[prop] - b[prop])
  if (typeof value === 'string') list.sort((a, b) => a[prop].localeCompare(b[prop]))

  log('normal', 'sortByProp finished.')

  return list
}

const randomizePhone = (list, provider) => list.map(item => {
  const phone = item.phone
  item.phone = phone.replace('20', provider[Math.trunc(Math.random() * provider.length)])
  return item
}
);




// starter
(async () => {
  // file to be modified:
  // const fileName = 'category.json'
  const fileName = 'expert.json'

  const filePath = join(__dirname, fileName)
  const list = await loadData(filePath)

  // mods:
  // const moddedList = sortByProp(list, 'categoryId')
  const moddedList = randomizePhone(list, [20, 30, 70])

  await storeData(moddedList, filePath)
  log('normal', 'app terminated.')
})()