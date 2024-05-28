document.addEventListener('DOMContentLoaded', () => {
    const words = ['coffee', 'book', 'window', 'door', 'table', 'chair', 'lamp', 'phone', 'paper', 'pen', 'pencil', 'notebook', 'desk', 'computer', 'keyboard', 'mouse', 'screen', 'monitor', 'headphones', 'speaker', 'bed', 'pillow', 'blanket', 'sheet', 'towel', 'soap', 'shampoo', 'toothbrush', 'toothpaste', 'mirror', 'sink', 'shower', 'bathtub', 'tissue', 'towel', 'cup', 'mug', 'plate', 'bowl', 'spoon', 'fork', 'knife', 'napkin', 'glass', 'bottle', 'fork', 'knife', 'spoon', 'oven', 'stove', 'microwave', 'fridge', 'freezer', 'pan', 'pot', 'lid', 'strainer', 'cutting', 'board', 'apron', 'dish', 'sponge', 'oven', 'mitt', 'kettle', 'teapot', 'coffee', 'maker', 'toaster', 'blender', 'mixer', 'juicer', 'scale', 'timer', 'whisk', 'ladle', 'tongs', 'peeler', 'grater', 'rolling', 'pin', 'colander', 'corkscrew', 'bottle', 'opener', 'can', 'opener', 'cutlery', 'set', 'silverware', 'dining', 'table', 'dining', 'chair', 'couch', 'sofa', 'armchair', 'recliner', 'ottoman', 'beanbag', 'rug', 'carpet', 'curtain', 'blinds', 'drapes', 'shades', 'throw', 'pillow', 'cushion', 'frame', 'photo', 'frame', 'painting', 'poster', 'calendar', 'clock', 'vase', 'flower', 'plant', 'pot', 'bouquet', 'candle', 'lantern', 'light', 'switch', 'socket', 'plug', 'outlet', 'extension', 'cord', 'adapter', 'battery', 'charger', 'remote', 'control', 'alarm', 'clock', 'thermostat', 'doorbell', 'intercom', 'door', 'knob', 'lock', 'key', 'hanger', 'hook', 'shelf', 'rack', 'drawer', 'cabinet', 'closet', 'wardrobe', 'mirror', 'vanity', 'bench', 'hamper', 'laundry', 'basket', 'iron', 'ironing', 'board', 'sewing', 'machine', 'vacuum', 'cleaner', 'broom', 'mop', 'bucket', 'dustpan', 'trash', 'can', 'bin', 'garbage', 'bag', 'recycling', 'bin', 'scoop', 'squeegee', 'spray', 'bottle', 'bucket', 'scrub', 'brush', 'gloves', 'rag', 'cleaning', 'solution', 'detergent', 'fabric', 'softener', 'bleach', 'air', 'freshener', 'candle', 'matches', 'lighter', 'fire', 'extinguisher', 'smoke', 'detector', 'first', 'aid', 'kit', 'bandage', 'antibiotic', 'ointment', 'painkiller', 'thermometer', 'tweezers', 'scissors', 'cotton', 'swab', 'gauze', 'tape', 'cough', 'medicine', 'nasal', 'spray', 'eye', 'drops', 'contact', 'solution', 'lotion', 'sunscreen', 'lip', 'balm', 'tissues', 'hand', 'sanitizer', 'disinfectant', 'wipes', 'mask', 'glasses', 'wallet', 'purse', 'bag', 'backpack', 'briefcase', 'umbrella', 'hat', 'scarf', 'gloves', 'glasses', 'sunglasses', 'watch', 'bracelet', 'necklace', 'earrings', 'ring', 'belt', 'tie', 'socks', 'shoes', 'boots', 'sandals', 'slippers', 'sneakers', 'shirt', 't-shirt', 'blouse', 'sweater', 'jacket', 'coat', 'hoodie', 'vest', 'dress', 'skirt', 'pants', 'jeans', 'shorts', 'leggings', 'tights', 'suit', 'tie', 'tuxedo', 'swimsuit', 'bikini', 'trunks', 'robe', 'pyjamas', 'nightgown', 'boxers', 'briefs', 'bra', 'underwear', 'pajamas', 'lingerie', 'sleepwear', 'robe', 'slippers', 'sweatshirt', 'sweatpants', 'athletic', 'clothes', 'activewear', 'exercise', 'gear', 'workout', 'attire', 'uniform', 'costume', 'outfit', 'ensemble', 'accessory', 'jewelry', 'bag', 'wallet', 'belt', 'scarf', 'tie', 'hat', 'glasses', 'watch', 'bracelet', 'necklace', 'earrings', 'ring', 'makeup', 'lipstick', 'eyeliner', 'mascara', 'foundation', 'concealer', 'blush', 'bronzer', 'highlighter', 'eyeshadow', 'eyebrow', 'powder', 'nail', 'polish', 'perfume', 'cologne', 'fragrance', 'lotion', 'body', 'wash', 'shampoo', 'conditioner', 'hair', 'gel', 'mousse', 'hairspray', 'brush', 'comb', 'hair', 'dryer', 'straightener', 'curling', 'iron', 'towel', 'robe', 'slippers', 'shower', 'cap', 'razor', 'shaving', 'cream', 'aftershave', 'toothbrush', 'toothpaste', 'mouthwash', 'floss', 'deodorant', 'antiperspirant', 'tampon', 'pad', 'menstrual', 'cup', 'lubricant', 'condom', 'pregnancy', 'test', 'diaper', 'baby', 'wipes', 'baby', 'lotion', 'powder', 'baby', 'oil', 'diaper', 'bag', 'changing', 'pad', 'crib', 'bassinet', 'playpen', 'stroller', 'car', 'seat', 'carrier', 'bouncer', 'swing', 'walker', 'high', 'chair', 'bath', 'tub', 'thermometer', 'towel', 'hood', 'washcloth', 'blanket', 'rattle', 'teether'];

    let chosenWord = '';
    let guessesLeft = 6; // Default difficulty: 6 guesses
    let wordDisplay = '';
    let lettersGuessed = [];

    const wordDisplayElement = document.getElementById('word-display');
    const guessCountElement = document.getElementById('guess-count');
    const lettersElement = document.getElementById('letters');
    const popup = document.getElementById('popup');
    const popupMessage = document.getElementById('popup-message');
    const closePopupButton = document.getElementById('close-popup');
    const settingsSelect = document.getElementById('difficulty');

    function setupGame() {
        chosenWord = words[Math.floor(Math.random() * words.length)];
        guessesLeft = parseInt(settingsSelect.value); // Update guesses based on difficulty
        lettersGuessed = [];
        wordDisplay = '_'.repeat(chosenWord.length);
        updateDisplay();
    }

    function updateDisplay() {
        wordDisplayElement.textContent = wordDisplay;
        guessCountElement.textContent = guessesLeft;
        lettersElement.innerHTML = lettersGuessed.join(' ');
    }

    function checkGuess(letter) {
        if (lettersGuessed.includes(letter)) return;
        lettersGuessed.push(letter);
        if (chosenWord.includes(letter)) {
            for (let i = 0; i < chosenWord.length; i++) {
                if (chosenWord[i] === letter) {
                    wordDisplay = wordDisplay.substring(0, i) + letter + wordDisplay.substring(i + 1);
                }
            }
        } else {
            guessesLeft--;
        }
        updateDisplay();
        checkWinLoss();
    }

    function checkWinLoss() {
        if (wordDisplay === chosenWord) {
            showPopup('Congratulations! You guessed the word!');
            setupGame();
        } else if (guessesLeft === 0) {
            showPopup(`Sorry, you lost! The word was "${chosenWord}".`);
            setupGame();
        }
    }

    function showPopup(message) {
        popupMessage.textContent = message;
        popup.style.display = 'block';
    }

    document.getElementById('back').addEventListener('click', () => {
        window.location.href = 'index.html';
    });

    closePopupButton.addEventListener('click', () => {
        popup.style.display = 'none';
    });

    settingsSelect.addEventListener('change', setupGame); // Update game on difficulty change

    setupGame();

    window.addEventListener('keypress', (event) => {
        const letter = event.key.toLowerCase();
        if (/^[a-z]$/.test(letter)) {
            checkGuess(letter);
        }
    });
});
