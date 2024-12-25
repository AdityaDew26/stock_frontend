chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  setTimeout(() => {
    sendResponse({ success: true });
  }, 1000);

  return true;
});
