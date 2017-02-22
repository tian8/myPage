/**
 * Created by 张昕 on 2017/2/22.
 */

window.onload=function(){
    let box= document.getElementsByClassName('box')
    let height = window.screen.height;
    let i = 0;
        for(let i=0;i<box.length;i++){
            box[i].style.animationDelay=i*2+'s';
            box[i].addEventListener('animationstart',(event) =>{
                box[i].style.visibility ='visible';
            })
        }
}


