var sc2info = new Object();
sc2info.URL = "http://sc2tv.ru/api.php";
sc2info.ReloadTime = 5;
sc2info.OnlineStream = null;
sc2info.UserStream = null;
sc2info.FutureStream = null;
sc2info.News = null;
sc2info.UnreadNews = 0;
sc2info.LastNews = 0;
sc2info.NewAnonces = 0;
sc2info.LastAnonces = 0;
sc2info.PlugTitle = "";
sc2info.PathIcon = "";

function func()
{
//alert("function func()");
localStorage.OnStream = "";
localStorage.UserStream = "";
localStorage.FutStream = "";
localStorage.News = "";
sc2info.NewAnonces = 0;
sc2info.UnreadNews = 0;
sc2info.PlugTitle = "";
sc2info.PathIcon = "";
getXMLDocument();
localStorage.OnStream = parseSC2TVapi_online();
localStorage.UserStream = parseSC2TVapi_userstream();
localStorage.FutStream = parseSC2TVapi_future();
localStorage.News = parseSC2TVapi_news();
SetDataSettings();
}

// Установка разных фич после просмотра плагина
function SetDataSettingsOnload()
{
//alert("function SetDataSettingsOnload()");
sc2info.UnreadNews = 0;
sc2info.NewAnonces = 0;
sc2info.PlugTitle = "";
localStorage.LastNews = localStorage.LastNews2;
localStorage.LastAnonces = localStorage.LastAnonces2;

if (localStorage.ShowOnTitle1 == 2) {
if (localStorage.StreamOnlineKolVo>0) { sc2info.PlugTitle = sc2info.PlugTitle + localStorage.PlugTitleOn + " \n"; } else { sc2info.PlugTitle = sc2info.PlugTitle + "Online стримов нет \n"; }
}
if (localStorage.ShowOnTitle4 == 2) {
if (localStorage.StreamUserKolVo>0) { sc2info.PlugTitle = sc2info.PlugTitle + localStorage.PlugTitleUs + " \n"; } else { sc2info.PlugTitle = sc2info.PlugTitle + "Фан-стримов нет \n"; }
}
if (localStorage.ShowOnTitle2 == 2) {
sc2info.PlugTitle = sc2info.PlugTitle + "Новых анонсов нет \n";
}
if (localStorage.ShowOnTitle3 == 2) {
sc2info.PlugTitle = sc2info.PlugTitle + "Непрочитанных новостей нет";
}
if ((localStorage.ShowOnTitle1 == 1) && (localStorage.ShowOnTitle2 == 1) && (localStorage.ShowOnTitle3 == 1) && (localStorage.ShowOnTitle4 == 1)) { sc2info.PlugTitle = "SC2InfoBot для сайта sc2tv.ru"; }
  chrome.browserAction.setTitle( {title: sc2info.PlugTitle } );


sc2info.PathIcon = "img/icons/icon_";
if (localStorage.StreamOnlineKolVo>0) { sc2info.PathIcon = sc2info.PathIcon + "on_"; } else {
   if (localStorage.StreamUserKolVo>0) { sc2info.PathIcon = sc2info.PathIcon + "on-us_"; }
}
sc2info.PathIcon = sc2info.PathIcon + ".ico";
  chrome.browserAction.setIcon( {path: sc2info.PathIcon } );
}

