const fs = require("fs")
const t = require("string-template")

let languages = {}

const languageFiles = fs.readdirSync(__dirname).filter((file) => file.endsWith(".json"))
for (const file of languageFiles) {
    const language = require(`./${file}`)
    languages[`${file.split(`.`).shift()}`] = language
}

Object.filter = (obj, predicate) =>
    Object.keys(obj)
        .filter((key) => predicate(obj[key]))
        .reduce((res, key) => ((res[key] = obj[key]), res), {})

module.exports = (key, language, replaceData) => {
  let chosenL = languages[language]
  if(!chosenL) return `No language with code ${language} found!`
  let string = chosenL[key]
  if(!string) return `No string in language ${language} with key ${key} found!`
  string = t(string, replaceData)
  return string
}
