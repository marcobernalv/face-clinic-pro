export type Treatment = {
  slug: string;
  name: string;
  intro: string;
  paragraphs: string[];
  video?: string;
  /** Número de contenedores de video vacíos (placeholders) a renderizar */
  placeholderSlots?: number;
};

export const treatments: Treatment[] = [
  {
    slug: "implante-dental",
    name: "Implante Dental",
    intro: "Solución moderna, segura y duradera para reemplazar piezas dentales de forma fija.",
    video: "/videos/VIDEO_IMPLANTES.MP4",
    placeholderSlots: 1,
    paragraphs: [
      "La pérdida de uno o varios dientes puede afectar tanto la apariencia como la funcionalidad de la boca. Los implantes dentales representan una solución moderna, segura y duradera para reemplazar piezas dentales de forma fija.",
      "Consisten en la colocación de un tornillo de titanio dentro del hueso maxilar o mandibular, el cual actúa como una raíz artificial. Sobre esta base se coloca una corona diseñada para imitar la forma, el color y la función de un diente natural.",
      "Entre sus principales beneficios se encuentran la mejora estética, la recuperación de la masticación y el habla, así como la conservación del hueso. Además, no es necesario desgastar dientes adyacentes, lo que los convierte en una opción más conservadora.",
    ],
  },
  {
    slug: "cirugia-ortognatica",
    name: "Cirugía Ortognática",
    intro: "Corrige alteraciones en la posición de los maxilares para mejorar función y estética facial.",
    videos: 
      "/videos/VIDEO_ORTOGNATICA_1.MP4",
      "/videos/VIDEO_ORTOGNATICA_2.MP4",
      "/videos/VIDEO_ORTOGNATICA_3.MP4",
    placeholderSlots: 3,
    paragraphs: [
      "La cirugía ortognática es un procedimiento quirúrgico indicado para corregir alteraciones en la posición de los maxilares. Estas condiciones pueden provocar problemas al morder, hablar o incluso al respirar.",
      "Este tratamiento permite mejorar tanto la función como la estética facial, logrando una adecuada alineación de los maxilares. Generalmente se complementa con tratamiento de ortodoncia para obtener resultados óptimos y estables a largo plazo.",
    ],
  },
  {
    slug: "cirugia-menton",
    name: "Cirugía de Mentón",
    intro: "Procedimiento de mentoplastia para armonizar el perfil facial y mejorar la estética del rostro.",
    videos: 
      "/videos/VIDEO_MENTON_1.MP4",
      "/videos/VIDEO_MENTON_2.MP4",
    placeholderSlots: 2,
    paragraphs: [
      "La cirugía de mentón, o mentoplastia, es un procedimiento quirúrgico que permite modificar la posición y el tamaño del mentón para lograr una mayor armonía facial.",
      "Está indicada en pacientes con mentón retraído, prominente o asimétrico, y puede realizarse de forma aislada o combinada con cirugía ortognática para resultados integrales.",
      "El tratamiento mejora tanto la estética del perfil como la proporción del rostro, brindando resultados naturales y duraderos.",
    ],
  },
  {
    slug: "atm",
    name: "Trastornos de ATM",
    intro: "Diagnóstico y tratamiento integral de los trastornos de la articulación temporomandibular.",
    video: "/videos/VIDEO_ATM.MP4",
    paragraphs: [
      "Los trastornos de la articulación temporomandibular (ATM) afectan la articulación que conecta la mandíbula con el cráneo, generando dolor, chasquidos, limitación al abrir la boca o dolores de cabeza frecuentes.",
      "Su tratamiento puede incluir terapias conservadoras como férulas oclusales, fisioterapia y manejo del dolor, hasta procedimientos quirúrgicos especializados en casos avanzados.",
      "Una valoración temprana permite mejorar la calidad de vida del paciente y prevenir complicaciones a largo plazo.",
    ],
  },
  {
    slug: "apnea-del-sueno",
    name: "Apnea del Sueño",
    intro: "Tratamiento quirúrgico especializado para mejorar la respiración y la calidad del sueño.",
    video: "/videos/VIDEO_APNEA.MP4",
    paragraphs: [
      "La apnea obstructiva del sueño es una condición en la que la respiración se interrumpe repetidamente durante el sueño, afectando el descanso y la salud general del paciente.",
      "Desde la cirugía maxilofacial, el tratamiento puede incluir el avance maxilomandibular, un procedimiento que aumenta el espacio de la vía aérea y reduce significativamente los episodios de apnea.",
      "El abordaje correcto mejora la calidad del sueño, disminuye el ronquido y reduce riesgos cardiovasculares asociados a esta condición.",
    ],
  },
  {
    slug: "diente-retenido",
    name: "Diente Retenido",
    intro: "Atención especializada para dientes que no logran salir de manera adecuada.",
    paragraphs: [
      "Un diente retenido es aquel que no logra salir de manera adecuada y permanece dentro del hueso o encía. Esta situación es frecuente en las muelas del juicio, aunque también puede presentarse en otros dientes.",
      "Puede ocasionar dolor, infecciones o afectar la posición de las piezas dentales cercanas. En muchos casos, se recomienda su extracción mediante un procedimiento quirúrgico para prevenir complicaciones.",
    ],
  },
  {
    slug: "cirugia-terceros-molares",
    name: "Cirugía de Terceros Molares",
    intro: "Extracción profesional de las muelas del juicio para prevenir complicaciones.",
    video: "/videos/VIDEO_TERCEROS_MOLARES.MP4",
    paragraphs: [
      "La extracción de terceros molares, conocidos comúnmente como muelas del juicio, es uno de los procedimientos más habituales en la cirugía maxilofacial.",
      "Se realiza cuando estos dientes no tienen suficiente espacio para erupcionar correctamente, presentan mala posición o generan molestias, infecciones o daño a otros dientes. Su extracción permite evitar problemas futuros y mantener una adecuada salud bucal.",
    ],
  },
  {
    slug: "injerto-de-hueso",
    name: "Injerto de Hueso",
    intro: "Regeneración ósea para preparar la zona antes de colocar implantes dentales.",
    video: "/videos/VIDEO_INJERTO_HUESO.MP4",
    placeholderSlots: 1,
    paragraphs: [
      "El injerto de hueso es un procedimiento quirúrgico que permite recuperar el volumen óseo perdido en el maxilar o la mandíbula, generalmente como preparación previa a la colocación de implantes dentales.",
      "Se utilizan materiales biocompatibles que estimulan la formación de hueso nuevo, garantizando una base sólida y estable para los futuros implantes.",
      "Este tratamiento amplía las posibilidades de rehabilitación en pacientes que han perdido hueso debido a extracciones, traumatismos o enfermedad periodontal.",
    ],
  },
  {
    slug: "patologia-oral",
    name: "Patología Oral",
    intro: "Diagnóstico y tratamiento de enfermedades que afectan la cavidad bucal.",
    paragraphs: [
      "La patología oral se encarga del diagnóstico y tratamiento de diversas enfermedades que afectan la cavidad bucal, incluyendo lesiones, infecciones, quistes y tumores.",
      "Para un diagnóstico preciso, en algunos casos es necesario realizar estudios como biopsias. Esto permite identificar correctamente la condición y establecer el tratamiento más adecuado de manera oportuna.",
    ],
  },
  {
    slug: "trauma-facial",
    name: "Trauma Facial",
    intro: "Atención de lesiones por accidentes, golpes o caídas en cara, mandíbula y dientes.",
    paragraphs: [
      "El trauma facial comprende lesiones ocasionadas por accidentes, golpes o caídas que afectan estructuras como la cara, mandíbula y dientes.",
      "Estas lesiones pueden incluir fracturas, heridas o desplazamientos óseos, y requieren atención especializada para recuperar tanto la función como la estética facial. El tratamiento dependerá de la gravedad de cada caso.",
    ],
  },
  {
    slug: "frenilectomia-apicectomia",
    name: "Frenilectomía y Apicectomía",
    intro: "Procedimientos quirúrgicos precisos para frenillos e infecciones radiculares persistentes.",
    paragraphs: [
      "La frenilectomía es un procedimiento que consiste en la eliminación o modificación del frenillo, cuando este provoca limitaciones en el habla, movilidad o en la posición de los dientes.",
      "La apicectomía, por su parte, es una cirugía que se realiza en la punta de la raíz del diente para eliminar infecciones persistentes, especialmente cuando un tratamiento de conducto no ha logrado resolver el problema.",
    ],
  },
];
