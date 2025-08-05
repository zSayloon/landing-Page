document.addEventListener('DOMContentLoaded', function(){
    const buttons = document.querySelectorAll('[data-tab-button]');
    
    
    for(let i = 0; i < buttons.length; i++){
        buttons[i].addEventListener('click', function(botao){
            const adaAlvo = botao.target.dataset.tabButton;
            const aba = document.querySelector(`[data-tab-id=${adaAlvo}]`);
            escondeTodasAbas();
            aba.classList.add('show_list--active');
            removeButtonActive();
            botao.target.classList.add('show_tabs_button--active')            
        })
    }
})

function removeButtonActive(){
    const buttons = document.querySelectorAll('[data-tab-button]');
    for(let i = 0; i < buttons.length; i++){
        buttons[i].classList.remove('show_tabs_button--active')
    }
}

function escondeTodasAbas (){
    const tabsContainer = document.querySelectorAll('[data-tab-id]');

    for (let i = 0; i< tabsContainer.length; i++){
        tabsContainer[i].classList.remove('show_list--active');
    }
}