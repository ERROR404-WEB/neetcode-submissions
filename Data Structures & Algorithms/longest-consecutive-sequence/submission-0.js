class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {

        let dict = {},maxx = 0;
        let s = new Set(nums);
        for(let num of nums){

               let streak = 1 ;
               if(!s.has(num - 1)){
                    while(s.has(num+streak)){
                        streak++;
                    }
                    maxx = Math.max(maxx, streak);
               }
        }


        return maxx;
    }
}
