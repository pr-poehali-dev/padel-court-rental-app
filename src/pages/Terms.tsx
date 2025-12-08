import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const Terms = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-primary/5 to-background">
      <Navigation />
      
      <main className="container mx-auto px-4 py-24 max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center">
          Пользовательское соглашение
        </h1>
        
        <div className="bg-card rounded-lg shadow-lg p-8 space-y-6 text-foreground/90">
          <section>
            <h2 className="text-2xl font-semibold mb-4 text-primary">1. Общие положения</h2>
            <p className="mb-3">
              Настоящее Пользовательское соглашение (далее — «Соглашение») регулирует отношения между 
              АО «Завод Выпарных Изделий» (ОГРН 1027700002351), именуемым в дальнейшем «Исполнитель», 
              и физическим или юридическим лицом, именуемым в дальнейшем «Заказчик», при предоставлении 
              услуг по аренде падел-кортов в клубе ЗВИ Падел Клуб.
            </p>
            <p>
              Адрес: г. Москва, Партийный переулок, дом 1, корпус 6, 115093
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-primary">2. Предмет соглашения</h2>
            <p className="mb-3">
              2.1. Исполнитель обязуется предоставить Заказчику услуги по аренде падел-кортов, 
              а Заказчик обязуется оплатить услуги в порядке и на условиях, определенных настоящим Соглашением.
            </p>
            <p className="mb-3">
              2.2. Услуги предоставляются на следующих типах кортов:
            </p>
            <ul className="list-disc list-inside ml-4 space-y-2">
              <li>Корт PANORAMIC</li>
              <li>Корт ULTRA PANORAMIC</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-primary">3. Порядок бронирования и оплаты</h2>
            <p className="mb-3">
              3.1. Бронирование осуществляется через сайт zvipadel.ru, по телефону +7 (495) 363-21-00 
              или +7 (495) 363-38-38.
            </p>
            <p className="mb-3">
              3.2. Оплата услуг производится онлайн на сайте или на месте в клубе наличными, банковской картой 
              или по безналичному расчету.
            </p>
            <p className="mb-3">
              3.3. При бронировании онлайн Заказчик получает подтверждение на указанный email или телефон.
            </p>
            <p className="mb-3">
              3.4. Стоимость услуг определяется действующим прайс-листом, размещенным на сайте.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-primary">4. Права и обязанности сторон</h2>
            <p className="mb-3 font-semibold">4.1. Исполнитель обязуется:</p>
            <ul className="list-disc list-inside ml-4 space-y-2 mb-4">
              <li>Предоставить корт в технически исправном состоянии</li>
              <li>Обеспечить безопасность на территории клуба</li>
              <li>Предоставить необходимое оборудование (при заказе)</li>
            </ul>
            
            <p className="mb-3 font-semibold">4.2. Заказчик обязуется:</p>
            <ul className="list-disc list-inside ml-4 space-y-2 mb-4">
              <li>Соблюдать правила клуба и технику безопасности</li>
              <li>Бережно относиться к имуществу клуба</li>
              <li>Своевременно оплачивать услуги</li>
              <li>Использовать корт строго по назначению</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-primary">5. Отмена и возврат</h2>
            <p className="mb-3">
              5.1. Отмена бронирования за 24 часа и более до начала — полный возврат оплаты.
            </p>
            <p className="mb-3">
              5.2. Отмена бронирования менее чем за 24 часа до начала — возврат 50% оплаты.
            </p>
            <p className="mb-3">
              5.3. Отмена в день бронирования или неявка — возврат не осуществляется.
            </p>
            <p className="mb-3">
              5.4. Возврат средств осуществляется на карту или счет, с которого была произведена оплата, 
              в течение 5-10 рабочих дней.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-primary">6. Ответственность</h2>
            <p className="mb-3">
              6.1. Исполнитель не несет ответственности за травмы, полученные Заказчиком в результате 
              несоблюдения техники безопасности.
            </p>
            <p className="mb-3">
              6.2. Заказчик несет материальную ответственность за порчу имущества клуба.
            </p>
            <p className="mb-3">
              6.3. Исполнитель не несет ответственности за личные вещи Заказчика.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-primary">7. Защита персональных данных</h2>
            <p className="mb-3">
              7.1. Исполнитель обязуется обрабатывать персональные данные Заказчика в соответствии 
              с Федеральным законом № 152-ФЗ «О персональных данных».
            </p>
            <p className="mb-3">
              7.2. Персональные данные используются исключительно для оказания услуг и информирования 
              Заказчика об акциях и предложениях клуба.
            </p>
            <p className="mb-3">
              7.3. Заказчик имеет право запросить удаление своих персональных данных, направив 
              соответствующий запрос на email клуба.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-primary">8. Прочие условия</h2>
            <p className="mb-3">
              8.1. Режим работы клуба: ежедневно с 08:00 до 23:00.
            </p>
            <p className="mb-3">
              8.2. Исполнитель вправе изменять условия настоящего Соглашения в одностороннем порядке. 
              Изменения вступают в силу с момента их размещения на сайте.
            </p>
            <p className="mb-3">
              8.3. Все споры решаются путем переговоров, а при недостижении согласия — в судебном порядке 
              в соответствии с законодательством Российской Федерации.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-primary">9. Контактная информация</h2>
            <p className="mb-2">
              <strong>АО «Завод Выпарных Изделий»</strong>
            </p>
            <p className="mb-2">ОГРН: 1027700002351</p>
            <p className="mb-2">Адрес: г. Москва, Партийный переулок, дом 1, корпус 6, 115093</p>
            <p className="mb-2">Телефон: +7 (495) 363-21-00, +7 (495) 363-38-38</p>
            <p className="mb-2">Email: info@zvipadel.ru</p>
            <p className="mb-2">Сайт: zvipadel.ru</p>
          </section>

          <section className="pt-6 border-t border-border">
            <p className="text-sm text-muted-foreground text-center">
              Дата вступления в силу: 08 декабря 2024 года
            </p>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Terms;