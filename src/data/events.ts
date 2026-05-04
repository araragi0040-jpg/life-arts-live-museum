import type { Event } from "@/types";

export const events: Event[] = [
  {
    id: "9",
    number: 9,
    title: "第9回 LIFE ARTS LIVE",
    date: "2026-03-21",
    year: 2026,
    venue: "バンケットハウス",
    venueUrl: "https://www.instagram.com/banquethouse?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
    coverImage: "/images/archive/09/cover.jpg",
    shortText: "第9回を表す短いひとことが入ります。",
    themeText:
      "第9回の空気や印象を伝える短いテーマ文が入ります。写真とともに、その夜の温度が伝わる文章にします。",
    galleryImages: [
      "/images/archive/09/photo01.jpg",
      "/images/archive/09/photo02.jpg",
      "/images/archive/09/photo03.jpg",
      "/images/archive/09/photo04.jpg",
      "/images/archive/09/photo05.jpg",
      "/images/archive/09/photo06.jpg",
      "/images/archive/09/photo07.jpg",
      "/images/archive/09/photo08.jpg",
    ],
    performers: ["performer_002", "performer_003", "performer_004", "performer_005"],
    relatedLinks: [
      {
        label: "Instagram投稿",
        url: "href={nextLive.instagramUrl}",
      },
    ],
    isPublished: true,
  },
  {
    id: "8",
    number: 8,
    title: "第8回 LIFE ARTS LIVE",
    date: "2025-12-20",
    year: 2025,
    venue: "バンケットハウス",
    venueUrl: "https://www.instagram.com/banquethouse?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
    coverImage: "/images/archive/08/cover.jpg",
    shortText: "第8回を表す短いひとことが入ります。",
    themeText:
      "第8回の空気や印象を伝える短いテーマ文が入ります。写真とともに、その夜の温度が伝わる文章にします。",
    galleryImages: [
      "/images/archive/08/photo01.svg",
      "/images/archive/08/photo02.svg",
      "/images/archive/08/photo03.svg",
      "/images/archive/08/photo04.svg",
      "/images/archive/08/photo05.svg",
      "/images/archive/08/photo06.svg",
      "/images/archive/08/photo07.svg",
      "/images/archive/08/photo08.svg",
    ],
    performers: ["performer_006", "performer_006", "performer_006"],
        relatedLinks: [
      {
        label: "Instagram投稿",
        url: "href={nextLive.instagramUrl}",
      },
    ],
    isPublished: true,
  },
];
