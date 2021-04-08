const contact = require('./contacts')

const { Command } = require('commander')
const program = new Command()
program
  .option('-a, --action <type>', 'choose action')
  .option('-i, --id <type>', 'user id')
  .option('-n, --name <type>', 'user name')
  .option('-e, --email <type>', 'user email')
  .option('-p, --phone <type>', 'user phone')

program.parse(process.argv)

const argv = program.opts()

// TODO: рефакторить
function invokeAction ({ action, id, name, email, phone }) {
  switch (action) {
    case 'list':
      // ...
      contact.listContacts()
      break

    case 'get':
      // ... id
      contact.getContactById(id)
      break

    case 'add':
      // ... name email phone
      contact.addContact(name, email, phone)
      break

    case 'remove':
      // ... id
      contact.removeContact(id)
      break

    default:
      console.warn('\x1B[31m Unknown action type!')
  }
}

invokeAction(argv)
