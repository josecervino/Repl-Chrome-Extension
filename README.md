# Repl-Chrome-Extension

Simple Chrome Extension to open up Repl.it sandboxes in specific languages

## How to use

1. Fork & clone repo
2. Run `npm i` and `yarn`
3. Run `npm run build`
4. Navigate to your Chrome browser to your extensions management panel (`chrome://extensions/`).
5. Turn on Dev mode if it isn't already on
6. Choose to `Load Unpacked`, then navigate to your local copy of this repo's `build/` folder.
7. The chrome extension should then be properly loaded & working

## Technologies

- [React]()
- [Webpack]()
- [Babel]()

## Sources

Thank you to these rockstars:

- [Webpack & React Chrome Extension Boilerplate](https://github.com/samuelsimoes/chrome-extension-webpack-boilerplate)
- [Article by Carter Robinson](https://blog.usejournal.com/making-an-interactive-chrome-extension-with-react-524483d7aa5d)

### Ideas

- Extension is made for quick access, dropdown might not be the best option
  - Options page gives option of setting toolbar button click to language/environment of choice
  - Options page gives option to activate dropdown to choose from several different languages/environments
    - Choose to activate specific languages
