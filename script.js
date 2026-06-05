const year = document.querySelector("#year");

if (year) {
  year.textContent = new Date().getFullYear();
}

const translations = {
  en: {
    "language.label": "Language",
    "nav.about": "About",
    "nav.education": "Education",
    "nav.projects": "Projects",
    "nav.publications": "Publications",
    "nav.interests": "Interests",
    "nav.contact": "Contact",
    "hero.eyebrow": "MSc Cognitive Science | Computer Science Background",
    "hero.name": "Yiran Peng",
    "hero.role": "AR Interaction | Computer Vision | Human-Computer Interaction | Intelligent Systems",
    "hero.copy":
      "I am an MSc Cognitive Science student at the University of Edinburgh with a BEng in Computer Science and Technology from Xi'an Jiaotong-Liverpool University. My work spans AR-based unmanned surface vehicle control, computer vision games, optimization algorithms, and applied intelligent systems.",
    "hero.projects": "View Projects",
    "hero.cv": "Download CV",
    "about.eyebrow": "About",
    "about.title": "Profile",
    "about.lead":
      "I am interested in building interactive systems that connect perception, behavior, and real-world decision-making. My academic and project experience combines software engineering, Unity development, computer vision, eye-tracking interaction, simulation, and quantitative user evaluation.",
    "about.copy":
      "I am currently preparing for applications and career opportunities related to HCI, AR/VR, software engineering, computer vision, intelligent robotics, and research-driven product development.",
    "facts.locationLabel": "Current Location",
    "facts.location": "Edinburgh, UK",
    "facts.degreeLabel": "Current Degree",
    "facts.degree": "MSc Cognitive Science",
    "facts.backgroundLabel": "Background",
    "facts.background": "BEng Computer Science and Technology",
    "facts.focusLabel": "Focus Areas",
    "facts.focus": "AR, CV, HCI, Intelligent Systems",
    "education.eyebrow": "Resume",
    "education.title": "Education & Skills",
    "education.edi": "MSc Cognitive Science, Edinburgh, United Kingdom.",
    "education.xjtlu":
      "BEng Computer Science and Technology, Suzhou, China. Awarded Second Prize in the Asia-Pacific Cup Mathematical Modeling Competition in 2023.",
    "education.skillsLabel": "Skills",
    "education.skillsTitle": "Technical Toolkit",
    "projects.eyebrow": "Projects",
    "projects.title": "Selected Project Experience",
    "projects.intro":
      "Each project begins with a compact overview. Open a card to see the full context, responsibilities, methods, and outcomes.",
    "projects.details": "View details",
    "card.ar.title": "AR Manipulation for Unmanned Surface Vehicles",
    "card.ar.copy":
      "Gaze-based HoloLens 2 interaction and Unity AR visualization for real-time USV operation and situational awareness evaluation.",
    "card.algae.title": "Smart Blue Algae Treatment System",
    "card.algae.copy":
      "A USV-based treatment system combining pump optimization, real-time spraying control, CFD simulation, and field testing.",
    "card.vision.title": "VisionPlay: Interactive Ball Game",
    "card.vision.copy":
      "Real-time ball tracking, collision detection, Unity game design, and user experience evaluation for interactive AR gameplay.",
    "card.power.title": "SHEPWM Optimization for Multilevel Inverters",
    "card.power.copy":
      "MATLAB and PLECS simulation comparing optimization algorithms for harmonic reduction in cascaded H-bridge multilevel inverters.",
    "interests.eyebrow": "Personal Vibes",
    "interests.title": "Beyond the CV",
    "interests.intro":
      "A soft little doorway for future vibe coding works, travel notes, drawings, and other personal archives.",
    "interests.vibe": "Vibe Coding Works",
    "interests.vibeCopy": "Interactive sketches, playful tools, and tiny experiments.",
    "interests.travel": "Travel Logs",
    "interests.travelCopy": "Places, moods, routes, photos, and field notes.",
    "interests.art": "Drawings",
    "interests.artCopy": "Illustrations, sketches, color studies, and visual diaries.",
    "publications.eyebrow": "Research",
    "publications.title": "Publications",
    "activities.eyebrow": "Leadership",
    "activities.title": "Extracurricular Activities",
    "activities.role": "Vice-Chair, Student Accommodation Committee, XJTLU",
    "activities.copy":
      "Organized major student events including club recruitment activities, operated school social media platforms, and created articles and video content for student audiences.",
    "contact.eyebrow": "Contact",
    "contact.title": "Let's Connect",
    "contact.copy":
      "I am open to application, research, internship, and career conversations in software, HCI, AR/VR, computer vision, and intelligent interactive systems.",
    "contact.cv": "Download CV",
    "dialog.did": "What I did",
    "dialog.tools": "Tools & methods",
    "footer.top": "Back to top",
    "footer.home": "Back to home",
    "vibes.eyebrow": "Personal Vibes",
    "vibes.title": "A tiny archive for the things I make, see, and draw",
    "vibes.copy":
      "This page is ready for future vibe coding pieces, travel journals, drawing collections, and other soft evidence of curiosity.",
    "vibes.codeLabel": "Vibe Coding",
    "vibes.codeTitle": "Interactive works and playful tools",
    "vibes.codeCopy":
      "Placeholder for generative sketches, small games, experimental interfaces, and browser toys.",
    "vibes.travelLabel": "Travel Logs",
    "vibes.travelTitle": "Routes, moments, and little observations",
    "vibes.travelCopy": "Placeholder for city notes, photo essays, maps, favorite places, and mood boards.",
    "vibes.artLabel": "Drawing",
    "vibes.artTitle": "Sketches, illustrations, and visual diaries",
    "vibes.artCopy": "Placeholder for hand drawings, digital paintings, color studies, and process notes."
  },
  zh: {
    "language.label": "Language",
    "nav.about": "关于我",
    "nav.education": "教育",
    "nav.projects": "项目",
    "nav.publications": "论文",
    "nav.interests": "兴趣",
    "nav.contact": "联系",
    "hero.eyebrow": "认知科学硕士 | 计算机科学背景",
    "hero.name": "彭奕然",
    "hero.role": "AR 交互 | 计算机视觉 | 人机交互 | 智能系统",
    "hero.copy":
      "我是爱丁堡大学认知科学硕士学生，本科毕业于西交利物浦大学计算机科学与技术专业。我的经历覆盖基于 AR 的无人水面艇控制、计算机视觉交互游戏、优化算法和应用型智能系统。",
    "hero.projects": "查看项目",
    "hero.cv": "下载简历",
    "about.eyebrow": "关于我",
    "about.title": "个人简介",
    "about.lead":
      "我关注如何构建连接感知、行为和现实决策的交互系统。我的学术与项目经历结合了软件工程、Unity 开发、计算机视觉、眼动交互、仿真和量化用户评估。",
    "about.copy":
      "目前我正在准备与 HCI、AR/VR、软件工程、计算机视觉、智能机器人以及研究驱动型产品开发相关的申请和职业机会。",
    "facts.locationLabel": "当前所在地",
    "facts.location": "英国爱丁堡",
    "facts.degreeLabel": "当前学位",
    "facts.degree": "认知科学硕士",
    "facts.backgroundLabel": "专业背景",
    "facts.background": "计算机科学与技术工学学士",
    "facts.focusLabel": "关注方向",
    "facts.focus": "AR、计算机视觉、人机交互、智能系统",
    "education.eyebrow": "简历",
    "education.title": "教育经历与技能",
    "education.edi": "认知科学硕士，爱丁堡，英国。",
    "education.xjtlu":
      "计算机科学与技术工学学士，苏州，中国。2023 年获亚太杯数学建模竞赛二等奖。",
    "education.skillsLabel": "技能",
    "education.skillsTitle": "技术工具箱",
    "projects.eyebrow": "项目",
    "projects.title": "精选项目经历",
    "projects.intro": "每个项目先展示简短总览。点击卡片按钮可以查看项目背景、职责、方法和成果。",
    "projects.details": "查看详情",
    "card.ar.title": "基于 AR 的无人水面艇远程实时操控",
    "card.ar.copy": "基于 HoloLens 2 的眼动交互与 Unity AR 可视化，用于实时 USV 操控和态势感知评估。",
    "card.algae.title": "基于无人水面艇的智能蓝藻治理系统",
    "card.algae.copy": "结合泵体优化、实时喷洒控制、CFD 仿真和实地实验的 USV 环境治理系统。",
    "card.vision.title": "VisionPlay：计算机视觉交互球类游戏",
    "card.vision.copy": "结合实时球体追踪、碰撞检测、Unity 游戏设计和用户体验评估的交互式 AR 游戏。",
    "card.power.title": "多电平逆变器 SHEPWM 优化算法研究",
    "card.power.copy": "使用 MATLAB 与 PLECS 对比优化算法，用于级联 H 桥多电平逆变器的谐波降低。",
    "interests.eyebrow": "个人兴趣",
    "interests.title": "简历之外的我",
    "interests.intro": "这里会作为未来展示 vibe coding 作品、旅行日志、绘画作品和个人档案的小入口。",
    "interests.vibe": "Vibe Coding 作品",
    "interests.vibeCopy": "交互草图、小工具和有趣的网页实验。",
    "interests.travel": "旅行日志",
    "interests.travelCopy": "地点、路线、照片、心情和观察记录。",
    "interests.art": "绘画作品",
    "interests.artCopy": "插画、草图、配色练习和视觉日记。",
    "publications.eyebrow": "研究",
    "publications.title": "论文发表",
    "activities.eyebrow": "领导力",
    "activities.title": "课外经历",
    "activities.role": "西交利物浦大学学生宿舍委员会副主席",
    "activities.copy": "组织社团招新等大型学生活动，运营学校社交媒体平台，并创作发布图文和视频内容。",
    "contact.eyebrow": "联系",
    "contact.title": "欢迎联系我",
    "contact.copy": "我期待与软件、HCI、AR/VR、计算机视觉和智能交互系统相关的申请、研究、实习和职业交流。",
    "contact.cv": "下载简历",
    "dialog.did": "我负责的内容",
    "dialog.tools": "工具与方法",
    "footer.top": "回到顶部",
    "footer.home": "返回主页",
    "vibes.eyebrow": "个人兴趣",
    "vibes.title": "一个收藏我做过、看见过、画下来过的小档案",
    "vibes.copy": "这个页面已经为未来的 vibe coding 作品、旅行日志、绘画合集和其他好奇心证据预留好了结构。",
    "vibes.codeLabel": "Vibe Coding",
    "vibes.codeTitle": "交互作品和好玩的小工具",
    "vibes.codeCopy": "这里将展示生成式草图、小游戏、实验性交互界面和浏览器玩具。",
    "vibes.travelLabel": "旅行日志",
    "vibes.travelTitle": "路线、瞬间和小观察",
    "vibes.travelCopy": "这里将展示城市记录、照片文章、地图、喜欢的地点和 mood board。",
    "vibes.artLabel": "绘画",
    "vibes.artTitle": "草图、插画和视觉日记",
    "vibes.artCopy": "这里将展示手绘、数码绘画、配色练习和过程记录。"
  }
};

