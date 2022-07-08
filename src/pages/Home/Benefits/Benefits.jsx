import React from 'react'

import './Benefits.scss'

const Benefits = () => {
	return (
		<div className='benefits' id='benefits'>
			<div className='container'>
				<h2>C НАМИ ВЫ ПОЛУЧИТЕ</h2>
				<span className='line'></span>
				<div className='content'>
					<div className='card'>
						<p>
							<span>АБСОЛЮТНАЯ НАДЕЖНОСТЬ</span>
						</p>
						<p>
							Абсолютная надежность техники и комплектующих – мы продаем только
							те наименования, в которых уверены на 100
						</p>
					</div>
					<div className='card'>
						<p>
							<span>ГАРАНТИЯ</span>
						</p>
						<p>
							Гарантия защиты ваших интересов – вся техника подлежит
							гарантийному ремонту.
						</p>
					</div>
					<div className='card'>
						<p>
							<span>ЗАБОТА О КЛИЕНТАХ</span>
						</p>
						<p>
							Особые условия для постоянных клиентов – просто позвоните, и наши
							менеджеры расскажут вам подробности
						</p>
					</div>
				</div>
				<div className='content'>
					<div className='card'>
						<p>
							<span>ЧЕТКО ОТЛАЖЕННАЯ СИСТЕМА ПОСТАВОК</span>
						</p>
						<p>
							Четко отлаженная система поставок – многолетний опыт лет работы
							позволяют нам гарантировать то, что вы получите именно то, что
							заказали и получите это вовремя;
						</p>
					</div>
					<div className='card'>
						<p>
							<span>ЛОГИСТИКА</span>
						</p>
						<p>Оперативная доставка оборудования в любой регион Кыргызстана</p>
					</div>
					<div className='card'>
						<p>
							<span>АССОРТИМЕНТ</span>
						</p>
						<p>
							Широкий ассортимент продукции включая серверы известных
							производителей
						</p>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Benefits
