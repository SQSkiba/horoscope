var signs = ["Aries", "Taurus", "Gemini", "Cancer", "Leo", "Virgo", "Libra", "Scorpio", "Sagittarius", "Capricorn", "Aquarius", "Pisces"];
var horoscope = ["Look forward to success, praise, and pleasure, Aries! Settle down and work relentlessly toward career and self-improvement goals.",
    "Surround yourself with beautiful thoughts in beautiful settings, don't compromise, and don't be rushed. Mother Nature is definitely on your side this year.",
    "It's a year for you to start many new projects and begin exploring new avenues in life. Expect 2018 to bring you improvements and some changes of direction in your social life and career. You could step into a new world.",
    "The year 2018 is an open book for you, Cancer. You have access to all that the stars have to offer. If it's work, family, finances, love, or anything else, there will be a planet ready to give you a hand." ,
    "The year 2018 blazes with energy, challenges, and opportunities of the most practical and far-reaching kind. You're looking at a golden year, Leo!", "" +
    "Virgo, 2018 is your year to get intense! Intensity has its ups and downs, and you can make the most of the ups while coping skillfully with any downs.",
    "The focus is on you for 2018, Libra. Be prepared for people to look to you for advice and leadership. It will be easy and it will come naturally, so relax and enjoy the attention.",
    "You're a powerful person and a force of nature in 2018, Scorpio! The year begins with your planet Mars conjoined with influential Jupiter in Scorpio. Once you decide on a plan of action, nothing and no one will be able to slow you down. ",
    "Enter 2018 moving in high speed, Sagittarius, and accelerate from there. Your planet Jupiter is powerful and ambitious and will keep you going full blast in the direction that moves you forward. ",
    "Life makes more and better sense in 2018, Capricorn. A clearer perspective will make it much easier to achieve your goals and dreams. ",
    "The year 2018 is full of changes, Aquarius, and they all make you more influential and important. You may not always take yourself seriously, but please take what you do seriously, and see great progress and success this year. ",
    "The year 2018 is one for hard work, Pisces, and the stars are working hard for you. On New Year's Day, the moon, Mars, Jupiter, and Neptune are all in water signs. You have keen sensitivities and sharp insights and intuition all year long."
];
var images = ["img/Aries.jpg", "img/Taurus.jpg", "img/gemini.png", "img/Cancer.jpg", "img/Leo.jpg", "img/Virgo.jpg", "img/Libra.jpg", "img/Scorpio.jpg", "img/Sagittarius.jpg", "img/Capricorn.jpg", "img/Aquarius.jpg", "img/Pisces.jpg"];
var name = "names";
function doIt() {
    var month = document.getElementById("Month").value;
    var day = document.getElementById("Day").value;
    var names = document.getElementById("name").value;
    console.log(month);
    console.log(day);
    console.log(names);
    var sign = determineHoroscope(month,day);
    var birthday = birthdayToday(month,day);
    document.getElementById("outputSign").innerHTML = signs[sign];
    document.getElementById("outputMessage").innerHTML = horoscope[sign];
    document.getElementById("image").src = images[sign];
    document.getElementById("nameText").innerHTML = "Hi " + names + "!" ;
    document.getElementById("yourSign").innerHTML = "Your sign is ";
}

function determineHoroscope (month,day) {
//Aries mar 21-Apr 19
    if ((month == 3 && day >= 21) || (month == 4 && day <= 19)) {
        return 0
    }
//Taurus Apr 20-May 20
    if ((month == 4 && day >= 19) || (month == 5 && day <= 20)) {
        return 1
    }
//Gemini May 21-Jun20
    if ((month == 5 && day >= 21) || (month == 6 && day <= 20)) {
        return 2
    }
//Cancer Jun 21-Jul 22
    if ((month == 6 && day >= 21) || (month == 7 && day <= 22)) {
        return 3
    }

//Leo Jul 23- Aug 22
    if ((month == 7 && day >= 23) || (month == 8 && day <= 22)) {
        return 4
    }
//Virgo Aug 23 - Sept 22
    if ((month == 8 && day >= 23) || (month == 9 && day <= 22)) {
        return 5
    }
//Libra Sept 23 - Oct 22
    if ((month == 9 && day >= 23) || (month == 10 && day <= 22)) {
        return 6
    }

//Scorpio Oct 23 - Nov 21
    if ((month == 10 && day >= 23) || (month == 11 && day <= 21)) {
        return 7
    }
//Sagittarius Nov 22 - Dec 21
    if ((month == 11 && day >= 22) || (month == 12 && day <= 21)) {
        return 8
    }
//Capricorn Dec 22 - Jan 19
    if ((month == 12 && day >= 22) || (month == 1 && day <= 19)) {
        return 9
    }
//Aquarius Jan 20-Feb 18
    if ((month == 1 && day >= 20) || (month == 2 && day <= 18)) {
        return 10
    }
//Pisces feb 19 - mar 20
    if ((month == 2 && day >= 19  ) || (month == 3 && day <= 20)) {
        return 11
        }

}



function birthdayToday (month,day) {
    var today = new Date();
    var date = today.getDate();
    var mont = today.getMonth()+1;

    if (date==day && mont == month) {
        document.getElementById("outputBirthday").innerHTML = "Happy Birthday!"
    }
}

function notADay (day){
    console.log(day);
    var month = document.getElementById("Month").value;
    console.log(month);
    if(month==2 && day>28 || month==4 && day>30 || month==6 && day>30 || month ==9 && day>30 ||month==11 && day>30){
        document.getElementById("submit").disabled=true
    }else{
        document.getElementById("submit").disabled=false
    }
}



