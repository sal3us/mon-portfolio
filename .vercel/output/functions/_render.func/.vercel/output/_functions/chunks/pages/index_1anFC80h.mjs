import { e as createComponent, r as renderTemplate, m as maybeRenderHead, g as addAttribute, h as createAstro, i as renderComponent, j as renderHead } from '../astro_BXvExnak.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';
/* empty css                          */
import { $ as $$Image } from './generic_CM-gt6nC.mjs';

const $$Header = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<header class="header"> <h1 id="inicio">Bienvenue sur mon Portfolio</h1> <!-- Texte modifié --> <nav class="nav"> <ul class="ul-nav"> <a href="#inicio"> <li class="li-nav">Accueil</li> <!-- Texte modifié --> </a> <a href="#proyectos"> <li class="li-nav">Mes Projets</li> <!-- Texte modifié --> </a> <a href="#skills"> <li class="li-nav">Compétences</li> </a> <a href="#contacto"> <li class="li-nav">Me Contacter</li> <!-- Texte modifié --> </a> </ul> </nav> <div class="container-bnt-menu"> <div class="btn-menu"> <span class="linea-menu" id="linea1"></span> <span class="linea-menu" id="linea2"></span> <span class="linea-menu" id="linea3"></span> </div> </div> <div class="menu-drop"></div>  </header> `;
}, "C:/xampp/htdocs/Portafolio-main/Portafolio-main/src/components/header/Header.astro", void 0);

const skills = [
  { title: "HTML", icon: "html" },
  { title: "CSS", icon: "css" },
  { title: "JavaScript", icon: "javaScript" },
  { title: "TypeScript", icon: "typeScript" },
  { title: "React.js", icon: "react" },
  { title: "Next.js", icon: "nextjs" },
  { title: "Tailwind CSS", icon: "tailwind" },
  { title: "Redux.js", icon: "redux" },
  { title: "Node.js", icon: "nodejs" },
  { title: "Laravel", icon: "laravel" },
  { title: "MongoDB", icon: "mongodb" },
  { title: "Git & GitHub", icon: "git" },
  { title: "WordPress", icon: "wordpress" },
  { title: "SQL", icon: "sql" }, // Ajout de SQL
];


const projects = [
  {
    title: "Rédaction Raffinée",
    img: "/img/redaction.jpeg",
    description: "Site de rédaction d’articles proposant un contenu riche et une plume raffinée.",
    link: "https://xn--rdactionraffine-bnbn.com/"
  },
  {
    title: "seotechservice",
    img: "/img/seo-tech.jpeg",
    description: "Site vitrine présentant les services SEO de manière efficace.",
    link: "https://seotechservice.net/"
  },
  {
    title: "top5review-tech",
    img: "/img/Blog.jpeg",
    description: "Blog de technologie proposant des avis et analyses sur les dernières tendances tech.",
    link: "https://top5review-tech.com/"
  },
  {
    title: "ecrinduregard",
    img: "/img/ecran.jpeg",
    description: "Site d’opticien offrant une expérience de vision claire et une interface soignée.",
    link: "https://ecrinduregard.com/"
  },
  {
    title: "rankfirst-agency",
    img: "/img/Rank.jpeg",
    description: "Site informatif présentant l'agence et ses partenariats majeurs pour une expérience publicitaire inégalée.",
    link: "https://rankfirst-agency.com/"
  }
];

const $$Astro$1 = createAstro();
const $$Project = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Project;
  const { title, img, description, link } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<li class="li-project" data-astro-cid-zokcuhmf> <img${addAttribute(img, "src")}${addAttribute(title, "alt")} loading="lazy" data-astro-cid-zokcuhmf> <p class="title-project" data-astro-cid-zokcuhmf>${title}</p> <p class="description-project" data-astro-cid-zokcuhmf>${description}</p> <div class="container-link-project" data-astro-cid-zokcuhmf> <a${addAttribute(link, "href")} target="_blank" data-astro-cid-zokcuhmf>Voir plus</a> </div> </li> `;
}, "C:/xampp/htdocs/Portafolio-main/Portafolio-main/src/components/main/projects/Project.astro", void 0);

const $$Projects = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="section-projects" data-astro-cid-pmnxldje> <div class="linear-grandient-1" data-astro-cid-pmnxldje></div> <div class="container-projects" data-astro-cid-pmnxldje> <h2 class="title-projects" id="projets" data-astro-cid-pmnxldje>Mes Projets</h2> <div data-astro-cid-pmnxldje> <ul class="ul-projects" data-astro-cid-pmnxldje> ${projects.map(({ description, img, link, title }) => renderTemplate`${renderComponent($$result, "Project", $$Project, { "img": img, "description": description, "link": link, "title": title, "data-astro-cid-pmnxldje": true })}`)} </ul> </div> </div> </section> `;
}, "C:/xampp/htdocs/Portafolio-main/Portafolio-main/src/components/main/projects/Projects.astro", void 0);

const $$IconHtml = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<i> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 452 520" width="45px" height="45px"> <path fill="#e34f26" d="M41 460L0 0h451l-41 460-185 52"></path> <path fill="#ef652a" d="M226 472l149-41 35-394H226"></path> <path fill="#ecedee" d="M226 208h-75l-5-58h80V94H84l15 171h127zm0 147l-64-17-4-45h-56l7 89 117 32z"></path> <path fill="#fff" d="M226 265h69l-7 73-62 17v59l115-32 16-174H226zm0-171v56h136l5-56z"></path> </svg> </i>`;
}, "C:/xampp/htdocs/Portafolio-main/Portafolio-main/src/icons/IconHtml.astro", void 0);

