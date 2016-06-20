
jQuery.extend(jQuery.easing, {
	def: 'easeOutQuad',
	swing: function (x, t, b, c, d) {
		return jQuery.easing[jQuery.easing.def](x, t, b, c, d);
	},
	easeInQuad: function (x, t, b, c, d) {
		return c * (t /= d) * t + b;
	},
	easeOutQuad: function (x, t, b, c, d) {
		return -c * (t /= d) * (t - 2) + b;
	},
	easeInOutQuad: function (x, t, b, c, d) {
		if ((t /= d / 2) < 1) return c / 2 * t * t + b;
		return -c / 2 * ((--t) * (t - 2) - 1) + b;
	},
	easeInCubic: function (x, t, b, c, d) {
		return c * (t /= d) * t * t + b;
	},
	easeOutCubic: function (x, t, b, c, d) {
		return c * ((t = t / d - 1) * t * t + 1) + b;
	},
	easeInOutCubic: function (x, t, b, c, d) {
		if ((t /= d / 2) < 1) return c / 2 * t * t * t + b;
		return c / 2 * ((t -= 2) * t * t + 2) + b;
	},
	easeInQuart: function (x, t, b, c, d) {
		return c * (t /= d) * t * t * t + b;
	},
	easeOutQuart: function (x, t, b, c, d) {
		return -c * ((t = t / d - 1) * t * t * t - 1) + b;
	},
	easeInOutQuart: function (x, t, b, c, d) {
		if ((t /= d / 2) < 1) return c / 2 * t * t * t * t + b;
		return -c / 2 * ((t -= 2) * t * t * t - 2) + b;
	},
	easeInQuint: function (x, t, b, c, d) {
		return c * (t /= d) * t * t * t * t + b;
	},
	easeOutQuint: function (x, t, b, c, d) {
		return c * ((t = t / d - 1) * t * t * t * t + 1) + b;
	},
	easeInOutQuint: function (x, t, b, c, d) {
		if ((t /= d / 2) < 1) return c / 2 * t * t * t * t * t + b;
		return c / 2 * ((t -= 2) * t * t * t * t + 2) + b;
	},
	easeInSine: function (x, t, b, c, d) {
		return -c * Math.cos(t / d * (Math.PI / 2)) + c + b;
	},
	easeOutSine: function (x, t, b, c, d) {
		return c * Math.sin(t / d * (Math.PI / 2)) + b;
	},
	easeInOutSine: function (x, t, b, c, d) {
		return -c / 2 * (Math.cos(Math.PI * t / d) - 1) + b;
	},
	easeInExpo: function (x, t, b, c, d) {
		return (t == 0) ? b : c * Math.pow(2, 10 * (t / d - 1)) + b;
	},
	easeOutExpo: function (x, t, b, c, d) {
		return (t == d) ? b + c : c * (-Math.pow(2, -10 * t / d) + 1) + b;
	},
	easeInOutExpo: function (x, t, b, c, d) {
		if (t == 0) return b;
		if (t == d) return b + c;
		if ((t /= d / 2) < 1) return c / 2 * Math.pow(2, 10 * (t - 1)) + b;
		return c / 2 * (-Math.pow(2, -10 * --t) + 2) + b;
	},
	easeInCirc: function (x, t, b, c, d) {
		return -c * (Math.sqrt(1 - (t /= d) * t) - 1) + b;
	},
	easeOutCirc: function (x, t, b, c, d) {
		return c * Math.sqrt(1 - (t = t / d - 1) * t) + b;
	},
	easeInOutCirc: function (x, t, b, c, d) {
		if ((t /= d / 2) < 1) return -c / 2 * (Math.sqrt(1 - t * t) - 1) + b;
		return c / 2 * (Math.sqrt(1 - (t -= 2) * t) + 1) + b;
	},
	easeInElastic: function (x, t, b, c, d) {
		var s = 1.70158;
		var p = 0;
		var a = c;
		if (t == 0) return b;
		if ((t /= d) == 1) return b + c;
		if (!p) p = d * .3;
		if (a < Math.abs(c)) {
			a = c;
			var s = p / 4;
		}
		else var s = p / (2 * Math.PI) * Math.asin(c / a);
		return -(a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p)) + b;
	},
	easeOutElastic: function (x, t, b, c, d) {
		var s = 1.70158;
		var p = 0;
		var a = c;
		if (t == 0) return b;
		if ((t /= d) == 1) return b + c;
		if (!p) p = d * .3;
		if (a < Math.abs(c)) {
			a = c;
			var s = p / 4;
		}
		else var s = p / (2 * Math.PI) * Math.asin(c / a);
		return a * Math.pow(2, -10 * t) * Math.sin((t * d - s) * (2 * Math.PI) / p) + c + b;
	},
	easeInOutElastic: function (x, t, b, c, d) {
		var s = 1.70158;
		var p = 0;
		var a = c;
		if (t == 0) return b;
		if ((t /= d / 2) == 2) return b + c;
		if (!p) p = d * (.3 * 1.5);
		if (a < Math.abs(c)) {
			a = c;
			var s = p / 4;
		}
		else var s = p / (2 * Math.PI) * Math.asin(c / a);
		if (t < 1) return -.5 * (a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p)) + b;
		return a * Math.pow(2, -10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p) * .5 + c + b;
	},
	easeInBack: function (x, t, b, c, d, s) {
		if (s == undefined) s = 1.70158;
		return c * (t /= d) * t * ((s + 1) * t - s) + b;
	},
	easeOutBack: function (x, t, b, c, d, s) {
		if (s == undefined) s = 1.70158;
		return c * ((t = t / d - 1) * t * ((s + 1) * t + s) + 1) + b;
	},
	easeInOutBack: function (x, t, b, c, d, s) {
		if (s == undefined) s = 1.70158;
		if ((t /= d / 2) < 1) return c / 2 * (t * t * (((s *= (1.525)) + 1) * t - s)) + b;
		return c / 2 * ((t -= 2) * t * (((s *= (1.525)) + 1) * t + s) + 2) + b;
	},
	easeInBounce: function (x, t, b, c, d) {
		return c - jQuery.easing.easeOutBounce(x, d - t, 0, c, d) + b;
	},
	easeOutBounce: function (x, t, b, c, d) {
		if ((t /= d) < (1 / 2.75)) {
			return c * (7.5625 * t * t) + b;
		}
		else if (t < (2 / 2.75)) {
			return c * (7.5625 * (t -= (1.5 / 2.75)) * t + .75) + b;
		}
		else if (t < (2.5 / 2.75)) {
			return c * (7.5625 * (t -= (2.25 / 2.75)) * t + .9375) + b;
		}
		else {
			return c * (7.5625 * (t -= (2.625 / 2.75)) * t + .984375) + b;
		}
	},
	easeInOutBounce: function (x, t, b, c, d) {
		if (t < d / 2) return jQuery.easing.easeInBounce(x, t * 2, 0, c, d) * .5 + b;
		return jQuery.easing.easeOutBounce(x, t * 2 - d, 0, c, d) * .5 + c * .5 + b;
	}
});

