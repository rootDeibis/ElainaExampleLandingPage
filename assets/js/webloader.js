var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl).show();
});


/* RESPONSIVE */


const section_primary = document.querySelector("#section_primary");
const section_primary_desc = document.querySelector("#section_primary p");
const section_primary_stats = document.querySelector("#section_primary div");
const section_primary_button = document.querySelector("#section_primary button");
const section_primary_card = document.querySelector(".discord");

function responsive() {
    if (window.innerWidth <= 985) {
        section_primary.classList.remove("text-start");
        section_primary.classList.add("text-center");

        section_primary_desc.classList.remove("m-0", "ms-3", "w-50");
        section_primary_desc.classList.add("mx-auto", "w-75");

        section_primary_stats.classList.add("mx-auto");

        section_primary_button.classList.remove("w-50", "rounded-pill");
        section_primary_button.classList.add("w-100", "rounded-3");

        section_primary_card.style.display = "none";
    } else {
        section_primary.classList.add("text-start");
        section_primary.classList.remove("text-center");

        section_primary_desc.classList.add("m-0", "ms-3", "w-50");
        section_primary_desc.classList.remove("mx-auto", "w-75");

        section_primary_stats.classList.remove("mx-auto");

        section_primary_button.classList.add("w-50", "rounded-pill");
        section_primary_button.classList.remove("w-100", "rounded-3");

        section_primary_card.style.display = "block";
    }
}

/* ----- RESPONSIVE */


/* ELAINA MESSAGES */
const ElainaMessages = ["Hola, Onichan!", "¿Que tal tu dia?", "Te quiero <3"];

const ElainaMessageEl = document.querySelector("a.ms-auto");

var __ELAINA_MESSAGE = 0;

const ElainaMessageWriter = () => {
    var CurrentMessage = 0;
    const CurentText = ElainaMessages[__ELAINA_MESSAGE];

    const MessageChangeInterval = setInterval(() => {
        var AfterData = ElainaMessageEl.getAttribute("data-after");
        var CurrentData = AfterData == null ? "" : AfterData.replace("...", "");

        ElainaMessageEl.setAttribute("data-after", CurrentData + CurentText[CurrentMessage]);

        if (CurrentMessage == CurentText.length - 1) {
            clearInterval(MessageChangeInterval);

            if (__ELAINA_MESSAGE == ElainaMessages.length - 1) return;
            else __ELAINA_MESSAGE++;

            setTimeout(() => {
                ElainaMessageEl.setAttribute("data-after", "...");
                ElainaMessageWriter();
            }, 2 * 1000);
            return;
        }
        CurrentMessage++;
    }, 100);
};

/*---- ELAINA MESSAGES */




window.addEventListener("resize", responsive);
window.addEventListener("load", responsive);
window.addEventListener("load", ElainaMessageWriter);
