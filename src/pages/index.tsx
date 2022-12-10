import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import About from "../components/about";
import { StaticImage } from "gatsby-plugin-image";

const links = [
  { href: "mailto:hi@yukiisbo.red", text: "Email" },
  { href: "https://matrix.to/#/@yuki:backalley.club", text: "Matrix" },
  { href: "https://telegram.me/yuki_is_bored", text: "Telegram" },
  { href: "xmpp:yuki@backalley.club", text: "XMPP" },
  { href: "https://linkedin.com/in/yukiisbored", text: "LinkedIn" },
  { href: "https://git.yukiisbo.red", text: "Projects" },
  { href: "https://github.com/yukiisbored", text: "GitHub" },
  { href: "https://yukiisbored.itch.io", text: "itch.io" },
];

const IndexPage: React.FC<PageProps> = () => {
  return (
    <main className="flex flex-col md:flex-row p-4 md:p-12">
      <div className="flex-none mx-auto md:pr-6">
        <StaticImage
          src="../images/character.png"
          alt="Drawing of my character by Luciel Teo"
          className="filter drop-shadow-lg md:h-screen"
          width={640}
          objectFit="scale-down"
        />
      </div>

      <div className="flex flex-col">
        <header className="text-center">
          <h1 className="font-bold text-7xl">Yuki Langley</h1>
          <p className="font-medium text-2xl mt-4">Your friendly neighborhood hacker</p>
        </header>

        <section className="mt-12 text-center">
          <h2 className="hidden">Links</h2>
          <ul>
            {links.map(({ href, text }) => (
              <li key={href} className="font-bold text-4xl inline-block m-2"><a href={href}>{text}</a></li>
            ))}
          </ul>
        </section>

        <section className="mt-12">
          <About />
        </section>
      </div>
    </main>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>
