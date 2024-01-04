const c = require("@clack/prompts");

const nextApp = `npx create-next-app@latest  --import-alias "@/" --tailwind --ts --eslint --app --src-dir --use-npm`
async function startCli () {
   
    //  NEXT APP
//     console.log()
//     await c.intro(`Lets configure your Nextjs App !`)
//     console.log()

//     const app = await c.text({
//         message : "What is your project named?" ,
//         initialValue : "my-app" ,
//          validate(value) {
//     if (value.length === 0) return `Value is required!`;
//   },
//     })
//     const tailwind = await c.select({
//         message : "Would you like to use Tailwind CSS?" ,
//         initialValue : true,
//         options : [
//             { value : true , label : "Yes"} ,
//              { value : false , label : "No" } 
//         ] ,
//          validate(value) {
//     if (value.length === 0) return `Value is required!`;
//   },
//     })
//     const srcDirectory = await c.select({
//         message : "Would you like to use `src/` directory?" ,
//         initialValue : true,
//         options : [
//             { value : true , label : "Yes"} ,
//              { value : false , label : "No" } 
//         ] ,
//          validate(value) {
//     if (value.length === 0) return `Value is required!`;
//   },
//     })
//     const appRouter = await c.select({
//         message : "Would you like to use App Router? (recommended)" ,
//         initialValue : true,
//         options : [
//             { value : true , label : "Yes"} ,
//              { value : false , label : "No" } 
//         ] ,
//          validate(value) {
//     if (value.length === 0) return `Value is required!`;
//   },
//     })
//     const eslint = await c.select({
//         message : "Would you like to use ESLint?" ,
//         initialValue : true,
//         options : [
//             { value : true , label : "Yes"} ,
//              { value : false , label : "No" } 
//         ] ,
//          validate(value) {
//     if (value.length === 0) return `Value is required!!`;
//   },
//     })
//     const customizeImportAlias = await c.select({
//         message : "Would you like to customize the default import alias (@/*)?" ,
//         initialValue : false ,
//         options : [
//              { value : true , label : "Yes"} ,
//              { value : false , label : "No" } 
//         ] ,
       
//     })
//     let importAlias = customizeImportAlias
    
//     if (importAlias) {
//          importAlias = await c.text({
//             message : "What import alias would you like configured? ",
//             defaultValue : "@/*",
//             placeholder : "@/*" ,
//             validate(value) {
//                 if (value.length === 0) return "A value is required!!"
//             }
//         })
//     }
    
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
        app,
        tailwind,
        srcDirectory,
        appRouter,
        eslint,
        importAlias,
        dbAdapter,
        textEditor
    })
}

module.exports =  {
    startCli
}