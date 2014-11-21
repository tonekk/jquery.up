(function(window, document, $) {

  $.fn.extend({
    up: function(levels) {
      for (var i = levels, self = this; i > 0; i--) {
        self = self.parent();
      }
      return self;
    }
  });

})(window, window.document, jQuery);
