import expresso from '../assets/cups/expresso.svg'
import americano from '../assets/cups/americano.svg'
import cremoso from '../assets/cups/cremoso.svg'

import cafeComLeite from '../assets/cups/cafeComLeite.svg'
import latte from '../assets/cups/latte.svg'
import capuccino from '../assets/cups/capuccino.svg'

import mocaccino from '../assets/cups/mochaccino.svg'
import chocolateQuente from '../assets/cups/chocolateQuente.svg'
import cubano from '../assets/cups/cubano.svg'

import arabe from '../assets/cups/arabe.svg'
import irlandes from '../assets/cups/irlandes.svg'

export const products = [
    {
        name: 'Expresso Tradicional',
        description: 'O tradicional café feito com água quente e grãos moídos',
        price: 9.90,
        pills: [
            'tradicional'
        ],
        img: expresso
    },
    {
        name: 'Expresso Americano',
        description: 'Expresso diluído, menos intenso que o tradicional',
        price: 9.90,
        pills: [
            'tradicional'
        ],
        img: americano
    },
    {
        name: 'Expresso Cremoso',
        description: 'Café expresso tradicional com espuma cremosa',
        price: 9.90,
        pills: [
            'tradicional'
        ],
        img: cremoso
    },
    {
        name: 'Café com Leite',
        description: 'Meio a meio de expresso tradicional com leite vaporizado',
        price: 9.90,
        pills: [
            'tradicional',
            'com leite'
        ],
        img: cafeComLeite
    },
    {
        name: 'Latte',
        description: 'Uma dose de café expresso com o dobro de leite e espuma cremosa',
        price: 9.90,
        pills: [
            'tradicional',
            'com leite'
        ],
        img: latte
    },
    {
        name: 'Capuccino',
        description: 'Bebida com canela feita de doses iguais de café, leite e espuma',
        price: 9.90,
        pills: [
            'tradicional',
            'com leite'
        ],
        img: capuccino
    },
    {
        name: 'Mocaccino',
        description: 'Café expresso com calda de chocolate, pouco leite e espuma',
        price: 9.90,
        pills: [
            'tradicional',
            'com leite'
        ],
        img: mocaccino
    },
    {
        name: 'Chocolate Quente',
        description: 'Bebida feita com chocolate dissolvido no leite quente e café',
        price: 9.90,
        pills: [
            'especial',
            'com leite'
        ],
        img: chocolateQuente
    },
    {
        name: 'Cubano',
        description: 'Drink gelado de café expresso com rum, creme de leite e hortelã',
        price: 9.90,
        pills: [
            'especial',
            'alcoólico',
            'gelado'
        ],
        img: cubano
    },
    {
        name: 'Árabe',
        description: 'Bebida preparada com grãos de café árabe e especiarias',
        price: 9.90,
        pills: [
            'especial'
        ],
        img: arabe
    },
    {
        name: 'Irlandês',
        description: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
        price: 9.90,
        pills: [
            'especial',
            'alcoólico'
        ],
        img: irlandes
    }
]