(function ($) {

	var types = ['DOMMouseScroll', 'mousewheel'];

	$.event.special.mousewheel = {
		setup: function () {
			if (this.addEventListener) for (var i = types.length; i;)
			this.addEventListener(types[--i], handler, false);
			else this.onmousewheel = handler;
		},

		teardown: function () {
			if (this.removeEventListener) for (var i = types.length; i;)
			this.removeEventListener(types[--i], handler, false);
			else this.onmousewheel = null;
		}
	};

	$.fn.extend({
		mousewheel: function (fn) {
			return fn ? this.bind("mousewheel", fn) : this.trigger("mousewheel");
		},

		unmousewheel: function (fn) {
			return this.unbind("mousewheel", fn);
		}
	});


	function handler(event) {
		var args = [].slice.call(arguments, 1),
			delta = 0,
			returnValue = true;

		event = $.event.fix(event || window.event);
		event.type = "mousewheel";

		if (event.wheelDelta) delta = event.wheelDelta / 120;
		if (event.detail) delta = -event.detail / 3;
		args.unshift(event, delta);

		return $.event.handle.apply(this, args);
	}

})(jQuery);

(function ($) {
	$.fn.lofJSidernews = function (settings) {
		return this.each(function () {
			new $.lofSidernews(this, settings);
		});
	}
	$.lofSidernews = function (obj, settings) {
		this.settings = {
			direction: '',
			mainItemSelector: 'li',
			navInnerSelector: 'ul',
			navSelector: 'li',
			navigatorEvent: 'click',
			wapperSelector: '.lof-main-wapper',
			interval: 4000,
			auto: true,
			maxItemDisplay: 5,
			startItem: 0,
			navPosition: 'vertical',
			navigatorHeight: 60,
			navigatorWidth: 250,
			duration: 710,
			navItemsSelector: '.lof-navigator li',
			navOuterSelector: '.lof-navigator-outer',
			isPreloaded: true,
			easing: 'easeInOutQuad'
		}
		$.extend(this.settings, settings || {});
		this.nextNo = null;
		this.previousNo = null;
		this.maxWidth = this.settings.mainWidth || 710;
		this.wrapper = $(obj).find(this.settings.wapperSelector);
		this.slides = this.wrapper.find(this.settings.mainItemSelector);
		if (!this.wrapper.length || !this.slides.length) return;
		if (this.settings.maxItemDisplay > this.slides.length) {
			this.settings.maxItemDisplay = this.slides.length;
		}
		this.currentNo = isNaN(this.settings.startItem) || this.settings.startItem > this.slides.length ? 0 : this.settings.startItem;
		this.navigatorOuter = $(obj).find(this.settings.navOuterSelector);
		this.navigatorItems = $(obj).find(this.settings.navItemsSelector);
		this.navigatorInner = this.navigatorOuter.find(this.settings.navInnerSelector);

		if (this.settings.navPosition == 'horizontal') {
			this.navigatorInner.width(this.slides.length * this.settings.navigatorWidth);
			this.navigatorOuter.width(this.settings.maxItemDisplay * this.settings.navigatorWidth);
			this.navigatorOuter.height(this.settings.navigatorHeight);

		}
		else {
			this.navigatorInner.height(this.slides.length * this.settings.navigatorHeight);

			this.navigatorOuter.height(this.settings.maxItemDisplay * this.settings.navigatorHeight);
			this.navigatorOuter.width(this.settings.navigatorWidth);
		}
		this.navigratorStep = this.__getPositionMode(this.settings.navPosition);
		this.directionMode = this.__getDirectionMode();


		if (this.settings.direction == 'opacity') {
			this.wrapper.addClass('lof-opacity');
			$(this.slides).css('opacity', 0).eq(this.currentNo).css('opacity', 1);
		}
		else {
			this.wrapper.css({
				'left': '-' + this.currentNo * this.maxSize + 'px',
				'width': (this.maxWidth) * this.slides.length
			});
		}


		if (this.settings.isPreloaded) {
			this.preLoadImage(this.onComplete);
		}
		else {
			this.onComplete();
		}

	}
	$.lofSidernews.fn = $.lofSidernews.prototype;
	$.lofSidernews.fn.extend = $.lofSidernews.extend = $.extend;

	$.lofSidernews.fn.extend({

		startUp: function (obj, wrapper) {
			seft = this;

			this.navigatorItems.each(function (index, item) {
				$(item).click(function () {
					seft.jumping(index, true);
					seft.setNavActive(index, item);
				});
				$(item).css({
					'height': seft.settings.navigatorHeight,
					'width': seft.settings.navigatorWidth
				});
			})
			this.registerWheelHandler(this.navigatorOuter, this);
			this.setNavActive(this.currentNo);

			if (this.settings.buttons && typeof (this.settings.buttons) == "object") {
				this.registerButtonsControl('click', this.settings.buttons, this);

			}
			if (this.settings.auto) this.play(this.settings.interval, 'next', true);

			return this;
		},
		onComplete: function () {
			setTimeout(function () {
				$('.preload').fadeOut(710);
			}, 400);
			this.startUp();
		},
		preLoadImage: function (callback) {
			var self = this;
			var images = this.wrapper.find('img');

			var count = 0;
			images.each(function (index, image) {
				if (!image.complete) {
					image.onload = function () {
						count++;
						if (count >= images.length) {
							self.onComplete();
						}
					}
					image.onerror = function () {
						count++;
						if (count >= images.length) {
							self.onComplete();
						}
					}
				}
				else {
					count++;
					if (count >= images.length) {
						self.onComplete();
					}
				}
			});
		},
		navivationAnimate: function (currentIndex) {
			if (currentIndex <= this.settings.startItem || currentIndex - this.settings.startItem >= this.settings.maxItemDisplay - 1) {
				this.settings.startItem = currentIndex - this.settings.maxItemDisplay + 2;
				if (this.settings.startItem < 0) this.settings.startItem = 0;
				if (this.settings.startItem > this.slides.length - this.settings.maxItemDisplay) {
					this.settings.startItem = this.slides.length - this.settings.maxItemDisplay;
				}
			}
			this.navigatorInner.stop().animate(eval('({' + this.navigratorStep[0] + ':-' + this.settings.startItem * this.navigratorStep[1] + '})'), {
				duration: 500,
				easing: 'easeInOutQuad'
			});
		},
		setNavActive: function (index, item) {
			if ((this.navigatorItems)) {
				this.navigatorItems.removeClass('active');
				$(this.navigatorItems.get(index)).addClass('active');
				this.navivationAnimate(this.currentNo);
			}
		},
		__getPositionMode: function (position) {
			if (position == 'horizontal') {
				return ['left', this.settings.navigatorWidth];
			}
			return ['top', this.settings.navigatorHeight];
		},
		__getDirectionMode: function () {
			switch (this.settings.direction) {
			case 'opacity':
				this.maxSize = 0;
				return ['opacity', 'opacity'];
			default:
				this.maxSize = this.maxWidth;
				return ['left', 'width'];
			}
		},
		registerWheelHandler: function (element, obj) {
			element.bind('mousewheel', function (event, delta) {
				var dir = delta > 0 ? 'Up' : 'Down',
					vel = Math.abs(delta);
				if (delta > 0) {
					obj.previous(true);
				}
				else {
					obj.next(true);
				}
				return false;
			});
		},
		registerButtonsControl: function (eventHandler, objects, self) {
			for (var action in objects) {
				switch (action.toString()) {
				case 'next':
					objects[action].click(function () {
						self.next(true)
					});
					break;
				case 'previous':
					objects[action].click(function () {
						self.previous(true)
					});
					break;
				}
			}
			return this;
		},
		onProcessing: function (manual, start, end) {
			this.previousNo = this.currentNo + (this.currentNo > 0 ? -1 : this.slides.length - 1);
			this.nextNo = this.currentNo + (this.currentNo < this.slides.length - 1 ? 1 : 1 - this.slides.length);
			return this;
		},
		finishFx: function (manual) {
			if (manual) this.stop();
			if (manual && this.settings.auto) {
				this.play(this.settings.interval, 'next', true);
			}
			this.setNavActive(this.currentNo);
		},
		getObjectDirection: function (start, end) {
			return eval("({'" + this.directionMode[0] + "':-" + (this.currentNo * start) + "})");
		},
		fxStart: function (index, obj, currentObj) {
			if (this.settings.direction == 'opacity') {
				$(this.slides).stop().animate({
					opacity: 0
				}, {
					duration: this.settings.duration,
					easing: this.settings.easing
				});
				$(this.slides).eq(index).stop().animate({
					opacity: 1
				}, {
					duration: this.settings.duration,
					easing: this.settings.easing
				});
			}
			else {
				this.wrapper.stop().animate(obj, {
					duration: this.settings.duration,
					easing: this.settings.easing
				});
			}
			return this;
		},
		jumping: function (no, manual) {
			this.stop();
			if (this.currentNo == no) return;
			var obj = eval("({'" + this.directionMode[0] + "':-" + (this.maxSize * no) + "})");
			this.onProcessing(null, manual, 0, this.maxSize).fxStart(no, obj, this).finishFx(manual);
			this.currentNo = no;
		},
		next: function (manual, item) {

			this.currentNo += (this.currentNo < this.slides.length - 1) ? 1 : (1 - this.slides.length);
			this.onProcessing(item, manual, 0, this.maxSize).fxStart(this.currentNo, this.getObjectDirection(this.maxSize), this).finishFx(manual);
		},
		previous: function (manual, item) {
			this.currentNo += this.currentNo > 0 ? -1 : this.slides.length - 1;
			this.onProcessing(item, manual).fxStart(this.currentNo, this.getObjectDirection(this.maxSize), this).finishFx(manual);
		},
		play: function (delay, direction, wait) {
			this.stop();
			if (!wait) {
				this[direction](false);
			}
			var self = this;
			this.isRun = setTimeout(function () {
				self[direction](true);
			}, delay);
		},
		stop: function () {
			if (this.isRun == null) return;
			clearTimeout(this.isRun);
			this.isRun = null;
		}
	})
})(jQuery)



