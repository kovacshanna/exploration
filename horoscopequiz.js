function calculator() {
    var form = document.getElementById("horoscopeQuiz");
    var resultDiv = document.getElementById("result");

    var answers = {};
    var inputs = form.elements;

    for (var i = 0; i < inputs.length; i++) {
        var input = inputs[i];
        if (input.checked) {  
            answers[input.name] = input.value;
        }
    }

    if (Object.keys(answers).length < 5) { //because there are 5 questions
        resultDiv.textContent = "Please answer all the questions first!";
        return;
    } 
    
    var scores = {};
    for (var key in answers) {
        var sign = answers[key];
        if (scores[sign]) {
            scores[sign]++;
        } else {
            scores[sign] = 1;
        }
    }

    var resultSign = '';
    var maxScore = 0;
    for (var sign in scores) {
        if (scores[sign] > maxScore) {
            maxScore = scores[sign];
            resultSign = sign;
        }
    }

    const outcomes = {
        Aries: "You're a natural-born leader who loves challenges and thrives in fast-paced environments. Aries is the perfect match for your energetic and passionate nature!",
        Taurus: "You appreciate the finer things in life and find comfort in stability and nature. Taurus matches your calm and dependable personality, bringing peace and sensual enjoyment to your world.",
        Gemini: "Your curious and playful nature thrives in dynamic and ever-changing situations. Gemini fits you perfectly, offering intellectual stimulation and endless opportunities for connection and growth.",
        Cancer: "You're deeply connected to your emotions and find fulfillment in caring for others. Cancer resonates with your nurturing and empathetic soul, creating bonds that stand the test of time.",
        Leo: "You love to shine and captivate those around you with your charisma and creativity. Leo aligns perfectly with your confident and passionate personality, making you the star of every show.",
        Virgo: "You have a knack for organization and enjoy bringing order to chaos. Virgo complements your meticulous and grounded approach to life, helping you achieve your goals with precision.",
        Libra: "You seek balance and harmony in all things, thriving in environments where fairness and beauty prevail. Libra mirrors your love for peace, connection, and refined living.",
        Scorpio: "You're a deeply emotional and transformative individual who values loyalty and authenticity. Scorpio reflects your passionate and magnetic nature, creating powerful and lasting connections.",
        Sagittarius: "You're a free spirit who loves exploring the unknown and chasing new experiences. Sagittarius fits your adventurous and curious soul, encouraging you to embrace life's journey.",
        Capricorn: "You're a hardworking and focused individual with a drive for success. Capricorn resonates with your disciplined and determined personality, helping you climb to the top with grace.",
        Aquarius: "You're a deeply empathetic and imaginative soul who finds beauty in emotions and creativity. Pisces aligns with your intuitive and compassionate heart, bringing dreams to life in magical ways.",
         Pisces: "You’re a deeply empathetic and imaginative soul who finds beauty in emotions and creativity. Pisces aligns with your intuitive and compassionate heart, bringing dreams to life in magical ways."
    };

    // Display the result
    if (resultSign) {
        resultDiv.textContent = `The zodiac sign that fits you best is ${resultSign}! ${outcomes[resultSign]}`;
    } else {
        resultDiv.textContent = "Please answer all the questions!";
    }
}
