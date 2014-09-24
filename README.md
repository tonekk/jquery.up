jquery.up
=========

Go up multiple parent levels in one simple function.

You know there cases when you have to things like this:
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
