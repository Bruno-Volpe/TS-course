type VerifyUserFn = (user: User, sentValue: User) => boolean
type User = {username: string, passwrod: string}

const verifyUser: VerifyUserFn = (user, sentValue) => {
    return user.username == sentValue.username && user.passwrod === sentValue.passwrod
}

const bdUser: User = {username: 'joao', passwrod: '12345'}
const sentUser: User = {username: 'joao', passwrod: '12345'}

console.log(verifyUser(bdUser, sentUser))
