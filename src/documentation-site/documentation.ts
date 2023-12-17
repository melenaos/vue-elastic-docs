import ElasticDocsModel from "../models/ElasticDocsModel";
// https://v2.vuepress.vuejs.org/reference/plugin/docsearch.html
// https://github.com/egoist/docute
// https://vue-community.org/guide/ecosystem/documentation.html#documentation-websites
import cssOptions from './CssOptions'
const defaultValue = {
    baseUrl: 'docs',
    pages: [{
        title: "Introduction",
        sections: [
            {
                title: "Introduction",
                headerSize: 1,
                content: {
                    markdown:
                        `Most application users prefer to find the solution by themselves instead of contacting support.
This is why every application should have a documentation page, or even better a documentation portal, for the user to learn and discover the app's features.

Most of the existing solutions are [static site generators](./alternatives#static-site-generators). The downside is of this approach is it needs to be in a seperated application.

There are [some solutions](./alternatives#embedded-documentation) that allows the documentation to co-exists in your existing application but they lack search capabilities. 
`
                },
            },
            {
                title: "What is vue-elastic-docs",
                headerSize: 2,
                content: [
                    {
                        markdown:
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
                    {
                        markdown:
                            `It's around in the middle.
To skip a building step, and to allow search, all the documentation is placed in one big \`\`\`Array\`\`\`. 

You can break that down to seperate files and maybe use some well formed helper functions, but it won't change the fact that the core of this documentation system is a **big fat ugly** array.  
` },
                    {
                        lang: 'javascript',
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
    title: "Alternatives",
        sections: [
            {
                title: "Documentation portals",
                headerSize: 1,
                content: [{
                    markdown:\`
**vue-elastic-docs** is a great way to add a documentation portal within your existing VueJs application. 
It uses your existing \`router\` and can seamlessly integrate to the application providing search, indexing, and viewing the user documentation.  
\`
                },
                {
                    routerLinkTo:'./getting-started',
                    title: 'Getting Started'
                }
            ]
            },

    ]

}
` }
                ]
            }
        ]
    },
    {
        title: "Getting started",
        sections: [
            {
                content: {
                    text: 'Second page'
                }
            }
        ]
    },
    {
        title: "Alternatives",
        sections: [
            {
                title: "Documentation portals",
                headerSize: 1,
                content: [{
                    markdown: `
**vue-elastic-docs** is a great way to add a documentation portal within your existing VueJs application. 
It uses your existing \`router\` and can seamlessly integrate to the application providing search, indexing, and viewing the user documentation.  
`
                },
                {
                    routerLinkTo: './getting-started',
                    title: 'Getting Started',
                    cssClass: 'button'
                }
                ]
            },
            {
                title: "Runtime driven",
                headerSize: 2,
                content: {
                    markdown: `
The following projects are runtime driven and working alongside with your application without the need to add a building step.

Google ranking is not affected by JS generated text, as long as the data exists without an extra request.

`
                }
            },
            {
                title: "Docute",
                headerSize: 3,
                content: [
                    {
                        markdown:
                            `[Docute](https://docute.egoist.dev/) is basically a JavaScript file that fetches Markdown files and renders them as a single-page application.

It's totally runtime-driven so there's no server-side components involved which also means there's no build process. 

- Unfortunate, the this project doesn't support searching `
                    },

                ]
            },
            {
                title: "Docsify",
                headerSize: 3,
                content: [
                    {
                        markdown:
                            `[Docsify](https://docsify.js.org/) generates your documentation website on the fly. 
It does not generate static html files, instead, it smartly loads and parses your Markdown files and displays them as a website.
                            
- This project supports search
- This is a complete website, it cannot be embedded within an existing application`
                    },

                ]
            },


            {
                title: "Static site generators",
                headerSize: 2,
                content: {
                    markdown: `
The portals created with static site generators are super fast because they are stored in HTML files. 
The complete portal is build-time generated, some projects provides SPA such as VuePress.

The drawback is that it needs to be in a separate application.`
                }
            },
            {
                title: "VuePress",
                headerSize: 3,
                content: [
                    {
                        markdown: '[VuePress](https://vuepress.vuejs.org/) is a static site generator focused on technical documentation'
                    },
                    {
                        text: 'The content is written in markdown files, compiling in SPA on build time. Each page is rendered into separate HTML files having great loading time and SEO ranking.'
                    },
                ]
            },




        ]
    }

    ]

} as ElasticDocsModel;
export default defaultValue;