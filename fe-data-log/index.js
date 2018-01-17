let timing = performance.timing;

let feLogger = {
    performance: {
        dns: timing.domainLookupEnd - timing.domainLookupStart, // dns查询时间
        whiteScreen: timing.responseStart - timing.navigationStart, // 白屏时间
        domready: timing.domContentLoadedEventEnd - timing.navigationStart, // domready
        onload: timing.loadEventEnd - timing.navigationStart
    }
};