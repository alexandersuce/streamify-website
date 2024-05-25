document.addEventListener("DOMContentLoaded", function() {
    var searchInput = document.getElementById("searchInput");

    searchInput.addEventListener("keypress", function(event) {
        if (event.key === "Enter") {
            event.preventDefault(); // Empêcher le comportement par défaut du formulaire
            searchTwitter(); // Appeler la fonction de recherche
        }
    });
});

function searchTwitter() {
    var searchTerm = document.getElementById("searchInput").value + " stream";
    // Construct the search URL with the search term
    var searchURL = "https://twitter.com/search?q=" + encodeURIComponent(searchTerm);
    // Open the search URL in a new tab
    window.open(searchURL, "_blank");
}
