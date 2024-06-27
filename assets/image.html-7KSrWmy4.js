import{_ as i}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as e,o as s,b as a}from"./app-Cr-yBUbf.js";const t={},l=a(`<h2 id="创建一个可以构建多平台的-buildx" tabindex="-1"><a class="header-anchor" href="#创建一个可以构建多平台的-buildx"><span>创建一个可以构建多平台的 buildx</span></a></h2><div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" data-title="shell" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">docker</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> buildx</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> create</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> --use</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> --name=mybuilder</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> --driver</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> docker-container</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> --driver-opt</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> image=dockerpracticesig/buildkit:master</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h2 id="推送多平台镜像" tabindex="-1"><a class="header-anchor" href="#推送多平台镜像"><span>推送多平台镜像</span></a></h2><div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" data-title="shell" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#56B6C2;">cd</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> your_project</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">docker</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> buildx</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> build</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> --platform</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> linux/amd64,linux/arm64</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> --progress=plain</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> -t</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> your_project:latest</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> .</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> --push</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="编译单平台镜像" tabindex="-1"><a class="header-anchor" href="#编译单平台镜像"><span>编译单平台镜像</span></a></h2><div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" data-title="shell" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#56B6C2;">cd</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> your_project</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">docker</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> buildx</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> build</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> --platform</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> linux/amd64</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> --progress=plain</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> -t</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> your_project:latest</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> .</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> --load</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div>`,6),n=[l];function h(r,d){return s(),e("div",null,n)}const o=i(t,[["render",h],["__file","image.html.vue"]]),c=JSON.parse('{"path":"/guide/develop/image.html","title":"镜像推送","lang":"zh-CN","frontmatter":{"title":"镜像推送","icon":"puzzle-piece","star":true,"order":3,"category":"开发","tag":["Guide"],"description":"创建一个可以构建多平台的 buildx 推送多平台镜像 编译单平台镜像","head":[["meta",{"property":"og:url","content":"https://jzero.jaronnie.com/guide/develop/image.html"}],["meta",{"property":"og:site_name","content":"Jzero Framework"}],["meta",{"property":"og:title","content":"镜像推送"}],["meta",{"property":"og:description","content":"创建一个可以构建多平台的 buildx 推送多平台镜像 编译单平台镜像"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-06-27T07:31:53.000Z"}],["meta",{"property":"article:author","content":"jaronnie"}],["meta",{"property":"article:tag","content":"Guide"}],["meta",{"property":"article:modified_time","content":"2024-06-27T07:31:53.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"镜像推送\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-06-27T07:31:53.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"jaronnie\\",\\"url\\":\\"https://github.com/jaronnie\\"}]}"]]},"headers":[{"level":2,"title":"创建一个可以构建多平台的 buildx","slug":"创建一个可以构建多平台的-buildx","link":"#创建一个可以构建多平台的-buildx","children":[]},{"level":2,"title":"推送多平台镜像","slug":"推送多平台镜像","link":"#推送多平台镜像","children":[]},{"level":2,"title":"编译单平台镜像","slug":"编译单平台镜像","link":"#编译单平台镜像","children":[]}],"git":{"createdTime":1713352530000,"updatedTime":1719473513000,"contributors":[{"name":"jaronnie","email":"jaron@jaronnie.com","commits":4}]},"readingTime":{"minutes":0.3,"words":90},"filePathRelative":"guide/develop/image.md","localizedDate":"2024年4月17日","autoDesc":true}');export{o as comp,c as data};
