const nums = [1, 10, 15, 50, 14, 2, 4, 5, 9, 47];
for(let i = 0; i < nums.length; i++){

    if (nums[i]>15){
        break
    }
    console.log(nums[i]);
}
const countl = [1, 10, -15, -50, -14, 2, 4, 5, 9, 47];
for(let i = 0; i < countl.length; i++){

    if(countl[i]<-5){
        continue;
    }
}
console.log(countl);