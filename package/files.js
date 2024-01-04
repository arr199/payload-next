
function generateKey() {
   const characters = "1234567890abcdef" 
   let password = ""
   for (let i = 0 ; i < 40 ; i++ ) {
        password += characters.charAt(Math.floor(Math.random() * characters.length ))
   }
   return password
}

const env = `SERVER_PUBLIC_URL=http://localhost:3400
MONGO_DB_URL=mongodb+srv://user:password@cluster0.rklo0t7.mongodb.net/?retryWrites=true&w=majority
PORT=3400
PAYLOAD_SECRET=${generateKey()}`