// Установка разных фич после авто-Reload'а данных
function SetDataSettings()
{
//alert("function SetDataSettings()");
sc2info.PlugTitle = "";

if (localStorage.ShowOnTitle1 == 2) {
if (localStorage.StreamOnlineKolVo>0) { sc2info.PlugTitle = sc2info.PlugTitle + localStorage.PlugTitleOn + " \n"; } else { sc2info.PlugTitle = sc2info.PlugTitle + "Online стримов нет \n"; }
}
if (localStorage.ShowOnTitle4 == 2) {
if (localStorage.StreamUserKolVo>0) { sc2info.PlugTitle = sc2info.PlugTitle + localStorage.PlugTitleUs + " \n"; } else { sc2info.PlugTitle = sc2info.PlugTitle + "Фан-стримов нет \n"; }
}
if (localStorage.ShowOnTitle2 == 2) {
if (sc2info.NewAnonces>0) { sc2info.PlugTitle = sc2info.PlugTitle + localStorage.PlugTitleAn + " \n"; } else { sc2info.PlugTitle = sc2info.PlugTitle + "Новых анонсов нет \n"; }
}
if (localStorage.ShowOnTitle3 == 2) {
if (sc2info.UnreadNews>0) { sc2info.PlugTitle = sc2info.PlugTitle + localStorage.PlugTitleNs; } else { sc2info.PlugTitle = sc2info.PlugTitle + "Непрочитанных новостей нет"; }
}
if ((localStorage.ShowOnTitle1 == 1) && (localStorage.ShowOnTitle2 == 1) && (localStorage.ShowOnTitle2 == 1)) { sc2info.PlugTitle = "SC2InfoBot для сайта sc2tv.ru"; }
  chrome.browserAction.setTitle( {title: sc2info.PlugTitle } );


sc2info.PathIcon = "img/icons/icon_";
if (localStorage.StreamOnlineKolVo>0) { sc2info.PathIcon = sc2info.PathIcon + "on_" } else {
   if (localStorage.StreamUserKolVo>0) { sc2info.PathIcon = sc2info.PathIcon + "on-us_"; }
}

if (localStorage.AddOnFavicon == 1) {
if ((sc2info.NewAnonces>0) && (sc2info.NewAnonces == 1)) { sc2info.PathIcon = sc2info.PathIcon + "ns1_" }
if ((sc2info.NewAnonces>0) && (sc2info.NewAnonces == 2)) { sc2info.PathIcon = sc2info.PathIcon + "ns2_" }
if ((sc2info.NewAnonces>0) && (sc2info.NewAnonces == 3)) { sc2info.PathIcon = sc2info.PathIcon + "ns3_" }
if ((sc2info.NewAnonces>0) && (sc2info.NewAnonces == 4)) { sc2info.PathIcon = sc2info.PathIcon + "ns4_" }
if ((sc2info.NewAnonces>0) && (sc2info.NewAnonces == 5)) { sc2info.PathIcon = sc2info.PathIcon + "ns5_" }
}
else if (localStorage.AddOnFavicon == 2) {
if ((sc2info.UnreadNews>0) && (sc2info.UnreadNews == 1)) { sc2info.PathIcon = sc2info.PathIcon + "ns1_" }
if ((sc2info.UnreadNews>0) && (sc2info.UnreadNews == 2)) { sc2info.PathIcon = sc2info.PathIcon + "ns2_" }
if ((sc2info.UnreadNews>0) && (sc2info.UnreadNews == 3)) { sc2info.PathIcon = sc2info.PathIcon + "ns3_" }
if ((sc2info.UnreadNews>0) && (sc2info.UnreadNews == 4)) { sc2info.PathIcon = sc2info.PathIcon + "ns4_" }
if ((sc2info.UnreadNews>0) && (sc2info.UnreadNews == 5)) { sc2info.PathIcon = sc2info.PathIcon + "ns5_" }
}
sc2info.PathIcon = sc2info.PathIcon + ".ico";
  chrome.browserAction.setIcon( {path: sc2info.PathIcon } );

localStorage.LastAnonces2 =  sc2info.LastAnonces;
localStorage.LastNews2 = sc2info.LastNews;
}

function parseSC2TVapi_online_()
{
return localStorage.OnStream;
}

function parseSC2TVapi_userstream_()
{
return localStorage.UserStream;
}

function parseSC2TVapi_future_()
{
return localStorage.FutStream;
}

function parseSC2TVapi_news_()
{
return localStorage.News;
}

