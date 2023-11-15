
var playersInfo = [
    ["Mashrafe", 20],
    ["Sakib", 55],
    ["Mushfiq", 75],
    ["Mahmudullah" , 45],
    ["Tamin", 60]
];

function highestRunScorer() {
    
    var highestScorer = playersInfo[0][0];
    var highestScore = playersInfo[0][1];

    for (var i=1; i < playersInfo.length; i++) {

            if(highestScore < playersInfo[i][1]) {
                highestScore  = playersInfo[i][1];
                highestScorer = playersInfo[i][0];
            }
    }
    return highestScorer;
}
var runScorer = highestRunScorer();

document.write(runScorer);