"use client";

import { useEffect, useState } from "react";

const environmentContent = [
  {
    tab: "前台接待",
    title: "前台接待与等候区",
    copy: "圆弧石材前台、柔软等候沙发与牵引收纳区，让到店登记、等候和交付都更从容。",
    image: "/assets/store-reception.png",
    alt: "高端宠物洗护店前台接待与等候区",
  },
  {
    tab: "洗护 SPA",
    title: "洗护 SPA 区",
    copy: "抬高浴缸、防滑地面与柔和分隔玻璃，让洗护过程保持干净、安静和可控。",
    image: "/assets/store-spa.png",
    alt: "高端宠物洗护店洗护 SPA 区",
  },
  {
    tab: "美容造型",
    title: "美容造型与交付区",
    copy: "专业造型台、可视交付柜台与封闭工具托盘，兼顾精修效率和主人安心感。",
    image: "/assets/store-styling.png",
    alt: "高端宠物洗护店美容造型与交付区",
  },
];

const reviewContent = [
  {
    stars: "★★★★★",
    text: "我家小狗以前很怕吹风，这次护理师一直安抚，结束后毛很蓬松，状态也很放松。",
    name: "豆豆家长",
    detail: "柯基洗护 · 第 3 次到店",
  },
  {
    stars: "★★★★★",
    text: "预约时间准，店里很干净。修剪前会确认想要的长度，成品比我预期还自然。",
    name: "Mika 家长",
    detail: "贵宾精修 · 造型护理",
  },
  {
    stars: "★★★★★",
    text: "猫咪洗护做得很稳，回家没有应激。还提醒了耳朵清洁和换季梳毛频率。",
    name: "团团家长",
    detail: "长毛猫洗护 · 低应激护理",
  },
  {
    stars: "★★★★★",
    text: "第一次带老年犬来，护理师会放慢节奏，中途还发了照片。接回家时它整只都很舒服。",
    name: "拿铁家长",
    detail: "老年犬护理 · 温和洗浴",
  },
  {
    stars: "★★★★★",
    text: "之前打结比较严重，店里没有硬拉，先说明处理方式和价格，剪完干净又不突兀。",
    name: "糯米家长",
    detail: "打结处理 · 局部修剪",
  },
  {
    stars: "★★★★★",
    text: "能看出来工具和浴区都有消毒，香味也不冲。小猫回家一直舔毛，但没有躲起来。",
    name: "栗子家长",
    detail: "幼猫首洗 · 基础护理",
  },
];

const reviewPages = Array.from({ length: Math.ceil(reviewContent.length / 3) }, (_, index) =>
  reviewContent.slice(index * 3, index * 3 + 3)
);

