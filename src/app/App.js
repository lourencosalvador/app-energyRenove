const todosCards = document.querySelectorAll(".container .cardImg");
const keySseionStorage = "ConteudoCard";

const dataDetalhes = [
    {
        id: "1",
        title: "Energia Eolica",
        descri: "tudo sobre energia eolica"
    },
    {
        id: "2",
        title: "Energia Solar",
        descri: "tudo sobre energia Solar"
    },
    {
        id: "3",
        title: "Energia Mecanica",
        descri: "tudo sobre energia Mecanica"
    },
    {
        id: "4",
        title: "Energia Renovavel",
        descri: "tudo sobre energia Renovavel"
    }
];

todosCards.forEach(card => {
    card.addEventListener('dblclick', () => {
        const iconText = card.querySelector('.icon').textContent;
        const selectedDetail = dataDetalhes.find(detail => detail.id === iconText);

        if (selectedDetail) {
            const values = [{
                title: selectedDetail.title,
                descri: selectedDetail.descri
            }];
            sessionStorage.setItem(keySseionStorage, JSON.stringify(values));
            window.location.href = "detalhes.html";
        }
    });
});
