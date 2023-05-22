import { herocoin_backend } from "../../declarations/herocoin_backend";

window.addEventListener("load", async function(){
  //console.log("Finished Loading right");
   const totalSupply = await herocoin_backend.totalSupply();
    document.getElementById("tSupply").innerText = totalSupply;
    //console.log(totalSupply);

});

window.addEventListener("load", async function(){

    const totalSymbol = await herocoin_backend.symbol();
    document.getElementById("tSymbol").innerText = totalSymbol;   
   // console.log(totalSymbol);
});

window.addEventListener("load", async function(){

  const userPrincipal = await herocoin_backend.balanceOf();
  document.getElementById("userPrincipal").innerText = userPrincipal;   
  //console.log(totalSymbol);
});

window.addEventListener("load", async function(){

  //const userAccount = await herocoin_backend.getOwner();

  // const totalBalance = await herocoin_backend.balanceOf(userAccount);
  // document.getElementById("totalBalance").innerText = totalBalance;   
  //console.log(totalSymbol);
});






document.querySelector("form").addEventListener("submit", async function(event){
  event.preventDefault(); 
  // to prevent clearing of input number and reloading of the page
  //console.log("successfully submitted");

  const button = event.target.querySelector("#submit-btn"); //the event.target is to target the particular form button we are currently using

  const fromAccount = await herocoin_backend.getOwner();
    const toAccount = parseInt(document.getElementById("to-account").value);
    const transferAmount = parseInt(document.getElementById("transfer-amount").value);

    button.setAttribute("disabled", true);

      if(document.getElementById("input-amount").value.length != 0 && document.getElementById("withdrawal-amount").value.length != 0){
          await herocoin_backend.transfer(fromAccount, toAccount, transferAmount);
        }

      

         // await dbank_backend.compound();

         // update();

    document.getElementById("to-account").value = "";
    document.getElementById("transfer-amount").value = "";

    button.removeAttribute("disabled");
});

async function update(){
// const currentAmount = await herocoin_backend.checkBalance();
// document.getElementById("value").innerText = Math.round(currentAmount * 100) / 100; // the math.round divided by 100 is to convert to 2 decimal places
}