const $$IconCss = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<i> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 452 520" width="45px" height="45px"> <path fill="#0c73b8" d="M41 460L0 0h451l-41 460-185 52"></path> <path fill="#30a9dc" d="M226 472l149-41 35-394H226"></path> <path fill="#ecedee" d="M226 208H94l5 57h127zm0-114H84l5 56h137zm0 261l-124-33 7 60 117 32z"></path> <path fill="#fff" d="M226 265h69l-7 73-62 17v59l115-32 26-288H226v56h80l-6 58h-74z"></path> </svg> </i>`;
}, "C:/xampp/htdocs/Portafolio-main/Portafolio-main/src/icons/IconCss.astro", void 0);

const $$IconJavaScript = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<i> <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" viewBox="0 0 1052 1052"><path fill="#f0db4f" d="M0 0h1052v1052H0z"></path><path d="M965.9 801.1c-7.7-48-39-88.3-131.7-125.9-32.2-14.8-68.1-25.399-78.8-49.8-3.8-14.2-4.3-22.2-1.9-30.8 6.9-27.9 40.2-36.6 66.6-28.6 17 5.7 33.1 18.801 42.8 39.7 45.4-29.399 45.3-29.2 77-49.399-11.6-18-17.8-26.301-25.4-34-27.3-30.5-64.5-46.2-124-45-10.3 1.3-20.699 2.699-31 4-29.699 7.5-58 23.1-74.6 44-49.8 56.5-35.6 155.399 25 196.1 59.7 44.8 147.4 55 158.6 96.9 10.9 51.3-37.699 67.899-86 62-35.6-7.4-55.399-25.5-76.8-58.4-39.399 22.8-39.399 22.8-79.899 46.1 9.6 21 19.699 30.5 35.8 48.7 76.2 77.3 266.899 73.5 301.1-43.5 1.399-4.001 10.6-30.801 3.199-72.101zm-394-317.6h-98.4c0 85-.399 169.4-.399 254.4 0 54.1 2.8 103.7-6 118.9-14.4 29.899-51.7 26.2-68.7 20.399-17.3-8.5-26.1-20.6-36.3-37.699-2.8-4.9-4.9-8.7-5.601-9-26.699 16.3-53.3 32.699-80 49 13.301 27.3 32.9 51 58 66.399 37.5 22.5 87.9 29.4 140.601 17.3 34.3-10 63.899-30.699 79.399-62.199 22.4-41.3 17.6-91.3 17.4-146.6.5-90.2 0-180.4 0-270.9z" fill="#323330"></path></svg> </i>`;
}, "C:/xampp/htdocs/Portafolio-main/Portafolio-main/src/icons/IconJavaScript.astro", void 0);

const $$IconTypeScript = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<svg width="45px" height="45px" viewBox="0 0 400 400" id="Layer_1" xmlns="http://www.w3.org/2000/svg"><style>.st0{fill:#007acc}.st1{fill:#fff}</style><path class="st0" d="M0 200V0h400v400H0"></path><path class="st1" d="M87.7 200.7V217h52v148h36.9V217h52v-16c0-9 0-16.3-.4-16.5 0-.3-31.7-.4-70.2-.4l-70 .3v16.4l-.3-.1zM321.4 184c10.2 2.4 18 7 25 14.3 3.7 4 9.2 11 9.6 12.8 0 .6-17.3 12.3-27.8 18.8-.4.3-2-1.4-3.6-4-5.2-7.4-10.5-10.6-18.8-11.2-12-.8-20 5.5-20 16 0 3.2.6 5 1.8 7.6 2.7 5.5 7.7 8.8 23.2 15.6 28.6 12.3 41 20.4 48.5 32 8.5 13 10.4 33.4 4.7 48.7-6.4 16.7-22 28-44.3 31.7-7 1.2-23 1-30.5-.3-16-3-31.3-11-40.7-21.3-3.7-4-10.8-14.7-10.4-15.4l3.8-2.4 15-8.7 11.3-6.6 2.6 3.5c3.3 5.2 10.7 12.2 15 14.6 13 6.7 30.4 5.8 39-2 3.7-3.4 5.3-7 5.3-12 0-4.6-.7-6.7-3-10.2-3.2-4.4-9.6-8-27.6-16-20.7-8.8-29.5-14.4-37.7-23-4.7-5.2-9-13.3-11-20-1.5-5.8-2-20-.6-25.7 4.3-20 19.4-34 41-38 7-1.4 23.5-.8 30.4 1l-.2.2z"></path></svg>`;
}, "C:/xampp/htdocs/Portafolio-main/Portafolio-main/src/icons/IconTypeScript.astro", void 0);

