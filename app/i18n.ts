import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

const resources = {
  en: {
    translation: {
      nav: {
        home: "Home",
        rooms: "Explore Rooms",
        about: "About Us",
        book: "Book Now",
      },
      hero: {
        welcome: "Welcome to Excellence",
        title: "Experience the Art of Luxury Living",
        explore: "Explore Rooms",
        story: "Our Story",
        scroll: "Scroll to discover",
      },
      home: {
        experience: "The Shodlik Experience",
        sanctuary: "A Sanctuary of Sophistication",
        description:
          "Located in the heart of the city's most prestigious district, Shodlik Hotel & Spa represents the pinnacle of modern luxury. Every detail, from our hand-selected art collection to our bespoke concierge services, is designed to provide an unparalleled guest experience.",
        fineDining: "Fine Dining",
        pool: "Infinity Pool",
        wifi: "High-Speed WiFi",
        lounge: "Premium Lounge",
        learnMore: "Learn more about us",
        accommodations: "Our Accommodations",
        refinedComfort: "Refined Comfort",
        viewAll: "View all rooms",
        testimonial:
          '"An absolute masterpiece of hospitality. The attention to detail at Shodlik is unlike anything I\'ve experienced in my travels. A true home away from home."',
      },
      rooms: {
        title: "Rooms & Suites",
        subtitle: "Luxury Accommodations",
        description:
          "Each of our rooms is a masterpiece of design, blending contemporary elegance with timeless comfort. Discover your perfect sanctuary from our curated selection of suites and villas.",
        bookRoom: "Book This Room",
        viewDetails: "View Details",
        features: "Every Room Includes",
        standardFeatures: "Standard Features",
      },
      about: {
        title: "Defining Luxury Since 1998",
        subtitle: "Our Philosophy",
        description1:
          "Shodlik Hotel was founded on a simple yet profound vision: to create a sanctuary where the world's most discerning travelers could find absolute peace and unparalleled service.",
        description2:
          "Over the decades, we have evolved from a boutique guesthouse into a global icon of hospitality. Today, Shodlik stands as a testament to the enduring power of refined design, genuine warmth, and the relentless pursuit of excellence.",
        stats: {
          awards: "Global Awards",
          guests: "Happy Guests",
          countries: "Countries",
          dedication: "Dedication",
        },
        values: {
          title: "The Pillars of Shodlik",
          subtitle: "Our Values",
          description:
            "We believe that true luxury is not just about opulent surroundings, but about the feelings we inspire in our guests.",
          excellence: "Excellence",
          excellenceDesc:
            "We never settle for 'good enough'. We strive for perfection in every interaction, every meal, and every room.",
          authenticity: "Authenticity",
          authenticityDesc:
            "Our hospitality is rooted in genuine care. We treat every guest like family, with respect and warmth.",
          innovation: "Innovation",
          innovationDesc:
            "While we respect tradition, we constantly evolve to integrate the latest technologies for your comfort.",
        },
        cta: "Ready to Begin Your Journey With Us?",
        reserve: "Reserve Your Stay",
      },
      footer: {
        description:
          "Experience unparalleled luxury and comfort in the heart of the city. Our hotel offers world-class amenities and personalized service to make your stay unforgettable.",
        quickLinks: "Quick Links",
        contact: "Contact Us",
        location: "Our Location",
        rights: "© 2026 Shodlik Luxury Hotel. All rights reserved.",
        crafted: "Crafted for Excellence",
      },
    },
  },
  ru: {
    translation: {
      nav: {
        home: "Главная",
        rooms: "Номера",
        about: "О нас",
        book: "Забронировать",
      },
      hero: {
        welcome: "Добро пожаловать в мир совершенства",
        title: "Искусство роскошной жизни",
        explore: "Посмотреть номера",
        story: "Наша история",
        scroll: "Листайте вниз",
      },
      home: {
        experience: "Опыт Shodlik",
        sanctuary: "Оазис изысканности",
        description:
          "Расположенный в самом сердце престижного района города, Shodlik Hotel & Spa представляет собой вершину современной роскоши. Каждая деталь, от нашей коллекции произведений искусства до индивидуальных услуг консьержа, создана для обеспечения непревзойденного комфорта гостей.",
        fineDining: "Изысканная кухня",
        pool: "Инфинити-бассейн",
        wifi: "Скоростной WiFi",
        lounge: "Премиум-лаундж",
        learnMore: "Узнать больше о нас",
        accommodations: "Наши предложения",
        refinedComfort: "Утонченный комфорт",
        viewAll: "Все номера",
        testimonial:
          '"Абсолютный шедевр гостеприимства. Внимание к деталям в Shodlik не похоже ни на что, что я встречал в своих путешествиях. Настоящий дом вдали от дома."',
      },
      rooms: {
        title: "Номера и Люксы",
        subtitle: "Роскошное размещение",
        description:
          "Каждый из наших номеров — это шедевр дизайна, сочетающий современную элегантность с вневременным комфортом. Откройте для себя идеальное убежище в нашей коллекции люксов и вилл.",
        bookRoom: "Забронировать номер",
        viewDetails: "Подробнее",
        features: "В каждом номере",
        standardFeatures: "Стандартные удобства",
      },
      about: {
        title: "Определяем роскошь с 1998 года",
        subtitle: "Наша философия",
        description1:
          "Отель Shodlik был основан на простом, но глубоком видении: создать убежище, где самые взыскательные путешественники мира могли бы найти абсолютный покой и непревзойденный сервис.",
        description2:
          "За десятилетия мы превратились из бутик-отеля в мировую икону гостеприимства. Сегодня Shodlik является свидетельством непреходящей силы изысканного дизайна, искренней теплоты и неустанного стремления к совершенству.",
        stats: {
          awards: "Мировых наград",
          guests: "Счастливых гостей",
          countries: "Стран",
          dedication: "Преданность делу",
        },
        values: {
          title: "Столпы Shodlik",
          subtitle: "Наши ценности",
          description:
            "Мы верим, что истинная роскошь — это не только богатое окружение, но и чувства, которые мы пробуждаем у наших гостей.",
          excellence: "Совершенство",
          excellenceDesc:
            'Мы никогда не соглашаемся на "достаточно хорошо". Мы стремимся к совершенству в каждом взаимодействии, каждом блюде и каждом номере.',
          authenticity: "Аутентичность",
          authenticityDesc:
            "Наше гостеприимство основано на искренней заботе. Мы относимся к каждому гостю как к члену семьи, с уважением и теплотой.",
          innovation: "Инновации",
          innovationDesc:
            "Уважая традиции, мы постоянно развиваемся, внедряя новейшие технологии для вашего комфорта.",
        },
        cta: "Готовы начать свое путешествие с нами?",
        reserve: "Забронировать отдых",
      },
      footer: {
        description:
          "Испытайте непревзойденную роскошь и комфорт в самом сердце города. Наш отель предлагает удобства мирового класса и персонализированный сервис.",
        quickLinks: "Быстрые ссылки",
        contact: "Контакты",
        location: "Наше расположение",
        rights: "© 2026 Shodlik Luxury Hotel. Все права защищены.",
        crafted: "Создано для совершенства",
      },
    },
  },
  uz: {
    translation: {
      nav: {
        home: "Bosh sahifa",
        rooms: "Xonalar",
        about: "Biz haqimizda",
        book: "Band qilish",
      },
      hero: {
        welcome: "Mukammallikka xush kelibsiz",
        title: "Hashamatli hayot san'ati",
        explore: "Xonalarni ko'rish",
        story: "Bizning tariximiz",
        scroll: "Pastga tushing",
      },
      home: {
        experience: "Shodlik tajribasi",
        sanctuary: "Nafislik maskani",
        description:
          "Shaharning eng nufuzli tumanining markazida joylashgan Shodlik Hotel & Spa zamonaviy hashamatning cho'qqisini anglatadi. Har bir detal, san'at asarlari to'plamidan tortib, shaxsiy konsyerj xizmatlarigacha, mehmonlarning mislsiz qulayligini ta'minlash uchun yaratilgan.",
        fineDining: "Nafis taomlar",
        pool: "Infinity basseyn",
        wifi: "Tezkor WiFi",
        lounge: "Premium-lounj",
        learnMore: "Biz haqimizda ko'proq bilib oling",
        accommodations: "Bizning takliflarimiz",
        refinedComfort: "Nafis qulaylik",
        viewAll: "Barcha xonalar",
        testimonial:
          "\"Mehmondo'stlikning mutlaq durdonasi. Shodlik-dagi detallarga e'tibor sayohatlarim davomida ko'rgan hech narsaga o'xshamaydi. Uydan uzoqdagi haqiqiy uy.\"",
      },
      rooms: {
        title: "Xonalar va Lyukslar",
        subtitle: "Hashamatli turar joy",
        description:
          "Har bir xonamiz dizayn durdonasi bo'lib, zamonaviy nafislikni abadiy qulaylik bilan birlashtiradi. Bizning lyuks va villalar to'plamimizdan o'zingiz uchun mukammal maskanni toping.",
        bookRoom: "Xonani band qilish",
        viewDetails: "Batafsil",
        features: "Har bir xonada",
        standardFeatures: "Standart qulayliklar",
      },
      about: {
        title: "1998 yildan beri hashamatni belgilaymiz",
        subtitle: "Bizning falsafamiz",
        description1:
          "Shodlik mehmonxonasi oddiy, ammo chuqur qarash asosida tashkil etilgan: dunyoning eng talabchan sayohatchilari mutlaq tinchlik va mislsiz xizmatni topishlari mumkin bo'lgan maskan yaratish.",
        description2:
          "O'n yilliklar davomida biz butik-mehmonxonadan mehmondo'stlikning jahon belgisiga aylandik. Bugungi kunda Shodlik nafis dizayn, samimiy iliqlik va mukammallikka tinimsiz intilishning dalilidir.",
        stats: {
          awards: "Jahon mukofotlari",
          guests: "Baxtli mehmonlar",
          countries: "Davlatlar",
          dedication: "Fidoyilik",
        },
        values: {
          title: "Shodlik ustunlari",
          subtitle: "Bizning qadriyatlarimiz",
          description:
            "Biz ishonamizki, haqiqiy hashamat nafaqat boy muhitda, balki mehmonlarimizda uyg'otadigan his-tuyg'ularimizdadir.",
          excellence: "Mukammallik",
          excellenceDesc:
            'Biz hech qachon "yaxshi" bilan cheklanmaymiz. Biz har bir muloqotda, har bir taomda va har bir xonada mukammallikka intilamiz.',
          authenticity: "Haqiqiylik",
          authenticityDesc:
            "Bizning mehmondo'stligimiz samimiy g'amxo'rlikka asoslangan. Biz har bir mehmonni oila a'zosi kabi hurmat va iliqlik bilan kutib olamiz.",
          innovation: "Innovatsiya",
          innovationDesc:
            "An'analarni hurmat qilgan holda, biz sizning qulayligingiz uchun eng so'nggi texnologiyalarni joriy qilib, doimiy ravishda rivojlanib boramiz.",
        },
        cta: "Biz bilan sayohatingizni boshlashga tayyormisiz?",
        reserve: "Dam olishni band qiling",
      },
      footer: {
        description:
          "Shaharning qoq markazida mislsiz hashamat va qulaylikni his eting. Mehmonxonamiz jahon darajasidagi qulayliklar va shaxsiylashtirilgan xizmatni taklif etadi.",
        quickLinks: "Tezkor havolalar",
        contact: "Kontaktlar",
        location: "Bizning joylashuvimiz",
        rights: "© 2026 Shodlik Luxury Hotel. Barcha huquqlar himoyalangan.",
        crafted: "Mukammallik uchun yaratilgan",
      },
    },
  },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: "ru",
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
