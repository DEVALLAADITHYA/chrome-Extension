// Detect the active URL and send it to the background script
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.type === "getURL") {
      sendResponse({ url: window.location.href });
    }
  });
  