function BuildContent(a, b, c) {
	return "<style type='text/css'>.bgcl,#menu a,.button,.button-2,ul#navigation li a,.lof-navigator li.active div{ background-color:#" + a + " !important;} .main-body, .box-border-shadow, .box-border,.button,#bodytext img, #menu a,ul.list-tab li.ui-tabs-selected,#pt { border-color:#" + a + "  !important;box-shadow: 0 0 2px #" + a + ",0px 0 2px #" + a + ",0px 0 2px #" + a + " !important;} .col-a1 .listz-news .info  {border-color: #" + a + "!important;} #pt a,.main-body a,.other-news h4 {color: #" + a + "!important;}.infobox-container .triangle-r{border-color: transparent transparent transparent #" + a + ";}.infobox-container .triangle-l{border-color:transparent #" + a + " transparent transparent;}#bodytext img{border-color:#" + a + "!important}</style>"
}

function RandomTheme() {
	var a = new Array(BuildContent("004A80", "1", "-4uk6JzKTfCs/TnYLZRVRm-I/AAAAAAAAAks/Ix_-GU_qY7g"), BuildContent("4C1548", "2", "-JZjj5Ire5AA/TnYLZdlDM6I/AAAAAAAAAkw/0y-bChZ2CHA"), BuildContent("105E15", "3", "-3W2SwJhf3IM/TnYLZQG9SAI/AAAAAAAAAk0/eusG_ow2q4o"), BuildContent("187ABD", "4", "-OI2N1rsy68M/TnYLfdi6cbI/AAAAAAAAAk4/VKQOJBOK4X8"), BuildContent("566D17", "5", "-r-4W-iEc3m8/TnYLgDNUVbI/AAAAAAAAAk8/J4337O-E394"), BuildContent("602E2E", "6", "-rcyEtzE68bM/TnYLgUTlQyI/AAAAAAAAAlA/eysW_i_YqDA"), BuildContent("006666", "7", "-KoGHkQCSids/TnYLplJW0iI/AAAAAAAAAlE/RJgnJx-RoJE"), BuildContent("64455A", "8", "-u5JLmTeSRZs/TnYLu5DcHaI/AAAAAAAAAlI/KPg1pOM0ycw"), BuildContent("77552E", "9", "-qukwpd6m-wc/TnYLwe7fyQI/AAAAAAAAAlM/FL66Ir4q5Co"), BuildContent("343492", "10", "-gwD13_MNpKI/TnYMMvHZILI/AAAAAAAAAlQ/AoufXanSMEM"), BuildContent("660066", "11", "-se32rKdIdd4/TnYMPkNAz_I/AAAAAAAAAlU/CpChdMpuYAM"), BuildContent("990033", "12", "-iMcsx2LYG9Q/TnYMQeItbBI/AAAAAAAAAlY/rdGQVAl2flA"), BuildContent("AA2709", "13", "-yo2Z85abuTs/TnYMTOr-ZoI/AAAAAAAAAlc/Q1fwbJ5e1Ow"), BuildContent("BA3962", "14", "-4I3O2zVQoUY/TnYMUQonSaI/AAAAAAAAAlg/jos-HcA7h3M"));
	var b = parseInt(Math.random() * 12);
	document.write(a[b])
}(function (a) {
	a.fn.dropmenu = function (b) {
		function n(b) {
			a(this).removeClass("open");
			if (a(this).prev().attr("class") == "selected") p.onHidden.call(this);
			a(this).prev().removeClass("selected")
		}

		function m() {
			var b = q.find(".submenu.open");
			a.each(b, function (c, d) {
				a(b[c]).css("z-index", "1");
				i(a(b[c]))
			})
		}

		function l(b) {
			b.hide(p.closeSpeed, function () {
				a(this).removeClass("open");
				a(this).prev().removeClass("selected")
			})
		}

		function k(b) {
			b.fadeOut(p.closeSpeed, function () {
				a(this).removeClass("open");
				a(this).prev().removeClass("selected")
			})
		}

		function j(a) {
			a.slideUp(p.closeSpeed, n)
		}

		function i(a) {
			p.onHide.call(a);
			switch (p.closeAnimation) {
			case "slide":
				j(a);
				break;
			case "fade":
				k(a);
				break;
			default:
				l(a);
				break
			}
		}

		function h(a) {
			a.addClass("open").show(p.openSpeed, function () {
				p.onShown.call(this)
			})
		}

		function g(a) {
			a.addClass("open").fadeIn(p.openSpeed, function () {
				p.onShown.call(this)
			})
		}

		function f(a) {
			a.addClass("open").slideDown(p.openSpeed, function () {
				p.onShown.call(this)
			})
		}

		function e(a) {
			switch (p.openAnimation) {
			case "slide":
				f(a);
				break;
			case "fade":
				g(a);
				break;
			default:
				h(a);
				break
			}
		}

		function d(b) {
			if (b.type == "mouseenter" || b.type == "click") {
				window.clearInterval(s);
				var c = a(b.target).parent().find(".submenu:not(:animated):not(.open)");
				if (c.html() == null) {
					c = a(b.target).parent().next(".submenu:not(:animated):not(.open)")
				}
				if (c.html() != null) {
					p.onShow.call(c);
					m();
					c.prev().addClass("selected");
					c.css("z-index", "90");
					c.stop().hide();
					e(c)
				}
			}
			if (b.type == "mouseleave" || b.type == "mouseout") {
				c = a(b.target).parents(".submenu");
				if (c.length != 1) {
					var c = a(b.target).parent().parent().find(".submenu");
					if (c.html() == null) {
						var c = a(b.target).parent().find(".submenu");
						if (c.html() == null) {
							var c = a(b.target).parent().parent().parent().find(".submenu")
						}
					}
				}
				if (c.html() != null) {
					if (p.closeDelay == 0) {
						c.parent().find("a").removeClass("selected");
						i(c)
					}
					else {
						window.clearInterval(s);
						s = setInterval(function () {
							window.clearInterval(s);
							i(c)
						}, p.closeDelay)
					}
				}
			}
		}

		function c() {
			var b = q.find(":has(li,div) > a").append('<span class="arrow"></span>');
			a.each(b, function (a, c) {
				if (b.eq(a).parent().is("li")) {
					b.eq(a).next().addClass("submenu").parent().addClass("haschildren")
				}
				else {
					b.eq(a).parent().find("ul").show()
				}
			});
			if (p.openClick) {
				q.find(".submenu").css("display", "none");
				q.find(":has(li,div) > a").parent().bind("mouseleave", d).bind("mouseenter", function () {
					window.clearInterval(s)
				});
				q.find("a span.arrow").bind("click", d)
			}
			else {
				q.find(":has(li,div) > a").bind("mouseenter", d).parent().bind("mouseleave", d).bind("mouseenter", function () {
					window.clearInterval(s)
				})
			}
		}
		var o = {
			openAnimation: "slide",
			closeAnimation: "slide",
			openClick: false,
			openSpeed: 500,
			closeSpeed: 700,
			closeDelay: 500,
			onHide: function () {},
			onHidden: function () {},
			onShow: function () {},
			onShown: function () {}
		};
		var p = a.extend({}, o, b);
		var q = this;
		var r = 0;
		var s = "";
		c();
		return this
	}
})(jQuery);
$(document).ready(function () {
	$("ul.list-number li").mouseover(function () {
		$(this).stop().animate({
			width: "350px"
		}, {
			queue: false,
			duration: 600,
			easing: "easeOutBounce"
		})
	});
	$("ul.list-number li").mouseout(function () {
		$(this).stop().animate({
			width: "230px"
		}, {
			queue: false,
			duration: 600,
			easing: "easeOutBounce"
		})
	})
});

