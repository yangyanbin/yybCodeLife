define(function(require) {
    var template = require("text!./home.template.html"),
        model = require("./home.model"),
        Base = require("../base"),
        store = require("js/store"),
        action = require("js/action");
    var base = new Base("home");

    function load() {
        render();
        bind();
        run();
    }

    function render() {
        base.setTemplate(template);
        base.setModel(model);
        base.render(document.getElementById("content"));
    }

    function bind() {
        document.getElementById("switchLang").addEventListener("click", function(e) {
            var locale = base.getLocale() == "zh" ? "en" : "zh";
            base.setLocale(locale);
            load();
        });
    }

    function run() {
        store.dispatch(action.updateUrl("home"));
    }
    return {
        load: load
    };
});