const $$IconReact = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<i> <svg viewBox="0 0 256 228" width="45" height="45" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid"><path d="M210.483 73.824a171.49 171.49 0 0 0-8.24-2.597c.465-1.9.893-3.777 1.273-5.621 6.238-30.281 2.16-54.676-11.769-62.708-13.355-7.7-35.196.329-57.254 19.526a171.23 171.23 0 0 0-6.375 5.848 155.866 155.866 0 0 0-4.241-3.917C100.759 3.829 77.587-4.822 63.673 3.233 50.33 10.957 46.379 33.89 51.995 62.588a170.974 170.974 0 0 0 1.892 8.48c-3.28.932-6.445 1.924-9.474 2.98C17.309 83.498 0 98.307 0 113.668c0 15.865 18.582 31.778 46.812 41.427a145.52 145.52 0 0 0 6.921 2.165 167.467 167.467 0 0 0-2.01 9.138c-5.354 28.2-1.173 50.591 12.134 58.266 13.744 7.926 36.812-.22 59.273-19.855a145.567 145.567 0 0 0 5.342-4.923 168.064 168.064 0 0 0 6.92 6.314c21.758 18.722 43.246 26.282 56.54 18.586 13.731-7.949 18.194-32.003 12.4-61.268a145.016 145.016 0 0 0-1.535-6.842c1.62-.48 3.21-.974 4.76-1.488 29.348-9.723 48.443-25.443 48.443-41.52 0-15.417-17.868-30.326-45.517-39.844Zm-6.365 70.984c-1.4.463-2.836.91-4.3 1.345-3.24-10.257-7.612-21.163-12.963-32.432 5.106-11 9.31-21.767 12.459-31.957 2.619.758 5.16 1.557 7.61 2.4 23.69 8.156 38.14 20.213 38.14 29.504 0 9.896-15.606 22.743-40.946 31.14Zm-10.514 20.834c2.562 12.94 2.927 24.64 1.23 33.787-1.524 8.219-4.59 13.698-8.382 15.893-8.067 4.67-25.32-1.4-43.927-17.412a156.726 156.726 0 0 1-6.437-5.87c7.214-7.889 14.423-17.06 21.459-27.246 12.376-1.098 24.068-2.894 34.671-5.345.522 2.107.986 4.173 1.386 6.193ZM87.276 214.515c-7.882 2.783-14.16 2.863-17.955.675-8.075-4.657-11.432-22.636-6.853-46.752a156.923 156.923 0 0 1 1.869-8.499c10.486 2.32 22.093 3.988 34.498 4.994 7.084 9.967 14.501 19.128 21.976 27.15a134.668 134.668 0 0 1-4.877 4.492c-9.933 8.682-19.886 14.842-28.658 17.94ZM50.35 144.747c-12.483-4.267-22.792-9.812-29.858-15.863-6.35-5.437-9.555-10.836-9.555-15.216 0-9.322 13.897-21.212 37.076-29.293 2.813-.98 5.757-1.905 8.812-2.773 3.204 10.42 7.406 21.315 12.477 32.332-5.137 11.18-9.399 22.249-12.634 32.792a134.718 134.718 0 0 1-6.318-1.979Zm12.378-84.26c-4.811-24.587-1.616-43.134 6.425-47.789 8.564-4.958 27.502 2.111 47.463 19.835a144.318 144.318 0 0 1 3.841 3.545c-7.438 7.987-14.787 17.08-21.808 26.988-12.04 1.116-23.565 2.908-34.161 5.309a160.342 160.342 0 0 1-1.76-7.887Zm110.427 27.268a347.8 347.8 0 0 0-7.785-12.803c8.168 1.033 15.994 2.404 23.343 4.08-2.206 7.072-4.956 14.465-8.193 22.045a381.151 381.151 0 0 0-7.365-13.322Zm-45.032-43.861c5.044 5.465 10.096 11.566 15.065 18.186a322.04 322.04 0 0 0-30.257-.006c4.974-6.559 10.069-12.652 15.192-18.18ZM82.802 87.83a323.167 323.167 0 0 0-7.227 13.238c-3.184-7.553-5.909-14.98-8.134-22.152 7.304-1.634 15.093-2.97 23.209-3.984a321.524 321.524 0 0 0-7.848 12.897Zm8.081 65.352c-8.385-.936-16.291-2.203-23.593-3.793 2.26-7.3 5.045-14.885 8.298-22.6a321.187 321.187 0 0 0 7.257 13.246c2.594 4.48 5.28 8.868 8.038 13.147Zm37.542 31.03c-5.184-5.592-10.354-11.779-15.403-18.433 4.902.192 9.899.29 14.978.29 5.218 0 10.376-.117 15.453-.343-4.985 6.774-10.018 12.97-15.028 18.486Zm52.198-57.817c3.422 7.8 6.306 15.345 8.596 22.52-7.422 1.694-15.436 3.058-23.88 4.071a382.417 382.417 0 0 0 7.859-13.026 347.403 347.403 0 0 0 7.425-13.565Zm-16.898 8.101a358.557 358.557 0 0 1-12.281 19.815 329.4 329.4 0 0 1-23.444.823c-7.967 0-15.716-.248-23.178-.732a310.202 310.202 0 0 1-12.513-19.846h.001a307.41 307.41 0 0 1-10.923-20.627 310.278 310.278 0 0 1 10.89-20.637l-.001.001a307.318 307.318 0 0 1 12.413-19.761c7.613-.576 15.42-.876 23.31-.876H128c7.926 0 15.743.303 23.354.883a329.357 329.357 0 0 1 12.335 19.695 358.489 358.489 0 0 1 11.036 20.54 329.472 329.472 0 0 1-11 20.722Zm22.56-122.124c8.572 4.944 11.906 24.881 6.52 51.026-.344 1.668-.73 3.367-1.15 5.09-10.622-2.452-22.155-4.275-34.23-5.408-7.034-10.017-14.323-19.124-21.64-27.008a160.789 160.789 0 0 1 5.888-5.4c18.9-16.447 36.564-22.941 44.612-18.3ZM128 90.808c12.625 0 22.86 10.235 22.86 22.86s-10.235 22.86-22.86 22.86-22.86-10.235-22.86-22.86 10.235-22.86 22.86-22.86Z" fill="#00D8FF"></path></svg> </i>`;
}, "C:/xampp/htdocs/Portafolio-main/Portafolio-main/src/icons/IconReact.astro", void 0);

