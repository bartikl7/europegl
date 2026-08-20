let currentBannerFilter = 'all';
let currentMatchFilter = 'all';

document.addEventListener('DOMContentLoaded', () => {
  initCommon();
  initPageSpecific();
});

function initCommon() {
  updateHeaderClock();
  setInterval(updateHeaderClock, 1000);

  if (window.lucide) {
    lucide.createIcons();
  }
}

function updateHeaderClock() {
  const clockEl = document.getElementById('headerTime');
  if (clockEl) {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    clockEl.textContent = `${hours}:${minutes} CET`;
  }
}

function initPageSpecific() {
  if (document.getElementById('tournamentDetailContainer')) {
    renderTournamentDetail();
  }

  if (document.getElementById('tournamentsListContainer')) {
    renderTournamentsListPage();
  }

  if (document.getElementById('bannersGrid')) {
    renderBannersGrid('all');
  }

  if (document.getElementById('fullMatchesContainer')) {
    renderFullMatchesPage();
  }

  if (document.getElementById('fullRankingsTable')) {
    renderRankingsPage();
  }

  if (document.getElementById('statsTableBody')) {
    renderStatsPage();
  }

  if (document.getElementById('forumThreadsContainer')) {
    renderForumThreads();
  }

  if (window.lucide) {
    lucide.createIcons();
  }
}

function openMatchModal(matchId) {
  const match = EGL_DATA.matches.find(m => m.id === matchId);
  if (!match) return;

  let modalEl = document.getElementById('eglMatchModal');
  if (!modalEl) {
    modalEl = document.createElement('div');
    modalEl.id = 'eglMatchModal';
    modalEl.className = 'fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4';
    document.body.appendChild(modalEl);
  }

  const isT1Winner = match.team1.score > match.team2.score;
  const isT2Winner = match.team2.score > match.team1.score;

  modalEl.innerHTML = `
    <div class="egl-modal-card max-w-md w-full p-6 text-white relative shadow-2xl">
      <button onclick="closeMatchModal()" class="absolute top-4 right-4 text-neutral-400 hover:text-white p-1">
        <i data-lucide="x" class="w-5 h-5"></i>
      </button>

      <div class="text-center pb-4 border-b border-neutral-800">
        <div class="text-[11px] font-bold text-neutral-400 uppercase tracking-wider">${match.tier} • ${match.stage}</div>
        
        <div class="flex items-center justify-between mt-4 px-2">
          <div class="flex-1 text-right">
            <div class="font-display font-extrabold text-base sm:text-lg ${isT1Winner ? 'text-white' : 'text-neutral-400'}">${match.team1.name}</div>
            ${match.team1.status ? `<div class="text-[10px] text-neutral-400">${match.team1.status}</div>` : ''}
          </div>

          <div class="px-4 py-1.5 bg-neutral-900 border border-neutral-700 rounded-xl mx-3 text-center min-w-[70px]">
            <div class="font-mono font-extrabold text-lg">
              <span class="${isT1Winner ? 'text-emerald-400' : 'text-red-400'}">${match.team1.score}</span>
              <span class="text-neutral-500">:</span>
              <span class="${isT2Winner ? 'text-emerald-400' : 'text-red-400'}">${match.team2.score}</span>
            </div>
          </div>

          <div class="flex-1 text-left">
            <div class="font-display font-extrabold text-base sm:text-lg ${isT2Winner ? 'text-white' : 'text-neutral-400'}">${match.team2.name}</div>
            ${match.team2.status ? `<div class="text-[10px] text-neutral-400">${match.team2.status}</div>` : ''}
          </div>
        </div>

        ${match.note ? `<div class="mt-2 text-xs text-red-400 font-semibold bg-red-950/40 py-1 px-2 rounded border border-red-900/50 inline-block">${match.note}</div>` : ''}
      </div>

      ${match.maps && match.maps.length > 0 ? `
        <div class="py-4 border-b border-neutral-800">
          <div class="text-xs font-bold text-neutral-400 uppercase tracking-wider mb-2.5 text-center">Карты матча (Maps)</div>
          <div class="space-y-2">
            ${match.maps.map(m => `
              <div class="bg-neutral-900/80 border border-neutral-800 p-2.5 rounded-xl flex items-center justify-between text-xs">
                <span class="font-mono font-bold w-12 text-right ${m.score1 > m.score2 ? 'text-emerald-400' : 'text-neutral-400'}">${m.score1}</span>
                <span class="font-semibold text-white px-3 flex-grow text-center">${m.name}</span>
                <span class="font-mono font-bold w-12 text-left ${m.score2 > m.score1 ? 'text-emerald-400' : 'text-neutral-400'}">${m.score2}</span>
              </div>
            `).join('')}
          </div>
        </div>
      ` : ''}

      <div class="pt-4 flex items-center justify-between text-xs text-neutral-400">
        <div>
          <span>Формат: <b>${match.date || 'BO3'}</b></span>
          ${match.mvp ? ` • MVP: <b class="text-white">${match.mvp}</b>` : ''}
        </div>
        <a href="https://www.twitch.tv/egleuropegamingleague" target="_blank" class="px-3 py-1.5 rounded-lg bg-neutral-800 hover:bg-neutral-700 text-white font-semibold transition flex items-center space-x-1">
          <i data-lucide="tv" class="w-3.5 h-3.5 text-purple-400"></i>
          <span>Twitch</span>
        </a>
      </div>
    </div>
  `;

  modalEl.classList.remove('hidden');
  if (window.lucide) lucide.createIcons();
}

