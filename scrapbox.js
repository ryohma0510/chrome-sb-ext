'use strict'
{
    chrome.tabs.getCurrent(function(tab) {
        var url = tab.url;
        var title = tab.title;
        console.log(url);
        console.log(title);
    });
}