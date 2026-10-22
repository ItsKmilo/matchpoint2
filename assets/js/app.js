/* Sitio estático MatchPoint: sin librerías externas ni servicios remotos. */
(()=>{
  'use strict';
  const $=(s,r=document)=>r.querySelector(s);
  const $$=(s,r=document)=>Array.from(r.querySelectorAll(s));
  const escapeHTML=(s)=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));

  const menu=$('.menu-toggle'),nav=$('#site-nav');
  menu?.addEventListener('click',()=>{const open=nav.classList.toggle('open');menu.setAttribute('aria-expanded',String(open));menu.setAttribute('aria-label',open?'Cerrar menú':'Abrir menú');});
  $$('#site-nav a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('open');menu?.setAttribute('aria-expanded','false');}));
  window.addEventListener('keydown',e=>{if(e.key==='Escape' && nav?.classList.contains('open')){nav.classList.remove('open');menu.setAttribute('aria-expanded','false');menu.focus();}});

  const mapList={
    full:{src:'descargas/Mapa_Historias_MatchPoint_Editable.svg',alt:'Mapa completo de historias de MatchPoint, 12 épicas y 72 historias'},
    config:{src:'descargas/MatchPoint_Detalle_01_Configuracion_EDITABLE.svg',alt:'Mapa detallado: administración de competencias, identidad, torneos y eventos'},
    participacion:{src:'descargas/MatchPoint_Detalle_02_Participacion_EDITABLE.svg',alt:'Mapa detallado: exploración de torneos, consulta de encuentros y pronósticos'},
    creditos:{src:'descargas/MatchPoint_Detalle_03_Creditos_y_Transacciones_EDITABLE.svg',alt:'Mapa detallado: créditos, operaciones confiables e historial'},
    resultados:{src:'descargas/MatchPoint_Detalle_04_Resultados_y_Control_EDITABLE.svg',alt:'Mapa detallado: resultados, liquidación y auditoría'}
  };
  const mapViewport=$('#map-viewport'),mapImage=$('#map-image'),mapOpen=$('#map-open'),mapDownload=$('#map-download');
  function switchMap(key){const entry=mapList[key];if(!entry)return;mapImage.src=entry.src;mapImage.alt=entry.alt;mapImage.classList.toggle('detail',key!=='full');mapOpen.href=entry.src;mapDownload.href=entry.src;mapViewport.scrollLeft=0;mapViewport.scrollTop=0;$$('.map-tabs button').forEach(btn=>{const yes=btn.dataset.map===key;btn.classList.toggle('active',yes);btn.setAttribute('aria-selected',String(yes));btn.tabIndex=yes?0:-1;});}
  $$('.map-tabs button').forEach((b,i,all)=>{b.addEventListener('click',()=>switchMap(b.dataset.map));b.addEventListener('keydown',e=>{let next;if(e.key==='ArrowRight')next=(i+1)%all.length;else if(e.key==='ArrowLeft')next=(i-1+all.length)%all.length;else if(e.key==='Home')next=0;else if(e.key==='End')next=all.length-1;else return;e.preventDefault();all[next].focus();switchMap(all[next].dataset.map);});});

  const records=Array.isArray(window.MATCHPOINT_BACKLOG)?window.MATCHPOINT_BACKLOG:[];
  const search=$('#search-stories'),priority=$('#filter-priority'),release=$('#filter-release'),epic=$('#filter-epic'),tbody=$('#story-rows'),counter=$('#results-count');
  let visibleLimit=12,shown=[];
  const epicNames=[...new Set(records.map(x=>x.epic))];epicNames.forEach(name=>{let opt=document.createElement('option');opt.value=name;opt.textContent=name;epic.append(opt);});
  const safeLower=s=>String(s??'').normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase();
  function filters(){let term=safeLower(search.value.trim());return records.filter(x=>(!term||safeLower([x.id,x.name,x.epic,x.story,x.stage,x.owner].join(' ')).includes(term))&&(!priority.value||x.priority===priority.value)&&(!release.value||x.release===release.value)&&(!epic.value||x.epic===epic.value));}
  const controls=document.createElement('div');controls.className='paging-controls';controls.innerHTML='<button type="button" id="next-stories">Mostrar 12 más ↓</button><button type="button" id="all-stories">Ver todas las historias</button>';$('.backlog-app').insertBefore(controls,$('.backlog-footnote'));
  function render(){shown=filters();counter.textContent=`Mostrando ${Math.min(visibleLimit,shown.length)} de ${shown.length} historias${shown.length!==records.length?' filtradas':''}`;
    if(!shown.length){tbody.innerHTML='<tr><td class="empty-row" colspan="7">No se encontraron historias. Prueba con otros filtros.</td></tr>';}
    else {tbody.innerHTML=shown.slice(0,visibleLimit).map(x=>`<tr><td>${escapeHTML(x.id)}</td><td>${escapeHTML(x.name)}</td><td>${escapeHTML(x.epic)}</td><td><span class="priority-tag priority-${escapeHTML(x.priority)}">${escapeHTML(x.priority)}</span></td><td>${escapeHTML(x.release)}</td><td>${x.sp}</td><td><button class="detail-link" type="button" data-detail="${escapeHTML(x.id)}" aria-label="Ver detalle de ${escapeHTML(x.id)}">Ver detalle ↗</button></td></tr>`).join('');}
    $('#next-stories').disabled=visibleLimit>=shown.length;$('#next-stories').hidden=visibleLimit>=shown.length;$('#all-stories').hidden=visibleLimit>=shown.length;
  }
  for(let el of [search,priority,release,epic])el.addEventListener(el===search?'input':'change',()=>{visibleLimit=12;render();});
  $('#clear-filters').addEventListener('click',()=>{search.value='';priority.value='';release.value='';epic.value='';visibleLimit=12;render();search.focus();});
  $('#next-stories').addEventListener('click',()=>{visibleLimit+=12;render();});
  $('#all-stories').addEventListener('click',()=>{visibleLimit=records.length;render();});
  $$('.release-filter').forEach(btn=>btn.addEventListener('click',()=>{search.value='';priority.value='';epic.value='';release.value=btn.dataset.release;visibleLimit=12;render();$('#backlog').scrollIntoView({behavior:window.matchMedia('(prefers-reduced-motion: reduce)').matches?'auto':'smooth'});setTimeout(()=>release.focus({preventScroll:true}),250);}));
  const dialog=$('#story-dialog'),dContent=$('#dialog-content'),close=$('#dialog-close');
  function openStory(id){let x=records.find(r=>r.id===id);if(!x||!dialog)return;
    dContent.innerHTML=`<div class="dialog-id">${escapeHTML(x.id)} · ${escapeHTML(x.epic)}</div><h3 class="dialog-title" id="dialog-title">${escapeHTML(x.name)}</h3><div class="dialog-tags"><span class="priority-tag priority-${escapeHTML(x.priority)}">${escapeHTML(x.priority)}</span><span class="tag">${escapeHTML(x.release)}</span><span class="tag">${escapeHTML(x.type)}</span><span class="tag">Riesgo ${escapeHTML(x.risk.toLowerCase())}</span></div><div class="dialog-story">${escapeHTML(x.story)}</div><div class="dialog-section-title">CRITERIOS DE ACEPTACIÓN</div><ol class="dialog-criteria">${x.criteria.map(a=>`<li>${escapeHTML(a)}</li>`).join('')}</ol><div class="dialog-metadata"><div><small>RESPONSABLE PROPUESTO</small><strong>${escapeHTML(x.owner)}</strong></div><div><small>PUNTOS / IMPACTO</small><strong>${x.sp} SP · ${x.impact}/5 impacto</strong></div><div><small>DEPENDENCIAS</small><strong>${escapeHTML(x.dependencies)}</strong></div><div><small>ESTADO</small><strong>${escapeHTML(x.status)}</strong></div></div>${x.notes?`<div class="dialog-section-title">NOTAS DE PLANIFICACIÓN</div><p class="dialog-notes">${escapeHTML(x.notes)}</p>`:''}`;
    dialog.showModal();close.focus();}
  tbody.addEventListener('click',e=>{let button=e.target.closest('[data-detail]');if(button)openStory(button.dataset.detail);});
  close.addEventListener('click',()=>dialog.close());dialog.addEventListener('click',e=>{if(e.target===dialog)dialog.close();});
  render();
  if('IntersectionObserver' in window){const links=$$('#site-nav a[href^="#"]');const io=new IntersectionObserver(items=>{items.forEach(entry=>{if(entry.isIntersecting){links.forEach(a=>a.classList.toggle('active',a.getAttribute('href')==='#'+entry.target.id));}})},{rootMargin:'-25% 0px -62% 0px'});$$('main section[id]').forEach(section=>io.observe(section));}
})();
