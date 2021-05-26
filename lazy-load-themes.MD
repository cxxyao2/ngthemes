# theme 类 scss 文件会导致打包后文件太大，考虑 layz-load

## 创建多个主题文件, 如 green.scss, blue.scss etc.

## angular.json / styles / inject

- 然后，在 angular.json > projects > architect > build > styles - 中，新增刚刚创建的主题文件，inject 设置为 false，意味着它只会被打包为- 单独的 css 文件，但不会被引入项目中：

- "styles": [
- "src/styles.scss",
- {
- "input": "src/theme/green-amber-theme.scss",
- "inject": false
- }
- ],

## 最后，通过给 <link> 动态赋值即可：

- switchTheme(theme: string): void {
- const id = 'lazy-load-theme';
- const link = document.getElementById(id);
- // 第一次切换，新建一个 link 元素
- if (!link) {
- const linkEl = document.createElement('link');
- linkEl.setAttribute('rel', 'stylesheet');
- linkEl.setAttribute('type', 'text/css');
- linkEl.setAttribute('id', id);
- linkEl.setAttribute('href', `${theme}-theme.css`);
- document.head.appendChild(linkEl);
- } else {
- // 替换 link 元素的 href 地址
- (link as HTMLLinkElement).href = `${theme}-theme.css`;
- }
- }

## 默认的主题文件依旧需要在 styles.scss 中引用

- 它也懒加载的话，会导致初次加载时页面闪烁。
