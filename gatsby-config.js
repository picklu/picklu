module.exports = {
    siteMetadata: {
        title: `Picklu`,
        description: `My developer portfolio`,
        author: `picklu`
    },
    plugins: [
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