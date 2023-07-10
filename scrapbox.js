console.log("scrapbox.js was loaded.");

chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    let tab = tabs[0];
    let url = tab.url;
    let title = tab.title;

    console.log(url);
    console.log(title);
});
