


let city = document.getElementById("city");
let country = document.getElementById("country");
let input = document.querySelector("[list='country']");
let submit = document.forms[0];
let tableItems = document.querySelector("tbody");
let datesOptions = document.getElementsByClassName("dates")[0];
let remandSalah = document.getElementsByTagName("h2")[0]

const allCountries = ["الجزائر", "أنغولا", "بنين", "بوتسوانا", "بوركينا فاسو", "بوروندي", "الرأس الأخضر", "الكاميرون", "جمهورية أفريقيا الوسطى", "تشاد", "جزر القمر", "جمهورية الكونغو الديمقراطية", "جمهورية الكونغو", "جيبوتي", "مصر", "غينيا الاستوائية", "إريتريا", "إسواتيني", "إثيوبيا", "الغابون", "غامبيا", "غانا", "غينيا", "غينيا بيساو", "ساحل العاج", "كينيا", "ليسوتو", "ليبيريا", "ليبيا", "مدغشقر", "ملاوي", "مالي", "موريتانيا", "موريشيوس", "المغرب", "موزمبيق", "ناميبيا", "النيجر", "نيجيريا", "رواندا", "ساو تومي وبرينسيب", "السنغال", "سيشيل", "سيراليون", "الصومال", "جنوب أفريقيا", "جنوب السودان", "السودان", "تنزانيا", "توغو", "تونس", "أوغندا", "زامبيا", "زيمبابوي", "أفغانستان", "أرمينيا", "أذربيجان", "البحرين", "بنغلاديش", "بوتان", "بروناي", "كمبوديا", "الصين", "قبرص", "جورجيا", "الهند", "إندونيسيا", "إيران", "العراق", "إسرائيل", "اليابان", "الأردن", "كازاخستان", "الكويت", "قيرغيزستان", "لاوس", "لبنان", "ماليزيا", "جزر المالديف", "منغوليا", "ميانمار", "نيبال", "كوريا الشمالية", "عمان", "باكستان", "فلسطين", "الفلبين", "قطر", "السعودية", "سنغافورة", "كوريا الجنوبية", "سريلانكا", "سوريا", "طاجيكستان", "تايلاند", "تيمور الشرقية", "تركيا", "تركمانستان", "الإمارات العربية المتحدة", "أوزبكستان", "فيتنام", "اليمن", "ألبانيا", "أندورا", "النمسا", "بيلاروسيا", "بلجيكا", "البوسنة والهرسك", "بلغاريا", "كرواتيا", "قبرص", "التشيك", "الدنمارك", "إستونيا", "فنلندا", "فرنسا", "ألمانيا", "اليونان", "المجر", "آيسلندا", "إيرلندا", "إيطاليا", "كوسوفو", "لاتفيا", "ليختنشتاين", "ليتوانيا", "لوكسمبورغ", "مقدونيا الشمالية", "مالطا", "مولدوفا", "موناكو", "الجبل الأسود", "هولندا", "النرويج", "بولندا", "البرتغال", "رومانيا", "روسيا", "سان مارينو", "صربيا", "سلوفاكيا", "سلوفينيا", "إسبانيا", "السويد", "سويسرا", "أوكرانيا", "المملكة المتحدة", "الفاتيكان", "أنتيغوا وباربودا", "جزر البهاما", "بربادوس", "بليز", "كندا", "كوستاريكا", "كوبا", "دومينيكا", "جمهورية الدومينيكان", "السلفادور", "غرينادا", "غواتيمالا", "هايتي", "هندوراس", "جامايكا", "المكسيك", "نيكاراغوا", "بنما", "سانت كيتس ونيفيس", "سانت لوسيا", "سانت فينسنت والغرينادين", "ترينيداد وتوباغو", "الولايات المتحدة الأمريكية", "الأرجنتين", "بوليفيا", "البرازيل", "تشيلي", "كولومبيا", "الإكوادور", "غيانا", "باراغواي", "بيرو", "سورينام", "أوروغواي", "فنزويلا", "أستراليا", "فيجي", "كيريباتي", "جزر مارشال", "ميكرونيزيا", "ناورو", "نيوزيلندا", "بالاو", "بابوا غينيا الجديدة", "ساموا", "جزر سليمان", "تونغا", "توفالو", "فانواتو"];
const englishCapitals = [
    "Algiers", "Luanda", "Porto-Novo", "Gaborone", "Ouagadougou", "Bujumbura", "Praia", "Yaoundé", "Bangui", "N'Djamena", 
    "Moroni", "Kinshasa", "Brazzaville", "Djibouti", "Cairo", "Malabo", "Asmara", "Mbabane", "Addis Ababa", "Libreville", 
    "Banjul", "Accra", "Conakry", "Bissau", "Yamoussoukro", "Nairobi", "Maseru", "Monrovia", "Tripoli", "Antananarivo", 
    "Lilongwe", "Bamako", "Nouakchott", "Port Louis", "Rabat", "Maputo", "Windhoek", "Niamey", "Abuja", "Kigali", 
    "Sao Tome", "Dakar", "Victoria", "Freetown", "Mogadishu", "Pretoria", "Juba", "Khartoum", "Dodoma", "Lomé", 
    "Tunis", "Kampala", "Lusaka", "Harare", "Kabul", "Yerevan", "Baku", "Manama", "Dhaka", "Thimphu", "Bandar Seri Begawan", 
    "Phnom Penh", "Beijing", "Nicosia", "Tbilisi", "New Delhi", "Jakarta", "Tehran", "Baghdad", "Jerusalem", "Tokyo", 
    "Amman", "Nur-Sultan", "Kuwait City", "Bishkek", "Vientiane", "Beirut", "Kuala Lumpur", "Malé", "Ulaanbaatar", 
    "Naypyidaw", "Kathmandu", "Pyongyang", "Muscat", "Islamabad", "Ramallah", "Manila", "Doha", "Riyadh", "Singapore", 
    "Seoul", "Colombo", "Damascus", "Dushanbe", "Bangkok", "Dili", "Ankara", "Ashgabat", "Abu Dhabi", "Tashkent", 
    "Hanoi", "Sanaa", "Tirana", "Andorra la Vella", "Vienna", "Minsk", "Brussels", "Sarajevo", "Sofia", "Zagreb", 
    "Nicosia", "Prague", "Copenhagen", "Tallinn", "Helsinki", "Paris", "Berlin", "Athens", "Budapest", "Reykjavik", 
    "Dublin", "Rome", "Pristina", "Riga", "Vaduz", "Vilnius", "Luxembourg City", "Skopje", "Valletta", "Chisinau", 
    "Monaco", "Podgorica", "Amsterdam", "Oslo", "Warsaw", "Lisbon", "Bucharest", "Moscow", "San Marino", "Belgrade", 
    "Bratislava", "Ljubljana", "Madrid", "Stockholm", "Bern", "Kyiv", "London", "Vatican City", "Saint John's", 
    "Nassau", "Bridgetown", "Belmopan", "Ottawa", "San José", "Havana", "Roseau", "Santo Domingo", "San Salvador", 
    "Grenada", "Guatemala City", "Port-au-Prince", "Tegucigalpa", "Kingston", "Mexico City", "Managua", "Panama City", 
    "Basseterre", "Castries", "Kingstown", "Port of Spain", "Washington, D.C.", "Buenos Aires", "Sucre", "Brasília", 
    "Santiago", "Bogotá", "Quito", "Georgetown", "Asunción", "Lima", "Paramaribo", "Montevideo", "Caracas", 
    "Canberra", "Suva", "Tarawa", "Majuro", "Palikir", "Yaren", "Wellington", "Ngerulmud", "Port Moresby", "Apia", 
    "Honiara", "Nukuʻalofa", "Funafuti", "Port Vila"
];