const projectTranslations = {
  en: {
    ar: {
      date: "May 2024 - May 2025",
      title: "Remote and Real-time Manipulation for USVs Based on AR",
      summary:
        "An AR interaction system for unmanned surface vehicle control, combining gaze-based input, HoloLens 2, Unity visualization, and real-time video streaming.",
      points: [
        "Implemented a gaze-based interaction system on HoloLens 2 and collected eye-tracking data including fixation duration, AOIs, and gaze latency.",
        "Applied gaze behavior modeling and intention inference to distinguish exploratory and selective attention.",
        "Mitigated the Midas Touch problem through data-driven analysis of user interaction behavior.",
        "Developed a Unity-based AR visualization system supporting quantitative evaluation of situational awareness and navigation performance."
      ],
      tags: ["HoloLens 2", "Unity", "Eye Tracking", "AR", "USV", "Interaction Design"]
    },
    algae: {
      date: "Jun. - Aug. 2024",
      title: "A Smart Blue Algae Treatment System Based on USVs",
      summary:
        "A USV-based environmental treatment project for cyanobacteria control, covering mechanical optimization, control logic, and real-world field testing.",
      points: [
        "Designed and optimized a Venturi jet pump by installing three bearings to reduce friction.",
        "Used Computational Fluid Dynamics simulation to improve bacterial inhibitor spraying performance.",
        "Implemented an algorithm for real-time spraying quantity control based on USV speed, cyanobacteria concentration, river depth, and spray width.",
        "Conducted a field experiment in Dushu Lake, Suzhou, reducing cyanobacteria density by approximately 60%."
      ],
      tags: ["USV", "CFD", "Control Algorithm", "Field Experiment", "Environmental System"]
    },
    vision: {
      date: "Feb. - May 2024",
      title: "VisionPlay: Interactive Ball Game with Computer Vision",
      summary:
        "An interactive ball game using computer vision and AR overlay, connecting real-time Python tracking with Unity gameplay and user evaluation.",
      points: [
        "Used Python and OpenCV for real-time ball tracking and collision detection.",
        "Transmitted coordinates between the Python backend and Unity through sockets.",
        "Designed Unity game environments and rules in C#, including animations, scene transitions, and particle effects.",
        "Validated system accuracy with Intersection-over-Union and achieved over 75% object detection and tracking accuracy under varied conditions.",
        "Conducted SUS, UES, and ANOVA analysis in SPSS; interactive game modes scored above 70 and outperformed the PC version."
      ],
      tags: ["Python", "OpenCV", "Unity", "C#", "Sockets", "SPSS", "HCI Evaluation"]
    },
    power: {
      date: "Jun. - Aug. 2023",
      title: "Comparative Study of Optimization Algorithms for SHEPWM",
      summary:
        "A simulation study comparing optimization methods for voltage harmonic reduction in cascaded H-bridge multilevel inverters.",
      points: [
        "Integrated the Immune Algorithm with Selected Harmonic Elimination Pulse Width Modulation in MATLAB.",
        "Solved nonlinear equations to obtain continuous valid switching angles.",
        "Defined initial switching-angle populations, calculated affinity functions, and performed selection, cloning, and mutation operations.",
        "Used PLECS for simulation experiments comparing Particle Swarm Optimization and Genetic Algorithm approaches.",
        "Reduced Total Harmonic Distortion to as low as 2% in simulation as the cascade number increased."
      ],
      tags: ["MATLAB", "PLECS", "SHEPWM", "Immune Algorithm", "PSO", "GA"]
    }
  },
  zh: {
    ar: {
      date: "2024 年 5 月 - 2025 年 5 月",
      title: "基于 AR 的无人水面艇远程实时操控",
      summary: "面向无人水面艇控制的 AR 交互系统，结合眼动输入、HoloLens 2、Unity 可视化和实时视频流。",
      points: [
        "在 HoloLens 2 上实现基于凝视的交互系统，并采集注视时长、AOI、凝视延迟等眼动数据。",
        "应用凝视行为建模和意图推断，区分探索性注意与选择性注意。",
        "通过用户交互行为的数据分析缓解 Midas Touch 问题。",
        "开发 Unity AR 可视化系统，支持对态势感知和导航表现进行量化评估。"
      ],
      tags: ["HoloLens 2", "Unity", "眼动追踪", "AR", "USV", "交互设计"]
    },
    algae: {
      date: "2024 年 6 月 - 8 月",
      title: "基于无人水面艇的智能蓝藻治理系统",
      summary: "面向蓝藻治理的 USV 环境系统，覆盖机械优化、控制逻辑和真实场景实验。",
      points: [
        "通过安装三个轴承优化文丘里喷射泵，降低摩擦损耗。",
        "使用 CFD 仿真优化抑菌剂喷洒效果。",
        "基于 USV 速度、蓝藻浓度、河道深度和喷洒宽度实现实时喷洒量控制算法。",
        "在苏州独墅湖进行实地实验，使蓝藻密度下降约 60%。"
      ],
      tags: ["USV", "CFD", "控制算法", "实地实验", "环境系统"]
    },
    vision: {
      date: "2024 年 2 月 - 5 月",
      title: "VisionPlay：计算机视觉交互球类游戏",
      summary: "结合计算机视觉和 AR 叠加的交互游戏，将 Python 实时追踪、Unity 游戏机制和用户评估连接起来。",
      points: [
        "使用 Python 和 OpenCV 实现实时球体追踪与碰撞检测。",
        "通过 sockets 在 Python 后端和 Unity 之间传输坐标。",
        "使用 C# 在 Unity 中设计游戏环境和规则，包括动画、场景切换与粒子效果。",
        "使用 IoU 方法验证系统准确性，在多种条件下实现超过 75% 的目标检测与追踪准确率。",
        "使用 SPSS 进行 SUS、UES 和 ANOVA 分析；交互游戏模式得分均超过 70，显著高于 PC 版本。"
      ],
      tags: ["Python", "OpenCV", "Unity", "C#", "Sockets", "SPSS", "HCI 评估"]
    },
    power: {
      date: "2023 年 6 月 - 8 月",
      title: "SHEPWM 优化算法对比研究",
      summary: "针对级联 H 桥多电平逆变器电压谐波降低的仿真研究，对比多种优化方法。",
      points: [
        "在 MATLAB 中将免疫算法与特定谐波消除脉宽调制结合。",
        "求解非线性方程以获得连续有效的开关角。",
        "定义开关角初始种群，计算亲和度函数，并执行选择、克隆和变异操作。",
        "使用 PLECS 进行仿真实验，对比粒子群优化和遗传算法。",
        "随着级联数增加，在仿真中将总谐波畸变降低至约 2%。"
      ],
      tags: ["MATLAB", "PLECS", "SHEPWM", "免疫算法", "PSO", "GA"]
    }
  }
};

