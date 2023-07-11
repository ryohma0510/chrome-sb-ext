'use strict'

chrome.tabs.query({ currentWindow: true, active: true }, function (tabs) {
    const maxLength = 50;
    let currentTab = tabs[0];
    let truncatedURL = currentTab.url.slice(0, maxLength) + '...';


    document.getElementById('link').innerHTML = truncatedURL;
});