// Pop-up чат
function ShowPopUpChat()
{
newwin = open('http://sc2tv.ru/chat/index.html', 'sc2tv.ru', 'location=no,width=250,height=460,scrollbars=no');
newwin.document.open();
newwin.document.close();
return true;
}

// Pop-up окошко
function ShowPopUpWindow(index_embed, index_title, window_id)
{
newwin = open(window_id, 'sc2tv.ru', 'location=no,width=790,height=500,scrollbars=no');
newwin.document.open();
newwin.document.writeln('<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">'); 
newwin.document.writeln('<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="ru" lang="ru" dir="ltr">');
newwin.document.writeln('<html>');
newwin.document.writeln('<head>');
newwin.document.writeln('<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />');
newwin.document.writeln('<title>sc2tv.ru</title>');
// style для закладок begin
newwin.document.writeln('<style type="text/css">');
newwin.document.writeln('ul.tabs {');
newwin.document.writeln('  margin: 0px; padding:0px;');
newwin.document.writeln('  margin-top: 5px;');
newwin.document.writeln('  margin-bottom: 6px; }');
newwin.document.writeln('ul.tabs li {');
newwin.document.writeln('  list-style: none;');
newwin.document.writeln('  display: inline; }');
newwin.document.writeln('ul.tabs li a {');
newwin.document.writeln('  background-color:#464c54;');
newwin.document.writeln('  color:#ffebb5;');
newwin.document.writeln('  padding:8px 14px 8px 14px;');
newwin.document.writeln('  text-decoration:none;');
newwin.document.writeln('  font-size:9px;');
newwin.document.writeln('  font-family:Verdana, Arial, Helvetica, sans-serif;');
newwin.document.writeln('  font-weight:bold;');
newwin.document.writeln('  text-transform:uppercase;');
newwin.document.writeln('  border:1px solid #464c54; }');
newwin.document.writeln('ul.tabs li a:hover {');
newwin.document.writeln('  background-color:#2f343a;');
newwin.document.writeln('  border-color:#2f343a; }');
newwin.document.writeln('ul.tabs li a.active {');
newwin.document.writeln('  background-color:#ffffff;');
newwin.document.writeln('  color:#282e32;');
newwin.document.writeln('  border:1px solid #464c54;');
newwin.document.writeln('  border-bottom: 1px solid #ffffff; }');
newwin.document.writeln('.content {');
newwin.document.writeln('  background-color:#ffffff;');
newwin.document.writeln('  padding:10px;');
newwin.document.writeln('  border:1px solid #464c54; }');
newwin.document.writeln('#content_1, #content_2, #content_3 { display:none; }');
newwin.document.writeln('</style>');
// javascript изменение размеров окна и для закладок begin
newwin.document.writeln('<script type="text/javascript">');
newwin.document.writeln('function winresize() {');
newwin.document.writeln('document.getElementsByTagName("object")[0].height = window.innerHeight-70;');
newwin.document.writeln('document.getElementsByTagName("object")[0].width = window.innerWidth-40;');
newwin.document.writeln('}');
newwin.document.writeln('function winload() {');
newwin.document.writeln('}');
newwin.document.writeln('window.onresize = winresize;');
newwin.document.writeln('document.body.onLoad = winload();');
newwin.document.writeln('function tabSwitch(new_tab, new_content) {');
for (var i = 0; i<index_embed.length; i++) {
  newwin.document.writeln('document.getElementById(\'content_' + i + '\').style.display = "none";');
  newwin.document.writeln('document.getElementById(\'tab_' + i + '\').className = "";');
}
newwin.document.writeln('document.getElementById(new_content).style.display = "block";');
newwin.document.writeln('document.getElementById(new_tab).className = "active";');
newwin.document.writeln('}');
newwin.document.writeln('</script>');
// javascript изменение размеров окна и для закладок end
newwin.document.writeln('</head><body style="background-color: #657077; padding: 0px; margin: 0px;">');
newwin.document.writeln('<ul class="tabs">');
for (var o = 0; o<index_title.length; o++) {
  newwin.document.writeln('<li><a href="javascript:tabSwitch(\'tab_' + o + '\', \'content_' + o + '\');" id="tab_' + o + '" title="Источник: ' + index_title[o] + '"');
  if (o<1) { newwin.document.writeln(' class="active"'); }
  newwin.document.writeln('>' + index_title[o] + '</a></li>');
}
newwin.document.writeln('</ul>');
for (var p = 0; p<index_embed.length; p++) {
  newwin.document.writeln('<div id="content_' + p + '" class="content"><center>');
  newwin.document.writeln(index_embed[p]);
  newwin.document.writeln('</center></div>');
}           
newwin.document.writeln('</ul>');
newwin.document.writeln('</div>');
newwin.document.writeln('</div>');
newwin.document.writeln('</body></html>');
newwin.document.close();
return true;
}
   
