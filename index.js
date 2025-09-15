document.addEventListener("DOMContentLoaded", () => {
    const words = ["Narsuri Vaishnavi", "a Full Stack Developer"];
    let wordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    const typingSpeed = 100;
    const pauseBetweenWords = 1000;
    const target = document.querySelector(".body .left .name");

    function type() {
        const currentWord = words[wordIndex];
        const visibleText = isDeleting 
            ? currentWord.slice(0, --charIndex)
            : currentWord.slice(0, ++charIndex);

        target.textContent = visibleText;

        let delay = typingSpeed;

        if (!isDeleting && visibleText.length === currentWord.length) {
            delay = pauseBetweenWords;
            isDeleting = true;
        } else if (isDeleting && visibleText.length === 0) {
            isDeleting = false;
            wordIndex = (wordIndex + 1) % words.length;
        }

        setTimeout(type, delay);
    }

    type();
});
