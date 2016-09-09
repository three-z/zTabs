/*
== zTabs ==
Version: 1.0.0
Plugin URI: https://github.com/three-z/zTabs
Author: Vladimir Kolpakov
Author URI: http://kolpakov.online/
License: MIT License (MIT)
*/

(function($){

	$.fn.zTabs = function(options) {

		var settings = $.extend({
			'activeClass': 'active',
			'captionItem': '.tabs-caption li',
			'contentItem': '.tabs-content'
		}, options);

		return this.each(function() {

			var $tabsContainer = $(this);

			$tabsContainer.on('click', settings['captionItem'] + ':not(.' + settings['activeClass'] + ')', function() {

				$(this).addClass(settings['activeClass']).siblings().removeClass(settings['activeClass'])
				$tabsContainer.find(settings['contentItem']).removeClass(settings['activeClass']).eq($(this).index()).addClass(settings['activeClass']);
			});
		});
	};
})(jQuery);