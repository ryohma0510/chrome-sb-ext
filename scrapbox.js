chrome.tabs.getCurrent(function(tab) {
    let url = tab.url;
    let title = tab.title;

    console.log(url);
    console.log(title);
});
