document.addEventListener("DOMContentLoaded", function () {
    const yesButton = document.getElementById("yes-btn");
    const noButton = document.getElementById("no-btn");
    const funnyText = document.getElementById("funny-text");
    const questionElement = document.querySelector(".question");
    const imageElement = document.querySelector(".cute-girl img"); // Image tag

    // Images list
    const photos = [
        "./images/maffi.webp", // Normal maafi maangne wali photo
        "./images/maffi2.webp", // Pair pakad ke maafi maangne wali photo
        "./images/kush.webp"  // Maaf hone ke baad dono khush wali photo
    ];

    // Messages for 'No' button
    const noMessages = [
        "I know I hurt you with my words and actions, but deep down, I always think and care for you... 🥹❤️ Aage se kabhi bhi aisa nahi hoga, pakka promise! 🙏",
        "Galtiyaan bhale hi 1000 ki hoingee maine...🥹🥹  lakin tera sath galat karne ka khayal kabhi nahi aya... ❤️ Aage se kabhi bhi block nahi karunga, kasam se! 🙇‍♂️",
        "Tum sirf ek achi dost nahi, meri sabse pyaari saheli ho...🥺💖  Tujhse door rehna mujhe khud se door kar deta hai... 😢 Aage se ek percent bhi naraz nahi karunga! Maaf kar de na please! 😭🙏",
        "Tere bina mazak bhi suna suna lagta hai... Or khushi bhi adhuri si lagti hai... 🥹💔 Maaf kar de na, aage se kabhi bhi aise childish harkat nahi karunga! 🫂😞",
        "Agar tere ek baar 'theek hai, maaf kiya' bolne se sab wapas normal ho sakta hai, toh mujhe aur kya chahiye? 🥺💞  Last time, please maaf kar de...🙇‍♂️😭"
    ];

    let noIndex = 0;
    let noClickCount = 0; // Count kitni baar 'No' button dabaya gaya
    let noMovementActivated = false; // Track if movement is active

    // Initial image set karo (Normal maafi wali)
    imageElement.src = photos[0];

    // 'No' button click handler
    noButton.addEventListener("click", function () {
        if (noIndex < noMessages.length) {
            funnyText.textContent = noMessages[noIndex];
            noIndex++;
        }

        // Agar 'No' button 2 baar click ho chuka hai, toh next image laao
        noClickCount++;
        if (noClickCount >= 2) {
            imageElement.src = photos[1]; // Pair pakad ke maafi maangne wali photo
        }

        // Agar 'No' button 5 baar dab gaya toh bhagane wala function activate hoga
        if (noClickCount >= noMessages.length) {
            activateNoMovement();
            moveNoButton();
        }
    });

    // 'Yes' button click handler
    yesButton.addEventListener("click", function () {
        funnyText.innerHTML = "<strong>😌 Mujhe pata tha, app maaf kar degi, aap kitni achi ho! ❤️</strong>";
        imageElement.src = photos[2]; // Khush wali photo laao
        noButton.style.display = "none"; // 'No' button hata do

        // Text change kar do
        questionElement.textContent = "Pakka maaf kar diya na? Are you sure... 🥹";
        yesButton.textContent = "Haan, pakka! 😘";

        // Naya event listener add karna jo Gmail pe redirect kare
        yesButton.addEventListener("click", function () {
            window.location.href = "mailto:pguj6399@gmail.com?subject=Haan maaf kar dia yr 🥹&body=Maff kar dia sab thik no worry ab sa every weekend bat kra ga thodi don't worry 😂😭 😍❤️ 
                Soch kya rhi... ho baj do send p click kar do top right corner..";
        });
    });

    // Activate movement for 'No' button
    function activateNoMovement() {
        if (!noMovementActivated) {
            noMovementActivated = true;
            noButton.style.position = "fixed"; // Button ko freely move karne ke liye fixed position de do
            noButton.addEventListener("mouseover", moveNoButton); // Mouse hover pe bhagega
            noButton.addEventListener("touchstart", moveNoButton); // Mobile pe touch hote hi bhagega
        }
    }

    // Function to randomly move the 'No' button
    function moveNoButton() {
        const maxX = window.innerWidth - noButton.offsetWidth;
        const maxY = window.innerHeight - noButton.offsetHeight;
        const randomX = Math.random() * maxX;
        const randomY = Math.random() * maxY;
        noButton.style.left = randomX + "px";
        noButton.style.top = randomY + "px";
    }
});
