// Reference: https://leetcode.com/problems/self-crossing/
// Java solve: https://www.cnblogs.com/grandyang/p/5216856.html

function isSelfCrossing(distance) {
    let length = distance.length;
    if (length < 4) return false;
    for (let i = 3; i < length; i++) {
        // !!! condition 1
        // edge 0 and edge 3 is self-crossing
        // ←----
        // |   ↑
        // ↓   |
        // ----|--→
        //     |
        // 1.1 length of edge 3 is not smaller than length of edge 1
        // 1.2 length of edge 0 is not smaller than length of edge 2
        if (distance[i] >= distance[i - 2] && distance[i - 3] >= distance[i - 1]) {
            return true;
        }
        // !!! condition 2
        // edge 0 and edge 4 is self-crossing
        // ←----
        // |   ↑
        // |   |
        // |   ↑
        // ↓   |
        // ----→
        // 2.1 i >= 4
        // 2.2 length of edge 4 is not smaller than the difference length between edge 2 and edge 0
        // 2.3 length of edge 3 is equal to length of edge 1
        if (i >= 4 && distance[i] >= distance[i - 2] - distance[i - 4] && distance[i - 1] === distance[i - 3]) {
            return true;
        }
        // !!! condition 3
        // edge 1 and edge 6 is self-crossing
        // ←----
        // |   ↑
        // |   |←--
        // |      ↑
        // ↓      |
        // -------→
        // 3.1 i >= 5
        // 3.2 length of edge 5 is not smaller than the difference length between edge 3 and edge 1
        // 3.3 length of edge 4 is not smaller than the difference length between edge 2 and edge 0
        // 3.4 length of edge 4 is not larger than length of edge 2
        // 3.5 length of edge 3 is not smaller than length of edge 1
        if (i >= 5 && distance[i] >= distance[i - 2] - distance[i - 4]
            && distance[i - 1] >= distance[i - 3] - distance[i - 5]
            && distance[i - 1] <= distance[i - 3]
            && distance[i - 2] >= distance[i - 4]
        ) {
            return true;
        }
    }
    // !!! condition 4: not above
    return false;
}

console.log(isSelfCrossing([2, 1, 1, 2])); // true

console.log(isSelfCrossing([1, 2, 3, 4])); // false

console.log(isSelfCrossing([1, 1, 1, 1])); // true

console.log(isSelfCrossing([3, 3, 4, 2, 2])); // false