//Загружает XML-документ
function getXMLDocument()  
{
//alert("function getXMLDocument()");
  var data = null;
  var xml = new XMLHttpRequest();
  xml.open("GET", sc2info.URL, false);
  xml.setRequestHeader("Accept-Language", "ru, en");
  xml.setRequestHeader("Accept-Charset", "windows-1251");
  xml.send("");
  data = xml2json.parser(xml.responseText);
  if (data.root.online.stream != null) { sc2info.OnlineStream = data.root.online.stream; localStorage.OnStream = data.root.online.stream; } else { sc2info.OnlineStream = null; localStorage.OnStream = null; }
  if (data.root.user_streams.stream != null) { sc2info.UserStream = data.root.user_streams.stream; localStorage.UsStream = data.root.user_streams.stream; } else { sc2info.UserStream = null; localStorage.UsStream = null; }
  if (data.root.future.stream != null) { sc2info.FutureStream = data.root.future.stream; localStorage.FutStream = data.root.future.stream; } else { sc2info.FutureStream = null; localStorage.FutStream = null; }
  if (data.root.news.item != null) { sc2info.News = data.root.news.item; localStorage.News = data.root.news.item; } else { sc2info.News = null; localStorage.News = null; }
}

// Парсинг страница sc2tv.ru/api.php - ONLINE
function parseSC2TVapi_online()
{
//alert("function parseSC2TVapi_online()");
var super_old_stream = 86400;
var stroka = "<ul>";
var arr_stroka_embed = "";
var arr_stroka_title = "";
  if(sc2info.OnlineStream != null) {
    if(sc2info.OnlineStream.length>0) {
      for (var i = 0; i<sc2info.OnlineStream.length; i++) {
          if((Math.round(new Date().getTime()/1000.0)-sc2info.OnlineStream[i].started)<super_old_stream) {
            arr_stroka_embed = "['";
            arr_stroka_title = "['";
            localStorage.StreamOnlineKolVo = sc2info.OnlineStream.length;   
              if(sc2info.OnlineStream[i].preset.length>0) {
                  for (var a = 0; a<sc2info.OnlineStream[i].preset.length; a++) {
                  arr_stroka_embed += sc2info.OnlineStream[i].preset[a].embed.replace(/\"/g, "");
                  if (a!=sc2info.OnlineStream[i].preset.length-1) { arr_stroka_embed += "', '"; }
                  arr_stroka_title += sc2info.OnlineStream[i].preset[a].source;
                  if (a!=sc2info.OnlineStream[i].preset.length-1) { arr_stroka_title += "', '"; }
                  }
                } else {
                arr_stroka_embed += sc2info.OnlineStream[i].preset.embed.replace(/\"/g, "");
                arr_stroka_title += sc2info.OnlineStream[i].preset.source;
                }
              arr_stroka_embed += "']";
              arr_stroka_title += "']";  
            if (localStorage.ClickOnStream == 0) { stroka += "<li><b><a href='http://sc2tv.ru/' title='Откроется главная sc2tv' target='_blank' class='inmenu'>" + sc2info.OnlineStream[i].title + "</a></b>"; }
            else if (localStorage.ClickOnStream == 2) { stroka += "<li><b><a href='#' title='Стрим откроется в маленьком окне' onClick=\"ShowPopUpWindow(" + arr_stroka_embed + ", " + arr_stroka_title + ", " + i + ");\" class='inmenu'>" + sc2info.OnlineStream[i].title + "</a></b>"; }
            else { stroka += "<li><b><a href='#' title='Стрим откроется в маленьком окне' onClick='ShowPopUpWindow(" + arr_stroka_embed + ", " + arr_stroka_title + ", " + i + ");' class='inmenu'>" + sc2info.OnlineStream[i].title + "</a></b>"; }
            stroka += "<br />";
            if (typeof(sc2info.OnlineStream[i].description)=="string") { stroka += " &nbsp; " + sc2info.OnlineStream[i].description + "<br />"; }
            if (sc2info.OnlineStream[i].started != null) { stroka += "<div class='small'>Начался в " + gObserverUtils.timestampToTime(sc2info.OnlineStream[i].started) + "</div>"; }
            stroka += "</li>";        
            }
          }
        } else {
          if((Math.round(new Date().getTime()/1000.0)-sc2info.OnlineStream.started)<super_old_stream) {
          arr_stroka_embed = "['";
          arr_stroka_title = "['";
            if(sc2info.OnlineStream.preset.length>0) {
                for (var a = 0; a<sc2info.OnlineStream.preset.length; a++) {
                arr_stroka_embed += sc2info.OnlineStream.preset[a].embed.replace(/\"/g, "");
                if (a!=sc2info.OnlineStream.preset.length-1) { arr_stroka_embed += "', '"; }
                arr_stroka_title += sc2info.OnlineStream.preset[a].source;
                if (a!=sc2info.OnlineStream.preset.length-1) { arr_stroka_title += "', '"; }
                }
              } else {
              arr_stroka_embed += sc2info.OnlineStream.preset.embed.replace(/\"/g, "");
              arr_stroka_title += sc2info.OnlineStream.preset.source;
              }
            arr_stroka_embed += "']";
            arr_stroka_title += "']";        
          localStorage.StreamOnlineKolVo = 1;
          if (localStorage.ClickOnStream == 0) { stroka += "<li><b><a href='http://sc2tv.ru/' title='Откроется главная sc2tv' target='_blank' class='inmenu'>" + sc2info.OnlineStream.title + "</a></b>"; }
          else if (localStorage.ClickOnStream == 2) { stroka += "<li><b><a href='#' title='Стрим откроется в маленьком окне' onClick=\"ShowPopUpWindow(" + arr_stroka_embed + ", " + arr_stroka_title + ", 0);\" class='inmenu'>" + sc2info.OnlineStream.title + "</a></b>"; }
          else { stroka += "<li><b><a href='#' title='Стрим откроется в маленьком окне' onClick='ShowPopUpWindow(" + arr_stroka_embed + ", " + arr_stroka_title + ", 0);' class='inmenu'>" + sc2info.OnlineStream.title + "</a></b>"; }
          stroka += "<br />";
          if (typeof(sc2info.OnlineStream.description)=="string") { stroka += " &nbsp; " + sc2info.OnlineStream.description + "<br />"; }
          if (sc2info.OnlineStream.started != null) { stroka += "<div class='small'>Начался в " + gObserverUtils.timestampToTime(sc2info.OnlineStream.started) + "</div>"; }
          stroka += "</li>";
          }        
        }
  stroka += "</ul>";
  } else {
  localStorage.StreamOnlineKolVo = "нет";
  stroka = "<ul><li><b>Online стримов на данный момент нет.</b></li></li>";   
  }
localStorage.PlugTitleOn = "Стримов online: " + localStorage.StreamOnlineKolVo;
return stroka;       
}

// Парсинг страница sc2tv.ru/api.php - USER_STREAM
function parseSC2TVapi_userstream()
{
//alert("function parseSC2TVapi_userstream()");
var stroka = "<ul>";
var arr_stroka_embed = "";
var arr_stroka_title = "";
  if(sc2info.UserStream != null) {
    if(sc2info.UserStream.length>0) {
      for (var w = 0; w<sc2info.UserStream.length; w++) {
        arr_stroka_embed = "['";
        arr_stroka_title = "['";
        localStorage.StreamUserKolVo = sc2info.UserStream.length;
          arr_stroka_embed += sc2info.UserStream[w].embed.replace(/\"/g, "");
          arr_stroka_title += sc2info.UserStream[w].title;
          arr_stroka_embed += "']";
          arr_stroka_title += "']";        
        var link = sc2info.UserStream[w].title;
        if (localStorage.ClickUsStream == 0) { stroka += "<li><b><a href='http://sc2tv.ru/' title='Откроется страница стрима на sc2tv' target='_blank' class='inmenu'>" + sc2info.UserStream[w].title + "</a></b>"; }
        else if (localStorage.ClickUsStream == 2) { stroka += "<li><b><a href='#' title='Стрим откроется в маленьком окне' onClick=\"ShowPopUpWindow(" + arr_stroka_embed + ", " + arr_stroka_title + ", " + w + ");\" class='inmenu'>" + sc2info.UserStream[w].title + "</a></b>"; }
        else { stroka += "<li><b><a href='#' title='Стрим откроется в маленьком окне' onClick=\"ShowPopUpWindow(" + arr_stroka_embed + ", " + arr_stroka_title + ", " + w + ");\" class='inmenu'>" + sc2info.UserStream[w].title + "</a></b>"; }
        stroka += "<br />";
        if (typeof(sc2info.UserStream[w].description)=="string") { stroka += " &nbsp; " + sc2info.UserStream[w].description + "<br />"; }
        if (sc2info.UserStream[w].user != null) { stroka += "<div class='small'>Пользователь: " + sc2info.UserStream[w].user + "</div>"; }
        stroka += "</li>";
        }
        } else {
          arr_stroka_embed = "['";
          arr_stroka_title = "['";
          arr_stroka_embed += sc2info.UserStream.embed.replace(/\"/g, "");
          arr_stroka_title += sc2info.UserStream.title;
          arr_stroka_embed += "']";
          arr_stroka_title += "']";        
        localStorage.StreamUserKolVo = 1;
        if (localStorage.ClickUsStream == 0) { stroka += "<li><b><a href='http://sc2tv.ru/' title='Откроется страница стрима на sc2tv' target='_blank' class='inmenu'>" + sc2info.UserStream.title + "</a></b>"; }
        else if (localStorage.ClickUsStream == 2) { stroka += "<li><b><a href='#' title='Стрим откроется в маленьком окне' onClick=\"ShowPopUpWindow(" + arr_stroka_embed + ", " + arr_stroka_title + ", 0);\" class='inmenu'>" + sc2info.UserStream.title + "</a></b>"; }
        else { stroka += "<li><b><a href='#' title='Стрим откроется в маленьком окне' onClick=\"ShowPopUpWindow(" + arr_stroka_embed + ", " + arr_stroka_title + ", 0);\" class='inmenu'>" + sc2info.UserStream.title + "</a></b>"; }
        stroka += "<br />";
        if (typeof(sc2info.UserStream.description)=="string") { stroka += " &nbsp; " + sc2info.UserStream.description + "<br />"; }
        if (sc2info.UserStream.user != null) { stroka += "<div class='small'>Пользователь: " + sc2info.UserStream.user + "</div>"; }
        stroka += "</li>";
    }
  stroka += "</ul>";
  } else {
  localStorage.StreamUserKolVo = "нет";
  stroka = "<ul><li><b>Фан-стримов на данный момент нет.</b></li></li>";
  }
localStorage.PlugTitleUs = "Фан-стримов: " + localStorage.StreamUserKolVo;
return stroka;
}

// Парсинг страница sc2tv.ru/api.php - FUTURE
function parseSC2TVapi_future()
{
//alert("function parseSC2TVapi_future()");
var key = false;
var stroka = "<ul>";
  if(sc2info.FutureStream != null) {
    if(sc2info.FutureStream.length>0) {
      for (var t = 0; t<sc2info.FutureStream.length; t++) {
        stroka += "<li><b>" + sc2info.FutureStream[t].title + "</b>";
        stroka += "<br />";
        if (typeof(sc2info.FutureStream[t].description)=="string") { stroka += " &nbsp; " + sc2info.FutureStream[t].description + "<br />"; }
        if (sc2info.FutureStream[t].time != null) { stroka += "<div class='small'>Начало: " + gObserverUtils.timestampToDate(sc2info.FutureStream[t].time) + " (" + gObserverUtils.timestampToTime(sc2info.FutureStream[t].time) + ")</div>"; }
        stroka += "</li>";
      }
    sc2info.LastAnonces = sc2info.FutureStream[0].time;
    } else {
      if ((localStorage.LastAnonces != sc2info.FutureStream.time) && (!key)) {
        sc2info.NewAnonces = 1;
        } else { key = true; }
        stroka += "<li><b>" + sc2info.FutureStream.title + "</b>";
        stroka += "<br />";
        if (typeof(sc2info.FutureStream.description)=="string") { stroka += " &nbsp; " + sc2info.FutureStream.description + "<br />"; }
        if (sc2info.FutureStream.time != null) { stroka += "<div class='small'>Начало: " + gObserverUtils.timestampToDate(sc2info.FutureStream.time) + " (" + gObserverUtils.timestampToTime(sc2info.FutureStream.time) + ")</div>"; }
        stroka += "</li>";
        sc2info.LastAnonces = sc2info.FutureStream.time;      
    }
  stroka += "</ul>";  
  } else {
  sc2info.LastAnonces = 0;
  stroka = "<ul><li><b>На данный момент стримов не анонсировано.</b></li></li>";
  }
localStorage.PlugTitleAn = "Новых анонсов: " + sc2info.NewAnonces;
return stroka;
}

// Парсинг страница sc2tv.ru/api.php - NEWS
function parseSC2TVapi_news()
{
//alert("function parseSC2TVapi_news()");
var key = false;
var stroka = "<ul>";
  if(sc2info.News != null) {
    for (var u = 0; u<sc2info.News.length; u++) {
      if ((localStorage.LastNews != sc2info.News[u].id) && (!key)) {
        sc2info.UnreadNews++;
      } else { key = true; }
      stroka += "<li><b><a href='" + sc2info.News[u].link + "' target='_blank' class='inmenu'>" + sc2info.News[u].title + "</a></b>";
      stroka += "<br />";
      if (typeof(sc2info.News[u].teaser)=="string") { stroka += " &nbsp; " + sc2info.News[u].teaser + "<br />"; }
      if (sc2info.News[u].date != null) { stroka += "<div class='small'> Добавлено: " + gObserverUtils.timestampToDate(sc2info.News[u].date) + " (" + gObserverUtils.timestampToTime(sc2info.News[u].date) + ")</div>"; }
      stroka += "</li>";
    }
  stroka += "</ul>";
  sc2info.LastNews = sc2info.News[0].id;
  } else {
  sc2info.LastNews = 0;
  stroka = "<ul><li><b>Новостей нет. Возможно нет доступа к сайту.</b></li></li>";
  }
localStorage.PlugTitleNs = "Непрочитанных новостей: " + sc2info.UnreadNews;
return stroka;
}
