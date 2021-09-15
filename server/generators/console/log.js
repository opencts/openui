import chalk from 'chalk';
import readline from 'readline';

const logger = console.log;
const ql = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const clearLine = () => {
    process.stdout.moveCursor(0, -1);
    process.stdout.clearLine(1);
};


export default {
    error: (info, code = null) => logger(chalk.red.bold(`${code ? code : '[ERROR]'}`, info)),
    success: info => logger(chalk.green('[✔]', info)),   
    info: (data, type = `${chalk.blue.bold('[i]')} `) => logger(chalk.gray.bold(`${type}`, data)), 
    warning: info => logger(chalk.yellowBright.bold('[WARNING]', info)),
    strong: info => logger(chalk.blueBright.bold('[*]', info)),
    input: query => {
        return new Promise(r => {
            ql.question(query, answ => {
                r(answ);
            });
        });
    },
    ynInput: async function (query, options) {
        const answ = await this.input(query);
        if (/(y|yes|o|oui)/i.test(answ)) {
            clearLine();
            clearLine();
            options.onConfirm();
        } else {
            if (options.onCancel) {
                options.onCancel()
            }
        }
    },
    loading: (msg) => {
        console.log();
        const interval = setInterval(() => {
            let n = 1;
            const internalInterval = setInterval(() => {
                clearLine();
                let str = '';
                for (let i = 0; i < n; i++) str += '.';
                n++;
                logger(chalk.gray.bold(`[⏲ ] ${msg}`, str));
            }, 500); 
            setTimeout(() => {
                clearInterval(internalInterval);
            }, 2000);
        }, 2500);
        return interval;
    },
    stopLoading: loader => {
        clearInterval(loader);
        return new Promise(r => {
            setTimeout(() => {
                r();
            }, 2500);
        });
    }
};