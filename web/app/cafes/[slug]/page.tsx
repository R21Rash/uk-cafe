import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Check, Clock, Coffee, ExternalLink, MapPin, Phone, Search, Sparkles, Star, Store, Utensils } from 'lucide-react';
import { ConceptBanner } from '@/components/cafes/ConceptBanner';
import { ShareLocationButton } from '@/components/cafes/ShareLocationButton';
import { cafes, getCafe, type Cafe } from '@/src/data/cafes';

export function generateStaticParams() {
  return cafes.map((cafe) => ({ slug: cafe.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const cafe = getCafe(params.slug);
  return {
    title: cafe ? `${cafe.name} concept | MintBox Studio` : 'Cafe concept',
    robots: { index: false, follow: false }
  };
}

function SectionTitle({ kicker, title, accent }: { kicker: string; title: string; accent: string }) {
  return (
    <div>
      <p className="text-xs font-black uppercase tracking-[0.18em]" style={{ color: accent }}>{kicker}</p>
      <h2 className="mt-2 text-3xl font-black tracking-normal text-[#2f2105] sm:text-4xl">{title}</h2>
      <span className="mt-3 block h-1 w-24 rounded-full" style={{ background: accent }} />
    </div>
  );
}

function FloatingBean({ className = '' }: { className?: string }) {
  return <span aria-hidden="true" className={`cafe-bean absolute h-5 w-3 rotate-45 rounded-full bg-[#2f2105] opacity-80 shadow-sm ${className}`} />;
}

function publicAsset(src: string) {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? '';
  return src.startsWith('/') ? `${basePath}${src}` : src;
}

function getMealImage(cafe: Cafe, item: string, fallback: string) {
  return cafe.mealIllustrations?.find((meal) => item.toLowerCase().includes(meal.match.toLowerCase()))?.src ?? fallback;
}

function MenuCard({ cafe, item, index }: { cafe: Cafe; item: Cafe['menu'][number]; index: number }) {
  const images = cafe.assets.foodPhotos ?? cafe.assets.gallery;

  return (
    <article className="cafe-card group rounded-[24px] bg-white p-3 shadow-[0_12px_34px_rgba(47,33,5,0.14)]">
      <div className="cafe-shine relative h-44 overflow-hidden rounded-[18px] bg-[#f6ebda] sm:h-48">
        <Image
          src={publicAsset(images[index % images.length])}
          alt={`${item.name} visual cue`}
          fill
          sizes="(min-width: 1024px) 28vw, (min-width: 640px) 45vw, 100vw"
          className="object-cover transition duration-700 group-hover:scale-105"
        />
        {cafe.rating ? (
          <span className="absolute left-3 top-3 inline-flex items-center gap-1 rounded-full bg-white px-3 py-1 text-xs font-black text-[#2f2105] shadow">
            4.8 <Star className="h-3.5 w-3.5 fill-[#ff902b] text-[#ff902b]" />
          </span>
        ) : null}
      </div>
      <div className="px-2 py-4">
        <div className="flex items-start justify-between gap-3">
          <h3 className="text-xl font-black text-[#2f2105]">{item.name}</h3>
          <span className="rounded-full px-3 py-1 text-xs font-black uppercase" style={{ background: cafe.theme.accentSoft, color: cafe.theme.accent }}>
            {item.tag}
          </span>
        </div>
        <p className="mt-3 min-h-16 text-sm font-semibold leading-6 text-[#7e7d7a]">{item.detail}</p>
      </div>
    </article>
  );
}

function CafeSite({ cafe }: { cafe: Cafe }) {
  const accent = cafe.theme.accent;
  const headline = cafe.name.includes('Cafe') ? cafe.name : `${cafe.name} Cafe`;
  const foodPhotos = cafe.assets.foodPhotos ?? cafe.assets.gallery;

  return (
    <main className="min-h-screen overflow-hidden bg-white font-sans text-[#2f2105]">
      <ConceptBanner />

      <section className="relative bg-[#f6ebda]">
        <FloatingBean className="left-[4%] top-[22%]" />
        <FloatingBean className="bottom-[16%] left-[15%] rotate-12" />
        <FloatingBean className="right-[10%] top-[18%] -rotate-12" />
        <FloatingBean className="right-[5%] top-[32%] rotate-[65deg]" />
        <div className="absolute -right-24 -top-24 h-80 w-80 rounded-full bg-[#ffd28f]/50 blur-3xl" />
        <div className="absolute -bottom-16 left-0 h-72 w-72 rounded-full bg-white/50 blur-3xl" />

        <nav className="relative z-10 mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-5 sm:px-8 sm:py-6">
          <Link href="/" className="inline-flex items-center gap-2 rounded-full bg-white/80 px-4 py-2 text-sm font-black shadow-sm transition hover:-translate-y-0.5">
            <Coffee className="h-4 w-4" /> {cafe.name}
          </Link>
          <div className="hidden items-center gap-8 text-sm font-bold text-[#2f2105] md:flex">
            <a href="#popular" className="transition hover:text-[#ff902b]">Popular</a>
            <a href="#visit" className="transition hover:text-[#ff902b]">Visit</a>
            <a href="#details" className="transition hover:text-[#ff902b]">Details</a>
          </div>
          <div className="hidden max-w-[42vw] items-center gap-3 truncate rounded-full bg-white px-4 py-2 text-sm font-semibold text-[#929292] shadow-sm sm:flex">
            <Search className="h-4 w-4 text-[#2f2105]" />
            <span className="truncate">{cafe.position}</span>
          </div>
        </nav>

        <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-8 px-4 pb-14 pt-8 sm:px-8 sm:pb-16 lg:grid-cols-[0.95fr_1.05fr] lg:gap-10 lg:pb-24 lg:pt-20">
          <div className="cafe-entrance">
            <p className="text-sm font-black uppercase tracking-[0.2em]" style={{ color: accent }}>{cafe.theme.name}</p>
            <h1 className="mt-4 max-w-2xl text-[2.65rem] font-black leading-[1.02] tracking-normal sm:mt-5 sm:text-7xl">
              {headline}, proper breakfast in the Jewellery Quarter.
            </h1>
            <p className="mt-5 max-w-xl text-base font-semibold leading-7 text-[#7e7d7a] sm:mt-6 sm:text-lg sm:leading-8">{cafe.summary}</p>
            <div className="mt-7 grid gap-3 min-[420px]:flex min-[420px]:flex-wrap min-[420px]:items-center sm:mt-8 sm:gap-4">
              <a href="#popular" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#2f2105] px-6 py-3.5 text-sm font-black text-white shadow-[0_8px_22px_rgba(47,33,5,0.22)] transition hover:-translate-y-0.5 sm:px-7 sm:py-4">
                View menu cues <Coffee className="h-5 w-5 rounded-full bg-[#ff902b] p-1 text-white" />
              </a>
              <a href="#visit" className="inline-flex min-h-12 items-center justify-center rounded-full bg-white/60 px-6 py-3.5 text-sm font-black shadow-sm sm:bg-transparent sm:py-4" style={{ color: accent }}>Plan a visit</a>
            </div>
          </div>

          <div className="cafe-entrance cafe-entrance-delay-1 cafe-float-slow relative mx-auto aspect-square w-full max-w-[560px]">
            <div className="cafe-orbit absolute -inset-2 rounded-full border border-dashed border-white/60" />
            <div className="absolute inset-5 rounded-full bg-[#2f2105] sm:inset-6" />
            <div className="absolute inset-0 rounded-full shadow-[inset_0_0_0_10px_rgba(255,255,255,0.32)]" style={{ background: cafe.theme.accentSoft }} />
            <div className="absolute inset-7 overflow-hidden rounded-full bg-white shadow-2xl sm:inset-10">
              <Image src={publicAsset(cafe.assets.food)} alt={`Illustrative food photography for ${cafe.name}`} fill priority sizes="(min-width: 1024px) 42vw, 90vw" className="object-cover" />
            </div>
            <span className="cafe-steam absolute left-[42%] top-[12%] h-16 w-8" />
            <span className="cafe-steam absolute left-[52%] top-[8%] h-20 w-10 [animation-delay:500ms]" />
            <span className="cafe-steam absolute left-[60%] top-[15%] h-14 w-7 [animation-delay:950ms]" />
            <div className="cafe-float absolute left-0 top-6 max-w-[78%] rounded-full bg-white/80 p-1.5 shadow-xl backdrop-blur sm:top-12 sm:p-2">
              <div className="truncate rounded-full bg-white px-4 py-2 text-sm font-black sm:px-6 sm:py-3 sm:text-lg">{cafe.menu[0]?.name}</div>
            </div>
            {cafe.rating ? (
              <div className="cafe-float absolute right-0 top-24 rounded-full bg-white/80 p-1.5 shadow-xl backdrop-blur sm:top-28 sm:p-2">
                <div className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-black sm:px-5 sm:py-3 sm:text-lg">
                  4.8 <Star className="cafe-star-pop h-4 w-4 fill-[#ff902b] text-[#ff902b] sm:h-5 sm:w-5" />
                </div>
              </div>
            ) : null}
            <div className="cafe-float absolute bottom-5 left-5 max-w-[72%] rounded-full bg-white/80 p-1.5 shadow-xl backdrop-blur sm:bottom-8 sm:left-10 sm:p-2">
              <div className="truncate rounded-full bg-white px-4 py-2 text-sm font-black sm:px-6 sm:py-3 sm:text-lg">{cafe.position.split(',')[0]}</div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative z-20 bg-white py-3">
        <div className="overflow-hidden whitespace-nowrap border-y border-[#f6ebda] bg-[#fff7ea] py-3">
          <div className="cafe-marquee inline-flex min-w-[200%] gap-3">
            {[...cafe.foodWall, ...cafe.foodWall].map((food, index) => (
              <span key={`${food}-${index}`} className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-black text-[#2f2105] shadow-sm">
                <Sparkles className="h-4 w-4" style={{ color: accent }} />
                {food}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section id="popular" className="relative z-10 mx-auto max-w-7xl px-4 pt-8 sm:px-8 sm:pt-10">
        <div className="cafe-entrance cafe-entrance-delay-2 rounded-[28px] bg-[#f9d9aa] px-4 pb-6 pt-10 shadow-sm sm:px-8 sm:pb-7 sm:pt-12">
          <SectionTitle kicker="Popular now" title="What visitors should notice first" accent={accent} />
          <div className="mt-8 grid gap-6 lg:grid-cols-3">
            {cafe.menu.slice(0, 3).map((item, index) => (
              <MenuCard key={item.name} cafe={cafe} item={item} index={index} />
            ))}
          </div>
        </div>
      </section>

      <section id="visit" className="mx-auto max-w-7xl px-4 py-16 sm:px-8 sm:py-20">
        <SectionTitle kicker="How to use this website" title="Turn browsing into a real cafe visit" accent={accent} />
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {[
            { icon: Coffee, title: 'Choose the mood', body: cafe.highlights[0] },
            { icon: Utensils, title: 'Scan the menu cues', body: cafe.menu[1]?.name ?? cafe.menu[0]?.name },
            { icon: Store, title: 'Visit with confidence', body: cafe.address }
          ].map((item) => (
            <div key={item.title} className="cafe-card rounded-[24px] bg-white p-5 text-center shadow-sm sm:bg-transparent sm:shadow-none">
              <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-[32px] bg-[#fff7ea] shadow-sm sm:h-28 sm:w-28">
                <item.icon className="h-12 w-12" style={{ color: accent }} />
              </div>
              <h3 className="mt-5 text-2xl font-black text-[#2f2105]">{item.title}</h3>
              <p className="mx-auto mt-2 max-w-xs text-sm font-semibold leading-6 text-[#7e7d7a]">{item.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-8 sm:pb-20">
        <SectionTitle kicker="Food wall" title="More food and drink people should see" accent={accent} />
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {cafe.foodWall.map((food, index) => (
            <div
              key={food}
              className={`cafe-card group relative min-h-44 overflow-hidden rounded-[22px] bg-[#fff7ea] p-4 shadow-sm ${index % 5 === 0 ? 'sm:col-span-2' : ''} sm:min-h-48`}
            >
              <Image
                src={publicAsset(foodPhotos[index % foodPhotos.length])}
                alt={`${food} visual cue`}
                fill
                sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                className="object-cover transition duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#2f2105]/80 via-[#2f2105]/20 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-4">
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white text-sm font-black shadow-sm" style={{ color: accent }}>
                  {String(index + 1).padStart(2, '0')}
                </span>
                <p className="mt-3 text-xl font-black leading-tight text-white">{food}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-8 sm:pb-20">
        <SectionTitle kicker="Gallery" title="Food-led visual rhythm" accent={accent} />
        <div className="mt-8 grid gap-5 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="cafe-card cafe-shine relative min-h-[320px] overflow-hidden rounded-[28px] shadow-[0_18px_44px_rgba(47,33,5,0.16)] sm:min-h-[420px]">
            <Image src={publicAsset(cafe.assets.gallery[0])} alt={`${cafe.name} food photography`} fill sizes="(min-width: 1024px) 58vw, 100vw" className="object-cover" />
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-1">
            {cafe.assets.gallery.slice(1, 4).map((image, index) => (
              <div key={image} className="cafe-card cafe-shine relative min-h-44 overflow-hidden rounded-[24px] shadow-sm sm:min-h-48">
                <Image src={publicAsset(image)} alt={`${cafe.name} gallery image ${index + 2}`} fill sizes="(min-width: 1024px) 32vw, 50vw" className="object-cover" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative bg-[#f6ebda] py-14 sm:py-16">
        <FloatingBean className="left-[7%] top-[18%] opacity-20" />
        <FloatingBean className="bottom-[20%] right-[14%] opacity-20" />
        <div className="mx-auto grid max-w-7xl items-center gap-8 px-4 sm:px-8 lg:grid-cols-[0.85fr_1.15fr] lg:gap-10">
          <div className="cafe-card relative mx-auto h-[330px] w-full max-w-sm rounded-[18px] bg-white p-2 shadow-2xl sm:h-[430px]">
            <div className="relative h-full overflow-hidden rounded-[14px]">
              <Image src={publicAsset(cafe.assets.interior)} alt={`${cafe.name} concept interior detail`} fill sizes="(min-width: 1024px) 32vw, 90vw" className="object-cover" />
            </div>
          </div>
          <div>
            <SectionTitle kicker="About this concept" title={`A sharper first impression for ${cafe.name}`} accent={accent} />
            <p className="mt-6 max-w-2xl text-lg font-bold leading-8 text-[#2f2105]">{cafe.atmosphere[0]}</p>
            <p className="mt-4 max-w-2xl text-base font-semibold leading-8 text-[#7e7d7a]">
              The page borrows the warm, appetising feel of a modern coffee landing page, then adapts it to researched local signals: visit details, menu cues, service notes, and honest source links.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              {cafe.services.map((service) => (
                <span key={service} className="rounded-full bg-white px-4 py-2 text-sm font-black text-[#2f2105] shadow-sm">{service}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-8 sm:py-20">
        <SectionTitle kicker="Public review signals" title="What people are saying online" accent={accent} />
        <div className="mt-8 grid gap-6 lg:grid-cols-3">
          {cafe.reviews.map((review) => (
            <article key={`${review.name}-${review.source}`} className="cafe-card rounded-[24px] bg-white p-5 shadow-[0_12px_34px_rgba(47,33,5,0.12)] sm:p-6">
              <div className="grid gap-4 min-[420px]:flex min-[420px]:items-center min-[420px]:justify-between">
                <div>
                  <h3 className="text-xl font-black text-[#2f2105]">{review.name}</h3>
                  <p className="mt-1 text-xs font-black uppercase tracking-[0.14em] text-[#7e7d7a]">{review.source}</p>
                </div>
                <span className="inline-flex items-center gap-1 rounded-full bg-[#fff7ea] px-3 py-2 text-sm font-black text-[#2f2105]">
                  {review.rating} <Star className="cafe-star-pop h-4 w-4 fill-[#ff902b] text-[#ff902b]" />
                </span>
              </div>
              <p className="mt-5 text-base font-semibold leading-7 text-[#7e7d7a]">&ldquo;{review.text}&rdquo;</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-8 sm:py-20">
        <SectionTitle kicker="Special menu for you" title="More researched menu signals" accent={accent} />
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {cafe.menu.slice(2).map((item, index) => (
            <MenuCard key={item.name} cafe={cafe} item={item} index={index + 2} />
          ))}
        </div>
      </section>

      {cafe.menuSections ? (
        <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-8 sm:pb-20">
          <SectionTitle kicker="Full menu" title="Breakfasts, hot sandwiches and lunch plates" accent={accent} />
          <div className="mt-8 grid gap-6 lg:grid-cols-3">
            {cafe.menuSections.map((section) => (
              <article key={section.title} className="cafe-card rounded-[24px] bg-white p-5 shadow-[0_12px_34px_rgba(47,33,5,0.12)] sm:p-6">
                <h3 className="text-2xl font-black text-[#2f2105]">{section.title}</h3>
                <ul className="mt-5 space-y-4">
                  {section.items.map((item, itemIndex) => (
                    <li key={item} className="grid grid-cols-[88px_1fr] gap-3 rounded-[18px] bg-[#fff7ea] p-2">
                      <div className="cafe-shine relative h-24 overflow-hidden rounded-[14px] bg-white">
                        <Image
                          src={publicAsset(getMealImage(cafe, item, foodPhotos[(itemIndex + section.title.length) % foodPhotos.length]))}
                          alt={`${item} meal visual`}
                          fill
                          sizes="88px"
                          className="object-cover"
                        />
                      </div>
                      <div className="flex gap-2 py-1">
                        <Check className="mt-0.5 h-5 w-5 shrink-0" style={{ color: accent }} />
                        <span className="text-sm font-semibold leading-6 text-[#7e7d7a]">{item}</span>
                      </div>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>
      ) : null}

      {cafe.detailGroups ? (
        <section id="details" className="relative overflow-hidden bg-[#f6ebda] py-14 sm:py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-8">
            <SectionTitle kicker="Cafe details" title="Everything visitors need to know" accent={accent} />
            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
              {cafe.detailGroups.map((group) => (
                <article key={group.title} className="cafe-card rounded-[20px] bg-white p-5 shadow-sm">
                  <h3 className="text-lg font-black text-[#2f2105]">{group.title}</h3>
                  <ul className="mt-4 space-y-2">
                    {group.items.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm font-bold leading-5 text-[#7e7d7a]">
                        <Check className="h-4 w-4 shrink-0" style={{ color: accent }} />
                        {item}
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      <section className="relative overflow-hidden bg-[#f6ebda] py-14 sm:py-16">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-10">
          <div>
            <SectionTitle kicker="What public sources say" title="Signals worth designing around" accent={accent} />
            <p className="mt-5 max-w-sm text-base font-semibold leading-8 text-[#7e7d7a]">
              These are not invented testimonials. They are source-backed facts and listing signals used to guide the demo.
            </p>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {cafe.proof.map((item) => (
              <div key={item.label} className="cafe-card rounded-[18px] border-4 border-[#ffd390]/60 bg-[#ffcb7c] p-5 shadow-sm">
                <p className="text-lg font-black text-[#2f2105]">{item.label}</p>
                <p className="mt-3 text-sm font-semibold leading-6 text-[#2f2105]/80">{item.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-8 sm:py-16">
        <div className="cafe-pulse-cta cafe-shine relative overflow-hidden rounded-[28px] bg-[#2f2105] px-4 py-12 text-center text-white sm:px-10 sm:py-16">
          <Image src={publicAsset(cafe.assets.food)} alt="" fill sizes="100vw" className="object-cover opacity-35" />
          <div className="relative z-10 mx-auto max-w-3xl">
            <h2 className="text-3xl font-black leading-tight sm:text-4xl">A cafe page should make people hungry, then make the visit easy.</h2>
            <div className="mt-7 grid gap-3 text-left md:grid-cols-2">
              <p className="flex gap-3 rounded-full bg-white px-5 py-3 text-sm font-black text-[#2f2105]"><MapPin className="h-5 w-5 shrink-0" style={{ color: accent }} />{cafe.address}</p>
              {cafe.phone ? <p className="flex gap-3 rounded-full bg-white px-5 py-3 text-sm font-black text-[#2f2105]"><Phone className="h-5 w-5 shrink-0" style={{ color: accent }} />{cafe.phone}</p> : null}
            </div>
            <div className="mt-7 grid gap-3 min-[420px]:flex min-[420px]:flex-wrap min-[420px]:justify-center">
              <a href={cafe.location.directionsUrl} target="_blank" rel="noreferrer" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-black text-[#2f2105] transition hover:-translate-y-0.5">
                <MapPin className="h-4 w-4" style={{ color: accent }} />
                Open directions
              </a>
              <ShareLocationButton text={cafe.location.shareText} url={cafe.location.mapUrl} accent={accent} />
            </div>
          </div>
        </div>
      </section>

      <footer id="sources" className="mx-auto max-w-7xl px-4 pb-12 text-sm sm:px-8">
        <div className="grid gap-6 rounded-[24px] bg-[#fff7ea] p-5 md:grid-cols-[0.9fr_1.1fr] sm:p-6">
          <div>
            <p className="font-black text-[#2f2105]">Unofficial concept note</p>
            <p className="mt-2 font-semibold leading-6 text-[#7e7d7a]">
              This is not the cafe&apos;s official website. Food images are local illustrative photography, not cafe-owned menu photography. No payments, ordering backend, auth, or fake password gates are included.
            </p>
          </div>
          <div>
            <div className="flex gap-3 text-sm font-bold leading-6 text-[#7e7d7a]">
              <Clock className="h-5 w-5 shrink-0" style={{ color: accent }} />
              <ul className="space-y-1">
                {cafe.hours.map((hour) => <li key={hour}>{hour}</li>)}
              </ul>
            </div>
            <div className="mt-4 flex flex-wrap gap-3">
              {cafe.sourceNotes.map((source) => (
                <a key={source.url} href={source.url} className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 font-black text-[#2f2105] shadow-sm transition hover:-translate-y-0.5" target="_blank" rel="noreferrer">
                  {source.label} <ExternalLink className="h-3.5 w-3.5" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}

export default function CafePage({ params }: { params: { slug: string } }) {
  const cafe = getCafe(params.slug);
  if (!cafe) notFound();

  return <CafeSite cafe={cafe} />;
}
