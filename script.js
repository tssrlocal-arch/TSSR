
function verifierAcces() {
    const user = document.getElementById("username").value;
    const pass = document.getElementById("password").value;

    if (user === "admin" && pass === "TSSR2026") {
        // Redirige vers un nouveau fichier HTML
        window.location.href = "accueil.html"; 
    } else {
        alert("Identifiants incorrects !");
    }
}