$(document).ready(function () {
	$(".wrapper").append('<div id="gotop">Back to Top</div>');
	$(window).scroll(function () {
		if ($(window).scrollTop() != 0) {
			$("#gotop").fadeIn()
		}
		else {
			$("#gotop").fadeOut()
		}
	});
	$("#gotop").click(function () {
		$("html, body").animate({
			scrollTop: 0
		}, 500)
	})
});
jQuery(function () {
	jQuery(".boxMes").hide();
	jQuery("#vBox").flip({
		direction: "tb",
		color: "transparent",
		speed: 400,
		content: jQuery("#Flip"),
		onEnd: function () {
			press();
			doMessageBox(0, "", false)
		}
	})
});
(function (a) {
	function b(a) {
		a.elem.style[a.prop] = parseInt(a.now) + a.unit
	}
	var c, d, e;
	c = function (b) {
		for (var c = 0; c < b.parents().length; c++) {
			d = b.parents().get(c);
			e = a.browser.safari ? a(d).css("background") : a(d).css("background-color");
			if (e != "" && e != "transparent") {
				return e
			}
		}
	};
	jQuery.extend(jQuery.fx.step, {
		borderTopWidth: b,
		borderBottomWidth: b,
		borderLeftWidth: b,
		borderRightWidth: b
	});
	jQuery.fn.flip = function (b) {
		return this.each(function () {
			function d(a, b) {
				a.queue(function () {
					f.onBefore();
					a.html("").css(h[f.direction].start);
					a.dequeue()
				});
				a.animate(h[f.direction].first, f.speed);
				a.queue(function () {
					f.onAnimation();
					a.dequeue()
				});
				a.animate(h[f.direction].second, f.speed);
				a.queue(function () {
					b.css({
						backgroundColor: f.toColor,
						visibility: "visible"
					});
					var c = j();
					if (c) {
						b.html(c)
					}
					a.remove();
					f.onEnd();
					b.removeData("flipLock");
					a.dequeue()
				})
			}
			var e, f, g, h, i, j;
			e = a(this);
			if (e.data("flipLock")) {
				return false
			}
			else {
				e.data("flipLock", 1)
			}
			f = {
				width: e.width(),
				height: e.height(),
				bgColor: b.bgColor || e.css("background-color"),
				fontSize: e.css("font-size") || "12px",
				direction: b.direction || "tb",
				toColor: b.color || "#f00",
				speed: b.speed || 500,
				top: e.offset().top,
				left: e.offset().left,
				target: b.content || null,
				transparent: c(e) || "#fff",
				onBefore: b.onBefore ||
				function () {},
				onEnd: b.onEnd ||
				function () {},
				onAnimation: b.onAnimation ||
				function () {}
			};
			g = "flipClone_" + (new Date).getTime();
			e.css("visibility", "hidden").clone(true).appendTo("body").html("").css({
				visibility: "visible",
				position: "absolute",
				left: f.left,
				top: f.top,
				margin: 0,
				zIndex: 9999
			}).attr("id", g);
			h = {
				tb: {
					start: {
						fontSize: "0px",
						lineHeight: "0px",
						borderTopWidth: f.height,
						borderLeftWidth: "0px",
						borderRightWidth: "0px",
						borderBottomWidth: "0px",
						borderTopColor: f.bgColor,
						borderBottomColor: f.transparent,
						borderLeftColor: f.transparent,
						borderRightColor: f.transparent,
						borderStyle: "solid",
						height: "0px",
						width: f.width
					},
					first: {
						borderTopWidth: "0px",
						borderLeftWidth: f.height / 100 * 15,
						borderRightWidth: f.height / 100 * 15,
						borderBottomWidth: "0px",
						borderTopColor: "red",
						borderBottomColor: "red",
						borderLeftColor: f.transparent,
						borderRightColor: f.transparent,
						top: f.top + f.height / 2,
						left: f.left - f.height / 100 * 15
					},
					second: {
						borderBottomWidth: f.height,
						borderTopWidth: "0px",
						borderLeftWidth: "0px",
						borderRightWidth: "0px",
						borderTopColor: f.transparent,
						borderBottomColor: f.toColor,
						borderLeftColor: f.transparent,
						borderRightColor: f.transparent,
						top: f.top,
						left: f.left
					}
				},
				bt: {
					start: {
						fontSize: "0px",
						lineHeight: "0px",
						borderTopWidth: "0px",
						borderLeftWidth: "0px",
						borderRightWidth: "0px",
						borderBottomWidth: f.height,
						borderTopColor: f.transparent,
						borderBottomColor: f.bgColor,
						borderLeftColor: f.transparent,
						borderRightColor: f.transparent,
						borderStyle: "solid",
						height: "0px",
						width: f.width
					},
					first: {
						borderTopWidth: "0px",
						borderLeftWidth: f.height / 100 * 15,
						borderRightWidth: f.height / 100 * 15,
						borderBottomWidth: "0px",
						borderTopColor: "red",
						borderBottomColor: "red",
						borderLeftColor: f.transparent,
						borderRightColor: f.transparent,
						top: f.top + f.height / 2,
						left: f.left - f.height / 100 * 15
					},
					second: {
						borderTopWidth: f.height,
						borderLeftWidth: "0px",
						borderRightWidth: "0px",
						borderBottomWidth: "0px",
						borderTopColor: f.toColor,
						borderBottomColor: f.transparent,
						borderLeftColor: f.transparent,
						borderRightColor: f.transparent,
						top: f.top,
						left: f.left
					}
				},
				lr: {
					start: {
						width: "0px",
						fontSize: "0px",
						lineHeight: "0px",
						borderTopWidth: "0px",
						borderLeftWidth: f.width,
						borderRightWidth: "0px",
						borderBottomWidth: "0px",
						borderTopColor: f.transparent,
						borderBottomColor: f.transparent,
						borderLeftColor: f.bgColor,
						borderRightColor: f.transparent,
						borderStyle: "solid",
						height: f.height
					},
					first: {
						borderTopWidth: f.height / 100 * 10,
						borderLeftWidth: "0px",
						borderRightWidth: "0px",
						borderBottomWidth: f.height / 100 * 10,
						borderTopColor: f.transparent,
						borderBottomColor: f.transparent,
						borderLeftColor: "red",
						borderRightColor: "red",
						top: f.top - f.height / 100 * 10,
						left: f.left + f.width / 2
					},
					second: {
						borderTopWidth: "0px",
						borderLeftWidth: "0px",
						borderRightWidth: f.width,
						borderBottomWidth: "0px",
						borderTopColor: f.transparent,
						borderBottomColor: f.transparent,
						borderLeftColor: f.transparent,
						borderRightColor: f.toColor,
						top: f.top,
						left: f.left
					}
				},
				rl: {
					start: {
						width: "0px",
						fontSize: "0px",
						lineHeight: "0px",
						borderTopWidth: "0px",
						borderLeftWidth: "0px",
						borderRightWidth: f.width,
						borderBottomWidth: "0px",
						borderTopColor: f.transparent,
						borderBottomColor: f.transparent,
						borderLeftColor: f.transparent,
						borderRightColor: f.bgColor,
						borderStyle: "solid",
						height: f.height
					},
					first: {
						borderTopWidth: f.height / 100 * 10,
						borderLeftWidth: "0px",
						borderRightWidth: "0px",
						borderBottomWidth: f.height / 100 * 10,
						borderTopColor: f.transparent,
						borderBottomColor: f.transparent,
						borderLeftColor: "red",
						borderRightColor: "red",
						top: f.top - f.height / 100 * 10,
						left: f.left + f.width / 2
					},
					second: {
						borderTopWidth: "0px",
						borderLeftWidth: f.width,
						borderRightWidth: "0px",
						borderBottomWidth: "0px",
						borderTopColor: f.transparent,
						borderBottomColor: f.transparent,
						borderLeftColor: f.toColor,
						borderRightColor: f.transparent,
						top: f.top,
						left: f.left
					}
				}
			};
			i = e;
			j = function () {
				var a = f.target;
				return a && a.jquery ? a.html() : a
			};
			d(a("#" + g), i)
		})
	}
})(jQuery);
jQuery(document).ready(function () {
	jQuery(".bookmarks a.external").attr("target", "_blank");
	var a = jQuery(".bookmarks").height();
	var b = jQuery(".bookmarks ul.socials").height();
	if (b > a) {
		jQuery(".bookmarks-expand").hover(function () {
			jQuery(this).animate({
				height: b + "px"
			}, {
				duration: 400,
				queue: false
			})
		}, function () {
			jQuery(this).animate({
				height: a + "px"
			}, {
				duration: 400,
				queue: false
			})
		})
	}
	if (jQuery(".bookmarks-center") || jQuery(".bookmarks-spaced")) {
		var c = jQuery(".bookmarks").width();
		var d = jQuery(".bookmarks:first ul.socials li").width();
		var e = jQuery(".bookmarks:first ul.socials li").length;
		var f = Math.floor(c / d);
		var g = Math.min(f, e) * d;
		if (jQuery(".bookmarks-spaced").length > 0) {
			var h = Math.floor((c - g) / (Math.min(f, e) + 1));
			jQuery(".bookmarks ul.socials li").css("margin-left", h + "px")
		}
		else if (jQuery(".bookmarks-center".length > 0)) {
			var h = (c - g) / 2;
			jQuery(".bookmarks-center").css("margin-left", h + "px")
		}
	}
	jQuery(".bookmarks a.external").click(function () {
		var a = encodeURIComponent(window.location.href),
			b = "";
		if (jQuery("p.bookmarks-content").length) {
			b = encodeURIComponent(jQuery("p.bookmarks-content").text())
		}
		switch (this.parentNode.className) {
		case "twitter":
			this.href += "?status=RT+@your_twitter_id:+" + document.title + "+-+" + a;
			break;
		case "yahoobuzz":
			this.href += "?submitHeadline=" + document.title + "&submitUrl=" + a + "&submitSummary=" + b + "&submitCategory=science&submitAssetType=text";
			break;
		case "myspace":
			this.href += "?t=" + document.title + "&u=" + a;
			break;
		case "facebook":
			this.href += "?t=" + document.title + "&u=" + a;
			break;
		case "google":
			this.href += "?op=add&title=" + document.title + "&bkmk=" + a;
			break;
		case "zing":
			this.href += "?t=" + document.title + "&u=" + a;
			break
		}
	})
});
(function (a, b, c) {
	var d, e = a.getElementsByTagName(b)[0];
	if (a.getElementById(c)) {
		return
	}
	d = a.createElement(b);
	d.id = c;
	d.src = "//connect.facebook.net/vi_VN/all.js#xfbml=1";
	e.parentNode.insertBefore(d, e)
})(document, "script", "facebook-jssdk")


