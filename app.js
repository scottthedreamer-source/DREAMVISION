const names=['The Opening Statement','Trouble Brewing','The Long Goodbye','Sneak Attack','Pocket Thunder','The Rumble','Brief but Bold','The Squeaky One','Loose Cannon','The Grand Finale'];
const sounds=await fetch('sounds.json').then(r=>{if(!r.ok)throw Error('Sound collection unavailable');return r.json()});
const $=s=>document.querySelector(s);
let selected=0,delay=15,context,source,interval,wake,token=0,busy=false;
const buffers=new Map();
// An HTML media session helps iOS route Web Audio through media playback.
const mediaSession=new Audio('sounds/silence.mp3');
mediaSession.loop=true;mediaSession.playsInline=true;mediaSession.preload='auto';
function activateMedia(){
 try{if(navigator.audioSession)navigator.audioSession.type='playback'}catch{}
 return mediaSession.play().catch(()=>{});
}

function render(){ $('#sounds').replaceChildren(...sounds.map((sound,i)=>{const row=document.createElement('div');row.className='sound'+(i===selected?' active':'');const pick=document.createElement('button');pick.className='pick';pick.setAttribute('aria-pressed',i===selected);pick.innerHTML=`${names[i]}<small>NO. ${String(i+1).padStart(2,'0')} · ${sound.duration}s</small>`;pick.onclick=()=>{if(busy)return;selected=i;$('#selected').textContent=names[i];render()};const preview=document.createElement('button');preview.className='preview';preview.textContent='▶';preview.setAttribute('aria-label',`Preview ${names[i]}`);preview.onclick=()=>play(i,true);row.append(pick,preview);return row}));}
async function unlock(){context??=new (window.AudioContext||window.webkitAudioContext)();const mediaReady=activateMedia();await context.resume();await mediaReady;if(context.state!=='running')throw Error('Tap again to enable audio.');}
async function load(i){if(!buffers.has(i)){const r=await fetch(sounds[i].file);if(!r.ok)throw Error('Could not load the sound. Please try again.');buffers.set(i,await context.decodeAudioData(await r.arrayBuffer()))}return buffers.get(i)}
function stop(){token++;clearInterval(interval);if(source){source.onended=null;try{source.stop()}catch{}source=null}wake?.release().catch(()=>{});wake=null;mediaSession.pause();busy=false;$('#launch').disabled=false;$('#launch').innerHTML='Let ’er rip! <span>↗</span>';$('#cancel').hidden=true;document.querySelectorAll('[data-delay],.pick,.preview').forEach(b=>b.disabled=false)}
async function play(i,preview=false){stop();const mine=token;busy=true;$('#cancel').hidden=false;$('#launch').disabled=true;document.querySelectorAll('[data-delay],.pick,.preview').forEach(b=>b.disabled=true);$('#status').textContent='Getting the original ready…';try{await unlock();const buffer=await load(i);if(mine!==token)return;const start=context.currentTime+(preview?0:delay);source=context.createBufferSource();source.buffer=buffer;source.connect(context.destination);source.onended=()=>{if(mine!==token)return;stop();$('#status').textContent=preview?'Preview finished. Ready when you are.':'Released. Lucky strikes again.'};source.start(start);if(!preview){if(navigator.wakeLock)navigator.wakeLock.request('screen').then(w=>{if(mine===token)wake=w;else w.release()}).catch(()=>{});const tick=()=>{const left=Math.max(0,Math.ceil(start-context.currentTime));$('#status').textContent=left?`Launch in ${left} seconds. Keep this page open.`:'Letting it rip…';$('#launch').textContent=left?`${left}s · Countdown running`:'There it goes…'};tick();interval=setInterval(tick,200)}else $('#status').textContent=`Previewing ${names[i]}…`;}catch(e){if(mine!==token)return;stop();$('#status').textContent=e.message||'Audio unavailable. Turn off Silent Mode, raise media volume, and tap Preview again.'}}
$('#launch').onclick=()=>play(selected);
$('#cancel').onclick=()=>{stop();$('#status').textContent='Launch cancelled. Crisis averted.'};
document.querySelectorAll('[data-delay]').forEach(b=>b.onclick=()=>{delay=Number(b.dataset.delay);document.querySelectorAll('[data-delay]').forEach(x=>x.setAttribute('aria-pressed',x===b))});
render();