Object.assign(translations.en, {
  "card.bjd.title": "AI Co-facilitated BJD Diary",
  "card.bjd.copy":
    "Backend pipeline for an AI-assisted BJD diary application, connecting prompts, model configuration, Stable Diffusion generation, and image output management.",
  "card.triton.title": "Triton Optimization of GLM-ASR with FlashAttention",
  "card.triton.copy":
    "Custom Triton kernels and FlashAttention-style optimization for GLM-ASR inference, achieving faster end-to-end transcription while preserving baseline accuracy.",
  "map.note": "Use the wheel or buttons to zoom. Drag the map to explore. Highlighted countries are visited.",
  "map.reset": "Europe",
  "map.world": "World",
  "travel.viewAll": "View all travel logs",
  "travelPage.eyebrow": "Travel Logs",
  "travelPage.title": "A calendar of places I have been",
  "travelPage.copy": "Each country card is a placeholder for future photos, routes, memories, and tiny notes.",
  "travelPage.backMap": "Back to map",
  "map.visited": "Visited",
  "map.future": "Future",
  "travel.china": "China",
  "travel.chinaCopy": "Future notes for Suzhou, study life, field experiments, and favorite daily routes.",
  "travel.uk": "United Kingdom",
  "travel.ukCopy": "Future notes for Edinburgh, university life, museums, cafes, and walking maps.",
  "travel.spain": "Spain",
  "travel.spainCopy": "Future notes for Spanish cities, routes, food, colors, and travel snapshots.",
  "travel.iceland": "Iceland",
  "travel.icelandCopy": "Future notes for landscapes, road trips, northern light moods, and nature diaries.",
  "travel.belgium": "Belgium",
  "travel.belgiumCopy": "Future notes for Brussels, museums, street corners, and soft city details.",
  "travel.czechia": "Czech Republic",
  "travel.czechiaCopy": "Future notes for Prague walks, architecture, cafes, and travel sketches.",
  "travel.hungary": "Hungary",
  "travel.hungaryCopy": "Future notes for Budapest, river views, thermal baths, and evening lights.",
  "travel.austria": "Austria",
  "travel.austriaCopy": "Future notes for Vienna, music, museums, pastries, and city walks.",
  "travel.france": "France",
  "travel.franceCopy": "Future notes for galleries, streets, food, and small moments in France.",
  "travel.norway": "Norway",
  "travel.norwayCopy": "Future notes for fjords, northern scenery, quiet routes, and cold blue palettes.",
  "travel.poland": "Poland",
  "travel.polandCopy": "Future notes for Polish cities, history, food, and daily fragments.",
  "travel.denmark": "Denmark",
  "travel.denmarkCopy": "Future notes for Copenhagen, design, harbor walks, and cozy city textures.",
  "travel.netherlands": "Netherlands",
  "travel.netherlandsCopy": "Future notes for canals, museums, cycling routes, and Dutch light.",
  "travelLog.chinaTitle": "Suzhou routines and field notes",
  "travelLog.ukTitle": "Edinburgh walks and quiet corners",
  "travelLog.spainTitle": "Warm colors and city routes",
  "travelLog.icelandTitle": "Cold light and wide landscapes",
  "travelLog.belgiumTitle": "Museums, streets, and soft details",
  "travelLog.czechiaTitle": "Prague walks and sketchable buildings",
  "travelLog.hungaryTitle": "River views and evening lights",
  "travelLog.austriaTitle": "Vienna, music, and pastries",
  "travelLog.franceTitle": "Galleries, streets, and small moments",
  "travelLog.norwayTitle": "Fjords and cold blue palettes",
  "travelLog.polandTitle": "History, food, and city fragments",
  "travelLog.denmarkTitle": "Design, harbor walks, and cozy textures",
  "travelLog.netherlandsTitle": "Canals, museums, and Dutch light",
  "travel.future": "More countries coming soon",
  "travel.futureCopy": "Tell me the next countries you want to light up, and I will add them to the map."
});

