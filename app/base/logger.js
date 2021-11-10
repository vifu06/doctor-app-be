export default class Logger {
    logRegister = [];

    log(data) {
        this.logRegister.push(data);
    }

    displayLog() {
        console.table(this.logRegister);
    }

    clearLog() {
        this.logRegister = [];
    }
}