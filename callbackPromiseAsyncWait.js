// //-------------------------- SET TIMEOUT ------------------------------

// const myPosts = [
//     {title: 'Post one', body: 'This is post one body'},
//     {title: 'Post two', body: 'This is post two body'}
// ];

// function getPosts() {
//     setTimeout(() => {  // Delays the running of the contained code by an amount of milliseconds.
//         myPosts.forEach((post) => {
//             console.log(post.title);
//             console.log(post.body);
//         });
//     }, 1000 ); // Time in milliseconds
// }

// function createPost(post) {
//     setTimeout(() => {
//         myPosts.push(post);
//     }, 1000)
// }
// getPosts(); // Delay of 1 second, at this exact point the array still only has 2 objects stored.
// createPost({title: "Post three", body: "This is post three body."}) // Delayed 1 second, then adds another object to the array.
// getPosts();  // Delayed one second but by the time this line runs, the previous .push has occured, Array now has 3 objects.

// //--------------------------------------- CALLBACK METHOD ---------------------------------

// const myPosts = [
//     {title: 'Post one', body: 'This is post one body'},
//     {title: 'Post two', body: 'This is post two body'}
// ];

// function getPosts() {
//     setTimeout(() => {  // Delays the running of the contained code by an amount of milliseconds.
//         myPosts.forEach((post) => {
//             console.log(post.title);
//             console.log(post.body);
//         });
//     }, 1000 ); // Time in milliseconds
// }

// function createPost(post, callback) {
//     setTimeout(() => {
//         myPosts.push(post);
//         callback(); // Using the callback method ensures that the post.push occurs before the getPosts function 
//     }, 5000);
// }
// createPost({title: "Post three", body: "This is post three body."}, getPosts); // Function to be calledback is passed as a parameter

// //---------------------------------- PROMISES ----------------------------------------------

const myPosts = [
    {title: 'Post One', body: 'This is post one body'},
    {title: 'Post two', body: 'This is post two body'}
];
function getPosts() {
    setTimeout( () => {
        myPosts.forEach( (post) => {
            console.log(post.title);
        })
        console.log(myPosts);
    }, 1000);
}
function createPost(post) {
    return new Promise((resolve, reject) => {
        setTimeout( () => {
            myPosts.push(post);
            const error = true;
            if(!error) {
                resolve();
            } else {
                reject("Error something went wrong");
            }
        }, 2000);

    });
}
createPost({title: 'Post Three', body: 'this is the post three body'}).then(getPosts).catch( (error) => {
    console.log(error);
});
  
