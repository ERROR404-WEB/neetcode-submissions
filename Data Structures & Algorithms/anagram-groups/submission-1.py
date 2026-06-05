class Solution:
    def groupAnagrams(self, strs: List[str]) -> List[List[str]]:
        resDict = {}

        for s in strs:
            count = [0] * 26
            for ch in s:
                count[ord(ch) - ord('a')] += 1

            key = tuple(count)

            if key in resDict:
                resDict[key].append(s)
            else: 
                resDict[key] = [s]

        return list(resDict.values())