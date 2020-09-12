const laloStats = 'https://fortnite-api.com/v1/stats/br/v2/68a0fc154e5d4c599669c04a787068f3'
async function LaloStats(){
  const response = await fetch(laloStats);
  const res = await response.json();
  //console.log(res.data.account.name);

  //********SoloStats********
  const soloWins = res.data.stats.all.solo.wins;
  document.getElementById('soloWins').textContent = soloWins;
  
  //********DuosStats********
  const duoWins = res.data.stats.all.duo.wins;
  document.getElementById('duoWins').textContent = duoWins;

  //********SquadStats********
  const squadWins = res.data.stats.all.squad.wins;
  document.getElementById('squadWins').textContent = squadWins;
}
LaloStats();


const pargaStats = 'https://fortnite-api.com/v1/stats/br/v2/0b954107aaa242c58134a8edeafac54a'
async function PargaStats(){
  const response = await fetch(pargaStats);
  const res = await response.json();
  //console.log(res.data.account.name);

  //********SoloStats********
  const soloWins = res.data.stats.all.solo.wins;
  document.getElementById('soloWins1').textContent = soloWins;
  
  //********DuosStats********
  const duoWins = res.data.stats.all.duo.wins;
  document.getElementById('duoWins1').textContent = duoWins;

  //********SquadStats********
  const squadWins = res.data.stats.all.squad.wins;
  document.getElementById('squadWins1').textContent = squadWins;
}
PargaStats();

const rogerStats = 'https://fortnite-api.com/v1/stats/br/v2/611190b975de48b293b91ace4047b68'
async function RogerStats(){
  const response = await fetch(rogerStats);
  const res = await response.json();
  //console.log(res.data.account.name);

  //********SoloStats********
  const soloWins = res.data.stats.all.solo.wins;
  document.getElementById('soloWins2').textContent = soloWins;
  
  //********DuosStats********
  const duoWins = res.data.stats.all.duo.wins;
  document.getElementById('duoWins2').textContent = duoWins;

  //********SquadStats********
  const squadWins = res.data.stats.all.squad.wins;
  document.getElementById('squadWins2').textContent = squadWins;
}
RogerStats();

const pacoStats = 'https://fortnite-api.com/v1/stats/br/v2/c7e3906693de4007860b0deefd6cacf5'
async function PacoStats(){
  const response = await fetch(pacoStats);
  const res = await response.json();
  //console.log(res.data.account.name);

  //********SoloStats********
  const soloWins = res.data.stats.all.solo.wins;
  document.getElementById('soloWins3').textContent = soloWins;
  
  //********DuosStats********
  const duoWins = res.data.stats.all.duo.wins;
  document.getElementById('duoWins3').textContent = duoWins;

  //********SquadStats********
  const squadWins = res.data.stats.all.squad.wins;
  document.getElementById('squadWins3').textContent = squadWins;
}
PacoStats();