let fs = require("fs")

exports.add = (title, actor) => {
    let Movie = {
        movie: title,
        actor: actor
    }
    let str = JSON.stringify(Movie)
    fs.writeFileSync("./netflix.json", str)
}

exports.list = () => {
    let list = fs.readFileSync("./netflix.json")
    let listParse = JSON.parse(list)
    console.log(listParse)

    // SHORTER VERSION:
    // let list = JSON.parse(fs.readFileSync("./netflix.json"))
    // console.log(list)
}