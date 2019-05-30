 $(function(){function e(e,t){var n=new Image,r=e.getAttribute("data-src");n.onload=function(){e.parent?e.parent.replaceChild(n,e):e.src=r,t&&t()},n.src=r}for(var t=new Array,n=function(e,t){if(document.querySelectorAll)t=document.querySelectorAll(e);else{var n=document,r=n.styleSheets[0]||n.createStyleSheet();r.addRule(e,"f:b");for(var o=n.all,l=0,i=[],c=o.length;l<c;l++)o[l].currentStyle.f&&i.push(o[l]);r.removeRule(0),t=i}return t}("img.lazy"),r=function(){for(var n=0;n<t.length;n++)r=t[n],o=void 0,(o=r.getBoundingClientRect()).top>=0&&o.left>=0&&o.top<=(window.innerHeight||document.documentElement.clientHeight)&&e(t[n],function(){t.splice(n,n)});var r,o},o=0;o<n.length;o++)t.push(n[o]);r(),function(e,t){window.addEventListener?this.addEventListener(e,t,!1):window.attachEvent?this.attachEvent("on"+e,t):this["on"+e]=t}("scroll",r)});

 (function(){var t,i=function(t,i){return function(){return t.apply(i,arguments)}};t=function(){function t(){}return t.prototype.extend=function(t,i){var e,n;for(e in t)null!=(n=t[e])&&(i[e]=n);return i},t.prototype.isMobile=function(t){return/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(t)},t}(),this.WOW=function(){function e(t){null==t&&(t={}),this.scrollCallback=i(this.scrollCallback,this),this.scrollHandler=i(this.scrollHandler,this),this.start=i(this.start,this),this.scrolled=!0,this.config=this.util().extend(t,this.defaults)}return e.prototype.defaults={boxClass:"wow",animateClass:"animated",offset:0,mobile:!0},e.prototype.init=function(){var t;if(this.element=window.document.documentElement,this.boxes=this.element.getElementsByClassName(this.config.boxClass),this.boxes.length)return this.disabled()?this.resetStyle():"interactive"===(t=document.readyState)||"complete"===t?this.start():document.addEventListener("DOMContentLoaded",this.start)},e.prototype.start=function(){var t,i,e,n;for(i=0,e=(n=this.boxes).length;i<e;i++)t=n[i],this.applyStyle(t,!0);return window.addEventListener("scroll",this.scrollHandler,!1),window.addEventListener("resize",this.scrollHandler,!1),this.interval=setInterval(this.scrollCallback,50)},e.prototype.stop=function(){if(window.removeEventListener("scroll",this.scrollHandler,!1),window.removeEventListener("resize",this.scrollHandler,!1),null!=this.interval)return clearInterval(this.interval)},e.prototype.show=function(t){return this.applyStyle(t),t.className=t.className+" "+this.config.animateClass},e.prototype.applyStyle=function(t,i){var e,n,o;return n=t.getAttribute("data-wow-duration"),e=t.getAttribute("data-wow-delay"),o=t.getAttribute("data-wow-iteration"),t.setAttribute("style",this.customStyle(i,n,e,o))},e.prototype.resetStyle=function(){var t,i,e,n,o;for(o=[],i=0,e=(n=this.boxes).length;i<e;i++)t=n[i],o.push(t.setAttribute("style","visibility: visible;"));return o},e.prototype.customStyle=function(t,i,e,n){var o;return o=t?"visibility: hidden; -webkit-animation-name: none; -moz-animation-name: none; animation-name: none;":"visibility: visible;",i&&(o+="-webkit-animation-duration: "+i+"; -moz-animation-duration: "+i+"; animation-duration: "+i+";"),e&&(o+="-webkit-animation-delay: "+e+"; -moz-animation-delay: "+e+"; animation-delay: "+e+";"),n&&(o+="-webkit-animation-iteration-count: "+n+"; -moz-animation-iteration-count: "+n+"; animation-iteration-count: "+n+";"),o},e.prototype.scrollHandler=function(){return this.scrolled=!0},e.prototype.scrollCallback=function(){var t;if(this.scrolled&&(this.scrolled=!1,this.boxes=function(){var i,e,n,o;for(o=[],i=0,e=(n=this.boxes).length;i<e;i++)(t=n[i])&&(this.isVisible(t)?this.show(t):o.push(t));return o}.call(this),!this.boxes.length))return this.stop()},e.prototype.offsetTop=function(t){var i;for(i=t.offsetTop;t=t.offsetParent;)i+=t.offsetTop;return i},e.prototype.isVisible=function(t){var i,e,n,o,s;return e=t.getAttribute("data-wow-offset")||this.config.offset,o=(s=window.pageYOffset)+this.element.clientHeight-e,i=(n=this.offsetTop(t))+t.clientHeight,n<=o&&i>=s},e.prototype.util=function(){return this._util||(this._util=new t)},e.prototype.disabled=function(){return!1===this.config.mobile&&this.util().isMobile(navigator.userAgent)},e}()}).call(this);var wow=new WOW({mobile:!1});wow.init();

