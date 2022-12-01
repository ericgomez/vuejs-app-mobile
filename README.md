# Quasar App (app-accounts)

A Quasar@1.1.0 Project

### Start the app in development mode (hot-code reloading, error reporting, etc.)
```bash
quasar dev
```


The "error:0308010C:digital envelope routines::unsupported" occurs because Node.js v17 and later use OpenSSL v3.0 which has had breaking changes. To resolve the error, set the NODE_OPTIONS environment variable to --openssl-legacy-provider when running your development server.

#### 👇️ for macOS, Linux or Windows Git Bash
```bash
export NODE_OPTIONS=--openssl-legacy-provider
```

#### 👇️ for Windows PowerShell
```bash
$env:NODE_OPTIONS="--openssl-legacy-provider"
```

### Add cordoba to our project
```bash
quasar mode add cordova
```

### Add Android platform to our APP
```bash
cd src-cordova
cordova platform add android
```

### Check APP requirements
```bash
cd src-cordova
cordova requirements
```

### run Android app on emulator
```bash
cd src-cordova
quasar dev -m cordova -T android
```

### Install dependicates package.json
> Vuex persisted State is useful to save the data of our application (by default in localstorage) persistently.
[Vuex persisted State](https://github.com/robinvdvleuten/vuex-persistedstate)

> Vuex ApexCharts allows us to generate charts quickly and easily.
[Vuex ApexCharts](https://apexcharts.com/)

```bash
npm install apexcharts  moment moment-range vue-apexcharts vuex-persistedstate
```

### Help development tools (Extensions)
[Quasar ide-helper](https://www.npmjs.com/package/quasar-app-extension-ide-helper)
> quasar ide helper helps us to add autocompletion but only for the case of the WebStorm IDE.

```bash
quasar ext add ide-helper
```

[Quasar dotenv](https://quasar.dev/app-extensions/discover)
> dotenv allows us to generate environment variables through .env files, useful for configuring data in different environments.

```bash
quasar ext add @quasar/dotenv
```

### Generate icon and splash screen
[Documentacion Icono y splashScreen Quasar](https://v1.quasar.dev/options/app-icons)
> To change the icon and splash replace the file app-icon-png and app-splashscreen.png.

```bash
npm install -g @quasar/icongenie
icongenie generate

cd src-cordova
cordova plugin add cordova-plugin-splashscreen
cordova plugin save
cd ..
```
When launching the project the icons will be generated correctly.

### Build the app for production
```bash
quasar build
```

### Customize the configuration
See [Configuring quasar.conf.js](https://v1.quasar.dev/quasar-cli/quasar-conf-js).
