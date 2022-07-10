const timeSpan = [
    {
        beginTime: 8,
        stopTime: 8.5,
    },
    {
        beginTime: 12,
        stopTime: 14,
    },
    {
        beginTime: 4,
        stopTime: 6,
    },
];

Math.max(...timeSpan.map(item => item.stopTime)) - Math.min(...timeSpan.map(item => item.beginTime)); // 10