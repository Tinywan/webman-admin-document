import{e as t}from"./app.47afd804.js";import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";const n={},a=t(`<h2 id="\u83B7\u53D6\u8BBF\u95EE\u4EE4\u724C" tabindex="-1"><a class="header-anchor" href="#\u83B7\u53D6\u8BBF\u95EE\u4EE4\u724C" aria-hidden="true">#</a> \u83B7\u53D6\u8BBF\u95EE\u4EE4\u724C</h2><h4 id="\u8BF7\u6C42\u65B9\u5F0F-post" tabindex="-1"><a class="header-anchor" href="#\u8BF7\u6C42\u65B9\u5F0F-post" aria-hidden="true">#</a> \u8BF7\u6C42\u65B9\u5F0F\uFF1A <code>POST</code></h4><h4 id="\u8BF7\u6C42\u5730\u5740-base-url-oauth-issue-token" tabindex="-1"><a class="header-anchor" href="#\u8BF7\u6C42\u5730\u5740-base-url-oauth-issue-token" aria-hidden="true">#</a> \u8BF7\u6C42\u5730\u5740\uFF1A <code>{base_url}/oauth/issue-token</code></h4><h4 id="\u8BF7\u6C42\u53C2\u6570" tabindex="-1"><a class="header-anchor" href="#\u8BF7\u6C42\u53C2\u6570" aria-hidden="true">#</a> \u8BF7\u6C42\u53C2\u6570</h4><table><thead><tr><th style="text-align:left;">\u53C2\u6570</th><th style="text-align:left;">\u7C7B\u578B</th><th style="text-align:left;">\u662F\u5426\u5FC5\u586B</th><th style="text-align:left;">\u6700\u5927\u957F\u5EA6</th><th style="text-align:left;">\u63CF\u8FF0</th><th style="text-align:left;">\u793A\u4F8B\u503C</th></tr></thead><tbody><tr><td style="text-align:left;">username</td><td style="text-align:left;">string</td><td style="text-align:left;">\u662F</td><td style="text-align:left;">32</td><td style="text-align:left;">\u8D26\u53F7/\u8EAB\u4EFD\u8BC1\u53F7\u7801</td><td style="text-align:left;">webman</td></tr><tr><td style="text-align:left;">password</td><td style="text-align:left;">string</td><td style="text-align:left;">\u662F</td><td style="text-align:left;">32</td><td style="text-align:left;">\u5BC6\u7801</td><td style="text-align:left;">webman123.</td></tr></tbody></table><h4 id="\u8BF7\u6C42\u6570\u636E\u7ED3\u6784" tabindex="-1"><a class="header-anchor" href="#\u8BF7\u6C42\u6570\u636E\u7ED3\u6784" aria-hidden="true">#</a> \u8BF7\u6C42\u6570\u636E\u7ED3\u6784</h4><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;username&quot;</span><span class="token operator">:</span> <span class="token string">&quot;webman&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;password&quot;</span><span class="token operator">:</span> <span class="token string">&quot;webman123.&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h4 id="\u54CD\u5E94\u53C2\u6570" tabindex="-1"><a class="header-anchor" href="#\u54CD\u5E94\u53C2\u6570" aria-hidden="true">#</a> \u54CD\u5E94\u53C2\u6570</h4><table><thead><tr><th style="text-align:left;">\u53C2\u6570</th><th style="text-align:left;">\u7C7B\u578B</th><th style="text-align:left;">\u662F\u5426\u5FC5\u586B</th><th style="text-align:left;">\u6700\u5927\u957F\u5EA6</th><th style="text-align:left;">\u63CF\u8FF0</th><th style="text-align:left;">\u793A\u4F8B\u503C</th></tr></thead><tbody><tr><td style="text-align:left;"><strong>token</strong></td><td style="text-align:left;">array</td><td style="text-align:left;">\u662F</td><td style="text-align:left;">16</td><td style="text-align:left;">\u4EE4\u724C\u4FE1\u606F</td><td style="text-align:left;">--</td></tr><tr><td style="text-align:left;">\u2514 token_type</td><td style="text-align:left;">string</td><td style="text-align:left;">\u662F</td><td style="text-align:left;">8</td><td style="text-align:left;">Token \u7C7B\u578B</td><td style="text-align:left;">Bearer</td></tr><tr><td style="text-align:left;">\u2514 expires_in</td><td style="text-align:left;">int</td><td style="text-align:left;">\u662F</td><td style="text-align:left;">16</td><td style="text-align:left;">\u51ED\u8BC1\u6709\u6548\u65F6\u95F4\uFF0C\u5355\u4F4D\uFF1A\u79D2</td><td style="text-align:left;">7200</td></tr><tr><td style="text-align:left;">\u2514 access_token</td><td style="text-align:left;">int</td><td style="text-align:left;">\u662F</td><td style="text-align:left;">64</td><td style="text-align:left;">\u8BBF\u95EE\u51ED\u8BC1</td><td style="text-align:left;">XXXXXXXXXXXXXXXXXXXXXXXXXX</td></tr><tr><td style="text-align:left;"><strong>user_info</strong></td><td style="text-align:left;">array</td><td style="text-align:left;">\u662F</td><td style="text-align:left;">16</td><td style="text-align:left;">\u7528\u6237\u4FE1\u606F</td><td style="text-align:left;">--</td></tr><tr><td style="text-align:left;">\u2514 username</td><td style="text-align:left;">string</td><td style="text-align:left;">\u662F</td><td style="text-align:left;">8</td><td style="text-align:left;">\u7528\u6237\u540D\u79F0</td><td style="text-align:left;">\u963F\u514B\u82CF</td></tr><tr><td style="text-align:left;">\u2514 mobile</td><td style="text-align:left;">string</td><td style="text-align:left;">\u662F</td><td style="text-align:left;">8</td><td style="text-align:left;">\u624B\u673A\u53F7\u7801</td><td style="text-align:left;">13669361192</td></tr><tr><td style="text-align:left;">\u2514 email</td><td style="text-align:left;">string</td><td style="text-align:left;">\u662F</td><td style="text-align:left;">16</td><td style="text-align:left;">\u90AE\u7BB1</td><td style="text-align:left;">Tinywan@163.com</td></tr><tr><td style="text-align:left;">\u2514 avatar</td><td style="text-align:left;">string</td><td style="text-align:left;">\u662F</td><td style="text-align:left;">16</td><td style="text-align:left;">\u5934\u50CF</td><td style="text-align:left;">https://live-oss.busionline.com/assets/images/avatars/6avatar.jpg</td></tr><tr><td style="text-align:left;">\u2514 is_enabled</td><td style="text-align:left;">int</td><td style="text-align:left;">\u662F</td><td style="text-align:left;">1</td><td style="text-align:left;">\u662F\u5426\u88AB\u7981\u7528</td><td style="text-align:left;">1</td></tr><tr><td style="text-align:left;">\u2514 is_admin</td><td style="text-align:left;">bool</td><td style="text-align:left;">\u662F</td><td style="text-align:left;">4</td><td style="text-align:left;"><code>true</code> \u662F\uFF0C<code>false</code> \u5426</td><td style="text-align:left;">true</td></tr></tbody></table><h4 id="\u54CD\u5E94\u793A\u4F8B" tabindex="-1"><a class="header-anchor" href="#\u54CD\u5E94\u793A\u4F8B" aria-hidden="true">#</a> \u54CD\u5E94\u793A\u4F8B</h4><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code>HTTP/<span class="token number">1.1</span> <span class="token number">200</span> OK
Content-Type<span class="token operator">:</span> application/json;charset=UTF<span class="token number">-8</span>

