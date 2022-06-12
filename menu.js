var inputArray = ["BINH", "HUNG", "PHUOC", "CAO", "KHANH"]
var length = 0;
inputArray.forEach(item=>{
   
    if( item.length>length)length = item.length
})
var outPut = []
function allLongestStrings(inputArray) {
    outPut= inputArray.filter(item=>{
        return item.length ==length
    })
console.log(outPut)
}
allLongestStrings(inputArray)