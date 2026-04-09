export const siteData = {
  profile: {
    title: "Holy Stick Games",
    subtitle: "Indie Game Development",
    year: 2026,
    socials: [
      { name: "Google Play", url: "https://play.google.com/store/apps/developer?id=HolyStick+Games" },
      { name: "Яндекс Игры", url: "https://yandex.ru/games/developer/57662" }
    ],
    contacts: [
      { label: "Разработчик", value: "Илья Круглов" },
      { label: "Email", value: "<a href='mailto:crugloww92@gmail.com' style='color:#6cf; text-decoration:none;'>crugloww92@gmail.com</a>" }
    ]
  },
  games: [
    {
      id: "noobs-combo",
      title: "Нубики: Эпическое Комбо",
      year: 2025,
      category: "solo-new",
      shortDesc: "Клон старой флэш-игры Epic Combo, но с нубиками вместо черепашек.",
      fullDesc: "Делал примерно 2 месяца. Основной фокус был на производительности при большом количестве объектов.",
      preview: "Previews/NoobsCombo.webp",
      type: "external",
      actions: {
        external: "https://yandex.ru/games/app/457186?lang=ru",
        gp: "https://play.google.com/store/apps/details?id=com.HolyStickGames.CrazyCombo"
      }
    },
    {
      id: "shooter",
      title: "Stickman Shooter",
      year: 2019,
      category: "solo-old",
      shortDesc: "Вторая игра, которую я делал один и релизнул.",
      fullDesc: "Первую версию я сделал за месяц ещё в 2019 под Android. Популярности она не получила, а вскоре Google Play её удалил. Позже, где-то в 2021–2022, я решил адаптировать её под WebGL (Яндекс Игры) и также обновил Android-версию.\n\nСейчас версия для Android работает стабильно. WebGL сборка старая и местами сломана, так как Unity несколько раз обновлялась.",
      preview: "Previews/Shooter.webp",
      type: "iframe",
      actions: {
        iframe: "Games/Shooter/index.html"
      }
    },
    {
      id: "first-flight",
      title: "First Flight",
      year: 2017,
      category: "solo-old",
      shortDesc: "Самая первая игра.",
      fullDesc: "",
      preview: "https://trashbox.ru/apk_icons/826029_192.png",
      type: "external",
      actions: {
        external: "https://trashbox.ru/link/first-flight-android"
      }
    },
    {
      id: "noob-road",
      title: "Нубик, уйди с дороги",
      year: 2024,
      category: "coop",
      shortDesc: "Небольшой проект, делали вместе с другом.",
      fullDesc: "Разработка заняла около месяца. Совместный опыт работы над логикой и балансом.",
      preview: "Previews/NoobsCars.webp",
      type: "external",
      actions: {
        external: "https://yandex.ru/games/app/297440?lang=ru"
      }
    },
    {
      id: "reaper",
      title: "Stickman Reaper",
      year: 2018,
      category: "coop",
      shortDesc: "Слэшер, изначально под Android.",
      fullDesc: "Делал в паре с другом (<a href='https://yandex.com/games/developer/39390' target='_blank' style='color:#6cf; text-decoration:none;'>Woger Games</a>).",
      preview: "Previews/StickmanReaper.png",
      type: "external",
      actions: {
        external: "https://yandex.ru/games/app/181136"
      }
    },
    {
      id: "warsmiths",
      title: "Warsmiths",
      year: "2020–2023",
      category: "commercial",
      shortDesc: "Мобильная стратегическая RPG.",
      fullDesc: "Первый и единственный проект, где я работал на коммерческой основе. Работал с легаси-кодом, боевой логикой, интерфейсом, анимациями, эффектами, звуками, префабами, аниматором и отладкой.",
      preview: "https://play-lh.googleusercontent.com/CnrRRXrILrA7BpDTq_M1Dpucl9NtlLl-OcjMuv6NjlleMa97mjH_9ZVSqrQvimIWtw=w1024-rw",
      type: "external",
      actions: {
        external: "https://play.google.com/store/apps/details?id=com.insensearts.warsmiths"
      }
    }
  ]
};