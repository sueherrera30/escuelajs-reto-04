const orders = (time, product, table) => {
  console.log(` camara preparame una ### Orden: ${product} para ${table}`);
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`=== Pedido servido: ${product}, tiempo de preparación ${time}ms para la ${table}`);
    }, time);
  });
}

const menu = {
  hamburger: 'Combo Hamburguesa',
  hotdog: 'Combo Hot Dogs',
  pizza: 'Combo Pizza',
};

const table = ['Mesa 1', 'Mesa 2', 'Mesa 3', 'Mesa 4', 'Mesa nueva'];

const waiter = () => {
  orders(6000, menu.hamburger, table[3])
    .then((res) => console.log(res))
    .catch((err) => console.error(err));
};

// waiter();

// 1st CHALLENGE:

function randomTime() {
 let randomNumber = Math.round(Math.random() * (8000 -  1000) + 1000);
 return randomNumber;
}
randomTime();

// 2nd CHALLENGE:

const waiter2 = () => {
  orders(randomTime(),menu.hamburger, table[0])
    .then((res) => console.log(res))
    .then(()=> {
      return orders(randomTime(),menu.pizza, table[2])
      .then((res) => console.log(res))
    })
    .catch((err) => console.error(err));    
}
 // waiter2();

// 3nd CHALLENGE:

const clientOne = orders(randomTime(),menu.hotdog, table[1]);
const clientTwo = orders(randomTime(),menu.pizza, table[1]);
const clientThree = orders(randomTime(),menu.hotdog, table[1]);

const threeOrders = [clientOne,clientTwo,clientThree]

async function waiter3() {
  try {
    await Promise.all(threeOrders)
    .then(
      result => setTimeout(()=>{
        result.map(order => console.log(`ROBOTCITO MESERO 3 DICE: ¡bon appetit! ${order}`))
      },1000)
    )
  }
  catch { error => console.log( `buuu esto se murio :( ${error}`)
  }
}
// aqui aplique el settimeout por que dice el reto pero no entiendo para que, no se si estoy haciendo mal mi codigo por que se tarda en resolver las promesas,que me imagino es 
// el cumulo de los tiempos en lo que se preparan los platillos con el timeout de la fincion orders pero este implementado en las funcion waiter 3 como se debe aplicar?
// :/ no entiendo eso, perdon u.u 

 // waiter3();

// 4rd OPTIONAL CHALLENGE:

async function fetchOrders(){
  const url = ' https://us-central1-escuelajs-api.cloudfunctions.net/orders';
  const result = await fetch(url)
  const data = await result.json()
  const combo = data.data
  return combo;
} // cuando hago console.log de esto si me sale las data como en string 
//  me sale por ejemplo : combo nachos.

// entonceeeees ..... al iniciar a experimentar con la segunda parte...

  const order4 = orders(randomTime(),fetchOrders(),table[4])
  .then(result => console.log(result))
 // cuando logueo eso, llamando a la funcionn fetchOrders como parametro...
 // me sale: " === Pedido servido: [object Promise], tiempo de preparación 3352ms para la Mesa nueva "
 // [object Promise]: por que que aqui me regresa que es promesa si arriba ya me retornaba un string :( ???????????

 // bueno bye, muchas gracias.
// perdón si estoy muy básica.

