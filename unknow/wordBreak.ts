var Trie = function () {
    this.children = {};
    this.isValue = false;
    this.add = function (str, index = 0) {
        if (index === str.length) {
            this.isValue = true;
        } else {
            let c = str[index];
            if (!(c in this.children)) {
                this.children[c] = new Trie();
            }
            this.children[c].add(str, index + 1);
        }
    };
    this.had = function (str, index = 0) {
        if (index === str.length) {
            return this.isValue;
        } else {
            let c = str[index];
            if (!(c in this.children)) {
                return false;
            }
            return this.children[c].had(str, index + 1);
        }
    };
};
const wordBreak = function (s, wordDict) {
    let trie = new Trie();
    wordDict.forEach((s) => {
        trie.add(s);
    });

    let dp = Array.from({ length: s.length + 1 }, () => false);
    dp[0] = true;
    for (let i = 0; i < s.length; i++) {
        if (dp[i] === true) {
            // Going from current i
            for (let j = 1; j <= s.length - i; j++) {
                if (dp[i + j]) continue;
                if (trie.had(s.substring(i, j + i))) {
                    dp[i + j] = true;
                }
            }
        }
    }

    return dp[s.length];
};

wordBreak('leetcode', ['leet']);
