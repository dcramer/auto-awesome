var awesome = function() {
  var domId = $('a[style*=left\\:\\ 370px]')[0].id;
  if (!domId) return;
  if (console) {
    console.log('Auto awesoming! (domId=' + domId + ')');
  }
  var elem = $('#' + domId);
  var evt  = document.createEvent("MouseEvents");
  evt.initMouseEvent("click", true, true, window,1, 0, 0, elem.offset().left, elem.offset().top, false, false, false, false, 0, null);
  document.getElementById(domId).dispatchEvent(evt);
};

setInterval('awesome()', 45000);
awesome(awesome.domId);
window.alert("I don't always awesome, but when I do, I do it automatically.");
