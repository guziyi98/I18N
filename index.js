
var gtElInit = function gtElInit(old = 'zh-cn', next = 'en') {
    var lib = new google.translate.TranslateService();
    lib.translatePage(old, next, function (v) {

    });
}

// ja: 日语, zh-cn: 中文, en: 英文， ko：韩文， ru：俄文
function change(obj = {}) {
    var lang = obj.value;
    lang = 'ru'
    var lib = new google.translate.TranslateService();
    lib.translatePage('zh-cn', lang, function () { });
}


