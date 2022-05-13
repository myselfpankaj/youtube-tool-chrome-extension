chrome.action.onClicked.addListener((activeTab) => {
  chrome.tabs.create({ url: "https://www.webastrologers.com/wa-api/yt-tools?q="+activeTab.url });
});