import { formatCurancy } from "../scripts/utils/money.js";     

console.log('Running tests for formatCurancy function');
console.log('nearset cents rounding test cases');
if(formatCurancy(1234)==="12.34"){
    console.log('passed')

}else{
    console.log('failed')
}

console.log('zero test case');
if(formatCurancy(0)==="0.00"){
    console.log('passed')

}else{
    console.log('failed')
}

console.log('round up test case');
if(formatCurancy(2000.02)==="20.00"){
    console.log('passed')

}else{
    console.log('failed')
}