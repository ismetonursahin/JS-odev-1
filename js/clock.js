let name = prompt("Adınızı Giriniz: ")
let change = document.querySelector("#myName")
change.innerHTML = `${name}`


function showTime(){
    var getTime = new Date();
    var hrs = getTime.getHours();
    var mnts = getTime.getMinutes();
    var scnds = getTime.getSeconds();
    var day = getTime.getDay();
    var year = getTime.getFullYear();
    var month = getTime.getMonth();
    var date = getTime.getDate();

    let session;

    if(hrs<=12){
        session = "AM";
    }
    else{
        session = "PM"
    }

    switch(day){
        case 0:
            day = "Pazar"
            break;
        case 1:
            day = "Pazartesi"
            break;
        case 2:
            day = "Salı"
            break;
        case 3:
            day = "Çarşamba"
            break;
        case 4:
            day = "Perşembe"
            break;
        case 5:
            day = "Cuma"
            break;
        case 6:
            day = "Cumartesi"
            break;
    }

    switch(month){
        case 0:
            month = "Ocak"
            break;
        case 1:
            month = "Şubat"
            break;
        case 2:
            month = "Mart"
            break;
        case 3:
            month = "Nisan"
            break;
        case 4:
            month = "Mayıs"
            break;
        case 5:
            month = "Haziran"
            break;
        case 6:
            month = "Temmuz"
            break;
        case 7:
            month = "Ağustos"
            break;
        case 8:
            month = "Eylül"
            break;
        case 9:
            month = "Ekim"
            break;
        case 10:
            month = "Kasım"
            break;
        case 11:
            month = "Aralık"
            break;
    }


    document.getElementById('myClock').innerHTML = `${hrs} : ${mnts} : ${scnds}  ${session} ${date} - ${month} - ${year} ${day}`;

}
setInterval(showTime, 10);
showTime();
