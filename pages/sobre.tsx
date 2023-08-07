import { useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import TimelineUpdate from '../components/TimelineUpdate'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { Dialog } from '@headlessui/react'
import { features } from 'process'

export default function Sobre () {

    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    return (
        <div>
       <Navbar mobileMenuOpen={mobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen}></Navbar>
            <section className="bg-gray-50">
                <div
                    className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-auto lg:items-center"
                >
                    <div className="mx-auto max-w-xl text-center">
                    <h1 className="text-3xl font-extrabold sm:text-5xl">
                        Um pequeno passo.
                        <strong className="font-extrabold text-green-600 sm:block">
                        Uma grande evolução.
                        </strong>
                    </h1>

                    <p className="mt-4 sm:text-xl/relaxed">
                        Essa é uma API em estágio inicial de desenvolvimento. Há muitos endpoints para serem criados ainda,
                         mas aqui você pode acompanhar todos o estágio de desenvolvimento se inscrevendo no mailing ou entrando no nosso servidor do discord 
                
                    </p>

                    </div>
                </div>
            </section>
            <section className="bg-gray-50">
	<div className="container max-w-5xl px-4 py-12 mx-auto">
		<div className="grid gap-4 mx-4 sm:grid-cols-12">
			<div className="col-span-12 sm:col-span-3">
				<div className="text-center sm:text-left mb-14 before:block before:w-24 before:h-3 before:mb-5 before:rounded-md before:mx-auto sm:before:mx-0 before:bg-green-500">
					<h3 className="text-3xl font-semibold">Roadmap</h3>
					<span className=" text-sm font-bold tracki uppercase text-gray-400">Em que passo estamos na nossa jornada</span>
				</div>
			</div>
			<div className="relative col-span-12 px-4 space-y-6 sm:col-span-9">
				<div className="col-span-12 space-y-12 relative px-4 sm:col-span-8 sm:space-y-8 sm:before:absolute sm:before:top-2 sm:before:bottom-0 sm:before:w-0.5 sm:before:-left-3 before:bg-green-600">
                <TimelineUpdate 
                title={'Versão 0.1'} 
                date={'AGOSTO - 2023'} 
                text={`Bem vindos a primeira versão da InvistAPI.
                 Nessa primeira versão beta da API você conta com 
                 as cotações dos principais ativos da bolsa brasileira.
                 
                  - Histórico de FII's, Ações, ETF's de ações - 
                  Histórico de dividendos de ações
                  ` 
                }
                items={["- Cotação de todos FII's, Ações, ETF's em tempo real",
                "- Histórico de FII's, Ações, ETF's de ações",
                "- Histórico de dividendos de ações",
                "- Taxa básica de juros (SELIC)"

            ]}
                ></TimelineUpdate>
                    <TimelineUpdate 
                    title={'Versão ??'} 
                    date={'2023'} 
                    text={"Em breve"}
                    items={[
                        "Cotação de Cripto e Forex em tempo real",
                        "Histórcio de todos ativos",
                        "Histórico de dividendos de FII'S",
                        "CDI, IPCA",
                        "Tesouro Direto"
                    ]}
                     ></TimelineUpdate>
                    <TimelineUpdate title={''} date={''} text={''}></TimelineUpdate>



				</div>
			</div>
		</div>
	</div>
</section>

      <Footer></Footer>
        </div>
    )
}