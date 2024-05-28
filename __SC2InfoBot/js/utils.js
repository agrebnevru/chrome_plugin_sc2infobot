function ObserverUtils() {
}

ObserverUtils.prototype = {

  timestampToDate: function(timestamp) {
    var date = new Date(timestamp * 1000);
    var gDate = date.getDate();
    var gMonth = date.getMonth();
    gMonth = gMonth + 1;
    if (gMonth == 1) { gMonth = "Января"; }
    else if (gMonth == 2) { gMonth = "Февраля" }
    else if (gMonth == 3) { gMonth = "Марта" }
    else if (gMonth == 4) { gMonth = "Апреля" }
    else if (gMonth == 5) { gMonth = "Мая" }
    else if (gMonth == 6) { gMonth = "Июня" }
    else if (gMonth == 7) { gMonth = "Июля" }
    else if (gMonth == 8) { gMonth = "Августа" }
    else if (gMonth == 9) { gMonth = "Сентября" }
    else if (gMonth == 10) { gMonth = "Октября" }
    else if (gMonth == 11) { gMonth = "Ноября" }
    else if (gMonth == 12) { gMonth = "Декабря" }
    var gHours =  String(date.getHours());
    if (gHours.length == 1) { gHours = "0" + gHours; }
    var gMinutes =  String(date.getMinutes());
    if (gMinutes.length == 1) { gMinutes = "0" + gMinutes; }
    return gDate + " " + gMonth + " ";
  },

  timestampToTime: function(timestamp) {
    var date = new Date(timestamp * 1000);
    var gHours =  String(date.getHours());
    if (gHours.length == 1) { gHours = "0" + gHours; }
    var gMinutes =  String(date.getMinutes());
    if (gMinutes.length == 1) { gMinutes = "0" + gMinutes; }
    return gHours + ":" + gMinutes;
  },

  clearChildren: function(node) {
    if(node == null) {
      return;
    }
    while(node.hasChildNodes()) {
      node.removeChild(node.firstChild)
    }
  },

  encodeSpecialChars: function(str) {
    return encodeURIComponent(str.replace(/'/g, '&#039;'));
  }
}

var gObserverUtils = new ObserverUtils();
