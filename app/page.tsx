import Image from 'next/image'
import banner from './fotos/banner.jpg'

export default function Home() {
  return (
    <main>
      <header>
        <h1>Academia Tech</h1>
        <div className='sub-header flex spacearound'>
          <input type="button" value={'Seja franqueado'} />
          <input type="button" value={'Academias'} />
          <input type="button" value={'Espaço do cliente'} />
          <input type="button" className='comecar' value={'Começar agora'} />
          <input type="button" value={'Menu'} />
        </div>
        
      </header>

      <div className='banner'>
        <Image src={banner} alt='banner' className='propaganda' width={800} height={600} />
      </div>
      
      <div className='buscador flex-column space-btw width'>
        <h2 className='margin-auto'>Encontre a academia mais proxima</h2>
        <div className='margin-auto search bg-predio'><p className='pesquisa'>Escolher academia</p></div>
      </div>

      <div className='planos flex-column width'>
        <h1>Venha treinar na maior rede de academias da América Latina</h1>
        <h3>Os melhores equipamentos e infraestrutura com mensalidades acessíveis.</h3>
        <div className='planos-cont width bege' >
          <ul className='container-beneficio flex-row'>
            <li className='li-beneficios'>
              <div className='div-plano'></div>
              <ul className='beneficios'>
                <li className='hr'>Área de musculação e aeróbicos</li>
                <li className='hr'>Smart Fit Go (treinos online)</li>
                <li className='hr'>Smart Fit App</li>
                <li className='hr'>Acesso ilimitado a +1.000 academias da rede</li>
                <li className='hr'>Leve amigos para treinar com você</li>
                <li className='hr'>Cadeira de massagem</li>
              </ul>
              <div></div>
            </li>
            <li className='li-vantagem'>
              <div className='div-plano'>
                <p className='h1'>Plano Smart</p> 
                <p className='p'>Treine quando quiser na academia de sua preferência.</p>
              </div>
              <ul>
                <li className='hr'>v</li>
                <li className='hr'>v</li>
                <li className='hr'>v</li>
                <li className='hr'>v</li>
                <li className='hr'>v</li>
                <li className='hr'>v</li>
              </ul>
              <div></div>
            </li>
            <li className='li-vantagem'>
              <div className='div-plano'>
                <h2 className='h1'>Plano Fit</h2>
                <p className='p'>Treine o quanto quiser na sua academia e pague menos por isso.</p>
              </div>
              <ul>
                <li className='hr'>v</li>
                <li className='hr'>v</li>
                <li className='hr'>v</li>
                <li className='hr'>v</li>
                <li className='hr'>v</li>
                <li className='hr'>v</li>
              </ul>
              <div></div>
            </li>
            <li className='li-vantagem'>
              <div className='div-plano'>
                <h2 className='h1'>Plano Black</h2>
                <p className='p'>Treine em mais de 1.000 academias Smart Fit!</p>
              </div>
              <ul>
                <li className='hr'>v</li>
                <li className='hr'>v</li>
                <li className='hr'>v</li>
                <li className='hr'>v</li>
                <li className='hr'>v</li>
                <li className='hr'>v</li>
              </ul>
              <div></div>
            </li>
            
          </ul>
        </div>
      </div>

      <div>
        <input type="button" value="começar agora" />
        <h3>Você será encaminhado(a) para o processo de escolha e contratação do seu plano Smart Fit.</h3>
      </div>

      <div>
        <h2>Experiência Smart Fit</h2>
        <div>
          {/* três banners de vantagens */}
        </div>
        <h2>Aulas e treinos exclusivos</h2>
        <div>
          {/* Quatro banners de aulas exclusivas */}
        </div>
      </div>

      <div>
        <div>
          <h2>Conheça nosso app</h2>
        </div>
      </div>

      <div>
        <h2>Quer acelerar os resultados?</h2>
        {/* banners de produtos adicionais */}
      </div>
      
      <div>
        <h3>Receba novidades e promoções exclusivas da Smart Fit</h3>
        <input type="email" />
        <input type="submit" />
      </div>

      <footer>
        <h1>Academia Tech</h1>
        <hr />
        <h2>Siga a Academia Tech</h2>
        <img src="" alt="" />
        <img src="" alt="" />
        <img src="" alt="" />
        <img src="" alt="" />
        <img src="" alt="" />
        <img src="" alt="" />
        <img src="" alt="" />
        <hr />
        <ul>
          <li>Institucional</li>
        </ul>
        <ul>
          <li>Planos</li>
        </ul>
        <ul>
          <li>Corporativo</li>
        </ul>
        <hr />
        <h1>*Consulte as condições promocionais e regulamentos na página: smartfit.com.br/contratos</h1>
      </footer>


    </main>
  )
}