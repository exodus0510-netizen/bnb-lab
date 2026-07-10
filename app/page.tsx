"use client";

import { useState } from "react";

const archiveItems = [
  {
    year: "1857",
    place: "NEW YORK",
    title: "풀턴 스트리트 기도부흥",
    short: "도시 한복판에서 시작된 정오의 기도",
    description:
      "평신도 제러마이어 램피어가 시작한 작은 기도 모임은 경제 위기의 도시를 지나 미국 여러 지역으로 확산되었습니다. BNB Lab은 당시의 초청문, 신문 기록과 인물 자료를 따라갑니다.",
    image: "/archive/fulton-lanphier.jpg",
    imageClass: "portrait-tight",
    article: "/revival/fulton-street.html",
    alt: "제러마이어 캘빈 램피어의 1860년경 흑백 초상",
    credit: "Jeremiah C. Lanphier, c.1860 · Public domain",
    source:
      "https://commons.wikimedia.org/wiki/File:Jeremiah_Calvin_Lanphier.jpg",
    tags: ["기도", "도시", "평신도"],
  },
  {
    year: "1904",
    place: "WALES",
    title: "웨일스 부흥",
    short: "기도와 회개가 공동체를 흔들다",
    description:
      "1904–1905년 웨일스에서는 기도와 회개, 찬송과 간증이 지역 교회와 일상으로 번져 갔습니다. 인물 중심의 영웅담을 넘어 지역 공동체가 어떻게 반응했는지 살펴봅니다.",
    image: "/archive/wales-evan-roberts.jpg",
    imageClass: "",
    article: "/revival/welsh-1904.html",
    alt: "1904년경 웨일스 부흥의 주요 인물 에반 로버츠 초상",
    credit: "Evan Roberts, c.1904 · National Library of Wales",
    source:
      "https://commons.wikimedia.org/wiki/File:Evan_Roberts_(5294057).jpg",
    tags: ["회개", "찬송", "공동체"],
  },
  {
    year: "1906",
    place: "LOS ANGELES",
    title: "아주사 스트리트 부흥",
    short: "경계를 넘어선 예배와 세계적 확산",
    description:
      "윌리엄 J. 시모어가 이끈 아주사 스트리트의 모임은 인종과 계층의 경계를 넘어선 예배로 기억됩니다. 남겨진 신문과 건물 사진을 통해 세계 오순절 운동의 한 출발점을 읽습니다.",
    image: "/archive/azusa-mission.jpg",
    imageClass: "",
    article: "/revival/azusa-street.html",
    alt: "로스앤젤레스 아주사 스트리트 사도신앙복음선교회 건물의 역사 사진",
    credit: "Apostolic Faith Gospel Mission · Public domain",
    source:
      "https://commons.wikimedia.org/wiki/File:Apostolic_Faith_Gospel_Mission_1906.jpg",
    tags: ["성령", "화해", "세계교회"],
  },
  {
    year: "1907",
    place: "PYONGYANG",
    title: "평양대부흥",
    short: "회개와 화해가 삶으로 이어지다",
    description:
      "평양 장대현교회의 사경회에서 일어난 회개와 공동기도는 여러 지역으로 이어졌습니다. BNB Lab은 사건의 열매뿐 아니라 시대적 배경과 다양한 연구 해석을 함께 제시합니다.",
    image: "/archive/pyongyang-jangdaehyun.jpg",
    imageClass: "",
    article: "/revival/pyongyang-1907.html",
    alt: "1907년 평양 장대현교회 역사 사진",
    credit: "Jangdaehyun Church, 1907 · Public domain",
    source:
      "https://commons.wikimedia.org/wiki/File:Jangdaehyun_Church.jpg",
    tags: ["회개", "화해", "한국교회"],
  },
];

const galleryCategories = [
  { key: "revival", label: "부흥" },
  { key: "mission", label: "선교" },
  { key: "bible", label: "성경" },
  { key: "technology", label: "기술" },
];

