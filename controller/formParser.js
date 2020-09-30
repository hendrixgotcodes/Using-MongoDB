const mainForm_submit = document.querySelector('.mainForm_submit');
const tb = document.querySelectorAll('.tb');

mainForm_submit.addEventListener('click',(e)=>{
    e.preventDefault();


    if(formIsValid()=== false){
        showMessage('error', 'Fill in all fields')
    }
    else{
        showMessage('info', 'Yes')
    }

    setTimeout(() => {

        showMessage('','')
        
    }, 3000);

})

function formIsValid(){

    

    tb.forEach((box)=>{
        if(box.value === ''){
            return false
        }
        else{
            return true
        }
        
    })

}