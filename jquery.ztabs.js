/*
== zTabs ==
Version: 1.0.4
Plugin URI: https://github.com/three-z/zTabs
Author: Vladimir Kolpakov
Author URI: http://kolpakov.online/
License: MIT License (MIT)
*/

(function($){

	$.fn.zTabs = function(options) {

		var settings = $.extend({
			'switcherActiveClass': 'active',
			'contentActiveClass': 'active',
			'switcherItem': '.tabs-switcher li',
			'contentItem': '.tabs-content'
		}, options);

		return this.each(function() {

			var $tabsContainer = $(this);

			$tabsContainer.on('click', settings['switcherItem'] + ':not(.' + settings['switcherActiveClass'] + ') a', function(e) {

				e.preventDefault();

				$(this).closest(settings['switcherItem']).addClass(settings['switcherActiveClass']).siblings().removeClass(settings['switcherActiveClass']);
				$tabsContainer.find(settings['contentItem']).removeClass(settings['contentActiveClass']).eq($(this).closest(settings['switcherItem']).index()).addClass(settings['contentActiveClass']);
			});
		});
	};
})(jQuery);