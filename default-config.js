'use strict';

require('dotenv').config({silent: true});
const deepFreeze = require('deep-freeze');

// Require the stores and/or services you want to use
// const memoryStore = require('./stores/memory');
// const redisStore = require('./stores/redis');
// const redisSearchStore = require('./stores/redis-search');
// const identityService = require('./services/identity');
// const catalogService = require('./services/catalog');
// const eventsService = require('./services/events');
// const jsonAPIService = require('./services/json-api');
// const authorizationService = require('./services/authorization');
// const eventsService = require('./services/events');

// The following should be set in your environment
const port = process.env.PORT || 3000;
// const jwtSecret = process.env.JWT_SECRET || 'secret';
const dataDir = process.env.DATA_DIR || './test/data';
const environment = process.env.NODE_ENV || 'development';

const isDevOrTest = (environment === 'development' || environment === 'test');

// const redis = (isDevOrTest) ? require('fakeredis').createClient() : require('redis').createClient(process.env.REDIS_URI);

module.exports = deepFreeze({
	env: environment,
	port: port,
	dataDir: dataDir,
	seed: isDevOrTest

	// oddcast: {
		// override the default oddcast options/transports here

		// events: {
		// 	options: {}
		// 	transport: oddcast.inprocessTransport()
		// },

		// commands: {
		// 	options: {}
		// 	transport: oddcast.inprocessTransport()
		// },

		// requests: {
		// 	options: {},
		// 	transport: oddcast.inprocessTransport()
		// }

	// },

	// stores: [
		// override the default store (./stores/default-store) or add your own here

		// {
		// 	service: memoryStore,
		// 	options: {types: ['platform', 'channel']}
		// },

		// {
		// 	service: redisStore,
		// 	options: {redis, types: ['collection', 'promotion', 'video', 'view']}
		// },

		// {
		// 	service: redisSearchStore,
		// 	options: {redis, types: ['collection', 'video']}
		// }

	// ],

	// services: [
		// override default services and add your own here

		// {
		// 	service: identityService,
		// 	options: {jwtSecret: jwtSecret}
		// },

		// {
		// 	service: catalogService,
		// 	options: {}
		// },

		// {
		// 	service: eventsService,
		// 	options: {
		// 		redis,
		// 		analyzers: [
		// 			/* eslint-disable */
		// 			new eventsService.analyzers.googleAnalytics({trackingId: process.env.GA_TRACKING_ID}),
		// 			new eventsService.analyzers.mixpanel({apiKey: process.env.MIXPANEL_API_KEY, timeMultiplier: 1000})
		// 			/* eslint-enable */
		// 		]
		// 	}
		// },

		// {
		// 	service: jsonAPIService,
		// 	options: {}
		// }

	// ],

	// middleware: function (app) {
	// 	// override default middleware and add your own here

	// 	// Decode the JWT set on the X-Access-Token header and attach to req.identity
	// 	app.use(identityService.middleware.verifyAccess({header: 'x-access-token'}));

	// 	// Decode the JWT set on the Authorization header and attach to req.authorization
	// 	// app.use(authorizationService.middleware({header: 'Authorization'}));

	// 	// Attach auth endpoints
	// 	// POST /auth/platform/code
	// 	// POST /auth/user/authorize
	// 	// POST /auth/platform/token
	// 	// GET /auth/user/:clientUserID/platforms
	// 	// DELETE /auth/user/:clientUserID/platforms/:platformUserProfileID
	// 	// app.use('/auth', authorizationService.router());

	// 	// Attach events endpoint
	// 	// POST /events
	// 	// app.use('/events', eventsService.router());

	// 	// Attach config endpoint
	// 	// GET /config
	// 	app.use('/', identityService.router());

	// 	// Attach catalog endpoints with specific middleware, the authorization service is passed in as middleware to protect/decorate the entities as well
	// 	// GET /videos
	// 	// GET /videos/:id
	// 	// GET /collections
	// 	// GET /collections/:id
	// 	// GET /views
	// 	// GET /views/:id
	// 	app.use(catalogService.router({middleware: []}));

	// 	app.use(eventsService.router());
	// }
});
