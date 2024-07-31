const juniorBtn = document.getElementById("juniorBtn");
const midLevelBtn = document.getElementById("midLevelBtn");
const seniorBtn = document.getElementById("seniorBtn");

const juniorDiv = document.getElementById("junior");
const midLevelDiv = document.getElementById("midLevel");
const seniorDiv = document.getElementById("senior");
const realNum = Math.trunc(Math.random()*50)
console.log(realNum);
let total =0;
const maxTotal = 5;
const randomFonk = ()=> {

    const num = parseInt(inp.value)

    if (isNaN(num) || num<0 || num> 50){
        result.textContent="İstenen deger aralığında bir sayı girmelisiniz",
        inp.value=""// Input degerlerini sıfırla
    }else if(num>realNum){
        total++;
        if(total>maxTotal){
            result.textContent=`Oyun bitti! Doğru cevap ${realNum} idi`
            btn.disabled = true;//Butonu devre dısı bırak
            inp.disabled =true;//Inputu devre dısı bırak
        }else {
        result.textContent=`${num}'dan daha küçük sayı giriniz! Şu ana kadar ${total} hakkınızı kullandınız.${maxTotal-total} hakkınız kaldı`
        inp.value=""}
    }else if(num<realNum) {
        total++;
        if(total>maxTotal){
             result.textContent=`Oyun bitti! Doğru cevap ${realNum} idi`
             btn.disabled = true;
            inp.disabled =true;
        }else{
        result.textContent=`${num}'dan daha büyük sayı giriniz!  Şu ana kadar ${total} hakkınızı kullandınız.${maxTotal-total} hakkınız kaldı`
        inp.value=""}
    }else {
        result.textContent="BRAVO!"
        btn.disabled = true;
        inp.disabled =true;
    }
}

document.addEventListener("DOMContentLoaded", () => {
       // Diğer tüm divleri gizleyip belirtilen divi gösteren fonksiyon
       function showDiv(div) {
        // Tüm divleri gizle
        [juniorDiv, midLevelDiv, seniorDiv].forEach(div => {
            div.classList.add("d-none");
        });

        // Belirtilen divi göster
        div.classList.remove("d-none");
    }
 
    // Buton tıklama olaylarını tanımla
    juniorBtn.addEventListener("click", () => {
        showDiv(juniorDiv);
    });

    midLevelBtn.addEventListener("click", () => {
        showDiv(midLevelDiv);
    });

    seniorBtn.addEventListener("click", () => {
        showDiv(seniorDiv);
    });

 
});
btn.addEventListener("click", randomFonk)
document.addEventListener("keydown", (e)=>{
    if(e.key === "Enter"){
        randomFonk()
    }
})