function is_utf8(a) {
	strlen = a.length;
	for (i = 0; i < strlen; i++) {
		ord = a.charCodeAt(i);
		if (ord < 128) continue;
		else if ((ord & 224) === 192 && ord > 193) n = 1;
		else if ((ord & 240) === 224) n = 2;
		else if ((ord & 248) === 240 && ord < 245) n = 3;
		else return false;
		for (c = 0; c < n; c++) if (++i === strlen || (a.charCodeAt(i) & 192) !== 128) return false
	}
	return true
}

function utf8_encode(a) {
	a = a.replace(/\r\n/g, "\n");
	utf8str = "";
	for (n = 0; n < a.length; n++) {
		c = a.charCodeAt(n);
		if (c < 128) {
			utf8str += String.fromCharCode(c)
		}
		else if (c > 127 && c < 2048) {
			utf8str += String.fromCharCode(c >> 6 | 192);
			utf8str += String.fromCharCode(c & 63 | 128)
		}
		else {
			utf8str += String.fromCharCode(c >> 12 | 224);
			utf8str += String.fromCharCode(c >> 6 & 63 | 128);
			utf8str += String.fromCharCode(c & 63 | 128)
		}
	}
	return utf8str
}

function hideButtons() {
	window.clearTimeout(showButtonsTimeout);
	document.getElementById("theBirdLtweet").style.display = "none";
	document.getElementById("theBirdLtweet").style.opacity = "0";
	document.getElementById("theBirdLtweet").style.filter = "alpha(opacity=0)";
	document.getElementById("theBirdLfollow").style.display = "none";
	document.getElementById("theBirdLfollow").style.opacity = "0";
	document.getElementById("theBirdLfollow").style.filter = "alpha(opacity=0)"
}