Object.assign(translations.zh, {
  "card.bjd.title": "AI 协作式 BJD 日记",
  "card.bjd.copy":
    "为 AI 辅助 BJD 日记应用搭建后端流程，连接用户提示词、模型配置、Stable Diffusion 生成和图像输出管理。",
  "card.triton.title": "基于 Triton 与 FlashAttention 的 GLM-ASR 优化",
  "card.triton.copy":
    "为 GLM-ASR 推理实现自定义 Triton kernel 和 FlashAttention 风格优化，在保持基线准确率的同时提升端到端转录速度。",
  "map.note": "可以用滚轮或按钮缩放，也可以拖拽地图查看细节。高亮国家是我去过的地方。",
  "map.reset": "欧洲",
  "map.world": "世界",
  "travel.viewAll": "查看全部旅行日志",
  "travelPage.eyebrow": "旅行日志",
  "travelPage.title": "我去过的地方日历",
  "travelPage.copy": "每一个国家卡片都先放了示例文字和图片，之后可以替换成真实照片、路线、记忆和碎碎念。",
  "travelPage.backMap": "返回地图",
  "map.visited": "去过",
  "map.future": "未来",
  "travel.china": "中国",
  "travel.chinaCopy": "未来可放苏州、学习生活、实地实验和日常路线记录。",
  "travel.uk": "英国",
  "travel.ukCopy": "未来可放爱丁堡、大学生活、博物馆、咖啡店和散步地图。",
  "travel.spain": "西班牙",
  "travel.spainCopy": "未来可放西班牙城市、路线、美食、色彩和旅行照片。",
  "travel.iceland": "冰岛",
  "travel.icelandCopy": "未来可放自然风景、公路旅行、极光氛围和自然日记。",
  "travel.belgium": "比利时",
  "travel.belgiumCopy": "未来可放布鲁塞尔、博物馆、街角和柔软的城市细节。",
  "travel.czechia": "捷克",
  "travel.czechiaCopy": "未来可放布拉格散步、建筑、咖啡店和旅行速写。",
  "travel.hungary": "匈牙利",
  "travel.hungaryCopy": "未来可放布达佩斯、河景、温泉和夜晚灯光。",
  "travel.austria": "奥地利",
  "travel.austriaCopy": "未来可放维也纳、音乐、博物馆、甜点和城市漫步。",
  "travel.france": "法国",
  "travel.franceCopy": "未来可放画廊、街道、美食和法国旅行中的小瞬间。",
  "travel.norway": "挪威",
  "travel.norwayCopy": "未来可放峡湾、北欧风景、安静路线和冷蓝色调。",
  "travel.poland": "波兰",
  "travel.polandCopy": "未来可放波兰城市、历史、美食和日常片段。",
  "travel.denmark": "丹麦",
  "travel.denmarkCopy": "未来可放哥本哈根、设计、港口散步和舒适的城市质感。",
  "travel.netherlands": "荷兰",
  "travel.netherlandsCopy": "未来可放运河、博物馆、骑行路线和荷兰光线。",
  "travelLog.chinaTitle": "苏州日常与实地记录",
  "travelLog.ukTitle": "爱丁堡散步和安静角落",
  "travelLog.spainTitle": "温暖色彩和城市路线",
  "travelLog.icelandTitle": "冷光与辽阔风景",
  "travelLog.belgiumTitle": "博物馆、街道和柔软细节",
  "travelLog.czechiaTitle": "布拉格散步和适合速写的建筑",
  "travelLog.hungaryTitle": "河景和夜晚灯光",
  "travelLog.austriaTitle": "维也纳、音乐和甜点",
  "travelLog.franceTitle": "画廊、街道和小瞬间",
  "travelLog.norwayTitle": "峡湾和冷蓝色调",
  "travelLog.polandTitle": "历史、美食和城市片段",
  "travelLog.denmarkTitle": "设计、港口散步和舒适质感",
  "travelLog.netherlandsTitle": "运河、博物馆和荷兰光线",
  "travel.future": "更多国家待加入",
  "travel.futureCopy": "告诉我下一个想点亮的国家，我会把它加入地图。"
});

