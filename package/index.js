// const { spawn } = require( 'child_process' );
// const fs = require("fs")
// const  files = require("./files.js") ;
const { startCli } = require("./cli/start.js")


startCli()

/* TODO  
GET THE NEXTJS APP NAME 
CHANGE .ENV TO ROOT FOLDER INSTEAD OF SERVER FOLDER
MAKE CHANGES IN FILES
*/

// const child = spawn("npx" , ["create-next-app@latest"] , {
//     shell : true ,
//     stdio : "inherit",
// })
// const packages = [`i payload @payloadcms/bundler-webpack @payloadcms/db-mongodb @payloadcms/richtext-slate express 
// @types/express -D dotenv cross-env nodemon -D`]

// child.on("close" , (err) => {
//     if (err) {
//         console.log("EXITING")   
//         return
//     }
//     console.log("NextJS installed")
//     console.log("\nInstalling Payload\n")
//     const payload = spawn("npm" , packages , {
//         shell : true ,
//         stdio : "inherit",
//     })

//     payload.on("close" , () => {
//         console.log("Payload is installed")
//     })

// })


/*  CREATING FILES 
server
    - server.ts
    - payload.config.ts
    - next-app.ts
.env

*/

// const projectName = "abiel"
// const projectPath = fs.existsSync(`./${projectName}/src`) ? `./${projectName}/src` : `./${projectName}`

// fs.mkdirSync(`${projectPath}/server`  , { recursive : true })
// fs.copyFileSync( "./templates/server.ts" , `${projectPath}/server/server.ts`  )
// fs.copyFileSync( "./templates/payload-client.ts" , `${projectPath}/server/payload-client.ts`  )
// fs.copyFileSync( "./templates/payload.config.ts" , `${projectPath}/server/payload.config.ts`  )
// fs.copyFileSync( "./templates/next-app.ts" , `${projectPath}/server/next-app.ts`  )

// // ADDING SCRIPTS
// const dev_script =  `\t\t"dev": "npx cross-env  PAYLOAD_CONFIG_PATH=src/server/payload.config.ts nodemon  src/server/server.ts",`
// const build_script = `\t\t`
// const start_script = `\t\t`
// const generateTypes = `\t\t`
// const packageJson = fs.readFileSync("./abiel/package.json").toString().split("\n").map( e => e.includes(`"dev": "next dev"`) ? dev_script  : e ).join("\n")

// fs.writeFileSync("./abiel/package.json" , packageJson)
// console.log(packageJson)


// const nextApp = `npx create-next-app@latest --import-alias "@/" --tailwind --ts --eslint --app --src-dir --use-npm`