/* 
    ////////////////////
    // Dark mode : Créer le code pour ajouter un dark mode au site SkillFacile
    ////////////////////
*/
// Bouton
let button = document.getElementById('darkmode');
button.addEventListener("click", () => {
    let toggle = document.getElementById('darkmode').textContent

    if(toggle == 'Activer le darkmode'){
        // Background dark
        document.querySelector('body').classList.add('darkmondeon');
        document.querySelector('#logo').src="img/logo-blanc.png";   
        document.querySelector('#darkmode').textContent = "Activer le lightmode";
    } else if(toggle == 'Activer le lightmode') {
        // Background light
        document.querySelector('body').classList.remove('darkmondeon');
        document.querySelector('#logo').src="img/logo-noir.png";   
        document.querySelector('#darkmode').textContent = "Activer le darkmode";
    } else {
    }
})














/* 
    ////////////////////
    // Menu responsive : vous devez créer un menu responsive qui s'ouvre et se ferme, tel que représenté sur la vidéo de présentation. 
    Petit bonus : faire la fermeture au scroll et la fermeture lorsqu'une modale s'ouvre
    ////////////////////
*/
let burgerMenu = document.querySelector('.burger_menu');
burgerMenu.addEventListener("click", () => {
    let valBurger = document.querySelector('nav').className
    if(valBurger == 'hidden'){
        document.querySelector('.hidden').className = 'active';
        document.querySelector('.fa-solid.fa-bars').className = 'fa-solid fa-xmark';
        
    } else if(valBurger == 'active'){
        document.querySelector('.active').className = 'hidden';
        document.querySelector('.fa-solid.fa-xmark').className = 'fa-solid fa-bars';
    }

    
    function scrollDDToggle(){
        document.querySelector('.active').className = 'hidden';
        document.querySelector('.fa-solid.fa-xmark').className = 'fa-solid fa-bars';
        console.log('wee');
    }
    window.addEventListener("scroll", scrollDDToggle, {once: true}); 
})



















/* 
    ////////////////////
    // modale inscription newsletter : Pour la modale de newsletter, vous devez utiliser les createElement pour créer tous les éléments qui la compose.
    // Bonus : Mettre en place un message lorsque l'utilisateur s'inscrit.
    ////////////////////
*/
// Bouton Close
let closeButton = document.createElement('i');
closeButton.className = "fa-solid";
closeButton.classList.add('fa-xmark');

// Popup creation
let newsletterButton = document.getElementById('newsletter');
newsletterButton.addEventListener("click", (e) => {
    // Modal creation
    let newsletter = document.createElement("dialog");
    document.body.appendChild(newsletter);
    // title creation
    let newsletterTitle = document.createElement("h2");
    newsletterTitle.textContent = 'Inscrivez vous:';
    newsletterTitle.className = 'subtitle';
    newsletter.appendChild(newsletterTitle);

    // Popup content
    let newsletterForm = document.createElement('form');
    let newsletterInput = document.createElement('input');
    let newsletterSent = document.createElement('input');


    newsletterForm.action = "#";

    newsletterInput.placeholder = "Indiquez votre e-mail";
    newsletterInput.type = "email";
    newsletterInput.className = "mail";

    newsletterSent.className = "button";
    newsletterSent.type = "submit";
    newsletterSent.textContent = 'Envoyer!';

    // Append
    newsletter.appendChild(closeButton);
    newsletter.appendChild(newsletterForm);
    newsletterForm.appendChild(newsletterInput);
    newsletterForm.appendChild(newsletterSent);

    // Close dropdown if turned on
    let valBurger = document.querySelector('nav').className
    if(valBurger == 'active'){
        document.querySelector('.active').className = 'hidden';
        document.querySelector('.fa-solid.fa-xmark').className = 'fa-solid fa-bars';
    }


    e.preventDefault;
    newsletter.showModal();


    // Close button
    closeButton.addEventListener('click', () => {
        newsletter.close();
    })
    

    if (newsletterInput != ""){
        // Mail validation
        newsletterForm.addEventListener('submit', (e) => {
            newsletter.close();

            // Modal creation
            let newsletterValid = document.createElement("dialog");
            document.body.appendChild(newsletterValid);

            // Button append
            newsletterValid.appendChild(closeButton);
            
            // tittle creation
            let newsletterTitle = document.createElement("h3");
            newsletterTitle.textContent = 'Félicitation, vous avez été inscrit à la newsletter!';
            newsletterTitle.className = 'subtitle';
            newsletterValid.appendChild(newsletterTitle);


            newsletterValid.showModal();

            // Close button
            closeButton.addEventListener('click', () => {
                newsletterValid.close();
            })

            e.preventDefault;
        })
    }
}) 















/* 
    ////////////////////
    // Modale contact : Créer la modale de contact en utilisant la balise dialogue. Pour cette partie là, vous ne devez pas utiliser de createElement.
    // Bonus : Mettre en place un message lorsque l'utilisateur envoie le formulaire
    ////////////////////
*/
let formRecup = document.querySelector('#contact div');
let formButton = document.getElementById('contact-button');

// remove post method
let formMethod = document.querySelector('#contact div form');
formMethod.removeAttribute("method", "post");


// Display form dialog
formButton.addEventListener('click', () => {
    let form = document.createElement("dialog");
    document.body.appendChild(form);
    form.appendChild(formRecup);
    form.appendChild(closeButton);

    form.showModal();

    // Close button
    closeButton.addEventListener('click', () => {
        form.close();

    })


    // Close dropdown if turned on
    let valBurger = document.querySelector('nav').className
    if(valBurger == 'active'){
        document.querySelector('.active').className = 'hidden';
        document.querySelector('.fa-solid.fa-xmark').className = 'fa-solid fa-bars';
    }


    // Submit information
    formMethod.addEventListener("submit", () => {
        form.close();

        // New dialog creation
        let formConfirm = document.createElement('dialog');
        document.body.appendChild(formConfirm);
        let formTitle = document.createElement("h3");
        formTitle.className = "subtitle";
        formTitle.textContent = "Le formulaire a bien été envoyé!";

        // append
        formConfirm.appendChild(formTitle)
        formConfirm.appendChild(closeButton)

        
        formConfirm.showModal();

        // Close button
        closeButton.addEventListener('click', () => {
            formConfirm.close();
        })
    })
})
