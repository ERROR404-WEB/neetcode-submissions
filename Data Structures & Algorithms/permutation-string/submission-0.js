class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */

    checkIfArraysAreEqual(a1, a2) {

        for (let i = 0; i < 26; i++) {
            if (a1[i] != a2[i]) return false;
        }

        return true;
    }

    checkInclusion(s1, s2) {
        const freq1 = new Array(26).fill(0);
        const freq2 = new Array(26).fill(0);

        if (s1.length > s2.length) return false;

        for (let i = 0; i < s1.length; i++) {
            freq1[s1.charCodeAt(i) - 97]++;
            freq2[s2.charCodeAt(i) - 97]++;
        }

        if (this.checkIfArraysAreEqual(freq1, freq2)) {
            return true;
        }

        let left = 0;
        for (let right = s1.length; right < s2.length; right++) {

            freq2[s2.charCodeAt(right) - 97]++;
            freq2[s2.charCodeAt(left) - 97]--;
            left++;

            if (this.checkIfArraysAreEqual(freq1, freq2)) {
                return true;
            }
        }

        return false;
    }
}
