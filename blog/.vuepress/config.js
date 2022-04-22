module.exports = {
	title: 'pfLiu',
	head: [
		['link', {
			rel: 'icon',
			href: '/favicon.ico'
		}]
	],
	smoothScroll: true,
	plugins: [
		[
			'@vuepress/blog',
			{
				directories: [{
						id: 'post',
						dirname: '_posts',
						path: '/',
						pagination: {
							lengthPerPage: 10
						},

					}
				],
				frontmatters: [{
					// Unique ID of current classification
					id: 'tag',
					// Decide that the frontmatter keys will be grouped under this classification
					keys: ['tag'],
					// Path of the `entry page` (or `list page`)
					path: '/tag/',
					// Layout of the `entry page`
					layout: 'Tags',
					// Layout of the `scope page`
					scopeLayout: 'Tag'
				}]
			}
		]
	],
	theme: '@vuepress/theme-blog',
	locales: {
		'/': {
			lang: 'zh-CN'
		}
	},
	themeConfig: {
		displayAllHeaders: true,
		nav: [{
				text: 'Home',
				link: '/'
			},
			{
				text: 'Tags',
				link: '/tag/'
			},
			{
				text: 'Github',
				link: 'https://github.com/lppppppf'
			}
		],
		footer: {
			contact: [{
				type: 'github',
				link: 'https://github.com/lppppppf'
			}]

		}
	}
}