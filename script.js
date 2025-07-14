const ramos = [
  // TRIMESTRE I
  { id: 'lenguaje', nombre: 'Lenguaje y habilidades cognitivas', uc: 3 },
  { id: 'diseno_com', nombre: 'Diseño y comunicación', uc: 3, abre: ['teoria_forma'] },
  { id: 'investigacion', nombre: 'Metodología de la investigación', uc: 3 },
  { id: 'diseno_comp', nombre: 'Diseño y computación', uc: 3 },
  { id: 'maquetas', nombre: 'Maquetas y modelos tridimensionales', uc: 3, abre: ['tecnicas_1'] },
  { id: 'actividad_fisica', nombre: 'Actividad física y salud', uc: 2, abre: ['activ_recrea'] },
  { id: 'orientacion', nombre: 'Orientación', uc: 2 },

  // TRIMESTRE II
  { id: 'teoria_forma', nombre: 'Teoría de la forma', uc: 5, req: ['diseno_com'], abre: ['taller_1'] },
  { id: 'creatividad', nombre: 'Creatividad y diseño', uc: 3 },
  { id: 'logica', nombre: 'Lógica', uc: 2 },
  { id: 'geometria', nombre: 'Geometría aplicada', uc: 3, abre: ['dibujo'] },
  { id: 'tecnicas_1', nombre: 'Técnicas de expresión I', uc: 4, req: ['maquetas'], abre: ['tecnicas_2'] },
  { id: 'activ_recrea', nombre: 'Actividades recreacionales', uc: 0, req: ['actividad_fisica'] },

  // TRIMESTRE III
  { id: 'teoria_imagen', nombre: 'Teoría de la imagen', uc: 3 },
  { id: 'historia_1', nombre: 'Historia del diseño gráfico I', uc: 3, abre: ['historia_2'] },
  { id: 'dibujo', nombre: 'Dibujo', uc: 3, req: ['geometria'] },
  { id: 'tecnicas_2', nombre: 'Técnicas de expresión II', uc: 3, req: ['tecnicas_1'] },
  { id: 'ingles_1', nombre: 'Inglés I', uc: 2, abre: ['ingles_2'] },
  { id: 'taller_1', nombre: 'Taller de diseño gráfico I', uc: 0, req: ['teoria_forma'], abre: ['taller_2'] },

  // TRIMESTRE IV
  { id: 'taller_2', nombre: 'Taller de diseño gráfico II', uc: 5, req: ['taller_1'], abre: ['taller_3'] },
  { id: 'teoria_color', nombre: 'Teoría del color', uc: 3 },
  { id: 'historia_2', nombre: 'Historia del diseño gráfico II', uc: 3, req: ['historia_1'], abre: ['tendencias'] },
  { id: 'dibujo_pc', nombre: 'Dibujo asistido por computadora', uc: 3 },
  { id: 'rep_graf_1', nombre: 'Técnicas de representación gráfica I', uc: 3, abre: ['rep_graf_2'] },
  { id: 'ingles_2', nombre: 'Inglés II', uc: 2, req: ['ingles_1'], abre: ['ingles_3'] },

  // TRIMESTRE V
  { id: 'taller_3', nombre: 'Taller de diseño gráfico III', uc: 5, req: ['taller_2'], abre: ['taller_4'] },
  { id: 'ilustracion', nombre: 'Ilustración', uc: 3 },
  { id: 'tendencias', nombre: 'Tendencias actuales del diseño gráfico', uc: 3, req: ['historia_2'] },
  { id: 'sustentable', nombre: 'Desarrollo sustentable', uc: 3 },
  { id: 'rep_graf_2', nombre: 'Técnicas de representación gráfica II', uc: 3, req: ['rep_graf_1'], abre: ['rep_graf_3'] },
  { id: 'ingles_3', nombre: 'Inglés III', uc: 2, req: ['ingles_2'], abre: ['ingles_4'] },

  // TRIMESTRE VI
  { id: 'taller_4', nombre: 'Taller de diseño gráfico IV', uc: 5, req: ['taller_3'], abre: ['taller_5'] },
  { id: 'publicidad', nombre: 'Publicidad y mercadeo', uc: 3 },
  { id: 'infografia', nombre: 'Infografía', uc: 3 },
  { id: 'foto_1', nombre: 'Fotografía', uc: 3, abre: ['foto_2'] },
  { id: 'rep_graf_3', nombre: 'Técnicas de representación gráfica III', uc: 3, req: ['rep_graf_2'] },
  { id: 'ingles_4', nombre: 'Inglés IV', uc: 2, req: ['ingles_3'], abre: ['ingles_5'] },

  // TRIMESTRE VII
  { id: 'taller_5', nombre: 'Taller de diseño gráfico V', uc: 5, req: ['taller_4'], abre: ['taller_6'] },
  { id: 'empaque', nombre: 'Empaque', uc: 3 },
  { id: 'impresion_1', nombre: 'Téc. y sistemas de impresión I', uc: 3, abre: ['impresion_2'] },
  { id: 'foto_2', nombre: 'Fotografía II', uc: 3, req: ['foto_1'] },
  { id: 'calidad', nombre: 'Calidad y productividad', uc: 3 },
  { id: 'ingles_5', nombre: 'Inglés V', uc: 2, req: ['ingles_4'] },
  { id: 'serv_com', nombre: 'Servicio comunitario', uc: 0, abre: ['seminario_1'] },

  // TRIMESTRE VIII
  { id: 'taller_6', nombre: 'Taller de diseño gráfico VI', uc: 5, req: ['taller_5'], abre: ['taller_7'] },
  { id: 'digital_avanzado', nombre: 'Diseño digital avanzado', uc: 3 },
  { id: 'edicion', nombre: 'Edición no lineal', uc: 3 },
  { id: 'produccion_1', nombre: 'Producción audiovisual I', uc: 3, abre: ['produccion_2'] },
  { id: 'impresion_2', nombre: 'Téc. y sistemas de impresión II', uc: 3, req: ['impresion_1'] },
  { id: 'optativa_1', nombre: 'Optativa I', uc: 2 },

  // TRIMESTRE IX
  { id: 'taller_7', nombre: 'Taller de diseño gráfico VII', uc: 5, req: ['taller_6'], abre: ['taller_8'] },
  { id: 'redaccion', nombre: 'Redacción publicitaria', uc: 3 },
  { id: 'gerencia', nombre: 'Gerencia de proyecto', uc: 3, req_uc: 146 },
  { id: 'produccion_2', nombre: 'Producción audiovisual II', uc: 3, req: ['produccion_1'] },
  { id: 'practica_1', nombre: 'Práctica profesional I', uc: 3, req_uc: 146, abre: ['practica_2'] },
  { id: 'optativa_2', nombre: 'Optativa II', uc: 2 },

  // TRIMESTRE X
  { id: 'taller_8', nombre: 'Taller de diseño gráfico VIII', uc: 5, req: ['taller_7'] },
  { id: 'seminario_1', nombre: 'Seminario de investigación I', uc: 3, req: ['serv_com'], req_uc: 171, abre: ['seminario_2'] },
  { id: 'electiva_1', nombre: 'Electiva I', uc: 3 },
  { id: 'optativa_3', nombre: 'Optativa III', uc: 2 },
  { id: 'etica', nombre: 'Ética profesional', uc: 3, req_uc: 146, abre: ['practica_2'] },
  { id: 'experimental', nombre: 'Diseño experimental', uc: 3 },

  // TRIMESTRE XI
  { id: 'seminario_2', nombre: 'Seminario de investigación II', uc: 3, req: ['seminario_1'], abre: ['seminario_3'] },
  { id: 'practica_2', nombre: 'Práctica profesional II', uc: 4, req: ['practica_1', 'etica'] },
  { id: 'emprendimiento', nombre: 'Desarrollo de la capacidad emprendedora', uc: 2 },
  { id: 'diseno_3d', nombre: 'Diseño 3D', uc: 4 },
  { id: 'electiva_2', nombre: 'Electiva II', uc: 3 },

  // TRIMESTRE XII
  { id: 'seminario_3', nombre: 'Seminario de investigación III', uc: 9, req: ['seminario_2'] },
  { id: 'pasantias', nombre: 'Pasantías académicas', uc: 10, req_uc: 205 },
];

