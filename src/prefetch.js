import React from 'react';

let settings = {
	name: 'PreRender',
	selector: ['body'],
	attributes: ['href']
};
const Prefetch = React.createClass({
	propTypes() {
		return {
			onCapture: React.PropsType.func,
			settings: React.PropsType.object
		};
	},
	getInitialState() {
		return {
		};
	},
	componentWillReceiveProps() {

	},
	remove() {
		const link = document.getElementById(this.options.linkId);
		if (link && link.parentNode) {
			link.parentNode.removeChild(link);
		}
	},
	prerender(href) {
		this.remove();

		if (href) {
			const link = document.createElement('link');
			link.setAttribute('id', this.options.linkId);
			link.setAttribute('rel', 'prefetch');
			link.setAttribute('href', href);

			const head = document.getElementsByTagName('head')[0];
			if (head) {
				head.appendChild(link);
			}
		}
	},
	handleEvent(e) {
		const target = e.target || e.srcElement;
		const options = this.options;

		for (let j = 0; options.attributes && j < options.attributes.length; j++) {
			const attr = options.attributes[j];
			const url = target.getAttribute(attr);
			if (url) {
				this.props.onCapture(url);
			}
			if (settings.prefetchPage) {
				this.prerender(url);
			}
			break;
		}
	},
	componentWillMount() {
		if (!document.querySelectorAll) {
			window.console &&
			window.console.log('Prerender: Browser is not supported (no querySelectorAll)');
			return;
		}
		if (this.props.settings) {
			settings = this.props.settings
		}
		const options = this.options = {
			name: defaults.name,
			selector: settings && settings.selector,
			attributes: settings && settings.attributes,
			linkId: defaults.name.toLowerCase()
		};
		// Make it an array if a string is passed
		if (Array.isArray && !Array.isArray(options.selector)
			|| !(options.selector instanceof Array)) {
			options.selector = [options.selector];
		}

		// Make it an array if a string is passed
		if (Array.isArray && !Array.isArray(options.attributes)
			|| !(options.attributes instanceof Array)) {
			options.attributes = [options.attributes];
		}

		const elements = document.querySelectorAll(options.selector.join(', '));

		for (let i = 0; elements && i < elements.length; i++) {
			elements[i].addEventListener('mouseover', (e) => {
				this.handleEvent(e);
			});
		}
	// There is some customization included:
	// opts.selector: A String or an Array that includes selector(s) for which prefetch.js will attach.
	//                When prefetch.js is attached to such an element it will listen for mousehovers on
	//                the children and append a prefetch link if the child has one of the specified attributes.
  },
  render() {
    return (
      <div>
      </div>
    );
  }
});

export default Prefetch;