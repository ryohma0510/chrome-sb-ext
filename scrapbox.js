'use strict'
{
  chrome.tabs.query({active: true, lastFocusedWindow:true}, tabs => {
    const titles = [];

    for(let i=0; i<tabs.length; i++){
      console.log(tabs[i].title);
    }
  });
}