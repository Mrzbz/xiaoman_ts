function promiseFn(): Promise<number> {
    return new Promise<number>((resolve, reject) => {
        resolve(1)
    })
}

promiseFn().then(res => {
    console.log(`promiseFn->then:${res}`)
})

type UserType = {
    age: number,
    name: string,
    sex?: number
}

function promise(): Promise<UserType> {
    return new Promise<UserType>((resolve, reject) => {
        const user: UserType = {
            age: 12,
            name: 'strName',
        }
        resolve(user)
    })
}

promise().then(res => {
    console.log(`promise->then: age:${res.age}, name:${res.name}`);
})