import{_ as i}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as s,o as e,b as a}from"./app-KMtPPF1K.js";const t={},n=a(`<h2 id="说明" tabindex="-1"><a class="header-anchor" href="#说明"><span>说明</span></a></h2><p>接口版本控制功能, 是用来管理服务端的接口版本, 目前仅支持 grpc 场景. 默认会创建 v1 版本, 对应 desc/proto/v1 文件夹中的 proto</p><p>可以通过 ivm 命令自动初始化 v2 版本的接口, 并默认调用 v1 接口逻辑, 这意味着你仅需一条命令, 就可以自动生成 v2 的接口, 后续对 v2 接口继续更改即可</p><div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" data-title="shell" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> tree</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> desc</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> </span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">desc</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">└──</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> proto</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">    ├──</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> v1</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">    │  </span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> └──</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> hello.proto</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">    └──</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> v2</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">        └──</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> hello_v2.proto</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="初始化新版本" tabindex="-1"><a class="header-anchor" href="#初始化新版本"><span>初始化新版本</span></a></h2><blockquote><p>请依次进行变更, 如初始化 v3 版本时必须已有 v2 版本</p></blockquote><div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" data-title="shell" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;"># 初始化 v2 版本</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">jzero</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> ivm</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> init</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> --version</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> v2</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;"># 或 jzero ivm init --version v2 --remove-suffix</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="新增-proto" tabindex="-1"><a class="header-anchor" href="#新增-proto"><span>新增 proto</span></a></h2><p>可基于该命令自动生成一个带版本的 proto example, 可以快速生成一个 proto 文件</p><div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" data-title="shell" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;"># 在 desc/proto/v2 文件夹新增一个 machine.proto, service 默认与 name 同名, 可以指定 services, 也可以指定 service methods</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">jzero</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> ivm</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> add</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> proto</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> --name</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> machine</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> --version</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> v2</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="新增-api" tabindex="-1"><a class="header-anchor" href="#新增-api"><span>新增 api</span></a></h2><p>可基于该命令自动生成 api example, 可以快速生成一个 api 文件</p><div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" data-title="shell" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;"># 在 desc/api 文件夹新增一个 machine.api 文件, 默认 group 为 machine, 可以使用 --group 进行指定</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">jzero</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> ivm</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> add</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> api</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> --name</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> machine</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div>`,13),l=[n];function h(r,p){return e(),s("div",null,l)}const k=i(t,[["render",h],["__file","ivm.html.vue"]]),c=JSON.parse('{"path":"/guide/ivm.html","title":"接口版本控制","lang":"zh-CN","frontmatter":{"title":"接口版本控制","icon":"hugeicons:api","order":6,"category":"开发","tag":["Guide"],"description":"说明 接口版本控制功能, 是用来管理服务端的接口版本, 目前仅支持 grpc 场景. 默认会创建 v1 版本, 对应 desc/proto/v1 文件夹中的 proto 可以通过 ivm 命令自动初始化 v2 版本的接口, 并默认调用 v1 接口逻辑, 这意味着你仅需一条命令, 就可以自动生成 v2 的接口, 后续对 v2 接口继续更改即可 初始化新版...","head":[["meta",{"property":"og:url","content":"https://jzero.jaronnie.com/guide/ivm.html"}],["meta",{"property":"og:site_name","content":"Jzero Framework"}],["meta",{"property":"og:title","content":"接口版本控制"}],["meta",{"property":"og:description","content":"说明 接口版本控制功能, 是用来管理服务端的接口版本, 目前仅支持 grpc 场景. 默认会创建 v1 版本, 对应 desc/proto/v1 文件夹中的 proto 可以通过 ivm 命令自动初始化 v2 版本的接口, 并默认调用 v1 接口逻辑, 这意味着你仅需一条命令, 就可以自动生成 v2 的接口, 后续对 v2 接口继续更改即可 初始化新版..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-07-08T05:58:53.000Z"}],["meta",{"property":"article:author","content":"jaronnie"}],["meta",{"property":"article:tag","content":"Guide"}],["meta",{"property":"article:modified_time","content":"2024-07-08T05:58:53.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"接口版本控制\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-07-08T05:58:53.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"jaronnie\\",\\"url\\":\\"https://github.com/jaronnie\\"}]}"]]},"headers":[{"level":2,"title":"说明","slug":"说明","link":"#说明","children":[]},{"level":2,"title":"初始化新版本","slug":"初始化新版本","link":"#初始化新版本","children":[]},{"level":2,"title":"新增 proto","slug":"新增-proto","link":"#新增-proto","children":[]},{"level":2,"title":"新增 api","slug":"新增-api","link":"#新增-api","children":[]}],"git":{"createdTime":1719820902000,"updatedTime":1720418333000,"contributors":[{"name":"jaronnie","email":"jaron@jaronnie.com","commits":6}]},"readingTime":{"minutes":1.05,"words":314},"filePathRelative":"guide/ivm.md","localizedDate":"2024年7月1日","autoDesc":true}');export{k as comp,c as data};
