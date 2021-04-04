const fs = require('fs')
const path = require('path')

const contactsPath = path.resolve('./db/contacts.json')

// TODO: задокументировать каждую функцию
function listContacts () {
  fs.readFile(`${contactsPath}`, 'utf8', (error, data) => {
    if (error) console.log(error) // если возникла ошибка
    const obj = JSON.parse(data)

    console.table(obj) // выводим считанные данные
  })
}

function getContactById (contactId) {
  // ...твой код
  fs.readFile(`${contactsPath}`, 'utf8', (error, data) => {
    if (error) console.log(error) // если возникла ошибка
    const obj = JSON.parse(data)
    // eslint-disable-next-line array-callback-return
    obj.map((data) => {
      if (`${data.id}` === contactId) {
        console.log(data)
      }
    })
  })
}

function removeContact (contactId) {
  // ...твой код
  fs.readFile(`${contactsPath}`, 'utf8', (error, data) => {
    if (error) console.log(error) // если возникла ошибка
    const obj = JSON.parse(data)
    const arr = obj.filter((data) => `${data.id}` !== contactId)
    fs.writeFile(
      `${contactsPath}`,
      `${JSON.stringify(arr, null, 4)}`,
      function (error) {
        if (error) console.log(error) // если возникла ошибка
        fs.readFile(`${contactsPath}`, 'utf8', (error, data) => {
          if (error) console.log(error) // если возникла ошибка
          const obj = JSON.parse(data)
          console.table(obj)
        })
      }
    )
  })
}

const addContact = (name, email, phone) => {
  // ...твой код

  fs.readFile(`${contactsPath}`, 'utf8', function (error, data) {
    if (error) console.log(error) // если возникла ошибка
    const obj = JSON.parse(data)
    // console.log('obj.length', obj.length)
    const contactId = obj.length + 1
    const allJson = [
      ...obj,
      { id: contactId, name: `${name}`, email: `${email}`, phone: `${phone}` },
    ]
    fs.writeFile(
      `${contactsPath}`,
      `${JSON.stringify(allJson, null, 4)}`,
      function (error) {
        if (error) console.log(error) // если возникла ошибка
        fs.readFile(`${contactsPath}`, 'utf8', (error, data) => {
          if (error) console.log(error) // если возникла ошибка
          console.table(JSON.parse(data))
        })
        // выводим считанные данные
      }
    )
  })
}
module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
}
