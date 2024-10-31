import { idCreator } from './idCreator.js'

import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const readline = require('readline-sync');

let user = {}
let allUser = []

let formName = ''
let formPass = ''
let formConfPass = ''
let formDateBirth = ''

export function userCreate(){
    console.clear()
    formName = readline.question('Nome: ')
    formPass = readline.question('Senha: ', {hideEchoBack: true})
    formConfPass = readline.question('Confirmar senha: ', {hideEchoBack: true})
    formDateBirth = readline.question('Nascimento: ')

    if(formConfPass != formPass){
        console.log('Confirmação de senha incorreta.')
        let press = readline.question('Pressione ENTER para continuar...')
    } else{
        user = {
            id: idCreator(),
            name: formName,
            dateBirth: formDateBirth,
        }
    
        allUser.push(user)
    
        console.clear()
        console.log('Usuário Criado Com Sucesso!')
        let press = readline.question('\nPressione ENTER para continuar...')
    }
}



export function userList(){
    console.clear()
    allUser.forEach((user) => {
        console.log(`ID: ${user.id}`)
        console.log(`Nome: ${user.name}`)
        console.log(`Nascimento: ${user.dateBirth}`)
        console.log('================================')
    })

    let press = readline.question('Presssione ENTER para cotninuar...')
}

export function userDelete(){
    console.clear()
    allUser.forEach((user) => {
        console.log(`ID: ${user.id}`)
        console.log(`Nome: ${user.name}`)
        console.log(`Nascimento: ${user.dateBirth}`)
        console.log('================================')
    })
    let deleteID = readline.questionInt('Digite o ID que quer deletar: ')
    console.clear()
    const index = allUser.findIndex(user => user.id === deleteID)

    if(index === -1){
        console.log('Usuário não existe.')
    } else{
        console.log('O usuário deletado será: ')
        const userToDelete = allUser[index]
        console.log(`ID: ${userToDelete.id}`)
        console.log(`Nome: ${userToDelete.name}`)
        console.log(`Nascimento: ${userToDelete.dateBirth}`)
        console.log('================================\n')

        allUser.splice(index, 1)
        console.log('Usuário Deletado Com Sucesso!')
        let press = readline.question('Presssione ENTER para cotninuar...')
    }
}