function showButtons(a, b) {
	birdPosY = parseInt(document.getElementById("theBird").style.top);
	birdPosX = parseInt(document.getElementById("theBird").style.left);
	if (a == 0 && document.getElementById("theBirdLtweet").style.display == "block") a = 100;
	if (birdIsFlying) a = 0;
	opacity = Math.round(a * 15);
	if (opacity < 0) opacity = 0;
	if (opacity > 100) opacity = 100;
	if (birdPosX < b - 300 || birdPosX < b / 2) {
		buttonPosX1 = birdPosX + spriteWidth - 15;
		buttonPosX2 = birdPosX + spriteWidth - 10
	}
	else {
		buttonPosX1 = birdPosX + 16 - parseInt(document.getElementById("theBirdLtweet").style.width);
		buttonPosX2 = birdPosX + 11 - parseInt(document.getElementById("theBirdLfollow").style.width)
	}
	buttonPosY1 = birdPosY - 4;
	buttonPosY2 = birdPosY - 4 + parseInt(document.getElementById("theBirdLtweet").style.height);
	document.getElementById("theBirdLtweet").style.left = buttonPosX1 + "px";
	document.getElementById("theBirdLtweet").style.top = buttonPosY1 + "px";
	document.getElementById("theBirdLtweet").style.display = "block";
	document.getElementById("theBirdLtweet").style.opacity = opacity / 100;
	document.getElementById("theBirdLtweet").style.filter = "alpha(opacity=" + opacity + ")";
	document.getElementById("theBirdLfollow").style.left = buttonPosX2 + "px";
	document.getElementById("theBirdLfollow").style.top = buttonPosY2 + "px";
	document.getElementById("theBirdLfollow").style.display = "block";
	document.getElementById("theBirdLfollow").style.opacity = opacity / 100;
	document.getElementById("theBirdLfollow").style.filter = "alpha(opacity=" + opacity + ")";
	if (opacity >= 100) return;
	a++;
	showButtonsTimeout = window.setTimeout("showButtons(" + a + "," + b + ")", 60)
}

function scareTheBird(a) {
	newTS = (new Date).getTime();
	if (scareTheBirdLastTime < newTS - scareTheBirdTime) {
		scareTheBirdCount = 1;
		scareTheBirdLastTime = newTS
	}
	else {
		scareTheBirdCount++;
		if (scareTheBirdCount >= scareTheBirdMouseOverTimes) {
			scareTheBirdCount = 0;
			scareTheBirdLastTime = 0;
			recheckposition(true)
		}
	}
}

