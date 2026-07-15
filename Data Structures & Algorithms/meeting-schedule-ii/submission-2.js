/**
 * Definition of Interval:
 * class Interval {
 *   constructor(start, end) {
 *     this.start = start;
 *     this.end = end;
 *   }
 * }
 */

class Solution {
    /**
     * @param {Interval[]} intervals
     * @returns {number}
     */
    minMeetingRooms(intervals) {

        let count =0, maxx = 0 ;


       let events = [];

for (const { start, end } of intervals) {
    events.push([start, 1]);
    events.push([end, -1]);
}

events.sort((a, b) => {
    if (a[0] !== b[0]) return a[0] - b[0];
    return a[1] - b[1];  
});

    for(let item of events){
        count += item[1];
        maxx = Math.max(count,maxx);
    }
     

        return maxx;

    }
}
