import {declOfNum} from "../../src/utils";

describe('declOfNum function', () => {
    test('returns the correct title for 1', () => {
        const titles: [string, string, string] = ['apple', 'apples', 'apples'];
        const result = declOfNum(1, titles);
        expect(result).toEqual('apple');
    });

    test('returns the correct title for 2', () => {
        const titles: [string, string, string] = ['apple', 'apples', 'apples'];
        const result = declOfNum(2, titles);
        expect(result).toEqual('apples');
    });

    test('returns the correct title for 5', () => {
        const titles: [string, string, string] = ['apple', 'apples', 'apples'];
        const result = declOfNum(5, titles);
        expect(result).toEqual('apples');
    });
});