const galleryItems = [
  { category: "revival", year: "1857", title: "제러마이어 램피어", image: "/archive/fulton-lanphier.jpg", source: "https://commons.wikimedia.org/wiki/File:Jeremiah_Calvin_Lanphier.jpg", credit: "PUBLIC DOMAIN" },
  { category: "revival", year: "1904", title: "에번 로버츠", image: "/archive/wales-evan-roberts.jpg", source: "https://commons.wikimedia.org/wiki/File:Evan_Roberts_(5294057).jpg", credit: "NATIONAL LIBRARY OF WALES" },
  { category: "revival", year: "1906", title: "아주사 스트리트 선교회", image: "/archive/azusa-mission.jpg", source: "https://commons.wikimedia.org/wiki/File:Apostolic_Faith_Gospel_Mission_1906.jpg", credit: "PUBLIC DOMAIN" },
  { category: "revival", year: "1907", title: "평양 장대현교회", image: "/archive/pyongyang-jangdaehyun.jpg", source: "https://commons.wikimedia.org/wiki/File:Jangdaehyun_Church.jpg", credit: "HISTORICAL ARCHIVE" },
  { category: "mission", year: "1885", title: "호러스 G. 언더우드", image: "/gallery/mission-underwood.jpg", source: "https://commons.wikimedia.org/wiki/File:Horace_Grant_Underwood.jpg", credit: "PUBLIC DOMAIN" },
  { category: "mission", year: "1901", title: "헨리 G. 아펜젤러", image: "/gallery/mission-appenzeller.jpg", source: "https://commons.wikimedia.org/wiki/File:A_Modern_Pioneer_in_Korea_-_Henry_Gerhart_Appenzeller,_1901.jpg", credit: "PUBLIC DOMAIN" },
  { category: "mission", year: "1890s", title: "로제타 셔우드 홀", image: "/gallery/mission-rosetta-hall.jpg", source: "https://commons.wikimedia.org/wiki/File:Dr._Rosetta_S._Hall.jpg", credit: "PUBLIC DOMAIN" },
  { category: "mission", year: "1885", title: "제중원", image: "/gallery/mission-jejungwon.jpg", source: "https://commons.wikimedia.org/wiki/File:Jejungwon.jpg", credit: "PUBLIC DOMAIN" },
  { category: "mission", year: "1900s", title: "한성 서대문 밖 풍경", image: "/gallery/mission-seoul-west-gate.jpg", source: "https://commons.wikimedia.org/wiki/File:WestGate_of_Seoul_1900s.jpg", credit: "PUBLIC DOMAIN" },
  { category: "bible", year: "1882", title: "최초의 한글 누가복음", image: "/archive/first-korean-luke.jpg", source: "https://commons.wikimedia.org/wiki/File:%EC%98%88%EC%88%98%EC%85%A9%EA%B5%90%EB%88%84%EA%B0%80%EB%B3%B5%EC%9D%8C%EC%A0%BC%EC%85%94.pdf", credit: "PUBLIC DOMAIN" },
  { category: "bible", year: "4C", title: "시내 사본 마태복음", image: "/gallery/bible-codex-sinaiticus.jpg", source: "https://commons.wikimedia.org/wiki/File:Codex_Sinaiticus_Matthew_1,1-2,5.JPG", credit: "PUBLIC DOMAIN" },
  { category: "bible", year: "1450s", title: "구텐베르크 성경", image: "/gallery/bible-gutenberg.jpg", source: "https://commons.wikimedia.org/wiki/File:Bible_de_Gutenberg,_copie_de_la_BNF_Res_A71-(2).jpg", credit: "CC0" },
  { category: "technology", year: "1940s", title: "초기 전자식 컴퓨터 ENIAC", image: "/gallery/tech-eniac.jpg", source: "https://commons.wikimedia.org/wiki/File:Eniac_Aberdeen.jpg", credit: "PUBLIC DOMAIN" },
  { category: "technology", year: "1969", title: "아폴로 소프트웨어와 마거릿 해밀턴", image: "/gallery/tech-margaret-hamilton.jpg", source: "https://commons.wikimedia.org/wiki/File:Margaret_Hamilton_-_restoration.jpg", credit: "NASA · PUBLIC DOMAIN" },
  { category: "technology", year: "2024", title: "NASA 인공지능 타운홀", image: "/gallery/tech-nasa-ai.jpg", source: "https://commons.wikimedia.org/wiki/File:NASA_Artificial_Intelligence_(AI)_Town_Hall_(NHQ202405220001).jpg", credit: "NASA · PUBLIC DOMAIN" },
];

