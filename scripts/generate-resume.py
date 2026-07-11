from pathlib import Path

from reportlab.lib import colors
from reportlab.lib.enums import TA_RIGHT
from reportlab.lib.pagesizes import letter
from reportlab.lib.styles import ParagraphStyle, getSampleStyleSheet
from reportlab.lib.units import inch
from reportlab.platypus import (
    KeepTogether,
    Paragraph,
    SimpleDocTemplate,
    Spacer,
    Table,
    TableStyle,
)


ROOT = Path(__file__).resolve().parents[1]
OUTPUT = ROOT / "public" / "christian-ortel-resume.pdf"

INK = colors.HexColor("#18202B")
MUTED = colors.HexColor("#58616D")
SIGNAL = colors.HexColor("#B66A16")
LINE = colors.HexColor("#D8D4CC")

styles = getSampleStyleSheet()
styles.add(
    ParagraphStyle(
        name="ResumeName",
        parent=styles["Normal"],
        fontName="Helvetica-Bold",
        fontSize=23,
        leading=24,
        textColor=INK,
        spaceAfter=2,
    )
)
styles.add(
    ParagraphStyle(
        name="ResumeTitle",
        parent=styles["Normal"],
        fontName="Helvetica",
        fontSize=10,
        leading=12,
        textColor=SIGNAL,
    )
)
styles.add(
    ParagraphStyle(
        name="Contact",
        parent=styles["Normal"],
        fontName="Helvetica",
        fontSize=8.1,
        leading=10.2,
        alignment=TA_RIGHT,
        textColor=MUTED,
    )
)
styles.add(
    ParagraphStyle(
        name="Section",
        parent=styles["Normal"],
        fontName="Helvetica-Bold",
        fontSize=9.3,
        leading=11.4,
        textColor=INK,
        spaceBefore=8,
        spaceAfter=4,
    )
)
styles.add(
    ParagraphStyle(
        name="Role",
        parent=styles["Normal"],
        fontName="Helvetica-Bold",
        fontSize=9.4,
        leading=11.5,
        textColor=INK,
    )
)
styles.add(
    ParagraphStyle(
        name="Date",
        parent=styles["Normal"],
        fontName="Helvetica",
        fontSize=8.4,
        leading=10.6,
        alignment=TA_RIGHT,
        textColor=MUTED,
    )
)
styles.add(
    ParagraphStyle(
        name="ResumeBullet",
        parent=styles["Normal"],
        fontName="Helvetica",
        fontSize=8.75,
        leading=11.25,
        leftIndent=8,
        firstLineIndent=-6,
        textColor=INK,
        spaceAfter=2.1,
    )
)
styles.add(
    ParagraphStyle(
        name="Compact",
        parent=styles["Normal"],
        fontName="Helvetica",
        fontSize=8.75,
        leading=11.25,
        textColor=INK,
    )
)


def section(title: str):
    return [
        Spacer(1, 2),
        Table(
            [[Paragraph(title.upper(), styles["Section"])]],
            colWidths=[7.15 * inch],
            style=TableStyle(
                [
                    ("LINEBELOW", (0, 0), (-1, -1), 0.6, LINE),
                    ("LEFTPADDING", (0, 0), (-1, -1), 0),
                    ("RIGHTPADDING", (0, 0), (-1, -1), 0),
                    ("TOPPADDING", (0, 0), (-1, -1), 0),
                    ("BOTTOMPADDING", (0, 0), (-1, -1), 1.5),
                ]
            ),
        ),
    ]


