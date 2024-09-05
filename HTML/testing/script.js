// JavaScript to play greeting audio based on selected language
function playGreeting(language) {
    const audio = document.getElementById('audio');
    switch(language) {
        case 'hindi':
            audio.src = 'hindi-greeting.mp3'; // Replace with actual audio file path
            break;
        case 'tamil':
            audio.src = 'tamil-greeting.mp3'; // Replace with actual audio file path
            break;
        case 'bengali':
            audio.src = 'bengali-greeting.mp3'; // Replace with actual audio file path
            break;
        default:
            audio.src = '';
    }
    audio.play();
}
