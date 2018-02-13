/* Block consumer google accounts by injecting a custom HTTP header
 * 2015-12-20 Jordan Walsh
 */
 
chrome.webRequest.onBeforeSendHeaders.addListener(
    function(details) {
        details.requestHeaders.push({
            name: "X-GoogApps-Allowed-Domains",
            value: 'ncmcs.net'
        });
        return {requestHeaders: details.requestHeaders};
    },
    {
        urls: ["*://*.google.com/*"]
    },
    ['requestHeaders', 'blocking']
);
