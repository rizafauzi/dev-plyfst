const pkg = require('./package')
const path = require('path')

module.exports = {
	mode: 'universal',

	/*
	** Headers of the page
	*/
	head: {
		title: 'Playfest 2020',
		meta: [
			{ charset: 'utf-8' },
			{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
			{ hid: 'description', name: 'description', content: 'Playfest Development' }
		],
		link: [
			{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
		]
	},

	/*
	** Customize the progress-bar color
	*/
	loading: { color: '#fff' },

	/*
	** Global CSS
	*/
	css: ['~/assets/font.css', '~/assets/scss/tailwind.scss'],
  
  modules: [
	 'nuxt-purgecss',
	//  'nuxt-svg-loader',
  ],
  
  purgeCSS: {
    mode: 'postcss'
  },

	/*
	** Plugins to load before mounting the App
	*/
	plugins: [
	],

	/*
	** Nuxt.js modules
	*/

	auth: {
		redirect: {
			login: '/',
			logout: '/',
			home: '/home'
		},
		strategies: {
			local: {
				endpoints: {
					login: {
						url: "/user/login",
						method: "post",
						propertyName: "data.token",
					},
					logout: false,
					user: false,
				},
				tokenType: '',
				tokenName: 'x-auth',
				autoFetchUser: false
			},
		},
	},
	
	modules: [
		// Doc: https://github.com/nuxt-community/axios-module#usage
		'@nuxtjs/tailwindcss',
		'@nuxtjs/auth',
		'@nuxtjs/axios',
		'@nuxtjs/bulma',
		[
			'@nuxtjs/google-tag-manager',
			{
				id: 'GTM-WKW55SM',
				pageTracking: false
			}
		],
		'@nuxtjs/markdownit'
	],
	markdownit: {
		injected: true,
	},
	/*
	** Axios module configuration
	*/
	axios: {
		baseURL: 'https://89f9b6ee-c9d1-4fe6-97ee-23885f153b11.mock.pstmn.io'
		// See https://github.com/nuxt-community/axios-module#options
	},



	/*
	** Build configuration
	*/

	
	build: {
		/*
		** You can extend webpack config here
		*/
		extend(config, ctx) {
			// Run ESLint on save
			if (ctx.isDev && ctx.isClient) {
				config.module.rules.push({
					enforce: 'pre',
					test: /\.(js|vue)$/,
					loader: 'eslint-loader',
					exclude: /(node_modules)/
				})
			}
		},

		extend: (config) => {
      const svgRule = config.module.rules.find(rule => rule.test.test('.svg'));

      svgRule.test = /\.(png|jpe?g|gif|webp)$/;

      config.module.rules.push({
        test: /\.svg$/,
        use: ['babel-loader', 'vue-svg-loader'],
      });
		},
		
		extractCSS: true,
    postcss: {
      plugins: {
        tailwindcss: path.resolve(__dirname, './tailwind.config.js')
      }
    }
	}
}
