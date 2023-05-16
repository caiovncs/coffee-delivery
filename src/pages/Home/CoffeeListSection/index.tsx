import { CoffeeListContainer } from './styles'
import expresso from '../../../assets/coffee/expresso.svg'
import americano from '../../../assets/coffee/americano.svg'
import expressocremoso from '../../../assets/coffee/expressocremoso.svg'
import cafegelado from '../../../assets/coffee/cafegelado.svg'
import cafecomleite from '../../../assets/coffee/cafecomleite.svg'
import { Minus, Plus, ShoppingCart } from '@phosphor-icons/react'

export function CoffeeListSection() {
  const produtos = [
    {
      srcImg: expresso,
      tags: ['Tradicional'],
      nome: 'Expresso Tradicional',
      descricao: 'O tradicional café feito com água quente e grãos moídos',
      preco: '9,99',
    },
    {
      srcImg: americano,
      tags: ['Tradicional'],
      nome: 'Expresso Americano',
      descricao: 'Expresso diluído, menos intenso que o tradicional',
      preco: '9,99',
    },
    {
      srcImg: expressocremoso,
      tags: ['Tradicional'],
      nome: 'Expresso Cremoso',
      descricao: 'Café expresso tradicional com espuma cremosa',
      preco: '9,99',
    },
    {
      srcImg: cafegelado,
      tags: ['Tradicional', 'Gelado'],
      nome: 'Expresso Gelado',
      descricao: 'Bebida preparada com café expresso e cubos de gelo',
      preco: '9,99',
    },
    {
      srcImg: cafecomleite,
      tags: ['Tradicional', 'Com Leite'],
      nome: 'Café com Leite',
      descricao: 'Meio a meio de expresso tradicional com leite vaporizado',
      preco: '9,99',
    },
  ]

  return (
    <CoffeeListContainer>
      <h1>Nossos cafés</h1>
      <div className="coffee">
        {produtos.map((item) => {
          return (
            <div>
              <img src={item.srcImg} alt={item.nome} />
              <span className="tag">{item.tags}</span>
              <h1 className="nome">{item.nome}</h1>
              <p className="desc">{item.descricao}</p>
              <div className="buy">
                <span className="preco">{item.preco}</span>
                <span className="actions">
                  <div className="qtd">
                    <Minus size={14} color="#4B2995" />
                    <span>0</span>
                    <Plus size={14} color="#4B2995" />
                  </div>
                  <span className="buycart">
                    <ShoppingCart weight="fill" size={22} className="teste" />
                  </span>
                </span>
              </div>
            </div>
          )
        })}
      </div>
    </CoffeeListContainer>
  )
}
