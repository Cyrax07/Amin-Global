// Auto Active Navbar Link
const currentPage = window.location.pathname.split("/").pop();

document.querySelectorAll(".nav-link").forEach(link => {
    if (link.getAttribute("href") === currentPage) {
        link.classList.add("active");
    }
});

// Floating buttons
const scrollBtn = document.querySelector('.scroll-top');
const aiBtns = document.querySelectorAll('.ai');

// Scroll to top
scrollBtn.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// AI Chatbot
const chatBox = document.getElementById('aiChatbot');
const closeBtn = document.getElementById('closeChat');
const sendBtn = document.getElementById('sendBtn');
const userInput = document.getElementById('userInput');
const messages = document.getElementById('aiMessages');

// Show chat on AI button click
aiBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        chatBox.style.display = 'flex';
    });
});

// Close chat
closeBtn.addEventListener('click', () => {
    chatBox.style.display = 'none';
});

// Predefined responses
const responses = {
    "what services do you offer?": "We offer Bank Guarantees, SBLC, Monetization, Project Finance, and Business Loans.",
    "how do i apply for sblc?": "To apply for an SBLC, please contact us directly via WhatsApp or email, and we will guide you through the process.",
    "what is monetization?": "Monetization is the process of converting assets or resources into financial liquidity, often through financial instruments.",
    "contact information?": "You can contact us at +968 91011019 (Oman), +971 555 056 055 (UAE), or email info@amingdi.com."
};

// Send message
function sendMessage() {
    const text = userInput.value.trim();
    if (text === "") return;

    const userMsg = document.createElement('div');
    userMsg.classList.add('message', 'user');
    userMsg.innerText = text;
    messages.appendChild(userMsg);
    messages.scrollTop = messages.scrollHeight;

    const answer = responses[text.toLowerCase()] || "I'm sorry, I didn't understand that. Please ask one of the listed questions.";

    setTimeout(() => {
        const botMsg = document.createElement('div');
        botMsg.classList.add('message', 'bot');
        botMsg.innerText = answer;
        messages.appendChild(botMsg);
        messages.scrollTop = messages.scrollHeight;
    }, 500);

    userInput.value = '';
}

// Send on button click
sendBtn.addEventListener('click', sendMessage);

// Send on Enter key
userInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') sendMessage();
});

// Add event listeners for clickable question buttons
const questionBtns = document.querySelectorAll('.question-btn');

questionBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        const text = btn.innerText;

        // Add user message
        const userMsg = document.createElement('div');
        userMsg.classList.add('message', 'user');
        userMsg.innerText = text;
        messages.appendChild(userMsg);
        messages.scrollTop = messages.scrollHeight;

        // Get bot response
        const answer = responses[text.toLowerCase()] || "I'm sorry, I didn't understand that.";

        setTimeout(() => {
            const botMsg = document.createElement('div');
            botMsg.classList.add('message', 'bot');
            botMsg.innerText = answer;
            messages.appendChild(botMsg);
            messages.scrollTop = messages.scrollHeight;
        }, 500);
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll("section, .hero-section");
    const navLinks = document.querySelectorAll(".navbar-nav .nav-link");

    window.addEventListener("scroll", () => {
        let current = "";

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;

            if (pageYOffset >= sectionTop - sectionHeight / 3) {
                current = section.getAttribute("id");
            }
        });

        navLinks.forEach(link => {
            link.classList.remove("active");
            if (link.getAttribute("href") === "#" + current) {
                link.classList.add("active");
            }
        });
    });
});


