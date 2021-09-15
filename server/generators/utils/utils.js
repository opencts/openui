import { execSync } from "child_process";

export function startMongoServer() {
    execSync('sudo service mongod start');
}