'use strict'

const fetch = require('node-fetch')
const { parse } = require('node-html-parser')
const { table } = require('table')

const getMenuData = async () => {
  const _res = await fetch('http://www.crous-lille.fr/restaurant/r-u-de-la-mi-voix-calais/')
  const res = await _res.text()

  const root = parse(res)
  const menuEle = root.querySelector('#menu-repas .slides').childNodes
  const days = menuEle.filter(x => x.nodeType === 1)

  let menu = days.map(x => {
    const dayContent = x.childNodes.filter(x => x.nodeType === 1)
    const menuContent = dayContent[1].childNodes.filter(x => x.nodeType === 1)

    const day = dayContent[0].rawText
    const meal = menuContent.map(y => ({
      name: y.childNodes[0].rawText,
      menu: y.childNodes[1].innerHTML
        .match(/<li>.*?\<\/li>|Pas de service|Menu non communiqué/g)
        .map(w => w.replace(/<li>|<\/li>/g, ''))
        .filter(w => w)
    }))

    return { day, meal }
  })

  return menu
}

const tableConfig = {
  columnCount: 3,
  columns: {
    0: { width: 15 },
    1: { width: 14 },
    2: { width: 80 }
  }
}
const getMenuTable = async () => {
  const menu = await getMenuData()

  let data = [['Jour', 'Repas', 'Menu']]
  menu.forEach(x => {
    let menuName = ''
    let menuMeal = ''
    x.meal.forEach(y => {
      menuName += y.name
      menuName += new Array(y.menu.length + 2).join('\n')
      menuMeal += y.menu.join('\n') + '\n\n'
    })

    let menuData = [x.day.replace(/Menu du .*? /, ''), menuName.trim(), menuMeal.trim()]

    data.push(menuData)
  })

  return table(data, tableConfig)
}

const routeDesc =
  `<br><br><a href='/'>Tableau</a>, <a href='/api'>JSON</a>` +
  `<br><a href='https://github.com/rigwild/menu-ru-calais' target='_blank' rel='noopener'>GitHub</a>`

module.exports = {
  getMenuData,
  getMenuTable,
  routeDesc
}
