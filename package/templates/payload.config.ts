import { buildConfig } from "payload/config";
import {  mongooseAdapter } from "@payloadcms/db-mongodb";
import { slateEditor } from "@payloadcms/richtext-slate";
import { webpackBundler } from "@payloadcms/bundler-webpack";


export default buildConfig({
    collections : [] , 
    routes : {
        admin : "/admin"
    },
    admin : {
        bundler : webpackBundler()
    },
    db : mongooseAdapter({ url : process.env.MONGO_DB_URL  ?? ''}),
    editor : slateEditor({}),
})