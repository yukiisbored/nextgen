import * as React from "react";
import { Link } from "gatsby";
import type { HeadFC, PageProps } from "gatsby";
import About from "../components/about";
import Seo from "../components/seo";
import { StaticImage } from "gatsby-plugin-image";
import circleImage from "../images/circle.svg";
import Layout from "../components/layout";

const links = [
  { href: "mailto:hi@yukiisbo.red", text: "Email" },
  { href: "https://matrix.to/#/@yuki:backalley.club", text: "Matrix" },
  { href: "https://telegram.me/yuki_is_bored", text: "Telegram" },
  { href: "xmpp:yuki@backalley.club", text: "XMPP" },
  { href: "https://linkedin.com/in/yukiisbored", text: "LinkedIn" },
  { href: "https://github.com/yukiisbored", text: "GitHub" },
  { href: "https://yukiisbored.itch.io", text: "itch.io" },
  { href: "/notes", text: "Notes" },
];

const circleStyle = {
  background: `url(${circleImage}) no-repeat center center`,
};

const IndexPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <div className="flex flex-col md:flex-row">
        <div
          className="flex-none mx-auto md:mr-12 md:mt-24"
          style={circleStyle}
        >
          <StaticImage
            src="../images/character.png"
            alt="Drawing of my character by Luciel Teo"
            className="filter drop-shadow-lg"
            width={400}
            objectFit="contain"
          />
        </div>

        <div className="flex flex-col">
          <header className="text-center">
            <h1 className="font-bold text-7xl">Yuki Langley</h1>
            <p className="font-medium text-2xl mt-4">
              Your friendly neighborhood hacker
            </p>
          </header>

          <section className="mt-12 text-center">
            <h2 className="hidden">Links</h2>
            <ul>
              {links.map(({ href, text }) => (
                <li key={href} className="inline-block m-2">
                  <Link to={href} className="font-bold text-4xl">
                    {text}
                  </Link>
                </li>
              ))}
            </ul>
          </section>

          <section className="mt-12">
            <About />
          </section>
        </div>
      </div>
    </Layout>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <Seo />;
