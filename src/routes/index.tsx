import { createFileRoute } from "@tanstack/react-router";

const heroImg = { url: "/dress-coral.png" };
const collection1 = { url: "/pants-blue.png" };
const collection2 = { url: "/pants-floral.png" };
const collection3 = { url: "/pants-daisy.png" };
const logoAsset = { url: "/logo-ircsi.png" };

export const Route = createFileRoute("/")({
  component: Index,
});

const collections = [
  {
    img: collection1.url,
    title: "Nyári könnyedség",
    desc: "Levegős, tulipán szabású nadrág — kényelmes és nőies az igazán meleg napokra.",
  },
  {
    img: collection2.url,
    title: "Mediterrán minta",
    desc: "Bordó-fekete mintás nadrág, amely bármilyen egyszínű felsővel harmonizál.",
  },
  {
    img: collection3.url,
    title: "Virágos hétköznap",
    desc: "Aprómintás, lágy esésű nadrág — hordható a hétköznapok bármelyik pillanatában.",
  },
];

const reviews = [
  {
    name: "Éva K.",
    text: "Ircsinél mindig olyat találok, amitől jól érzem magam. Kedves, figyelmes kiszolgálás!",
  },
  {
    name: "Zsuzsa T.",
    text: "Nagyon szép, minőségi ruhák elérhető áron. Rendszeresen visszatérek.",
  },
  {
    name: "Anikó M.",
    text: "Olyan darabokat hoz, amelyek tényleg állnak. 100%-ban ajánlom!",
  },
];

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Nav */}
      <header className="absolute top-0 left-0 right-0 z-20">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 lg:px-12">
          <a href="#top" className="flex items-center gap-3">
            <img src={logoAsset.url} alt="Ircsi Ruházat logó" width={44} height={44} className="rounded-full bg-cream" />
            <span className="hidden font-display text-xl tracking-wide text-primary sm:block">
              Ircsi Ruházat
            </span>
          </a>
          <ul className="hidden items-center gap-10 text-sm text-foreground/80 md:flex">
            <li><a href="#rolam" className="transition-colors hover:text-primary">Rólam</a></li>
            <li><a href="#kollekcio" className="transition-colors hover:text-primary">Kollekció</a></li>
            <li><a href="#velemenyek" className="transition-colors hover:text-primary">Vélemények</a></li>
            <li><a href="#kapcsolat" className="transition-colors hover:text-primary">Kapcsolat</a></li>
          </ul>
          <a
            href="tel:+36308510483"
            className="hidden items-center rounded-full border border-primary/30 px-5 py-2 text-sm text-primary transition-colors hover:bg-primary hover:text-primary-foreground md:inline-flex"
          >
            (30) 851 0483
          </a>
        </nav>
      </header>

      {/* Hero */}
      <section id="top" className="relative overflow-hidden bg-gradient-warm">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-6 pt-32 pb-20 lg:grid-cols-12 lg:px-12 lg:pt-40 lg:pb-28">
          <div className="flex flex-col justify-center animate-fade-up lg:col-span-6">
            <span className="mb-4 font-script text-3xl text-rose">Nyíregyháza</span>
            <h1 className="font-display text-5xl leading-[1.05] text-primary md:text-6xl lg:text-7xl">
              Kényelmes,
              <br />
              <em className="italic text-rose">nőies</em> ruhák
              <br />
              teltebb alkatra.
            </h1>
            <p className="mt-8 max-w-md text-lg leading-relaxed text-foreground/75">
              Sziasztok! Ircsi vagyok — az Ircsi Ruházat létrehozója. Plus size
              hölgyeknek válogatok olyan darabokat, amelyek jól szabottak,
              kényelmesek, és igazán jól állnak — hétköznapokra és különleges
              alkalmakra egyaránt.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a
                href="#kollekcio"
                className="inline-flex items-center justify-center rounded-full bg-primary px-8 py-3.5 text-sm uppercase tracking-widest text-primary-foreground shadow-soft transition-all hover:bg-primary/90"
              >
                Kollekció
              </a>
              <a
                href="#kapcsolat"
                className="inline-flex items-center justify-center rounded-full border border-primary/30 px-8 py-3.5 text-sm uppercase tracking-widest text-primary transition-colors hover:bg-primary/5"
              >
                Írj nekem
              </a>
            </div>
            <div className="mt-12 flex items-center gap-6 text-sm text-foreground/70">
              <div>
                <div className="font-display text-3xl text-primary">1,4E</div>
                <div className="text-xs uppercase tracking-widest">Követő</div>
              </div>
              <div className="h-10 w-px bg-primary/20" />
              <div>
                <div className="font-display text-3xl text-primary">100%</div>
                <div className="text-xs uppercase tracking-widest">Ajánlás</div>
              </div>
              <div className="h-10 w-px bg-primary/20" />
              <div>
                <div className="font-display text-3xl text-primary">6</div>
                <div className="text-xs uppercase tracking-widest">Vélemény</div>
              </div>
            </div>
          </div>

          <div className="relative lg:col-span-6">
            <div className="relative aspect-[4/5] overflow-hidden rounded-sm shadow-soft">
              <img
                src={heroImg.url}
                alt="Ircsi Ruházat — nőies boutique"
                className="h-full w-full object-cover"
                width={1600}
                height={1800}
              />
            </div>
            <div className="absolute -bottom-6 -left-6 hidden items-center gap-3 rounded-full bg-cream px-5 py-3 shadow-card lg:flex">
              <span className="text-gold">★★★★★</span>
              <span className="text-sm text-foreground/80">100% ajánlja</span>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="rolam" className="py-24 lg:py-32">
        <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-16 px-6 md:grid-cols-2 lg:px-12">
          <div className="relative">
            <img
              src={logoAsset.url}
              alt="Ircsi Ruházat embléma"
              className="mx-auto w-80"
              loading="lazy"
              width={816}
              height={816}
            />
          </div>
          <div>
            <span className="text-xs uppercase tracking-[0.3em] text-rose">Rólam</span>
            <h2 className="mt-4 font-display text-4xl leading-tight text-primary md:text-5xl">
              Ircsi vagyok — <em className="italic">és a teltebb alkatú nőknek válogatok.</em>
            </h2>
            <div className="mt-8 space-y-4 leading-relaxed text-foreground/80">
              <p>
                Az Ircsi Ruházat több mint egy bolt: egy hely, ahol a plus size
                hölgyek is megtalálhatják azt a darabot, amelyben igazán jól érzik
                magukat. Figyelek a szabásra, az anyagra és arra, hogy minden ruha
                előnyösen álljon.
              </p>
              <p>
                Nyíregyházi ruhabolt, ahol a kényelem és a nőiesség kéz a kézben jár —
                bővebb méretekben is. Legyen szó egy meghitt hétköznapról vagy egy
                különleges alkalomról, nálam megtalálod a hozzád illő darabot.
              </p>
            </div>
            <div className="mt-8 flex flex-wrap gap-2 text-xs">
              {["Plus size", "Kényelmes", "Nőies", "Bővebb méretek", "Nyíregyháza"].map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-primary/20 bg-secondary px-4 py-1.5 uppercase tracking-wider text-primary"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Collections */}
      <section id="kollekcio" className="bg-secondary/50 py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="max-w-2xl">
            <span className="text-xs uppercase tracking-[0.3em] text-rose">Kollekció</span>
            <h2 className="mt-4 font-display text-4xl text-primary md:text-5xl">
              Válogatott darabok, <em className="italic">amelyek a teltebb alkatot ünneplik.</em>
            </h2>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-3">
            {collections.map((c) => (
              <article key={c.title} className="group">
                <div className="relative aspect-[4/5] overflow-hidden rounded-sm shadow-card">
                  <img
                    src={c.img}
                    alt={c.title}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                    width={1200}
                    height={1500}
                  />
                </div>
                <h3 className="mt-6 font-display text-2xl text-primary">{c.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-foreground/70">{c.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section id="velemenyek" className="py-24 lg:py-32">
        <div className="mx-auto max-w-6xl px-6 text-center lg:px-12">
          <span className="text-xs uppercase tracking-[0.3em] text-rose">Vélemények</span>
          <h2 className="mt-4 font-display text-4xl text-primary md:text-5xl">
            <em className="italic">Amit</em> a vásárlóim mondanak
          </h2>
          <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-3">
            {reviews.map((r) => (
              <blockquote
                key={r.name}
                className="rounded-sm border border-border/60 bg-card p-8 text-left shadow-card"
              >
                <div className="text-lg text-gold">★★★★★</div>
                <p className="mt-4 font-display text-lg italic leading-relaxed text-foreground/85">
                  „{r.text}"
                </p>
                <footer className="mt-6 text-sm uppercase tracking-widest text-primary">
                  — {r.name}
                </footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      {/* Contact / CTA */}
      <section id="kapcsolat" className="relative overflow-hidden bg-gradient-burgundy text-primary-foreground">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-16 px-6 py-24 md:grid-cols-2 lg:px-12 lg:py-32">
          <div>
            <span className="font-script text-3xl text-accent">Találkozzunk</span>
            <h2 className="mt-2 font-display text-4xl leading-tight md:text-5xl">
              Írj, hívj, vagy nézz be — <em className="italic">szeretettel várlak.</em>
            </h2>
            <p className="mt-6 max-w-md leading-relaxed text-primary-foreground/80">
              Ha kérdésed van egy darabról, vagy szeretnél személyesen válogatni
              plus size ruhák között, keress bátran! Öröm lesz beszélgetni veled.
            </p>
          </div>

          <div className="space-y-6">
            <ContactRow label="Telefon" value="(30) 851 0483" href="tel:+36308510483" />
            <ContactRow
              label="Cím"
              value="Gyöngyvirág u. 3."
              href="https://www.google.com/maps/search/?api=1&query=4400+Ny%C3%ADregyh%C3%A1za%2C+Gy%C3%B6ngyvir%C3%A1g+utca+3"
            />
            <ContactRow label="Város" value="4400 Nyíregyháza" />
            <ContactRow label="Kategória" value="Plus size női ruhabolt" />
            <ContactRow
              label="Facebook"
              value="Kövess minket"
              href="https://www.facebook.com/profile.php?id=100067135099099"
            />

            <a
              href="tel:+36308510483"
              className="mt-8 inline-flex items-center justify-center rounded-full bg-primary-foreground px-8 py-3.5 text-sm uppercase tracking-widest text-primary transition-colors hover:bg-accent"
            >
              Hívj most
            </a>
          </div>
        </div>
      </section>

      {/* Map */}
      <section id="terkep" className="bg-secondary/40 py-20 lg:py-24">
        <div className="mx-auto max-w-6xl px-6 lg:px-12">
          <div className="mb-10 text-center">
            <span className="text-xs uppercase tracking-[0.3em] text-rose">Így találsz meg</span>
            <h2 className="mt-4 font-display text-4xl text-primary md:text-5xl">
              <em className="italic">Előzetes egyeztetés után</em> látogass el az üzletbe
            </h2>
            <p className="mt-4 text-foreground/70">
              4400 Nyíregyháza, Gyöngyvirág utca 3.
            </p>
            <p className="mt-2 text-foreground/70">
              Telefon: <a href="tel:+36308510483" className="text-primary hover:underline">(30) 851 0483</a>
            </p>
            <a
              href="https://www.facebook.com/profile.php?id=100067135099099"
              className="mt-6 inline-flex items-center justify-center rounded-full bg-primary px-8 py-3.5 text-sm uppercase tracking-widest text-primary-foreground shadow-soft transition-all hover:bg-primary/90"
            >
              Facebook csoportunk
            </a>
          </div>
          <div className="overflow-hidden rounded-sm shadow-card">
            <iframe
              title="Ircsi Ruházat — térkép"
              src="https://www.google.com/maps?q=4400+Ny%C3%ADregyh%C3%A1za%2C+Gy%C3%B6ngyvir%C3%A1g+utca+3&output=embed"
              width="100%"
              height="420"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary py-10 text-primary-foreground/80">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 text-sm md:flex-row lg:px-12">
          <div className="flex items-center gap-3">
            <img src={logoAsset.url} alt="" width={32} height={32} className="rounded-full bg-cream" />
            <span className="font-display text-lg">Ircsi Ruházat Nyíregyháza</span>
          </div>
          <p>© {new Date().getFullYear()} Ircsi Ruházat — Minden jog fenntartva.</p>
        </div>
      </footer>
    </div>
  );
}

function ContactRow({ label, value, href }: { label: string; value: string; href?: string }) {
  const inner = (
    <div className="flex items-baseline justify-between gap-4 border-b border-primary-foreground/20 pb-4">
      <span className="text-xs uppercase tracking-[0.25em] text-primary-foreground/60">{label}</span>
      <span className="font-display text-2xl">{value}</span>
    </div>
  );
  return href ? (
    <a href={href} className="block transition-colors hover:text-accent">
      {inner}
    </a>
  ) : (
    inner
  );
}