Object.assign(projectTranslations.en, {
  bjd: {
    date: "Jan. 2026 - Present",
    title: "AI Co-facilitated BJD Diary",
    summary:
      "An AI-assisted diary system for BJD character visual storytelling, connecting prompts, model settings, Stable Diffusion generation, and image output management.",
    points: [
      "Built the backend pipeline connecting user prompts, model configuration, Stable Diffusion generation, and image output management.",
      "Integrated Stable Diffusion with customized LoRA models to generate consistent BJD character images for diary-style storytelling.",
      "Designed and curated LoRA training datasets with structured captions, controlled image categories, and repeat-setting experiments.",
      "Optimized prompt templates and generation parameters through iterative testing for more controllable pose, clothing, background, and character appearance."
    ],
    tags: ["Stable Diffusion", "LoRA", "Backend", "Prompt Engineering", "Dataset Curation"]
  },
  triton: {
    date: "Jan. 2026 - Apr. 2026",
    title: "Triton-based Optimization of GLM-ASR with FlashAttention",
    summary:
      "A machine learning systems project optimizing GLM-ASR inference with custom Triton kernels, GPU profiling, and FlashAttention-style attention computation.",
    points: [
      "Implemented custom Triton kernels for GLM-ASR inference, including element-wise, reduction, matrix multiplication, RoPE, and attention kernels.",
      "Conducted GPU profiling and bottleneck analysis on an RTX 5070 Laptop GPU.",
      "Identified autoregressive decoder latency and memory-bound attention as the main system bottlenecks.",
      "Optimized attention with a FlashAttention-style Triton kernel using online softmax and block-wise QK/V accumulation.",
      "Compared tile-size tuning, kernel fusion, and FlashAttention strategies, achieving 1.77x end-to-end speedup while preserving 100% transcription accuracy."
    ],
    tags: ["Triton", "FlashAttention", "GLM-ASR", "GPU Profiling", "Machine Learning Systems"]
  }
});

