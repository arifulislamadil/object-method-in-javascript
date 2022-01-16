const first = { a: 1 };
const second = { a: 1 };
const third = first;

if (JSON.stringify(first) === JSON.stringify(second)) {

    console.log("object are equal");
} else {
    console.log("Object are diffirent");
}



