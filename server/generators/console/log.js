import chalk from 'chalk';
const logger = console.log;

export default {
    error: (info, code = null) => logger(chalk.red.bold(`${code ? code : 'ERROR'}`, info)),
    success: info => logger(chalk.green('[SUCCESS]',info)),
    info: (data, type = '[i]') => logger(chalk.gray.bold(`${type}`, data)),
    warning: info => logger(chalk.yellowBright.bold('[WARNING]', info)),
    strong: info => logger(chalk.blueBright.bold('[*]', info)),
    input: info => logger(chalk.blueBright(`${info} : `))
};