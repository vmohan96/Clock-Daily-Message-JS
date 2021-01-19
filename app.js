class DigitalClock {
    constructor(element) {
        this.element = element
    }

    start() {
        this.update()
        setInterval(() => {
            this.update();
        },500);
    } 

    update() {
        const parts = this.getTimeParts();
        const MinutesFormatted = parts.minute.toString().padStart(2,"0");
        const SecondsFormatted = parts.second.toString().padStart(2,"0");
        const timeFormatted = `${parts.hour}:${MinutesFormatted}:${SecondsFormatted}`;
        const AMPM = parts.isAM ? "AM": "PM";

        this.element.querySelector(".clock-time").textContent = timeFormatted;
        this.element.querySelector(".clock-ampm").textContent = AMPM;

    }

    getTimeParts() {
        const now = new Date()

        return {
            hour: now.getHours() % 12 || 12,
            minute: now.getMinutes(),
            second: now.getSeconds(),
            isAM: now.getHours() < 12

        }
    }
}


class DynamicMessage {
    constructor(element) {
        this.element = element
    }

    getDateParts() {
        const now = new Date()

        return {
            day: now.getDay(),
            date: now.getDate(),
            month: now.getMonth(),
            year: now.getFullYear()

        }
    }
    
    update() {
        const dow_number = this.getDateParts()['day']
        const date = this.getDateParts()['date']
        const year = this.getDateParts()['year']
        
        var month_number = this.getDateParts()['month']
        var day_of_week = 'Nothing'

        if (month_number == 0) {
            var month = 'January'
        } else if (month_number == 1) {
            var month = 'February'
        } else if (month_number == 2) {
            var month = 'March'
        } else if (month_number == 3) {
            var month = 'April'
        } else if (month_number == 4) {
            var month = 'May'
        } else if (month_number == 5) {
            var month = 'June'
        } else if (month_number == 6) {
            var month = 'July'
        } else if (month_number == 7) {
            var month = 'August'
        } else if (month_number == 8) {
            var month = 'September'
        } else if (month_number == 9) {
            var month = 'October'
        } else if (month_number == 10) {
            var month = 'November'
        } else if (month_number == 11) {
            var month = 'December'
        }

        if (dow_number == 0) {
            var day_of_week = 'Sunday'
        } else if (dow_number == 1) {
            var day_of_week = 'Monday'
        } else if (dow_number == 2) {
            var day_of_week = 'Tuesday'
        } else if (dow_number == 3) {
            var day_of_week = 'Wednesday'
        } else if (dow_number == 4) {
            var day_of_week = 'Thursday'
        } else if (dow_number == 5) {
            var day_of_week = 'Friday'
        } else {
            var day_of_week = 'Saturday'
        }

    
        this.element.querySelector(".msg-text").textContent = `Today is ${day_of_week}, ${month} ${date}, ${year}!`;
        
    }

}




function changeBGImage(){
    const now = new Date();
    var day = now.getDay();

    var url_0 = "url(/assets/pexels-harrison-candlin-2441454.jpg)"
    var url_1 = "url(/assets/pexels-aarti-vijay-2693529.jpg)"
    var url_2 = "url(/assets/pexels-andy-vu-3244513.jpg)"
    var url_3 = "url(/assets/pexels-francesco-ungaro-2325446.jpg)"
    var url_4 = "url(/assets/pexels-janez-podnar-1424246.jpg)"
    var url_5 = "url(/assets/pexels-lumn-167699.jpg)"
    var url_6 = "url(/assets/pexels-rok-romih-3312671.jpg)"

    var chosen_url = url_0;

    if (day == 0) {
        var chosen_url = 0
    } else if (day == 1) {
        var chosen_url = url_1
    } else if (day == 2) {
        var chosen_url = url_2 
    } else if (day == 3) {
        var chosen_url = url_3 
    } else if (day == 4) {
        var chosen_url = url_4 
    } else if (day == 5) {
        var chosen_url = url_5 
    } else if (day == 6) {
        var chosen_url = url_6 
    }

    document.body.style.backgroundImage = chosen_url;

}



const clockElement = document.querySelector(".clock");
const clockObject = new DigitalClock(clockElement);

clockObject.start();

const messageElement = document.querySelector(".message");
const messageObject = new DynamicMessage(messageElement);

messageObject.update();

changeBGImage();