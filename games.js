// games.js — рабочая версия

export const games = [
  {
    id: "shooter",
    title: "Stickman Shooter",
    year: 2019,
    description: `
Вторая игра, которую я делал один и релизнул. Веб-версия может работать нестабильно, а версия для Android должна работать нормально.

Первую версию я сделал за месяц ещё в 2019 под Android. Популярности она не получила, а вскоре Google Play её удалил. Позже, где-то в 2021–2022, я решил адаптировать её под WebGL (Яндекс Игры) и также обновил Android-версию.

Сейчас версия для Android работает стабильно. WebGL сборка старая и местами сломана, так как Unity несколько раз обновлялась.
`,
    preview: "Previews/Shooter.webp",
    type: "iframe",
    actions: {
      iframe: "Games/Shooter/index.html",
      gp: "https://play.google.com/store/apps/details?id=com.HolyStickGames.StickmanHero"
    }
  },

  {
    id: "noobs-combo",
    title: "Нубики: Эпическое Комбо",
    year: 2025,
    description: "Клон старой флэш-игры Epic Combo, но с нубиками вместо черепашек. Делал примерно 2 месяца.",
    preview: "Previews/NoobsCombo.webp",
    type: "external",
    actions: {
      external: "https://yandex.ru/games/app/457186?lang=ru"
    }
  },

  {
    id: "noob-road",
    title: "Нубик, уйди с дороги",
    year: 2024,
    description: "Небольшой проект, делали вместе с другом около месяца.",
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
    description: "Слэшер. Делал в паре с другом, изначально под Android.",
    preview: "Previews/StickmanReaper.png",
    type: "external",
    actions: {
      external: "https://yandex.ru/games/app/181136"
    }
  },

  {
    id: "first-flight",
    title: "First Flight",
    year: 2017,
    description: "Самая первая игра.",
    preview: "https://trashbox.ru/apk_icons/826029_192.png",
    type: "external",
    actions: {
      external: "https://trashbox.ru/link/first-flight-android"
    }
  },

  {
    id: "warsmiths",
    title: "Warsmiths",
    year: "2020–2023",
    description: `
Первый и единственный проект, где я работал на коммерческой основе. Мобильная стратегическая RPG. 
Работал с легаси-кодом, боевой логикой, интерфейсом, анимациями, эффектами, звуками, префабами, аниматором и отладкой.
`,
    preview:
      "https://play-lh.googleusercontent.com/CnrRRXrILrA7BpDTq_M1Dpucl9NtlLl-OcjMuv6NjlleMa97mjH_9ZVSqrQvimIWtw=w1024-rw",
    type: "external",
    actions: {
      external: "https://play.google.com/store/apps/details?id=com.insensearts.warsmiths"
    }
  }
];
