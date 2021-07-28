const fs = require("fs")


let languages = {}

const languageFiles = fs.readdirSync(__dirname).filter((file) => file.endsWith(".json"))
for (const file of languageFiles) {
    const language = require(`./${file}`)
    module.exports[`${file.split(`.`).shift()}`] = language
}

Object.filter = (obj, predicate) =>
    Object.keys(obj)
        .filter((key) => predicate(obj[key]))
        .reduce((res, key) => ((res[key] = obj[key]), res), {})

module.exports = (key, language) => {
  let chosenL = languages[language]
  if(!chosenL) return `No language with code ${language} found!`
  let string = chosenL[stringID]
  if(!string) return `No string in language ${language} with key ${key} found!`
  return string
}
