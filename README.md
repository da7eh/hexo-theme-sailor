# hexo-theme-primitive

Yet another Hexo theme tend to be simple and elegant. Based on [hexo-theme-gandalfr](https://github.com/D0n9X1n/hexo-theme-gandalfr).

### Features

- Built-in Code highlight support.
- Built-in hexo-tag-cloud support.
- More comfortable with large screens.

### Live Demo

See the [Demo](https://davedream.me).

### How to Install

```bash
# cd to your hexo dir
npm install
npm install --save hexo-renderer-pug hexo-generator-feed hexo-generator-sitemap hexo-browsersync hexo-generator-archive hexo-tag-cloud
git submodule add https://github.com/haodave/hexo-theme-primitive themes/primitive
mkdir -p src/_data
cp themes/primitive/_config.yml.example src/_data/primitive.yml
# modify the config file
```

## Enable the Theme

Modify `_config.yml` to change the theme:

```yaml
theme: primitive
```

## Change the Code Style

modify `_config.yml` to change the codestyle block:

```
# Styles shoule be found in the list: https://highlightjs.org/static/demo/
# use the lowercase letters and replace space with -
codestyle: solarized-light
```

## Update to the newest version

```bash
# cd to your hexo dir
git submodule update
```

## Thanks

- [hexo-theme-gandalfr](https://github.com/MikeCoder/hexo-theme-gandalfr)

## License

See [@LICENSE](./LICENSE)

## TODO

See [@TODO.md](./TODO.md)
