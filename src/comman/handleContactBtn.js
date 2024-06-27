function isMobileDevice() {
    return /Mobi|Android/i.test(navigator.userAgent);
}

export default function handleButtonClick() {
    if (isMobileDevice()) {
        window.location.href = 'tel:+919902220210';
    } else {
        let elem = document.getElementById('form');
        if (!elem) {
            let homeBtn = document.getElementById('homeBtn');
            homeBtn.click();
        } else {
            document.getElementById('form').scrollIntoView({ behavior: 'smooth' });
        }
    }
}