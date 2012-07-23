// Set the require.js configuration for your application.
require.config({
  // Initialize the application with the main application file
  deps: ["main"],

  paths: {
    // JavaScript folders
    libs: "../assets/js/libs",
    plugins: "../assets/js/plugins",

    // Libraries
    jquery: "../assets/js/libs/jquery",
    lodash: "../assets/js/libs/lodash",
    backbone: "../assets/js/libs/backbone"
  },

  shim: {
    backbone: {
      deps: ["lodash", "jquery"],
      exports: "Backbone"
    },

    // Backbone.layoutmanager depends on Backbone.
    "plugins/backbone.layoutmanager": ["backbone"],

    // Backbone.localstorage depends on Backbone.
    "plugins/backbone-localstorage": ["backbone"],

    // Cross domain ajax
    "plugins/jquery.xdomainajax": ["jquery"],

    "plugins/toskoy": [],

    "plugins/speakthai": []
  }
});
