import 'piccolore';
import { p as decodeKey } from './chunks/astro/server_QXGJpzTU.mjs';
import 'clsx';
import { N as NOOP_MIDDLEWARE_FN } from './chunks/astro-designed-error-pages_Cgl7qgDD.mjs';
import 'es-module-lexer';

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex,
    origin: rawRouteData.origin
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///Users/jaysamples/devproj/jaysamples-portfolio/","cacheDir":"file:///Users/jaysamples/devproj/jaysamples-portfolio/node_modules/.astro/","outDir":"file:///Users/jaysamples/devproj/jaysamples-portfolio/dist/","srcDir":"file:///Users/jaysamples/devproj/jaysamples-portfolio/src/","publicDir":"file:///Users/jaysamples/devproj/jaysamples-portfolio/public/","buildClientDir":"file:///Users/jaysamples/devproj/jaysamples-portfolio/dist/client/","buildServerDir":"file:///Users/jaysamples/devproj/jaysamples-portfolio/dist/server/","adapterName":"@astrojs/vercel","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"page","component":"_server-islands.astro","params":["name"],"segments":[[{"content":"_server-islands","dynamic":false,"spread":false}],[{"content":"name","dynamic":true,"spread":false}]],"pattern":"^\\/_server-islands\\/([^/]+?)\\/?$","prerender":false,"isIndex":false,"fallbackRoutes":[],"route":"/_server-islands/[name]","origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"about/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/about","isIndex":false,"type":"page","pattern":"^\\/about\\/?$","segments":[[{"content":"about","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/about.astro","pathname":"/about","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"contact/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/contact","isIndex":false,"type":"page","pattern":"^\\/contact\\/?$","segments":[[{"content":"contact","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/contact.astro","pathname":"/contact","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"experience/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/experience","isIndex":false,"type":"page","pattern":"^\\/experience\\/?$","segments":[[{"content":"experience","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/experience.astro","pathname":"/experience","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"projects/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/projects","isIndex":false,"type":"page","pattern":"^\\/projects\\/?$","segments":[[{"content":"projects","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/projects.astro","pathname":"/projects","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"skills/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/skills","isIndex":false,"type":"page","pattern":"^\\/skills\\/?$","segments":[[{"content":"skills","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/skills.astro","pathname":"/skills","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image\\/?$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/api/chat","isIndex":false,"type":"endpoint","pattern":"^\\/api\\/chat\\/?$","segments":[[{"content":"api","dynamic":false,"spread":false}],[{"content":"chat","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/api/chat.ts","pathname":"/api/chat","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["/Users/jaysamples/devproj/jaysamples-portfolio/src/pages/about.astro",{"propagation":"none","containsHead":true}],["/Users/jaysamples/devproj/jaysamples-portfolio/src/pages/contact.astro",{"propagation":"none","containsHead":true}],["/Users/jaysamples/devproj/jaysamples-portfolio/src/pages/experience.astro",{"propagation":"none","containsHead":true}],["/Users/jaysamples/devproj/jaysamples-portfolio/src/pages/index.astro",{"propagation":"none","containsHead":true}],["/Users/jaysamples/devproj/jaysamples-portfolio/src/pages/projects.astro",{"propagation":"none","containsHead":true}],["/Users/jaysamples/devproj/jaysamples-portfolio/src/pages/skills.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(n,t)=>{let i=async()=>{await(await n())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var n=(a,t)=>{let i=async()=>{await(await a())()};if(t.value){let e=matchMedia(t.value);e.matches?i():e.addEventListener(\"change\",i,{once:!0})}};(self.Astro||(self.Astro={})).media=n;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var a=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let l of e)if(l.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=a;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000noop-middleware":"_noop-middleware.mjs","\u0000virtual:astro:actions/noop-entrypoint":"noop-entrypoint.mjs","\u0000@astro-page:src/pages/about@_@astro":"pages/about.astro.mjs","\u0000@astro-page:src/pages/api/chat@_@ts":"pages/api/chat.astro.mjs","\u0000@astro-page:src/pages/contact@_@astro":"pages/contact.astro.mjs","\u0000@astro-page:src/pages/experience@_@astro":"pages/experience.astro.mjs","\u0000@astro-page:src/pages/projects@_@astro":"pages/projects.astro.mjs","\u0000@astro-page:src/pages/skills@_@astro":"pages/skills.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"pages/_image.astro.mjs","\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000@astrojs-manifest":"manifest_B3pgKc0g.mjs","/Users/jaysamples/devproj/jaysamples-portfolio/node_modules/astro/dist/assets/services/sharp.js":"chunks/sharp_dfkbsZn5.mjs","/Users/jaysamples/devproj/jaysamples-portfolio/src/layouts/Layout.astro?astro&type=script&index=0&lang.ts":"_astro/Layout.astro_astro_type_script_index_0_lang.CKHRJ_wq.js","/Users/jaysamples/devproj/jaysamples-portfolio/src/components/ChatWidget.astro?astro&type=script&index=0&lang.ts":"_astro/ChatWidget.astro_astro_type_script_index_0_lang.BcSeSJzT.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[["/Users/jaysamples/devproj/jaysamples-portfolio/src/layouts/Layout.astro?astro&type=script&index=0&lang.ts","document.getElementById(\"mobile-menu-btn\")?.addEventListener(\"click\",()=>{document.getElementById(\"mobile-menu\")?.classList.toggle(\"hidden\")});"],["/Users/jaysamples/devproj/jaysamples-portfolio/src/components/ChatWidget.astro?astro&type=script&index=0&lang.ts","const g=\"jay_chat_usage\";function m(){const e=localStorage.getItem(g);if(e){const t=JSON.parse(e),n=new Date().toDateString();if(t.date===n)return t}return{date:new Date().toDateString(),count:0}}function h(e){localStorage.setItem(g,JSON.stringify(e))}function i(){const e=m(),t=Math.max(0,15-e.count),n=document.getElementById(\"messages-remaining\");return n&&(n.textContent=t.toString()),t}const f=document.getElementById(\"chat-toggle\"),y=document.getElementById(\"chat-window\"),p=document.getElementById(\"chat-icon\"),I=document.getElementById(\"close-icon\");f?.addEventListener(\"click\",()=>{y?.classList.toggle(\"hidden\"),p?.classList.toggle(\"hidden\"),I?.classList.toggle(\"hidden\")});const E=document.getElementById(\"chat-form\"),c=document.getElementById(\"chat-input\"),o=document.getElementById(\"chat-messages\"),l=document.getElementById(\"chat-submit\");function a(e,t){const n=document.createElement(\"div\");n.className=t?\"bg-blue-600 text-white rounded-lg p-3 text-sm ml-8\":\"bg-slate-100 rounded-lg p-3 text-sm text-slate-700 mr-8\",n.textContent=e,o?.appendChild(n),o?.scrollTo(0,o.scrollHeight)}function v(){const e=document.createElement(\"div\");e.id=\"loading-indicator\",e.className=\"bg-slate-100 rounded-lg p-3 text-sm text-slate-500 mr-8\",e.innerHTML='<span class=\"animate-pulse\">Thinking...</span>',o?.appendChild(e),o?.scrollTo(0,o.scrollHeight)}function r(){document.getElementById(\"loading-indicator\")?.remove()}E?.addEventListener(\"submit\",async e=>{e.preventDefault();const t=c.value.trim();if(!t)return;if(i()<=0){a(\"You've reached your daily limit. Please come back tomorrow!\",!1);return}const d=m();d.count++,h(d),i(),a(t,!0),c.value=\"\",l.disabled=!0,v();try{const s=await(await fetch(\"/api/chat\",{method:\"POST\",headers:{\"Content-Type\":\"application/json\"},body:JSON.stringify({message:t})})).json();r(),s.error?a(s.error,!1):a(s.response,!1)}catch{r(),a(\"Sorry, something went wrong. Please try again.\",!1)}finally{l.disabled=!1,c.focus()}});i();"]],"assets":["/_astro/about.BEL0y8qc.css","/favicon.svg","/images/profile.jpeg","/resume/Jay_Samples_Resume.pdf","/about/index.html","/contact/index.html","/experience/index.html","/projects/index.html","/skills/index.html","/index.html"],"buildFormat":"directory","checkOrigin":true,"allowedDomains":[],"serverIslandNameMap":[],"key":"eWJFJ1EI3kD0gTvGN6Dx66JoKXXlWBSsjv+UlEAb+us="});
if (manifest.sessionConfig) manifest.sessionConfig.driverModule = null;

export { manifest };
