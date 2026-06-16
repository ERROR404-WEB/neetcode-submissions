class Solution {
    /**
     * @param {number[]} arr
     * @param {number} k
     * @param {number} x
     * @return {number[]}
     */
    findClosestElements(arr, k, x) {

        
        const distances = arr.map((doc)=>{
            return {
                value: doc,
                distance: Math.abs(doc - x)
            }
        })

        distances.sort((a,b)=>{
            if(a.distance == b.distance){
                return a.value - b.value;
            }
            return a.distance - b.distance;
        })

        let result = distances.slice(0,k).map((doc)=> doc.value);
        return result.sort((a,b) => a - b);
    }
}
