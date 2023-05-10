console.log('person1: shows ticket');
console.log('person2: shows ticket');

const preMovie = async() => {
    const promiseWifeBringingTicks = new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve('ticket')
            // reject('ticket');
        }, 3000)
    });
    const getPopCorn = new Promise((resolve,reject) => resolve(`popcorn`))
    const addButter = new Promise((resolve,reject) => resolve(`butter`))
    const getColdDrinks = new Promise((resolve,reject) => resolve('cold drink'))
    
    let ticket
    try {
    ticket = await promiseWifeBringingTicks;
    } catch(e) {
        ticket = 'sad face'

    }
   let [popcorn,butter,colddrink] = await Promise.all([getPopCorn,addButter,getColdDrinks]);

   console.log(`${popcorn}, ${butter}, ${colddrink}`)

//    console.log(`wife: I have the ${ticket}`);
//    console.log('husband: we should go in');
//    console.log('wife: no i am hungry');

//    let popcorn = await getPopCorn;

//    console.log(`husband: i got some ${popcorn}`);
//    console.log('husband: we should go in');
//    console.log('wife: I need butter on my popcorn');

//    let butter = await addButter;

//    console.log(`husband: i got some ${butter}`)
//    console.log(`wife: i need cold drink with popcorn`)

//    let colddrink = await getColdDrinks;

//    console.log(`husband: i got ${colddrink}`)
//    console.log(`husband: anything else`)
//    console.log(`wife: lets go we are getting late`)
//    console.log(`husband: thank you for the reminder *grins*`)

    return ticket;
}
preMovie().then((m) => console.log(`person3: shows ${m}`))
console.log('person4: shows ticket');
console.log('person5: shows ticket');