Object.assign(projectTranslations.zh, {
  bjd: {
    date: "2026 年 1 月 - 至今",
    title: "AI 协作式 BJD 日记",
    summary:
      "面向 BJD 角色视觉叙事的 AI 辅助日记系统，连接提示词、模型配置、Stable Diffusion 生成和图像输出管理。",
    points: [
      "搭建后端流程，连接用户提示词、模型配置、Stable Diffusion 生成和图像输出管理。",
      "集成 Stable Diffusion 与定制 LoRA 模型，为日记式视觉叙事生成一致的 BJD 角色图像。",
      "设计并整理 LoRA 训练数据集，包括结构化 caption、受控图像类别和 repeat 参数实验。",
      "通过迭代测试优化提示词模板和生成参数，提升姿态、服装、背景和角色外观的可控性。"
    ],
    tags: ["Stable Diffusion", "LoRA", "后端", "提示词工程", "数据集整理"]
  },
  triton: {
    date: "2026 年 1 月 - 2026 年 4 月",
    title: "基于 Triton 与 FlashAttention 的 GLM-ASR 优化",
    summary:
      "机器学习系统课程项目，通过自定义 Triton kernel、GPU profiling 和 FlashAttention 风格注意力计算优化 GLM-ASR 推理。",
    points: [
      "为 GLM-ASR 推理实现自定义 Triton kernel，包括 element-wise、reduction、矩阵乘法、RoPE 和 attention kernel。",
      "在 RTX 5070 Laptop GPU 上进行 GPU 性能 profiling 和瓶颈分析。",
      "定位自回归 decoder 延迟和 memory-bound attention 为主要系统瓶颈。",
      "使用 online softmax 和 block-wise QK/V accumulation 实现 FlashAttention 风格 Triton attention kernel。",
      "对比 tile-size tuning、kernel fusion 和 FlashAttention 策略，在保持 100% 转录准确率的同时实现 1.77 倍端到端加速。"
    ],
    tags: ["Triton", "FlashAttention", "GLM-ASR", "GPU Profiling", "机器学习系统"]
  }
});

