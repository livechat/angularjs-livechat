(function(root, factory) {
  // AMD
  if (typeof define === 'function' && define.amd) {
    define(['angular'], function(angular) {
      return factory(root, angular, root.__lc);
    });
  }
  // CommonJS and Node.js module support
  else if (typeof exports !== 'undefined') {
    exports = module.exports = factory({}, require('angular'), root.__lc);
  }
  // Angular
  else if (angular) {
    factory(root, root.angular, root.__lc);
  }
}(this, function(global, angular, __lc) {
  'use strict';

  angular
    .module('ngLiveChat', [])
    .directive('livechat', function() {
      return {
        scope: {
          license: '@'
        },
        bindToController: true,
        controllerAs: 'vm',
        controller: ['$window', function($window) {

          $window.__lc = __lc || {};
          $window.__lc.license = this.license;

          (function() {
            var lc = $window.document.createElement('script'); lc.type = 'text/javascript'; lc.async = true;
            lc.src = '//cdn.livechatinc.com/tracking.js';
            var s = $window.document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(lc, s);
          })();

        }]
      };
    });

  return angular.module('ngLiveChat');
}));