const researchCards = [
  {
    label: "BIBLE & HISTORY",
    number: "01",
    title: "창세기와 고대 문명",
    description:
      "창세기의 세계와 고대 근동 문명을 함께 살피며, 성경이 전하는 창조와 인간의 이야기를 읽습니다.",
    meta: "입문 · 12분 읽기",
  },
  {
    label: "KINGDOM OF GOD",
    number: "02",
    title: "성경 전체를 잇는 하나님 나라",
    description:
      "창조에서 새 창조까지 이어지는 하나님 나라의 큰 흐름 안에서 교회와 선교의 자리를 묻습니다.",
    meta: "연재 · 성경신학",
  },
  {
    label: "REVIVAL & SCRIPTURE",
    number: "03",
    title: "부흥을 성경적으로 읽는 법",
    description:
      "현상과 숫자를 넘어 회개, 화해, 공동체와 선교의 열매를 성경의 기준으로 분별합니다.",
    meta: "심화 · 연구 노트",
  },
];

export default function Home() {
  const [activeArchive, setActiveArchive] = useState(3);
  const [activeGallery, setActiveGallery] = useState("mission");
  const item = archiveItems[activeArchive];
  const visibleGallery = galleryItems.filter((entry) => entry.category === activeGallery);

  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="BNB Lab 홈">
          <span className="brand-mark">B</span>
          <span>
            <strong>BNB LAB</strong>
            <small>BIBLE · REVIVAL · MISSION</small>
          </span>
        </a>

        <nav className="desktop-nav" aria-label="주요 메뉴">
          <a href="#about">소개</a>
          <a href="#archive">부흥 아카이브</a>
          <a href="#bible">성경 연구</a>
          <a href="#mission">선교</a>
          <a href="#gallery">자료실</a>
          <a href="#technology">AI와 하나님 나라</a>
        </nav>

        <a className="header-cta" href="#together">
          함께하기 <span aria-hidden="true">↗</span>
        </a>

        <details className="mobile-menu">
          <summary aria-label="메뉴 열기"><span></span><span></span></summary>
          <div>
            <a href="#about">소개</a>
            <a href="#archive">부흥 아카이브</a>
            <a href="#bible">성경 연구</a>
            <a href="#mission">선교</a>
            <a href="#gallery">자료실</a>
            <a href="#technology">AI와 하나님 나라</a>
          </div>
        </details>
      </header>

      <section className="hero" id="top">
        <div className="hero-grain" />
        <div className="hero-copy">
          <p className="eyebrow">REMEMBER · RESEARCH · RESPOND</p>
          <h1>
            말씀에 뿌리내리고,
            <br />
            <em>복음의 기억</em>을
            <br />
            다음 시대로 잇습니다.
          </h1>
          <p className="hero-description">
            성경을 깊이 연구하고, 역사 속 부흥과 선교의 기록을 보존하며,
            오늘의 기술을 하나님 나라를 위해 사용하는 길을 탐구합니다.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#archive">
              부흥 아카이브 보기 <span>→</span>
            </a>
            <a className="text-link" href="#about">
              BNB Lab 이야기 <span>↘</span>
            </a>
          </div>
        </div>

        <div className="hero-visual" aria-label="역사 속 부흥 기록 이미지 모음">
          <div className="hero-photo hero-photo-main">
            <img
              src="/archive/pyongyang-jangdaehyun.jpg"
              alt="1907년 평양 장대현교회"
            />
            <span>PYONGYANG · 1907</span>
          </div>
          <div className="hero-photo hero-photo-small">
            <img
              src="/archive/wales-evan-roberts.jpg"
              alt="1904년경 에반 로버츠"
            />
            <span>WALES · 1904</span>
          </div>
          <div className="archive-stamp" aria-hidden="true">
            <span>ARCHIVE</span>
            <b>01</b>
            <small>THE GOSPEL REMEMBERED</small>
          </div>
          <p className="photo-credit">
            Historical images: Public domain / Wikimedia Commons
          </p>
        </div>

        <div className="scroll-note"><span /> SCROLL TO EXPLORE</div>
      </section>

      <section className="manifesto" id="about">
        <div className="section-number">01 — WHY WE REMEMBER</div>
        <div className="manifesto-copy">
          <p className="kicker">복음에 빚진 공동체</p>
          <h2>
            누군가 기도했고,
            <br />
            길을 떠났으며,
            <br />
            <span>삶으로 복음을 전했습니다.</span>
          </h2>
          <p>
            우리가 받은 복음은 우리 안에 머물기 위한 것이 아닙니다. BNB
            Lab은 은혜의 역사를 정직하게 기억하고, 다음 세대와 세계를 향한
            새로운 순종으로 이어 가고자 합니다.
          </p>
        </div>
        <div className="framework" aria-label="BNB Lab 사역의 네 방향">
          <article>
            <span>FOUNDATION</span><b>01</b>
            <h3>성경</h3><p>우리는 말씀에서 시작합니다.</p>
          </article>
          <article>
            <span>MEMORY</span><b>02</b>
            <h3>부흥</h3><p>하나님이 일하신 역사를 기억합니다.</p>
          </article>
          <article>
            <span>RESPONSE</span><b>03</b>
            <h3>선교</h3><p>받은 복음을 다시 흘려보냅니다.</p>
          </article>
          <article>
            <span>TOOL</span><b>04</b>
            <h3>기술</h3><p>오늘의 기술을 책임 있게 사용합니다.</p>
          </article>
        </div>
      </section>

      <section className="archive-section" id="archive">
        <div className="section-heading archive-heading">
          <div>
            <div className="section-number light">02 — REVIVAL ARCHIVE</div>
            <p className="kicker">온라인 부흥 박물관</p>
            <h2>기억은 다시<br />길이 됩니다.</h2>
          </div>
          <p>
            사건을 영웅담으로 소비하지 않고, 당시의 기록과 시대 배경,
            신학적 의미와 오늘의 질문을 함께 살펴봅니다.
          </p>
        </div>

        <div className="archive-explorer">
          <div className="archive-tabs" role="tablist" aria-label="부흥 사건 선택">
            {archiveItems.map((archive, index) => (
              <button
                key={archive.year}
                type="button"
                className={index === activeArchive ? "active" : ""}
                onClick={() => setActiveArchive(index)}
                role="tab"
                aria-selected={index === activeArchive}
              >
                <span>{archive.year}</span>
                <b>{archive.title}</b>
                <small>{archive.place}</small>
              </button>
            ))}
          </div>

          <div className="archive-image" role="tabpanel">
            <img className={item.imageClass} src={item.image} alt={item.alt} />
            <a href={item.source} target="_blank" rel="noreferrer">
              {item.credit} <span>↗</span>
            </a>
          </div>

          <article className="archive-detail">
            <div className="archive-index">0{activeArchive + 1} / 04</div>
            <p className="archive-place">{item.place} · {item.year}</p>
            <h3>{item.title}</h3>
            <h4>{item.short}</h4>
            <p>{item.description}</p>
            <div className="archive-tags">
              {item.tags.map((tag) => <span key={tag}>#{tag}</span>)}
            </div>
            <a
              className="archive-link"
              href={item.article}
            >
              전체 기사 읽기 <span>→</span>
            </a>
          </article>
        </div>

        <div className="archive-rule">
          <span>기록된 사실</span><i />
          <span>연구자의 해석</span><i />
          <span>BNB Lab의 신학적 성찰</span>
        </div>
      </section>

      <section className="mission-section" id="mission">
        <div className="mission-image">
          <img
            src="/archive/mary-scranton.jpg"
            alt="한국에서 교육 선교를 펼친 메리 F. 스크랜튼의 역사 초상"
          />
          <div className="image-label">
            <span>MISSIONARY ARCHIVE · KOREA</span>
            <a
              href="https://commons.wikimedia.org/wiki/File:Mary_F._Scranton_(1832-1909).jpg"
              target="_blank"
              rel="noreferrer"
            >
              Mary F. Scranton · Public domain ↗
            </a>
          </div>
        </div>

        <div className="mission-copy">
          <div className="section-number">03 — MISSION</div>
          <p className="kicker">복음에 빚진 나라</p>
          <h2>
            받은 복음은
            <br />
            <span>다시 길을 떠납니다.</span>
          </h2>
          <p className="mission-lead">
            누군가는 낯선 땅을 향해 떠났고, 누군가는 그들과 함께 말씀을
            번역하고 학교와 병원, 교회를 세웠습니다. 한국교회가 받은 복음의
            은혜는 죄책감이 아니라 감사와 책임의 언어입니다.
          </p>
          <div className="mission-principles">
            <div><b>기억</b><span>선교사와 한국인 동역자의 기록을 함께 보존합니다.</span></div>
            <div><b>성찰</b><span>헌신뿐 아니라 시대의 한계와 논쟁도 정직하게 다룹니다.</span></div>
            <div><b>응답</b><span>세계와 이웃, 디지털 공간을 향한 오늘의 선교를 묻습니다.</span></div>
          </div>
          <a className="mission-archive-cta" href="/mission/foreigners-to-joseon.html">
            <img src="/gallery/mission-underwood.jpg" alt="" />
            <span><small>MISSIONARY ARCHIVE 01</small><b>조선을 찾아온 외국인들<br />전체 기록 읽기</b></span>
            <i>→</i>
          </a>
        </div>
      </section>

      <section className="gallery-section" id="gallery">
        <div className="gallery-heading">
          <div><div className="section-number">04 — DIGITAL COLLECTION</div><p className="kicker">BNB Lab 자료실</p><h2>기록을 읽고,<br /><span>이미지로 만납니다.</span></h2></div>
          <p>부흥의 현장, 조선을 찾은 선교사, 성경 고문서와 기술의 역사를 공개 아카이브 자료로 살펴봅니다. 사진을 누르면 원본과 이용 조건을 확인할 수 있습니다.</p>
        </div>
        <div className="gallery-tabs" role="tablist" aria-label="자료실 분류">
          {galleryCategories.map((category) => <button key={category.key} type="button" className={activeGallery === category.key ? "active" : ""} onClick={() => setActiveGallery(category.key)} role="tab" aria-selected={activeGallery === category.key}><span>{category.label}</span><small>{String(galleryItems.filter((entry) => entry.category === category.key).length).padStart(2,"0")}</small></button>)}
        </div>
        <div className="gallery-grid">
          {visibleGallery.map((entry, index) => <a className={index === 0 ? "gallery-card featured" : "gallery-card"} href={entry.source} target="_blank" rel="noreferrer" key={entry.title}><div><img src={entry.image} alt={entry.title} /></div><p><span>{entry.year}</span><b>{entry.title}</b><small>{entry.credit} ↗</small></p></a>)}
        </div>
      </section>

      <section className="bible-section" id="bible">
        <div className="bible-intro">
          <div>
            <div className="section-number">05 — BIBLE RESEARCH</div>
            <p className="kicker">말씀에서 시작하는 연구</p>
            <h2>역사와 기술을<br />해석하는 기준은<br /><span>말씀입니다.</span></h2>
          </div>
          <div className="bible-document">
            <div className="document-frame">
              <img
                src="/archive/first-korean-luke.jpg"
                alt="1882년에 출판된 최초의 한국어 누가복음 번역본 첫 페이지"
              />
              <span className="document-year">1882</span>
            </div>
            <p>
              『예수셩교누가복음젼셔』 · 1882
              <a
                href="https://commons.wikimedia.org/wiki/File:%EC%98%88%EC%88%98%EC%85%A9%EA%B5%90%EB%88%84%EA%B0%80%EB%B3%B5%EC%9D%8C%EC%A0%BC%EC%85%94.pdf"
                target="_blank"
                rel="noreferrer"
              >
                원문 보기 ↗
              </a>
            </p>
          </div>
        </div>

        <div className="research-grid">
          {researchCards.map((card) => (
            <article key={card.number}>
              <div className="research-top"><span>{card.label}</span><b>{card.number}</b></div>
              <h3>{card.title}</h3>
              <p>{card.description}</p>
              <div className="research-meta"><span>{card.meta}</span><i>↗</i></div>
            </article>
          ))}
        </div>
      </section>

      <section className="technology-section" id="technology">
        <div className="tech-grid" aria-hidden="true">
          <span className="tech-orbit orbit-one" />
          <span className="tech-orbit orbit-two" />
          <span className="tech-cross cross-one">+</span>
          <span className="tech-cross cross-two">+</span>
          <div className="tech-center">
            <small>TECHNOLOGY</small>
            <b>×</b>
            <small>KINGDOM</small>
          </div>
        </div>
        <div className="tech-copy">
          <div className="section-number">06 — AI & TECHNOLOGY</div>
          <p className="kicker">기술 청지기직</p>
          <h2>AI는 목적이 아니라,<br /><span>우리에게 맡겨진 도구입니다.</span></h2>
          <p>
            무엇을 할 수 있는지만 묻지 않습니다. 무엇을 위해, 누구를 위해,
            어떤 책임 아래 사용해야 하는지를 먼저 묻습니다. 성경 교육, 선교
            콘텐츠, 역사 보존과 다음 세대 소통에 AI를 책임 있게 활용합니다.
          </p>
          <div className="tech-values">
            <article><b>01</b><h3>Truth</h3><p>출처를 밝히고 사실을 검증합니다.</p></article>
            <article><b>02</b><h3>Dignity</h3><p>사람을 대체할 대상이 아닌 존엄한 존재로 봅니다.</p></article>
            <article><b>03</b><h3>Mission</h3><p>효율보다 하나님 나라의 목적을 먼저 묻습니다.</p></article>
          </div>
          <a className="line-button light-button" href="#sources">
            AI 활용 원칙 읽기 <span>→</span>
          </a>
        </div>
      </section>

      <section className="sources-section" id="sources">
        <div className="sources-heading">
          <div>
            <div className="section-number">07 — SOURCES & NOTES</div>
            <p className="kicker">자료와 출처</p>
            <h2>기록의 출처를<br />투명하게 남깁니다.</h2>
          </div>
          <p>
            이 첫 화면에 사용한 사진은 공개 아카이브의 역사 자료입니다.
            BNB Lab은 이미지와 문서의 제작자, 연도, 소장처와 이용 조건을
            가능한 범위에서 함께 표기합니다.
          </p>
        </div>
        <div className="source-list">
          {archiveItems.map((source) => (
            <a key={source.year} href={source.source} target="_blank" rel="noreferrer">
              <span>{source.year}</span>
              <b>{source.title}</b>
              <small>WIKIMEDIA COMMONS · PUBLIC DOMAIN</small>
              <i>↗</i>
            </a>
          ))}
          <a
            href="https://www.puts.ac.kr/js_nondan/files/vol.42_09%EC%96%91%EC%8B%A0%ED%98%9C.pdf"
            target="_blank"
            rel="noreferrer"
          >
            <span>2011</span>
            <b>평양대부흥운동 학술 연구</b>
            <small>KOREA PRESBYTERIAN JOURNAL OF THEOLOGY</small>
            <i>↗</i>
          </a>
        </div>
        <p className="source-notice">
          ※ 역사적 사실, 연구자의 해석, BNB Lab의 신학적 성찰을 구분하여
          표시하는 것을 편집 원칙으로 삼습니다.
        </p>
      </section>

      <section className="together-section" id="together">
        <div className="together-mark">B</div>
        <p className="eyebrow">REMEMBER · RESEARCH · RESPOND</p>
        <h2>기억에서 순종으로,<br />연구에서 실천으로.</h2>
        <p>
          자료를 제보하고, 번역·연구·디자인·개발로 함께하며,
          복음의 기억을 다음 세대와 세계로 이어 주세요.
        </p>
        <div className="together-actions">
          <span className="button button-primary disabled-cta">
            협력 안내 준비 중 <span>·</span>
          </span>
          <span>CONTACT CHANNEL <small>최종 공개 전에 실제 연락처를 연결합니다</small></span>
        </div>
      </section>

      <footer className="site-footer">
        <div className="footer-brand"><strong>BNB LAB</strong><span>BIBLE · REVIVAL · MISSION · TECHNOLOGY</span></div>
        <address className="footer-contact">
          <span>대표 한동훈</span>
          <a href="tel:01055003699">H.P 010-5500-3699</a>
          <a href="mailto:exodus0510@naver.com">exodus0510@naver.com</a>
          <a href="https://www.threads.com/@exodus0510" target="_blank" rel="noreferrer">threads.com/@exodus0510 ↗</a>
        </address>
        <div className="footer-links">
          <a href="#about">소개</a><a href="#archive">부흥 아카이브</a>
          <a href="#bible">성경 연구</a><a href="#mission">선교</a>
          <a href="#gallery">자료실</a>
          <a href="#technology">AI와 하나님 나라</a>
        </div>
        <p>© 2026 BNB LAB · THE GOSPEL REMEMBERED</p>
      </footer>
    </main>
  );
}
