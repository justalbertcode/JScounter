let count = 0;

/* # 1 version
const value = document.getElementById('value');
const decreaseBtn = document.querySelector('.decrease');
const increaseBtn = document.querySelector('.increase');
const resetBtn = document.querySelector('.reset');

decreaseBtn.addEventListener('click', function(){
  count--;
  value.textContent = count; 
})

increaseBtn.addEventListener('click', function(){
   count++;
  value.textContent = count; 
})

resetBtn.addEventListener('click', function(){
  count = 0;
  value.textContent = count; 
})
*/

//#2 version

const value = document.querySelector('#value');
const btns = document.querySelectorAll('.btn');

btns.forEach(function(btn) {
  btn.addEventListener('click', function(e){
    const styles = e.currentTarget.classList;
   
    //check clicked btn
    if(styles.contains("decrease")){
      count--;
    } 
    else if(styles.contains("increase")){
      count++;
    } 
    else {
      count = 0;
    }
    
    //change value color
      count < 0 
        ? value.style.color = "red" 
      : count > 0 
        ? value.style.color = "green"
      : value.style.color = "blue" //if count = 0
    
    //change value on the page
    value.textContent = count;
  })
})
