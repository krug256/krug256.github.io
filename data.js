export const siteData = {
  profile: {
    title: "Holy Stick Games",
    subtitle: { en: "Indie Game Development", ru: "Инди-разработка игр" },
    year: 2026,
    socials: [
      { name: "Google Play", url: "https://play.google.com/store/apps/developer?id=HolyStick+Games" },
      { name: { en: "Yandex Games", ru: "Яндекс Игры" }, url: "https://yandex.ru/games/developer/57662" }
    ],
    contacts: [
      { label: { en: "Developer", ru: "Разработчик" }, value: { en: "Ilya Kruglov", ru: "Илья Круглов" } },
      { label: "Email", value: "<a href='mailto:crugloww92@gmail.com' style='color:#6cf; text-decoration:none;'>crugloww92@gmail.com</a>" }
    ]
  },
  // UI labels for navigation, sections, and buttons
  ui: {
    tabs: {
      solo: { en: "My Games", ru: "Мои игры" },
      coop: { en: "Collaborations", ru: "Совместные проекты" },
      commercial: { en: "Commercial Experience", ru: "Коммерческий опыт" },
      contacts: { en: "Contacts", ru: "Контакты" }
    },
    sections: {
      currentProjects: { en: "Current Projects", ru: "Текущие проекты" },
      archive: { en: "Archive (Old Games)", ru: "Архив (Старые игры)" }
    },
    buttons: {
      playInBrowser: { en: "Play in Browser", ru: "Играть в браузере" },
      link: { en: "Link", ru: "Ссылка" },
      downloadApk: { en: "Download APK", ru: "Скачать APK" },
      details: { en: "Details", ru: "Подробнее о разработке" }
    }
  },
  games: [
    {
      id: "noobs-combo",
      title: { en: "Noobs: Epic Combo", ru: "Нубики: Эпическое Комбо" },
      year: 2025,
      category: "solo-new",
      shortDesc: {
        en: "A clone of the old Flash game Epic Combo, but with noobs instead of turtles.",
        ru: "Клон старой флэш-игры Epic Combo, но с нубиками вместо черепашек."
      },
      fullDesc: {
        en: "Took about 2 months to make. The main focus was on performance with a large number of objects.",
        ru: "Делал примерно 2 месяца. Основной фокус был на производительности при большом количестве объектов."
      },
      preview: "Previews/NoobsCombo.webp",
      type: "external",
      actions: {
        external: "https://yandex.ru/games/app/457186?lang=ru",
        gp: "https://play.google.com/store/apps/details?id=com.HolyStickGames.CrazyCombo"
      }
    },
    {
      id: "cars-vs-zombies",
      title: { en: "Cars vs Zombies", ru: "Тачки против зомби" },
      year: 2026,
      category: "solo-new",
      shortDesc: {
        en: "3D action game in the style of Earn to Die.",
        ru: "3D-экшен в духе Earn to Die."
      },
      fullDesc: {
        en: "Development took 3 months instead of the planned one. To meet the time-box, some ideas were cut. The project was released as-is to avoid production hell and focus on new tasks.",
        ru: "Разработка заняла 3 месяца вместо запланированного одного. Для соблюдения таймбоксинга часть задумок пошла под нож. Проект зарелижен в текущем виде, чтобы избежать производственного ада и сфокусироваться на новых задачах."
      },
      preview: "Previews/CarsVsZombies.png",
      type: "external",
      actions: {
        external: "https://yandex.ru/games/app/tachki-protiv-zombi-489629?lang=ru",
        gp: "https://play.google.com/store/apps/details?id=com.HolyStickGames.CarsVSZombies"
      }
    },
    {
      id: "shooter",
      title: "Stickman Shooter",
      year: 2019,
      category: "solo-old",
      shortDesc: {
        en: "The second game I made solo and released.",
        ru: "Вторая игра, которую я делал один и релизнул."
      },
      fullDesc: {
        en: "I made the first version in a month back in 2019 for Android. It didn't gain popularity, and soon Google Play removed it. Later, around 2021–2022, I decided to adapt it for WebGL (Yandex Games) and also updated the Android version.\n\nCurrently the Android version works stable. The WebGL build is old and partially broken, since Unity has been updated several times.",
        ru: "Первую версию я сделал за месяц ещё в 2019 под Android. Популярности она не получила, а вскоре Google Play её удалил. Позже, где-то в 2021–2022, я решил адаптировать её под WebGL (Яндекс Игры) и также обновил Android-версию.\n\nСейчас версия для Android работает стабильно. WebGL сборка старая и местами сломана, так как Unity несколько раз обновлялась."
      },
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
      shortDesc: {
        en: "My very first game.",
        ru: "Самая первая игра."
      },
      fullDesc: "",
      preview: "https://trashbox.ru/apk_icons/826029_192.png",
      type: "external",
      actions: {
        external: "https://trashbox.ru/link/first-flight-android"
      }
    },
    {
      id: "noob-road",
      title: { en: "Noob, Get Off the Road", ru: "Нубик, уйди с дороги" },
      year: 2024,
      category: "coop",
      shortDesc: {
        en: "A small project made together with a friend.",
        ru: "Небольшой проект, делали вместе с другом."
      },
      fullDesc: {
        en: "Development took about a month. Joint experience working on logic and balance.",
        ru: "Разработка заняла около месяца. Совместный опыт работы над логикой и балансом."
      },
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
      shortDesc: {
        en: "A slasher, originally for Android.",
        ru: "Слэшер, изначально под Android."
      },
      fullDesc: {
        en: "Made in partnership with a friend (<a href='https://yandex.com/games/developer/39390' target='_blank' style='color:#6cf; text-decoration:none;'>Woger Games</a>). Honestly the only truly successful game. Over 3 million installs on Google Play, but unfortunately that account was deleted.",
        ru: "Делал в паре с другом (<a href='https://yandex.com/games/developer/39390' target='_blank' style='color:#6cf; text-decoration:none;'>Woger Games</a>). По правде единственная реально успешная игра. На Гулплей больше 3 млн установок, но, к сожалению тот аккаунт был удален."
      },
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
      shortDesc: {
        en: "A mobile strategic RPG.",
        ru: "Мобильная стратегическая RPG."
      },
      fullDesc: {
        en: "The first and only project where I worked commercially. Worked with legacy code, battle logic, UI, animations, effects, sounds, prefabs, animator, and debugging.",
        ru: "Первый и единственный проект, где я работал на коммерческой основе. Работал с легаси-кодом, боевой логикой, интерфейсом, анимациями, эффектами, звуками, префабами, аниматором и отладкой."
      },
      preview: "https://play-lh.googleusercontent.com/CnrRRXrILrA7BpDTq_M1Dpucl9NtlLl-OcjMuv6NjlleMa97mjH_9ZVSqrQvimIWtw=w1024-rw",
      type: "external",
      actions: {
        external: "https://play.google.com/store/apps/details?id=com.insensearts.warsmiths"
      }
    }
  ]
};
