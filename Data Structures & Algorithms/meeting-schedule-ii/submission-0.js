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

        let start = [], end = [];
        let s = 0 , e = 0, count =0, maxx = 0 ;

        for(let i = 0;i<intervals.length;i++){
            start.push(intervals[i].start);
            end.push(intervals[i].end);
        }

        start = start.sort((a,b)=> a - b);
        end = end.sort((a,b)=> a - b);

        while(s < intervals.length){

             if( start[s] < end[e]){
                count++;
                s++;
             }
             else {
                count --;
                e++;
             }
            maxx = Math.max(count,maxx);
        }

        return maxx;

    }
}