const $$IconNextjs = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<i> <svg width="45" height="45" viewBox="0 0 180 180" fill="none" xmlns="http://www.w3.org/2000/svg"> <mask id="mask0_408_139" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="180" height="180"> <circle cx="90" cy="90" r="90" fill="black"></circle> </mask> <g mask="url(#mask0_408_139)"> <circle cx="90" cy="90" r="87" fill="black" stroke="white" stroke-width="6"></circle> <path d="M149.508 157.52L69.142 54H54V125.97H66.1136V69.3836L139.999 164.845C143.333 162.614 146.509 160.165 149.508 157.52Z" fill="url(#paint0_linear_408_139)"></path> <rect x="115" y="54" width="12" height="72" fill="url(#paint1_linear_408_139)"></rect> </g> <defs> <linearGradient id="paint0_linear_408_139" x1="109" y1="116.5" x2="144.5" y2="160.5" gradientUnits="userSpaceOnUse"> <stop stop-color="white"></stop> <stop offset="1" stop-color="white" stop-opacity="0"></stop> </linearGradient> <linearGradient id="paint1_linear_408_139" x1="121" y1="54" x2="120.799" y2="106.875" gradientUnits="userSpaceOnUse"> <stop stop-color="white"></stop> <stop offset="1" stop-color="white" stop-opacity="0"></stop> </linearGradient> </defs> </svg> </i>`;
}, "C:/xampp/htdocs/Portafolio-main/Portafolio-main/src/icons/IconNextjs.astro", void 0);

const $$IconTailwind = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<i> <svg viewBox="0 0 256 154" width="45" height="45" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid"> <defs><linearGradient x1="-2.778%" y1="32%" x2="100%" y2="67.556%" id="gradient"> <stop stop-color="#2298BD" offset="0%"></stop> <stop stop-color="#0ED7B5" offset="100%"></stop> </linearGradient></defs> <path d="M128 0C93.867 0 72.533 17.067 64 51.2 76.8 34.133 91.733 27.733 108.8 32c9.737 2.434 16.697 9.499 24.401 17.318C145.751 62.057 160.275 76.8 192 76.8c34.133 0 55.467-17.067 64-51.2-12.8 17.067-27.733 23.467-44.8 19.2-9.737-2.434-16.697-9.499-24.401-17.318C174.249 14.743 159.725 0 128 0ZM64 76.8C29.867 76.8 8.533 93.867 0 128c12.8-17.067 27.733-23.467 44.8-19.2 9.737 2.434 16.697 9.499 24.401 17.318C81.751 138.857 96.275 153.6 128 153.6c34.133 0 55.467-17.067 64-51.2-12.8 17.067-27.733 23.467-44.8 19.2-9.737-2.434-16.697-9.499-24.401-17.318C110.249 91.543 95.725 76.8 64 76.8Z" fill="url(#gradient)"></path></svg> </i>`;
}, "C:/xampp/htdocs/Portafolio-main/Portafolio-main/src/icons/IconTailwind.astro", void 0);

const $$IconRedux = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`<!--?xml version="1.0" encoding="utf-8"?--><!-- Uploaded to: SVG Repo, www.svgrepo.com, Generator: SVG Repo Mixer Tools -->${maybeRenderHead()}<svg width="45px" height="45px" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M21.7868 21.556C22.8939 21.4433 23.7338 20.505 23.6956 19.3789C23.6575 18.253 22.703 17.3522 21.5577 17.3522H21.4814C20.2978 17.3897 19.3817 18.3656 19.4199 19.5291C19.4581 20.0921 19.6871 20.58 20.0307 20.9178C18.7327 23.4326 16.7475 25.2717 13.7698 26.8106C11.7464 27.8615 9.6468 28.2369 7.54715 27.9742C5.82918 27.749 4.49301 26.9984 3.65301 25.7596C2.43144 23.9205 2.31695 21.9312 3.34773 19.942C4.07312 18.5157 5.21828 17.4647 5.94367 16.9392C5.79098 16.4513 5.56187 15.6256 5.44738 15.0251C-0.0882044 18.9661 0.484491 24.2959 2.16426 26.8106C3.42402 28.6873 5.98187 29.8509 8.80691 29.8509C9.57039 29.8509 10.3339 29.7757 11.0975 29.5882C15.9841 28.6498 19.6872 25.7972 21.7868 21.556ZM28.5059 16.9018C25.6045 13.5613 21.3287 11.7222 16.4421 11.7222H15.8314C15.4878 11.0466 14.7624 10.5961 13.9607 10.5961H13.8843C12.7009 10.6337 11.7848 11.6095 11.8229 12.7731C11.8611 13.8991 12.8154 14.7999 13.9607 14.7999H14.037C14.8769 14.7624 15.6023 14.2369 15.9077 13.5237H16.5948C19.4963 13.5237 22.2449 14.3494 24.7265 15.9634C26.6352 17.202 28.0096 18.816 28.7731 20.7677C29.4221 22.3441 29.3839 23.883 28.6967 25.1967C27.6278 27.1859 25.8336 28.2744 23.4666 28.2744C21.9395 28.2744 20.4889 27.824 19.7253 27.4862C19.3054 27.8615 18.5418 28.462 18.0073 28.8375C19.649 29.5881 21.3287 30.001 22.9321 30.001C26.597 30.001 29.3076 28.0116 30.3384 26.0224C31.4454 23.8454 31.369 20.0921 28.5059 16.9018ZM9.1123 22.1939C9.15051 23.3199 10.1049 24.2206 11.2502 24.2206H11.3266C12.51 24.1832 13.4262 23.2073 13.388 22.0438C13.3499 20.9177 12.3954 20.017 11.2502 20.017H11.1739C11.0975 20.017 10.9829 20.017 10.9067 20.0544C9.3414 17.5022 8.69242 14.7248 8.92152 11.7221C9.0741 9.47006 9.83769 7.51828 11.1739 5.9043C12.2809 4.51555 14.4188 3.83996 15.8696 3.80252C19.9162 3.7274 21.634 8.68179 21.7486 10.6711C22.2449 10.7837 23.0848 11.0465 23.6575 11.2342C23.1993 5.15382 19.3817 2.00098 15.7169 2.00098C12.2809 2.00098 9.1123 4.44067 7.85242 8.04387C6.09637 12.8481 7.24164 17.4647 9.37949 21.1055C9.18871 21.3682 9.0741 21.7811 9.1123 22.194V22.1939Z" fill="#764ABC"></path> </svg>`;
}, "C:/xampp/htdocs/Portafolio-main/Portafolio-main/src/icons/IconRedux.astro", void 0);

