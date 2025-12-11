// games.js Ч рабоча¤ верси¤

export const games = [
  {
    id: "shooter",
    title: "Stickman Shooter",
    year: 2019,
    description: `
¬тора¤ игра, которую ¤ делал один и релизнул. ¬еб-верси¤ может работать нестабильно, а верси¤ дл¤ Android должна работать нормально.

ѕервую версию ¤ сделал за мес¤ц ещЄ в 2019 под Android. ѕопул¤рности она не получила, а вскоре Google Play еЄ удалил. ѕозже, где-то в 2021Ц2022, ¤ решил адаптировать еЄ под WebGL (яндекс »гры) и также обновил Android-версию.

—ейчас верси¤ дл¤ Android работает стабильно. WebGL сборка стара¤ и местами сломана, так как Unity несколько раз обновл¤лась.
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
    title: "Ќубики: Ёпическое  омбо",
    year: 2025,
    description: " лон старой флэш-игры Epic Combo, но с нубиками вместо черепашек. ƒелал примерно 2 мес¤ца.",
    preview: "Previews/NoobsCombo.webp",
    type: "external",
    actions: {
      external: "https://yandex.ru/games/app/457186?lang=ru"
    }
  },

  {
    id: "noob-road",
    title: "Ќубик, уйди с дороги",
    year: 2024,
    description: "Ќебольшой проект, делали вместе с другом около мес¤ца.",
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
    description: "—лэшер. ƒелал в паре с другом, изначально под Android.",
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
    description: "—ама¤ перва¤ игра.",
    preview: "https://trashbox.ru/apk_icons/826029_192.png",
    type: "external",
    actions: {
      external: "https://trashbox.ru/link/first-flight-android"
    }
  },

  {
    id: "warsmiths",
    title: "Warsmiths",
    year: "2020Ц2023",
    description: `
ѕервый и единственный проект, где ¤ работал на коммерческой основе. ћобильна¤ стратегическа¤ RPG. 
–аботал с легаси-кодом, боевой логикой, интерфейсом, анимаци¤ми, эффектами, звуками, префабами, аниматором и отладкой.
`,
    preview:
      "https://play-lh.googleusercontent.com/CnrRRXrILrA7BpDTq_M1Dpucl9NtlLl-OcjMuv6NjlleMa97mjH_9ZVSqrQvimIWtw=w1024-rw",
    type: "external",
    actions: {
      external: "https://play.google.com/store/apps/details?id=com.insensearts.warsmiths"
    }
  }
];
