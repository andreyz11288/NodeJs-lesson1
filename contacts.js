const fs = require('fs')
const path = require('path')

const contactsPath = path.resolve('./db/contacts.json')

const contents = fs.readFileSync(`${contactsPath}`, 'utf8')

// TODO: задокументировать каждую функцию
const listContacts = () => {
  const contact = JSON.parse(contents)
  console.table(contact) // выводим считанные данные
}

const getContactById = (contactId) => {
  // ...твой код
  const contact = JSON.parse(contents)
  // eslint-disable-next-line array-callback-return
  contact.map((data) => {
    if (`${data.id}` === contactId) {
      console.log(data)
    }
  })
}

const removeContact = (contactId) => {
  // ...твой код
  const contact = JSON.parse(contents)
  const arr = contact.filter((data) => `${data.id}` !== contactId)
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
}

const addContact = (name, email, phone) => {
  // ...твой код

  const contact = JSON.parse(contents)
  const contactId = contact.length + 1
  const allJson = [
    ...contact,
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
    }
  )
}
module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
}
