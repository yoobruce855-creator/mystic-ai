// ===== PROFESSIONAL MYSTIC AI - MONETIZATION READY =====

const tarotCards = [
    { name: 'The Fool', emoji: '🃏', meaning: 'New Beginning', description: 'New beginnings, spontaneity, and a free spirit. Embrace new journeys with optimism.' },
    { name: 'The Magician', emoji: '🎩', meaning: 'Manifestation', description: 'You have all the tools needed to succeed. Channel your willpower and focus.' },
    { name: 'The High Priestess', emoji: '🌙', meaning: 'Intuition', description: 'Listen to your inner voice. Trust your instincts and spiritual wisdom.' },
    { name: 'The Empress', emoji: '👑', meaning: 'Abundance', description: 'Growth and prosperity await. Creativity flows freely in your life.' },
    { name: 'The Emperor', emoji: '⚜️', meaning: 'Authority', description: 'Take charge with confidence. Establish order and clear boundaries.' },
    { name: 'The Hierophant', emoji: '📿', meaning: 'Tradition', description: 'Seek guidance from mentors. Honor traditions while finding your path.' },
    { name: 'The Lovers', emoji: '💕', meaning: 'Love & Choices', description: 'Significant relationships or decisions await. Follow your heart wisely.' },
    { name: 'The Chariot', emoji: '🏇', meaning: 'Victory', description: 'You are in control and moving forward. Success is within reach.' },
    { name: 'Strength', emoji: '🦁', meaning: 'Inner Power', description: 'Face challenges with compassion. True strength comes from within.' },
    { name: 'The Hermit', emoji: '🕯️', meaning: 'Soul Searching', description: 'Take time for solitude and reflection. Seek wisdom from within.' },
    { name: 'Wheel of Fortune', emoji: '☸️', meaning: 'Change', description: 'Life is in constant motion. Good fortune may be coming your way.' },
    { name: 'Justice', emoji: '⚖️', meaning: 'Fairness', description: 'Seek balance and make fair decisions. Truth will prevail.' },
    { name: 'The Hanged Man', emoji: '🙃', meaning: 'New Perspective', description: 'Pause and see things differently. Surrender brings wisdom.' },
    { name: 'Death', emoji: '💀', meaning: 'Transformation', description: 'Something must end for new beginnings. Embrace profound change.' },
    { name: 'Temperance', emoji: '🍷', meaning: 'Balance', description: 'Find the middle path. Blend opposing forces harmoniously.' },
    { name: 'The Devil', emoji: '😈', meaning: 'Bondage', description: 'Examine what enslaves you. Break free from unhealthy attachments.' },
    { name: 'The Tower', emoji: '🗼', meaning: 'Sudden Change', description: 'Unexpected events shake foundations. Necessary change brings liberation.' },
    { name: 'The Star', emoji: '⭐', meaning: 'Hope', description: 'After darkness comes light. Your wishes may come true.' },
    { name: 'The Moon', emoji: '🌙', meaning: 'Illusion', description: 'Things may not be as they seem. Trust intuition but verify facts.' },
    { name: 'The Sun', emoji: '☀️', meaning: 'Success', description: 'Positivity radiates from you. Success and happiness are yours.' },
    { name: 'Judgement', emoji: '📯', meaning: 'Rebirth', description: 'Time of reckoning and reflection. Rise to higher consciousness.' },
    { name: 'The World', emoji: '🌍', meaning: 'Completion', description: 'You have achieved your goals. Celebrate your success and fulfillment.' }
];