for(let i =0;i<allCountries.length;i++){
    country.innerHTML += `<option value="${allCountries[i]}">${allCountries[i]}</option>`
}

let dateNow = new Date();
let Day = dateNow.getDate();
let Month = dateNow.getMonth() + 1;
let Year = dateNow.getFullYear()

let month31 = [1,3,5,7,8,10,12];
month31.includes(Month) ? datesOptions.innerHTML+=`<div class="day">31</div>`: "";

document.addEventListener("click",function(e){

    if(e.target.classList.contains("day")){

        [...datesOptions.children].forEach(e=>{
            e.classList.remove("focus")
        })

        showMwaketInCustumDay(e.target.innerHTML)

    }

})

submit.onsubmit = function(e){
    
    tableItems.innerHTML = ""
    let counrty = input.value;

    fetch(`https://api.aladhan.com/v1/calendarByAddress/${Year}/${Month}?address=${englishCapitals[allCountries.indexOf(counrty)] || "cairo" }&method=5`)
    .then((response)=>{
        return response.json()
    })
    .then((response)=>{
        let data = response.data;

        for(let i=0;i<data.length;i++){
            tableItems.innerHTML += `<tr>
                                        <td>${data[i].date.gregorian.date}</td>
                                        <td>${data[i].timings.Fajr.split(" ",1).join("")}</td>
                                        <td>${data[i].timings.Sunrise.split(" ",1).join("")}</td>
                                        <td>${data[i].timings.Dhuhr.split(" ",1).join("")}</td>
                                        <td>${data[i].timings.Asr.split(" ",1).join("")}</td>
                                        <td>${data[i].timings.Maghrib.split(" ",1).join("")}</td>
                                        <td>${data[i].timings.Isha.split(" ",1).join("")}</td>
                                    </tr>`
        }
    })

    e.preventDefault()
}

function showMwaketInCustumDay(day){

    fetch(`https://api.aladhan.com/v1/calendarByAddress/${Year}/${Month}?address=cairo&method=5`)
    .then((response)=>{
        return response.json()
    })
    .then((response)=>{
        let data = response.data;
        tableItems.innerHTML = `<tr>
                                    <td>${data[day - 1].date.gregorian.date}</td>
                                    <td>${data[day - 1].timings.Fajr.split(" ",1).join("")}</td>
                                    <td>${data[day - 1].timings.Sunrise.split(" ",1).join("")}</td>
                                    <td>${data[day - 1].timings.Dhuhr.split(" ",1).join("")}</td>
                                    <td>${data[day - 1].timings.Asr.split(" ",1).join("")}</td>
                                    <td>${data[day - 1].timings.Maghrib.split(" ",1).join("")}</td>
                                    <td>${data[day - 1].timings.Isha.split(" ",1).join("")}</td>
                                </tr>` 

        datesOptions.children[data[day - 1].date.gregorian.day - 1].classList.add("focus")  
    })

}

