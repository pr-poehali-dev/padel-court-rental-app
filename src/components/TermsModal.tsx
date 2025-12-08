import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Link } from 'react-router-dom';

const TERMS_ACCEPTED_KEY = 'zvi_terms_accepted';

interface TermsModalProps {
  open: boolean;
  onAccept: () => void;
  onDecline: () => void;
}

const TermsModal = ({ open, onAccept, onDecline }: TermsModalProps) => {
  const handleAccept = () => {
    localStorage.setItem(TERMS_ACCEPTED_KEY, 'true');
    onAccept();
  };

  const handleDecline = () => {
    onDecline();
  };

  return (
    <Dialog open={open} onOpenChange={() => {}}>
      <DialogContent className="max-w-3xl max-h-[90vh]" onEscapeKeyDown={(e) => e.preventDefault()} onPointerDownOutside={(e) => e.preventDefault()}>
        <DialogHeader>
          <DialogTitle className="text-2xl">Пользовательское соглашение</DialogTitle>
        </DialogHeader>
        
        <ScrollArea className="h-[60vh] pr-4">
          <div className="space-y-4 text-sm">
            <section>
              <h3 className="font-semibold mb-2">1. Общие положения</h3>
              <p className="text-muted-foreground mb-2">
                Настоящее Пользовательское соглашение (далее — «Соглашение») регулирует отношения между 
                Акционерным обществом «ЗВИ» (ОГРН 1027700002351), именуемым в дальнейшем «Исполнитель», 
                и физическим или юридическим лицом, именуемым в дальнейшем «Заказчик», при предоставлении 
                услуг по аренде падел-кортов в клубе ЗВИ Падел Клуб.
              </p>
              <p className="text-muted-foreground">
                Адрес: г. Москва, Партийный переулок, дом 1, корпус 6, 115093
              </p>
            </section>

            <section>
              <h3 className="font-semibold mb-2">2. Предмет соглашения</h3>
              <p className="text-muted-foreground mb-2">
                2.1. Исполнитель обязуется предоставить Заказчику услуги по аренде падел-кортов, 
                а Заказчик обязуется оплатить услуги в порядке и на условиях, определенных настоящим Соглашением.
              </p>
              <p className="text-muted-foreground mb-2">
                2.2. Услуги предоставляются на следующих типах кортов:
              </p>
              <ul className="list-disc list-inside ml-4 text-muted-foreground space-y-1">
                <li>Корт PANORAMIC</li>
                <li>Корт ULTRA PANORAMIC</li>
              </ul>
            </section>

            <section>
              <h3 className="font-semibold mb-2">3. Порядок бронирования и оплаты</h3>
              <p className="text-muted-foreground mb-2">
                3.1. Бронирование осуществляется через сайт zvipadel.ru, по телефону +7 (495) 363-21-00 
                или +7 (495) 363-38-38.
              </p>
              <p className="text-muted-foreground mb-2">
                3.2. Оплата услуг производится онлайн на сайте или на месте в клубе наличными, банковской картой 
                или по безналичному расчету.
              </p>
              <p className="text-muted-foreground mb-2">
                3.3. При бронировании онлайн Заказчик получает подтверждение на указанный email или телефон.
              </p>
              <p className="text-muted-foreground">
                3.4. Стоимость услуг определяется действующим прайс-листом, размещенным на сайте.
              </p>
            </section>

            <section>
              <h3 className="font-semibold mb-2">4. Права и обязанности сторон</h3>
              <p className="text-muted-foreground mb-2 font-medium">4.1. Исполнитель обязуется:</p>
              <ul className="list-disc list-inside ml-4 text-muted-foreground space-y-1 mb-3">
                <li>Предоставить корт в технически исправном состоянии</li>
                <li>Обеспечить безопасность на территории клуба</li>
                <li>Предоставить необходимое оборудование (при заказе)</li>
              </ul>
              
              <p className="text-muted-foreground mb-2 font-medium">4.2. Заказчик обязуется:</p>
              <ul className="list-disc list-inside ml-4 text-muted-foreground space-y-1">
                <li>Соблюдать правила клуба и технику безопасности</li>
                <li>Бережно относиться к имуществу клуба</li>
                <li>Своевременно оплачивать услуги</li>
                <li>Использовать корт строго по назначению</li>
              </ul>
            </section>

            <section>
              <h3 className="font-semibold mb-2">5. Отмена и возврат</h3>
              <p className="text-muted-foreground mb-2">
                5.1. Отмена бронирования за 24 часа и более до начала — полный возврат оплаты.
              </p>
              <p className="text-muted-foreground mb-2">
                5.2. Отмена бронирования менее чем за 24 часа до начала — возврат 50% оплаты.
              </p>
              <p className="text-muted-foreground mb-2">
                5.3. Отмена в день бронирования или неявка — возврат не осуществляется.
              </p>
              <p className="text-muted-foreground">
                5.4. Возврат средств осуществляется на карту или счет, с которого была произведена оплата, 
                в течение 5-10 рабочих дней.
              </p>
            </section>

            <section>
              <h3 className="font-semibold mb-2">6. Ответственность</h3>
              <p className="text-muted-foreground mb-2">
                6.1. Исполнитель не несет ответственности за травмы, полученные Заказчиком в результате 
                несоблюдения техники безопасности.
              </p>
              <p className="text-muted-foreground mb-2">
                6.2. Заказчик несет материальную ответственность за порчу имущества клуба.
              </p>
              <p className="text-muted-foreground">
                6.3. Исполнитель не несет ответственности за личные вещи Заказчика.
              </p>
            </section>

            <section>
              <h3 className="font-semibold mb-2">7. Защита персональных данных</h3>
              <p className="text-muted-foreground mb-2">
                7.1. Исполнитель обязуется обрабатывать персональные данные Заказчика в соответствии 
                с Федеральным законом № 152-ФЗ «О персональных данных».
              </p>
              <p className="text-muted-foreground mb-2">
                7.2. Персональные данные используются исключительно для оказания услуг и информирования 
                Заказчика об акциях и предложениях клуба.
              </p>
              <p className="text-muted-foreground">
                7.3. Заказчик имеет право запросить удаление своих персональных данных, направив 
                соответствующий запрос на email клуба.
              </p>
            </section>

            <section>
              <h3 className="font-semibold mb-2">8. Прочие условия</h3>
              <p className="text-muted-foreground mb-2">
                8.1. Режим работы клуба: ежедневно с 08:00 до 23:00.
              </p>
              <p className="text-muted-foreground mb-2">
                8.2. Исполнитель вправе изменять условия настоящего Соглашения в одностороннем порядке. 
                Изменения вступают в силу с момента их размещения на сайте.
              </p>
              <p className="text-muted-foreground">
                8.3. Все споры решаются путем переговоров, а при недостижении согласия — в судебном порядке 
                в соответствии с законодательством Российской Федерации.
              </p>
            </section>

            <section>
              <h3 className="font-semibold mb-2">9. Контактная информация</h3>
              <p className="text-muted-foreground mb-1">
                <strong>Акционерное общество «ЗВИ»</strong>
              </p>
              <p className="text-muted-foreground mb-1">ОГРН: 1027700002351</p>
              <p className="text-muted-foreground mb-1">Адрес: г. Москва, Партийный переулок, дом 1, корпус 6, 115093</p>
              <p className="text-muted-foreground mb-1">Телефон: +7 (495) 363-21-00, +7 (495) 363-38-38</p>
              <p className="text-muted-foreground">Сайт: zvipadel.ru</p>
            </section>

            <div className="pt-4 border-t">
              <p className="text-xs text-muted-foreground text-center">
                Дата вступления в силу: 08 декабря 2024 года
              </p>
            </div>

            <div className="pt-2">
              <Link to="/terms" className="text-sm text-primary hover:underline">
                Открыть полную версию документа
              </Link>
            </div>
          </div>
        </ScrollArea>

        <DialogFooter className="flex flex-col sm:flex-row gap-2 sm:gap-3">
          <Button 
            variant="outline" 
            onClick={handleDecline}
            className="w-full sm:w-auto order-2 sm:order-1"
          >
            Отклонить
          </Button>
          <Button 
            onClick={handleAccept}
            className="w-full sm:w-auto order-1 sm:order-2"
          >
            Принять условия
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default TermsModal;