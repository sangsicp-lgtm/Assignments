function twoSum(nums:number[],target:number):number[]{
   
    let temp:number=0;

    for(let i=0;i<nums.length;i++)
    {
        for(let j=1;j<nums.length;j++)
        {
             temp=nums[i]+nums[j];

        if(temp==target)
        {
        
            return [i,j];
            break;

        }
    }

    }
    return [];

}
console.log(twoSum([2,7,11,15],9))//[0,1]
console.log(twoSum([3,2,4],6))//[1,2]
console.log(twoSum([3,3],6))//[0,1]
console.log(twoSum([4,0,9,1],9))//[1,2]
console.log(twoSum([2,1,7,4,8],12))//[1,2]
console.log(twoSum([2,1,2,1,7],8))//[1,2]