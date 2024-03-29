import next from "next";

const PORT = Number(process.env.PORT) ?? 3333
export const nextApp  = next(
    {
        dev : process.env.NODE_ENV !== "development" ,
        port : PORT
    }
)

export  const nextHandler = nextApp.getRequestHandler()