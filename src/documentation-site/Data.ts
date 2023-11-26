import { ElasticDocsModel } from "src/models/ElasticDocsDataModel";
// https://v2.vuepress.vuejs.org/reference/plugin/docsearch.html
// https://github.com/egoist/docute
// https://vue-community.org/guide/ecosystem/documentation.html#documentation-websites

const defaultValue = {
    pages: [{
        title: "Introduction",
        sections: [
            {
                title: "Introduction",
                headerSize: 1,
                content: {
                    markdown: 
`Most application users prefer to find the solution by themselves instead of contacting support.
This is why every application should have a documentation page, or even a documentation portal, for the user to learn and discover the app's features.

Most of the existing solutions are [static site generators](./alternatives#static-site-generators). The downside is of this approach is it needs to be in a seperated application.

There are [some solutions](./alternatives#embedded-documentation) that allows the documentation to co-exists in your existing application but they lack search capabilities. 
`
                },
            },
            {
                title: "What is vue-elastic-docs",
                headerSize: 2,
                content: [
                    { markdown: 
`This library can add the documentation within your vue application by maintaining the SPA and by providing elastic search within the browser.

There is no need for additional services or db access to search through the documentation, everything is done localy.
` },
                    { imageUrl: "" }
                ]
            },
            {
                title: "Ugly grade (How far from elegance is it?)",
                headerSize: 3,
                content: [
                    { markdown: 
`It's around in the middle.
To skip a building step, and to allow search, all the documentation is placed on one big \`\`\`Array\`\`\`. 

You can break that down to seperate files and maybe use some well formed helper functions, but it won't change the fact that the core of this documentation system is a **big fat ugly** array.  
` },
                    { lang:'javascript',
                      code: `
{
    pages: [{
        title: "Introduction",
        sections: [
            {
                title: "Introduction",
                headerSize: 1,
                content: {
                    markdown: 
\`Most application users prefer to find the solution by themselves instead of contacting support.
This is why every application should have a documentation page, or even a documentation portal, for the user to learn and discover the app's features.

Most of the existing solutions are [static site generators](./alternatives#static-site-generators). The downside is of this approach is it needs to be in a seperated application.

There are [some solutions](./alternatives#embedded-documentation) that allows the documentation to co-exists in your existing application but they lack search capabilities. 
\`
                },
            },
            {
                title: "What is vue-elastic-docs",
                headerSize: 2,
                content: [
                    { markdown: 
\`This library can add the documentation within your vue application by maintaining the SPA and by providing elastic search within the browser.

There is no need for additional services or db access to search through the documentation, everything is done localy.
\` },
                    { imageUrl: "" }
                ]
            },
            {
                title: "Ugly grade (How far from elegance is it?)",
                headerSize: 3,
                content: [
                    { markdown: 
\`It's around in the middle.
To skip a building step, and to allow search, all the documentation is placed on one big \`\`\`Array\`\`\`. 

You can break that down to seperate files and maybe use some well formed helper functions, but it won't change the fact that the core of this documentation system is a **big fat ugly** array.  
\` },
                    { imageUrl: "" }
                ]
            }
        ]
    },
    {
        title: "Second Page"
    },
    {
        title: "Third Page"
    }

    ]

}
` }
                ]
            }
        ]
    },
    {
        title: "Second Page"
    },
    {
        title: "Third Page"
    }

    ]

} as ElasticDocsModel;
export default defaultValue;