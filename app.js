// Dynamic Digital Clock
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

// Sets up the current day and date
class CurrentDay {
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

        const month_list = ['January','February','March','April','May','June','July','August','September','October','November','December']
        const day_list = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday']

        var month = month_list[month_number]
        var day_of_week = day_list[dow_number]

        this.element.querySelector(".day-text").textContent = `Today is ${day_of_week}, ${month} ${date}, ${year}!`;
        
        
        const all_quotes = [
            '“All our dreams can come true, if we have the courage to pursue them.” – Walt Disney',
            '“The best time to plant a tree was 20 years ago. The second best time is now.” – Chinese Proverb',
            '“The journey of a thousand miles begins with one step.” – Lao Tzu',
            '“Do one thing every day that scares you.”― Eleanor Roosevelt',
            '"You can either experience the pain of discipline or the pain of regret. The choice is yours.”',
            '“Your passion is waiting for your courage to catch up.” – Isabelle Lafleche',
            '“People who wonder if the glass is half empty or full miss the point. The glass is refillable.” – Unknown',
            '“We are what we repeatedly do. Excellence, then, is not an act, but a habit.” – Aristotle',
            '“Keep your eyes on the stars, and your feet on the ground.” – Theodore Roosevelt',
            '“You’ve got to get up every morning with determination if you’re going to go to bed with satisfaction.” – George Lorimer',
            '“If opportunity doesn’t knock, build a door.” – Kurt Cobain',
            '“Hard work beats talent when talent doesn’t work hard.” – Tim Notke',
            '“Work hard, be kind, and amazing things will happen.” – Conan O’Brien',
            '“The big secret in life is that there is no secret. Whatever your goal, you can get there if you’re willing to work.” – Oprah Winfrey',
            '“Don’t limit your challenges. Challenge your limits.” – Unknown',
            '“Not knowing you can’t do something is sometimes all it takes to do it.” – Ally Carter',
            '“Start where you are. Use what you have. Do what you can.” – Arthur Ashe',
            '“In the middle of every difficulty lies opportunity.” – Albert Einstein',
            '“Keep your face always toward the sunshine – and shadows will fall behind you.” – Walt Whitman',
            '“Wherever you go, go with all your heart” – Confucius',
            '“Success is liking yourself, liking what you do, and liking how you do it.” – Maya Angelou',
            '“You don’t need to see the whole staircase, just take the first step.” – Martin Luther King Jr.',
            '“Be happy with what you have while working for what you want.” – Helen Keller',
            '“It’s never too late to be what you might’ve been.” – George Eliot',
            '“A winner is a dreamer who never gives up.” – Nelson Mandela',
            '“Oh yes, the past can hurt. But the way I see it, you can either run from it or learn from it.” – The Lion King',
            '“If you think you’re too small to make a difference, try sleeping with a mosquito.” – Dalai Lama',
            '“Failure is the tuition you pay for success.” – Walter Brunell',
            '“If we wait until we’re ready, we’ll be waiting for the rest of our lives.” – Lemony Snicket',
            '“The best revenge is massive success.” – Frank Sinatra',
            '“A goal is a dream with a deadline.” – Napoleon Hill',
            '“You can’t let your failures define you. You have to let your failures teach you.” – Barack Obama',
            ]

        this.element.querySelector(".msg-text").textContent = all_quotes[date];


    }

}


//Changes the background image each day of the week
function changeBGImage(){
    const now = new Date();
    var day = now.getDay();

    var urls = ["url(/assets/pexels-harrison-candlin-2441454.jpg)","url(/assets/pexels-aarti-vijay-2693529.jpg)",
                "url(/assets/pexels-andy-vu-3244513.jpg)","url(/assets/pexels-francesco-ungaro-2325446.jpg)",
                "url(/assets/pexels-janez-podnar-1424246.jpg)","url(/assets/pexels-lumn-167699.jpg)",
                "url(/assets/pexels-rok-romih-3312671.jpg)"]

    var chosen_url = urls[day]
    document.body.style.backgroundImage = chosen_url;

}


//Changes the Spotify playlist link
function changeSpotifyLink() {
    const now = new Date();
    var day = now.getDay();
    var date = now.getDate();

    var playlist = "https://open.spotify.com/embed/playlist/"
    var playlists_side_a = ['37i9dQZF1DWWn6teJIIcfG','37i9dQZF1DWZeKCadgRdKQ','37i9dQZF1DX4sWSpwq3LiO','37i9dQZF1DWWQRwui0ExPn','37i9dQZF1DWZZbwlv3Vmtr','37i9dQZF1DWXLeA8Omikj7','37i9dQZF1DX0jgyAiPl8Af']
    var playlists_side_b = ['37i9dQZF1DWXrDQedVqw6q','37i9dQZF1DWXUpC6mczRpA','37i9dQZF1DXabek8EJisVH','37i9dQZF1DWYmSg58uBxin','37i9dQZF1DWSBRKlyNxSuy','37i9dQZF1DX7K31D69s4M1','37i9dQZF1DXcY4tn4nPCV1']

    if (date < 15) {
        playlist += playlists_side_a[day];
    } else {
        playlist += playlists_side_b[day];
    }
    
    document.getElementById("spotify-widget").src = playlist
    console.log(day);
}



// Running all
const clockElement = document.querySelector(".clock");
const clockObject = new DigitalClock(clockElement);

clockObject.start();

const messageElement = document.querySelector(".message");
const messageObject = new CurrentDay(messageElement);

messageObject.update();

changeBGImage();
changeSpotifyLink();

