const mainForm_alert = document.getElementById('mainForm_alert');

function showMessage(type, content){

    if(type === ''){
        mainForm_alert.classList = '';
        mainForm_alert.className = 'mainForm_alert'
        return;
    }

    switch (type){
        case 'error':
            type = 'mainForm_alert--error';
            console.log(type);
            break;
        case 'info':
            type = 'mainForm_alert--info';
            console.log(type);

            break;
        case 'success':
            type = 'mainForm_alert--success';
            console.log(type);

            break;
        default:
            type = 'mainForm_alert';
            console.log(type);

    }

    mainForm_alert.classList.toggle(type);
    mainForm_alert.innerText = content;
    console.log('in function');
}