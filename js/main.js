(function(){
'use strict';
if (window.top !== window.self) { try { window.top.location = window.self.location; } catch(e){} }
if (location.protocol === 'http:') {
location.replace('https://' + location.host + location.pathname + location.search + location.hash);
}
document.querySelectorAll('a[target="_blank"]').forEach(a=>a.rel='noopener noreferrer');
})();