'use strict'

const tabs = await chrome.tabs.getCurrent();
console.log(tabs[0]);
