export function initialize(container) {
  // application.inject('route', 'foo', 'service:foo');
  container.injection('component', 'store', 'store:main');
  container.injection('component', 'router', 'router:main');
}

export default {
  name: 'component',
  initialize: initialize
};
	