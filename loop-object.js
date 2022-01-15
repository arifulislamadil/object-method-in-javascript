/* 
for(let i = 0; i < 10; i++){}
for(const num of numbers){} // for array 
for(const num in numbers){} // for object
*/

const bottle = {
    name: "bottle",
    price: 200,
    color: "blue"
};
for (const bot in bottle) {
    console.log(bottle[bot]);
}

const getArray = Object.entries(bottle);
console.log(getArray);

for (const [key, value] of Object.entries(bottle)) {
    console.log(key, value);
}