"use strict";function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}var precacheConfig=[["/test-react-ghpages/index.html","147f52bb12b6593d19803db62d246992"],["/test-react-ghpages/static/css/main.c17080f1.css","302476b8b379a677f648aa1e48918ebd"],["/test-react-ghpages/static/js/main.b916d216.js","6d9be028f20d68bd1d693d5be9a9cc10"],["/test-react-ghpages/static/media/01d.d37bc50c.svg","d37bc50c474fc08f6bd1d9a67c6355bd"],["/test-react-ghpages/static/media/01n.bd386a65.svg","bd386a6514bfc6443addf215decf7b68"],["/test-react-ghpages/static/media/02d.6caa54b4.svg","6caa54b43733200918b84ad7e2f02895"],["/test-react-ghpages/static/media/02n.01549e46.svg","01549e46b5979d52cf16f60dc950fdd2"],["/test-react-ghpages/static/media/03d.85f34bb2.svg","85f34bb2adf6145a59a73d89de893f24"],["/test-react-ghpages/static/media/03n.a8ffe7ce.svg","a8ffe7cefd227b14246bfa32faf8e487"],["/test-react-ghpages/static/media/04d.d0ca9a39.svg","d0ca9a3978784cc5f694a0b04dc193b4"],["/test-react-ghpages/static/media/04n.a8ffe7ce.svg","a8ffe7cefd227b14246bfa32faf8e487"],["/test-react-ghpages/static/media/09d.d83471c2.svg","d83471c24cf3966761de0f0aa0c0bbc1"],["/test-react-ghpages/static/media/09n.910e1057.svg","910e105732a771f57ffbff6a82630600"],["/test-react-ghpages/static/media/10d.c50bf3e3.svg","c50bf3e3d6a5c2b01a34692f66cfcfa9"],["/test-react-ghpages/static/media/10n.45a86be0.svg","45a86be0a0a65d817d0b3ff31fe37175"],["/test-react-ghpages/static/media/11d.bc6f153e.svg","bc6f153e495997015ac8b0f6a8282634"],["/test-react-ghpages/static/media/11n.12c7ad8f.svg","12c7ad8fadc75dc33ef160ef63d897dd"],["/test-react-ghpages/static/media/13d.79f6eb03.svg","79f6eb0348ae0a985a07c26c7e2834ae"],["/test-react-ghpages/static/media/13n.ea38d2f4.svg","ea38d2f44d8a84ed515a75ca2a9892b3"],["/test-react-ghpages/static/media/50d.f1aae715.svg","f1aae715dc7013d6f04fffbb6f1b7cc1"],["/test-react-ghpages/static/media/50n.dc59f73d.svg","dc59f73d983ad334bcfb572ce7cf8c6e"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(e){if(!e.redirected)return Promise.resolve(e);return("body"in e?Promise.resolve(e.body):e.blob()).then(function(t){return new Response(t,{headers:e.headers,status:e.status,statusText:e.statusText})})},createCacheKey=function(e,t,a,s){var c=new URL(e);return s&&c.pathname.match(s)||(c.search+=(c.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),c.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return t.every(function(t){return!t.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],s=new URL(t,self.location),c=createCacheKey(s,hashParamName,a,/\.\w{8}\./);return[s.toString(),c]}));self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!t.has(a)){var s=new Request(a,{credentials:"same-origin"});return fetch(s).then(function(t){if(!t.ok)throw new Error("Request for "+a+" returned a response with status "+t.status);return cleanResponse(t).then(function(t){return e.put(a,t)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(a){return Promise.all(a.map(function(a){if(!t.has(a.url))return e.delete(a)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var t,a=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching),s="index.html";(t=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,s),t=urlsToCacheKeys.has(a));var c="/test-react-ghpages/index.html";!t&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(a=new URL(c,self.location).toString(),t=urlsToCacheKeys.has(a)),t&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(t){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,t),fetch(e.request)}))}});