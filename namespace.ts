namespace namespcaeA {
    export const time: number = 1000;
    export const fn = <T>(arg:T): T => {
        return arg
    }
    fn<number>(time)
}
namespace namespcaeB {
    export const time: number = 1000;
    export const fn = <T>(arg:T): T => {
        return arg
    }
    fn<number>(time)
}

namespcaeA.fn<string>('123')
namespcaeB.fn<string>('123')