const dreamSymbols = {
    'snake': { symbol: '🐍', meaning: 'Transformation', interpretation: 'Snakes represent transformation, healing, and rebirth. A snake shedding its skin symbolizes personal growth and renewal.', advice: 'Embrace change and trust your healing journey.' },
    'water': { symbol: '💧', meaning: 'Emotions', interpretation: 'Water represents your emotional state. Clear water indicates peace; turbulent water suggests emotional turmoil.', advice: 'Reflect on your emotional well-being and address unresolved feelings.' },
    'fire': { symbol: '🔥', meaning: 'Passion', interpretation: 'Fire symbolizes passion and transformation. Controlled fire represents creative energy; wildfire suggests emotions out of control.', advice: 'Channel your passion productively.' },
    'flying': { symbol: '🦅', meaning: 'Freedom', interpretation: 'Flying represents freedom and rising above problems. Effortless flying indicates confidence and success.', advice: 'You have the power to rise above challenges.' },
    'falling': { symbol: '💫', meaning: 'Loss of Control', interpretation: 'Falling indicates feelings of losing control or anxiety. It may reflect fear of failure.', advice: 'Identify areas where you feel out of control and regain stability.' },
    'death': { symbol: '💀', meaning: 'Endings', interpretation: 'Death symbolizes endings and new beginnings. Something in your life is ending to make way for something new.', advice: 'Embrace endings as opportunities for growth.' },
    'money': { symbol: '💰', meaning: 'Self-Worth', interpretation: 'Money represents value and self-worth. Finding money suggests discovering talents; losing it may indicate low self-esteem.', advice: 'Recognize your inherent value.' },
    'house': { symbol: '🏠', meaning: 'Self', interpretation: 'Houses represent your sense of self and security. Different rooms symbolize different aspects of your psyche.', advice: 'Explore different aspects of yourself.' },
    'cat': { symbol: '🐱', meaning: 'Independence', interpretation: 'Cats symbolize independence and intuition. A friendly cat suggests comfort with independence.', advice: 'Trust your intuition and embrace independence.' },
    'dog': { symbol: '🐕', meaning: 'Loyalty', interpretation: 'Dogs represent loyalty and protection. A friendly dog indicates trustworthy relationships.', advice: 'Value your loyal relationships.' }
};

const fortuneMessages = [
    { emoji: '⭐', title: 'Exceptional Day', message: 'Extraordinary opportunities await. The universe aligns in your favor.', advice: 'Take bold action. Your confidence will attract success.' },
    { emoji: '🌟', title: 'Abundant Blessings', message: 'Pleasant surprises and positive energy fill your day.', advice: 'Express gratitude and share your good fortune.' },
    { emoji: '💫', title: 'Steady Progress', message: 'Consistent effort leads to meaningful progress today.', advice: 'Stay focused on goals. Celebrate small wins.' },
    { emoji: '🌈', title: 'Creative Inspiration', message: 'Your creativity peaks today. Innovative ideas flow freely.', advice: 'Express yourself creatively. Try something new.' },
    { emoji: '✨', title: 'Magical Synchronicities', message: 'Pay attention to signs. The universe communicates with you.', advice: 'Trust your intuition. Notice patterns and signs.' }
];

let userCredits = 3;

document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('.service-card').forEach(card => {
        card.addEventListener('click', function () {
            const service = this.getAttribute('data-service');
            if (service === 'saju' || service === 'naming') {
                alert('Coming soon! This feature is under development.');
            } else {
                showScreen(service + 'Screen');
            }
        });
    });
    updateCreditsDisplay();
});

