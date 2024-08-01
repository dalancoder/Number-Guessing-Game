
/* ------------------------------------------------------ */
/*                      TANIMLAMALAR                      */
/* ------------------------------------------------------ */
const header = document.querySelector(".header");
const inp1 = document.getElementById("inp1");
const inp2 = document.getElementById("inp2");
const inp3 = document.getElementById("inp3");

const result1 = document.getElementById("result1");
const result2 = document.getElementById("result2");
const result3 = document.getElementById("result3");
const juniorBtn = document.getElementById("juniorBtn");
const midLevelBtn = document.getElementById("midLevelBtn");
const seniorBtn = document.getElementById("seniorBtn");
const juniorBtn1 = document.getElementById("juniorBtn1");
const midLevelBtn1 = document.getElementById("midLevelBtn1");
const seniorBtn1 = document.getElementById("seniorBtn1");

const juniorDiv = document.getElementById("junior");
const midLevelDiv = document.getElementById("midLevel");
const seniorDiv = document.getElementById("senior");
const btns21 = document.querySelector(".btns21")

/* ------------------------------------------------------ */
/*                   DİVLERİN GİZLENMESİ                  */
/* ------------------------------------------------------ */
document.addEventListener("DOMContentLoaded", () => {
  // Diğer tüm divleri gizleyip belirtilen divi gösteren fonksiyon
  function showDiv(div1) {
    // Tüm divleri gizle
    [juniorDiv, midLevelDiv, seniorDiv].forEach((div1) => {
      div1.classList.add("d-none");
    });

    // Belirtilen divi göster
    div1.classList.remove("d-none");
  }

  // Buton tıklama olaylarını tanımla
  juniorBtn1.addEventListener("click", () => {
    showDiv(juniorDiv);
    header.classList.add("d-none");
  });

  midLevelBtn1.addEventListener("click", () => {
    showDiv(midLevelDiv);
    header.classList.add("d-none");
  });

  seniorBtn1.addEventListener("click", () => {
    showDiv(seniorDiv);
    header.classList.add("d-none");
  });
});

/* ------------------------------------------------------ */
/*              3 SEVİYE TAHMİN FONKSİYONLARI             */
/* ------------------------------------------------------ */
let total = 0;
let maxTotal = 5;
btns21.disabled=true

const realNum = Math.ceil(Math.random() * 20);
console.log(realNum);
//Junior için Fonksiyon
const randomFonk = () => {
 
  const num = parseInt(inp1.value);
  
  

  if (isNaN(num) || num < 0 || num > 20) {
    (result1.textContent = "İstenen deger aralığında bir sayı girmelisiniz"),
      (inp1.value = "");
       // Input degerlerini sıfırla
  } else if (num > realNum) {
    total++;
    if (total > maxTotal) {
      result1.textContent = `Oyun bitti! Doğru cevap ${realNum} idi`;
      juniorBtn.disabled = true; //Butonu devre dısı bırak
      inp1.disabled = true;
       //Inputu devre dısı bırak
    } else {
      result1.textContent = `${num}'dan daha küçük sayı giriniz! Şu ana kadar ${total} hakkınızı kullandınız.${
        maxTotal - total
      } hakkınız kaldı`;
      inp1.value = "";
      
    }
  } else if (num < realNum) {
    total++;
    if (total > maxTotal) {
      result1.textContent = `Oyun bitti! Doğru cevap ${realNum} idi`;
      juniorBtn.disabled = true;
      inp1.disabled = true;
      
    } else {
      result1.textContent = `${num}'dan daha büyük sayı giriniz!  Şu ana kadar ${total} hakkınızı kullandınız.${
        maxTotal - total
      } hakkınız kaldı`;
      inp1.value = "";
      
    }
  } else {
    result1.textContent = "BRAVO!";
    juniorBtn.disabled = true;
    inp1.disabled = true;
    btns21.disabled=false;
    Swal.fire({
      title: "Bravo! Şimdi bir üst levele ilerlemenin tam zamanı...",
      width: 600,
      padding: "3em",
      color: "#716add",
      background: "#fff url(wallpaperflare.com_wallpaper (14).jpg)",
      backdrop: `
        rgba(0,0,123,0.4)
        url("https://www.hareketligifler.net/data/media/1574/basari-hareketli-resim-0015.gif")
        center top
        no-repeat
      `
    });
  }
};
btns21.disabled=true
// Mid Level için Fonksiyon
const realNum1 = Math.ceil(Math.random() * 50);
console.log(realNum1);
const randomFonkMid = () => {
  btns21.disabled=true
  const num = parseInt(inp2.value);

  if (isNaN(num) || num < 0 || num > 50) {
    (result2.textContent = "İstenen deger aralığında bir sayı girmelisiniz"),
      (inp2.value = ""); // Input degerlerini sıfırla
  } else if (num > realNum1) {
    total++;
    if (total > maxTotal) {
      result2.textContent = `Oyun bitti! Doğru cevap ${realNum1} idi`;
      midLevelBtn.disabled = true; //Butonu devre dısı bırak
      inp2.disabled = true; //Inputu devre dısı bırak
    } else {
      result2.textContent = `${num}'dan daha küçük sayı giriniz! Şu ana kadar ${total} hakkınızı kullandınız.${
        maxTotal - total
      } hakkınız kaldı`;
      inp2.value = "";
    }
  } else if (num < realNum1) {
    total++;
    if (total > maxTotal) {
      result2.textContent = `Oyun bitti! Doğru cevap ${realNum1} idi`;
      midLevelBtn.disabled = true;
      inp2.disabled = true;
    } else {
      result2.textContent = `${num}'dan daha büyük sayı giriniz!  Şu ana kadar ${total} hakkınızı kullandınız.${
        maxTotal - total
      } hakkınız kaldı`;
      inp2.value = "";
    }
  } else {
    result2.textContent = "BRAVO!";
    midLevelBtn.disabled = true;
    inp2.disabled = true;
    btns21.disabled=false;
    Swal.fire({
      title: "Tebrikler! Mid-Level oldunuz, eminim ileride bir gün senior olacaksınız...",
      width: 600,
      padding: "3em",
      color: "#716add",
      background: "#fff url(wallpaperflare.com_wallpaper (14).jpg)",
      backdrop: `
        rgba(0,0,123,0.4)
        url("https://www.hareketligifler.net/data/media/1574/basari-hareketli-resim-0013.gif")
        center top
        no-repeat
      `
    });
  }
};

