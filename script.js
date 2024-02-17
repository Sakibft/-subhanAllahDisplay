 const subhanAllahDisplay = document.getElementById('subhanAllahDisplay')
 const subhanAllahIncrement = document.getElementById('sub-inc')
 const subhanAllahDecrement = document.getElementById('sub-dec')

 const alhamdulillahDisplay = document.getElementById('alhamdullahDispay')
 const alhamdulillahIncrement = document.getElementById('al-inc')
 const alhamdulillahDicrement = document.getElementById('al-dec')


 const allahuAkberDisplay = document.getElementById('allahuakberDisplay')
 const allahuAkberIncriment = document.getElementById('allah-inc')
 const allahuAkberDecriment = document.getElementById('allah-dec')

 const resetButton = document.getElementById('reset-btn')

//  console.log(alhamdulillahDisplay);

let subhanAllahInitialValue = 0;
let alhamdulillahInitialValue = 0;
let allahukberInitialValue = 0;

// 1
subhanAllahIncrement.addEventListener('click',function(){
  if(subhanAllahInitialValue===33){
    return alert(' Subhan Allah Complete. Please Fillup another one  ')
  }
  subhanAllahInitialValue+= 1;
  subhanAllahDisplay.innerText = subhanAllahInitialValue;
   
})

subhanAllahDecrement.addEventListener('click',function(){
  if(subhanAllahInitialValue === 0){
    return alert ( 'You  added negetive value')
  }
  subhanAllahInitialValue -= 1;
  subhanAllahDisplay.innerText = subhanAllahInitialValue;
})
// 2
alhamdulillahIncrement.addEventListener('click',function(){
  if(alhamdulillahInitialValue===33){
    return alert('Alhamdulillah Completed .Please Filup another one  ')
   }
  alhamdulillahInitialValue=alhamdulillahInitialValue+1;
  console.log(alhamdulillahInitialValue);
  alhamdulillahDisplay.innerText=alhamdulillahInitialValue;
})
alhamdulillahDicrement.addEventListener('click',function(){
  if(alhamdulillahInitialValue===0){
    return alert(' You  added negetive value ')
   }
  alhamdulillahInitialValue=alhamdulillahInitialValue-1;
  console.log(alhamdulillahInitialValue);
  alhamdulillahDisplay.innerText=alhamdulillahInitialValue;
})
// 3
allahuAkberIncriment.addEventListener('click',function(){
  if( allahukberInitialValue === 33){
    return alert('Completed Allahuakber.Please Fillup another one ')
  }
  allahukberInitialValue=allahukberInitialValue+1;
  allahuakberDisplay.innerText=allahukberInitialValue;  
})
allahuAkberDecriment.addEventListener('click',function(){
  if( allahukberInitialValue === 0 ){
    return alert('You added negetive value ')
  }
  allahukberInitialValue=allahukberInitialValue-1;
  allahuakberDisplay.innerText=allahukberInitialValue;  
})
// 4 reset button
resetButton.addEventListener('click',function(){
  subhanAllahDisplay.innerText=0;
  alhamdulillahDisplay.innerText=0;
  allahuAkberDisplay.innerText=0;

})