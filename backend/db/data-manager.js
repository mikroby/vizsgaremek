'use strict'
// this is to modifiy json files

const colors = {
  error: '\x1b[31m',  // red
  message: '\x1b[4m\x1b[33m',  // underline + yellow
  log: '\x1b[32m',    // green
  reset: '\x1b[0m'    // default
}

const fsp = require('fs').promises
const { join } = require('path')

const loadData = async (filePath) => {
  const rawJson = await fsp.readFile(filePath, 'utf8')
  return JSON.parse(rawJson)
}

const storeData = async (list = [], filePath) => {
  const rawJson = JSON.stringify(list)
  await fsp.writeFile(filePath, rawJson, 'utf8')
}

const sortByProp = (list, prop) => {
  if (!prop || !list[0].hasOwnProperty(prop)) {
    console.log(colors.error, 'sortByProp: given property is not valid!', colors.reset);
    return list
  }
  const propType = typeof list[0][prop]
  if (propType === 'number') list.sort((a, b) => a[prop] - b[prop])
  if (propType === 'string') list.sort((a, b) => a[prop].localeCompare(b[prop]))

  return list
}

// starter
(async () => {
  // file to be modified:
  const fileName = 'category.json'

  const filePath = join(__dirname, fileName)
  const list = await loadData(filePath)

  // mods:
  const moddedList = sortByProp(list, 'categoryId')

  await storeData(moddedList, filePath)
  console.log(colors.log, 'app terminated!', colors.reset)
})()