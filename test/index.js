import { isNum, add, multi } from '../src/index.js';

describe('单元测试', function() {
    it('测试1', function() {
        expect(isNum(1)).toBe(1);
    })
    it('测试2', function() {
        expect(isNum('1')).toBe('1');
    })
    it("加法函数测试", function() {
        let add5 = add(5)
        expect(add5(5)).toBe(10)
    });

    it("乘法函数测试", function() {
        let multi5 = multi(5)
        expect(multi5(5)).toBe(26)
    })
})