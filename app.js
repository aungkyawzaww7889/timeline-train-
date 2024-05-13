const geticonboxes = document.querySelectorAll('.iconbox');
const getbtn = document.getElementById('btn');
const getprogressbar = document.querySelector('.progressbar');


let i = 0;

function colorpaint(){
    
    geticonboxes.forEach((geticonbox)=>{
        // console.log(geticonbox)

        geticonbox.classList.add('active');
        

    });

    function increasei(){
        i++;
        if(i >= 100){
            // i = 0;
            clearInterval(todointerval);
        }
    
        // console.log(i);
        getprogressbar.style.width = `${i}%`;
    
    }
    
    
    let todointerval = setInterval(increasei,40);
    
}





setTimeout(()=>{
    geticonboxes.forEach((geticonbox)=>{
        // console.log(geticonbox)

        geticonbox.classList.remove('active');


    });


    function decreasei(){
        
        i--;

        if(i === 0){
            clearInterval(todeinterval);
        }
        
        // console.log(i);
        getprogressbar.style.width = `${i}%`;
    
    }
    let todeinterval = setInterval(decreasei,40);

    

},7000);

getbtn.addEventListener('click',colorpaint);


setTimeout(()=>{
    window.location.reload();

},12000);


