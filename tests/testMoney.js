import { formatCurancy } from "../scripts/utils/money.js";     

if(formatCurancy(1234)==="12.34"){
    console.log('passed')

}else{
    console.log('failed')
}

if(formatCurancy(0)==="0.00"){
    console.log('passed')

}else{
    console.log('failed')
}

if(formatCurancy(2000.02)==="20.00"){
    console.log('passed')

}else{
    console.log('failed')
}