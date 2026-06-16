class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */
    subarraySum(nums, k) {

        let dict = {}, count = 0;
        dict[0] = 1;// sum 0 has occured once

        // 2 -1 1 2
        // 2 1 3 5 - prefix sum 
        // (2,1)(1,1)(3,1)(5,1)
        // 

        let prefix = 0;
        for(let num of nums){
            prefix += num;

            // current_sum - oldSum = k
            // current_sum - k = oldSum 

            const rem = prefix - k;
            
            count += dict[rem] || 0;

            dict[prefix] = (dict[prefix] || 0)+1;

        }

        return count;


    }
}
