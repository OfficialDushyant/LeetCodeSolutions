function twoSum(arr: number[], target: number): number[] {
    let map = new Map<number, number>();
    for (let i = 0; i < arr.length; i++) 
        {
        let diff = target - arr[i];
        if (map.has(diff)) {
            return [map.get(diff)!, i];
        }
        map.set(arr[i], i);
    }
    return [];
}

export default twoSum;