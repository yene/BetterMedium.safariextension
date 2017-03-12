console.info('Improving medium.com');

setTimeout(function(){
  // Removing custom underline
  var body = document.querySelector('body');
  body.classList.remove('is-withMagicUnderlines');
  // Removing text select features.
  var elClone = body.cloneNode(true);
  body.parentNode.replaceChild(elClone, body);
  // Fixing images
  var ns = document.querySelectorAll('.js-progressiveMedia-inner');
  for (var i=0; i<ns.length;i++) {
    var html = ns[i].textContent;
    ns[i].parentNode.innerHTML = html;
  }
}, 500);

