const EGL_DATA = {
  sponsor: {
    name: "CaseHunt",
    promoCode: "EGL",
    bonus: "+30% К ДЕПОЗИТУ",
    description: "Официальный партнер Europe Gaming League. Получите +30% к пополнению баланса по промокоду EGL.",
    image: "assets/sponsor_casehunt_wide.png",
    link: "https://casehunt.gg"
  },

  banners: [
    {
      id: "b_sponsor",
      category: "sponsors",
      badge: "СПОНСОР",
      badgeColor: "bg-neutral-800 text-neutral-200 border border-neutral-700 font-medium",
      title: "CaseHunt — Промокод: EGL",
      subtitle: "+30% к пополнению баланса",
      description: "Официальный партнер лиги. Используйте промокод EGL на сайте CaseHunt для получения бонуса +30% к депозиту.",
      image: "assets/sponsor_casehunt_wide.png",
      buttonText: "Скопировать промокод",
      action: "copyPromoCode('EGL')",
      promoCode: "EGL"
    },
    {
      id: "b_playoffs_d1",
      category: "tournaments",
      badge: "ПЛЕЙ-ОФФ ДЕНЬ 1",
      badgeColor: "bg-white text-black font-bold",
      title: "Итоги 1-го дня плей-офф Main",
      subtitle: "Round of 16 (1/8 финала)",
      description: "TEAM BUD [2:0] SunKids • Big Balls Gang [2:0] Spirit no fake. Записи доступны на официальном Twitch-канале.",
      image: "assets/playoffs_day1.png",
      buttonText: "Смотреть на Twitch",
      link: "https://www.twitch.tv/egleuropegamingleague"
    },
    {
      id: "b_open_03",
      category: "tournaments",
      badge: "OPEN 03.08",
      badgeColor: "bg-neutral-800 text-white font-bold border border-neutral-700",
      title: "Результаты группового этапа: 03.08",
      subtitle: "EGL Open Group Stage",
      description: "MOLD.Game 13:1 ZERION • Spirit no fake 13:1 StSw • Fuji 1:0 Wish • Burning Clouds 1:0 Prus.",
      image: "assets/results_03_08.png",
      buttonText: "Все матчи",
      link: "matches.html"
    },
    {
      id: "b_open_04",
      category: "tournaments",
      badge: "OPEN 04.08",
      badgeColor: "bg-neutral-800 text-white font-bold border border-neutral-700",
      title: "Результаты группового этапа: 04.08",
      subtitle: "EGL Open Group Stage",
      description: "SunKids 13:3 Ascend • violence team 13:9 PLOHISHI • VV Team 13:8 SwinTeam • MUG 1:0 Rayzex.",
      image: "assets/results_04_08.png",
      buttonText: "Все матчи",
      link: "matches.html"
    },
    {
      id: "b_open_05",
      category: "tournaments",
      badge: "OPEN 05.08",
      badgeColor: "bg-neutral-800 text-white font-bold border border-neutral-700",
      title: "Результаты группового этапа: 05.08",
      subtitle: "EGL Open Group Stage",
      description: "ENGAGE 13:3 EVOLVE • TEAM BUD 1:0 ActionTeam • nice clan 1:0 Rakuzan • IBuyPivo 1:0 Outsiders.",
      image: "assets/results_05_08.png",
      buttonText: "Все матчи",
      link: "matches.html"
    },
    {
      id: "b1",
      category: "tournaments",
      badge: "ЧЕМПИОНЫ ЛИГИ",
      badgeColor: "bg-neutral-800 text-white font-bold border border-neutral-700",
      title: "ICEN — Победители EGL Season 1",
      subtitle: "Гранд-Финал: ICEN [3:1] BigBallsGang",
      description: "По итогам гранд-финала команда ICEN завоевывает титул чемпионов первого сезона Europe Gaming League.",
      image: "assets/champion_icen.png",
      buttonText: "Страница турнира",
      link: "tournament.html?id=season-1"
    },
    {
      id: "b2",
      category: "tournaments",
      badge: "MVP СЕЗОНА",
      badgeColor: "bg-neutral-800 text-white font-bold border border-neutral-700",
      title: "kypol — MVP турнира EGL Season 1",
      subtitle: "Самый сильный игрок сезона",
      description: "Феноменальная игра в клатчах и высший рейтинг плей-офф (Rating 1.48, K/D 1.55, ADR 104.2).",
      image: "assets/mvp_kypol.png",
      buttonText: "Статистика MVP",
      link: "stats.html"
    }
  ],

  tournaments: [
    {
      id: "season-1",
      name: "EGL Season 1: Championship & Open",
      tier: "Europe Gaming League (Season 1)",
      status: "Завершен",
      statusBadge: "bg-white text-black font-bold",
      dates: "03 — 20 Августа 2026",
      prize: "Кубок Чемпионов EGL + Медали",
      teamsCount: 32,
      format: "Open Group Stage (03-05.08) -> Main Playoffs (Single Elimination)",
      champion: {
        name: "ICEN",
        title: "1-е место (Чемпионы)"
      },
      finalist: {
        name: "BigBallsGang",
        title: "2-е место (Финалисты)"
      },
      thirdPlace: {
        name: "Burning Clouds",
        title: "3-е место"
      },
      fourthPlace: {
        name: "FUJI Gaming",
        title: "4-е место"
      },
      mvp: {
        name: "kypol",
        team: "ICEN",
        stats: "Rating: 1.48 | K/D: 1.55 | ADR: 104.2"
      },
      grandFinalScore: "ICEN [3:1] BigBallsGang",
      maps: [
        { name: "Mirage", score1: 6, score2: 13, winner: "BigBallsGang" },
        { name: "Cache", score1: 13, score2: 8, winner: "ICEN" },
        { name: "Ancient", score1: 13, score2: 9, winner: "ICEN" },
        { name: "Dust 2", score1: 16, score2: 12, winner: "ICEN" }
      ],
      teams: [
        { name: "ICEN", rank: "1-е место (Чемпионы)" },
        { name: "BigBallsGang", rank: "2-е место (Финалисты)" },
        { name: "Burning Clouds", rank: "3-е место" },
        { name: "FUJI Gaming", rank: "4-е место" },
        { name: "TEAM BUD", rank: "1/4 финала" },
        { name: "GG Team", rank: "1/4 финала" },
        { name: "TEAM MUG", rank: "1/4 финала" },
        { name: "violence team", rank: "1/4 финала" },
        { name: "SunKids", rank: "1/8 финала" },
        { name: "Spirit no fake", rank: "1/8 финала" },
        { name: "ENGAGE ESports", rank: "1/8 финала" },
        { name: "PAZE Team", rank: "1/8 финала" }
      ]
    },
    {
      id: "season-2",
      name: "EGL Season 2: Open Qualifiers",
      tier: "Open Qualifiers (Регистрация)",
      status: "Регистрация открыта",
      statusBadge: "bg-white text-black font-bold",
      dates: "1 — 25 Сентября 2026",
      prize: "Прямые слоты в EGL Season 2 Main",
      teamsCount: 32,
      format: "Swiss System -> Single Elimination Playoffs",
      description: "Открытые отборочные для всех команд европейского региона. Топ-4 команды получают путевки в дивизион Main Season 2.",
      rules: "Серверы 128 tick, обязательный EGL Anti-Cheat, формат матчей BO3."
    }
  ],

  matches: [
    {
      id: "m_gf",
      stageType: "playoffs",
      tier: "EGL Season 1 • Гранд-Финал",
      stage: "Гранд-Финал",
      team1: { name: "ICEN", score: 3, status: "Победитель" },
      team2: { name: "BigBallsGang", score: 1, status: "Финалист" },
      result: "3 : 1",
      date: "Финал (BO5)",
      maps: [
        { name: "Mirage", score1: 6, score2: 13, winner: "BigBallsGang" },
        { name: "Cache", score1: 13, score2: 8, winner: "ICEN" },
        { name: "Ancient", score1: 13, score2: 9, winner: "ICEN" },
        { name: "Dust 2", score1: 16, score2: 12, winner: "ICEN" }
      ],
      mvp: "kypol"
    },
    {
      id: "m_3rd",
      stageType: "playoffs",
      tier: "EGL Season 1 • Матч за 3-е место",
      stage: "Матч за 3-е место",
      team1: { name: "Burning Clouds", score: 2, status: "3-е место" },
      team2: { name: "FUJI Gaming", score: 1, status: "4-е место" },
      result: "2 : 1",
      date: "Плей-офф (BO3)",
      maps: [
        { name: "Inferno", score1: 13, score2: 9, winner: "Burning Clouds" },
        { name: "Anubis", score1: 10, score2: 13, winner: "FUJI Gaming" },
        { name: "Nuke", score1: 13, score2: 7, winner: "Burning Clouds" }
      ]
    },
    {
      id: "m_sf1",
      stageType: "playoffs",
      tier: "EGL Season 1 • Полуфинал 1",
      stage: "Полуфинал",
      team1: { name: "ICEN", score: 2 },
      team2: { name: "Burning Clouds", score: 1 },
      result: "2 : 1",
      date: "Плей-офф (BO3)",
      maps: [
        { name: "Mirage", score1: 13, score2: 8, winner: "ICEN" },
        { name: "Ancient", score1: 11, score2: 13, winner: "Burning Clouds" },
        { name: "Overpass", score1: 13, score2: 6, winner: "ICEN" }
      ]
    },
    {
      id: "m_sf2",
      stageType: "playoffs",
      tier: "EGL Season 1 • Полуфинал 2",
      stage: "Полуфинал",
      team1: { name: "Big Balls Gang", score: 2 },
      team2: { name: "FUJI Gaming", score: 0 },
      result: "2 : 0",
      date: "Плей-офф (BO3)",
      maps: [
        { name: "Dust 2", score1: 13, score2: 7, winner: "Big Balls Gang" },
        { name: "Vertigo", score1: 13, score2: 10, winner: "Big Balls Gang" }
      ]
    },
    {
      id: "m_qf1",
      stageType: "playoffs",
      tier: "EGL Season 1 • 1/4 финала",
      stage: "Quarter-finals",
      team1: { name: "ICEN", score: 2 },
      team2: { name: "GG Team", score: 0 },
      result: "2 : 0",
      date: "21:10 • BO3",
      maps: [
        { name: "Mirage", score1: 13, score2: 5, winner: "ICEN" },
        { name: "Nuke", score1: 13, score2: 4, winner: "ICEN" }
      ]
    },
    {
      id: "m_qf2",
      stageType: "playoffs",
      tier: "EGL Season 1 • 1/4 финала",
      stage: "Quarter-finals",
      team1: { name: "Burning Clouds", score: 1 },
      team2: { name: "violence team", score: 0 },
      result: "1 : 0",
      date: "18:55 • BO3",
      note: "violence team - техническое поражение (6.1.1)",
      maps: [
        { name: "Default Map", score1: 1, score2: 0, winner: "Burning Clouds" }
      ]
    },
    {
      id: "m_qf3",
      stageType: "playoffs",
      tier: "EGL Season 1 • 1/4 финала",
      stage: "Quarter-finals",
      team1: { name: "FUJI Gaming", score: 2 },
      team2: { name: "TEAM BUD", score: 0 },
      result: "2 : 0",
      date: "16:00 • BO3",
      maps: [
        { name: "Ancient", score1: 13, score2: 8, winner: "FUJI Gaming" },
        { name: "Anubis", score1: 13, score2: 9, winner: "FUJI Gaming" }
      ]
    },
    {
      id: "m_qf4",
      stageType: "playoffs",
      tier: "EGL Season 1 • 1/4 финала",
      stage: "Quarter-finals",
      team1: { name: "Big Balls Gang", score: 2 },
      team2: { name: "TEAM MUG", score: 0 },
      result: "2 : 0",
      date: "21:50 • BO3",
      maps: [
        { name: "Dust 2", score1: 13, score2: 6, winner: "Big Balls Gang" },
        { name: "Mirage", score1: 13, score2: 8, winner: "Big Balls Gang" }
      ]
    },
    {
      id: "m_r16_1",
      stageType: "playoffs",
      tier: "EGL Season 1 • 1/8 финала",
      stage: "Round of 16",
      team1: { name: "TEAM BUD", score: 2 },
      team2: { name: "SunKids", score: 0 },
      result: "2 : 0",
      date: "16:00 • День 1 (BO3)",
      maps: [
        { name: "Mirage", score1: 13, score2: 7, winner: "TEAM BUD" },
        { name: "Nuke", score1: 13, score2: 5, winner: "TEAM BUD" }
      ]
    },
    {
      id: "m_r16_2",
      stageType: "playoffs",
      tier: "EGL Season 1 • 1/8 финала",
      stage: "Round of 16",
      team1: { name: "Big Balls Gang", score: 2 },
      team2: { name: "Spirit no fake", score: 0 },
      result: "2 : 0",
      date: "18:00 • День 1 (BO3)",
      maps: [
        { name: "Dust 2", score1: 13, score2: 8, winner: "Big Balls Gang" },
        { name: "Anubis", score1: 13, score2: 6, winner: "Big Balls Gang" }
      ]
    },
    {
      id: "m_r16_3",
      stageType: "playoffs",
      tier: "EGL Season 1 • 1/8 финала",
      stage: "Round of 16",
      team1: { name: "ICEN", score: 2 },
      team2: { name: "PAZE Team", score: 0 },
      result: "2 : 0",
      date: "18:00 • BO3",
      maps: [
        { name: "Cache", score1: 13, score2: 4, winner: "ICEN" },
        { name: "Mirage", score1: 13, score2: 3, winner: "ICEN" }
      ]
    },
    {
      id: "m_r16_4",
      stageType: "playoffs",
      tier: "EGL Season 1 • 1/8 финала",
      stage: "Round of 16",
      team1: { name: "GG Team", score: 2 },
      team2: { name: "MOLD.Game", score: 0 },
      result: "2 : 0",
      date: "18:00 • BO3",
      maps: [
        { name: "Ancient", score1: 13, score2: 7, winner: "GG Team" },
        { name: "Inferno", score1: 13, score2: 9, winner: "GG Team" }
      ]
    },
    {
      id: "m_r16_5",
      stageType: "playoffs",
      tier: "EGL Season 1 • 1/8 финала",
      stage: "Round of 16",
      team1: { name: "Burning Clouds", score: 2 },
      team2: { name: "ENGAGE ESports", score: 0 },
      result: "2 : 0",
      date: "18:00 • BO3",
      maps: [
        { name: "Mirage", score1: 13, score2: 8, winner: "Burning Clouds" },
        { name: "Vertigo", score1: 13, score2: 6, winner: "Burning Clouds" }
      ]
    },
    {
      id: "m_r16_6",
      stageType: "playoffs",
      tier: "EGL Season 1 • 1/8 финала",
      stage: "Round of 16",
      team1: { name: "violence team", score: 2 },
      team2: { name: "VV Team", score: 0 },
      result: "2 : 0",
      date: "18:00 • BO3",
      maps: [
        { name: "Dust 2", score1: 13, score2: 5, winner: "violence team" },
        { name: "Nuke", score1: 13, score2: 7, winner: "violence team" }
      ]
    },
    {
      id: "m_r16_7",
      stageType: "playoffs",
      tier: "EGL Season 1 • 1/8 финала",
      stage: "Round of 16",
      team1: { name: "FUJI Gaming", score: 2 },
      team2: { name: "Team Farsten", score: 0 },
      result: "2 : 0",
      date: "18:00 • BO3",
      maps: [
        { name: "Overpass", score1: 13, score2: 6, winner: "FUJI Gaming" },
        { name: "Anubis", score1: 13, score2: 8, winner: "FUJI Gaming" }
      ]
    },
    {
      id: "m_r16_8",
      stageType: "playoffs",
      tier: "EGL Season 1 • 1/8 финала",
      stage: "Round of 16",
      team1: { name: "TEAM MUG", score: 2 },
      team2: { name: "banyari", score: 0 },
      result: "2 : 0",
      date: "18:00 • BO3",
      maps: [
        { name: "Inferno", score1: 13, score2: 9, winner: "TEAM MUG" },
        { name: "Mirage", score1: 13, score2: 7, winner: "TEAM MUG" }
      ]
    },
    {
      id: "g_03_1",
      stageType: "group_03",
      tier: "EGL Open • Групповой этап",
      stage: "03.08 (15:00)",
      team1: { name: "Team Farsten", score: 1 },
      team2: { name: "BARBOSWWTEAM", score: 0 },
      result: "1 : 0",
      date: "03.08 • 15:00",
      note: "BBWT - техническое поражение",
      maps: [{ name: "Default Map", score1: 1, score2: 0, winner: "Team Farsten" }]
    },
    {
      id: "g_03_2",
      stageType: "group_03",
      tier: "EGL Open • Групповой этап",
      stage: "03.08 (15:00)",
      team1: { name: "PAZE Team", score: 13 },
      team2: { name: "Team Speed", score: 4 },
      result: "13 : 4",
      date: "03.08 • 15:00",
      maps: [{ name: "Mirage", score1: 13, score2: 4, winner: "PAZE Team" }]
    },
    {
      id: "g_03_3",
      stageType: "group_03",
      tier: "EGL Open • Групповой этап",
      stage: "03.08 (16:00)",
      team1: { name: "Fuji Gaming", score: 1 },
      team2: { name: "Wish team", score: 0 },
      result: "1 : 0",
      date: "03.08 • 16:00",
      note: "WISH - техническое поражение",
      maps: [{ name: "Default Map", score1: 1, score2: 0, winner: "Fuji Gaming" }]
    },
    {
      id: "g_03_4",
      stageType: "group_03",
      tier: "EGL Open • Групповой этап",
      stage: "03.08 (16:00)",
      team1: { name: "Burning Clouds", score: 1 },
      team2: { name: "Prus team", score: 0 },
      result: "1 : 0",
      date: "03.08 • 16:00",
      note: "PRUS - техническое поражение",
      maps: [{ name: "Default Map", score1: 1, score2: 0, winner: "Burning Clouds" }]
    },
    {
      id: "g_03_5",
      stageType: "group_03",
      tier: "EGL Open • Групповой этап",
      stage: "03.08 (17:00)",
      team1: { name: "Spirit no fake", score: 13 },
      team2: { name: "StSw here", score: 1 },
      result: "13 : 1",
      date: "03.08 • 17:00",
      maps: [{ name: "Dust 2", score1: 13, score2: 1, winner: "Spirit no fake" }]
    },
    {
      id: "g_03_6",
      stageType: "group_03",
      tier: "EGL Open • Групповой этап",
      stage: "03.08 (17:00)",
      team1: { name: "IBuyPivo", score: 0 },
      team2: { name: "Team Outsiders", score: 0 },
      result: "Перенос",
      date: "03.08 • 17:00",
      note: "Перенос на 05.08, 18:00"
    },
    {
      id: "g_03_7",
      stageType: "group_03",
      tier: "EGL Open • Групповой этап",
      stage: "03.08 (18:00)",
      team1: { name: "MOLD.Game", score: 13 },
      team2: { name: "ZERION team", score: 1 },
      result: "13 : 1",
      date: "03.08 • 18:00",
      maps: [{ name: "Ancient", score1: 13, score2: 1, winner: "MOLD.Game" }]
    },
    {
      id: "g_03_8",
      stageType: "group_03",
      tier: "EGL Open • Групповой этап",
      stage: "03.08 (18:00)",
      team1: { name: "GG Team", score: 1 },
      team2: { name: "FTN Division", score: 0 },
      result: "1 : 0",
      date: "03.08 • 18:00",
      note: "FTN - техническое поражение",
      maps: [{ name: "Default Map", score1: 1, score2: 0, winner: "GG Team" }]
    },
    {
      id: "g_04_1",
      stageType: "group_04",
      tier: "EGL Open • Групповой этап",
      stage: "04.08 (15:00)",
      team1: { name: "banyari", score: 1 },
      team2: { name: "Outcor", score: 0 },
      result: "1 : 0",
      date: "04.08 • 15:00",
      note: "OUTC - техническое поражение",
      maps: [{ name: "Default Map", score1: 1, score2: 0, winner: "banyari" }]
    },
    {
      id: "g_04_2",
      stageType: "group_04",
      tier: "EGL Open • Групповой этап",
      stage: "04.08 (15:00)",
      team1: { name: "VV Team", score: 13 },
      team2: { name: "SwinTeam", score: 8 },
      result: "13 : 8",
      date: "04.08 • 15:00",
      maps: [{ name: "Mirage", score1: 13, score2: 8, winner: "VV Team" }]
    },
    {
      id: "g_04_3",
      stageType: "group_04",
      tier: "EGL Open • Групповой этап",
      stage: "04.08 (16:00)",
      team1: { name: "X Team", score: 1 },
      team2: { name: "blaze", score: 0 },
      result: "1 : 0",
      date: "04.08 • 16:00",
      note: "BLZ - техническое поражение",
      maps: [{ name: "Default Map", score1: 1, score2: 0, winner: "X Team" }]
    },
    {
      id: "g_04_4",
      stageType: "group_04",
      tier: "EGL Open • Групповой этап",
      stage: "04.08 (16:00)",
      team1: { name: "TEAMMUG ESPORTS", score: 1 },
      team2: { name: "Rayzex Team", score: 0 },
      result: "1 : 0",
      date: "04.08 • 16:00",
      note: "RZX - техническое поражение",
      maps: [{ name: "Default Map", score1: 1, score2: 0, winner: "TEAMMUG ESPORTS" }]
    },
    {
      id: "g_04_5",
      stageType: "group_04",
      tier: "EGL Open • Групповой этап",
      stage: "04.08 (17:00)",
      team1: { name: "Passat Empire", score: 0 },
      team2: { name: "Fone", score: 0 },
      result: "Перенос",
      date: "04.08 • 17:00",
      note: "Перенос на 06.08, 17:00"
    },
    {
      id: "g_04_6",
      stageType: "group_04",
      tier: "EGL Open • Групповой этап",
      stage: "04.08 (17:00)",
      team1: { name: "Team Saze", score: 0 },
      team2: { name: "rechovka", score: 0 },
      result: "Перенос",
      date: "04.08 • 17:00",
      note: "Перенос на 06.08, 16:00"
    },
    {
      id: "g_04_7",
      stageType: "group_04",
      tier: "EGL Open • Групповой этап",
      stage: "04.08 (18:00)",
      team1: { name: "violence team", score: 13 },
      team2: { name: "TEAM PLOHISHI", score: 9 },
      result: "13 : 9",
      date: "04.08 • 18:00",
      maps: [{ name: "Dust 2", score1: 13, score2: 9, winner: "violence team" }]
    },
    {
      id: "g_04_8",
      stageType: "group_04",
      tier: "EGL Open • Групповой этап",
      stage: "04.08 (18:00)",
      team1: { name: "SunKids", score: 13 },
      team2: { name: "Ascend", score: 3 },
      result: "13 : 3",
      date: "04.08 • 18:00",
      maps: [{ name: "Ancient", score1: 13, score2: 3, winner: "SunKids" }]
    },
    {
      id: "g_05_1",
      stageType: "group_05",
      tier: "EGL Open • Групповой этап",
      stage: "05.08 (15:00)",
      team1: { name: "Repulse Team", score: 1 },
      team2: { name: "AQUILA", score: 0 },
      result: "1 : 0",
      date: "05.08 • 15:00",
      note: "AQL - техническое поражение",
      maps: [{ name: "Default Map", score1: 1, score2: 0, winner: "Repulse Team" }]
    },
    {
      id: "g_05_2",
      stageType: "group_05",
      tier: "EGL Open • Групповой этап",
      stage: "05.08 (15:00)",
      team1: { name: "ENGAGE ESports", score: 13 },
      team2: { name: "EVOLVE", score: 3 },
      result: "13 : 3",
      date: "05.08 • 15:00",
      maps: [{ name: "Mirage", score1: 13, score2: 3, winner: "ENGAGE ESports" }]
    },
    {
      id: "g_05_3",
      stageType: "group_05",
      tier: "EGL Open • Групповой этап",
      stage: "05.08 (16:00)",
      team1: { name: "nice clan", score: 1 },
      team2: { name: "Rakuzan Prospect", score: 0 },
      result: "1 : 0",
      date: "05.08 • 16:00",
      note: "RP - техническое поражение",
      maps: [{ name: "Default Map", score1: 1, score2: 0, winner: "nice clan" }]
    },
    {
      id: "g_05_4",
      stageType: "group_05",
      tier: "EGL Open • Групповой этап",
      stage: "05.08 (16:00)",
      team1: { name: "TEAM BUD", score: 1 },
      team2: { name: "ActionTeam", score: 0 },
      result: "1 : 0",
      date: "05.08 • 16:00",
      note: "AT - техническое поражение",
      maps: [{ name: "Default Map", score1: 1, score2: 0, winner: "TEAM BUD" }]
    },
    {
      id: "g_05_5",
      stageType: "group_05",
      tier: "EGL Open • Групповой этап",
      stage: "05.08 (17:00)",
      team1: { name: "Mind Games", score: 0 },
      team2: { name: "Kings of night", score: 0 },
      result: "Перенос",
      date: "05.08 • 17:00",
      note: "Перенос на 06.08, 17:00"
    },
    {
      id: "g_05_6",
      stageType: "group_05",
      tier: "EGL Open • Групповой этап",
      stage: "05.08 (17:00)",
      team1: { name: "ONYX Team", score: 0 },
      team2: { name: "Elephant Junior", score: 0 },
      result: "Перенос",
      date: "05.08 • 17:00",
      note: "Перенос на 06.08, 16:00"
    },
    {
      id: "g_05_7",
      stageType: "group_05",
      tier: "EGL Open • Групповой этап",
      stage: "05.08 (18:00)",
      team1: { name: "Repulse academy", score: 1 },
      team2: { name: "Team LowTabers", score: 0 },
      result: "1 : 0",
      date: "05.08 • 18:00",
      note: "LT - техническое поражение",
      maps: [{ name: "Default Map", score1: 1, score2: 0, winner: "Repulse academy" }]
    },
    {
      id: "g_05_8",
      stageType: "group_05",
      tier: "EGL Open • Групповой этап",
      stage: "05.08 (18:00)",
      team1: { name: "IBuyPivo", score: 1 },
      team2: { name: "Team Outsiders", score: 0 },
      result: "1 : 0",
      date: "05.08 • 18:00",
      note: "OUT - техническое поражение",
      maps: [{ name: "Default Map", score1: 1, score2: 0, winner: "IBuyPivo" }]
    }
  ],

  rankings: [
    { rank: 1, name: "ICEN", points: 1000, status: "Чемпионы Season 1", form: ["W","W","W","W","W"], winrate: "88%" },
    { rank: 2, name: "BigBallsGang", points: 920, status: "Финалисты (2-е место)", form: ["W","W","W","W","L"], winrate: "80%" },
    { rank: 3, name: "Burning Clouds", points: 860, status: "3-е место", form: ["W","W","L","W","W"], winrate: "75%" },
    { rank: 4, name: "FUJI Gaming", points: 810, status: "4-е место", form: ["W","W","L","L","L"], winrate: "68%" },
    { rank: 5, name: "TEAM BUD", points: 740, status: "1/4 финала", form: ["W","L","W","L","L"], winrate: "60%" },
    { rank: 6, name: "GG Team", points: 710, status: "1/4 финала", form: ["W","L","W","L","L"], winrate: "58%" },
    { rank: 7, name: "TEAM MUG", points: 680, status: "1/4 финала", form: ["W","L","L","W","L"], winrate: "55%" },
    { rank: 8, name: "ENGAGE ESports", points: 640, status: "1/8 финала", form: ["W","L","L","L","L"], winrate: "50%" }
  ],

  stats: [
    { rank: 1, player: "kypol", team: "ICEN", role: "MVP Лиги", rating: 1.48, kd: 1.55, adr: 104.2, hs: "62%", maps: 12 },
    { rank: 2, player: "BBG_Carry", team: "BigBallsGang", role: "Rifler", rating: 1.34, kd: 1.38, adr: 92.4, hs: "56%", maps: 12 },
    { rank: 3, player: "CloudMaster", team: "Burning Clouds", role: "AWPer", rating: 1.28, kd: 1.30, adr: 89.1, hs: "58%", maps: 10 },
    { rank: 4, player: "ICEN_Cap", team: "ICEN", role: "IGL", rating: 1.22, kd: 1.24, adr: 88.5, hs: "51%", maps: 12 },
    { rank: 5, player: "FUJI_Ace", team: "FUJI Gaming", role: "Entry", rating: 1.18, kd: 1.15, adr: 82.0, hs: "49%", maps: 10 }
  ],

  forum: [
    {
      id: 1,
      category: "Турниры",
      title: "Поздравления команде ICEN с чемпионством в первом сезоне EGL!",
      author: "Admin",
      time: "10 мин назад",
      replies: 154,
      views: 1240
    },
    {
      id: 2,
      category: "Обсуждения",
      title: "Обсуждение гранд-финала: разбор карт Mirage, Cache, Ancient, Dust 2",
      author: "EGL_Analyst",
      time: "30 мин назад",
      replies: 62,
      views: 680
    },
    {
      id: 3,
      category: "Поиск игроков",
      title: "[LFT] Набор в состав на открытые квалификации EGL Season 2",
      author: "Captain",
      time: "2 часа назад",
      replies: 19,
      views: 310
    }
  ]
};
