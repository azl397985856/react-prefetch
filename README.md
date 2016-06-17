
# React-Prefetch

A library to prefetch resource base on react.

## Installation

1. clone repository
```
$ git clone https://github.com/azl397985856/react-prefetch.git
```
2. install modules
```
$ npm install
```
## Introduce

We need lazy load to avoid loading redundant resouce.Also we need prefetch to make our web application more friendly by user behavior. 
We just add mouse over listener now, indicating the potential purpose to click. which costs at least dozens of mill-seconds.So we can load the prefetch resouces.
We will add more hook to detct the user behavior,for example scrolling at follow-up changlog 

## Quick Start

```js
var React = require('react');
var RP = require('react-prefetch');
onCapture(url) {
	console.log(url);	
};
let settings = {
	name: 'PreRender',
	selector: ['body'],
	attributes: ['href'],
	prefetchPage: true
};
React.render(
    <div>
     <RP onCapture={onCapture} setting={settings}/>
    </div>
document.getElementById('content')
);

```

## Notice

default setting goes to be {
	name: 'PreRender',
	selector: ['body'],
	attributes: ['href'],
	prefetchPage: false
},
you can override it according to your preference.
if you'r using the traditional webapp which has many entries, you may need the prefetchPage option(closed by default).
if you'r diving into SPA, and perhaps you'r using react-router. Keep the lifeCycle of the react-router in mind may make it easier for you.

## License

  [MIT](LICENSE)

