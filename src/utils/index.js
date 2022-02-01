const yargs = require("yargs/yargs");
const { hideBin } = require("yargs/helpers")
const { add, list } = require ("../app")
const argv = yargs(hideBin(process.argv)).argv

let title = argv.title
let actor = argv.actor

const app = () => {
    if (argv.add) {
        add(title, actor)
        console.log(`Movie "${title}" with ${actor} added`);
    }
    else if (argv.list) {
        list()
    }
    else {
        console.log("Wrong command")
    }
};

app();