function flyFromTo(a, b, c, d, e, f) {
	justStarted = e == 0;
	e += e > birdSpeed / 2 ? birdSpeed : Math.round(e == 0 ? birdSpeed / 4 : birdSpeed / 2);
	solvedFuture = e + (e > birdSpeed / 2 ? birdSpeed : Math.round(birdSpeed / 2));
	distanceX = c - a;
	distanceY = d - b;
	distance = Math.sqrt(distanceX * distanceX + distanceY * distanceY);
	solvPerc = Math.abs(1 / distance * e);
	solvDistX = Math.round(distanceX * solvPerc);
	solvDistY = Math.round(distanceY * solvPerc);
	solvPercFuture = Math.abs(1 / distance * solvedFuture);
	solvDistXFuture = Math.round(distanceX * solvPercFuture);
	solvDistYFuture = Math.round(distanceY * solvPercFuture);
	if (typeof f != "string") {
		f = null;
		angle = (distanceX != 0 ? Math.atan(-distanceY / distanceX) / Math.PI * 180 : 90) + (distanceX < 0 ? 180 : 0);
		if (angle < 0) angle += 360;
		if (angle < 45) f = "o";
		else if (angle < 135) f = "n";
		else if (angle < 202.5) f = "w";
		else if (angle < 247.5) f = "sw";
		else if (angle < 292.5) f = "s";
		else if (angle < 337.5) f = "so";
		else f = "o"
	}
	if (Math.abs(solvDistXFuture) >= Math.abs(distanceX) && Math.abs(solvDistYFuture) >= Math.abs(distanceY)) {
		animateSpriteAbort();
		switch (f) {
		case "so":
			animateSprite(1, 0, 0, 0, null, true);
			break;
		case "sw":
			animateSprite(1, 2, 2, 0, null, true);
			break;
		case "s":
			animateSprite(0, 2, 2, 0, null, true);
			break;
		case "n":
			animateSprite(4, 0, 0, 0, null, true);
			break;
		case "o":
			animateSprite(1, 0, 0, 0, null, true);
			break;
		case "w":
			animateSprite(1, 2, 2, 0, null, true);
			break;
		default:
			animateSprite(0, 0, 0, 0, null, true)
		}
		timeoutAnimation = window.setTimeout("animateSprite(0,0,0,0,null,true)", spriteAniSpeed)
	}
	if (Math.abs(solvDistX) >= Math.abs(distanceX) && Math.abs(solvDistY) >= Math.abs(distanceY)) {
		solvDistX = distanceX;
		solvDistY = distanceY;
		birdIsFlying = false;
		window.setTimeout("recheckposition()", 500)
	}
	else {
		if (justStarted) {
			animateSpriteAbort();
			switch (f) {
			case "so":
				animateSprite(1, 0, 0, 0, null, true);
				timeoutAnimation = window.setTimeout("animateSprite(1,1,1,0,null,true)", spriteAniSpeed);
				break;
			case "sw":
				animateSprite(1, 2, 2, 0, null, true);
				timeoutAnimation = window.setTimeout("animateSprite(1,3,3,0,null,true)", spriteAniSpeed);
				break;
			case "s":
				animateSprite(0, 2, 2, 0, null, true);
				timeoutAnimation = window.setTimeout("animateSprite(0,3,3,0,null,true)", spriteAniSpeed);
				break;
			case "n":
				timeoutAnimation = window.setTimeout("animateSprite(4,0,3,0," + spriteAniSpeedSlow + ")", 1);
				break;
			case "o":
				animateSprite(1, 0, 0, 0, null, true);
				timeoutAnimation = window.setTimeout("animateSprite(2,0,3,0," + spriteAniSpeedSlow + ")", spriteAniSpeed);
				break;
			case "w":
				animateSprite(1, 2, 2, 0, null, true);
				timeoutAnimation = window.setTimeout("animateSprite(3,0,3,0," + spriteAniSpeedSlow + ")", spriteAniSpeed);
				break;
			default:
				animateSprite(0, 0, 0, 0, null, true)
			}
		}
		timeoutFlight = window.setTimeout("flyFromTo(" + a + "," + b + "," + c + "," + d + "," + e + ",'" + f + "')", 50)
	}
	hideButtons();
	document.getElementById("theBird").style.left = a + solvDistX + "px";
	document.getElementById("theBird").style.top = b + solvDistY + birdSetUp + "px"
}

function chooseNewTarget() {
	var a = new Array;
	var b = scrollPos + spriteHeight + birdSpaceVertical;
	var c = scrollPos + windowHeight - birdSpaceVertical;
	for (var d = 0; d < targetElems.length; d++) {
		var e = targetElems[d];
		var f = document.getElementsByTagName(e).length;
		for (var g = 0; g < f; g++) {
			var h = document.getElementsByTagName(e)[g].offsetTop;
			var i = document.getElementsByTagName(e)[g].offsetLeft;
			var j = document.getElementsByTagName(e)[g].offsetWidth;
			if (h <= b || h >= c || j < minElemWidth || i < 0) {
				continue
			}
			a[a.length] = new Array(e, g, h, i, j);
			if (a.length >= neededElems4random) return a
		}
	}
	return a
}

function recheckposition(a) {
	if (a != true) a = false;
	if (birdIsFlying) return false;
	if (typeof window.innerHeight == "number") windowHeight = window.innerHeight;
	else if (document.documentElement && document.documentElement.clientHeight) windowHeight = document.documentElement.clientHeight;
	else if (document.body && document.body.clientHeight) windowHeight = document.body.clientHeight;
	if (windowHeight <= spriteHeight + 2 * birdSpaceVertical) windowHeight = spriteHeight + 2 * birdSpaceVertical + 1;
	if (typeof window.innerWidth == "number") windowWidth = window.innerWidth;
	else if (document.documentElement && document.documentElement.clientWidth) windowWidth = document.documentElement.clientWidth;
	else if (document.body && document.body.clientWidth) windowWidth = document.body.clientWidth;
	if (windowWidth <= spriteWidth) windowWidth = spriteWidth + 1;
	if (typeof window.pageYOffset == "number") scrollPos = window.pageYOffset;
	else if (document.body && document.body.scrollTop) scrollPos = document.body.scrollTop;
	else if (document.documentElement && document.documentElement.scrollTop) scrollPos = document.documentElement.scrollTop;
	birdPosY = parseInt(document.getElementById("theBird").style.top);
	birdPosX = parseInt(document.getElementById("theBird").style.left);
	if (scrollPos + birdSpaceVertical >= birdPosY || scrollPos + windowHeight - spriteHeight < birdPosY || a) {
		hideButtons();
		elemPosis = chooseNewTarget();
		if (elemPosis.length < 1) {
			elemType = null;
			elemNr = null;
			elemTop = scrollPos + Math.round(Math.random() * (windowHeight - spriteHeight));
			elemLeft = Math.round(Math.random() * (windowWidth - spriteWidth));
			elemWidth = 0
		}
		else {
			newTarget = elemPosis[Math.round(Math.random() * (elemPosis.length - 1))];
			elemType = newTarget[0];
			elemNr = newTarget[1];
			elemTop = newTarget[2];
			elemLeft = newTarget[3];
			elemWidth = newTarget[4]
		}
		targetTop = elemTop - spriteHeight;
		targetLeft = Math.round(elemLeft - spriteWidth / 2 + Math.random() * elemWidth);
		if (targetLeft > windowWidth - spriteWidth - 24) targetLeft = windowWidth - spriteWidth - 24;
		else if (targetLeft < 0) targetLeft = 0;
		birdIsFlying = true;
		flyFromTo(birdPosX, birdPosY, targetLeft, targetTop, 0)
	}
}