function showScreen(screenId) {
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
    const screen = document.getElementById(screenId);
    if (screen) {
        screen.classList.add('active');
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
}

function updateCreditsDisplay() {
    document.getElementById('userCredits').textContent = userCredits;
}

function drawTarotCards() {
    if (userCredits < 1) {
        alert('Not enough credits! You need 1 credit.');
        return;
    }
    userCredits--;
    updateCreditsDisplay();

    const shuffled = [...tarotCards].sort(() => Math.random() - 0.5);
    const drawn = shuffled.slice(0, 3);

    for (let i = 0; i < 3; i++) {
        document.getElementById(`card${i + 1}Emoji`).textContent = drawn[i].emoji;
        document.getElementById(`card${i + 1}Name`).textContent = drawn[i].name;
        document.getElementById(`card${i + 1}Meaning`).textContent = drawn[i].meaning;
        document.getElementById(`card${i + 1}Description`).textContent = drawn[i].description;
    }
    document.getElementById('tarotResult').classList.remove('hidden');
}

function analyzeDream() {
    const dreamText = document.getElementById('dreamInput').value.trim().toLowerCase();
    if (!dreamText) {
        alert('Please describe your dream first!');
        return;
    }
    if (userCredits < 1) {
        alert('Not enough credits! You need 1 credit.');
        return;
    }
    userCredits--;
    updateCreditsDisplay();

    let matchedSymbol = null;
    for (const [key, value] of Object.entries(dreamSymbols)) {
        if (dreamText.includes(key)) {
            matchedSymbol = value;
            break;
        }
    }
    if (!matchedSymbol) {
        matchedSymbol = {
            symbol: '🌟',
            meaning: 'Unique Dream',
            interpretation: 'Your dream is deeply personal and reflects your subconscious processing of recent events and emotions.',
            advice: 'Journal about your dream and the emotions it evoked. Consider connections to your waking life.'
        };
    }

    document.getElementById('dreamSymbol').textContent = matchedSymbol.symbol;
    document.getElementById('dreamMeaning').textContent = matchedSymbol.meaning;
    document.getElementById('dreamInterpretation').textContent = matchedSymbol.interpretation;
    document.getElementById('dreamAdvice').textContent = matchedSymbol.advice;
    document.getElementById('dreamResult').classList.remove('hidden');
}

function checkCompatibility() {
    const name1 = document.getElementById('person1Name').value.trim();
    const date1 = document.getElementById('person1Date').value;
    const time1 = document.getElementById('person1Time').value || '12:00';
    const gender1 = document.getElementById('person1Gender').value;
    const name2 = document.getElementById('person2Name').value.trim();
    const date2 = document.getElementById('person2Date').value;
    const time2 = document.getElementById('person2Time').value || '12:00';
    const gender2 = document.getElementById('person2Gender').value;

    if (!name1 || !date1 || !name2 || !date2) {
        alert('Please fill in all required fields!');
        return;
    }
    if (userCredits < 2) {
        alert('Not enough credits! You need 2 credits.');
        return;
    }
    userCredits -= 2;
    updateCreditsDisplay();

    // UNIQUE HASH ALGORITHM - ensures different inputs = different results
    const createHash = (str) => {
        let hash = 0;
        for (let i = 0; i < str.length; i++) {
            const char = str.charCodeAt(i);
            hash = ((hash << 5) - hash) + char;
            hash = hash & hash;
        }
        return Math.abs(hash);
    };

    const person1Data = `${name1}|${date1}|${time1}|${gender1}`.toLowerCase();
    const person2Data = `${name2}|${date2}|${time2}|${gender2}`.toLowerCase();
    const combinedData = person1Data + person2Data;

    const hash1 = createHash(person1Data);
    const hash2 = createHash(person2Data);
    const combinedHash = createHash(combinedData);

    const birth1 = new Date(date1 + 'T' + time1);
    const birth2 = new Date(date2 + 'T' + time2);

    // Detailed name analysis
    const getNameValue = (name) => {
        let value = 0;
        for (let i = 0; i < name.length; i++) {
            value += name.charCodeAt(i) * (i + 1);
        }
        return value;
    };

    const name1Value = getNameValue(name1.toLowerCase());
    const name2Value = getNameValue(name2.toLowerCase());
    const nameInteraction = (name1Value * name2Value) % 10000;

    const totalMinutes1 = birth1.getHours() * 60 + birth1.getMinutes();
    const totalMinutes2 = birth2.getHours() * 60 + birth2.getMinutes();
    const timeFactor = Math.abs(totalMinutes1 - totalMinutes2);

    const dayOfYear1 = Math.floor((birth1 - new Date(birth1.getFullYear(), 0, 0)) / 86400000);
    const dayOfYear2 = Math.floor((birth2 - new Date(birth2.getFullYear(), 0, 0)) / 86400000);
    const seasonalHarmony = 100 - Math.abs(dayOfYear1 - dayOfYear2) / 3.65;

    const genderBonus = (gender1 !== gender2) ? 8 : 5;

    // LOVE SCORE
    const loveRaw = (hash1 % 40) + (hash2 % 40) + (nameInteraction % 30) + (birth1.getDate() + birth2.getDate()) / 2 + genderBonus;
    const loveScore = Math.min(100, Math.max(35, Math.round(loveRaw)));

    // COMMUNICATION SCORE
    const commRaw = (combinedHash % 50) + (50 - timeFactor / 10) + ((12 - Math.abs(birth1.getMonth() - birth2.getMonth())) * 3) + (name1.length + name2.length);
    const commScore = Math.min(100, Math.max(30, Math.round(commRaw)));

    // TRUST SCORE
    const yearSum = birth1.getFullYear() + birth2.getFullYear();
    const trustRaw = (yearSum % 45) + seasonalHarmony * 0.4 + ((365 - Math.abs(dayOfYear1 - dayOfYear2)) / 10) + (hash1 % 20);
    const trustScore = Math.min(100, Math.max(35, Math.round(trustRaw)));

    // OVERALL SCORE
    const baseOverall = (loveScore * 0.4) + (commScore * 0.3) + (trustScore * 0.3);
    const uniqueAdjustment = (combinedHash % 15) - 7;
    const overallScore = Math.min(100, Math.max(30, Math.round(baseOverall + uniqueAdjustment)));

    document.getElementById('compatScore').textContent = overallScore + '%';
    document.getElementById('loveScore').textContent = loveScore + '%';
    document.getElementById('commScore').textContent = commScore + '%';
    document.getElementById('trustScore').textContent = trustScore + '%';

    let description, advice;
    if (overallScore >= 85) {
        const strengths = ['deep emotional connection', 'natural understanding', 'shared values', 'complementary energies'];
        const strength = strengths[combinedHash % strengths.length];
        description = `${name1} and ${name2} share an exceptional ${strength}! Your compatibility score of ${overallScore}% indicates outstanding potential. The stars align beautifully for this relationship.`;
        advice = 'This rare connection deserves nurturing. Continue building on your strong foundation through open communication and mutual support.';
    } else if (overallScore >= 70) {
        const aspects = ['communication style', 'life goals', 'emotional wavelength', 'core values'];
        const aspect = aspects[combinedHash % aspects.length];
        description = `${name1} and ${name2} have strong compatibility (${overallScore}%), particularly in ${aspect}. While some challenges may arise, your solid foundation provides excellent potential.`;
        advice = 'Focus on your natural strengths as a couple. Address differences with patience and understanding.';
    } else if (overallScore >= 55) {
        const areas = ['mutual respect', 'shared interests', 'emotional support', 'life balance'];
        const area = areas[combinedHash % areas.length];
        description = `${name1} and ${name2} show moderate compatibility at ${overallScore}%. Success will come through ${area} and conscious effort.`;
        advice = 'Embrace differences as opportunities for growth. Communication and compromise are key.';
    } else {
        const challenges = ['different life rhythms', 'contrasting communication styles', 'varied priorities', 'distinct emotional needs'];
        const challenge = challenges[combinedHash % challenges.length];
        description = `${name1} and ${name2} have ${overallScore}% compatibility, indicating ${challenge}. This requires extra understanding and effort.`;
        advice = 'Success requires conscious effort and clear communication. Focus on building strong foundations through shared experiences.';
    }

    document.getElementById('compatDescription').textContent = description;
    document.getElementById('compatAdvice').textContent = advice;
    document.getElementById('compatibilityResult').classList.remove('hidden');
}

function getDailyFortune() {
    const today = new Date();
    const seed = today.getDate() + today.getMonth() * 31;
    const fortuneIndex = seed % fortuneMessages.length;
    const fortune = fortuneMessages[fortuneIndex];

    const luckyNums = [];
    for (let i = 0; i < 6; i++) {
        luckyNums.push(((seed * (i + 1) * 7) % 45) + 1);
    }

    document.getElementById('fortuneEmoji').textContent = fortune.emoji;
    document.getElementById('fortuneTitle').textContent = fortune.title;
    document.getElementById('fortuneMessage').textContent = fortune.message;
    document.getElementById('luckyNumbers').textContent = luckyNums.join(', ');
    document.getElementById('todayAdvice').textContent = fortune.advice;
    document.getElementById('todayResult').classList.remove('hidden');
}
