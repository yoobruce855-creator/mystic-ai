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

const fortuneMessages = [
    { emoji: '⭐', title: 'Exceptional Day', message: 'Extraordinary opportunities await. The universe aligns in your favor.', advice: 'Take bold action. Your confidence will attract success.' },
    { emoji: '🌟', title: 'Abundant Blessings', message: 'Pleasant surprises and positive energy fill your day.', advice: 'Express gratitude and share your good fortune.' },
    { emoji: '💫', title: 'Steady Progress', message: 'Consistent effort leads to meaningful progress today.', advice: 'Stay focused on goals. Celebrate small wins.' },
    { emoji: '🌈', title: 'Creative Inspiration', message: 'Your creativity peaks today. Innovative ideas flow freely.', advice: 'Express yourself creatively. Try something new.' },
    { emoji: '✨', title: 'Magical Synchronicities', message: 'Pay attention to signs. The universe communicates with you.', advice: 'Trust your intuition. Notice patterns and signs.' }
];

// ===== ADVANCED FORTUNE ENGINES =====

// 1. TOJEONGBIGYEOL (SAJU) ENGINE - 144 COMBINATIONS
const sajuElements = {
    upper: ['Sky (Geon)', 'Lake (Tae)', 'Fire (Ri)', 'Thunder (Jin)', 'Wind (Son)', 'Water (Gam)', 'Mountain (Gan)', 'Earth (Gon)'],
    middle: ['Prosperity', 'Conflict', 'Harmony', 'Change', 'Stagnation', 'Growth'],
    lower: ['Foundation', 'People', 'Self']
};

const sajuInterpretations = {
    sky: { nature: 'Active, Creative, Strong', advice: 'Take initiative and lead.' },
    lake: { nature: 'Joyful, Expressive, Open', advice: 'Communicate and share with others.' },
    fire: { nature: 'Passionate, Clear, Visible', advice: 'Show your talents but avoid burnout.' },
    thunder: { nature: 'Arousing, Shocking, Moving', advice: 'Embrace sudden changes bravely.' },
    wind: { nature: 'Gentle, Penetrating, Flexible', advice: 'Adapt to circumstances smoothly.' },
    water: { nature: 'Deep, Dangerous, Flowing', advice: 'Be cautious and seek wisdom.' },
    mountain: { nature: 'Still, Stable, Resting', advice: 'Pause and consolidate your gains.' },
    earth: { nature: 'Receptive, Yielding, Supportive', advice: 'Support others and stay grounded.' }
};

function generateSajuResult(year, month, day) {
    const upperIdx = (year % 8); // 0-7
    const middleIdx = (month % 6); // 0-5
    const lowerIdx = (day % 3); // 0-2

    const hexagramCode = `${upperIdx + 1}${middleIdx + 1}${lowerIdx + 1}`;
    const upperName = sajuElements.upper[upperIdx];
    const upperKey = upperName.split(' ')[0].toLowerCase();
    const interp = sajuInterpretations[upperKey];

    const titles = [
        `The Destiny of ${upperName}`,
        `Hexagram ${hexagramCode}: ${upperName} over ${sajuElements.middle[middleIdx]}`,
        `The Path of ${interp.nature}`
    ];

    const totals = [
        `This year, the energy of the ${upperName} dominates your life. It is a time of ${interp.nature.toLowerCase()} energy. Combined with the influence of ${sajuElements.middle[middleIdx]}, you will experience significant shifts in your personal growth.`,
        `Like the ${upperName}, your fortune is vast and powerful. The ${sajuElements.middle[middleIdx]} aspect suggests that you must pay attention to your environment. ${interp.advice}`,
        `A year of ${sajuElements.middle[middleIdx]} defined by the ${upperName}. Your foundation in ${sajuElements.lower[lowerIdx]} will be tested, but the outcome looks promising if you remain true to yourself.`
    ];

    const monthlies = [
        `Spring brings new beginnings in ${sajuElements.lower[lowerIdx]}. Summer requires patience as the ${upperName} energy peaks. Autumn is the time for harvest, and Winter for reflection.`,
        `Early year is favorable for ${sajuElements.lower[lowerIdx]}. Mid-year might bring challenges related to ${sajuElements.middle[middleIdx]}. The end of the year promises stability.`,
        `Focus on ${sajuElements.lower[lowerIdx]} in the first half. The second half will be dominated by the ${upperName}'s influence, bringing ${interp.nature.toLowerCase()} outcomes.`
    ];

    return {
        title: titles[year % 3],
        hexagram: `Upper: ${upperName} | Middle: ${sajuElements.middle[middleIdx]} | Lower: ${sajuElements.lower[lowerIdx]}`,
        total: totals[(year + month) % 3],
        monthly: monthlies[(month + day) % 3],
        advice: `${interp.advice} Focus on improving your ${sajuElements.lower[lowerIdx]} to maximize good fortune.`
    };
}