export default function Home() {
  const [environmentIndex, setEnvironmentIndex] = useState(0);
  const [reviewIndex, setReviewIndex] = useState(0);
  const [isFormStatusVisible, setIsFormStatusVisible] = useState(false);
  const activeEnvironment = environmentContent[environmentIndex];

  const showEnvironmentSlide = (index) => {
    setEnvironmentIndex((index + environmentContent.length) % environmentContent.length);
  };

  const showReviewSlide = (index) => {
    setReviewIndex((index + reviewPages.length) % reviewPages.length);
  };

  useEffect(() => {
    const timer = window.setInterval(() => {
      setEnvironmentIndex((currentIndex) => (currentIndex + 1) % environmentContent.length);
    }, 5200);

    return () => window.clearInterval(timer);
  }, [environmentIndex]);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setReviewIndex((currentIndex) => (currentIndex + 1) % reviewPages.length);
    }, 4800);

    return () => window.clearInterval(timer);
  }, [reviewIndex]);

  const handleBookingSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;

    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    setIsFormStatusVisible(true);
    form.reset();
  };

  return (
    <>
      <header className="site-header">
          <nav className="nav" aria-label="主导航">
            <a className="brand" href="#top" aria-label="Paw & Pure 首页">
              <span className="brand-mark" aria-hidden="true">
                <svg viewBox="0 0 24 24"><path d="M12 13.7c-2.1 0-4.8 1.7-5.6 3.5-.7 1.7.5 3.1 2.2 2.7 1.1-.2 2.1-.7 3.4-.7s2.3.5 3.4.7c1.8.4 3-1 2.2-2.7-.8-1.8-3.5-3.5-5.6-3.5Zm-5.7-2.2c1 .2 2-.8 2.2-2.2.2-1.5-.4-2.8-1.4-3-1-.2-2 .8-2.2 2.2-.2 1.4.4 2.8 1.4 3Zm11.4 0c1-.2 1.6-1.6 1.4-3-.2-1.5-1.2-2.4-2.2-2.2-1 .2-1.6 1.6-1.4 3 .2 1.4 1.2 2.4 2.2 2.2ZM10 9.8c1.1 0 2-1.3 2-2.9S11.1 4 10 4 8 5.3 8 6.9s.9 2.9 2 2.9Zm4 0c1.1 0 2-1.3 2-2.9S15.1 4 14 4s-2 1.3-2 2.9.9 2.9 2 2.9Z"/></svg>
              </span>
              Paw & Pure 宠物洗护
            </a>
            <div className="nav-links" aria-label="页面章节">
              <a href="#environment">环境</a>
              <a href="#services">服务</a>
              <a href="#prices">套餐</a>
              <a href="#process">流程</a>
              <a href="#location">位置</a>
              <a href="#reviews">评价</a>
              <a href="#booking">预约</a>
            </div>
            <a className="btn btn-primary" href="#booking">立即预约</a>
          </nav>
        </header>
      
        <main id="top">
          <section className="hero" aria-label="宠物洗护店首屏">
            <div className="hero-inner">
              <div className="hero-copy">
                <span className="eyebrow">温和洗护 · 精致造型 · 安心托付</span>
                <h1>让每一次洗护，都像被认真宠爱。</h1>
                <p>为猫狗提供洗澡、吹毛、修剪、护理和 SPA 服务。透明预约、独立消毒、温柔安抚，让毛孩子干净舒服，也让主人放心。</p>
                <div className="hero-actions">
                  <a className="btn btn-primary" href="#booking">预约到店</a>
                  <a className="btn btn-secondary" href="#prices">查看套餐</a>
                </div>
                <div className="hero-stats" aria-label="门店优势">
                  <div className="stat">
                    <strong>45min</strong>
                    <span>基础洗护起</span>
                  </div>
                  <div className="stat">
                    <strong>1对1</strong>
                    <span>护理师服务</span>
                  </div>
                  <div className="stat">
                    <strong>每日</strong>
                    <span>工具消毒记录</span>
                  </div>
                </div>
              </div>
            </div>
          </section>
      
          <div className="quick-bar" aria-label="快速信息">
            <div className="quick-grid">
              <div className="quick-item">
                <span className="quick-icon" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M12 3v18M5 8h14M7 16h10"/></svg></span>
                <div><b>营业时间</b><span>10:00 至 20:00</span></div>
              </div>
              <div className="quick-item">
                <span className="quick-icon" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M12 21s7-4.4 7-11a7 7 0 0 0-14 0c0 6.6 7 11 7 11Z"/><path d="M12 10.5h.01"/></svg></span>
                <div><b>门店位置</b><span>南京莫愁湖公园西侧</span></div>
              </div>
              <div className="quick-item">
                <span className="quick-icon" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M20 7 9 18l-5-5"/></svg></span>
                <div><b>预约优先</b><span>减少等待与应激</span></div>
              </div>
              <div className="quick-item">
                <span className="quick-icon" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M5 12c0-4 3-7 7-7s7 3 7 7-3 7-7 7"/><path d="M12 9v4l3 2"/></svg></span>
                <div><b>护理反馈</b><span>完成后同步状态</span></div>
              </div>
            </div>
          </div>
      
          <section className="environment" id="environment">
            <div className="section-inner">
              <div className="section-head">
                <div>
                  <span className="eyebrow">Store Interior</span>
                  <h2>高端宠物洗护空间，干净也有温度。</h2>
                </div>
                <p>三处核心区域采用暖木、浅石材与柔和灯光，保持专业洗护所需的清洁秩序，也让宠物和主人在等待、洗护、交付时更放松。</p>
              </div>
              <div className="environment-carousel">
                <div className="environment-media" aria-live="polite">
                  {environmentContent.map((item, slideIndex) => (
                    <figure
                      className={`environment-slide ${slideIndex === environmentIndex ? "is-active" : ""}`.trim()}
                      key={item.title}
                    >
                      <img src={item.image} alt={item.alt} />
                    </figure>
                  ))}
                  <div className="carousel-controls">
                    <button className="carousel-btn" type="button" onClick={() => showEnvironmentSlide(environmentIndex - 1)} aria-label="上一张店内环境图">
                      <svg viewBox="0 0 24 24" aria-hidden="true"><path d="m15 18-6-6 6-6" /></svg>
                    </button>
                    <button className="carousel-btn" type="button" onClick={() => showEnvironmentSlide(environmentIndex + 1)} aria-label="下一张店内环境图">
                      <svg viewBox="0 0 24 24" aria-hidden="true"><path d="m9 18 6-6-6-6" /></svg>
                    </button>
                  </div>
                </div>
                <aside className="environment-panel" aria-label="店内区域说明">
                  <div>
                    <h3>{activeEnvironment.title}</h3>
                    <p>{activeEnvironment.copy}</p>
                    <div className="environment-tabs" role="tablist" aria-label="选择店内区域">
                      {environmentContent.map((item, tabIndex) => {
                        const isActive = tabIndex === environmentIndex;
                        return (
                          <button
                            className={`environment-tab ${isActive ? "is-active" : ""}`.trim()}
                            type="button"
                            role="tab"
                            aria-selected={isActive}
                            key={item.tab}
                            onClick={() => showEnvironmentSlide(tabIndex)}
                          >
                            {item.tab}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                  <div className="environment-meta">
                    <span>独立分区：接待、洗护、造型互不干扰</span>
                    <span>可视玻璃：主人可安心查看护理状态</span>
                    <span>每日维护：浴缸、工具、地面分区清洁</span>
                  </div>
                </aside>
              </div>
            </div>
          </section>
      
          <section className="services" id="services">
            <div className="section-inner">
              <div className="section-head">
                <div>
                  <span className="eyebrow">Our Services</span>
                  <h2>从清洁到造型，一站式照顾。</h2>
                </div>
                <p>根据宠物体型、毛量、皮肤状态和性格安排流程。敏感肌、幼宠、老年宠可提前备注，我们会调整水温、风力和护理节奏。</p>
              </div>
              <div className="service-grid">
                <article className="service-card">
                  <span className="service-icon" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M5 12h14"/><path d="M8 8h8"/><path d="M7 16h10"/><path d="M12 4v16"/></svg></span>
                  <h3>基础洗护</h3>
                  <p>洗澡、吹干、梳毛、耳道清洁、脚底毛和肛门腺基础护理。</p>
                </article>
                <article className="service-card">
                  <span className="service-icon" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M4 20 20 4"/><path d="m14 4 6 6"/><path d="M4 14l6 6"/></svg></span>
                  <h3>精修造型</h3>
                  <p>按品种和日常打理习惯设计轮廓，兼顾可爱度与实用性。</p>
                </article>
                <article className="service-card">
                  <span className="service-icon" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M12 3c3 3 5 6 5 10a5 5 0 0 1-10 0c0-4 2-7 5-10Z"/><path d="M9 14c.6 1.4 1.6 2 3 2"/></svg></span>
                  <h3>皮毛护理</h3>
                  <p>保湿浴、去浮毛、蓬松护理和打结处理，让毛发更顺滑。</p>
                </article>
                <article className="service-card">
                  <span className="service-icon" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M8 21h8"/><path d="M12 17v4"/><path d="M7 4h10v7a5 5 0 0 1-10 0V4Z"/><path d="M5 8H3a4 4 0 0 0 4 4"/><path d="M19 8h2a4 4 0 0 1-4 4"/></svg></span>
                  <h3>舒缓 SPA</h3>
                  <p>温和按摩、香氛浴和放松护理，适合换季与压力型宠物。</p>
                </article>
              </div>
            </div>
          </section>
      
          <section className="prices" id="prices">
            <div className="section-inner">
              <div className="section-head">
                <div>
                  <span className="eyebrow">Packages</span>
                  <h2>清楚的套餐，按需选择。</h2>
                </div>
                <p>以下为小型犬参考价，猫咪、大型犬、打结严重或特殊造型会在到店评估后确认。</p>
              </div>
              <div className="price-grid">
                <article className="price-card">
                  <h3>清爽洗护</h3>
                  <p>适合日常清洁和短毛宠物。</p>
                  <div className="price-tag"><strong>¥88</strong><span>起</span></div>
                  <ul>
                    <li>温和沐浴与彻底吹干</li>
                    <li>耳道、脚底、指甲基础护理</li>
                    <li>护理完成状态反馈</li>
                  </ul>
                </article>
                <article className="price-card featured">
                  <span className="badge">热门</span>
                  <h3>全套精护</h3>
                  <p>适合定期洗护和毛发管理。</p>
                  <div className="price-tag"><strong>¥168</strong><span>起</span></div>
                  <ul>
                    <li>基础洗护全项目</li>
                    <li>去浮毛与蓬松护理</li>
                    <li>局部修剪和香氛护理</li>
                  </ul>
                </article>
                <article className="price-card">
                  <h3>造型焕新</h3>
                  <p>适合需要完整修剪的宠物。</p>
                  <div className="price-tag"><strong>¥258</strong><span>起</span></div>
                  <ul>
                    <li>全套洗护与毛发护理</li>
                    <li>品种造型或生活造型</li>
                    <li>护理师一对一沟通方案</li>
                  </ul>
                </article>
              </div>
            </div>
          </section>
      
          <section className="process" id="process">
            <div className="section-inner">
              <div className="process-layout">
                <div className="process-panel">
                  <div>
                    <span className="eyebrow">Care Flow</span>
                    <h2>每一步都看得见，也更安心。</h2>
                    <p>我们把洗护拆成清晰流程，先了解宠物状态，再进入护理。遇到打结、皮肤泛红或情绪紧张，会先沟通再处理。</p>
                  </div>
                  <div className="store-note">
                    <span>电话：021-8888 6688</span>
                    <span>地址：南京市莫愁湖路，莫愁湖公园西侧</span>
                    <span>参照：江苏省妇女儿童活动中心东侧，步行至公园西侧绿地旁</span>
                  </div>
                </div>
                <ol className="process-list">
                  <li>
                    <span className="step-number">01</span>
                    <div>
                      <h3>到店检查</h3>
                      <p>确认皮肤、毛结、指甲和情绪状态，记录主人的护理偏好。</p>
                    </div>
                  </li>
                  <li>
                    <span className="step-number">02</span>
                    <div>
                      <h3>温和洗护</h3>
                      <p>使用宠物专用产品，分区清洁，控制水温和吹风强度。</p>
                    </div>
                  </li>
                  <li>
                    <span className="step-number">03</span>
                    <div>
                      <h3>修剪造型</h3>
                      <p>按预约项目完成脚底、局部或全身造型，过程保持安抚。</p>
                    </div>
                  </li>
                  <li>
                    <span className="step-number">04</span>
                    <div>
                      <h3>交付反馈</h3>
                      <p>说明护理结果和居家打理建议，方便主人持续照顾毛发状态。</p>
                    </div>
                  </li>
                </ol>
              </div>
            </div>
          </section>
      
          <section className="location" id="location">
            <div className="section-inner">
              <div className="location-layout">
                <div className="pet-map" aria-label="Paw & Pure 门店位于南京莫愁湖公园西侧的手绘地图">
                  <img src="/assets/pet-store-q-map.png" alt="Q版莫愁湖寻路地图，Paw & Pure 宠物店用萌爪标在莫愁湖路东侧、莫愁湖公园西侧" />
                  <svg viewBox="0 0 1053 724" role="img" aria-labelledby="mapTitle mapDesc">
                    <title id="mapTitle">Paw & Pure 门店位置地图</title>
                    <desc id="mapDesc">门店在莫愁湖公园西侧，靠近莫愁湖路，江苏省妇女儿童活动中心东侧。</desc>
                    <rect width="1053" height="724" fill="#fdfcf8"/>
      
                    <path d="M438 226 C480 196 516 200 546 238 C590 296 590 342 635 370 C694 406 808 386 891 357 C923 417 938 510 927 573 C918 612 886 622 842 619 C773 614 719 591 650 571 C600 556 549 549 498 546 C454 543 416 518 401 482 C386 447 400 407 437 374 C470 345 532 373 574 355 C616 337 622 304 615 266 C608 230 564 189 520 170 C488 156 461 177 438 226Z" fill="#bdebcf"/>
                    <path d="M679 132 C735 115 785 133 817 184 C860 252 893 329 918 397 C939 454 946 531 931 576 C916 620 850 628 784 611 C722 595 661 565 590 558 C520 551 452 531 421 491 C389 450 402 405 438 374 C471 342 534 368 579 352 C625 336 630 298 617 251 C602 194 623 148 679 132Z" fill="#8fd5e0"/>
                    <path d="M421 491 C454 525 512 545 590 558" fill="none" stroke="#69bfcb" strokeWidth="4" strokeLinecap="round" opacity="0.45"/>
      
                    <path d="M-28 246 C78 258 173 270 260 276 C313 280 351 289 376 309 C401 329 421 328 452 305 C513 260 564 211 625 157 C684 104 735 50 790 -28" className="map-road main"/>
                    <path d="M391 -32 C399 86 397 205 382 324 C367 443 340 566 306 760" className="map-road main"/>
                    <path d="M-34 645 C88 621 206 610 337 611 C431 612 502 630 612 650 C744 674 877 674 1084 642" className="map-road main"/>
                    <path d="M87 -24 C112 86 125 199 104 319 C84 434 42 548 -18 742" className="map-road"/>
                    <path d="M931 -20 C965 126 987 286 993 454 C998 560 1000 642 1002 758" className="map-road"/>
                    <path d="M883 20 C915 153 930 278 929 383 C928 494 913 604 876 744" className="map-road"/>
      
                    <path d="M-10 17 L172 -24" className="map-road thin"/>
                    <path d="M116 54 L361 8" className="map-road thin"/>
                    <path d="M125 116 L356 73" className="map-road thin"/>
                    <path d="M118 171 L355 131" className="map-road thin"/>
                    <path d="M35 218 L340 174" className="map-road thin"/>
                    <path d="M31 358 L355 321" className="map-road thin"/>
                    <path d="M86 424 L345 388" className="map-road thin"/>
                    <path d="M95 504 L327 472" className="map-road thin"/>
                    <path d="M95 575 L313 546" className="map-road thin"/>
                    <path d="M118 689 L303 664" className="map-road thin"/>
                    <path d="M243 -22 C267 98 276 197 269 301 C261 420 238 548 209 752" className="map-road thin"/>
                    <path d="M500 16 L573 105" className="map-road thin"/>
                    <path d="M580 39 L669 126" className="map-road thin"/>
                    <path d="M708 16 L795 131" className="map-road thin"/>
                    <path d="M662 213 C717 199 772 185 839 167" className="map-road thin"/>
                    <path d="M702 405 C765 397 826 384 926 358" className="map-road thin"/>
                    <path d="M557 617 C600 589 636 563 676 536" className="map-road thin"/>
                    <path d="M429 415 C475 438 522 453 571 455" className="map-road thin"/>
                    <path d="M435 525 C475 505 520 495 568 495" className="map-road thin"/>
      
                    <g aria-label="Paw & Pure 宠物店萌爪标识">
                      <circle cx="379" cy="382" r="34" className="map-pin-shadow"/>
                      <rect x="350" y="353" width="58" height="58" rx="8" className="map-pin"/>
                      <circle cx="379" cy="382" r="23" className="map-pin-core"/>
                      <circle cx="369" cy="376" r="5.5" fill="#e98771"/>
                      <circle cx="389" cy="376" r="5.5" fill="#e98771"/>
                      <circle cx="360" cy="387" r="5.5" fill="#e98771"/>
                      <circle cx="398" cy="387" r="5.5" fill="#e98771"/>
                      <path d="M369 399 C374 388 384 388 389 399 C394 410 364 410 369 399Z" fill="#e98771"/>
                      <rect x="423" y="333" width="250" height="72" rx="8" className="map-callout"/>
                      <path d="M423 378 L402 386 L423 394Z" fill="#ffffff"/>
                      <text x="448" y="362" className="map-label">Paw & Pure 宠物店</text>
                      <text x="448" y="390" className="map-label small">莫愁湖路东侧 · 公园西缘</text>
                    </g>
      
                    <circle cx="351" cy="381" r="13" fill="#ffffff" stroke="#7f9498" strokeWidth="6"/>
                    <circle cx="884" cy="376" r="13" fill="#ffffff" stroke="#7f9498" strokeWidth="6"/>
                    <circle cx="930" cy="642" r="13" fill="#ffffff" stroke="#7f9498" strokeWidth="6"/>
                    <circle cx="124" cy="634" r="13" fill="#ffffff" stroke="#7f9498" strokeWidth="6"/>
                    <circle cx="309" cy="295" r="13" fill="#ffffff" stroke="#7f9498" strokeWidth="6"/>
      
                    <text x="695" y="399" className="map-label lake">Mochou Lake</text>
                    <text x="724" y="432" className="map-label lake">莫愁湖</text>
                    <text x="568" y="282" className="map-label park">Mochouhu Park</text>
                    <text x="585" y="310" className="map-label park">莫愁湖公园</text>
                    <text x="80" y="382" className="map-label small">Jiangsu Women and</text>
                    <text x="86" y="406" className="map-label small">Children Activity Center</text>
                    <text x="124" y="431" className="map-label small">江苏省妇女儿童活动中心</text>
                    <text x="168" y="285" className="map-label" transform="rotate(4 168 285)">汉中门大街</text>
                    <text x="493" y="174" className="map-label" transform="rotate(-39 493 174)">Hanbei St / 汉北街</text>
                    <text x="293" y="468" className="map-label" transform="rotate(-81 293 468)">Mochouhu Rd</text>
                    <text x="330" y="651" className="map-label" transform="rotate(7 330 651)">Shuiximen Ave 水西门大街</text>
                    <text x="38" y="540" className="map-label small" transform="rotate(-76 38 540)">Beixei Rd</text>
                    <text x="944" y="260" className="map-label small" transform="rotate(82 944 260)">Mochouhu E Rd</text>
                    <text x="482" y="568" className="map-label small">抱月楼</text>
                    <text x="635" y="592" className="map-label small">胜棋楼</text>
                    <text x="596" y="679" className="map-label small">莫愁湖公园南门</text>
                  </svg>
                </div>
                <div className="location-copy">
                  <span className="eyebrow">Visit Us</span>
                  <h2>在莫愁湖边，给毛孩子留一段干净舒服的时间。</h2>
                  <p>门店位置按你发来的地图标在莫愁湖公园西侧，靠近莫愁湖路，旁边是公园绿地，接送宠物时更好辨认。</p>
                  <div className="location-details">
                    <div className="location-detail">
                      <span className="location-icon" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M12 21s7-4.4 7-11a7 7 0 0 0-14 0c0 6.6 7 11 7 11Z"/><path d="M12 10.5h.01"/></svg></span>
                      <div><b>地址</b><span>南京市莫愁湖路，莫愁湖公园西侧</span></div>
                    </div>
                    <div className="location-detail">
                      <span className="location-icon" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M4 19h16"/><path d="M5 19V9l7-5 7 5v10"/><path d="M9 19v-6h6v6"/></svg></span>
                      <div><b>附近参照</b><span>江苏省妇女儿童活动中心东侧，莫愁湖公园西侧绿地旁</span></div>
                    </div>
                    <div className="location-detail">
                      <span className="location-icon" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M5 12h14"/><path d="M12 5v14"/><path d="M7 7l10 10"/><path d="M17 7 7 17"/></svg></span>
                      <div><b>到店提示</b><span>沿莫愁湖路到公园西侧，看到 Paw & Pure 粉橘色爪印标识即可到店。</span></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
      
          <section className="reviews" id="reviews">
            <div className="section-inner">
              <div className="section-head">
                <div>
                  <span className="eyebrow">Reviews</span>
                  <h2>主人们喜欢这里的细致。</h2>
                </div>
                <p>我们更在意宠物在护理过程中的感受。洗得干净，也要让它们愿意下次再来。</p>
              </div>
              <div className="review-carousel" style={{ "--review-index": reviewIndex }}>
                <div className="review-track">
                  {reviewPages.map((page, pageIndex) => (
                    <div className="review-grid" key={pageIndex} aria-hidden={pageIndex !== reviewIndex}>
                      {page.map((review) => (
                        <article className="review-card" key={review.name}>
                          <div className="stars">{review.stars}</div>
                          <p>{review.text}</p>
                          <div className="reviewer">
                            <span>{review.name}</span>
                            <small>{review.detail}</small>
                          </div>
                        </article>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
              <div className="review-controls" aria-label="客户评价轮播">
                <button className="review-arrow" type="button" aria-label="上一组评价" onClick={() => showReviewSlide(reviewIndex - 1)}>
                  <svg viewBox="0 0 24 24" aria-hidden="true"><path d="m15 18-6-6 6-6"/></svg>
                </button>
                <div className="review-dots">
                  {reviewPages.map((_, index) => (
                    <button
                      className={`review-dot${index === reviewIndex ? " active" : ""}`}
                      type="button"
                      key={index}
                      aria-label={`查看第 ${index + 1} 组评价`}
                      aria-current={index === reviewIndex}
                      onClick={() => showReviewSlide(index)}
                    />
                  ))}
                </div>
                <button className="review-arrow" type="button" aria-label="下一组评价" onClick={() => showReviewSlide(reviewIndex + 1)}>
                  <svg viewBox="0 0 24 24" aria-hidden="true"><path d="m9 18 6-6-6-6"/></svg>
                </button>
              </div>
            </div>
          </section>
      
          <section className="booking" id="booking">
            <div className="section-inner">
              <div className="booking-layout">
                <div>
                  <span className="eyebrow">Book Now</span>
                  <h2>给毛孩子安排一次舒服的洗护。</h2>
                  <p>提交后我们会尽快确认时段。紧急打结、特殊皮肤状态或首次到店，可以在备注里告诉我们。</p>
                  <div className="contact-list">
                    <span>微信：PawPureCare</span>
                    <span>电话：021-8888 6688</span>
                    <span>地址：南京市莫愁湖路，莫愁湖公园西侧</span>
                    <span>营业：周一至周日 10:00 至 20:00</span>
                  </div>
                </div>
                <form className="booking-form" id="bookingForm" onSubmit={handleBookingSubmit}>
                  <label>
                    主人姓名
                    <input type="text" name="name" placeholder="请输入姓名" required />
                  </label>
                  <label>
                    联系电话
                    <input type="tel" name="phone" placeholder="请输入手机号" required />
                  </label>
                  <label>
                    宠物类型
                    <select name="pet">
                      <option>小型犬</option>
                      <option>中大型犬</option>
                      <option>猫咪</option>
                      <option>其他</option>
                    </select>
                  </label>
                  <label>
                    预约项目
                    <select name="service">
                      <option>清爽洗护</option>
                      <option>全套精护</option>
                      <option>造型焕新</option>
                      <option>舒缓 SPA</option>
                    </select>
                  </label>
                  <label>
                    期望日期
                    <input type="date" name="date" required />
                  </label>
                  <label>
                    期望时间
                    <input type="time" name="time" required />
                  </label>
                  <label className="full">
                    备注
                    <textarea name="message" placeholder="例如：怕吹风、皮肤敏感、毛发打结、想保留的造型长度"></textarea>
                  </label>
                  <button className="btn btn-primary full" type="submit">提交预约信息</button>
                  <p className={`form-status full ${isFormStatusVisible ? "is-visible" : ""}`.trim()} id="formStatus" role="status" aria-live="polite">预约信息已记录，我们会尽快与您确认时段。</p>
                </form>
              </div>
            </div>
          </section>
        </main>
      
        <footer>
          <div className="footer-inner">
            <span>© 2026 Paw & Pure 宠物洗护</span>
            <span>专业洗护 · 温柔护理 · 透明沟通</span>
          </div>
        </footer>
    </>
  );
}
