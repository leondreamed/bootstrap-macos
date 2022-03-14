import { createBootstrapper } from '~/utils/bootstrapper.js';

export const safariBootstrapper = createBootstrapper({
	name: 'Safari',
	todo: true,
	bootstrap() {
		// todo: install useful safari extensions
	},
});

export default safariBootstrapper;
