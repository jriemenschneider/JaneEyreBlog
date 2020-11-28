var subscribers= [];
function subscribe(email){
    subscribers.push(email);//adds the email given to the list of reaults
    document.getElementById('subInput').value = '';
    console.log(subscribers.length);
}