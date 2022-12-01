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

### Build the app for production
```bash
quasar build
```

### Customize the configuration
See [Configuring quasar.conf.js](https://v1.quasar.dev/quasar-cli/quasar-conf-js).
