(function(root, factory) {
  // AMD
  if (typeof define === 'function' && define.amd) {
    define(['angular'], function(angular) {
      return factory(root, angular, root.__lc);
    });
  } else if (typeof exports !== 'undefined') {
    // CommonJS and Node.js module support
    exports = module.exports = factory({}, require('angular'), root.__lc);
  } else if (angular) {
    // Angular
    factory(root, root.angular, root.__lc);
  }
})(this, function(global, angular, __lc) {
  'use strict';

  angular.module('ngLiveChat', []).directive('livechat', function() {
    return {
      scope: {
        license: '@'
      },
      bindToController: true,
      controllerAs: 'vm',
      controller: [
        '$window',
        function($window) {
          $window.__lc = __lc || {};
          $window.__lc.license = this.license;

          (function() {
            var lc = $window.document.createElement('script');
            lc.type = 'text/javascript';
            lc.async = true;
            lc.src = 'https://cdn.livechatinc.com/tracking.js';
            var s = $window.document.getElementsByTagName('script')[0];
            s.parentNode.insertBefore(lc, s);
          })();
        }
      ]
    };
  });

  return angular.module('ngLiveChat');
});
