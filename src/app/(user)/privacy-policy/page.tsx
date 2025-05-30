import Link from 'next/link';

export default function PrivacyPolicy() {
  return (
    <div className="relative">
      <Link 
        href="/" 
        className="absolute top-10 left-40 w-12 h-12 flex items-center justify-center rounded-full border-2 border-gray-700 hover:shadow-lg hover:scale-110 transition-all duration-300"
        aria-label="Вернуться на главную"
      >
        <svg 
          width="50" 
          height="50" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="1" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        >
          <path d="M14 8l-4 4 4 4" />
        </svg>
      </Link>

      <div className="container mx-auto px-4 py-4 max-w-4xl">
        <h1 className="text-3xl font-bold mb-6 mt-8">Политика конфиденциальности</h1>
        
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">1. Общие положения</h2>
          <p className="text-gray-700 mb-4">
            Добро пожаловать на сайт Igray! Мы, компания Igray LLC, ценим вашу конфиденциальность и стремимся защитить ваши персональные данные. Настоящая Политика конфиденциальности описывает, как мы собираем, используем и защищаем информацию, которую вы предоставляете при использовании нашего сайта igray.com.
          </p>
          <p className="text-gray-700">
            Используя наш сайт, вы соглашаетесь с условиями данной политики. Если вы не согласны, пожалуйста, воздержитесь от использования сайта.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">2. Сбор информации</h2>
          <p className="text-gray-700 mb-4">
            Мы можем собирать следующую информацию:
          </p>
          <ul className="list-disc pl-6 text-gray-700 mb-4">
            <li>Имя, адрес электронной почты и другие данные, которые вы предоставляете при регистрации или заполнении форм.</li>
            <li>Информацию об использовании сайта, включая IP-адрес, тип браузера, время посещения и просмотренные страницы.</li>
            <li>Данные, полученные через файлы cookie, для улучшения пользовательского опыта.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">3. Использование информации</h2>
          <p className="text-gray-700 mb-4">
            Собранная информация используется для:
          </p>
          <ul className="list-disc pl-6 text-gray-700 mb-4">
            <li>Предоставления и улучшения наших услуг.</li>
            <li>Обработки ваших запросов и обратной связи.</li>
            <li>Анализа поведения пользователей для оптимизации сайта.</li>
            <li>Отправки информационных рассылок (с вашего согласия).</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">4. Защита данных</h2>
          <p className="text-gray-700">
            Мы применяем современные технологии шифрования и другие меры безопасности для защиты ваших данных от несанкционированного доступа. Однако ни один метод передачи данных через интернет не является абсолютно безопасным, и мы не можем гарантировать полную защиту.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">5. Передача данных третьим лицам</h2>
          <p className="text-gray-700">
            Мы не передаем ваши персональные данные третьим лицам, за исключением случаев, предусмотренных законом, или с вашего явного согласия. Мы можем делиться обезличенной статистикой с партнерами для аналитических целей.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">6. Ваши права</h2>
          <p className="text-gray-700">
            Вы имеете право запросить доступ к вашим данным, их исправление или удаление. Для этого свяжитесь с нами по адресу: support@igray.com.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">7. Изменения в политике</h2>
          <p className="text-gray-700">
            Мы можем обновлять данную Политику конфиденциальности. Все изменения будут опубликованы на этой странице с указанием даты обновления. Последнее обновление: 20 апреля 2025.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">8. Контакты</h2>
          <p className="text-gray-700">
            Если у вас есть вопросы по поводу данной политики, свяжитесь с нами:
            <br />
            Email: support@igray.com
            <br />
            Адрес: 123 Улица Примера, Город, Страна
          </p>
        </section>
      </div>
    </div>
  );
}