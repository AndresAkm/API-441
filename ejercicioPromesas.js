// Practica de una promesa simple

function mensajeCarga() {
    let contador = 0
    const intervalo = setInterval(() => {
        console.log("Se está preparando su pedido 🍕...");
        contador ++
        if (contador == 4){
            clearInterval(intervalo)
        }
    }, 1000);
}

const estadoPedido = () => {
    return Math.random() < 0.8;
}

const pedido = new Promise((res, rej) => {
    mensajeCarga()
    setTimeout(() => {

        if (estadoPedido())
            res("Su pedido fue entregado con éxito");
        else
            rej("Ocurrió un error en el pedido");

    }, 5000);
});

pedido
    .then((mensaje) => {
        console.log("✅", mensaje);
    })
    .catch((error) => {
        console.log("❌", error);
    });