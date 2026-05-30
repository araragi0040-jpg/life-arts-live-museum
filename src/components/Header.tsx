import Link from "next/link";
import { siteData } from "@/data/site";

export function Header() {
  return (
    <header className="site-header">
      <Link href="/" className="site-header__logo" aria-label="LIFE ARTS LIVE トップへ">
        {siteData.siteName}
      </Link>
      <nav className="site-header__nav" aria-label="メインナビゲーション">
        <Link href="/archive">過去ライブ</Link>
        <Link href="/#next-live">次回ライブ</Link>
        <a href={siteData.instagramUrl} target="_blank" rel="noreferrer">
          公式Instagram
        </a>
      </nav>
    </header>
  );
}
