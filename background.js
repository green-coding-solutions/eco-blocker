chrome.downloads.onDeterminingFilename.addListener((downloadItem, suggest) => {
    const blockedDomainRoot = "zoom.us";

    const url = new URL(downloadItem.url);
    const domain = url.hostname;
    if (domain.includes(blockedDomainRoot)) {
      chrome.downloads.cancel(downloadItem.id);
    }
  });