// 2. DREAM ANALYSIS ENGINE - KEYWORD & SENTIMENT MATCHING
const dreamKeywords = {
    // Animals
    'snake': { meaning: 'Transformation & Healing', advice: 'Shed your old self and embrace growth.' },
    'cat': { meaning: 'Intuition & Independence', advice: 'Trust your gut feelings over logic today.' },
    'dog': { meaning: 'Loyalty & Protection', advice: 'Check in on your closest friends.' },
    'bird': { meaning: 'Freedom & Perspective', advice: 'Look at your problems from a higher view.' },
    'spider': { meaning: 'Creativity & Patience', advice: 'Weave your plans carefully and wait.' },
    'fish': { meaning: 'Unconscious Emotions', advice: 'Pay attention to feelings you are ignoring.' },
    'wolf': { meaning: 'Instinct & Survival', advice: 'Trust your survival instincts.' },
    'bear': { meaning: 'Strength & Solitude', advice: 'Take time to be alone and recharge.' },

    // Elements
    'water': { meaning: 'Emotional State', advice: 'Go with the flow rather than resisting.' },
    'fire': { meaning: 'Passion & Anger', advice: 'Channel your energy constructively.' },
    'rain': { meaning: 'Cleansing & Sadness', advice: 'Let yourself cry if you need to; it cleanses the soul.' },
    'ocean': { meaning: 'Vast Potential', advice: 'You have untapped potential waiting to be explored.' },
    'storm': { meaning: 'Inner Conflict', advice: 'This turbulence will pass; stay grounded.' },

    // Actions
    'flying': { meaning: 'Liberation & Success', advice: 'You are rising above your obstacles.' },
    'falling': { meaning: 'Insecurity & Loss of Control', advice: 'Let go of the need to control everything.' },
    'running': { meaning: 'Avoidance or Pursuit', advice: 'Are you chasing something or running away?' },
    'fighting': { meaning: 'Internal Conflict', advice: 'Resolve the conflict within yourself first.' },
    'dying': { meaning: 'New Beginnings', advice: 'An old chapter is closing so a new one can open.' },
    'crying': { meaning: 'Release of Tension', advice: 'You are healing emotional wounds.' },

    // Objects/Places
    'money': { meaning: 'Self-Worth & Value', advice: 'Value yourself more than your possessions.' },
    'house': { meaning: 'The Self & Psyche', advice: 'Explore the neglected rooms of your mind.' },
    'car': { meaning: 'Life Path & Control', advice: 'Are you in the driver\'s seat of your life?' },
    'teeth': { meaning: 'Confidence & Power', advice: 'Speak your truth with confidence.' },
    'door': { meaning: 'Opportunity', advice: 'Walk through the new door opening for you.' },
    'mirror': { meaning: 'Self-Reflection', advice: 'Look at who you really are, not who you pretend to be.' }
};

function analyzeDreamLogic(text) {
    text = text.toLowerCase();
    let foundKeywords = [];

    // Find all matching keywords
    for (const [key, data] of Object.entries(dreamKeywords)) {
        if (text.includes(key)) {
            foundKeywords.push({ word: key, ...data });
        }
    }

    // If no keywords found, use "Cold Reading" based on text length and common words
    if (foundKeywords.length === 0) {
        if (text.length < 20) {
            return {
                symbol: '🌫️',
                meaning: 'Vague Impressions',
                interpretation: 'Your dream is fleeting, suggesting a distracted mind. You may be overlooking small but important details in your waking life.',
                advice: 'Try to recall more details upon waking. Keep a dream journal.'
            };
        } else if (text.includes('scared') || text.includes('fear') || text.includes('nightmare')) {
            return {
                symbol: '🌑',
                meaning: 'Hidden Anxieties',
                interpretation: 'This dream reflects underlying stress or fears you haven\'t addressed. Your subconscious is trying to alert you to a problem.',
                advice: 'Face your fears directly. They are often smaller than they appear in the dark.'
            };
        } else if (text.includes('happy') || text.includes('joy') || text.includes('love')) {
            return {
                symbol: '✨',
                meaning: 'Wish Fulfillment',
                interpretation: 'A positive omen reflecting your desires for happiness and connection. You are in a good place mentally.',
                advice: 'Carry this positive energy with you throughout the day.'
            };
        } else {
            return {
                symbol: '🌀',
                meaning: 'Subconscious Processing',
                interpretation: 'Your mind is sorting through the day\'s events. This dream represents the integration of new experiences.',
                advice: 'Pay attention to your mood today; it holds the key to this dream.'
            };
        }
    }

    // If keywords found, combine them
    const primary = foundKeywords[0];
    const secondary = foundKeywords.length > 1 ? foundKeywords[1] : null;

    let interpretation = `The presence of **${primary.word}** suggests a focus on ${primary.meaning.toLowerCase()}. `;
    if (secondary) {
        interpretation += `Combined with **${secondary.word}**, this indicates a complex interplay between ${primary.meaning.toLowerCase()} and ${secondary.meaning.toLowerCase()}.`;
    } else {
        interpretation += `This is a strong signal from your subconscious regarding this aspect of your life.`;
    }

    return {
        symbol: '🔮',
        meaning: `${primary.meaning} ${secondary ? '& ' + secondary.meaning : ''}`,
        interpretation: interpretation,
        advice: primary.advice
    };
}

