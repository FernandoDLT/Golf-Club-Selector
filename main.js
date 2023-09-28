document.querySelector('h1').addEventListener('click', checkYards);

function checkYards() {
    let yards = Number(document.querySelector('#danceDanceRevolution').value);
    let resultElement = document.querySelector('#result'); // Get the result element

    if (yards < 9) {
        resultElement.textContent = 'Use your Putter, you got this...';
    } else if (yards >= 10 && yards < 79) {
        resultElement.textContent = 'Use your 60 Degree Wedge';
    } else if (yards >= 80 && yards < 110) {
        resultElement.textContent = 'Use your Sand Wedge';
    } else if (yards >= 110 && yards < 120) {
        resultElement.textContent = 'Use your Pitching Wedge';
    } else if (yards >= 120 && yards < 130) {
        resultElement.textContent = 'Use your 9 Iron';
    } else if (yards >= 130 && yards < 140) {
        resultElement.textContent = 'Use your 8 Iron';
    } else if (yards >= 150 && yards < 160) {
        resultElement.textContent = 'Use your 7 Iron';
    } else if (yards >= 160 && yards < 170) {
        resultElement.textContent = 'Use your 6 Iron';
    } else if (yards >= 170 && yards < 180) {
        resultElement.textContent = 'Use your 5 Iron';
    } else if (yards >= 180 && yards < 190) {
        resultElement.textContent = 'Use your 4 Iron';
    } else if (yards >= 190 && yards < 200) {
        resultElement.textContent = 'Use your 3 Iron';
    } else if (yards >= 200 && yards < 220) {
        resultElement.textContent = 'Use your 5 Wood';
    } else if (yards >= 220 && yards < 250) {
        resultElement.textContent = 'Use your 3 Wood';
    } else if (yards > 250) {
        resultElement.textContent = 'Use your Driver, Big Fella!';
    }
}
