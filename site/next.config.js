const withCSS = require('@zeit/next-css')

module.exports = withCSS({
    //cssModules: true,
    /*
    webpack(config, options) {
        config.module.rules.push({
            test: /\.css$/,
            use: ['css-loader']
        })
        return config
    }*/
})