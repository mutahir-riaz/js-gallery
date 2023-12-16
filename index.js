let count = 0
const pic = document.getElementById('img') 
let nexBtn = document.getElementById('nex')
let prevBtn = document.getElementById('prev')
function next(){
    
    if(count==0){
         count++
        console.log(count);
        prevBtn.removeAttribute('disabled')
    }
    else if(count==1){
        pic.setAttribute("src","./pic/2.png")
        count++
        prevBtn.style.display="block"
    }
    else if(count==2){
        pic.setAttribute("src","./pic/3.png")
        count++
    }
    else if(count==3){
        pic.setAttribute("src","./pic/4.png")
        count++
        console.log(count);
        nexBtn.setAttribute('disabled',"")
        console.log(nexBtn);
    }

}
function previous(){
    
    if(count==1){
        pic.setAttribute("src","./pic/1.png")
        --count
        prevBtn.setAttribute('disabled',"")
    }
    else if(count==2){
        pic.setAttribute("src","./pic/2.png")
        --count
    }
    else if(count==3){
        pic.setAttribute("src","./pic/3.png")
        --count
        nexBtn.style.display="block"
    }
    else if(count==4){
        pic.setAttribute("src","./pic/3.png")
        --count
        nexBtn.style.display="block"
    }

}