let userCredits = 3;

document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('.service-card').forEach(card => {
        card.addEventListener('click', function () {
            const service = this.getAttribute('data-service');
            if (service === 'naming') {
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

// Loading Logic
function showLoading(callback) {
    const overlay = document.getElementById('loadingOverlay');
    const textElement = document.getElementById('loadingText');
    const messages = [
        "Consulting the Stars...",
        "Reading Ancient Patterns...",
        "Aligning Cosmic Energies...",
        "Decoding Your Destiny...",
        "Whispering to the Spirits...",
        "Analyzing Celestial Maps..."
    ];

    overlay.classList.add('active');

    let msgIndex = 0;
    const interval = setInterval(() => {
        textElement.textContent = messages[Math.floor(Math.random() * messages.length)];
    }, 800);

    setTimeout(() => {
        clearInterval(interval);
        overlay.classList.remove('active');
        callback();
    }, 2500); // 2.5 seconds delay
}

function drawTarotCards() {
    if (userCredits < 1) {
        alert('Not enough credits! You need 1 credit.');
        return;
    }

    showLoading(() => {
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
        document.getElementById('tarotResult').scrollIntoView({ behavior: 'smooth' });
    });
}

function analyzeSaju() {
    const name = document.getElementById('sajuName').value.trim();
    const date = document.getElementById('sajuDate').value;

    if (!name || !date) {
        alert('Please enter your name and birth date!');
        return;
    }

    if (userCredits < 2) {
        alert('Not enough credits! You need 2 credits.');
        return;
    }

    showLoading(() => {
        userCredits -= 2;
        updateCreditsDisplay();

        const birthDate = new Date(date);
        const year = birthDate.getFullYear();
        const month = birthDate.getMonth() + 1;
        const day = birthDate.getDate();

        // Use the new Advanced Engine
        const result = generateSajuResult(year, month, day);

        document.getElementById('sajuTitle').textContent = result.title;
        document.getElementById('sajuHexagram').textContent = result.hexagram;
        document.getElementById('sajuTotal').textContent = result.total;
        document.getElementById('sajuMonthly').textContent = result.monthly;
        document.getElementById('sajuAdvice').textContent = result.advice;

        document.getElementById('sajuResult').classList.remove('hidden');
        document.getElementById('sajuResult').scrollIntoView({ behavior: 'smooth' });
    });
}

function analyzeDream() {
    const dreamText = document.getElementById('dreamInput').value.trim();
    if (!dreamText) {
        alert('Please describe your dream first!');
        return;
    }
    if (userCredits < 1) {
        alert('Not enough credits! You need 1 credit.');
        return;
    }

    showLoading(() => {
        userCredits--;
        updateCreditsDisplay();

        // Use the new Advanced Engine
        const result = analyzeDreamLogic(dreamText);

        document.getElementById('dreamSymbol').textContent = result.symbol;
        document.getElementById('dreamMeaning').textContent = result.meaning;
        document.getElementById('dreamInterpretation').textContent = result.interpretation;
        document.getElementById('dreamAdvice').textContent = result.advice;

        document.getElementById('dreamResult').classList.remove('hidden');
        document.getElementById('dreamResult').scrollIntoView({ behavior: 'smooth' });
    });
}

function checkCompatibility() {
    const name1 = document.getElementById('person1Name').value.trim();
    const date1 = document.getElementById('person1Date').value;
    const name2 = document.getElementById('person2Name').value.trim();
    const date2 = document.getElementById('person2Date').value;
    const time1 = document.getElementById('person1Time').value || '12:00';
    const gender1 = document.getElementById('person1Gender').value;
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

    showLoading(() => {
        userCredits -= 2;
        updateCreditsDisplay();

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

        const loveRaw = (hash1 % 40) + (hash2 % 40) + (nameInteraction % 30) + (birth1.getDate() + birth2.getDate()) / 2 + genderBonus;
        const loveScore = Math.min(100, Math.max(35, Math.round(loveRaw)));

        const commRaw = (combinedHash % 50) + (50 - timeFactor / 10) + ((12 - Math.abs(birth1.getMonth() - birth2.getMonth())) * 3) + (name1.length + name2.length);
        const commScore = Math.min(100, Math.max(30, Math.round(commRaw)));

        const yearSum = birth1.getFullYear() + birth2.getFullYear();
        const trustRaw = (yearSum % 45) + seasonalHarmony * 0.4 + ((365 - Math.abs(dayOfYear1 - dayOfYear2)) / 10) + (hash1 % 20);
        const trustScore = Math.min(100, Math.max(35, Math.round(trustRaw)));

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
        document.getElementById('compatibilityResult').scrollIntoView({ behavior: 'smooth' });
    });
}

function getDailyFortune() {
    showLoading(() => {
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
        document.getElementById('todayResult').scrollIntoView({ behavior: 'smooth' });
    });
}
