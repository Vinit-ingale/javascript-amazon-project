import { formatCurancy } from "../scripts/utils/money.js"; 

describe('test suite: formatCurrancy',()=>{
    it('coverts cents into dollars',()=>{
      expect(formatCurancy(2095)).toEqual('20.95');
    });

    it('works with 0',()=>{
      expect(formatCurancy(0)).toEqual('0.00')
    });

    it('round up to the nearest cents ',()=>{
      expect(formatCurancy(2000.5)).toEqual('20.01')
    })

});