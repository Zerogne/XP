"use client"

import { motion } from "framer-motion"
import { useLanguage } from "../../contexts/LanguageContext"
import { ArrowLeft, ExternalLink, Github, Globe, Calendar, Users, Code, User } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { useParams, useRouter } from "next/navigation"

// Developer profiles
const developers = [
  {
    name: "Danny",
    role: "Full Stack хөгжүүлэгч",
    avatar: "/placeholder-user.jpg", // You can replace with actual avatar
    initials: "DN"
  },
  {
    name: "Bayrbaysalan",
    role: "Full Stack хөгжүүлэгч",
    avatar: "/placeholder-user.jpg", // You can replace with actual avatar
    initials: "BB"
  }
]

// Project data - you can move this to a separate file later
const projectData = {
  "winacademy": {
    title: {
      mn: "WinAcademy – Маркетинг, Дизайн, AI, Бодит Ур Чадвар Олгох Платформ",
      en: "WinAcademy – Marketing, Design, AI, Practical Skills Learning Platform"
    },
    subtitle: {
      mn: "Маркетинг, дизайн, хиймэл оюун (AI)-ийн практик ур чадварыг хөгжүүлэх онлайн сургалтын платформ.",
      en: "Online learning platform for developing practical skills in marketing, design, and artificial intelligence (AI)"
    },
    description: {
      mn: "WinAcademy нь \"Суралц · Бүтээ · Ажилд ор\" зарчмаар оюутнууд болон карьерийн эхэн үеийн залууст богино хугацаанд мэдлэг олгож, бодит даалгавраар баталгаажуулж, ажилд зуучлуулахад чиглэсэн цогц платформ юм.",
      en: "WinAcademy is a comprehensive platform following the \"Learn · Build · Get Hired\" principle, designed to provide students and early-career professionals with knowledge in a short time, validate through real projects, and connect them to employment opportunities."
    },
    longDescription: {
      mn: "Орчин үеийн веб технологид тулгуурласан WinAcademy нь онлайн сургалтыг хэрэглэгчдэд шууд хүртээмжтэй, хялбар ойлгомжтой хүргэдэг.\n\nКурсын каталог, гишүүнчлэлийн систем, онлайн төлбөрийн шийдэл, медиа хичээл, хэрэглэгчийн сэтгэгдэл болон админ самбар бүхий бүрэн шийдэлтэйгээр бүтээгдсэн.",
      en: "Built on modern web technologies, WinAcademy delivers online learning that is immediately accessible and easy to understand for users.\n\nIt's a complete solution featuring course catalogs, membership systems, online payment solutions, media lessons, user reviews, and admin dashboards."
    },
    imageUrl: "/Screenshot 2025-09-05 201346.png",
    category: {
      mn: "Веб хөгжүүлэлт",
      en: "Web Development"
    },
    liveUrl: "https://winacademy.mn",
    githubUrl: null,
    technologies: ["Next.js", "TypeScript", "Tailwind", "MongoDB", "Cloudinary", "NextAuth", "QPay API"],
    features: {
      mn: [
        "Курсын каталог, түргэн элсэлт",
        "Гишүүнчлэлийн систем (membership access)",
        "QPay интеграцтай онлайн төлбөрийн систем",
        "Видео сургалт ба медиа сан",
        "Хэрэглэгчийн үнэлгээ, сэтгэгдэл",
        "CMS (мэдээ, зар, FAQ)",
        "Админ самбар: контент, хэрэглэгч, төлбөр удирдах",
        "Гүйцэтгэлийн аналитик, аудит лог"
      ],
      en: [
        "Course catalog with quick enrollment",
        "Membership system (membership access)",
        "Online payment system with QPay integration",
        "Video training and media library",
        "User ratings and reviews",
        "CMS (news, announcements, FAQ)",
        "Admin dashboard: content, user, and payment management",
        "Performance analytics and audit logs"
      ]
    },
    challenges: {
      mn: [
        "Онлайн төлбөрийн системийг шууд сургалтын хандалттай уялдуулах",
        "Их хэмжээний видео ба медиа контентыг оновчтой удирдах",
        "Гишүүнчлэл ба сургалтын хандалтын түвшинг удирдах",
        "Аюулгүй нэвтрэлт ба хэрэглэгчийн өгөгдөл хамгаалах"
      ],
      en: [
        "Integrating online payment system with immediate course access",
        "Optimally managing large amounts of video and media content",
        "Managing membership and course access levels",
        "Secure authentication and user data protection"
      ]
    },
    solutions: {
      mn: [
        "QPay API ашиглан төлбөр төлсний дараа хичээлд автоматаар хандалт олгох webhook холболт хийсэн",
        "Cloudinary ашиглан медиа файлуудыг шахаж, хурдтай стрийминг шийдсэн",
        "Membership system-ийг MongoDB дээр role-based access control-оор хэрэгжүүлсэн",
        "NextAuth ашиглан Google/Facebook нэвтрэлтийг аюулгүй холбож, хэрэглэгчийн эрхийн удирдлагыг төвлөрүүлсэн"
      ],
      en: [
        "Implemented webhook connection using QPay API to automatically grant course access after payment",
        "Solved fast streaming by compressing media files using Cloudinary",
        "Implemented membership system with role-based access control on MongoDB",
        "Securely connected Google/Facebook authentication using NextAuth and centralized user permission management"
      ]
    },
    stats: {
      students: "120+",
      courses: "15+",
      hired: "120+",
      satisfaction: "95%"
    },
    timeline: {
      mn: "1 сар",
      en: "1 month"
    },
    team: {
      mn: "2 хөгжүүлэгч",
      en: "2 developers"
    }
  },
  "xperience": {
    title: "Xperience – Дижитал Дадлагын Төв",
    subtitle: "Монголын оюутан сурагчдад дадлага, цагийн ажил, төсөлд оролцох боломжуудтай холбож, боловсрол ба ажил мэргэжлийн гүүр болох платформ.",
    description: "Xperience нь академик мэдлэг ба бодит ажлын туршлагын хоорондох зайг нөхөх зорилготой цогц платформ юм. Энэхүү платформ нь зорилготой, идэвхтэй оюутан, залуу мэргэжилтнүүдийг үнэ цэнтэй дадлага, менторшип хөтөлбөр болон ур чадвар хөгжүүлэх эх сурвалжуудтай холбодог.",
    longDescription: "Орчин үеийн веб технологиор бүтээгдсэн Xperience нь дадлага хайж буй оюутан, чадварлаг хүн хайж буй компаниудад ойлгомжтой, шууд хэрэглэгчийн туршлагыг санал болгодог. Платформ нь дэвшилтэт хайлт ба шүүлтүүрийн боломж, бодит цагийн мэдэгдэл, өргөдөл ба ахиц дэвшилээ хянах иж бүрэн самбар зэрэг онцлогтой. Мөн урт хугацаанд тогтвортой ажиллахуйц найдвартай, аюулгүй админ самбартай.",
    imageUrl: "/xperience.png",
    category: "Веб хөгжүүлэлт",
    liveUrl: "https://xperience.mn",
    githubUrl: null,
    technologies: ["Next.js", "TypeScript", "MongoDB", "Cloudinary", "NextAuth"],
    features: [
      "Олон төрлийн нэвтрэх арга (Google, Facebook, Имэйл гэх мэт)",
      "Дадлагын ангилалууд",
      "Бодит цагийн мэдэгдэл",
      "Өргөдлийн явцыг хянах боломж",
      "Компанийн самбар",
      "Бүх төрлийн төхөөрөмжид нийцдэг админ самбар"
    ],
    challenges: [
      "Нарийн төвөгтэй хайлтын алгоритм хэрэгжүүлэх",
      "Өгөгдөл бүр шууд автоматаар шинэчлэгдэх",
      "Бүх төрлийн төхөөрөмжид нийцсэн дизайн хийх",
      "Их хэмжээний өгөгдөлтэй хуудсуудын гүйцэтгэлийг хадгалах"
    ],
    solutions: [
      "Хайлтыг илүү үр дүнтэй болгохын тулд Elasticsearch ашигласан",
      "Бодит цагийн шинэчлэл хийхийн тулд WebSocket холболт хэрэгжүүлсэн",
      "Mobile-first дизайн ашигласан",
      "Өгөгдлийг оновчтой татахын тулд React Query ашигласан"
    ],
    stats: {
      users: "1000+",
      companies: "50+",
      internships: "200+",
      successRate: "85%"
    },
    timeline: "3 сар",
    team: "2 хөгжүүлэгч"
  },
  "han-education": {
    title: "Han Education – Гадаадад Сурах, Хэлний Хөтөлбөрийн Платформ",
    subtitle: "Сурагчдад хичээл, хэлний сургалт болон гадаадад суралцах боломжуудыг нээж өгөх орчин үеийн боловсролын веб сайт.",
    description: "Han Education нь Монголын сурагчдад нэр хүндтэй БНХАУ-ын их сургуулиуд болон тэтгэлгийн хөтөлбөрүүдтэй холбогдох боломжийг олгодог боловсролын зөвлөх үйлчилгээний платформ юм. Энэхүү платформ нь олон улсын боловсролын өргөдөл гаргах нарийн төвөгтэй процессыг хялбарчлан сурагчдыг чиглүүлнэ.",
    longDescription: "Han education нь Хятадын их сургуульд элсэх үйл явцыг алхам алхмаар хөтлөн чиглүүлэх, баримт бичиг бүрдүүлэхэд туслах зөвлөх ажилтантай холбоо барих боломжийг олгоно. Харин админ хэсэг нь хурдан, найдвартай бөгөөд урт хугацаанд тогтвортой ажиллахуйц хянах самбараар бүх үйл ажиллагааг удирдах боломжтойгоос гадна холбоо барих мэдээллүүдээ үлдээсэн сурагчидтайгаа хурдан найдвартайгаар холбоо барих нөхцлийг бүрдүүлсэн онцлотой.",
    imageUrl: "/haneducation.png",
    category: "Web Development",
    liveUrl: "https://haneducation.mn",
    githubUrl: null,
    technologies: ["Next.js", "TypeScript", "Tailwind", "MongoDB", "Cloudinary"],
    features: [
      "Хэрэглэгчийн мэдээлэл цуглуулалт",
      "Агуулгын Удирдлагын Систем засварлах эрх",
      "Олон хэлний дэмжлэг",
      "SEO оновчлол",
      "Үүрэгт суурилсан админы хяналт",
      "Зөвлөх ажилтантай шууд холбоо барих",
      "Баримт бичиг бүрдүүлэх туслалцаа",
      "Алхам алхмын чиглүүлэлт"
    ],
    challenges: [
      "Олон улсын боловсролын өргөдөл гаргах нарийн төвөгтэй процессыг хялбарчлах",
      "Сурагчид болон зөвлөх ажилтны хооронд хурдан найдвартай холбоо барих",
      "Мэдээллийн аюулгүй байдал, зөв мэдээллийн урсгалыг хангах",
      "Хятадын их сургуулиудын мэдээллийг тогтмол шинэчлэх",
      "Олон хэлний дэмжлэг нэвтрүүлэх"
    ],
    solutions: [
      "Хэрэглэгчийн мэдээлэл цуглуулах иж бүрэн форм систем бүтээсэн",
      "Сурагчдыг үр дүнтэй удирдах админ самбар хөгжүүлсэн",
      "Мэдээллийн аюулгүй урсгалыг зөв шифрлэлтээр хэрэгжүүлсэн",
      "Компани болон сурагчдын хооронд найдвартай харилцаа холбооны суваг бүтээсэн",
      "SEO оновчлолоор илүү олон хүнд хүрэх боломжийг бүрдүүлсэн"
    ],
    stats: {
      students: "500+",
      universities: "30+",
      countries: "3",
      satisfaction: "92%"
    },
    timeline: "2 долоо хоног",
    team: "2 хөгжүүлэгч"
  },
  "sunrise-mongolia": {
    title: "Sunrise Mongolia – Аялал жуулчлалын платформ",
    subtitle: "Монгол орны шилдэг аялалуудыг танилцуулж, захиалга өгөх боломжтой орчин үеийн аялал жуулчлалын веб сайт.",
    description: "Sunrise Mongolia нь Монгол орны хамгийн сайхан аялал, адал явдлуудыг танилцуулах зорилготой инновацийн аялал жуулчлалын платформ юм. Энэхүү платформ нь аялагчдад аялалын талаархи дэлгэрэнгүй мэдээлэл болон найдвартай хэрэглэгчийн туршлагыг олгодог.",
    longDescription: "Орчин үеийн веб технологиор бүтээгдсэн Sunrise Mongolia нь Монголд адал явдал хайж буй аялагчдад ойлгомжтой хэрэглэгчийн туршлагыг санал болгодог. Платформ нь шүүлтүүртэй аялалын каталог, медиа галерей, SEO оновчтой нүүр хуудсууд, захиалгын хүсэлтийн форм зэрэг онцлогтой. Админууд урт хугацаанд найдвартай удирдахын тулд хариуцлагатай админ самбараар аялалын хөтөлбөр, үнэ, урамшуулал зэргийг шинэчилж болно.",
    imageUrl: "/SunriseMongolia.png",
    category: "Веб хөгжүүлэлт",
    liveUrl: "https://sunrisemongolia.com",
    githubUrl: null,
    technologies: ["Next.js", "TypeScript", "Tailwind", "MongoDB", "Cloudinary", "ReCAPTCHA"],
    features: [
      "Шүүлтүүртэй аялалын каталог",
      "Медиа галерей",
      "SEO оновчтой нүүр хуудсууд", 
      "Захиалгын хүсэлтийн форм",
      "Уян хатан вебсайт удирдлагын админ самбар",
      "Гүйцэтгэлд төвлөрсөн UI"
    ],
    challenges: [
      "Төрөл бүрийн аялалын хөтөлбөр, сонголтыг зохицуулж чадах нарийн төвөгтэй аялалын шүүлтүүрийн систем зохиох",
      "Гүйцэтгэлийг удаашруулахгүйгээр их хэмжээний медиа контентыг удирдах, оновчлох",
      "Техникийн мэдлэггүй хэрэглэгчдэд контент засах, шинэ санал нэмэх, зураг удирдах боломжийг олгох уян хатан админ самбар бүтээх",
      "Харааны баялаг, медиа ихтэй платформын өндөр гүйцэтгэлийг хангах"
    ],
    solutions: [
      "MongoDB агрегацийг ашиглан аялагчдад нарийвчилсан, хурдан хайлт хийх боломжтой тусгай аялалын шүүлтүүрийн хөдөлгүүр хөгжүүлсэн",
      "Cloudinary-г нэгтгэн медиа боловсруулалтыг оновчтой болгож, хурдан ачаалах хугацаа, өндөр чанарын дүрслэлийг хүргэсэн",
      "Админууд мэдээлэл шинэчлэх, шинэ зураг оруулах, аялал удирдах, онцлог нэмэх боломжтой хүчирхэг админ самбар бүтээж, хөгжүүлэгчдээс хараат бус урт хугацаанд уян хатан байдлыг хангасан",
      "Next.js-ийн зургийн оновчлол, кэшлэлтийг ашиглан бүх төхөөрөмж дээр хурд, найдвартай байдлыг нэмэгдүүлсэн"
    ],
    stats: {
      tours: "50+",
      destinations: "20+",
      bookings: "100+",
      rating: "4.8/5"
    },
    timeline: "2 долоо хоног",
    team: "2 хөгжүүлэгч"
  },
  "new-era": {
    title: "New Era – Ерөнхий боловсрол ба Хичээлүүдийн платформ",
    subtitle: "Эцэг эх, сурагчдад зориулсан ээлтэй боловсролын сайт. Хөтөлбөрийн мэдээлэл, элсэлт, мэдээ зар, медиа галерей зэрэг бүх мэдээллийг нэг дор төвлөрүүлсэн.",
    description: "New Era нь эцэг эх, сурагчдад сургуулийн мэдээлэл, хөтөлбөрийн дэлгэрэнгүй болон элсэлтийн үйл явцад хялбархан нэвтрэх боломжийг олгохоор бүтээгдсэн цогц боловсролын платформ юм. Энэхүү платформ нь сургуулийн бүхий л мэдээлэл, харилцаа холбооны төв цэг болж үйлчилнэ.",
    longDescription: "Орчин үеийн веб технологиор бүтээсэн New Era нь сургуулийн бүх талын мэдээллийг ойлгомжтой, шууд хүртээмжтэйгээр хүргэдэг. Элсэлтийн хуудас, түгээмэл асуулт (FAQ), мэдээ зарын CMS, галерей, сэтгэгдэл, аудит лог бүхий админ хяналт зэргийг агуулсан. Ажилтнууд контент, хуанли, нүүр хэсгийг хүчирхэг, найдвартай админ самбараар удирдах боломжтой.",
    imageUrl: "/newera.png",
    category: "Web Development",
    liveUrl: "https://edunewera.mn",
    githubUrl: null,
    technologies: ["Next.js", "TypeScript", "Tailwind", "MongoDB", "Cloudinary", "NextAuth", "Bunny.net", "TUS"],
    features: [
      "Түгээмэл асуултуудтай админ хуудсууд",
      "Зар, мэдээний Агуулгын Удирдлагын Систем",
      "Галерей",
      "Сэтгэгдэл, үнэлгээ",
      "Аудит логтой үүрэгт суурилсан админ удирдлага",
      "Бүх төрлийн дэлгэц дээр асуудалгүй ажиллах дизайн",
      "Онлайн хичээлүүдийг хурдан, аюулгүй тоглуулах",
      "Төлбөр шалгах систем"
    ],
    challenges: [
      "Нарийн төвөгтэй контент менежментийн систем хэрэгжүүлэх",
      "Үүрэгт суурилсан нэвтрэх хяналт суурилуулах",
      "Гар утсанд ээлтэй дизайн хийх",
      "Контент ихтэй хуудсуудын чанартай гүйцэтгэлийг хадгалах",
      "Онлайн хичээлүүдийг хурдан, аюулгүй тоглуулах",
      "Төлбөр шалгах систем нэвтрүүлэх"
    ],
    solutions: [
      "Үүрэгт суурилсан зөвшөөрөлтэй тусгай Агуулгын Удирдлагын Систем бүтээсэн",
      "Аюулгүй нэвтрэлтэд NextAuth ашигласан",
      "Гар утсанд нийцсэн дизайн ашигласан",
      "Гүйцэтгэл сайжруулахад Next.js-ийн боломжуудыг ашигласан",
      "SSR буюу Server Sided Rendering ашигласнаар сайтын ажиллах хурдыг ахиулсан",
      "Bunny.net болон TUS технологи ашиглан видео контентыг оновчтой удирдсан"
    ],
    stats: {
      students: "300+",
      programs: "25+",
      courses: "100+",
      satisfaction: "95%"
    },
    timeline: "4 долоо хоног",
    team: "2 хөгжүүлэгч"
  },
  "tellu": {
    title: "TellU – Сурагчдын Сэтгэгдэл илэрхийлэх Платформ",
    subtitle: "Сурагчдад сургууль, их сургуулийнхаа талаар шударга сэтгэгдэлээ хуваалцах боломж олгодог гар утсанд ээлтэй платформ.",
    description: "TellU нь сурагчдад өөрийн сургууль болон их сургуулийн талаар үнэн зөв, шударга сэтгэгдэл үлдээх боломжийг олгодог гар утсанд төвлөрсөн платформ юм. Энэ нь сурагчид санал бодлоо илэрхийлэх, сургалтын дэд бүтцийг үнэлэх, давуу болон сул талыг тодруулах гэх зэрэг хүссэн үнэлгээгээ өгөх аюулгүй орон зайг бүрдүүлдэг.",
    longDescription: "Орчин үеийн веб технологиор бүтээсэн TellU нь сурагчдад боловсролын туршлагаа аюулгүй, ойлгомжтойгоор хуваалцах боломжийг санал болгодог. Платформ нь баталгаатай нэвтрэлт, нэрээ нууцалсан сэтгэгдэл үлдээх боломж, хяналтын хэрэгсэл бүхий системтэй. Сурагчид сургуулийн дэд бүтэц, багшлах чанар, орчны үнэлгээг ангиллаар нь хуваан үнэлж болно. Харин UI/UX нь гар утасны хэрэглээнд зориулагдан онцгойлон зохиогдсон бол админ хэсэг нь сургуулийн мэдээлэл удирдах, агуулгуудыг хянаж болох иж бүрэн самбартай.",
    imageUrl: "/TellU.png",
    category: "Web Development",
    liveUrl: null,
    githubUrl: null,
    technologies: ["Next.js", "TypeScript", "MongoDB", "Cloudinary", "NextAuth", "Tailwind CSS"],
    features: [
      "Google, Facebook, Имэйл/Нууц үгээр нэвтрэх аюулгүй баталгаажуулалт",
      "Нэрээ нууцалсан сэтгэгдэл үлдээх боломж ба хяналтын хэрэгслүүд",
      "Дэд бүтэц, багшлах чанар, орчны ангиллаар үнэлгээ болон санал авах боломж",
      "Гар утсанд тохируулсан UI/UX дизайн",
      "Сургуулийн удирдлага болон контент хянах зориулалттай админ самбар"
    ],
    challenges: [
      "Аюулгүй, нэрээ нууцалсан сэтгэгдлийн систем хэрэгжүүлэх",
      "Иж бүрэн хяналтын хэрэгсэл бүхий систем бүтээх",
      "Гар утсанд төвлөрсөн дизайн хийх",
      "Өгөгдлийн нууцлал, аюулгүй байдлыг хангах"
    ],
    solutions: [
      "NextAuth ашиглан баталгаатай нэвтрэлтийг хэрэгжүүлсэн",
      "Админ удирдлагатай найдвартай хяналтын систем бүтээсэн",
      "Tailwind CSS ашиглан mobile-first дизайн хэрэгжүүлсэн",
      "MongoDB дээр өгөгдлийн шифрлэл, нууцлалын хяналтыг ашигласан"
    ],
    stats: {
      reviews: "500+",
      schools: "100+",
      students: "1000+",
      satisfaction: "94%"
    },
    timeline: "4 сар",
    team: "2 хөгжүүлэгч"
  }
}

