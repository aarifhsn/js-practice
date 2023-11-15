    // Function to play audio by index
    function playAudio(index) {
        var audio = document.getElementById('audioPlayer' + (index + 1));
        audio.play();
    }

    // Function to pause audio by index
    function pauseAudio(index) {
        var audio = document.getElementById('audioPlayer' + (index + 1));
        audio.pause();
    }

