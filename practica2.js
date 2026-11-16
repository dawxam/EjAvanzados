export function temporizador(ms) {
    return new Promise((resolve, reject) => {
        const idExito = setTimeout(() => {
            resolve("Tiempo concluido");
        }, ms);

        const idFallo = setTimeout(() => {
            clearTimeout(idExito);
            reject("El tiempo no va bien");
        }, ms * 2);
    });
}