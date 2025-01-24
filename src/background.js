let activeTab = null;
let startTime = null;

chrome.tabs.onActivated.addListener((activeInfo) => {
  if (startTime && activeTab) {
    logTime(activeTab, Date.now() - startTime);
  }
  chrome.tabs.get(activeInfo.tabId, (tab) => {
    activeTab = tab.url;
    startTime = Date.now();
  });
});

chrome.tabs.onRemoved.addListener(() => {
  if (startTime && activeTab) {
    logTime(activeTab, Date.now() - startTime);
    activeTab = null;
    startTime = null;
  }
});

function logTime(url, duration) {
  // Send data to the server (MongoDB)
  fetch("http://localhost:3000/api/log", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ url, duration })
  });
}