let aprobadasUC = () => ramos.filter(r => r.estado === 'aprobado').reduce((s, r) => s + r.uc, 0);

const mallaContainer = document.getElementById('malla');

function renderRamos() {
  mallaContainer.innerHTML = '';
  ramos.forEach(ramo => {
    const div = document.createElement('div');
    div.className = 'ramo';
    div.id = ramo.id;
    div.textContent = ramo.nombre;
    const ucSpan = document.createElement('span');
    ucSpan.className = 'uc';
    ucSpan.textContent = `${ramo.uc} UC`;
    div.appendChild(ucSpan);

    const requisitosOk = (!ramo.req || ramo.req.every(id => ramosMap[id]?.estado === 'aprobado'));
    const ucOk = (!ramo.req_uc || aprobadasUC() >= ramo.req_uc);

    if (!requisitosOk || !ucOk) {
      div.classList.add('locked');
    }

    if (ramo.estado === 'aprobado') {
      div.classList.add('approved');
    }

    div.onclick = () => toggleRamo(ramo.id);
    mallaContainer.appendChild(div);
  });
}

function toggleRamo(id) {
  const ramo = ramosMap[id];
  const requisitosOk = (!ramo.req || ramo.req.every(r => ramosMap[r]?.estado === 'aprobado'));
  const ucOk = (!ramo.req_uc || aprobadasUC() >= ramo.req_uc);
  if (!requisitosOk || !ucOk) return;

  ramo.estado = ramo.estado === 'aprobado' ? 'pendiente' : 'aprobado';
  renderRamos();
}

const ramosMap = {};
ramos.forEach(r => {
  r.estado = 'pendiente';
  ramosMap[r.id] = r;
});

renderRamos();

