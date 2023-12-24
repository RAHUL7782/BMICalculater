function calculate(){
   let age = document.getElementById("age").value;
   let height = document.getElementById("height").value;
   let weight = document.getElementById("weight").value;
   console.log(age);
   console.log(height);
   console.log(weight);

  let ans = Math.floor(weight/height/height*10000);
//    let ans = weight/height/height*10000;
   document.getElementById('solution').innerHTML=ans;

   if(age>18){

    if(ans<18){
        alert("underweight");
        document.getElementById('underweight').style.opacity = 1;

    }

    else if(ans>18 && ans<24){
        alert("normal")
        document.getElementById('normal').style.opacity = 1;

    }
    else{
        alert("overweight");
        document.getElementById('overweight').style.opacity = 1;

    }

   }

   else{
    alert("under age");

   }

}
 