import { resolve } from 'path'

export default {
	target: 'static',
	head: {
		title: 'nuxt-app',
		htmlAttrs: {
			lang: 'es'
		},
		meta: [
			{ charset: 'utf-8' },
			{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
			{ hid: 'description', name: 'description', content: '' }
		],
		link: [
			{ rel: 'icon', type: 'image/x-icon', href: './favicon.ico' }
		],
		script: [
			{

			}
		]
	},
	components: true,
	css: [
		
	],
	buildModules: [
	  '@nuxt/typescript-build',
	],
	router: {
		base: process.env.NODE_ENV === 'production'
		? "./"
		: ""
	},
	generate: {
		dir: 'docs',
		subFolders: false
	}
}