let currentLanguage = localStorage.getItem("language") || "en";
let activeProjectKey = null;

const dialog = document.querySelector(".project-dialog");
const closeButton = document.querySelector(".dialog-close");
const title = document.querySelector("#project-dialog-title");
const date = document.querySelector("#project-dialog-date");
const summary = document.querySelector("#project-dialog-summary");
const points = document.querySelector("#project-dialog-points");
const tags = document.querySelector("#project-dialog-tags");
const mapTooltip = document.querySelector("[data-map-tooltip]");
const worldMap = document.querySelector(".world-map");
const mapLayer = document.querySelector("[data-map-layer]");
let mapState = { scale: 4, x: -1580, y: -220 };
let dragState = null;

function closestCountry(target) {
  if (!target || typeof target.closest !== "function") {
    return null;
  }

  return target.closest(".map-country");
}

function navigateCountry(country) {
  if (!country || !country.classList.contains("visited")) {
    return;
  }

  const href = country.getAttribute("href");

  if (href) {
    window.location.assign(href);
  }
}

function renderMap() {
  if (!mapLayer) {
    return;
  }

  mapLayer.setAttribute(
    "transform",
    `translate(${mapState.x.toFixed(2)} ${mapState.y.toFixed(2)}) scale(${mapState.scale.toFixed(3)})`
  );
}

function setMapView(nextState) {
  mapState = {
    scale: Math.min(7, Math.max(1, nextState.scale)),
    x: nextState.x,
    y: nextState.y
  };
  renderMap();
}

function showEuropeMap() {
  setMapView({ scale: 4, x: -1580, y: -220 });
}

function showWorldMap() {
  setMapView({ scale: 1, x: 0, y: 0 });
}

function zoomMap(factor, point) {
  const nextScale = Math.min(7, Math.max(1, mapState.scale * factor));
  const ratio = nextScale / mapState.scale;

  setMapView({
    scale: nextScale,
    x: point.x - (point.x - mapState.x) * ratio,
    y: point.y - (point.y - mapState.y) * ratio
  });
}

function getMapPoint(event) {
  const rect = worldMap.getBoundingClientRect();

  return {
    x: ((event.clientX - rect.left) / rect.width) * 1000,
    y: ((event.clientY - rect.top) / rect.height) * 520
  };
}

