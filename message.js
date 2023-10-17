const message = document.querySelector('#message');
const messageBox = document.querySelector('#message-box');
const messageSearch = document.querySelector('#message-search')
const messages = document.querySelectorAll('.message');

// Search message
const searchMessage = () => {
    const val = messageSearch.value.toLowerCase();
    console.log(val);
    messages.forEach(chat => {
        let name = chat.querySelector('h5').textContent.toLowerCase();
        if(name.indexOf(val) != -1){
            chat.style.display = 'flex';
        }else{
            chat.style.display = 'none';
        }
    })
}

// search chat 
messageSearch.addEventListener('keyup', searchMessage);



// Side bar

const navLink = document.querySelectorAll('.nav-link');

const acaActive = () => {
    navLink.forEach(aca => {
        aca.classList.remove('active')
    });
}

navLink.forEach(aca => {
    aca.addEventListener('click', () => {
        acaActive();
        aca.classList.add('active');

        if(aca.id != 'notifice'){
            document.querySelector('.notification').style.display = 'none'
        }else{
            document.querySelector('.notification').style.display='block'
            document.querySelector('#notifice .count').style.display='none'
        }
    })
});


// window event
window.addEventListener('scroll', ()=>{
    themBOx.style.display= 'none'
    document.querySelector('.notification').style.display ='none'
})



// Theme
const themeMenu = document.querySelector('#themeMenu');
const themBOx  = document.querySelector('.theme');
const fontSize = document.querySelectorAll('.choose-font-size span');
var root = document.querySelector(':root');
const colorPallete = document.querySelectorAll('.choose-color span');
const Bg1 = document.querySelector('.bg1');
const Bg2 = document.querySelector('.bg2');
const Bg3= document.querySelector('.bg3');

themeMenu.addEventListener('click', () => {
    themBOx.style.display= 'grid'
})

document.querySelector('.theme').addEventListener('click', ()=>{
    themBOx.style.display='none'
});



// Font
const removeSizeSelector = () => {
    fontSize.forEach(size => {
        size.classList.remove('active');
    })
}

fontSize.forEach(size => {
    
   size.addEventListener('click', ()=> {
    removeSizeSelector()
    let fontSize;
    size.classList.toggle('active');

    if(size.classList.contains('font1')){
        fontSize = '10px';
        root.style.setProperty('--stk-top-left', '5.4rem');
        root.style.setProperty('--stk-top-right', '5.4rem');
    }else if(size.classList.contains('font2')){
        fontSize = '13px';
        root.style.setProperty('--stk-top-left', '5.4rem');
        root.style.setProperty('--stk-top-right', '-7rem');
    }else if(size.classList.contains('font3')){
        fontSize = '16px';
        root.style.setProperty('--stk-top-left', '-2rem');
        root.style.setProperty('--stk-top-right', '-17rem');
    }else if(size.classList.contains('font4')){
        fontSize = '19px';
        root.style.setProperty('--stk-top-left', '-5rem');
        root.style.setProperty('--stk-top-right', '-25rem');
    }else if(size.classList.contains('font5')){
        fontSize = '20px';
        root.style.setProperty('--stk-top-left', '-10rem');
        root.style.setProperty('--stk-top-right', '-3rem');
    }

    document.querySelector('html').style.fontSize = fontSize;
   })

})



// Color
const changeActiveColorClass = () => {
    colorPallete.forEach(colorPicker => {
        colorPicker.classList.remove('active');
    })
}

colorPallete.forEach(color => {
    color.addEventListener('click', () => {
        changeActiveColorClass();

        if(color.classList.contains('color1')){
            primaryHue = 352;
        }else if(color.classList.contains('color2')){
            primaryHue = 152;
        }else if(color.classList.contains('color3')){
            primaryHue = 252;
        }else if(color.classList.contains('color4')){
            primaryHue = 300;
        }else if(color.classList.contains('color5')){
            primaryHue = 202;
        }

        color.classList.add('active');
        root.style.setProperty('--primary-color-hue' ,primaryHue);
    })
}) 


// Background
let lightColorLightness;
let whiteColorLightness;
let darkColorLightness;


const changeBg = () =>{
    root.style.setProperty('--light-color-lightness', lightColorLightness);
    root.style.setProperty('--white-color-lightness', whiteColorLightness);
    root.style.setProperty('--dark-color-lightness', darkColorLightness);
}

Bg1.addEventListener('click', () => {
    Bg1.classList.add('active');

    Bg2.classList.remove('active');
    Bg3.classList.remove('active');
    window.location.reload();
})

Bg2.addEventListener('click', () => {
    darkColorLightness = '95%';
    whiteColorLightness = '20%';
    lightColorLightness = '15%';

    Bg2.classList.add('active');

    Bg1.classList.remove('active');
    Bg3.classList.remove('active');
    changeBg();
})

Bg3.addEventListener('click', () => {
    darkColorLightness = '95%';
    whiteColorLightness = '10%';
    lightColorLightness = '0%';

    Bg3.classList.add('active');

    Bg1.classList.remove('active');
    Bg2.classList.remove('active');
    changeBg();
})


