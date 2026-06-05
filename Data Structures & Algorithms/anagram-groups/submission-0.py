class Solution:
    def groupAnagrams(self, strs: List[str]) -> List[List[str]]:
        resDict = {}

        for s in strs:
            key = ''.join(sorted(s))
            if key in resDict:
                resDict[key].append(s)
            else: 
                resDict[key] = [s]

        return list(resDict.values())