function animateSpriteAbort() {
	window.clearTimeout(timeoutAnimation)
}

function animateSprite(a, b, c, d, e, f) {
	if (typeof d != "number" || d > c - b) d = 0;
	document.getElementById("theBird").style.backgroundPosition = "-" + Math.round((b + d) * spriteWidth) + "px -" + spriteHeight * a + "px";
	if (f == true) return;
	if (typeof e != "number") e = spriteAniSpeed;
	timeoutAnimation = window.setTimeout("animateSprite(" + a + "," + b + "," + c + "," + (d + 1) + "," + e + ")", e)
}

function tripleflapInit(a) {
	if (typeof a == "undefined") {
		window.setTimeout("tripleflapInit(1)", 250);
		return
	}
	if (!is_utf8(tweetThisText)) tweetThisText = utf8_encode(tweetThisText);
	var b = "http://nguoikechuyen.name.vn" + escape(tweetThisText);
	var c = document.createElement("a");
	c.setAttribute("id", "theBird");
	c.setAttribute("href", NKC_link);
	c.setAttribute("target", "_blank");
	c.style.display = "block";
	c.style.position = "absolute";
	c.style.left = birdPosX + "px";
	c.style.top = birdPosY + "px";
	c.style.width = spriteWidth + "px";
	c.style.height = spriteHeight + "px";
	c.style.background = "url('" + birdSprite + "') no-repeat transparent";
	c.style.backgroundPosition = "-0px -0px";
	c.style.zIndex = "947";
	c.onmouseover = function () {
		scareTheBird();
		showButtonsTimeout = window.setTimeout("showButtons(0," + windowWidth + ")", 400);
		window.clearTimeout(hideButtonsTimeout)
	};
	c.onmouseout = function () {
		hideButtonsTimeout = window.setTimeout("hideButtons()", 50)
	};
	document.body.appendChild(c);
	var d = document.createElement("a");
	d.setAttribute("id", "theBirdLtweet");
	d.setAttribute("href", b);
	d.setAttribute("target", "_blank");
	d.setAttribute("title", "tweet this");
	d.style.display = "none";
	d.style.position = "absolute";
	d.style.left = "0px";
	d.style.top = "-100px";
	d.style.background = "url('" + birdSprite + "') no-repeat transparent";
	d.style.opacity = "0";
	d.style.filter = "alpha(opacity=0)";
	d.style.backgroundPosition = "-64px -0px";
	d.style.width = "58px";
	d.style.height = "30px";
	d.style.zIndex = "951";
	d.onmouseover = function () {
		window.clearTimeout(hideButtonsTimeout)
	};
	d.onmouseout = function () {
		hideButtonsTimeout = window.setTimeout("hideButtons()", 50)
	};
	document.body.appendChild(d);
	var e = d.cloneNode(false);
	e.setAttribute("id", "theBirdLfollow");
	e.setAttribute("href", NKC_link);
	e.setAttribute("title", "follow me");
	e.style.backgroundPosition = "-64px -30px";
	e.style.width = "58px";
	e.style.height = "20px";
	e.style.zIndex = "952";
	e.onmouseover = function () {
		window.clearTimeout(hideButtonsTimeout)
	};
	e.onmouseout = function () {
		hideButtonsTimeout = window.setTimeout("hideButtons()", 50)
	};
	document.body.appendChild(e);
	var f = window.setTimeout("animateSprite(0,0,0,0,null,true)", spriteAniSpeed);
	window.onscroll = recheckposition;
	recheckposition()
}
if (typeof NKC_link != "string" || NKC_link == "") var NKC_link = "http://nguoikechuyen.name.vn";
if (typeof tweetThisText != "string" || tweetThisText == "") var tweetThisText = document.title + " " + document.URL;
var tweetthislink = null;
var birdSpeed = 12;
var birdSpaceVertical = 16;
var birdSetUp = 2;
var spriteWidth = 64;
var spriteHeight = 64;
var spriteAniSpeed = 72;
var spriteAniSpeedSlow = Math.round(spriteAniSpeed * 1.75);
var neededElems4random = 10;
var minElemWidth = Math.round(spriteWidth / 3);
var scareTheBirdMouseOverTimes = 4;
var scareTheBirdTime = 1e3;
var birdIsFlying = false;
var scrollPos = 0;
var windowHeight = 450;
if (typeof window.innerHeight == "number") windowHeight = window.innerHeight;
else if (document.documentElement && document.documentElement.clientHeight) windowHeight = document.documentElement.clientHeight;
else if (document.body && document.body.clientHeight) windowHeight = document.body.clientHeight;
if (windowHeight <= spriteHeight + 2 * birdSpaceVertical) windowHeight = spriteHeight + 2 * birdSpaceVertical + 1;
var windowWidth = 800;
if (typeof window.innerWidth == "number") windowWidth = window.innerWidth;
else if (document.documentElement && document.documentElement.clientWidth) windowWidth = document.documentElement.clientWidth;
else if (document.body && document.body.clientWidth) windowWidth = document.body.clientWidth;
if (windowWidth <= spriteWidth) windowWidth = spriteWidth + 1;
var birdPosX = Math.round(Math.random() * (windowWidth - spriteWidth + 200) - 200);
var birdPosY = -2 * spriteHeight;
var timeoutAnimation = false;
var timeoutFlight = false;
var showButtonsTimeout = null;
var hideButtonsTimeout = null;
var scareTheBirdLastTime = 0;
var scareTheBirdCount = 0