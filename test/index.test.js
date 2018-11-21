import isSubset from '../src/index';

const arr1 = [1,2,3];
const arr2 = [3,2,1];
const arr3 = [1,2,3,4];



test('isSubset([1,2,3],[3,2,1])', () => {
    expect(isSubset(arr1,arr2)).toBe(true);
    expect(arr1.length).toBe(3);
    expect(arr2.length).toBe(3);
});

test('isSubset([1,2,3],[1,2,3,4])', () => {
    expect(isSubset(arr1,arr3)).toBe(true);
});

test('isSubset([1,2,3,4],[1,2,3])', () => {
    expect(isSubset(arr3,arr1)).toBe(false);
});

test('isSubset([{id:1},{id:2}],[{id:2},{id:1}],(a,b)=>a.id===b.id)', () => {
    expect(isSubset([{id:1},{id:2}],[{id:2},{id:1}],(a,b)=>a.id===b.id)).toBe(true);
});