def role(company: str, title: str, location: str, dates: str, bullets: list[str]):
    heading = Table(
        [[Paragraph(f"{company} | {title}", styles["Role"]), Paragraph(f"{location}<br/>{dates}", styles["Date"])]],
        colWidths=[5.62 * inch, 1.53 * inch],
        style=TableStyle(
            [
                ("VALIGN", (0, 0), (-1, -1), "TOP"),
                ("LEFTPADDING", (0, 0), (-1, -1), 0),
                ("RIGHTPADDING", (0, 0), (-1, -1), 0),
                ("TOPPADDING", (0, 0), (-1, -1), 2.5),
                ("BOTTOMPADDING", (0, 0), (-1, -1), 1.5),
            ]
        ),
    )
    return KeepTogether(
        [heading, *[Paragraph(f"- {item}", styles["ResumeBullet"]) for item in bullets]]
    )


story = []
header = Table(
    [
        [
            [Paragraph("CHRISTIAN R. ORTEL", styles["ResumeName"]), Paragraph("SENIOR DATA ANALYST | AI / ANALYTICS ENGINEER", styles["ResumeTitle"])],
            Paragraph(
                "Tampa, FL | (518) 925-7498<br/>"
                '<link href="mailto:christian_ortel@yahoo.com">christian_ortel@yahoo.com</link><br/>'
                '<link href="https://linkedin.com/in/christianortel">linkedin.com/in/christianortel</link> | '
                '<link href="https://github.com/christianortel">github.com/christianortel</link>',
                styles["Contact"],
            ),
        ]
    ],
    colWidths=[4.25 * inch, 2.9 * inch],
    style=TableStyle(
        [
            ("VALIGN", (0, 0), (-1, -1), "TOP"),
            ("LEFTPADDING", (0, 0), (-1, -1), 0),
            ("RIGHTPADDING", (0, 0), (-1, -1), 0),
            ("TOPPADDING", (0, 0), (-1, -1), 0),
            ("BOTTOMPADDING", (0, 0), (-1, -1), 2),
        ]
    ),
)
story.append(header)
story.append(Spacer(1, 5))
story.append(
    Paragraph(
        "Senior data analyst with experience across financial-services risk, reporting automation, applied AI, and stakeholder-facing analytics. Builds practical systems with SQL, Python, Snowflake, RAG workflows, Tableau, and Power BI.",
        styles["Compact"],
    )
)

story.extend(section("Professional Experience"))
story.append(
    role(
        "Citi Bank N.A.",
        "AVP - Data Science Senior Analyst",
        "Tampa, FL",
        "Jan 2023 - Mar 2026",
        [
            "Automated monthly ICRM stakeholder reporting with a Python and pandas ETL over Jira sprint data and KPIs, reducing a four-week manual workflow to about ten minutes.",
            "Supported a Gemini RAG workflow that generated SQL from plain-English questions over a 1.5M-row Snowflake dataset, improving access for risk and compliance teams.",
            "Designed A/B prompt tests and stakeholder feedback loops to improve SQL reliability for non-technical users.",
            "Validated monthly UAT and Production Tableau dashboards and translated reporting requirements across business, risk, governance, and technical teams.",
        ],
    )
)
story.append(
    role(
        "JPMorgan Chase & Co. (via mThree)",
        "Production Support Analyst",
        "Tampa, FL",
        "Oct 2021 - Dec 2022",
        [
            "Built Tableau and SQL reporting for real-time visibility into payment processing and automated a pre-deployment checklist with SQL and Excel VBA.",
        ],
    )
)
story.append(
    role(
        "Nusr-Et",
        "Accounting Analyst",
        "Boston, MA",
        "Aug 2020 - Sep 2021",
        [
            "Built Excel pivot-table financial statements covering profit, expenses, and tax deductions; resolved billing and payment-processor issues.",
        ],
    )
)
story.append(
    role(
        "TD Bank",
        "Bank Teller I",
        "Boston, MA",
        "Aug 2019 - Mar 2020",
        [
            "Supported account setup and closure, loan applications, customer relationships, and compromised-card resolution.",
        ],
    )
)