const $$IconNodeJs = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<i> <svg viewBox="0 0 256 292" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="45" height="45"><defs><linearGradient id="a" x1="68.188%" x2="27.823%" y1="17.487%" y2="89.755%"><stop offset="0%" stop-color="#41873F"></stop><stop offset="32.88%" stop-color="#418B3D"></stop><stop offset="63.52%" stop-color="#419637"></stop><stop offset="93.19%" stop-color="#3FA92D"></stop><stop offset="100%" stop-color="#3FAE2A"></stop></linearGradient><linearGradient id="c" x1="43.277%" x2="159.245%" y1="55.169%" y2="-18.306%"><stop offset="13.76%" stop-color="#41873F"></stop><stop offset="40.32%" stop-color="#54A044"></stop><stop offset="71.36%" stop-color="#66B848"></stop><stop offset="90.81%" stop-color="#6CC04A"></stop></linearGradient><linearGradient id="f" x1="-4.389%" x2="101.499%" y1="49.997%" y2="49.997%"><stop offset="9.192%" stop-color="#6CC04A"></stop><stop offset="28.64%" stop-color="#66B848"></stop><stop offset="59.68%" stop-color="#54A044"></stop><stop offset="86.24%" stop-color="#41873F"></stop></linearGradient><path id="b" d="M134.923 1.832c-4.344-2.443-9.502-2.443-13.846 0L6.787 67.801C2.443 70.244 0 74.859 0 79.745v132.208c0 4.887 2.715 9.502 6.787 11.945l114.29 65.968c4.344 2.444 9.502 2.444 13.846 0l114.29-65.968c4.344-2.443 6.787-7.058 6.787-11.945V79.745c0-4.886-2.715-9.501-6.787-11.944L134.923 1.832Z"></path><path id="e" d="M134.923 1.832c-4.344-2.443-9.502-2.443-13.846 0L6.787 67.801C2.443 70.244 0 74.859 0 79.745v132.208c0 4.887 2.715 9.502 6.787 11.945l114.29 65.968c4.344 2.444 9.502 2.444 13.846 0l114.29-65.968c4.344-2.443 6.787-7.058 6.787-11.945V79.745c0-4.886-2.715-9.501-6.787-11.944L134.923 1.832Z"></path></defs><path fill="url(#a)" d="M134.923 1.832c-4.344-2.443-9.502-2.443-13.846 0L6.787 67.801C2.443 70.244 0 74.859 0 79.745v132.208c0 4.887 2.715 9.502 6.787 11.945l114.29 65.968c4.344 2.444 9.502 2.444 13.846 0l114.29-65.968c4.344-2.443 6.787-7.058 6.787-11.945V79.745c0-4.886-2.715-9.501-6.787-11.944L134.923 1.832Z"></path><mask id="d" fill="#fff"><use xlink:href="#b"></use></mask><path fill="url(#c)" d="M249.485 67.8 134.65 1.833c-1.086-.542-2.443-1.085-3.529-1.357L2.443 220.912c1.086 1.357 2.444 2.443 3.8 3.258l114.834 65.968c3.258 1.9 7.059 2.443 10.588 1.357L252.47 70.515c-.815-1.086-1.9-1.9-2.986-2.714Z" mask="url(#d)"></path><mask id="g" fill="#fff"><use xlink:href="#e"></use></mask><path fill="url(#f)" d="M249.756 223.898c3.258-1.9 5.701-5.158 6.787-8.687L130.579.204c-3.258-.543-6.787-.272-9.773 1.628L6.786 67.53l122.979 224.238c1.628-.272 3.529-.815 5.158-1.63l114.833-66.239Z" mask="url(#g)"></path></svg> </i>`;
}, "C:/xampp/htdocs/Portafolio-main/Portafolio-main/src/icons/IconNodeJs.astro", void 0);

const $$IconLaravel = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<i> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="45px" height="45px"> <path fill="#F05340" d="M504.4,115.83a5.72,5.72,0,0,0-.28-.68,8.52,8.52,0,0,0-.53-1.25,6,6,0,0,0-.54-.71,9.36,9.36,0,0,0-.72-.94c-.23-.22-.52-.4-.77-.6a8.84,8.84,0,0,0-.9-.68L404.4,55.55a8,8,0,0,0-8,0L300.12,111h0a8.07,8.07,0,0,0-.88.69,7.68,7.68,0,0,0-.78.6,8.23,8.23,0,0,0-.72.93c-.17.24-.39.45-.54.71a9.7,9.7,0,0,0-.52,1.25c-.08.23-.21.44-.28.68a8.08,8.08,0,0,0-.28,2.08V223.18l-80.22,46.19V63.44a7.8,7.8,0,0,0-.28-2.09c-.06-.24-.2-.45-.28-.68a8.35,8.35,0,0,0-.52-1.24c-.14-.26-.37-.47-.54-.72a9.36,9.36,0,0,0-.72-.94,9.46,9.46,0,0,0-.78-.6,9.8,9.8,0,0,0-.88-.68h0L115.61,1.07a8,8,0,0,0-8,0L11.34,56.49h0a6.52,6.52,0,0,0-.88.69,7.81,7.81,0,0,0-.79.6,8.15,8.15,0,0,0-.71.93c-.18.25-.4.46-.55.72a7.88,7.88,0,0,0-.51,1.24,6.46,6.46,0,0,0-.29.67,8.18,8.18,0,0,0-.28,2.1v329.7a8,8,0,0,0,4,6.95l192.5,110.84a8.83,8.83,0,0,0,1.33.54c.21.08.41.2.63.26a7.92,7.92,0,0,0,4.1,0c.2-.05.37-.16.55-.22a8.6,8.6,0,0,0,1.4-.58L404.4,400.09a8,8,0,0,0,4-6.95V287.88l92.24-53.11a8,8,0,0,0,4-7V117.92A8.63,8.63,0,0,0,504.4,115.83ZM111.6,17.28h0l80.19,46.15-80.2,46.18L31.41,63.44Zm88.25,60V278.6l-46.53,26.79-33.69,19.4V123.5l46.53-26.79Zm0,412.78L23.37,388.5V77.32L57.06,96.7l46.52,26.8V338.68a6.94,6.94,0,0,0,.12.9,8,8,0,0,0,.16,1.18h0a5.92,5.92,0,0,0,.38.9,6.38,6.38,0,0,0,.42,1v0a8.54,8.54,0,0,0,.6.78,7.62,7.62,0,0,0,.66.84l0,0c.23.22.52.38.77.58a8.93,8.93,0,0,0,.86.66l0,0,0,0,92.19,52.18Zm8-106.17-80.06-45.32,84.09-48.41,92.26-53.11,80.13,46.13-58.8,33.56Zm184.52,4.57L215.88,490.11V397.8L346.6,323.2l45.77-26.15Zm0-119.13L358.68,250l-46.53-26.79V131.79l33.69,19.4L392.37,178Zm8-105.28-80.2-46.17,80.2-46.16,80.18,46.15Zm8,105.28V178L455,151.19l33.68-19.4v91.39h0Z"></path> </svg> </i>`;
}, "C:/xampp/htdocs/Portafolio-main/Portafolio-main/src/icons/IconLaravel.astro", void 0);

