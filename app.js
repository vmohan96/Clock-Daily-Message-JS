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








const clockElement = document.querySelector(".clock");
const clockObject = new DigitalClock(clockElement);

clockObject.start();

const messageElement = document.querySelector(".message");
const messageObject = new DynamicMessage(messageElement);

messageObject.update();

document.style.body.backgroundImage=url('/assets/pexels-harrison-candlin-2441454.jpg');
