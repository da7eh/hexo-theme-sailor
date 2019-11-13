# hexo-theme-sailor

[![npm version](https://badge.fury.io/js/hexo-theme-sailor.svg)](https://badge.fury.io/js/hexo-theme-gandalfr)

Yet another Hexo theme tend to be simple and elegant. Based on hexo-theme-gandalfr.

### Features
+ Built-in Code highlight support.
+ Built-in hexo-tag-cloud support.
+ More comfortable with large screens.

### Live Demo

You can see from [here: https://timecollapse.org](https://timecollapse.org)

### How to Install
``` bash
# cd to your hexo dir
npm install
npm install --save hexo-renderer-pug hexo-generator-feed hexo-generator-sitemap hexo-browsersync hexo-generator-archive hexo-tag-cloud
git submodule add https://github.com/da7eh/hexo-theme-sailor themes/sailor
cd themes/sailor
cp _config.yml.example _config.yml
# modify the config file by yourself
```

### Install Hexo-tag-cloud
This theme depends on [hexo-tag-cloud](https://github.com/MikeCoder/hexo-tag-cloud). You should install this plugin first.

You can see from [Here](https://github.com/MikeCoder/hexo-tag-cloud) to learn how to install hexo-tag-cloud.

## Enable the Theme

modify `_config.yml` to change `theme` to `sailor`:

```yaml
## Themes: https://hexo.io/themes/
theme: sailor
```

## Change the Code Style

modify `_config.yml` to change the codestyle block:

```
# Styles shoule be found in the list: https://highlightjs.org/static/demo/
# use the lowercase letters and replace space with -
codestyle: atom-one-dark
```

## Update to the newest version
``` bash
# cd to your hexo dir
git submodule update
```

## Thanks
+ [hexo-theme-apollo](https://github.com/pinggod/hexo-theme-apollo)
+ [hexo-theme-gandalfr](https://github.com/MikeCoder/hexo-theme-gandalfr)

## License
See [@LICENSE](./LICENSE)

## TODO
See [@TODO.md](./TODO.md)
