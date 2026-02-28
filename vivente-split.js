document.addEventListener("DOMContentLoaded", function(){

  const root=document.getElementById('vivente-split');
  const list=root.querySelector('.vs-panels');
  const bgA=root.querySelector('.vs-bg__a');
  const bgB=root.querySelector('.vs-bg__b');

  const SECTIONS=[
    {
      title:'DODECA PAVILION',
      logo:'https://buvprojekti.lv/wp-content/uploads/2023/08/Dodeca_logo_vert_white_logoonly.svg',
      text:'Telpa, kas veidota iedvesmojoties no proporcijām dabā.',
      href:'https://dodecapavilion.com',
      bg:'https://static.tildacdn.com/tild6235-3937-4235-b566-643931366462/image_164_1.webp'
    },
    {
      title:'MĀJU PROJEKTI',
      logo:'https://buvprojekti.lv/wp-content/uploads/2023/08/Dodeca_logo_vert_white_logoonly.svg',
      text:'Vairāk kā 200 gatavu māju dizaina projekti.',
      href:'https://majuprojekti.lv/',
      bg:'https://static.tildacdn.com/tild6465-3262-4938-b537-646135643035/image_164_2_1.webp'
    },
    {
      title:'CONSTRUCTIONE VIVENTE',
      logo:'https://buvprojekti.lv/wp-content/uploads/2023/08/Dodeca_logo_vert_white_logoonly.svg',
      text:'Būvniecība, būvuzraudzība un attīstīšana.',
      href:'https://architecturevivente.com/lv/buvnieciba',
      bg:'https://static.tildacdn.com/tild6665-3539-4232-a237-333665636532/image_12_1.webp'
    },
    {
      title:'ARCHITECTURE VIVENTE',
      logo:'https://buvprojekti.lv/wp-content/uploads/2023/08/Dodeca_logo_vert_white_logoonly.svg',
      text:'Dzīva un dabiska ģeometrija privātmāju arhitektūrā.',
      href:'#',
      bg:'https://static.tildacdn.com/tild6161-3362-4163-a563-313065643735/image_11_1.webp'
    },
    {
      title:'VIVENTE DESIGN',
      logo:'https://buvprojekti.lv/wp-content/uploads/2023/08/Dodeca_logo_vert_white_logoonly.svg',
      text:'Interjera objekti un kolekcijas, kas ienes telpā klātbūtni.',
      href:'https://shopvivente.com/',
      bg:'https://shopvivente.com/cdn/shop/files/visualization.png?v=1770889459&width=1400'
    },
    {
      title:'SACRED GEOMETRY SITES',
      logo:'https://buvprojekti.lv/wp-content/uploads/2023/08/Dodeca_logo_vert_white_logoonly.svg',
      text:'Ģeometrijas objekti un to vietnes / kolekcijas.',
      href:'#',
      bg:'https://sacredgeometrysites.com/wp-content/uploads/2024/12/Screenshot-2021-05-31-at-3.34-1.webp'
    }
  ];

  list.innerHTML=SECTIONS.map((s,i)=>`
    <div class="vs-panel" data-i="${i}">
      <div class="vs-titlewrap">
        <div class="vs-title">${s.title}</div>
        <div class="vs-marker"></div>
      </div>
      <img class="vs-logo" src="${s.logo}" alt="">
      <div class="vs-details">
        <p class="vs-text">${s.text}</p>
        <a class="vs-btn" href="${s.href}">Learn More</a>
      </div>
    </div>
  `).join('');

  const panels=[...root.querySelectorAll('.vs-panel')];
  let showingA=true;

  function setBg(url){
    if(showingA){
      bgB.style.backgroundImage=`url("${url}")`;
      bgB.style.opacity=1;
      bgA.style.opacity=0;
      showingA=false;
    }else{
      bgA.style.backgroundImage=`url("${url}")`;
      bgA.style.opacity=1;
      bgB.style.opacity=0;
      showingA=true;
    }
  }

  panels.forEach((p)=>{
    const idx=Number(p.dataset.i);

    p.addEventListener('click',()=>{
      panels.forEach(el=>el.classList.remove('is-active'));
      p.classList.add('is-active');
      setBg(SECTIONS[idx].bg);
    });

    p.addEventListener('mouseenter',()=>{
      if(window.matchMedia('(hover:hover)').matches){
        panels.forEach(el=>el.classList.remove('is-active'));
        p.classList.add('is-active');
        setBg(SECTIONS[idx].bg);
      }
    });
  });

  setBg(SECTIONS[0].bg);

});