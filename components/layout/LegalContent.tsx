interface LegalSection {
  heading: string;
  body: string[];
}

export default function LegalContent({
  lastUpdated,
  sections,
}: {
  lastUpdated: string;
  sections: LegalSection[];
}) {
  return (
    <section className="bg-white py-20">
      <div className="container-px mx-auto max-w-3xl">
        <p className="text-sm text-text-muted">Last updated: {lastUpdated}</p>
        <div className="mt-8 flex flex-col gap-10">
          {sections.map((section) => (
            <div key={section.heading}>
              <h2 className="text-xl font-bold text-navy">{section.heading}</h2>
              <div className="mt-3 flex flex-col gap-3">
                {section.body.map((paragraph, i) => (
                  <p key={i} className="font-serif text-base leading-relaxed text-text-body">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
