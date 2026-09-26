export default function Page() {
  return (
    <>
      <header className="frc-nav" role="banner">
        <div className="frc-nav__inner">
          <a href="/" className="frc-nav__brand" aria-label="Faro Casino — главная">
            Faro Casino
          </a>
          <nav className="frc-nav__menu" aria-label="Основная навигация">
            <a href="#frc-about">О сайте</a>
            <a href="#frc-games">Игры</a>
            <a href="#frc-mirror">Зеркало</a>
            <a href="#frc-bonus">Бонусы</a>
            <a href="#frc-mobile">Мобильная</a>
          </nav>
        </div>
      </header>

      <main className="frc-shell" role="main">
        <section className="frc-hero" id="frc-hero" aria-label="Faro Casino — главный экран">
          <div className="frc-hero__inner">
            <div className="frc-hero__text">
              <h1 className="frc-hero__title">Faro Casino — официальный сайт казино Фаро</h1>
              <p className="frc-hero__sub">
                Faro Casino — это место, где можно играть онлайн в слоты, рулетку и live-игры с живыми дилерами. Рабочее зеркало Faro казино открывает доступ к официальному сайту в любое время дня и ночи.
              </p>
              <a href="#frc-about" className="frc-hero__cta">Начать играть в Faro Casino</a>
            </div>
            <div className="frc-hero__art">
              <img
                src="/frc-hero-art.png"
                alt="Рулетка на столе казино Faro Casino"
                width={640}
                height={360}
                fetchPriority="high"
                decoding="async"
              />
            </div>
          </div>
        </section>

        <article className="frc-section" id="frc-about" aria-label="Об официальном сайте Faro Casino">
          <div className="frc-section__inner">
            <div className="frc-section__text">
              <h2 className="frc-section__title">Faro Casino — официальный сайт казино Фаро</h2>
              <p className="frc-section__body">
                Faro Casino — это официальный сайт, на котором собраны лучшие азартные игры от проверенных мировых провайдеров. На официальном сайте Faro Casino вы найдёте сотни слотов, настольные игры и live-казино с реальными дилерами. Платформа Faro казино работает по лицензии и обеспечивает честную игру для каждого пользователя. Faro Casino официальный сайт предлагает удобный интерфейс, быстрые выплаты и круглосуточную службу поддержки, готовую помочь в любой ситуации.
              </p>
            </div>
          </div>
        </article>

        <article className="frc-section frc-section--alt" id="frc-games" aria-label="Игры в Faro казино">
          <div className="frc-section__inner">
            <div className="frc-section__art">
              <img
                src="/frc-slots-art.png"
                alt="Игровые автоматы и слоты в Faro Casino"
                width={640}
                height={360}
                loading="lazy"
                decoding="async"
              />
            </div>
            <div className="frc-section__text">
              <h2 className="frc-section__title">Faro казино: играть онлайн в слоты и live-игры</h2>
              <p className="frc-section__body">
                Faro казино предлагает играть онлайн в более чем две тысячи игр — от классических слотов с фруктами до современных live-игр с живыми дилерами. В Faro казино онлайн доступны рулетка, блэкджек, баккара и покер в различных вариациях. Каждый автомат в Faro казино можно запустить в демо-режиме без регистрации, чтобы изучить правила. Faro Casino играть можно на реальные деньги с моментальным выводом выигрыша на карту или электронный кошелёк.
              </p>
            </div>
          </div>
        </article>

        <article className="frc-section" id="frc-mirror" aria-label="Зеркало Faro Casino">
          <div className="frc-section__inner">
            <div className="frc-section__text">
              <h2 className="frc-section__title">Faro Casino зеркало — рабочий вход на официальный сайт</h2>
              <p className="frc-section__body">
                Faro Casino зеркало — это точная копия официального сайта, которая позволяет получить доступ к платформе в любое время. Рабочее зеркало Faro казино полностью повторяет функционал основного ресурса: регистрацию, пополнение счёта, вывод средств и доступ ко всем играм. Если официальный сайт Faro Casino временно недоступен, Faro казино зеркало рабочее решит эту проблему за считанные секунды. Все данные пользователя синхронизированы между зеркалом и основным сайтом Faro казино.
              </p>
            </div>
            <div className="frc-section__art">
              <img
                src="/frc-live-art.png"
                alt="Live-игры с дилерами в Faro Casino"
                width={640}
                height={360}
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>
        </article>

        <article className="frc-section frc-section--alt" id="frc-bonus" aria-label="Бонусы и регистрация в Faro Casino">
          <div className="frc-section__inner">
            <div className="frc-section__art">
              <img
                src="/frc-mobile-art.png"
                alt="Мобильная версия Faro Casino на смартфоне"
                width={640}
                height={360}
                loading="lazy"
                decoding="async"
              />
            </div>
            <div className="frc-section__text">
              <h2 className="frc-section__title">Faro казино официальный сайт: регистрация и бонусы</h2>
              <p className="frc-section__body">
                На официальном сайте Faro казино регистрация занимает не больше минуты. Достаточно указать email и придумать надёжный пароль, чтобы получить доступ ко всем возможностям платформы. Faro Casino официальный сайт дарит новым игрокам приветственный бонус и бесплатные фриспины на популярные слоты. Faro казино официальный сайт также проводит регулярные турниры с крупными призовыми фондами для постоянных клиентов и программу лояльности с кэшбэком.
              </p>
            </div>
          </div>
        </article>

        <article className="frc-section" id="frc-mobile" aria-label="Мобильная версия Faro Casino">
          <div className="frc-section__inner">
            <div className="frc-section__text">
              <h2 className="frc-section__title">Faro Casino играть: мобильная версия и приложение</h2>
              <p className="frc-section__body">
                Faro Casino играть можно с любого устройства — стационарного компьютера, планшета или смартфона. Мобильная версия Faro казино полностью адаптирована под экраны iPhone и Android, сохраняя весь функционал десктопной версии. Faro казино онлайн загружается быстро даже при слабом интернет-соединении, а интерфейс остаётся удобным на любом размере экрана. Faro Casino официальный сайт доступен прямо в мобильном браузере без необходимости скачивать дополнительные приложения.
              </p>
            </div>
          </div>
        </article>

        <section className="frc-cta" aria-label="Призыв к действию">
          <div className="frc-cta__inner">
            <h2 className="frc-cta__title">Faro Casino — начните играть прямо сейчас</h2>
            <p className="frc-cta__sub">
              Faro казино официальный сайт открыт для вас круглосуточно. Регистрируйтесь, получайте бонусы и наслаждайтесь игрой в Faro Casino онлайн.
            </p>
            <a href="#frc-hero" className="frc-cta__btn">Перейти на Faro Casino</a>
          </div>
        </section>
      </main>

      <footer className="frc-foot" role="contentinfo">
        <div className="frc-foot__inner">
          <div className="frc-foot__brand">Faro Casino</div>
          <nav className="frc-foot__tags" aria-label="Теги для поиска по сайту">
            <a href="#frc-hero" className="frc-foot__tag">#faroCasino</a>
            <a href="#frc-mirror" className="frc-foot__tag">#faroCasinoЗеркало</a>
            <a href="#frc-games" className="frc-foot__tag">#faroCasinoИграть</a>
            <a href="#frc-about" className="frc-foot__tag">#faroCasinoОфициальный</a>
            <a href="#frc-about" className="frc-foot__tag">#faroCasinoОфициальныйСайт</a>
            <a href="#frc-hero" className="frc-foot__tag">#faroКазино</a>
            <a href="#frc-mirror" className="frc-foot__tag">#faroКазиноЗеркало</a>
            <a href="#frc-mirror" className="frc-foot__tag">#faroКазиноЗеркалоРабочее</a>
            <a href="#frc-games" className="frc-foot__tag">#faroКазиноИграть</a>
            <a href="#frc-games" className="frc-foot__tag">#faroКазиноОнлайн</a>
            <a href="#frc-bonus" className="frc-foot__tag">#faroКазиноОфициальный</a>
            <a href="#frc-bonus" className="frc-foot__tag">#faroКазиноОфициальныйСайт</a>
          </nav>
          <div className="frc-foot__meta">
            © 2026 Faro Casino. Все права защищены. Казино Фаро — официальный сайт.
          </div>
        </div>
      </footer>
    </>
  )
}
