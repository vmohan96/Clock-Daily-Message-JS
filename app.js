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

const clockElement = document.querySelector(".clock");
const clockObject = new DigitalClock(clockElement);

clockObject.start();