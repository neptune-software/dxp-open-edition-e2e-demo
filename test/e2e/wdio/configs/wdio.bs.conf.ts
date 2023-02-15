import config from "./wdio-ui5.conf";

config.baseUrl = "http://localhost:3000";

config.services = (config.services ? config.services : []).concat([
  [
    "browserstack",
    {
      browserstackLocal: true,
    },
  ],
]);

// remove the chromedrive and selenium-standalone that might be there before
config.services = config.services.filter((value, _index, _arr) =>{
  return !( ( Array.isArray(value) && ( value[0] === "chromedriver" || value[0] === "selenium-standalone" ) ) || ( value === "chromedriver" || value === "selenium-standalone" ) );
});


// =================
// Service Providers
// =================
config.user = process.env.BROWSERSTACK_USERNAME;
config.key = process.env.BROWSERSTACK_ACCESS_KEY;


config.capabilities = [
  {
    browserName: "chrome",
    "bstack:options": {
      projectName: "DXP Open Edition - E2E Demo",
      buildName: "Chrome",
      browser: "chrome",
      osVersion: "10",
      os: "Windows",
      browserVersion: "latest",
    },
  }, {
    browserName: "firefox",
    "bstack:options": {
      projectName: "DXP Open Edition - E2E Demo",
      buildName: "Firefox",
      browser: "firefox",
      osVersion: "10",
      os: "Windows",
      browserVersion: "latest",
    },
  },
  {
    browserName: "safari",
    "bstack:options": {
      projectName: "DXP Open Edition - E2E Demo",
      buildName: "Safari",
      browser: "safari",
      osVersion: "Big Sur",
      os: "OS X",
      browserVersion: "latest",
    },
  },
];


exports.config = config;
export default config;