export namespace namespaceAB {
    const time: string = 'hello a.ts'
    export const fn = <T>(arg: T): T => {
        return arg;
    }
    fn<string>(time)
}

