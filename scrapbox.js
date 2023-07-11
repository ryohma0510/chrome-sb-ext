'use strict'

chrome.tabs.query({ currentWindow: true, active: true }, function (tabs) {
    let currentTab = tabs[0];

    document.getElementById('title-and-link').innerHTML = "[" + currentTab.title + "|" + currentTab.url + "]";
});
