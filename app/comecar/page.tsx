import Image from 'next/image'
import banner from './fotos/banner.jpg'

export default function Home() {
  return (
    <main className='corpo'>
        
        <header>
        <h1>Academia Tech</h1>
        <div className='sub-header flex spacearound'>
          <input type="button" className='inv' value={'Seja franqueado'} />
          <input type="button" className='inv' value={'Academias'} />
          <input type="button" className='inv' value={'Espaço do cliente'} />
          <a href="./comecar"><input type="button" className='comecar inv' value={'Começar agora'} /></a>
          <input type="button" value={'Menu'} />
        </div>
        
      </header>

      <div className='width h1comecar'>
        <h1 className='h1'><b>E aí, onde quer treinar?</b></h1>
      </div>

      <div className='cep width'>
        <input type="text" placeholder='Insira seu cep' />
      </div>

      <div>
        <h1>Academias</h1>
        <div className='conteiner-academias'>
          <div className='academia-banner'></div>
          <div className='academia-banner'></div>
          <div className='academia-banner'></div>
        </div>
      </div>
    </main>
    )
}