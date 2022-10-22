let themeToggler =document.querySelector('.theme-toggler');
themeToggler.addEventListener('click',()=>{

    themeToggler.classList.toggle('active');
    if(themeToggler.classList.contains('active')){
        document.body.classList.add('active')

    }else{
        document.body.classList.remove('active')
    }
})

document.querySelectorAll('.theme-colors .color').forEach((item)=>{

    item.addEventListener('click',()=>{
        let background = item.style.background;
        document.querySelector(':root').style.setProperty('--main-color',background);

    })

})

let theme =document.querySelector('.themes-container');
document.querySelector('#theme-open').addEventListener('click',()=>{

    theme.classList.add('active');
    document.body.style.paddingRight='350px';

})


document.querySelector('#theme-close').addEventListener('click',()=>{

    theme.classList.remove('active');
    document.body.style.paddingRight='0px';

})


let length_slider = document.querySelector('.pass-length input')
let length_slider_span = document.querySelector('.pass-length span')
let button =document.querySelector('.wrapper .btn')
let options = document.querySelectorAll('.wrapper .pass-setting .options .option input')
let input_main = document.querySelector('.input-box input')
let input_indicator = document.querySelector('.pass-indicator')
let indicator_text = document.querySelector('.indcator-text')

// console.log(options)
const updateindicator = ()=>{

    input_indicator.id = length_slider.value <= 8 ? 'weak':length_slider.value <= 16 ? "medium" :"strong" 

    // console.log(input_indicator.id)

if(input_indicator.id == 'weak'){
    indicator_text.style.color = '#e64a4a';
    input_indicator.style.width = ((length_slider.value) * 333 / 100) + '%'


}else if(input_indicator.id == 'medium'){
    indicator_text.style.color = '#f1c80b'; 
    input_indicator.style.width = ((length_slider.value) * 333 / 100)  + '%' 
}else{
    indicator_text.style.color = '#4285f4';  
    input_indicator.style.width = ((length_slider.value) * 333 / 100)  + '%'

}
    // 
    indicator_text.innerHTML = input_indicator.id ;
    
}

length_slider.addEventListener('input',function(){

    length_slider_span.innerHTML = this.value;
    
    updateindicator();

})








const characters ={

    lowercase:"abcdefghijklmnopqrstuvwxyz",
    uppercase:"ABCDEFGHIJKLMNOBQRSTUVWXYZ",
    number:"0123456789",
    symbols:"!@#$%^&*:;.,+-/~<>{}()[]|"
}

button.addEventListener('click',function(){

    let staticpassword ="";
    let passwordLength = length_slider.value;
    // let excudeDuplicate = false ;
options.forEach(option =>{

if(option.checked){

    // console.log(option.id);
if(option.id != "exc-duplicate" && option.id != "spaces" ){
    staticpassword +=characters[option.id]
}else if(option.id === "spaces"){

    staticpassword = `  ${staticpassword}  `

}

 
    // console.log(staticpassword)
}

})

function randompass() {

    let randomCode = "";
    for (let index = 0; index < passwordLength; index++) {
      const randomNum = Math.floor(Math.random() * staticpassword.length);
      randomCode += staticpassword.substring(randomNum, randomNum + 1);
    }
    return randomCode;
  }

let x =randompass();
input_main.value = x;

  
})