function closeMatchModal() {
  const modalEl = document.getElementById('eglMatchModal');
  if (modalEl) modalEl.classList.add('hidden');
}

function getEGLBracketHTML() {
  return `
    <div class="space-y-6">
      <div class="egl-bracket-wrapper">
        <div class="egl-bracket-header" onclick="toggleBracketSection('groupStageBody', 'groupStageArrow')">
          <div class="flex items-center space-x-2">
            <span class="font-display font-bold text-sm sm:text-base text-white tracking-wide">Group Stage (Групповой этап EGL Open)</span>
          </div>
          <i data-lucide="chevron-up" id="groupStageArrow" class="w-4 h-4 text-neutral-400 transition-transform duration-200"></i>
        </div>

        <div id="groupStageBody" class="p-4 sm:p-6">
          <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div class="bg-[#181818] border border-neutral-800 rounded-xl p-3.5 space-y-2">
              <div class="text-xs font-bold text-white pb-2 border-b border-neutral-800 flex justify-between">
                <span>03.08 • День 1</span>
                <span class="text-neutral-400">8 матчей</span>
              </div>
              <div class="space-y-1.5 text-xs">
                ${EGL_DATA.matches.filter(m => m.stageType === 'group_03').map(m => `
                  <div onclick="openMatchModal('${m.id}')" class="bg-[#121212] hover:border-neutral-600 border border-neutral-800 p-2 rounded-lg flex items-center justify-between cursor-pointer transition">
                    <div class="truncate max-w-[130px]">
                      <div class="font-bold ${m.team1.score > m.team2.score ? 'text-white' : 'text-neutral-400'}">${m.team1.name}</div>
                      <div class="${m.team2.score > m.team1.score ? 'text-white font-bold' : 'text-neutral-500'}">${m.team2.name}</div>
                    </div>
                    <div class="text-right font-mono font-bold text-xs ${m.team1.score > m.team2.score ? 'text-emerald-400' : 'text-neutral-400'}">
                      ${m.result}
                    </div>
                  </div>
                `).join('')}
              </div>
            </div>

            <div class="bg-[#181818] border border-neutral-800 rounded-xl p-3.5 space-y-2">
              <div class="text-xs font-bold text-white pb-2 border-b border-neutral-800 flex justify-between">
                <span>04.08 • День 2</span>
                <span class="text-neutral-400">8 матчей</span>
              </div>
              <div class="space-y-1.5 text-xs">
                ${EGL_DATA.matches.filter(m => m.stageType === 'group_04').map(m => `
                  <div onclick="openMatchModal('${m.id}')" class="bg-[#121212] hover:border-neutral-600 border border-neutral-800 p-2 rounded-lg flex items-center justify-between cursor-pointer transition">
                    <div class="truncate max-w-[130px]">
                      <div class="font-bold ${m.team1.score > m.team2.score ? 'text-white' : 'text-neutral-400'}">${m.team1.name}</div>
                      <div class="${m.team2.score > m.team1.score ? 'text-white font-bold' : 'text-neutral-500'}">${m.team2.name}</div>
                    </div>
                    <div class="text-right font-mono font-bold text-xs ${m.team1.score > m.team2.score ? 'text-emerald-400' : 'text-neutral-400'}">
                      ${m.result}
                    </div>
                  </div>
                `).join('')}
              </div>
            </div>

            <div class="bg-[#181818] border border-neutral-800 rounded-xl p-3.5 space-y-2">
              <div class="text-xs font-bold text-white pb-2 border-b border-neutral-800 flex justify-between">
                <span>05.08 • День 3</span>
                <span class="text-neutral-400">8 матчей</span>
              </div>
              <div class="space-y-1.5 text-xs">
                ${EGL_DATA.matches.filter(m => m.stageType === 'group_05').map(m => `
                  <div onclick="openMatchModal('${m.id}')" class="bg-[#121212] hover:border-neutral-600 border border-neutral-800 p-2 rounded-lg flex items-center justify-between cursor-pointer transition">
                    <div class="truncate max-w-[130px]">
                      <div class="font-bold ${m.team1.score > m.team2.score ? 'text-white' : 'text-neutral-400'}">${m.team1.name}</div>
                      <div class="${m.team2.score > m.team1.score ? 'text-white font-bold' : 'text-neutral-500'}">${m.team2.name}</div>
                    </div>
                    <div class="text-right font-mono font-bold text-xs ${m.team1.score > m.team2.score ? 'text-emerald-400' : 'text-neutral-400'}">
                      ${m.result}
                    </div>
                  </div>
                `).join('')}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="egl-bracket-wrapper">
        <div class="egl-bracket-header" onclick="toggleBracketSection('mainBracketBody', 'mainBracketArrow')">
          <div class="flex items-center space-x-2">
            <span class="font-display font-bold text-sm sm:text-base text-white tracking-wide">Playoffs — Single Elimination Bracket</span>
          </div>
          <i data-lucide="chevron-up" id="mainBracketArrow" class="w-4 h-4 text-neutral-400 transition-transform duration-200"></i>
        </div>

        <div id="mainBracketBody" class="p-4 sm:p-6 overflow-x-auto">
          <div class="min-w-[860px] grid grid-cols-4 gap-4 relative">
            <div class="space-y-3.5">
              <div class="bracket-col-header">Round of 16</div>
              
              <div onclick="openMatchModal('m_r16_3')" class="bracket-match-box">
                <div class="bracket-match-meta"><span>18:00</span><span>BO3</span></div>
                <div class="bracket-team-row winner"><div class="indicator-bar"></div><span class="truncate max-w-[110px]">ICEN</span><span class="bracket-score-badge">2</span></div>
                <div class="bracket-team-row loser"><div class="indicator-bar"></div><span class="truncate max-w-[110px]">PAZE Team</span><span class="bracket-score-badge">0</span></div>
              </div>

              <div onclick="openMatchModal('m_r16_4')" class="bracket-match-box">
                <div class="bracket-match-meta"><span>18:00</span><span>BO3</span></div>
                <div class="bracket-team-row winner"><div class="indicator-bar"></div><span class="truncate max-w-[110px]">GG Team</span><span class="bracket-score-badge">2</span></div>
                <div class="bracket-team-row loser"><div class="indicator-bar"></div><span class="truncate max-w-[110px]">MOLD.Game</span><span class="bracket-score-badge">0</span></div>
              </div>

              <div onclick="openMatchModal('m_r16_5')" class="bracket-match-box">
                <div class="bracket-match-meta"><span>18:00</span><span>BO3</span></div>
                <div class="bracket-team-row winner"><div class="indicator-bar"></div><span class="truncate max-w-[110px]">Burning Clouds</span><span class="bracket-score-badge">2</span></div>
                <div class="bracket-team-row loser"><div class="indicator-bar"></div><span class="truncate max-w-[110px]">ENGAGE ESports</span><span class="bracket-score-badge">0</span></div>
              </div>

              <div onclick="openMatchModal('m_r16_6')" class="bracket-match-box">
                <div class="bracket-match-meta"><span>18:00</span><span>BO3</span></div>
                <div class="bracket-team-row winner"><div class="indicator-bar"></div><span class="truncate max-w-[110px]">violence team</span><span class="bracket-score-badge">2</span></div>
                <div class="bracket-team-row loser"><div class="indicator-bar"></div><span class="truncate max-w-[110px]">VV Team</span><span class="bracket-score-badge">0</span></div>
              </div>

              <div onclick="openMatchModal('m_r16_7')" class="bracket-match-box">
                <div class="bracket-match-meta"><span>18:00</span><span>BO3</span></div>
                <div class="bracket-team-row winner"><div class="indicator-bar"></div><span class="truncate max-w-[110px]">FUJI Gaming</span><span class="bracket-score-badge">2</span></div>
                <div class="bracket-team-row loser"><div class="indicator-bar"></div><span class="truncate max-w-[110px]">Team Farsten</span><span class="bracket-score-badge">0</span></div>
              </div>

              <div onclick="openMatchModal('m_r16_1')" class="bracket-match-box">
                <div class="bracket-match-meta"><span>16:00</span><span>BO3</span></div>
                <div class="bracket-team-row winner"><div class="indicator-bar"></div><span class="truncate max-w-[110px]">TEAM BUD</span><span class="bracket-score-badge">2</span></div>
                <div class="bracket-team-row loser"><div class="indicator-bar"></div><span class="truncate max-w-[110px]">SunKids</span><span class="bracket-score-badge">0</span></div>
              </div>

              <div onclick="openMatchModal('m_r16_2')" class="bracket-match-box">
                <div class="bracket-match-meta"><span>18:00</span><span>BO3</span></div>
                <div class="bracket-team-row winner"><div class="indicator-bar"></div><span class="truncate max-w-[110px]">Big Balls Gang</span><span class="bracket-score-badge">2</span></div>
                <div class="bracket-team-row loser"><div class="indicator-bar"></div><span class="truncate max-w-[110px]">Spirit no fake</span><span class="bracket-score-badge">0</span></div>
              </div>

              <div onclick="openMatchModal('m_r16_8')" class="bracket-match-box">
                <div class="bracket-match-meta"><span>18:00</span><span>BO3</span></div>
                <div class="bracket-team-row winner"><div class="indicator-bar"></div><span class="truncate max-w-[110px]">TEAM MUG</span><span class="bracket-score-badge">2</span></div>
                <div class="bracket-team-row loser"><div class="indicator-bar"></div><span class="truncate max-w-[110px]">banyari</span><span class="bracket-score-badge">0</span></div>
              </div>
            </div>

            <div class="flex flex-col justify-around">
              <div class="bracket-col-header">Quarter-finals</div>
              
              <div onclick="openMatchModal('m_qf1')" class="bracket-match-box my-2">
                <div class="bracket-match-meta"><span>21:10</span><span>BO3</span></div>
                <div class="bracket-team-row winner"><div class="indicator-bar"></div><span class="truncate max-w-[110px]">ICEN</span><span class="bracket-score-badge">2</span></div>
                <div class="bracket-team-row loser"><div class="indicator-bar"></div><span class="truncate max-w-[110px]">GG Team</span><span class="bracket-score-badge">0</span></div>
              </div>

              <div onclick="openMatchModal('m_qf2')" class="bracket-match-box my-2">
                <div class="bracket-match-meta"><span>18:55</span><span>BO3</span></div>
                <div class="bracket-team-row winner"><div class="indicator-bar"></div><span class="truncate max-w-[110px]">Burning Clouds</span><span class="bracket-score-badge">1</span></div>
                <div class="bracket-team-row loser"><div class="indicator-bar"></div><span class="truncate max-w-[110px]">violence team</span><span class="bracket-score-badge text-[10px]">0(ТП)</span></div>
              </div>

              <div onclick="openMatchModal('m_qf3')" class="bracket-match-box my-2">
                <div class="bracket-match-meta"><span>16:00</span><span>BO3</span></div>
                <div class="bracket-team-row winner"><div class="indicator-bar"></div><span class="truncate max-w-[110px]">FUJI Gaming</span><span class="bracket-score-badge">2</span></div>
                <div class="bracket-team-row loser"><div class="indicator-bar"></div><span class="truncate max-w-[110px]">TEAM BUD</span><span class="bracket-score-badge">0</span></div>
              </div>

              <div onclick="openMatchModal('m_qf4')" class="bracket-match-box my-2">
                <div class="bracket-match-meta"><span>21:50</span><span>BO3</span></div>
                <div class="bracket-team-row winner"><div class="indicator-bar"></div><span class="truncate max-w-[110px]">Big Balls Gang</span><span class="bracket-score-badge">2</span></div>
                <div class="bracket-team-row loser"><div class="indicator-bar"></div><span class="truncate max-w-[110px]">TEAM MUG</span><span class="bracket-score-badge">0</span></div>
              </div>
            </div>

            <div class="flex flex-col justify-around">
              <div class="bracket-col-header">Semi-finals</div>
              
              <div onclick="openMatchModal('m_sf1')" class="bracket-match-box my-6">
                <div class="bracket-match-meta"><span>19:00</span><span>BO3</span></div>
                <div class="bracket-team-row winner"><div class="indicator-bar"></div><span class="truncate max-w-[110px]">ICEN</span><span class="bracket-score-badge">2</span></div>
                <div class="bracket-team-row loser"><div class="indicator-bar"></div><span class="truncate max-w-[110px]">Burning Clouds</span><span class="bracket-score-badge">1</span></div>
              </div>

              <div onclick="openMatchModal('m_sf2')" class="bracket-match-box my-6">
                <div class="bracket-match-meta"><span>21:55</span><span>BO3</span></div>
                <div class="bracket-team-row winner"><div class="indicator-bar"></div><span class="truncate max-w-[110px]">Big Balls Gang</span><span class="bracket-score-badge">2</span></div>
                <div class="bracket-team-row loser"><div class="indicator-bar"></div><span class="truncate max-w-[110px]">FUJI Gaming</span><span class="bracket-score-badge">0</span></div>
              </div>
            </div>

            <div class="flex flex-col justify-center">
              <div class="bracket-col-header">Grand final</div>
              
              <div onclick="openMatchModal('m_gf')" class="bracket-match-box border-2 border-neutral-400 shadow-2xl">
                <div class="bracket-match-meta bg-neutral-900"><span class="text-white font-bold">16:30 Grand Final</span><span>BO5</span></div>
                <div class="bracket-team-row winner bg-neutral-800/60 py-2"><div class="indicator-bar"></div><span class="font-extrabold text-white text-sm">ICEN</span><span class="bracket-score-badge text-base text-emerald-400">3</span></div>
                <div class="bracket-team-row loser py-2"><div class="indicator-bar"></div><span class="font-semibold text-sm text-neutral-400">BigBallsGang</span><span class="bracket-score-badge text-base text-red-400">1</span></div>
                <div class="p-2 bg-[#121212] text-[10px] text-neutral-400 border-t border-neutral-800 text-center font-mono">
                  6:13 • 13:8 • 13:9 • 16:12
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="egl-bracket-wrapper">
        <div class="egl-bracket-header" onclick="toggleBracketSection('deciderBracketBody', 'deciderBracketArrow')">
          <div class="flex items-center space-x-2">
            <span class="font-display font-bold text-sm sm:text-base text-white tracking-wide">3rd Place Decider Match</span>
          </div>
          <i data-lucide="chevron-up" id="deciderBracketArrow" class="w-4 h-4 text-neutral-400 transition-transform duration-200"></i>
        </div>

        <div id="deciderBracketBody" class="p-4 sm:p-6">
          <div class="max-w-xs">
            <div class="bracket-col-header text-left pb-2">Tiebreaker</div>
            <div onclick="openMatchModal('m_3rd')" class="bracket-match-box">
              <div class="bracket-match-meta"><span>13:00 Decider</span><span>BO3</span></div>
              <div class="bracket-team-row winner"><div class="indicator-bar"></div><span>Burning Clouds</span><span class="bracket-score-badge">2</span></div>
              <div class="bracket-team-row loser"><div class="indicator-bar"></div><span>FUJI Gaming</span><span class="bracket-score-badge">1</span></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
}

function toggleBracketSection(bodyId, arrowId) {
  const body = document.getElementById(bodyId);
  const arrow = document.getElementById(arrowId);
  if (!body) return;

  if (body.classList.contains('hidden')) {
    body.classList.remove('hidden');
    if (arrow) arrow.style.transform = 'rotate(0deg)';
  } else {
    body.classList.add('hidden');
    if (arrow) arrow.style.transform = 'rotate(180deg)';
  }
}

function renderTournamentDetail() {
  const container = document.getElementById('tournamentDetailContainer');
  if (!container) return;

  const urlParams = new URLSearchParams(window.location.search);
  const tournamentId = urlParams.get('id') || 'season-1';

  const t = EGL_DATA.tournaments.find(item => item.id === tournamentId) || EGL_DATA.tournaments[0];

  if (!t) {
    container.innerHTML = `<div class="p-8 text-center text-neutral-400">Турнир не найден</div>`;
    return;
  }

  let tournamentSpecificContent = '';
  if (t.id === 'season-1') {
    tournamentSpecificContent = `
      <div class="mb-8">
        ${getEGLBracketHTML()}
      </div>
    `;
  } else if (t.id === 'season-2') {
    tournamentSpecificContent = `
      <div class="bg-[#141414] border border-neutral-800 rounded-2xl p-6 sm:p-8 mb-8 shadow-xl">
        <div class="max-w-2xl space-y-4">
          <div class="inline-block bg-white text-black text-xs font-bold px-2.5 py-1 rounded uppercase">Регистрация участников</div>
          <h3 class="font-display font-bold text-2xl text-white">Подача заявки на EGL Season 2 Open Qualifiers</h3>
          <p class="text-xs text-neutral-400 leading-relaxed">
            Открытые квалификации проводятся по швейцарской системе (Swiss System BO3). Топ-4 команды получают прямые квоты в Main Division Season 2.
          </p>
          <div class="bg-[#1a1a1a] p-4 rounded-xl border border-neutral-800 text-xs space-y-2 text-neutral-300">
            <div class="flex items-center space-x-2"><i data-lucide="check" class="w-4 h-4 text-emerald-400"></i><span>Серверы 128 Tickrate (Германия, Финляндия)</span></div>
            <div class="flex items-center space-x-2"><i data-lucide="check" class="w-4 h-4 text-emerald-400"></i><span>Обязательный клиент EGL Anti-Cheat</span></div>
            <div class="flex items-center space-x-2"><i data-lucide="check" class="w-4 h-4 text-emerald-400"></i><span>Трансляция решающих матчей на официальном Twitch EGL</span></div>
          </div>
          <button onclick="openAuthModal()" class="px-6 py-3 bg-white hover:bg-neutral-200 text-black font-bold text-xs rounded-xl transition">
            Зарегистрировать команду через Steam
          </button>
        </div>
      </div>
    `;
  }

  container.innerHTML = `
    <div class="bg-[#141414] border border-neutral-800 rounded-2xl p-6 sm:p-8 mb-6 shadow-xl">
      <div class="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-neutral-800">
        <div class="flex items-center space-x-2">
          <span class="${t.statusBadge || 'bg-white text-black font-bold'} text-xs px-2.5 py-1 rounded uppercase tracking-wider">
            ${t.status}
          </span>
          <span class="text-xs text-neutral-400">• ${t.tier}</span>
        </div>
        <div class="text-xs font-bold text-neutral-200">
          🏆 Награда: ${t.prize}
        </div>
      </div>

      <div class="py-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <div class="space-y-2 text-center md:text-left">
          <div class="text-xs font-mono uppercase text-neutral-500">ID Турнира: #${t.id}</div>
          <h1 class="font-display font-bold text-3xl sm:text-4xl text-white leading-tight">${t.name}</h1>
          <p class="text-xs sm:text-sm text-neutral-400 max-w-2xl mt-2">
            ${t.description || 'Официальный турнир Europe Gaming League по Counter-Strike 2.'}
          </p>
          <div class="pt-3 flex flex-wrap gap-4 text-xs text-neutral-300 justify-center md:justify-start">
            <span class="flex items-center space-x-1.5"><i data-lucide="calendar" class="w-4 h-4 text-neutral-400"></i><span>${t.dates}</span></span>
            <span class="flex items-center space-x-1.5"><i data-lucide="users" class="w-4 h-4 text-neutral-400"></i><span>${t.teamsCount || 16} Команд</span></span>
            <span class="flex items-center space-x-1.5"><i data-lucide="layers" class="w-4 h-4 text-neutral-400"></i><span>${t.format}</span></span>
          </div>
        </div>

        ${t.champion ? `
          <div class="bg-[#1a1a1a] border border-neutral-700 p-4 rounded-xl text-center flex-shrink-0 w-48 shadow-lg">
            <div class="text-[10px] text-neutral-400 font-bold uppercase">Победитель турнира</div>
            <div class="font-display font-bold text-xl text-white mt-1">${t.champion.name}</div>
            ${t.mvp ? `<div class="text-[11px] text-neutral-300 mt-2 pt-2 border-t border-neutral-800">MVP: <b>${t.mvp.name}</b></div>` : ''}
          </div>
        ` : ''}
      </div>
    </div>

    ${tournamentSpecificContent}

    ${t.teams ? `
      <div class="bg-[#141414] border border-neutral-800 rounded-2xl p-6 shadow-xl">
        <div class="flex items-center justify-between pb-3 border-b border-neutral-800 mb-4">
          <h3 class="font-display font-bold text-lg text-white">Команды участники (${t.teams.length})</h3>
          <span class="text-xs text-neutral-400">Итоговые позиции</span>
        </div>
        <div class="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
          ${t.teams.map(tm => `
            <div class="p-3 bg-[#1a1a1a] border border-neutral-800 rounded-xl flex items-center justify-between">
              <span class="font-bold text-white">${tm.name}</span>
              <span class="text-[10px] text-neutral-400">${tm.rank}</span>
            </div>
          `).join('')}
        </div>
      </div>
    ` : ''}
  `;

  if (window.lucide) lucide.createIcons();
}

function renderTournamentsListPage() {
  const container = document.getElementById('tournamentsListContainer');
  if (!container) return;

  container.innerHTML = EGL_DATA.tournaments.map(t => `
    <div class="bg-[#141414] border border-neutral-800 hover:border-neutral-700 rounded-2xl p-6 shadow-xl transition flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
      <div class="space-y-2">
        <div class="flex items-center space-x-2">
          <span class="${t.statusBadge || 'bg-white text-black font-bold'} text-[10px] px-2.5 py-0.5 rounded uppercase tracking-wider">
            ${t.status}
          </span>
          <span class="text-xs text-neutral-400">• ${t.tier}</span>
          <span class="text-xs text-neutral-500 font-mono">ID: #${t.id}</span>
        </div>
        <h3 class="font-display font-bold text-2xl text-white">${t.name}</h3>
        <div class="flex flex-wrap gap-4 text-xs text-neutral-400 pt-1">
          <span class="flex items-center space-x-1.5"><i data-lucide="calendar" class="w-3.5 h-3.5 text-neutral-400"></i><span>${t.dates}</span></span>
          <span class="flex items-center space-x-1.5"><i data-lucide="trophy" class="w-3.5 h-3.5 text-neutral-400"></i><span>${t.prize}</span></span>
        </div>
      </div>

      <div class="flex items-center space-x-3 w-full md:w-auto justify-end">
        <a href="tournament.html?id=${t.id}" class="px-5 py-2.5 rounded-xl bg-white hover:bg-neutral-200 text-black font-bold text-xs transition flex items-center space-x-2">
          <span>Смотреть страницу и сетку</span>
          <i data-lucide="arrow-right" class="w-4 h-4"></i>
        </a>
      </div>
    </div>
  `).join('');

  if (window.lucide) lucide.createIcons();
}

function copyPromoCode(code) {
  navigator.clipboard.writeText(code).then(() => {
    alert(`Промокод "${code}" скопирован в буфер обмена! Перейдите на CaseHunt для бонуса +30% к депозиту.`);
  }).catch(() => {
    alert(`Промокод: ${code}`);
  });
}

function filterBanners(category) {
  currentBannerFilter = category;
  
  document.querySelectorAll('.banner-tab-btn').forEach(btn => {
    btn.classList.remove('bg-white', 'text-black', 'border-white');
    btn.classList.add('bg-neutral-900', 'text-neutral-400', 'border-neutral-800');
  });

  const activeBtn = document.getElementById(`banner-tab-${category}`);
  if (activeBtn) {
    activeBtn.classList.remove('bg-neutral-900', 'text-neutral-400', 'border-neutral-800');
    activeBtn.classList.add('bg-white', 'text-black', 'border-white');
  }

  renderBannersGrid(category);
}

function renderBannersGrid(category) {
  const container = document.getElementById('bannersGrid');
  if (!container) return;

  const list = category === 'all' 
    ? EGL_DATA.banners 
    : EGL_DATA.banners.filter(b => b.category === category);

  if (list.length === 0) {
    container.innerHTML = `
      <div class="col-span-full py-12 text-center text-neutral-400 bg-[#141414] border border-neutral-800 rounded-2xl">
        <i data-lucide="image-off" class="w-10 h-10 mx-auto mb-2 text-neutral-600"></i>
        <p class="font-medium">В данной категории пока нет баннеров</p>
      </div>
    `;
    if (window.lucide) lucide.createIcons();
    return;
  }

  container.innerHTML = list.map(b => `
    <div class="banner-item-card flex flex-col justify-between group">
      <div class="w-full aspect-video bg-black flex items-center justify-center relative overflow-hidden border-b border-neutral-800">
        <img src="${b.image}" alt="${b.title}" class="w-full h-full ${b.category === 'sponsors' ? 'object-cover' : 'object-contain p-2'} group-hover:scale-105 transition duration-300">
        <div class="absolute top-3 left-3">
          <span class="${b.badgeColor} text-[10px] uppercase tracking-wider px-2.5 py-1 rounded-md shadow">
            ${b.badge}
          </span>
        </div>
      </div>

      <div class="p-5 flex-grow flex flex-col justify-between bg-[#141414]">
        <div>
          <div class="text-xs font-semibold text-neutral-400 mb-1">${b.subtitle}</div>
          <h3 class="font-display font-bold text-lg text-white leading-snug">
            ${b.title}
          </h3>
          <p class="text-xs text-neutral-400 mt-2 leading-relaxed">
            ${b.description}
          </p>
        </div>

        <div class="mt-5 pt-3.5 border-t border-neutral-800 flex items-center justify-between">
          ${b.promoCode ? `
            <div class="flex items-center space-x-2">
              <span class="text-xs text-neutral-400">Код:</span>
              <span class="bg-neutral-800 text-white font-mono font-bold text-xs px-2.5 py-1 rounded border border-neutral-700 select-all">${b.promoCode}</span>
            </div>
          ` : `
            <div class="text-[11px] text-neutral-500 uppercase font-semibold">EGL League</div>
          `}

          ${b.link ? `
            <a href="${b.link}" class="px-4 py-2 rounded-lg bg-white hover:bg-neutral-200 text-black font-bold text-xs transition flex items-center space-x-1.5">
              <span>${b.buttonText}</span>
              <i data-lucide="arrow-right" class="w-3.5 h-3.5"></i>
            </a>
          ` : `
            <button onclick="${b.action}" class="px-4 py-2 rounded-lg bg-white hover:bg-neutral-200 text-black font-bold text-xs transition flex items-center space-x-1.5">
              <span>${b.buttonText}</span>
              <i data-lucide="copy" class="w-3.5 h-3.5"></i>
            </button>
          `}
        </div>
      </div>
    </div>
  `).join('');

  if (window.lucide) lucide.createIcons();
}

function filterMatches(stage) {
  currentMatchFilter = stage;

  document.querySelectorAll('.match-tab-btn').forEach(btn => {
    btn.classList.remove('bg-white', 'text-black', 'border-white');
    btn.classList.add('bg-neutral-900', 'text-neutral-400', 'border-neutral-800');
  });

  const activeBtn = document.getElementById(`match-tab-${stage}`);
  if (activeBtn) {
    activeBtn.classList.remove('bg-neutral-900', 'text-neutral-400', 'border-neutral-800');
    activeBtn.classList.add('bg-white', 'text-black', 'border-white');
  }

  renderFullMatchesPage(stage);
}

function renderFullMatchesPage(stage = 'all') {
  const container = document.getElementById('fullMatchesContainer');
  if (!container) return;

  const list = stage === 'all'
    ? EGL_DATA.matches
    : EGL_DATA.matches.filter(m => m.stageType === stage);

  if (list.length === 0) {
    container.innerHTML = `
      <div class="py-12 text-center text-neutral-400 bg-[#141414] border border-neutral-800 rounded-2xl">
        <p class="font-medium">Матчей в данной категории не найдено</p>
      </div>
    `;
    return;
  }

  container.innerHTML = list.map(m => `
    <div onclick="openMatchModal('${m.id}')" class="bg-[#141414] border border-neutral-800 hover:border-neutral-600 rounded-2xl p-4 sm:p-5 transition shadow-xl cursor-pointer">
      <div class="flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-neutral-800 text-xs">
        <div class="flex items-center space-x-2">
          <span class="text-white font-bold">${m.tier}</span>
          <span class="text-neutral-500">• ${m.stage}</span>
        </div>
        <div class="flex items-center space-x-2">
          ${m.note ? `<span class="bg-red-950/40 text-red-400 border border-red-900/50 px-2 py-0.5 rounded text-[11px] font-semibold">${m.note}</span>` : ''}
          <span class="text-neutral-400 bg-neutral-800 px-2.5 py-0.5 rounded border border-neutral-700 text-[11px]">${m.date || 'Завершен'}</span>
        </div>
      </div>

      <div class="py-4 grid grid-cols-1 md:grid-cols-7 gap-3 items-center">
        <div class="md:col-span-3 flex items-center justify-start md:justify-end space-x-3">
          <div class="text-left md:text-right">
            <div class="font-bold text-base text-white">${m.team1.name}</div>
            <div class="text-xs text-neutral-400">${m.team1.status || 'Участник'}</div>
          </div>
        </div>

        <div class="md:col-span-1 text-center py-2 bg-neutral-950 rounded-xl border border-neutral-800">
          <div class="font-bold text-lg text-white font-mono">
            ${m.result}
          </div>
          <div class="text-[10px] text-neutral-500 uppercase font-semibold">Счет</div>
        </div>

        <div class="md:col-span-3 flex items-center justify-start space-x-3">
          <div class="text-left">
            <div class="font-bold text-base text-white">${m.team2.name}</div>
            <div class="text-xs text-neutral-400">${m.team2.status || 'Участник'}</div>
          </div>
        </div>
      </div>

      ${m.maps ? `
        <div class="pt-3 border-t border-neutral-800 flex flex-wrap items-center justify-between text-xs text-neutral-400 gap-2">
          <div class="flex items-center space-x-2">
            <span class="text-neutral-500 font-semibold">Карты:</span>
            ${m.maps.map(map => `
              <span class="bg-neutral-800 px-2.5 py-0.5 rounded border border-neutral-700 text-[11px] text-neutral-200">
                ${map.name} (${map.score1}:${map.score2})
              </span>
            `).join('')}
          </div>
          ${m.mvp ? `<span class="text-white font-bold bg-neutral-800 px-2.5 py-0.5 rounded border border-neutral-700 text-[11px]">MVP: ${m.mvp}</span>` : ''}
        </div>
      ` : ''}
    </div>
  `).join('');

  if (window.lucide) lucide.createIcons();
}

function renderRankingsPage() {
  const container = document.getElementById('fullRankingsTable');
  if (!container) return;

  container.innerHTML = EGL_DATA.rankings.map(r => `
    <tr class="border-b border-neutral-800 hover:bg-neutral-800/40 transition">
      <td class="p-4 font-bold ${r.rank <= 3 ? 'text-white' : 'text-neutral-500'}">#${r.rank}</td>
      <td class="p-4">
        <div>
          <div class="font-bold text-white text-sm">${r.name}</div>
          <div class="text-xs text-neutral-400">${r.status}</div>
        </div>
      </td>
      <td class="p-4 font-bold text-white font-mono text-sm">${r.points}</td>
      <td class="p-4 text-xs text-neutral-300 font-mono">${r.winrate}</td>
      <td class="p-4">
        <div class="flex items-center space-x-1">
          ${r.form.map(f => `
            <span class="w-5 h-5 rounded flex items-center justify-center text-[10px] font-bold ${f === 'W' ? 'bg-neutral-800 text-white border border-neutral-600' : 'bg-neutral-900 text-neutral-500 border border-neutral-800'}">
              ${f}
            </span>
          `).join('')}
        </div>
      </td>
    </tr>
  `).join('');
}

function renderStatsPage() {
  const container = document.getElementById('statsTableBody');
  if (!container) return;

  container.innerHTML = EGL_DATA.stats.map(s => `
    <tr class="border-b border-neutral-800 hover:bg-neutral-800/40 transition text-xs">
      <td class="p-4 font-bold ${s.rank === 1 ? 'text-white' : 'text-neutral-500'}">#${s.rank}</td>
      <td class="p-4">
        <div class="font-bold text-white text-sm">${s.player}</div>
        <div class="text-[11px] text-neutral-400">${s.team} • ${s.role}</div>
      </td>
      <td class="p-4 font-bold text-white font-mono text-sm">${s.rating}</td>
      <td class="p-4 font-semibold text-neutral-300 font-mono">${s.kd}</td>
      <td class="p-4 text-neutral-300 font-mono">${s.adr}</td>
      <td class="p-4 text-neutral-400 font-mono">${s.hs}</td>
      <td class="p-4 text-neutral-500 font-mono">${s.maps}</td>
    </tr>
  `).join('');
}

function renderForumThreads() {
  const container = document.getElementById('forumThreadsContainer');
  if (!container) return;

  container.innerHTML = EGL_DATA.forum.map(f => `
    <div class="p-4 border-b border-neutral-800 hover:bg-neutral-800/40 transition flex items-center justify-between gap-4">
      <div class="flex items-start space-x-3.5">
        <div class="w-9 h-9 rounded-xl bg-neutral-800 border border-neutral-700 flex items-center justify-center text-white flex-shrink-0">
          <i data-lucide="message-square" class="w-4 h-4"></i>
        </div>
        <div>
          <span class="text-[10px] font-bold text-neutral-300 bg-neutral-800 px-2 py-0.5 rounded border border-neutral-700">
            ${f.category}
          </span>
          <h4 class="font-bold text-sm text-white hover:text-neutral-300 transition mt-1">
            ${f.title}
          </h4>
          <div class="text-[11px] text-neutral-400 mt-1">
            Автор: <span class="text-white font-medium">${f.author}</span> • ${f.time}
          </div>
        </div>
      </div>
      <div class="text-right flex-shrink-0 text-xs text-neutral-400">
        <div class="font-bold text-white">${f.replies} ответов</div>
        <div>${f.views} просмотров</div>
      </div>
    </div>
  `).join('');

  if (window.lucide) lucide.createIcons();
}

function submitNewThread() {
  const title = document.getElementById('newThreadTitle')?.value;
  const cat = document.getElementById('newThreadCategory')?.value;
  const body = document.getElementById('newThreadBody')?.value;

  if (!title || !body) {
    alert('Пожалуйста, заполните поля!');
    return;
  }

  const newPost = {
    id: Date.now(),
    category: cat || 'Общее',
    title: title,
    author: 'Игрок EGL',
    time: 'Только что',
    replies: 0,
    views: 1
  };

  EGL_DATA.forum.unshift(newPost);
  closeModals();
  renderForumThreads();
  alert('Тема создана!');
}

function closeModals() {
  document.querySelectorAll('[id$="Modal"]').forEach(m => m.classList.add('hidden'));
}

function openAuthModal() {
  const modal = document.getElementById('authModal');
  if (modal) modal.classList.remove('hidden');
}

function openNewThreadModal() {
  const modal = document.getElementById('newThreadModal');
  if (modal) modal.classList.remove('hidden');
}

function simulateSteamLogin() {
  alert('Вы успешно авторизовались в EGL!');
  const authLabel = document.getElementById('authBtnLabel');
  if (authLabel) authLabel.textContent = 'Player (Online)';
  closeModals();
}
