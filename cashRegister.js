const billAmount = document.querySelector("#bill-amt-input");
const givenCash =document.querySelector("#cash-given-input");
const button = document.querySelector("#checkBtn");
const errorBox = document.querySelector("#errorMsg")
const numOfNotes = document.querySelectorAll(".no-of-notes")
const availableNotes = [2000,500,100,20,10,5,1]

// let billAmountValue = Number(billAmount.value)
// let givenCashValue =Number(givenCash.value)

function validateAmount(){
    let billAmountValue = Number(billAmount.value)
    let givenCashValue =Number(givenCash.value)
    if(billAmountValue > 0 && givenCashValue > 0){
        if(billAmountValue <= givenCashValue){
            const returnAmount = givenCashValue - billAmountValue;
            if(returnAmount == 0){
                errorBox.innerText = "No Amount to return"
            }else{
                errorBox.innerText = returnAmount;
                calculateChange(returnAmount)
            }
        }
    }else if(billAmountValue < 0 && givenCashValue < 0){
        errorBox.innerText = "Given Amount should be greater or equal to Bill Amount"
    }}
    // if(billAmountValue <= givenCashValue){
    //     const returnAmount = givenCashValue - billAmountValue;
    //     if(returnAmount == 0){
    //         errorBox.innerText = "No Amount to return"
    //     }else{
    //         errorBox.innerText = returnAmount;
    //         calculateChange(returnAmount)
    //     }
    // }else{
    //     errorBox.innerText = "Given Amount should be greater or equal to Bill Amount"
    // }
    // }
function calculateChange (returnAmount){
        for (let i = 0; i < availableNotes.length; i++) {
          const numberOfNotes = Math.trunc(returnAmount / availableNotes[i]);
          returnAmount %= availableNotes[i];
          numOfNotes[i].innerText = numberOfNotes;
        }
      }
      
button.addEventListener("click",validateAmount)