const $$IconMongodb = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<i> <svg viewBox="0 0 256 549" xmlns="http://www.w3.org/2000/svg" width="45" height="45" preserveAspectRatio="xMidYMid"><path fill="#01EC64" d="M175.622 61.108C152.612 33.807 132.797 6.078 128.749.32a1.03 1.03 0 0 0-1.492 0c-4.048 5.759-23.863 33.487-46.874 60.788-197.507 251.896 31.108 421.89 31.108 421.89l1.917 1.28c1.704 26.234 5.966 63.988 5.966 63.988h17.045s4.26-37.54 5.965-63.987l1.918-1.494c.213.214 228.828-169.78 31.32-421.677Zm-47.726 418.05s-10.227-8.744-12.997-13.222v-.428l12.358-274.292c0-.853 1.279-.853 1.279 0l12.357 274.292v.428c-2.77 4.478-12.997 13.223-12.997 13.223Z"></path></svg> </i>`;
}, "C:/xampp/htdocs/Portafolio-main/Portafolio-main/src/icons/IconMongodb.astro", void 0);

const $$IconGit = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<i> <svg xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid" viewBox="0 0 256 256" width="45px" height="45px"> <path d="M251.17 116.6 139.4 4.82a16.49 16.49 0 0 0-23.31 0l-23.21 23.2 29.44 29.45a19.57 19.57 0 0 1 24.8 24.96l28.37 28.38a19.61 19.61 0 1 1-11.75 11.06L137.28 95.4v69.64a19.62 19.62 0 1 1-16.13-.57V94.2a19.61 19.61 0 0 1-10.65-25.73L81.46 39.44 4.83 116.08a16.49 16.49 0 0 0 0 23.32L116.6 251.17a16.49 16.49 0 0 0 23.32 0l111.25-111.25a16.5 16.5 0 0 0 0-23.33" fill="#DE4C36"></path> </svg> </i>`;
}, "C:/xampp/htdocs/Portafolio-main/Portafolio-main/src/icons/IconGit.astro", void 0);

const $$IconGitHub = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<i> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="45px" height="45px"> <path fill="#181717" d="M12 0C5.372 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.6.113.793-.26.793-.577 0-.285-.01-1.04-.016-2.04-3.338.726-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.755-1.333-1.755-1.09-.744.083-.73.083-.73 1.204.085 1.838 1.236 1.838 1.236 1.07 1.835 2.807 1.305 3.493.997.108-.775.418-1.305.762-1.605-2.665-.305-5.466-1.334-5.466-5.93 0-1.31.468-2.38 1.235-3.22-.124-.303-.535-1.523.117-3.176 0 0 1.008-.323 3.3 1.23a11.453 11.453 0 0 1 3.005-.404c1.02.005 2.045.138 3.004.403 2.29-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.873.118 3.175.77.84 1.233 1.91 1.233 3.22 0 4.606-2.803 5.624-5.475 5.92.429.37.813 1.103.813 2.222 0 1.605-.015 2.898-.015 3.293 0 .318.192.694.8.576C20.565 21.797 24 17.3 24 12 24 5.373 18.627 0 12 0z"></path> </svg> </i>`;
}, "C:/xampp/htdocs/Portafolio-main/Portafolio-main/src/icons/IconGitHub.astro", void 0);

const $$IconWordPress = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<i> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width="45px" height="45px"> <path fill="#21759B" d="M224 32C100.3 32 0 132.3 0 256s100.3 224 224 224 224-100.3 224-224S347.7 32 224 32zm0 400c-96.1 0-176-79.9-176-176S127.9 80 224 80s176 79.9 176 176-79.9 176-176 176zm-4.3-48.6L126.9 184.3h21.9l48.5 117.5 37.5-117.5h19.9l37.5 117.5L277.2 184h22l-92.5 199.7zm171.6-181.6c6.3 8.8 11.8 19.6 16 31.4h-73.4l-20.7-60.2h60.8zm-197-9.6h53.1l-26.6 83.1-26.5-83.1zm22.5-45.4l36.1-98.6H247.9l36.1 98.6z"></path> </svg> </i>`;
}, "C:/xampp/htdocs/Portafolio-main/Portafolio-main/src/icons/IconWordPress.astro", void 0);

