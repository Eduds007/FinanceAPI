import Head from "next/head"
import Script from "next/script"
import styles from "../styles/Home.module.css"

const LAUNCHLIST_KEY = "dUXaHc"

const NAV_LINKS = [
    { label: "Produto", href: "#produto" },
    { label: "Documentação", href: "#documentacao" },
]

const ASSET_CLASSES = ["Ações", "Cripto", "FIIs", "FIAgro", "CDB", "Câmbio", "Dividendos"]

const STATS = [
    { value: "500+", label: "Na lista de espera" },
    { value: "B3", label: "Ações, FIIs e FIAgro cobertos" },
    { value: "7", label: "Classes de ativos: ações, cripto, FIIs, FIAgro, CDB, câmbio e dividendos" },
    { value: "2027", label: "Lançamento previsto" },
]

const FEATURES = [
    {
        title: "Dados em tempo real da B3",
        text: "Cotações de ações, cripto, FIIs, FIAgro, CDB, câmbio (USD/BRL) e dividendos atualizadas em milissegundos, direto da bolsa brasileira.",
        icon: <BoltIcon />,
    },
    {
        title: "Segurança de ponta a ponta",
        text: "Autenticação por API key, tráfego 100% sobre HTTPS/TLS e isolamento total entre contas.",
        icon: <ShieldIcon />,
    },
    {
        title: "API REST simples",
        text: "Endpoints previsíveis, respostas em JSON e SDKs prontos para os principais frameworks.",
        icon: <CodeIcon />,
    },
    {
        title: "Escala sem esforço",
        text: "Rate limits generosos e infraestrutura distribuída para acompanhar seu crescimento.",
        icon: <ChartIcon />,
    },
    {
        title: "Feito para o mercado brasileiro",
        text: "Cobertura completa da B3, incluindo ações, FIIs, FIAgro, CDB e dividendos, com dados nativos em português e cotados em real.",
        icon: <GlobeIcon />,
    },
    {
        title: "Documentação em português",
        text: "Guias, exemplos de código e um playground interativo para testar cada endpoint, tudo em português do Brasil.",
        icon: <BookIcon />,
    },
]

function WaitlistWidget() {
    return <div className="launchlist-widget" data-key-id={LAUNCHLIST_KEY} />
}

