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
          <a href="./comecar"><input type="button" className='comecar' value={'Começar agora'} /></a>
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
        <div className='planos-cont width ' >
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
              <div className='ulfooter flex-column'><p>Confira as condições da academia escolhida</p></div>
            </li>
            <li className='li-vantagem'>
              <div className='div-plano'>
                <p className='h1'>Plano <b>Smart</b></p> 
                <p className='p'>Treine quando quiser na academia de sua preferência.</p>
              </div>
              <ul>
                <li className='hr center'>v</li>
                <li className='hr center'>v</li>
                <li className='hr center'>v</li>
                <li className='hr center'>v</li>
                <li className='hr center'>v</li>
                <li className='hr center'>v</li>
              </ul>
              <div className='ulfooter flex-column'>
                <p>A PARTIR DE</p>
                <div className='planos-preço'>
                  <p><b>R$ 9,90</b>/1º mês*</p>
                </div>
                <p className='miudo'>Demais meses a partir de: R$ 89,90</p>
              </div>
            </li>
            <li className='li-vantagem'>
              <div className='div-plano'>
                <h2 className='h1'>Plano <b>Fit</b></h2>
                <p className='p'>Treine o quanto quiser na sua academia e pague menos por isso.</p>
              </div>
              <ul>
                <li className='hr center'>v</li>
                <li className='hr center'>v</li>
                <li className='hr center'>v</li>
                <li className='hr center'>v</li>
                <li className='hr center'>v</li>
                <li className='hr center'>v</li>
              </ul>
              <div className='ulfooter flex-column'>
                <p>A PARTIR DE</p>
                <div className='planos-preço'>
                  <p><b>R$ 9,90</b>/1º mês*</p>
                </div>
                <p className='miudo'>Demais meses a partir de: R$ 99,90</p>
                <p className='miudo'>12 meses de fidelidade</p>
              </div>
            </li>
            <li className='li-vantagem destaque'>
              <div className='div-plano'>
                <h2 className='h1'>Plano <b> </b></h2>
                <p className='p'>Treine em mais de 1.000 academias Smart Fit!</p>
                <span className='flag'>O mais <b>vantajoso</b></span>
              </div>
              <ul>
                <li className='hr center'>v</li>
                <li className='hr center'>v</li>
                <li className='hr center'>v</li>
                <li className='hr center'>v</li>
                <li className='hr center'>v</li>
                <li className='hr center'>v</li>
              </ul>
              <div className='ulfooter flex-column'>
                <p>A PARTIR DE</p>
                <div className='planos-preço'>
                  <p><b>R$ 9,90</b>/1º mês*</p>
                </div>
                <p className='miudo'>Demais meses a partir de: R$ 99,90</p>
                <p className='miudo'>12 meses de fidelidade</p>
              </div>
            </li>
            
          </ul>
        </div>
      </div>

      <div className='width flex-column prop'>
        <input type="button" className='comecar margin-auto' value="começar agora" />
        <h3 className='margin-auto'>Você será encaminhado(a) para o processo de escolha e contratação do seu plano Smart Fit.</h3>
      </div>

      <footer className=''>
        <div className='footer-list'>
          <h1 className='margin-auto'>Consulte as condições promocionais e regulamentos na página: smartfit.com.br/contratos</h1>
          <hr/>
          <ul className='flex-row flex-start ul-footer'>
            <li>
              <ul>
                <li><b className='h1'>Institucional</b></li>
                <li>Sobre</li>
                <li>Conceito</li>
                <li>Investidores</li>
                <li>Central de Ajuda</li>
                <li>Fale Conosco</li>
                <li>Edital Smart Fit</li>
                <li>Aviso de Privacidade</li>
              </ul>
            </li>
            <li>
              <ul>
                <li><b className='h1'>Planos</b></li>
                <li>Planos</li>
                <li>Contratos</li>
                <li>Planos corporativos</li>
                <li>Smart Fit Supps</li>
              </ul>
            </li>
            <li>
              <ul>
                <li><b className='h1'>Corporativo</b></li>
                <li>Imprensa</li>
                <li>Quero ser um franqueado</li>
                <li>Divulgue sua marca</li>
                <li>Indique um ponto</li>
                <li>Trabalhe Conosco</li>
                <li>Graduação Ed. Física EAD</li>
              </ul>
            </li>
          </ul>
        </div>
          
        
      </footer>


    </main>
  )
}