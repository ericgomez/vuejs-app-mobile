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

### Run Android app on emulator
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

### Debugging with adb and Google Chrome
If you only have one device connected, run the following commands to get rid of the offline connections:
```bash
adb kill-server
adb devices
```
`adb kill-server` fixes the problem with offline emulators.

#### debug with adb
```bash
adb logcat --pid=$(adb shell pidof -s mx.ericgomez.accounts.app) -v color
```
`mx.ericgomez.accounts.app` ID application.

#### debug with Google Chrome
let's go to the route `chrome://inspect/#devices`, We look for our device in Remote Target and press on `inspect`

### Add new module in Quasar
```bash
quasar new <p|page> [-f <option>] <page_file_name>
quasar new <l|layout> [-f <option>] <layout_file_name>
quasar new <c|component> [-f <option>] <component_file_name>
quasar new <b|boot> [-f ts] <boot_name>
quasar new <s|store> [-f ts] <store_module_name>
```

### Add new store module in Quasar (quasar new <s|store> [store-module-name])
```bash
quasar new store [store-module-name]
```

### Add Plugin in Quasar boot (npx quasar new boot [plugin-name])
Add [plugin-name] in quasar.config.js
```bash
npx quasar new boot [plugin-name]
```

### Build the Android app for production
```bash
quasar build -m android
```
#### Optional
`keytool -genkey -v -keystore release-<name-application>.keystore -alias <name-application> -keyalg RSA -keysize 2048 -validity 20000`
```bash
keytool -genkey -v -keystore release-accounts.keystore -alias accounts -keyalg RSA -keysize 2048 -validity 20000
```
`jarsigner -verbose -sigalg SHA1withRSA -digestalg SHA1 -keystore release-<name-application>.keystore dist/cordova/android/app-release-unsigned.apk <name-application>`
```bash
jarsigner -verbose -sigalg SHA1withRSA -digestalg SHA1 -keystore release-accounts.keystore dist/cordova/android/app-release-unsigned.apk accounts
```
`~/Library/Android/sdk/build-tools/30.0.0/zipalign -v 4 dist/cordova/android/app-release-unsigned.apk <name-application>.apk`
```bash
~/Library/Android/sdk/build-tools/30.0.0/zipalign -v 4 dist/cordova/android/app-release-unsigned.apk AppAccounts.apk
```

### Customize the configuration
See [Configuring quasar.conf.js](https://v1.quasar.dev/quasar-cli/quasar-conf-js).