const $$IconSql = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<i> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="45px" height="45px"> <path fill="#407AFC" d="M12 0C5.373 0 0 1.79 0 4v16c0 2.21 5.373 4 12 4s12-1.79 12-4V4c0-2.21-5.373-4-12-4zm0 2c5.51 0 10 1.12 10 2s-4.49 2-10 2S2 4.88 2 4s4.49-2 10-2zm0 8c5.51 0 10 1.12 10 2s-4.49 2-10 2S2 12.88 2 12s4.49-2 10-2zm0 10c-5.51 0-10-1.12-10-2v-2.11A14.15 14.15 0 0 0 12 16c2.96 0 5.784-.39 8-1.11V18c0 .88-4.49 2-10 2z"></path> </svg> </i>`;
}, "C:/xampp/htdocs/Portafolio-main/Portafolio-main/src/icons/IconSql.astro", void 0);

const ICONS = {
  html: $$IconHtml,
  css: $$IconCss,
  javaScript: $$IconJavaScript,
  typeScript: $$IconTypeScript,
  react: $$IconReact,
  nextjs: $$IconNextjs,
  tailwind: $$IconTailwind,
  redux: $$IconRedux,
  nodejs: $$IconNodeJs,
  laravel: $$IconLaravel,
  mongodb: $$IconMongodb,
  git: $$IconGit,
  github: $$IconGitHub,
  wordpress: $$IconWordPress,
  sql: $$IconSql
  // Inclusion de SQL
};
function getIconComponent(iconName) {
  return ICONS[iconName] || null;
}
createComponent(($$result, $$props, $$slots) => {
  return renderTemplate``;
}, "C:/xampp/htdocs/Portafolio-main/Portafolio-main/src/icons/IconAll.astro", void 0);

const $$Skills = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="section-skill" data-astro-cid-y3b77nrg> <div class="linear-grandient-1" data-astro-cid-y3b77nrg></div> <div class="container-skill" data-astro-cid-y3b77nrg> <h2 class="title-skills" id="skills" data-astro-cid-y3b77nrg>Compétences</h2> <ul class="ul-skill" data-astro-cid-y3b77nrg> ${skills.map(({ icon, title }) => {
    const IconComponent = getIconComponent(icon);
    return renderTemplate`<li class="li-skills" data-astro-cid-y3b77nrg> ${IconComponent && renderTemplate`${renderComponent($$result, "IconComponent", IconComponent, { "data-astro-cid-y3b77nrg": true })}`} <p class="p-skill" data-astro-cid-y3b77nrg>${title}</p> </li>`;
  })} </ul> </div> </section> `;
}, "C:/xampp/htdocs/Portafolio-main/Portafolio-main/src/components/main/skills/Skills.astro", void 0);

const photoperfil = new Proxy({"src":"/_astro/ss.C5zndc2l.png","width":571,"height":437,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/xampp/htdocs/Portafolio-main/Portafolio-main/public/img/ss.png";
							}
							
							return target[name];
						}
					});

const $$Home = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="content-presentation" data-astro-cid-q5kz5pjk> <div class="linear-gradient-2" data-astro-cid-q5kz5pjk></div> <div class="linear-gradient-1" data-astro-cid-q5kz5pjk></div> <dir class="container-persentation" data-astro-cid-q5kz5pjk> <div class="container-text" data-astro-cid-q5kz5pjk> <!-- <h2 class="text-hello">Hola <strong>soy</strong></h2> --> <h2 class="text-name" data-astro-cid-q5kz5pjk>Salah Eddine Lhassibi</h2> <div class="container-profession" data-astro-cid-q5kz5pjk> <div data-astro-cid-q5kz5pjk> <span class="p-profession" data-astro-cid-q5kz5pjk>D</span> <span class="p-profession" data-astro-cid-q5kz5pjk>é</span> <span class="p-profession" data-astro-cid-q5kz5pjk>v</span> <span class="p-profession" data-astro-cid-q5kz5pjk>e</span> <span class="p-profession" data-astro-cid-q5kz5pjk>l</span> <span class="p-profession" data-astro-cid-q5kz5pjk>o</span> <span class="p-profession" data-astro-cid-q5kz5pjk>p</span> <span class="p-profession" data-astro-cid-q5kz5pjk>p</span> <span class="p-profession" data-astro-cid-q5kz5pjk>e</span> <span class="p-profession" data-astro-cid-q5kz5pjk>u</span> <span class="p-profession" data-astro-cid-q5kz5pjk>r</span> <span class="" data-astro-cid-q5kz5pjk>&nbsp;</span> <span class="p-profession" data-astro-cid-q5kz5pjk>F</span> <span class="p-profession" data-astro-cid-q5kz5pjk>u</span> <span class="p-profession" data-astro-cid-q5kz5pjk>l</span> <span class="p-profession" data-astro-cid-q5kz5pjk>l</span> <span class="" data-astro-cid-q5kz5pjk>&nbsp;</span> <span class="p-profession" data-astro-cid-q5kz5pjk>S</span> <span class="p-profession" data-astro-cid-q5kz5pjk>t</span> <span class="p-profession" data-astro-cid-q5kz5pjk>a</span> <span class="p-profession" data-astro-cid-q5kz5pjk>c</span> <span class="p-profession" data-astro-cid-q5kz5pjk>k</span> </div> </div> <p class="p-presentation" data-astro-cid-q5kz5pjk>
Fort d'une solide expérience dans le développement web, je conçois des solutions digitales innovantes, performantes et adaptées aux exigences des utilisateurs modernes. Mon engagement est d'offrir une expérience utilisateur optimale tout en garantissant la qualité et la maintenabilité du code.
</p> <div class="container-curriculum" data-astro-cid-q5kz5pjk> <a href="https://wa.me/+212659927495" target="_blank" class="a-action" data-astro-cid-q5kz5pjk>Contactez-moi</a> <a href="/cv off pr.pdf" class="a-curriculum" target="_blank" data-astro-cid-q5kz5pjk>Voir CV</a> </div> <div class="container-social" data-astro-cid-q5kz5pjk> <p data-astro-cid-q5kz5pjk>Découvrez mon travail</p> <a href="https://github.com/sal3us" target="_blank" data-astro-cid-q5kz5pjk> <li class="li-social" data-astro-cid-q5kz5pjk> <i class="fa-brands fa-github" data-astro-cid-q5kz5pjk></i> </li> </a> <a href="https://www.linkedin.com/in/sal3us" target="_blank" data-astro-cid-q5kz5pjk> <li class="li-social" data-astro-cid-q5kz5pjk> <i class="fa-brands fa-linkedin" data-astro-cid-q5kz5pjk></i> </li> </a> </div> </div> <div class="container-photo-profile" data-astro-cid-q5kz5pjk> <div class="photo-perfil" data-astro-cid-q5kz5pjk> <picture data-astro-cid-q5kz5pjk> <!-- Si vous n'utilisez pas Vercel, utilisez simplement une balise <img> --> ${renderComponent($$result, "Image", $$Image, { "src": photoperfil, "alt": "Salah Eddine Lhassibi", "id": "inicio", "data-astro-cid-q5kz5pjk": true })} </picture> </div> </div> </dir> </div>  `;
}, "C:/xampp/htdocs/Portafolio-main/Portafolio-main/src/components/main/home/Home.astro", void 0);

