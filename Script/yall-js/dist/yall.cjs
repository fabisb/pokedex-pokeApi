
function e(e,o){for(const t in o){const n=o[t];e.addEventListener(t,n.listener||n,n.options||void 0)}}const o="IntersectionObserver"in window&&"IntersectionObserverEntry"in window&&"intersectionRatio"in window.IntersectionObserverEntry.prototype,t=/baidu|(?:google|bing|yandex|duckduck)bot/i.test(navigator.userAgent),n=["src","poster"];function s(e,o){for(const t of n)t in e.dataset&&(e.setAttribute(t,e.dataset[t]),e.classList.contains(o)&&e.classList.remove(o))}function r(e,o,t,n){if("VIDEO"==e.nodeName){const t=Array.from(e.querySelectorAll("source"));for(const e of t)s(e,o);e.load()}s(e,o);const r=e.classList;r.contains(t)&&(r.remove(t),r.add(n))}exports.yall=function(n){const s=n?.lazyClass||"lazy",i=n?.lazyBackgroundClass||"lazy-bg",c=n?.lazyBackgroundLoaded||"lazy-bg-loaded",a=n?.threshold||200,l=n?.events||{},d=n?.observeChanges||!1,f=n?.observeRootSelector||"body",u=n?.mutationObserverOptions||{childList:!0,subtree:!0},b=`video.${s},.${i}`;let v=Array.from(document.querySelectorAll(b));for(const o of v)e(o,l);if(!0===o&&!1===t){var y=new IntersectionObserver(e=>{for(const o of e)if(o.isIntersecting||o.intersectionRatio){const{target:e}=o;r(e,s,i,c),y.unobserve(e),v=v.filter(o=>o!=e),0===v.length&&!1===d&&y.disconnect()}},{rootMargin:`${a}px 0%`});for(const e of v)y.observe(e);d&&new MutationObserver(()=>{const n=document.querySelectorAll(b);for(const s of n)!1===v.includes(s)&&(v.push(s),e(s,l),!0===o&&!1===t&&y.observe(s))}).observe(document.querySelector(f),u)}else if(t)for(const e of v)r(e,s,i,c)};
//# sourceMappingURL=yall.cjs.map