story.extend(section("Selected Engineering Work"))
story.append(
    role(
        "Onigiri",
        "AI Engineer - Side Venture",
        "Remote",
        "Oct 2024 - Jan 2025",
        [
            "Deployed a Llama 3.1 Twitter agent on a custom Python RAG framework and integrated CoinMarketCap data for market-sentiment publishing through the Twitter API.",
        ],
    )
)
story.append(
    role(
        "iDecentralize Finance / WorldStar HipHop",
        "Blockchain Developer / Software Engineer",
        "Remote",
        "Oct 2021 - Jul 2022",
        [
            "Built Solidity ERC-721 contracts, Polygon token-gated trading access, Node.js backends, weighted-rarity NFT generation, and automated IPFS metadata publishing.",
        ],
    )
)

story.extend(section("Founder Ventures"))
story.append(
    Paragraph(
        "<b>Tallownaise:</b> Built a consumer food brand, product thesis, visual identity, and direct-to-consumer storefront around grass-fed beef-tallow mayonnaise. <b>Motionless Labs / Peptipedia:</b> Built a gated research catalog with lot documentation and a separate plain-language education site. <b>toxinmap:</b> Developing an interactive environmental-data globe for toxic releases and PFAS exposure context.",
        styles["Compact"],
    )
)

story.extend(section("Education and Credentials"))
story.append(
    Table(
        [
            [
                Paragraph(
                    "<b>Suffolk University</b> - BS, Big Data &amp; Business Analytics; Cybersecurity concentration<br/>"
                    "GPA 3.425/4.0 | Dean's List 2019-2021 | Trustee Scholarship | Transfer Excellence Award",
                    styles["Compact"],
                ),
                Paragraph("Boston, MA<br/>May 2021", styles["Date"]),
            ]
        ],
        colWidths=[5.62 * inch, 1.53 * inch],
        style=TableStyle(
            [
                ("VALIGN", (0, 0), (-1, -1), "TOP"),
                ("LEFTPADDING", (0, 0), (-1, -1), 0),
                ("RIGHTPADDING", (0, 0), (-1, -1), 0),
                ("TOPPADDING", (0, 0), (-1, -1), 1),
                ("BOTTOMPADDING", (0, 0), (-1, -1), 2),
            ]
        ),
    )
)
story.append(
    Paragraph(
        "<b>Credentials:</b> Google Data Analytics Professional Certificate (2026) | PCAP - Certified Associate in Python Programming (2025) | Florida 2-15 Life, Health &amp; Annuity License (expires Aug 2026) | mThree Production Support (2021)",
        styles["Compact"],
    )
)

story.extend(section("Skills"))
story.append(
    Paragraph(
        "<b>Data:</b> SQL, Snowflake, Oracle, Teradata, Python, pandas, NumPy, data modeling | "
        "<b>Analytics:</b> Tableau, Power BI, Excel VBA, SAS, R, KPI reporting | "
        "<b>AI / Engineering:</b> RAG, Gemini, prompt evaluation, Git, Kubernetes, TypeScript, APIs",
        styles["Compact"],
    )
)


def add_metadata(canvas, document):
    canvas.saveState()
    canvas.setTitle("Christian Ortel - Resume")
    canvas.setAuthor("Christian Ortel")
    canvas.setSubject("Senior Data Analyst and AI / Analytics Engineer resume")
    canvas.setFillColor(MUTED)
    canvas.setFont("Helvetica", 6.8)
    footer = "christianortel.com | Updated July 2026"
    canvas.drawString(document.leftMargin, 0.31 * inch, footer)
    canvas.drawRightString(letter[0] - document.rightMargin, 0.31 * inch, "1")
    canvas.restoreState()


doc = SimpleDocTemplate(
    str(OUTPUT),
    pagesize=letter,
    leftMargin=0.68 * inch,
    rightMargin=0.68 * inch,
    topMargin=0.48 * inch,
    bottomMargin=0.46 * inch,
    title="Christian Ortel - Resume",
    author="Christian Ortel",
)
doc.build(story, onFirstPage=add_metadata, onLaterPages=add_metadata)
print(f"Generated {OUTPUT}")
