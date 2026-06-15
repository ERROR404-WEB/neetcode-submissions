class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {

        let maxLen = 0;
        for (let i =0;i<s.length;i++){

            let ss = new Set();
            for(let j =i;j<s.length;j++){
                if(ss.has(s[j])){
                    break;
                }

                ss.add(s[j]);
                maxLen = Math.max(maxLen,ss.size);
            }
        }
        return maxLen;


    }
}