// Helper function to get localized text
const getLocalizedText = (text: any, language: string) => {
  if (typeof text === 'string') return text
  if (typeof text === 'object' && text !== null) {
    // Check if it's an array (for features, challenges, solutions)
    if (Array.isArray(text)) return text
    // Check if it has language keys
    if (text[language]) return text[language]
    if (text.mn) return text.mn
    if (text.en) return text.en
    // If it's an object but no language keys, return empty string
    return ''
  }
  return text || ''
}

export default function ProjectDetails() {
  const { slug } = useParams()
  const router = useRouter()
  const { t, language } = useLanguage()

  const project = projectData[slug as keyof typeof projectData]

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-foreground mb-4">Төсөл олдсонгүй</h1>
          <Link href="/" className="text-primary hover:underline">Нүүр хуудас руу буцах</Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <motion.header
        className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <motion.button
              onClick={() => router.back()}
              className="flex items-center gap-2 text-foreground hover:text-primary transition-colors"
              whileHover={{ x: -5 }}
            >
              <ArrowLeft className="w-5 h-5" />
              Буцах
            </motion.button>

            <div className="flex items-center gap-4">
              {project.liveUrl && (
                <motion.a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-full hover:bg-primary/90 transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Globe className="w-4 h-4" />
                  Шууд үзэх
                </motion.a>
              )}
              {project.githubUrl && (
                <motion.a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-secondary text-secondary-foreground rounded-full hover:bg-secondary/80 transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Github className="w-4 h-4" />
                  Код
                </motion.a>
              )}
            </div>
          </div>
        </div>
      </motion.header>

      {/* Hero Section */}
      <motion.section
        className="py-20 relative overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <motion.div
                className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                {getLocalizedText(project.category, language)}
              </motion.div>

              <motion.h1
                className="text-4xl lg:text-6xl font-bold text-foreground mb-6 leading-tight"
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                {getLocalizedText(project.title, language)}
              </motion.h1>

              <motion.p
                className="text-xl text-muted-foreground mb-8 leading-relaxed"
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                {getLocalizedText(project.subtitle, language)}
              </motion.p>

              <motion.p
                className="text-lg text-foreground leading-relaxed"
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                {getLocalizedText(project.description, language)}
              </motion.p>
            </motion.div>

            {/* Image */}
            <motion.div
              className="relative"
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/20 rounded-3xl p-8 shadow-2xl">
                <Image
                  src={project.imageUrl}
                  alt={getLocalizedText(project.title, language)}
                  width={600}
                  height={400}
                  className="w-full h-auto rounded-2xl"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>



      {/* Details Section */}
      <motion.section
        className="py-20"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Left Column */}
            <div className="space-y-12">
              <motion.div
                initial={{ x: -50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h3 className="text-2xl font-bold text-foreground mb-6">Project Overview</h3>
                <p className="text-muted-foreground leading-relaxed whitespace-pre-line">{getLocalizedText(project.longDescription, language)}</p>
              </motion.div>

              <motion.div
                initial={{ x: -50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <h3 className="text-2xl font-bold text-foreground mb-6">Гол онцлогууд</h3>
                <ul className="space-y-3">
                  {getLocalizedText(project.features, language).map((feature, index) => (
                    <motion.li
                      key={index}
                      className="flex items-start gap-3"
                      initial={{ x: -20, opacity: 0 }}
                      whileInView={{ x: 0, opacity: 1 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                      <span className="text-muted-foreground">{feature}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </div>

            {/* Right Column */}
            <div className="space-y-12">
              <motion.div
                initial={{ x: 50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h3 className="text-2xl font-bold text-foreground mb-6">Ашигласан технологиуд</h3>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, index) => (
                    <motion.span
                      key={index}
                      className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm"
                      initial={{ scale: 0.8, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ x: 50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <h3 className="text-2xl font-bold text-foreground mb-6">Төслийн дэлгэрэнгүй</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Calendar className="w-5 h-5 text-primary" />
                    <span className="text-muted-foreground">Хугацаа: {getLocalizedText(project.timeline, language)}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Users className="w-5 h-5 text-primary" />
                    <span className="text-muted-foreground">Баг: {getLocalizedText(project.team, language)}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Code className="w-5 h-5 text-primary" />
                    <span className="text-muted-foreground">Ангилал: {getLocalizedText(project.category, language)}</span>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ x: 50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <h3 className="text-2xl font-bold text-foreground mb-6">Хөгжүүлэлтийн баг</h3>
                <div className="space-y-4">
                  {developers.map((developer, index) => (
                    <motion.div
                      key={developer.name}
                      className="flex items-center gap-4 p-3 bg-secondary/20 rounded-lg"
                      initial={{ x: 20, opacity: 0 }}
                      whileInView={{ x: 0, opacity: 1 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <div className="relative">
                        <div className="w-12 h-12 bg-gradient-to-br from-primary to-purple-600 rounded-full flex items-center justify-center text-white font-semibold shadow-lg">
                          {developer.initials}
                        </div>
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground">{developer.name}</h4>
                        <p className="text-sm text-muted-foreground">{developer.role}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ x: 50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <h3 className="text-2xl font-bold text-foreground mb-6">Сорилт ба Шийдлүүд</h3>
                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-foreground mb-3">Сорилтууд:</h4>
                    <ul className="space-y-2">
                      {getLocalizedText(project.challenges, language).map((challenge, index) => (
                        <li key={index} className="text-muted-foreground text-sm">• {challenge}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-3">Шийдлүүд:</h4>
                    <ul className="space-y-2">
                      {getLocalizedText(project.solutions, language).map((solution, index) => (
                        <li key={index} className="text-muted-foreground text-sm">• {solution}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.section>
    </div>
  )
}
