/*Given an arbitrary ransom note string and another string containing letters from all the magazines, write a function that will return true if the ransom note can be constructed from the magazines ; otherwise, it will return false.

Each letter in the magazine string can only be used once in your ransom note.

Note:
You may assume that both strings contain only lowercase letters.

canConstruct("a", "b") -> false
canConstruct("aa", "ab") -> false
canConstruct("aa", "aab") -> true */

/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    let str=ransomNote.split("");let str1=magazine.split("");let count=0;
    for(let i=0;i<str.length;i++){
    if(str1.includes(str[i])){
            count++;
			var char=ransomNote.charAt(i);
			var index=str1.indexOf(char);
            str1.splice(index,1)
    }
    }
    if(count==ransomNote.length){
        return true;
    }
    else{
        return false;
    }
};
