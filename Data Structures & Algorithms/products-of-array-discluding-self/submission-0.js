class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {

        let pre = [], product = 1;
        let post = new Array(nums.length);
        for(let i =0;i<nums.length;i++){
            product = product * nums[i];
            pre.push(product);
        }

        product = 1;
        for(let i = nums.length - 1;i>=0;i--){
            post[i] = product;
            product = product * nums[i];
        }
        
        let res = [];

        console.log(nums,"\n",pre,"\n",post,"\n")

        for(let i = 0;i<nums.length;i++){


            res.push((pre[i-1] ?? 1)*( post[i] ?? 1) );
        }

        return res;


    }
}