//Senior için Fonksiyon
 const realNum2 = Math.ceil(Math.random() * 100);
 console.log(realNum2);
const randomFonkSen = () => {
 
  const num = parseInt(inp3.value);

  if (isNaN(num) || num < 0 || num > 100) {
    (result3.textContent = "İstenen deger aralığında bir sayı girmelisiniz"),
      (inp3.value = ""); // Input degerlerini sıfırla
  } else if (num > realNum2) {
    total++;
    if (total > maxTotal) {
      result3.textContent = `Oyun bitti! Doğru cevap ${realNum2} idi`;
      seniorBtn.disabled = true; //Butonu devre dısı bırak
      inp.disabled = true; //Inputu devre dısı bırak
    } else {
      result3.textContent = `${num}'dan daha küçük sayı giriniz! Şu ana kadar ${total} hakkınızı kullandınız.${
        maxTotal - total
      } hakkınız kaldı`;
      inp3.value = "";
    }
  } else if (num < realNum2) {
    total++;
    if (total > maxTotal) {
      result3.textContent = `Oyun bitti! Doğru cevap ${realNum2} idi`;
      seniorBtn.disabled = true;
      inp3.disabled = true;
    } else {
      result3.textContent = `${num}'dan daha büyük sayı giriniz!  Şu ana kadar ${total} hakkınızı kullandınız.${
        maxTotal - total
      } hakkınız kaldı`;
      inp3.value = "";
    }
  } else {
    result3.textContent = "BRAVO!";
    seniorBtn.disabled = true;
    inp3.disabled = true;
    btns21.disabled=false;
    Swal.fire({
      title: "Tebrikler! Senior oldunuz...",
      width: 600,
      padding: "3em",
      color: "#716add",
      background: "#fff url(wallpaperflare.com_wallpaper (14).jpg)",
      backdrop: `
        rgba(0,0,123,0.4)
        url("https://www.hareketligifler.net/data/media/1574/basari-hareketli-resim-0006.gif")
        center top
        no-repeat
      `
    });
  }
};

/* ------------------------------------------------------ */
/*                        EVENTLAR                        */
/* ------------------------------------------------------ */

juniorBtn.addEventListener("click", randomFonk);
midLevelBtn.addEventListener("click", randomFonkMid);
seniorBtn.addEventListener("click", randomFonkSen);
document.querySelector(".btns11").addEventListener("click", ()=> {
  document.getElementById("junior").classList.add("d-none");
  header.classList.remove("d-none")
  inp1.value=""
  result1.textContent=""

})
document.querySelector(".btns12").addEventListener("click", ()=> {
  document.getElementById("midLevel").classList.add("d-none");
  document.getElementById("junior").classList.remove("d-none")
   inp1.value=""
  result1.textContent=""
})
document.querySelector(".btns13").addEventListener("click", ()=> {
  document.getElementById("senior").classList.add("d-none");
  document.getElementById("midLevel").classList.remove("d-none")
   inp1.value=""
  result1.textContent=""
})
document.querySelector(".btns21").addEventListener("click", ()=> {
  document.getElementById("junior").classList.add("d-none");
  document.getElementById("midLevel").classList.remove("d-none")
})
document.querySelector(".btns22").addEventListener("click", ()=> {
  document.getElementById("midLevel").classList.add("d-none");
  document.getElementById("senior").classList.remove("d-none")
})
document.querySelector(".btns31").addEventListener("click", ()=> {
  location.reload()
})
document.querySelector(".btns32").addEventListener("click", ()=> {
  location.reload()
})
document.querySelector(".btns33").addEventListener("click", ()=> {
  location.reload()
})
// document.querySelector

// document.addEventListener("keydown", (e) => {
//   if (e.key === "Enter") {
//     randomFonk();
//     randomFonkMid();
//     randomFonkSen();
//   }
// });

document.querySelector(".img").onclick=()=>{
  document.querySelector(".header").classList.remove("d-none")
  document.querySelector(".img").remove()
}