const $$Main = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<main> <div class="container_p"> ${renderComponent($$result, "Home", $$Home, {})} ${renderComponent($$result, "Projects", $$Projects, {})} ${renderComponent($$result, "Skills", $$Skills, {})} </div> </main>`;
}, "C:/xampp/htdocs/Portafolio-main/Portafolio-main/src/components/main/main.astro", void 0);

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<footer data-astro-cid-dwl4onjj> <section class="section-footer" data-astro-cid-dwl4onjj> <div class="linear-grandient-1" data-astro-cid-dwl4onjj></div> <div class="container-footer" data-astro-cid-dwl4onjj> <h2 class="title-contact" id="contacto" data-astro-cid-dwl4onjj>Contacto</h2> <div class="container-redes" data-astro-cid-dwl4onjj> <!-- Lien WhatsApp --> <a href="https://wa.me/+212659927495" target="_blank" data-astro-cid-dwl4onjj> <li class="li-contact" data-astro-cid-dwl4onjj> <i class="fa-brands fa-whatsapp icon-whatsapp" data-astro-cid-dwl4onjj></i> <p data-astro-cid-dwl4onjj>Whatsapp</p> </li> </a> <!-- Lien GitHub --> <a href="https://github.com/sal3us" target="_blank" data-astro-cid-dwl4onjj> <li class="li-contact" data-astro-cid-dwl4onjj> <i class="fa-brands fa-github" data-astro-cid-dwl4onjj></i> <p data-astro-cid-dwl4onjj>Github</p> </li> </a> <!-- Lien LinkedIn --> <a href="https://www.linkedin.com/in/salah-eddine-lhassibi-357212185/" target="_blank" data-astro-cid-dwl4onjj> <li class="li-contact" data-astro-cid-dwl4onjj> <i class="fa-brands fa-linkedin" data-astro-cid-dwl4onjj></i> <p data-astro-cid-dwl4onjj>Linkedin</p> </li> </a> </div> </div> </section> </footer> `;
}, "C:/xampp/htdocs/Portafolio-main/Portafolio-main/src/components/footer/Footer.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro = createAstro();
const $$Index = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate(_a || (_a = __template(['<html lang="es"> <head><meta charset="utf-8"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="viewport" content="width=device-width"><meta name="generator"', '><meta name="description" content="Osnaider Martinez de desarrollador web Frontend React Js , Astro , \n      Next Js Con m\xE1s de 1 a\xF1o de experiencia en la creaci\xF3n de experiencias web\n      atractivas y funcionales."><meta property="og:type" content="website"><meta property="og:url" content="https://osnaidermartinez.vercel.app/"><meta property="og:site_name" content="Osnaider Martinez"><meta property="og:title" content="Osnaider Martinez Portafolio"><meta property="og:image" content="https://osnaidermartinez.vercel.app/img/preview-page.webp"><script src="https://kit.fontawesome.com/2898a0ac51.js" crossorigin="anonymous"><\/script><title>Portafolio | Osnaider Martinez</title>', "</head> <body> ", " ", " ", " </body></html>"])), addAttribute(Astro2.generator, "content"), renderHead(), renderComponent($$result, "Header", $$Header, {}), renderComponent($$result, "Main", $$Main, {}), renderComponent($$result, "Footer", $$Footer, {}));
}, "C:/xampp/htdocs/Portafolio-main/Portafolio-main/src/pages/index.astro", void 0);

const $$file = "C:/xampp/htdocs/Portafolio-main/Portafolio-main/src/pages/index.astro";
const $$url = "";

export { $$Index as default, $$file as file, $$url as url };
