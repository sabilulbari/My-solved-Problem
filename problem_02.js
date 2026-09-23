//Question no 02: Find the first non-repeating character in a string.

const str = "aabbul"

const firstSingleChr=(str)=>{
    let count = {};
    for (let st of str) {
      count[st] = (count[st] || 0) +1;
    }
    console.log(count);
}

firstSingleChr(str);
