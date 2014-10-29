jquery.up
=========

[![License](http://img.shields.io/:license-mit-blue.svg)](http://tonekk.mit-license.org)

Go up multiple parent levels in one simple function.

You know there are cases when you have to do things like this:
```js
// Go up 4 levels of parent()
var foo = $('#element').parent().parent().parent().parent();
```

Ugly, huh?

How about:
```js
// Go up 4 levels of parent()
var foo = $('#element').up(4);
```

Just include the plugin and go!
