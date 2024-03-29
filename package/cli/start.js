const c = require("@clack/prompts");

async function startCli () {
   
    //  NEXT APP
    console.log()
    await c.intro(`Lets configure your Nextjs App !`)
    console.log()

    const appName = await c.text({
        message : "What is your project named?" ,
        initialValue : "my-app" ,
         validate(value) {
    if (value.length === 0) {
        return `Value is required!`
    }else if (value.match(/[A-Z]+/g)) {
        return "No Upper case characters please!!"
    }
  },
    })
    const tailwind = await c.select({
        message : "Would you like to use Tailwind CSS?" ,
        initialValue : "--tailwind",
        options : [
            { value : "--tailwind" , label : "Yes"} ,
             { value : "--no-tailwind" , label : "No" } 
        ]
    })
    const srcDirectory = await c.select({
        message : "Would you like to use `src/` directory?" ,
        initialValue : "--src-dir",
        options : [
            { value : "--src-dir" , label : "Yes"} ,
             { value : "--no-src-dir" , label : "No" } 
        ] 
    })
    const appRouter = await c.select({
        message : "Would you like to use App Router? (recommended)" ,
        initialValue : "--app",
        options : [
            { value : "--app" , label : "Yes"} ,
             { value : "--no-app" , label : "No" } 
        ] 
    })
    const eslint = await c.select({
        message : "Would you like to use ESLint?" ,
        initialValue : "--eslint",
        options : [
            { value : "--eslint" , label : "Yes"} ,
             { value : "--no-eslint" , label : "No" } 
        ]
    })
    const customizeImportAlias = await c.select({
        message : "Would you like to customize the default import alias (@/*)?" ,
        initialValue : "--import-alias @/*" ,
        options : [
             { value : true , label : "Yes"} ,
             { value : "--import-alias @/*" , label : "No" } 
        ] ,
    })
    let importAlias = customizeImportAlias
    
    if (customizeImportAlias === true) {
         importAlias = await c.text({
            message : "What import alias would you like configured? ",
            defaultValue : "@/*",
            placeholder : "@/*" ,
            validate(value) {
                if (value.length === 0) return "A value is required!!"
            }
        })
    }
    const packageManager = await c.select({
        message : "Which package manger would you like to use? " ,
        initialValue : "--use-npm" ,
        options : [
             { value : "--use-npm" , label : "npm"} ,
             { value : "--use-yarn" , label : "yarn" } ,
             { value : "--use-pnpm" , label : "pnpm" } ,
            ] ,
       
    })
    
    //  PAYLOAD APP
    console.log()
    await c.intro("Lets configure Payload-CMS !")
    console.log()
    const dbAdapter = await c.select({
        message : "Which database adapter would you like to use? ",
        options: [
            { value : "mongo" , label :  "MongoDB"} ,
            { value : "postgress" , label : "PostgressSQL" }
        ],initialValue : "mongo"
    })
    const textEditor = await c.select({
        message : "Which Text Editor would you like to use? ",
        options : [
            {  value : "slate" , label: "SlateJS "},
            {  value : "lexical" , label: "Lexical"}
        ],initialValue : "slate"
    })
   
    console.log({
        appName,
        tailwind,
        srcDirectory,
        appRouter,
        eslint,
        importAlias,
        packageManager,
        dbAdapter,
        textEditor
    })

    return {  
        appName,
        tailwind,
        srcDirectory,
        appRouter,
        eslint,
        importAlias : "--import-alias " + importAlias,
        packageManager,
        dbAdapter,
        textEditor }
}

module.exports =  {
    startCli
}