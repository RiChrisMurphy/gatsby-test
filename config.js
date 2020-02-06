const config = {
	"gatsby": {
		"pathPrefix": "/",
		"siteUrl": "http://localhost:8000",
		"gaTrackingId": null
	},
	"header": {
		"logo": "https://graphql-engine-cdn.hasura.io/learn-hasura/assets/homepage/favicon.png",
		"logoLink": "https://learn.hasura.io",
		"title": "Omaze Public Api Docs",
		"githubUrl": "https://github.com/RiChrisMurphy/gatsby-test",
		"helpUrl": "",
		"tweetText": "",
		"links": [
			{ "text": "", "link": ""}
		],
		"search": {
			"enabled": false,
			"indexName": "",
			"algoliaAppId": process.env.GATSBY_ALGOLIA_APP_ID,
			"algoliaSearchKey": process.env.GATSBY_ALGOLIA_SEARCH_KEY,
			"algoliaAdminKey": process.env.ALGOLIA_ADMIN_KEY
		}
	},
	"sidebar": {
		"forcedNavOrder": [
			"/introduction",
				"/codeblock",
				"/authentication",
				"/changelog"
		],
    	"collapsedNav": [
      		"/codeblock"
    	],
		"links": [
			{ "text": "Omaze", "link": "https://www.omaze.com"},
			{ "text": "Developer Console", "link": "https://dev.omaze.com/public/graphql"}
		],
		"frontline": false,
		"ignoreIndex": true,
	},
	"siteMetadata": {
		"title": "Omaze Public Api Docs",
		"description": "Documentation built with mdx. Powering public_api.prd.omaze.com ",
		"ogImage": null,
		"docsLocation": "https://github.com/RiChrisMurphy/gatsby-test/tree/master/content",
		"favicon": "https://graphql-engine-cdn.hasura.io/img/hasura_icon_black.svg"
	},
	"pwa": {
		"enabled": false, // disabling this will also remove the existing service worker.
		"manifest": {
			"name": "Gatsby Gitbook Starter",
			"short_name": "GitbookStarter",
			"start_url": "/",
			"background_color": "#6b37bf",
			"theme_color": "#6b37bf",
			"display": "standalone",
			"crossOrigin": "use-credentials",
			icons: [
				{
					src: "src/pwa-512.png",
					sizes: `512x512`,
					type: `image/png`,
				},
			],
		},
	}
};

module.exports = config;
