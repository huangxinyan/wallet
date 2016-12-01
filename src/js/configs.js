/**
 * Created by huang on 2016/11/25.
 */
(function(){
      var dpr,rem,scale;
      var docEl = document.documentElement || document.body;
      var fontEl = document.createElement('style');
      var metaEl = document.querySelector('meta[name="viewport"]');
      dpr = window.devicePixelRatio || 1;
      rem = docEl.clientWidth * dpr /10;
      scale = 1/dpr;

      metaEl.setAttribute('content','width='+dpr*docEl.clientWidth+',initial-scale='+scale+',minimum-scale='+scale+',maximum-scale='+scale+',user-scalable=no');
      docEl.setAttribute('data-dpr',dpr);

       docEl.firstElementChild.appendChild(fontEl);
       fontEl.innerHTML = 'html{font-size:'+ rem +'px!important;}';
       window.rem2px = function(v){
           v = parseFloat(v);
           return v*rem;
       };
       window.px2rem = function(v){
           v = parseFloat(v);
           return v/rem;
       };
       window.dpr = dpr;
       window.rem = rem;
})();