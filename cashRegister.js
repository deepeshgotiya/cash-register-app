const billAmount = document.querySelector("#bill-amt-input");
const givenCash =document.querySelector("#cash-given-input");
const button = document.querySelector("#checkBtn");
const errorBox = document.querySelector("#errorMsg")
const numOfNotes = document.querySelectorAll(".no-of-notes")
const availableNotes = [2000,500,100,20,10,5,1]

function validateAmount(){
    if(billAmount.value>0){
        if(givenCash.value>=billAmount.value){
            const returnAmount = givenCash.value-billAmount.value;
            calculateChange(returnAmount);
        }else{
            errorBox.innerText="Given cash should be equal or grater than tha bill amount ";
        }
    }else{
        errorBox.innerText="invalid Input";
    }
}
function calculateChange (returnAmount){
        for (let i = 0; i < availableNotes.length; i++) {
          const numberOfNotes = Math.trunc(returnAmount / availableNotes[i]);
          returnAmount %= availableNotes[i];
          numOfNotes[i].innerText = numberOfNotes;
        }
      }
      
button.addEventListener("click",validateAmount)