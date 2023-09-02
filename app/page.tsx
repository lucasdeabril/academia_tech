import Image from 'next/image'

export default function Home() {
  return (
    <main>
      <header>
        <img src="" alt="academia tech" />
        <input type="button" value={'Seja franqueado'} />
        <input type="button" value={'Academias'} />
        <input type="button" value={'Espaço do cliente'} />
        <input type="button" value={'Começar agora'} />
        <input type="button" value={'Menu'} />
      </header>

      <div>
        banner
      </div>
      
      <div>
        <h2>Encontre a academia mais proxima</h2>
        <div>buscador</div>
      </div>

      <div>
        <h2>Venha treinar na maior rede de academias da América Latina</h2>
        <h3>Os melhores equipamentos e infraestrutura com mensalidades acessíveis.</h3>
        <div>
          {/* vantagens em forme de lista */}
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
        <h2>considerações finais</h2>
      </footer>


    </main>
  )
}