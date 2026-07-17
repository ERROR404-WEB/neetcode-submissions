class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let res = '';
        for(let i=0;i<strs.length;i++){
            console.log()
            res += String(strs[i].length) + '#' + strs[i];
        }
        return res;
    } 

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        let res = [];
        let i = 0;

        while(i < str.length){

            let j = i, num = '';
            while(str[j] != '#'){
                num += str[j];
                j++;
            }

            num = Number(num);
       
            res.push(str.slice(j+1,j+1+num));
        
            i =  j+1+num;
        }
        return res;
    }
}
