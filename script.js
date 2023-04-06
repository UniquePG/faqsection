const accordiam = document.querySelectorAll('.accordiam');

accordiam.forEach(acc => {
    const icon = acc.querySelector('.icon');
    const answer = acc.querySelector('.answere');

    acc.addEventListener('click', () => {
        // icon.classList.toggle('active');
        // answer.classList.toggle('active');


        //! another method to do this
        if(icon.classList.contains('active')){
            icon.classList.remove('active');
            answer.style.maxHeight = null;
        }
        else{
            icon.classList.add('active');
            answer.style.maxHeight = answer.scrollHeight + "px";
        }
    })
})



/* 
    'classList' property se kisi bhi html element me koi class add, remove or toggle(class lagi hogi to hat jayege OR nh lgi hogi to lag jayege) kar skte hai

    classList.contains() se check kr skte hai ke element ke ander ye class lagi hue h ya nahi
    
*/