console.log(document.getElementsByClassName('tab'))

function changeTab(){
    tab = document.getElementsByClassName('tab');
    for (let i of tab){
        i.classList.remove('active');
    }
}


