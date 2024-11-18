const express = require('express')
const app = express()
const cors = require('cors')

app.use(cors())

const corsOptions = {
    origin: '*',
    optionsSuccessStatus: 200
}

const data = [
    {
        id: 1,
        title: "Spinner",
        price: 30.00,
        description: "Un spinner es un juguete pequeño, generalmente hecho de plástico o metal, que consta de un eje central con varias palas o brazos que giran alrededor de él. Se sostiene entre los dedos y se hace girar, creando un efecto visual atractivo y a menudo relajante. Originalmente popularizado como una herramienta para ayudar a reducir el estrés y la ansiedad, los spinners se han convertido en un fenómeno de moda, con una amplia variedad de diseños y colores.",
        color: ["Verde", "Negro", "Azul", "Rojo"],
        disponible: 10,
        image: "https://fidget-spinner-uk.co.uk/wp-content/uploads/2017/04/tri-fidget-spinner-white.jpg"
    },
    {
        id: 2,
        title: "Poppers",
        price: 25.00,
        description: "Un popper es un juguete de plástico que consiste en una pequeña esfera o disco con una base flexible. Se utiliza de manera sencilla: se coloca en una superficie plana y se presiona la parte superior. Al soltarla, la base se invierte y el popper salta hacia arriba, produciendo un sonido característico. Es un juguete divertido y simple que fomenta la coordinación y la diversión, y a menudo se utiliza en juegos al aire libre o para entretener a los niños. Su diseño colorido y su capacidad para saltar lo hacen muy atractivo.",
        color: ["Morado", "Negro", "Azul", "Rojo"],
        disponible: 10,
        image: "https://th.bing.com/th/id/OIP.AMwKz05CUzEMHdnOyX8b4gHaHa?w=1050&h=1050&rs=1&pid=ImgDetMain"
    },
    {
        id: 3,
        title: "Tangle",
        price: 30.00,
        description: "Un tangle es un juguete sensorial que consiste en una serie de segmentos de plástico entrelazados que pueden girar y moverse en varias direcciones. Su diseño permite que se manipule de diferentes maneras, lo que lo convierte en una herramienta perfecta para aliviar el estrés y mantener las manos ocupadas. Es suave al tacto y, a menudo, tiene colores vibrantes, lo que lo hace visualmente atractivo. Los tangles son populares tanto entre niños como adultos y se utilizan en entornos educativos y terapéuticos para fomentar la concentración y la calma.",
        color: ["Verde", "Negro", "Azul", "Rojo"],
        disponible: 10,
        image: "https://i5.walmartimages.com/asr/3133a658-8295-459a-a902-4a5a9c8145ce_1.81256abbee2581c1a04a1cadef25dd55.jpeg?odnWidth=1000&odnHeight=1000&odnBg=ffffff"
    },
    {
        id: 4,
        title: "Fidget Cube",
        price: 30.00,
        description: "Un fidget cube es un pequeño dispositivo diseñado para ayudar a reducir la ansiedad y mejorar la concentración. Tiene la forma de un cubo y cuenta con diferentes caras, cada una equipada con diversas texturas y mecanismos para tocar, girar, presionar o deslizar. Las actividades incluyen botones que se pueden presionar, interruptores para mover, y superficies rugosas o lisas para tocar. Este juguete es ideal para personas que buscan una forma discreta de liberar energía nerviosa o mantenerse enfocadas, y su diseño compacto lo hace fácil de llevar a cualquier lugar.",
        color: ["Verde", "Negro", "Azul", "Rojo"],
        disponible: 10,
        image: "https://i.etsystatic.com/23369019/r/il/571352/2367771447/il_1588xN.2367771447_d2io.jpg"
    },
    {
        id: 5,
        title: "Fidget Pat",
        price: 30.00,
        description: "Un fidget pad es un juguete sensorial diseñado para aliviar el estrés y mantener las manos ocupadas. Tiene forma de control remoto o pequeño dispositivo y está equipado con varias funciones interactivas, como botones para presionar, palancas para mover, y superficies rugosas o lisas para tocar. Cada lado del fidget pad ofrece diferentes texturas y acciones, permitiendo a los usuarios explorar y jugar de manera táctil. Es especialmente popular entre quienes buscan una forma discreta de calmar la ansiedad o mejorar la concentración, y su tamaño portátil lo hace fácil de llevar en el bolsillo o la mochila.",
        color: ["Verde", "Negro", "Azul", "Rojo"],
        disponible: 10,
        image: "https://media.takealot.com/covers_images/0026fb6a9ca14252bb1a29f4390e44ee/s-zoom.file"
    },
    {
        id: 6,
        title: "Magic Fidget Toy",
        price: 18.00,
        description: "Un 'magic fidget toy' es un juguete diseñado para ayudar a reducir el estrés y la ansiedad a través de la manipulación física. Generalmente, estos juguetes tienen piezas móviles, texturas variadas o mecanismos que permiten hacer clic, girar o deslizar. Son populares entre personas de todas las edades, ya que pueden mejorar la concentración y proporcionar una sensación de calma.",
        color: ["Verde", "Negro", "Azul", "Rojo"],
        disponible: 20,
        image: "https://i0.wp.com/sensorytoyz.co.uk/wp-content/uploads/2022/11/s-l1600-42.jpg?fit=711%2C1000&ssl=1"
    }
]

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/products', cors(corsOptions), (req, res) => {
    res.json(data)
})

app.get('/products/:id', cors(corsOptions), (req, res) => {
    const productId = req.params.id
    const foundProduct = data.find(product => product.id === parseInt(productId))

    if (foundProduct) {
        res.json(foundProduct)
    } else {
        res.send("Product not found")
    }
})

const port = 5050
app.listen(port, () => {
    console.log(`Servidor corriendo en el puerto ${port}`)
})