import Link from "next/link";
import { siteData } from "@/data/site";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-footer__inner">
        <div>
          <p className="site-footer__brand">{siteData.siteName}</p>

          <div className="site-footer__profile">
            <p className="site-footer__host">主催：{siteData.hostName}</p>
            {siteData.hostInstagramUrl && (
              <a
                href={siteData.hostInstagramUrl}
                target="_blank"
                rel="noreferrer"
                className="site-footer__profile-link"
              >
                Instagram
              </a>
            )}
          </div>

          <div className="site-footer__profile">
            <p className="site-footer__host">演出：{siteData.directorName}</p>
            {siteData.directorInstagramUrl && (
              <a
                href={siteData.directorInstagramUrl}
                target="_blank"
                rel="noreferrer"
                className="site-footer__profile-link"
              >
                Instagram
              </a>
            )}
          </div>
        </div>

        <nav className="site-footer__nav" aria-label="フッターナビゲーション">
          <Link href="/">Top</Link>
          <Link href="/archive">Archives</Link>
          <Link href="/#next-live">Next</Link>
          <a href={siteData.instagramUrl} target="_blank" rel="noreferrer">
            Instagram
          </a>
        </nav>
      </div>

      <p className="site-footer__copy">© LIFE ARTS LIVE</p>
    </footer>
  );
}
