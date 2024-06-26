const products =[
    {
        id: "Axsd1000",
        name: "Fundamentos de Negocio",
        description: "Description 1",
        price: 1200,
        stock: 5,
        category: "cursos",
        image: "/image/modulo1.png"
    },
    {
        id: "Axsd1001",
        name: "Problem Solving",
        description: "Description 2",
        price: 1000,
        stock: 6,
        category: "cursos",
        image: "/image/modulo2.png"
    },
    {
        id: "Axsd1002",
        name: "Comunicación Estratégica",
        description: "Description 3",
        price: 1200,
        stock: 7,
        category: "mentorias",
        image: "/image/modulo3.png"
    },
    {
        id: "Axsd1003",
        name: "Gestionando un ascenso",
        description: "Description 4",
        price: 1000,
        stock: 8,
        category: "mentorias",
        image: "    "
    }

]

const getProducts = () => {

    return new Promise ((resolve,reject) => {
        // simulamos timeout
    setTimeout ( ()=> {  
        resolve(products)
         },3000);
      });
    };

    export default getProducts;