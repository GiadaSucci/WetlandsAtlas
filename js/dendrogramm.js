d3.csv("paludedionara.csv").then(function(data) {
    // Qui puoi elaborare i dati per creare la struttura adatta al dendrogramma
    console.log(data);
}).catch(function(error) {
    console.error("Errore nel caricamento del CSV", error);
});


