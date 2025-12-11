// games.js — full structure extracted from your HTML
// Each game now has: id, title, year, description, preview, type, actions
// type: "iframe", "external", or "apk" — determines how to render the card

export const games = [
  {
    id: "shooter",
    title: "Stickman Shooter",
    year: 2019,
    description:
      "Вторая игра из тех что я делал один и релизнул. Веб версия может быть не стабильной, версия для андроид должна работать нормально. Первую версию сделал за месяц ещё в 2019 под андроид, популярности она не сыскала а вскоре ГП её удалил, затем, гдето в 2021-22 я решил её доделать под вебгл (Яндекс Игры), 
      "и сделал также и новую андроид версию. В данный момент андроид версия должна работать нормально т.к с тех пор  ничего не менял под андроид. 
      "А вот нормального вебгл билда нет т.к хотел опять доработать и обновлял юнити несколько раз подряд,в итоге решил что хватит  ней возиться лучше новую сделать ну и  много чего поломалось а старый билд заточен под яндекс",
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
    description: "Клон старой флэш игры Epic Combo, но с нубиками вместо черепашек, делал где то 2 месяца.",
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
    description: "Тоже делал с другом где то за месяц",
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
    description:
      "Слэшер. Делал в паре с другом, изначально под Android.",
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
    description: "Моя самая первая игра.",
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
    description:
      "Это первый и единственный проект где я работал на коммерческой основе, сначала в офисе потом удалённо. Мобильная стратегическая RPG. Работа с легаси кодом, логикой боя, интерфейсом, анимациями, эффектами, звуками, префабами, аниматором и отладкой.",
    preview:
      "https://play-lh.googleusercontent.com/CnrRRXrILrA7BpDTq_M1Dpucl9NtlLl-OcjMuv6NjlleMa97mjH_9ZVSqrQvimIWtw=w1024-rw",
    type: "external",
    actions: {
      external: "https://play.google.com/store/apps/details?id=com.insensearts.warsmiths"
    }
  }
];
