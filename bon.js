// Ce code sélectionne les boutons "S'inscrire" et "Se connecter" et le conteneur principal qui contient les formulaires. Il ajoute ensuite des écouteurs d'événements pour cliquer sur ces boutons. Lorsqu'un bouton est cliqué, il ajoute ou supprime la classe "sign-up-mode" sur le conteneur principal, ce qui déclenche une transition CSS pour faire glisser les formulaires d'un côté à l'autre.
const wrapper = document.querySelector(".wrapper"),
          signupHeader = document.querySelector(".signup header"),
          loginHeader = document.querySelector(".login header");

        loginHeader.addEventListener("click", () => {
          wrapper.classList.add("active");
        });
        signupHeader.addEventListener("click", () => {
          wrapper.classList.remove("active");
        });



const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");

sign_up_btn.addEventListener("click", () => {
  container.classList.add("sign-up-mode");
});

sign_in_btn.addEventListener("click", () => {
  container.classList.remove("sign-up-mode");
});
