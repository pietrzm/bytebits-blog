const ts = require("typescript")



const toBase64 = message =>
    new Buffer(JSON.stringify(message))
        .toString('base64')

const toInlineSourcemap = sourcemap =>
    `data:application/json;base64,${toBase64(sourcemap)}`


const configuration = require("../tsconfig"),
    { compilerOptions } = configuration

const transpile = data =>
    ts.transpileModule(data.text, {
        fileName: data.path,
        compilerOptions
    })


hexo.extend.renderer.register("ts", "js", data =>
    new Promise((resolve, reject) => {
        try {
            const { outputText, sourceMapText } = transpile(data)
            const content = outputText
                // .replace(
                //     JSON.parse(sourceMapText).file + ".map",
                //     toInlineSourcemap(sourceMapText))

            resolve(content)
        } catch (e) {
            reject(e)
        }
    }))