<span class="token punctuation">{</span>
    <span class="token property">&quot;code&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
    <span class="token property">&quot;msg&quot;</span><span class="token operator">:</span> <span class="token string">&quot;success&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;data&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;token&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">&quot;token_type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Bearer&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;expires_in&quot;</span><span class="token operator">:</span> <span class="token number">36000</span><span class="token punctuation">,</span>
            <span class="token property">&quot;access_token&quot;</span><span class="token operator">:</span> <span class="token string">&quot;xxxxxxxxxxxxxxxxxxx&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;refresh_token&quot;</span><span class="token operator">:</span> <span class="token string">&quot;xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx&quot;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token property">&quot;user_info&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token number">200001</span><span class="token punctuation">,</span>
            <span class="token property">&quot;username&quot;</span><span class="token operator">:</span> <span class="token string">&quot;\u963F\u514B\u82CF&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;mobile&quot;</span><span class="token operator">:</span> <span class="token string">&quot;13669361192&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;email&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Tinywan@163.com&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;avatar&quot;</span><span class="token operator">:</span> <span class="token string">&quot;https://www.webman-admin.com/assets/images/avatars/6avatar.jpg&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;is_enabled&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
            <span class="token property">&quot;create_time&quot;</span><span class="token operator">:</span> <span class="token string">&quot;2021-11-12 10:48:59&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;is_admin&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token property">&quot;menus&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token property">&quot;request_id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;ea920f84-42bd-491b-bc1a-7105bb768148&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="highlight-lines"><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br></div><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br></div></div><h4 id="\u5F02\u5E38\u793A\u4F8B" tabindex="-1"><a class="header-anchor" href="#\u5F02\u5E38\u793A\u4F8B" aria-hidden="true">#</a> \u5F02\u5E38\u793A\u4F8B</h4><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code>HTTP/<span class="token number">1.1</span> <span class="token number">401</span> Unauthorized
Content-Type<span class="token operator">:</span> application/json;charset=UTF<span class="token number">-8</span>

<span class="token punctuation">{</span>
    <span class="token property">&quot;code&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
    <span class="token property">&quot;msg&quot;</span><span class="token operator">:</span> <span class="token string">&quot;\u7528\u6237\u540D\u4E0D\u5B58\u5728&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;data&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="highlight-lines"><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><br><br><br><br><br><br></div><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div>`,13);function e(l,p){return a}var i=s(n,[["render",e]]);export{i as default};
