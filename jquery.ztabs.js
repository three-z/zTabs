/*
== zTabs ==
Version: 1.0.1
Plugin URI: https://github.com/three-z/zTabs
Author: Vladimir Kolpakov
Author URI: http://kolpakov.online/
License: MIT License (MIT)
*/

(function($){

	$.fn.zTabs = function(options) {

		var settings = $.extend({
			'switchersActiveClass': 'active',
			'contentActiveClass': 'active',
			'captionItem': '.tabs-caption li',
			'contentItem': '.tabs-content'
		}, options);

		return this.each(function() {

			var $tabsContainer = $(this);

			$tabsContainer.on('click', settings['captionItem'] + ':not(.' + settings['activeClass'] + ')', function() {

				$(this).addClass(settings['switchersActiveClass']).siblings().removeClass(settings['switchersActiveClass'])
				$tabsContainer.find(settings['contentItem']).removeClass(settings['contentActiveClass']).eq($(this).index()).addClass(settings['contentActiveClass']);
			});
		});
	};
})(jQuery);