function applyLanguage(language) {
  currentLanguage = translations[language] ? language : "en";
  localStorage.setItem("language", currentLanguage);
  document.documentElement.lang = currentLanguage === "zh" ? "zh-CN" : "en";

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.dataset.i18n;
    const hasValue = Object.prototype.hasOwnProperty.call(translations[currentLanguage], key);

    if (hasValue) {
      element.textContent = translations[currentLanguage][key];
    }
  });

  document.querySelectorAll("[data-lang-switch]").forEach((button) => {
    button.setAttribute("aria-pressed", String(button.dataset.langSwitch === currentLanguage));
  });

  if (activeProjectKey && dialog?.open) {
    fillProjectDialog(activeProjectKey);
  }

  if (mapTooltip) {
    mapTooltip.textContent = currentLanguage === "zh" ? "划过国家查看名称" : "Hover a country";
  }
}

function fillProjectDialog(projectKey) {
  const project = projectTranslations[currentLanguage][projectKey];

  if (!project || !dialog) {
    return;
  }

  date.textContent = project.date;
  title.textContent = project.title;
  summary.textContent = project.summary;
  points.innerHTML = project.points.map((point) => `<li>${point}</li>`).join("");
  tags.innerHTML = project.tags.map((tag) => `<span>${tag}</span>`).join("");
}

function openProject(projectKey) {
  activeProjectKey = projectKey;
  fillProjectDialog(projectKey);

  if (!dialog) {
    return;
  }

  if (typeof dialog.showModal === "function") {
    dialog.showModal();
  } else {
    dialog.setAttribute("open", "");
  }
}

document.querySelectorAll("[data-lang-switch]").forEach((button) => {
  button.addEventListener("click", () => applyLanguage(button.dataset.langSwitch));
});

document.querySelectorAll("[data-project]").forEach((button) => {
  button.addEventListener("click", () => openProject(button.dataset.project));
});

document.querySelectorAll("[data-country-en]").forEach((country) => {
  country.addEventListener("mouseenter", () => {
    if (!mapTooltip) {
      return;
    }

    mapTooltip.textContent =
      currentLanguage === "zh" ? country.dataset.countryZh : country.dataset.countryEn;
  });

  country.addEventListener("focus", () => {
    if (!mapTooltip) {
      return;
    }

    mapTooltip.textContent =
      currentLanguage === "zh" ? country.dataset.countryZh : country.dataset.countryEn;
  });

  country.addEventListener("click", (event) => {
    event.preventDefault();

    if (!country.classList.contains("visited")) {
      return;
    }

    navigateCountry(country);
  });
});

document.querySelectorAll("[data-map-control]").forEach((button) => {
  button.addEventListener("click", () => {
    const control = button.dataset.mapControl;

    if (control === "zoom-in") {
      zoomMap(1.25, { x: 500, y: 260 });
    }

    if (control === "zoom-out") {
      zoomMap(0.8, { x: 500, y: 260 });
    }

    if (control === "reset") {
      showEuropeMap();
    }

    if (control === "world") {
      showWorldMap();
    }
  });
});

if (worldMap) {
  worldMap.addEventListener(
    "wheel",
    (event) => {
      event.preventDefault();
      zoomMap(event.deltaY < 0 ? 1.16 : 0.86, getMapPoint(event));
    },
    { passive: false }
  );

  worldMap.addEventListener("pointerdown", (event) => {
    if (event.button !== 0) {
      return;
    }

    dragState = {
      pointerId: event.pointerId,
      startX: event.clientX,
      startY: event.clientY,
      mapX: mapState.x,
      mapY: mapState.y,
      country: closestCountry(event.target)
    };
    worldMap.classList.add("is-dragging");
    worldMap.setPointerCapture(event.pointerId);
  });

  worldMap.addEventListener("pointermove", (event) => {
    if (!dragState || dragState.pointerId !== event.pointerId) {
      return;
    }

    const rect = worldMap.getBoundingClientRect();
    const dx = ((event.clientX - dragState.startX) / rect.width) * 1000;
    const dy = ((event.clientY - dragState.startY) / rect.height) * 520;
    setMapView({
      scale: mapState.scale,
      x: dragState.mapX + dx,
      y: dragState.mapY + dy
    });
  });

  worldMap.addEventListener("pointerup", (event) => {
    if (!dragState || dragState.pointerId !== event.pointerId) {
      return;
    }

    const distance = Math.hypot(event.clientX - dragState.startX, event.clientY - dragState.startY);
    const country = dragState.country || closestCountry(event.target);

    dragState = null;
    worldMap.classList.remove("is-dragging");

    if (distance < 6) {
      navigateCountry(country);
    }
  });

  worldMap.addEventListener("pointerleave", () => {
    dragState = null;
    worldMap.classList.remove("is-dragging");
  });
}

if (closeButton && dialog) {
  closeButton.addEventListener("click", () => dialog.close());
  dialog.addEventListener("click", (event) => {
    if (event.target === dialog) {
      dialog.close();
    }
  });
}

renderMap();
applyLanguage(currentLanguage);
