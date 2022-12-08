interface List {
    [key: string]: Array<Function>
}

interface Bus {
    on: (eventName: string, callback: Function) => void,
    emit: (eventName: string, payload: Array<any>) => void,
    off: (eventName: string, callback: Function) => void,
}

class EventBus implements Bus {
    private List: List = {};
    on(eventName: string, callback: Function): void {
        if (eventName in this.List) {
            this.List[eventName].push(callback);
        } else {
            this.List[eventName] = [callback];
        }
    };
    off(eventName: string, callback: Function): void {
        if (eventName in this.List) {
            this.List[eventName] = this.List[eventName].filter(item => item !== callback);
        } else {
            console.error(`${eventName} 事件未注册`);
        }
    };
    emit(eventName: string, ...payload: any[]): void {
        const event = this.List[eventName];
        event.forEach(item => {
            item.apply(this, payload);
        })
    }
}

function fn1() {
    console.log('fn1');
}
function fn2(num1: number, num2: string) {
    if (arguments.length > 0) {
        console.log(`fn2: ${num1}、${num2}`);
    } else {
        console.log('--fn2--');
    }
}

const B = new EventBus();
B.on('test', fn1);
B.on('fn', fn1);
B.on('fn', fn2);
// B.emit('test');
B.emit('fn');
B.emit('fn', 123, 123333);
B.off('test', fn1);
B.off('fn', fn1);
console.log(B)
