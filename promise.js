const posts =[{title: 'Post1'}];
// const users = [{name: 'Joe', lastActivity: '13th Jan'}]


function getPosts(){
    setTimeout(() => {
        posts.forEach((post, index) => {
            console.log(post.title)
        })
    }, 1000);
}
function createPost(post) {
    return new Promise( (resolve, reject) => {
       
        setTimeout( () => {
            posts.push(post)
            resolve();
            
        }, 2000)
    }) 
}
function deletePost() {
    return new Promise( (resolve, reject) => {
       
        setTimeout( () => {
           let poppedElement = posts.pop();
            resolve(poppedElement);
            
        }, 2000)
    }) 
}

async function start(){
    await createPost({ title: 'Post2'});
    
    getPosts(); 
    await deletePost()
    getPosts(); 
}

start();
// function createPost(post) {
//     return new Promise( (resolve, reject) => {
       
//         setTimeout( () => {
//             posts.title = post;
//             resolve(posts.title);
            
//         }, 1000)
//     }) 
// }
// function updateLastUserActivityTime()  {
//     return new Promise(( resolve, reject) => {
//         setTimeout(() => {
//             users.lastActivity = new Date().getTime();
//             resolve(users.lastActivity)
//         }, 1000)
//     })
// }



// function userUpdatePost() {
// Promise.all([createPost({title:'Post3'}), updateLastUserActivityTime()]).then(([post,time]) => {
//     console.log(post)
//     console.log(time)
   
// })
// .catch((err) =>{
//     console.log(err);
// }) 
// };
// userUpdatePost();