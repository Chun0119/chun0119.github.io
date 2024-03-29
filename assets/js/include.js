(function ($) {
  var includes = $('[data-include]')
  $.each(includes, function () {
    var file = '/components/' + $(this).data('include') + '.html'
    $(this).load(file, function () {

      var $window = $(window),
        $body = $('body'),
        $header = $('#header'),
        $banner = $('#banner');

      // Scrolly.
      $('.scrolly').scrolly({
        offset: function () {
          return $header.height() - 2;
        }
      });

      if ($(this).data('include') == 'header') {

        // Header.
        if ($banner.length > 0
          && $header.hasClass('alt')) {

          $window.on('resize', function () {
            $window.trigger('scroll');
          });

          $window.on('load', function () {

            $banner.scrollex({
              bottom: $header.height() + 10,
              terminate: function () { $header.removeClass('alt'); },
              enter: function () { $header.addClass('alt'); },
              leave: function () { $header.removeClass('alt'); $header.addClass('reveal'); }
            });

            window.setTimeout(function () {
              $window.triggerHandler('scroll');
            }, 100);

          });

        }
      } else if ($(this).data('include') == 'menu' || $(this).data('include') == 'scrolly_menu') {

        // Menu.
        var $menu = $('#menu'),
          $menuInner;

        $menu.wrapInner('<div class="inner"></div>');
        $menuInner = $menu.children('.inner');
        $menu._locked = false;

        $menu._lock = function () {

          if ($menu._locked)
            return false;

          $menu._locked = true;

          window.setTimeout(function () {
            $menu._locked = false;
          }, 350);

          return true;

        };

        $menu._show = function () {

          if ($menu._lock())
            $body.addClass('is-menu-visible');

        };

        $menu._hide = function () {

          if ($menu._lock())
            $body.removeClass('is-menu-visible');

        };

        $menu._toggle = function () {

          if ($menu._lock())
            $body.toggleClass('is-menu-visible');

        };

        $menuInner
          .on('click', function (event) {
            event.stopPropagation();
          })
          .on('click', 'a', function (event) {

            var href = $(this).attr('href');

            event.preventDefault();
            event.stopPropagation();

            // Hide.
            $menu._hide();

            // Redirect.
            window.setTimeout(function () {
              window.location.href = href;
            }, 250);

          });

        $menu
          .appendTo($body)
          .on('click', function (event) {

            event.stopPropagation();
            event.preventDefault();

            $body.removeClass('is-menu-visible');

          })
          .append('<a class="close" href="#menu">Close</a>');

        $body
          .on('click', 'a[href="#menu"]', function (event) {

            event.stopPropagation();
            event.preventDefault();

            // Toggle.
            $menu._toggle();

          })
          .on('click', function (event) {

            // Hide.
            $menu._hide();

          })
          .on('keydown', function (event) {

            // Hide on escape.
            if (event.keyCode == 27)
              $menu._hide();

          });

      }
    })
  })
})(jQuery);