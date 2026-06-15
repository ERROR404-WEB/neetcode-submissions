class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    longestPalindrome(s) {
        let dict = {};
        for(let ch of s){
            dict[ch] = (dict[ch] || 0)+1;
        }

        let maxLen = 0;
        let hasOdd = false;
        for(const ch in dict){

            if(dict[ch] % 2== 0){
                maxLen += dict[ch];
            }
            else{
                maxLen += dict[ch] - 1;
                hasOdd = true;
            }
        }
        console.log(dict)

        if(hasOdd) {
            maxLen++;
        }

        return maxLen;

    }
}
