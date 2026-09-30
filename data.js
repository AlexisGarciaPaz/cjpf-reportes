/* ==========================================================================
   data.js — Catálogos por centro (CJPF Región 1)
   Fuente: CJPF_REGION_1.docx (vigente)

   Convenciones:
   - jueces y magistrados: solo se guardan SIGLAS (no nombres) y el género. Los nombres
     completos no deben escribirse aquí porque este archivo es público en GitHub Pages.
   - genero: 'F' | 'M'  (define Jueza/Juez y Magistrada/Magistrado en el reporte)
   - cargo (seguridad): 'JGS' | 'OS' | 'SC' | 'OC'
   - inmueble: nombre del edificio que aparece en el reporte
   - Los nombres se conservan tal como los proporcionó cada región.
   - Cualquier integrante de 'seguridad' del centro puede ser quien reporta.
   ========================================================================== */

const CJPF_DATA = {
  regiones: [
    {
      id: 'r1',
      nombre: 'Región 1',
      numeral: 'I',
      centros: [

        /* ---------------------------------------------------------------- */
        {
          id: 'la-paz',
          nombre: 'La Paz',
          estado: 'Baja California Sur',
          abrev: 'BCS',
          salas: 2,
          inmueble: 'Centro de Justicia Penal Federal',
          jueces: [
            { siglas: 'CAPA', genero: 'M' },
            { siglas: 'AOA', genero: 'M' },
            { siglas: 'EAVT', genero: 'M' }
          ],
          magistrados: [
            { siglas: 'JVJV', genero: 'F' },
            { siglas: 'RAJG', genero: 'M' },
            { siglas: 'EFG', genero: 'M' }
          ],
          seguridad: [
            { cargo: 'JGS', nombre: 'Manuel Robles García' },
            { cargo: 'OS', nombre: 'Ada Lizeth Picos Romero' },
            { cargo: 'OS', nombre: 'José Raúl Paniagua Hernández' },
            { cargo: 'OS', nombre: 'Roberto Gallaga Valencia' }
          ]
        },

        /* ---------------------------------------------------------------- */
        {
          id: 'culiacan',
          nombre: 'Culiacán',
          estado: 'Sinaloa',
          abrev: 'Sinaloa',
          salas: 3,
          inmueble: 'Centro de Justicia Penal Federal',
          jueces: [
            { siglas: 'ECRL', genero: 'F' },
            { siglas: 'AKAC', genero: 'F' },
            { siglas: 'MICM', genero: 'F' },
            { siglas: 'ABS', genero: 'M' }
          ],
          magistrados: [],
          seguridad: [
            { cargo: 'JGS', nombre: 'Arturo Granados Sánchez' },
            { cargo: 'OS', nombre: 'César Reyniel Castro Montoya' },
            { cargo: 'OS', nombre: 'Arturo Uriarte Soto' },
            { cargo: 'JGS', nombre: 'Hugo Enrique Guzmán Zepeda' },
            { cargo: 'SC', nombre: 'Enrique López Landeros' },
            { cargo: 'OC', nombre: 'Mtro. Alexis Omar García Paz' }
          ]
        },

        /* ---------------------------------------------------------------- */
        {
          id: 'mexicali',
          nombre: 'Mexicali',
          estado: 'Baja California',
          abrev: 'BC',
          salas: 3,
          inmueble: 'Centro de Justicia Penal Federal',
          jueces: [
            { siglas: 'NAST', genero: 'F' },
            { siglas: 'JLHH', genero: 'M' },
            { siglas: 'SAPQ', genero: 'M' },
            { siglas: 'ACA', genero: 'M' }
          ],
          magistrados: [],
          seguridad: [
            { cargo: 'OS', nombre: 'Luis Miguel Baizabal Lagunes' },
            { cargo: 'OS', nombre: 'José Arafat Ávalos Castillo' }
          ]
        },

        /* ---------------------------------------------------------------- */
        {
          id: 'ciudad-juarez',
          nombre: 'Ciudad Juárez',
          estado: 'Chihuahua',
          abrev: 'Chih.',
          salas: 4,
          inmueble: 'Centro de Justicia Penal Federal',
          jueces: [
            { siglas: 'JAOC', genero: 'M' },
            { siglas: 'MGHM', genero: 'F' },
            { siglas: 'VAEA', genero: 'F' },
            { siglas: 'EHSW', genero: 'F' },
            { siglas: 'VMHC', genero: 'M' },
            { siglas: 'JAMQ', genero: 'M' }
          ],
          magistrados: [],
          seguridad: [
            { cargo: 'OS', nombre: 'Ing. Omar Reyes Gómez' },
            { cargo: 'OS', nombre: 'Daniel Benjamín Solano Enríquez' },
            { cargo: 'OS', nombre: 'Daniel Octavio Reyes Zepeda' }
          ]
        },

        /* ---------------------------------------------------------------- */
        {
          id: 'ensenada',
          nombre: 'Ensenada',
          estado: 'Baja California',
          abrev: 'BC',
          salas: 2,
          inmueble: 'Centro de Justicia Penal Federal',
          jueces: [
            { siglas: 'OMZ', genero: 'M' },
            { siglas: 'JAAC', genero: 'F' },
            { siglas: 'LJGT', genero: 'F' }
          ],
          magistrados: [],
          seguridad: [
            { cargo: 'JGS', nombre: 'Lic. Aranzazo Fernando García Rodríguez' },
            { cargo: 'OS', nombre: 'Lic. Luis Fernando Aguiar Higuera' }
          ]
        },

        /* ---------------------------------------------------------------- */
        {
          id: 'tijuana',
          nombre: 'Tijuana',
          estado: 'Baja California',
          abrev: 'BC',
          salas: 4,
          inmueble: 'Centro de Justicia Penal Federal',
          jueces: [
            { siglas: 'LMCS', genero: 'M' },
            { siglas: 'ROCG', genero: 'M' },
            { siglas: 'VRH', genero: 'F' },
            { siglas: 'AGG', genero: 'M' },
            { siglas: 'JRG', genero: 'M' },
            { siglas: 'EJP', genero: 'F' }
          ],
          magistrados: [],
          seguridad: [
            { cargo: 'OS', nombre: 'Nereida Itzel García Mendoza' },
            { cargo: 'OS', nombre: 'Manuel Arias Contreras' },
            { cargo: 'SC', nombre: 'Juan Pablo Reyna Roon' },
            { cargo: 'OC', nombre: 'José Carlos García Estrada' }
          ]
        },

        /* ---------------------------------------------------------------- */
        {
          id: 'los-mochis',
          nombre: 'Los Mochis',
          estado: 'Sinaloa',
          abrev: 'Sinaloa',
          salas: 2,
          inmueble: 'Centro de Justicia Penal Federal',
          jueces: [
            { siglas: 'JNEY', genero: 'M' },
            { siglas: 'RPF', genero: 'M' }
          ],
          magistrados: [],
          seguridad: [
            { cargo: 'OS', nombre: 'Joel Vázquez Reyes' },
            { cargo: 'OS', nombre: 'Abraham de Jesús García Cervantes' },
            { cargo: 'OC', nombre: 'Alina Arroyo Buelna' },
            { cargo: 'OC', nombre: 'Javier Herrera García' }
          ]
        },

        /* ---------------------------------------------------------------- */
        {
          id: 'hermosillo',
          nombre: 'Hermosillo',
          estado: 'Sonora',
          abrev: 'Sonora',
          salas: 4,
          inmueble: 'Centro de Justicia Penal Federal',
          jueces: [
            { siglas: 'KPHS', genero: 'F' },
            { siglas: 'TCG', genero: 'F' },
            { siglas: 'CAMV', genero: 'M' },
            { siglas: 'EAP', genero: 'M' },
            { siglas: 'EADV', genero: 'M' }
          ],
          magistrados: [],
          seguridad: [
            { cargo: 'JGS', nombre: 'Martin Enrique Ríos Lizárraga' },
            { cargo: 'OS', nombre: 'Juan Francisco Ortiz Ortiz' },
            { cargo: 'OS', nombre: 'Sergio Nájera Ruiz' },
            { cargo: 'OS', nombre: 'Enrique Navarro Trujillo' }
          ]
        },

        /* ---------------------------------------------------------------- */
        {
          id: 'chihuahua',
          nombre: 'Chihuahua',
          estado: 'Chihuahua',
          abrev: 'Chih.',
          salas: 3,
          inmueble: 'Centro de Justicia Penal Federal',
          jueces: [
            { siglas: 'CSPT', genero: 'F' },
            { siglas: 'SJLA', genero: 'F' },
            { siglas: 'RAAM', genero: 'M' },
            { siglas: 'EMPC', genero: 'M' }
          ],
          magistrados: [],
          seguridad: [
            { cargo: 'JGS', nombre: 'Lic. Edgar Marcelo Olivas Olivas' },
            { cargo: 'OS', nombre: 'Lic. Juan Rodríguez Sarmiento' },
            { cargo: 'OS', nombre: 'Daniel Saúl Cota Gaxiola' },
            { cargo: 'OC', nombre: 'Lic. Leslie Samantha Cruz González' }
          ]
        }

      ]
    }
  ],

  /* Catálogo global (se asume igual para todos los centros).
     Los primeros son los de uso frecuente; el resto es el catálogo del sistema, sin repetidos. */
  tiposAudiencia: [
    // Frecuentes (los que ya usaba la app)
    'Inicial con detenido',
    'Inicial con detenidos',
    'Continuación de audiencia inicial',
    'Inicial',
    'Intermedia',
    'Cierre de investigación',
    'Cierre de investigación complementaria',
    'Medida cautelar',
    'Modificación de medida cautelar',
    'Reapertura de la investigación',
    'Prórroga de plazo de investigación',
    'Juicio Oral',
    'Beneficio de Libertad',

    // Catálogo del sistema (orden alfabético)
    'Abreviado',
    'Acuerdo preparatorio',
    'Amonestación',
    'Aseguramiento de bienes',
    'Audiencia de controversia en materia de ejecución',
    'Audiencia General',
    'Auxilio judicial',
    'Competencia',
    'Cómputo de la pena',
    'Continuación',
    'Contrabando',
    'Control',
    'Controversia',
    'Controversia judicial',
    'Cumplimiento de la suspensión condicional del proceso',
    'Declaratoria de abandono',
    'Ejecución de pena',
    'Ejecución y cómputo de la pena',
    'Extradición',
    'Fallo',
    'Impugnación',
    'Impugnación de las determinaciones del ministerio público',
    'Incidente de ejecución respecto al cómputo de la pena SD',
    'Incidente de ejecución respecto al cómputo de la pena SM',
    'Incumplimiento de acuerdo reparatorio',
    'Individualización de sanciones',
    'Intermedia a Abreviado',
    'Juicio',
    'Lectura',
    'Libertad anticipada',
    'Libertad condicionada',
    'Orden de aprehensión',
    'Orden de Aprehensión Privada',
    'Orden Privada',
    'Posesión de hidrocarburos',
    'Pre Inscripción General',
    'Privada',
    'Procedimiento Abreviado',
    'Proceso simple',
    'Prórroga',
    'Prórroga de cierre de investigación',
    'Prueba Anticipada',
    'Ratificación de ingreso de una autoridad a lugar sin autorización judicial',
    'Reapertura de proceso suspendido',
    'Resolver la solicitud de extinción de la pena',
    'Resolver sobre beneficio de libertad condicionada',
    'Resolver sobre la revisión de las condiciones u obligaciones impuestas',
    'Revisión de medida cautelar',
    'Revisión de Suspensión',
    'RMC',
    'Sin Audiencia identificada',
    'Sobreseimiento',
    'Solicitud de inicio de procedimiento de ejecución',
    'Solicitud de traslado',
    'Suspensión condicional del proceso',
    'Técnica de Investigación',
    'Término SIPE',
    'Términos Reinicio de Investigación',
    'Verificación de la suspensión condicional del proceso',
    'Verificación del beneficio de condena condicional',
    'Verificación del cumplimiento de la condena condicional',
    'Vinculación a proceso'
  ],

  delitos: [
    // Frecuentes (sin punto final; la app lo agrega al reporte)
    'Portación de arma de fuego de uso exclusivo de la Fuerza Armada Permanente',
    'Portación de arma de fuego de uso exclusivo de la Fuerza Armada Permanente y Contra la Salud',
    'Contra la Salud',
    'En materia de Hidrocarburos',
    'Previsto en el CPF',
    'Portación de arma de fuego de uso exclusivo de la Fuerza Armada Permanente, cartuchos y cargadores',

    // Catálogo del sistema (orden alfabético, ortografía corregida)
    'Acopio de armas',
    'Afectación patrimonial',
    'Agrario',
    'Ambiental',
    'Atención Médica',
    'Cohecho',
    'Comercialización ilícita de hidrocarburos',
    'Contra la Biodiversidad',
    'Contra la dignidad humana (discriminación)',
    'Contrabando',
    'Daño ecológico',
    'Daños a CFE',
    'Defraudación Fiscal',
    'Defraudación fiscal equiparable',
    'Delincuencia Organizada',
    'Delito Electoral',
    'Delitos fiscales',
    'Depositaria infiel',
    'Despojo de vehículo oficial',
    'Ejercicio indebido de la actividad profesional',
    'Enriquecimiento Ilícito',
    'Falsificación de documentos oficiales',
    'Falsificación de identidad',
    'Fraude',
    'Homicidio Calificado',
    'Invasión a las vías de comunicación Federales',
    'Lesiones',
    'Mala Praxis',
    'Negativa legal de Acceso',
    'Negligencia médica',
    'Peculado',
    'Portación de arma de fuego de uso exclusivo',
    'Portación de arma de fuego de uso exclusivo del Ejército, Armada y Fuerza Aérea',
    'Portación de arma de fuego sin licencia',
    'Portación de arma de las reservadas para el uso exclusivo de la fuerza armada permanente',
    'Portación de inhibidor de señal',
    'Posesión de arma de fuego sin permiso',
    'Posesión de Cartuchos',
    'Posesión de cosa robada',
    'Posesión ilícita de arma de fuego',
    'Posesión ilícita de hidrocarburo',
    'Posesión ilícita de materia prima (madera)',
    'Posesión y almacenamiento ilícito de hidrocarburo',
    'Privación de la libertad',
    'Resistencia de particulares',
    'Responsabilidad administrativa',
    'Robo',
    'Robo armado',
    'Robo de agua en pozos subterráneos',
    'Robo de Hidrocarburos',
    'Robo de pertenencia',
    'Robo de tractocamión',
    'Robo en contra de Oficina Bancaria',
    'Robo vehículo',
    'Secuestro',
    'Secuestro exprés',
    'Sin conocimiento del delito',
    'Sustancias ilícitas',
    'Terrorismo',
    'Tortura',
    'Tráfico de personas',
    'Transporte de hidrocarburo',
    'Traslado de personas indocumentadas',
    'Uso de bien que pertenece a la nación',
    'Uso de datos públicos',
    'Uso de documentos falsos',
    'Uso de moneda o billetes falsos',
    'Uso indebido de atribuciones',
    'Uso y aprovechamiento de energía eléctrica',
    'Violación a la ley de migración',
    'Violación a la Ley Federal de Armas de Fuego y Explosivos',
    'Violación a la propiedad Industrial',
    'Violación a la Propiedad Intelectual'
  ]
};
