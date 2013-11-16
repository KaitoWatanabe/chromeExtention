window.onload = function() {
  chrome.tabs.getSelected(window.id, function (tab) {
    //tab.urlに開いているタブのURLが入っている
    var title = tab.title;
    var url = tab.url;
    String(title[0]);
    String(url[0]);
    var element = document.getElementById('url'); 
    element.innerHTML = "[" + title + "](" + url + ")";
    element.select();
    document.execCommand("Copy", false, null);
  });
};