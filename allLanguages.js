module.exports = []
const fs = require("fs")
const languageFiles = fs.readdirSync(__dirname).filter((file) => file.endsWith(".json") && !file.startsWith("package"))
for (const file of languageFiles) {
    module.exports.push(`${file.split(`.`).shift()}`)
}
Object.filter = (obj, predicate) =>
    Object.keys(obj)
        .filter((key) => predicate(obj[key]))
        .reduce((res, key) => ((res[key] = obj[key]), res), {})
