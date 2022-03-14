import { createBootstrapper } from '~/utils/bootstrapper.js';

export const pythonPackagesBootstrapper = createBootstrapper({
	name: 'Python packages',
	todo: true,
	bootstrap() {
		// todo: install useful python packages
	},
});

export default pythonPackagesBootstrapper;
