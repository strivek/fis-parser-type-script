# fis-parser-type-script
A parser plugin for fis to compile  typescript.


####安装

```
npm install fis-parser-type-script -g
```

###支持情况

目前利用typescript-simple支持1.4.1版本`typeScirpt`

### 配置方法

```
fis.config.merge({
    modules: {
        parser: {
            'ts': 'type-script'
        }
    }
});
fis.config.set('roadmap.ext.ts', 'js');

```