function showMwaketToday(){
    fetch(`https://api.aladhan.com/v1/calendarByAddress/${Year}/${Month}?address=cairo&method=5`)
    .then((response)=>{
        return response.json()
    })
    .then((response)=>{
        let data = response.data;
        let Fajr = data[dateNow.getDate() - 1].timings.Fajr.split(" ",1).join("")
        let Sunrise = data[dateNow.getDate() - 1].timings.Sunrise.split(" ",1).join("")
        let Dhuhr = data[dateNow.getDate() - 1].timings.Dhuhr.split(" ",1).join("")
        let Asr = data[dateNow.getDate() - 1].timings.Asr.split(" ",1).join("")
        let Maghrib = data[dateNow.getDate() - 1].timings.Maghrib.split(" ",1).join("")
        let Isha = data[dateNow.getDate() - 1].timings.Isha.split(" ",1).join("")

        tableItems.innerHTML = `<tr>
                                    <td>${data[dateNow.getDate() - 1].date.gregorian.date}</td>
                                    <td>${Fajr}</td>
                                    <td>${Sunrise}</td>
                                    <td>${Dhuhr}</td>
                                    <td>${Asr}</td>
                                    <td>${Maghrib}</td>
                                    <td>${Isha}</td>
                                </tr>
        ` 
        datesOptions.children[data[dateNow.getDate() - 1].date.gregorian.day - 1].classList.add("focus")

        let timesNow = Date.parse(`${dateNow}`)

        let timesOfSalwat = [Fajr,Sunrise,Dhuhr,Asr,Maghrib,Isha]

        let timesOfSalwatWithMilleSeconds = []

        for(let i=0;i<timesOfSalwat.length;i++){
            timesOfSalwatWithMilleSeconds.push(Date.parse(`${Month}-${Day}-${Year} ${timesOfSalwat[i]}`))
        }

        let azanNow = timesOfSalwatWithMilleSeconds.reduce((acc,cur)=>{
                return timesNow > acc && timesNow <cur ? acc : cur
        })

        if(timesOfSalwatWithMilleSeconds.indexOf(azanNow) === 5 && (new Date() <= Date.parse(`${Month}-${Day}-${Year} 23:59:59`)) && (new Date() > timesOfSalwatWithMilleSeconds[5])){

                let monthOfSecondDay = data[dateNow.getDate()].date.gregorian.month.number;
                let dayOfSecondDay = data[dateNow.getDate()].date.gregorian.day;
                let yearOfSecondDay = data[dateNow.getDate()].date.gregorian.year;
                let timesOfFajrSecondDay = data[dateNow.getDate()].timings.Fajr.split(" ",1).join("");
                let fajrSecondDayWithMillSecond = Date.parse(`${monthOfSecondDay}-${dayOfSecondDay}-${yearOfSecondDay} ${timesOfFajrSecondDay}`)

                remainigTimeToSalwat(fajrSecondDayWithMillSecond , 0)

        }else if( timesOfSalwatWithMilleSeconds.indexOf(azanNow) === 5){
            remainigTimeToSalwat(timesOfSalwatWithMilleSeconds[0]  , 0)
        }else{
            remainigTimeToSalwat(timesOfSalwatWithMilleSeconds[timesOfSalwatWithMilleSeconds.indexOf(azanNow) + 1]  , timesOfSalwatWithMilleSeconds.indexOf(azanNow) + 1)
        }
    })
    
}

showMwaketToday()

function remainigTimeToSalwat(timeWithMillesecond , indexOfAsmaaElsalwat){
    
    let asmaaElsalwat = ["الفجر", "الشروق","الظهر" , "العصر" , "المغرب", "العشاء"];

    setInterval(()=>{

        let timeRemain = ((timeWithMillesecond - new Date()) / 1000 /60/60) *60
        let HourRemain= timeRemain / 60
        let minuteRemain = (HourRemain - Math.floor(HourRemain)) * 60
        let secondReamin = ((minuteRemain - Math.floor(minuteRemain)) * 60)

        remandSalah.innerHTML = `
                                المتبقي علي ${asmaaElsalwat[indexOfAsmaaElsalwat]}
                                ${Math.floor(secondReamin).toString().length == 1 ? `0${Math.floor(secondReamin)}` : Math.floor(secondReamin)} :
                                ${Math.floor(minuteRemain).toString().length == 1 ? `0${Math.floor(minuteRemain)}` : Math.floor(minuteRemain)} :
                                ${Math.floor(HourRemain).toString().length   == 1 ? `0${Math.floor(HourRemain)}`   : Math.floor(HourRemain)}
        `
    },1000)

}