function Home() {
    return (
        <div className={styles.page}>
            <Head>
                <title>Cotapi: A API de dados financeiros do Brasil</title>
                <meta
                    name="description"
                    content="Cotapi é a futura API REST de dados financeiros feita para o mercado brasileiro: ações, cripto, FIIs, FIAgro, CDB, câmbio e dividendos em tempo real. Entre para a lista de espera e garanta acesso antecipado."
                />
            </Head>

            <Script src="https://getlaunchlist.com/js/widget.js" strategy="afterInteractive" />

            <header className={styles.nav}>
                <div className={`${styles.container} ${styles.navInner}`}>
                    <div className={styles.logo}>
                        <span className={styles.logoMark}>$</span>
                        Cotapi
                    </div>

                    <nav className={styles.navLinks}>
                        {NAV_LINKS.map((link) => (
                            <a key={link.href} href={link.href}>
                                {link.label}
                            </a>
                        ))}
                    </nav>

                    <div className={styles.navActions}>
                        <a href="#waitlist" className={styles.btnPrimary}>
                            Entrar na lista
                        </a>
                    </div>
                </div>
            </header>

            <main>
                <section className={styles.hero}>
                    <div className={`${styles.container} ${styles.heroGrid}`}>
                        <div>
                            <div className={styles.badge}>
                                <span className={styles.dot} />
                                Feito no Brasil, para o mercado brasileiro
                            </div>

                            <h1 className={styles.heroTitle}>
                                A API de dados financeiros <span>nível Brasil</span>
                            </h1>

                            <p className={styles.heroSubtitle}>
                                Ações, cripto, FIIs, FIAgro, CDB, câmbio e dividendos em uma única
                                integração, pensada de ponta a ponta para o desenvolvedor e o
                                fintech brasileiro. Estamos em desenvolvimento: entre para a lista
                                e seja avisado assim que abrirmos o acesso.
                            </p>

                            <div className={styles.assetChips}>
                                {ASSET_CLASSES.map((asset) => (
                                    <span className={styles.assetChip} key={asset}>
                                        {asset}
                                    </span>
                                ))}
                            </div>

                            <a href="#waitlist" className={styles.btnPrimary}>
                                Entrar na lista de espera
                            </a>
                        </div>

                        <div className={styles.codePanel}>
                            <div className={styles.codePanelHead}>
                                <span className={styles.codeDot} />
                                <span className={styles.codeDot} />
                                <span className={styles.codeDot} />
                                <span className={styles.codePanelTitle}>
                                    quote.sh
                                </span>
                            </div>
                            <pre className={styles.codePanelBody}>
                                <span className={styles.tokComment}># Cotação em tempo real via cURL</span>{"\n"}
                                <span className={styles.tokPlain}>curl </span>
                                <span className={styles.tokMethod}>https://api.cotapi.dev/v1/quote</span>
                                <span className={styles.tokPlain}> \</span>{"\n"}
                                <span className={styles.tokPlain}>  -H </span>
                                <span className={styles.tokString}>&quot;Authorization: Bearer sk_live_...&quot;</span>
                                <span className={styles.tokPlain}> \</span>{"\n"}
                                <span className={styles.tokPlain}>  -d symbol=</span>
                                <span className={styles.tokString}>PETR4</span>
                                {"\n\n"}
                                <span className={styles.tokComment}>{"// resposta"}</span>{"\n"}
                                <span className={styles.tokPlain}>{"{"}</span>{"\n"}
                                <span className={styles.tokKey}>  &quot;symbol&quot;</span>
                                <span className={styles.tokPlain}>: </span>
                                <span className={styles.tokString}>&quot;PETR4&quot;</span>
                                <span className={styles.tokPlain}>,</span>{"\n"}
                                <span className={styles.tokKey}>  &quot;price&quot;</span>
                                <span className={styles.tokPlain}>: </span>
                                <span className={styles.tokNum}>38.42</span>
                                <span className={styles.tokPlain}>,</span>{"\n"}
                                <span className={styles.tokKey}>  &quot;change&quot;</span>
                                <span className={styles.tokPlain}>: </span>
                                <span className={styles.tokNum}>+0.87</span>
                                <span className={styles.tokPlain}>,</span>{"\n"}
                                <span className={styles.tokKey}>  &quot;currency&quot;</span>
                                <span className={styles.tokPlain}>: </span>
                                <span className={styles.tokString}>&quot;BRL&quot;</span>
                                <span className={styles.tokPlain}>,</span>{"\n"}
                                <span className={styles.tokKey}>  &quot;latency_ms&quot;</span>
                                <span className={styles.tokPlain}>: </span>
                                <span className={styles.tokNum}>18</span>{"\n"}
                                <span className={styles.tokPlain}>{"}"}</span>
                            </pre>
                        </div>
                    </div>
                </section>

                <section className={styles.section} id="waitlist" style={{ paddingTop: 0 }}>
                    <div className={styles.container}>
                        <div className={styles.waitlistSection}>
                            <div className={styles.waitlistCard}>
                                <div className={styles.waitlistHeadline}>
                                    <RocketIcon />
                                    Garanta seu acesso antecipado, é grátis
                                </div>
                                <WaitlistWidget />
                                <div className={styles.heroMeta} style={{ marginTop: 16, justifyContent: "center" }}>
                                    Vagas por ordem de entrada · sem spam
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className={styles.stats}>
                    <div className={`${styles.container} ${styles.statsGrid}`}>
                        {STATS.map((stat) => (
                            <div className={styles.stat} key={stat.label}>
                                <div className={styles.statValue}>{stat.value}</div>
                                <div className={styles.statLabel}>{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </section>

                <section className={styles.section} id="produto">
                    <div className={styles.container}>
                        <div className={styles.sectionHead}>
                            <div className={styles.eyebrow}>O que vem por aí</div>
                            <h2 className={styles.sectionTitle}>
                                Tudo que você vai precisar para operar com dados do mercado brasileiro
                            </h2>
                            <p className={styles.sectionSubtitle}>
                                Estamos construindo isso para desenvolvedores e times financeiros
                                brasileiros que não podem se dar ao luxo de dados atrasados,
                                instáveis ou fora do padrão da B3.
                            </p>
                        </div>

                        <div className={styles.featureGrid}>
                            {FEATURES.map((feature) => (
                                <div className={styles.featureCard} key={feature.title}>
                                    <div className={styles.featureIcon}>{feature.icon}</div>
                                    <div className={styles.featureTitle}>{feature.title}</div>
                                    <p className={styles.featureText}>{feature.text}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <section className={styles.section} style={{ paddingTop: 0 }}>
                    <div className={styles.container}>
                        <div className={styles.cta}>
                            <div>
                                <div className={styles.ctaTitle}>
                                    Não fique de fora
                                </div>
                                <div className={styles.ctaSubtitle}>
                                    Entre para a lista de espera e seja avisado assim que abrirmos o acesso à API feita nível Brasil.
                                </div>
                            </div>
                            <div className={styles.ctaActions}>
                                <div className={styles.waitlistCardDark}>
                                    <WaitlistWidget />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <footer className={styles.footer} id="documentacao">
                <div className={styles.container}>
                    <div className={styles.footerTop}>
                        <div className={styles.footerBrand}>
                            <div className={styles.logo}>
                                <span className={styles.logoMark}>$</span>
                                Cotapi
                            </div>
                            <p className={styles.footerTagline}>
                                A API de dados financeiros nível Brasil, para produtos que não podem esperar.
                            </p>
                        </div>

                        <div className={styles.footerCols}>
                            <div className={styles.footerCol}>
                                <div className={styles.footerColTitle}>Produto</div>
                                <a href="#produto">Funcionalidades</a>
                                <a href="#waitlist">Lista de espera</a>
                            </div>
                            <div className={styles.footerCol}>
                                <div className={styles.footerColTitle}>Desenvolvedores</div>
                                <a href="#">Documentação</a>
                                <a href="#">Referência da API</a>
                                <a href="#">SDKs</a>
                            </div>
                            <div className={styles.footerCol}>
                                <div className={styles.footerColTitle}>Empresa</div>
                                <a href="#">Sobre</a>
                                <a href="#">Contato</a>
                                <a href="#">Privacidade</a>
                            </div>
                        </div>
                    </div>

                    <div className={styles.footerBottom}>
                        <span>© {new Date().getFullYear()} Cotapi. Todos os direitos reservados.</span>
                        <span className={styles.footerStatus}>
                            <span className={styles.statusDot} />
                            Lançamento em breve
                        </span>
                    </div>
                </div>
            </footer>
        </div>
    )
}

function RocketIcon() {
    return (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
            <path d="M14.5 3c2.5 0 4.5 2 4.5 4.5 0 4-3 7.5-6 9.5l-4-4c2-3 5.5-6 9.5-6" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
            <path d="M9 15l-4 1 1-4M5 19l-1.5 1.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            <circle cx="15" cy="8" r="1.4" fill="currentColor" />
        </svg>
    )
}

function BoltIcon() {
    return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
            <path d="M13 2 4 14h6l-1 8 9-12h-6l1-8Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
        </svg>
    )
}

function ShieldIcon() {
    return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
            <path d="M12 3l7 3v6c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6l7-3Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
            <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    )
}

function CodeIcon() {
    return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
            <path d="M8 6 2 12l6 6M16 6l6 6-6 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    )
}

function ChartIcon() {
    return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
            <path d="M4 20V10M12 20V4M20 20v-7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        </svg>
    )
}

function GlobeIcon() {
    return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
            <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.8" />
            <path d="M3 12h18M12 3c2.5 2.5 3.8 5.6 3.8 9s-1.3 6.5-3.8 9c-2.5-2.5-3.8-5.6-3.8-9S9.5 5.5 12 3Z" stroke="currentColor" strokeWidth="1.8" />
        </svg>
    )
}

function BookIcon() {
    return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
            <path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H20v15H6.5A2.5 2.5 0 0 0 4 20.5v-15Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
            <path d="M4 20.5A2.5 2.5 0 0 1 6.5 18H20" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
        </svg>
    )
}

export default Home