!function(t,e,i){"use strict";t.HoverDir=function(e,i){this.$el=t(i),this._init(e)},t.HoverDir.defaults={speed:300,easing:"ease",hoverDelay:0,inverse:!1},t.HoverDir.prototype={_init:function(e){this.options=t.extend(!0,{},t.HoverDir.defaults,e),this.transitionProp="all "+this.options.speed+"ms "+this.options.easing,this.support=Modernizr.csstransitions,this._loadEvents()},_loadEvents:function(){var e=this;this.$el.on("mouseenter.hoverdir, mouseleave.hoverdir",function(i){var o=t(this),n=o.find("div"),s=e._getDir(o,{x:i.pageX,y:i.pageY}),r=e._getStyle(s);"mouseenter"===i.type?(n.hide().css(r.from),clearTimeout(e.tmhover),e.tmhover=setTimeout(function(){n.show(0,function(){var i=t(this);e.support&&i.css("transition",e.transitionProp),e._applyAnimation(i,r.to,e.options.speed)})},e.options.hoverDelay)):(e.support&&n.css("transition",e.transitionProp),clearTimeout(e.tmhover),e._applyAnimation(n,r.from,e.options.speed))})},_getDir:function(t,e){var i=t.width(),o=t.height(),n=(e.x-t.offset().left-i/2)*(i>o?o/i:1),s=(e.y-t.offset().top-o/2)*(o>i?i/o:1);return Math.round((Math.atan2(s,n)*(180/Math.PI)+180)/90+3)%4},_getStyle:function(t){var e,i,o={left:"0px",top:"-100%"},n={left:"0px",top:"100%"},s={left:"-100%",top:"0px"},r={left:"100%",top:"0px"},a={top:"0px"},p={left:"0px"};switch(t){case 0:e=this.options.inverse?n:o,i=a;break;case 1:e=this.options.inverse?s:r,i=p;break;case 2:e=this.options.inverse?o:n,i=a;break;case 3:e=this.options.inverse?r:s,i=p}return{from:e,to:i}},_applyAnimation:function(e,i,o){t.fn.applyStyle=this.support?t.fn.css:t.fn.animate,e.stop().applyStyle(i,t.extend(!0,[],{duration:o+"ms"}))}};var o=function(t){e.console&&e.console.error(t)};t.fn.hoverdir=function(e){var i=t.data(this,"hoverdir");if("string"==typeof e){var n=Array.prototype.slice.call(arguments,1);this.each(function(){i?t.isFunction(i[e])&&"_"!==e.charAt(0)?i[e].apply(i,n):o("no such method '"+e+"' for hoverdir instance"):o("cannot call methods on hoverdir prior to initialization; attempted to call method '"+e+"'")})}else this.each(function(){i?i._init():i=t.data(this,"hoverdir",new t.HoverDir(e,this))});return i}}(jQuery,window);

$(document).ready(function () {

  $('.open_menu').click(function(){
    $(this).toggleClass('active');
    $('.menu').toggleClass('active');
    
  });
  $('.opensidebar').click(function(){
    $('.asidedevice').toggleClass('active');
  });
  $('.closesidebar').click(function(){
    $('.asidedevice').removeClass('active');
  });


  $('[data-toggleany]').on('click',function(e){e.preventDefault();var dataattr='';$(this).toggleClass('active');dataattr=$(this).data('toggleany');$('[data-opentoggleany='+dataattr+']').toggleClass('active');});

  var unit = 0;
  var total;
  
  $('.field').change(function() {
    unit = this.value;
  });
  $('.add').click(function() {
    unit++;
    var $input = $(this).prevUntil('.sub');
    $input.val(unit);
    unit = unit;
  });
  $('.sub').click(function() {
    if (unit > 0) {
      unit--;
      var $input = $(this).nextUntil('.add');
      $input.val(unit);
    }
  });
    
if ($(window).width() > 799){
    $('.add-to-cart').on('click', function () {
        var cart = $('.shopping-cart');
        var imgtodrag = $(this).parents('.productDetails').siblings().children('.bigimg').find("img").eq(0);
        if (imgtodrag) {
            var imgclone = imgtodrag.clone()
                .offset({
                top: imgtodrag.offset().top,
                left: imgtodrag.offset().left
            })
                .css({
                'opacity': '0.5',
                    'position': 'absolute',
                    'height': '186px',
                    'width': '186px',
                    'z-index': '100'
            })
                .appendTo($('body'))
                .animate({
                'top': cart.offset().top + 10,
                    'left': cart.offset().left + 10,
                    'width': 75,
                    'height': 75
            }, 1000, 'easeInOutExpo');
            
            setTimeout(function () {
                cart.effect("shake", {
                    times: 2
                }, 200);
            }, 1500);

            imgclone.animate({
                'width': 0,
                    'height': 0
            }, function () {
                $(this).detach()
            });
        }
    });
}
});

function validation(){
  var subscribe_email = $('input[name=subscribe_email]').val();
      $('.subscribe_input').css('border-color','#008000');
      $('.subscribe_input').css('box-shadow','0 0 5px #008000');
  if( /(.+)@(.+){2,}\.(.+){2,}/.test(subscribe_email) ){
    
  } else {
    $('.subscribe_input').css('border-color','#ff0000');
    $('.subscribe_input').css('box-shadow','0 0 5px #ff0000');
  }
}