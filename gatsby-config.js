module.exports = {
    siteMetadata: {
        title: `Picklu`,
        description: `My developer portfolio`,
        author: `picklu`
    },
    plugins: [
        'gatsby-transformer-json',
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `data`,
                path: `${__dirname}/data/`,
            },
        },
        {
            resolve: 'gatsby-plugin-web-font-loader',
            options: {
                google: {
                    families: ['Droid Sans', 'Droid Serif']
                }
            }
        },
        `gatsby-plugin-sass`
    ]
}