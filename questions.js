/**
 * Exercice sur les chaines de caractères.
 * Trouvez la façon de faire la plus optimal.
 * Il peut y avoir plusieur façon de faire.
 */

/**
 * Exercices sur les nombres et les caluls mathématiques
 */

function tailleString(string) {
    var result = string.length;
    return result;
}

function remplaceCar(string, avant, apres) {
    var result = string.replace(avant, apres);
    return result;
}

function concatString(string, string2) {
    var result = string.concat(string2);
    return result;
}

function afficherCar(string, caractere) {
    var result = string.substring(caractere - 1, caractere);
    return result;
}

function afficherNCar(string, caractere) {
    var result = string.substring(0, caractere);
    return result;
}

function majusculeString(string) {
    var result = string.toUpperCase();
    return result;
}

function SupprEspaceString(string) {
    var result = string.trim();
    return result;
}

function IsString(chaine) {
    if (typeof chaine === "string"){
        return true;
    }
}

function AfficherExtensionString(extension_fichier) {
    var result = extension_fichier.substr(extension_fichier.lastIndexOf(".") + 1)
    return result;
}

function NombreEspaceString(espace_string) {
    var result = espace_string.split(" ").length - 1; 
    return result;
}

