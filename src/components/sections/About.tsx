import { Award, GraduationCap } from "lucide-react";
import { Section, SectionHeader } from "@/components/shared/Section";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { aboutContent, credentials } from "@/data/content";

export function About() {
  return (
    <Section id="about" background="white">
      <SectionHeader
        title="הכירו את היועץ שלכם"
        subtitle="מומחיות בצומת של כלכלה מסורתית ופיננסים דיגיטליים."
      />

      <div className="grid lg:grid-cols-2 gap-12 items-start">
        {/* Left: Image and bio */}
        <div className="space-y-6">
          <div className="rounded-2xl overflow-hidden shadow-xl">
            <img
              src={aboutContent.image}
              alt={`${aboutContent.name} - ${aboutContent.title}`}
              className="w-full h-[500px] object-fill"
            />
          </div>

          <div>
            <h3 className="text-2xl font-bold text-white mb-2">
              {aboutContent.name}
            </h3>
            <p className="text-lg text-crypto-gold font-semibold mb-4">
              {aboutContent.title}
            </p>
            <p className="text-gray-300 leading-relaxed">{aboutContent.bio}</p>
          </div>

          {/* Areas of expertise */}
          <div>
            <h4 className="font-semibold text-white mb-3 flex items-center gap-2">
              <Award className="w-5 h-5 text-crypto-gold" />
              תחומי מומחיות
            </h4>
            <div className="flex flex-wrap gap-2">
              {aboutContent.expertise.map((skill, index) => (
                <Badge
                  key={index}
                  variant="outline"
                  className="text-sm py-1.5 bg-crypto-gold/10 border-crypto-gold/30 text-gray-300"
                >
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
        </div>

        {/* Right: Credentials */}
        <div className="space-y-6">
          <div className="flex items-center gap-2 mb-6">
            <GraduationCap className="w-6 h-6 text-crypto-gold" />
            <h4 className="text-xl font-semibold text-white">השכלה והסמכות</h4>
          </div>

          <div className="space-y-4">
            {credentials.map((credential) => (
              <Card
                key={credential.id}
                className="bg-crypto-dark-lighter border-crypto-dark-lighter hover:shadow-lg hover:shadow-crypto-gold/10 hover:border-crypto-gold/30 transition-all duration-300"
              >
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex-1">
                      <h5 className="font-semibold text-white text-lg">
                        {credential.title}
                      </h5>
                      <p className="text-crypto-gold font-medium">
                        {credential.institution}
                      </p>
                    </div>
                    <Badge
                      variant="secondary"
                      className="ml-4 bg-crypto-gold/20 text-crypto-gold border-crypto-gold/30"
                    >
                      {credential.year}
                    </Badge>
                  </div>
                  {credential.description && (
                    <p className="text-sm text-gray-400 mt-2">
                      {credential.description}
                    </p>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Key achievements */}
          <Card className="bg-gradient-to-br from-crypto-gold to-crypto-gold-darker text-white border-crypto-gold/30">
            <CardContent className="p-6">
              <h5 className="font-semibold text-lg mb-4 text-white">
                הישגים מרכזיים
              </h5>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-white rounded-full mt-2 flex-shrink-0" />
                  <span className="text-sm text-white">
                    פרסום מחקר על דינמיקת שוק המטבעות הדיגיטליים בכתבי עת
                    פיננסיים מובילים
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-white rounded-full mt-2 flex-shrink-0" />
                  <span className="text-sm text-white">
                    אנליסט כלכלי לשעבר בבנק הפדרלי, התמחות במדיניות מוניטרית
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-white rounded-full mt-2 flex-shrink-0" />
                  <span className="text-sm text-white">
                    ייעוץ לחברות Fortune 500 באסטרטגיות שילוב בלוקצ'יין
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-white rounded-full mt-2 flex-shrink-0" />
                  <span className="text-sm text-white">
                    דובר קבוע בכנסים בינלאומיים בתחום הקריפטו והפינטק
                  </span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </Section>
  );
}
