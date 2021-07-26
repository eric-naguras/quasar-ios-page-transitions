{
  "name": "musical-website-v3",
  "version": "0.0.1",
  "description": "Website for musicaltheatersongs.com",
  "productName": "musicaltheatersongs.com",
  "author": "Eric <eric@naguras.com>",
  "private": true,
  "scripts": {
    "build": "quasar build -m ssr",
    "dev": "quasar dev",
    "lint": "eslint --ext .js,.vue ./",
    "test": "echo \"No test specified\" && exit 0"
  },
  "dependencies": {
    "@quasar/extras": "^1.10.7",
    "axios": "^0.21.1",
    "core-js": "^3.15.1",
    "dotenv": "^10.0.0",
    "quasar": "^2.0.0"
  },
  "devDependencies": {
    "@babel/eslint-parser": "^7.14.7",
    "@quasar/app": "^3.0.0",
    "eslint": "^7.29.0",
    "eslint-config-prettier": "^8.1.0",
    "eslint-plugin-vue": "^7.12.1",
    "eslint-webpack-plugin": "^2.4.0"
  },
  "browserslist": [
    "last 10 Chrome versions",
    "last 10 Firefox versions",
    "last 4 Edge versions",
    "last 7 Safari versions",
    "last 8 Android versions",
    "last 8 ChromeAndroid versions",
    "last 8 FirefoxAndroid versions",
    "last 10 iOS versions",
    "last 5 Opera versions"
  ],
  "engines": {
    "node": ">= 12.22.1",
    "npm": ">= 6.13.4",
    "yarn": ">= 1.21.1"
  }
}
