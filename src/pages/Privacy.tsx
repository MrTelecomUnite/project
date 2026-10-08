import { Shield } from 'lucide-react';
import type { PageId } from '@/types';

interface PrivacyProps {
  onNavigate: (page: PageId) => void;
}

const sections = [
  {
    title: '1. Responsable du traitement',
    content:
      "Le responsable du traitement des données personnelles est Mr Telecom Dev, développeur indépendant. Pour toute question relative à la protection des données, vous pouvez me contacter à l'adresse : contact@Mr Telecom-dev.fr.",
  },
  {
    title: '2. Données collectées',
    content:
      "Ce site web ne collecte que les données strictement nécessaires à son fonctionnement : le nom et l'adresse e-mail que vous fournissez volontairement via le formulaire de contact, ainsi que des données techniques anonymisées (type de navigateur, pages visitées) à des fins statistiques.",
  },
  {
    title: '3. Finalité de la collecte',
    content:
      "Les données collectées via le formulaire de contact sont utilisées uniquement pour répondre à vos demandes et vous fournir les informations ou services sollicités. Les données techniques servent à améliorer l'expérience utilisateur et la performance du site.",
  },
  {
    title: '4. Applications mobiles',
    content:
      "Les applications mobiles développées par Mr Telecom Dev peuvent collecter des données spécifiques à leur fonctionnement (préférences utilisateur, données saisies). Ces données sont stockées localement sur votre appareil sauf mention contraire dans la politique de confidentialité propre à chaque application.",
  },
  {
    title: '5. Conservation des données',
    content:
      "Les données issues du formulaire de contact sont conservées pendant une durée maximale de 12 mois à compter du dernier échange, puis supprimées définitivement. Les données techniques anonymisées sont conservées 13 mois maximum.",
  },
  {
    title: '6. Partage des données',
    content:
      "Vos données personnelles ne sont jamais vendues ni cédées à des tiers. Elles peuvent uniquement être traitées par des prestataires techniques (hébergeur, service d'e-mail) agissant en tant que sous-traitants, avec des obligations strictes de confidentialité et de sécurité.",
  },
  {
    title: '7. Cookies',
    content:
      "Ce site utilise des cookies techniques nécessaires à son bon fonctionnement. Aucun cookie publicitaire ou de tracking commercial n'est utilisé. Vous pouvez à tout moment désactiver les cookies dans les paramètres de votre navigateur.",
  },
  {
    title: '8. Sécurité',
    content:
      "Des mesures techniques et organisationnelles appropriées sont mises en place pour protéger vos données contre la perte, l'accès non autorisé, la divulgation ou la modification. Toutes les communications sont chiffrées via HTTPS.",
  },
  {
    title: '9. Vos droits',
    content:
      "Conformément au Règlement Général sur la Protection des Données (RGPD), vous disposez d'un droit d'accès, de rectification, d'effacement, de limitation, de portabilité et d'opposition concernant vos données. Pour exercer ces droits, écrivez à contact@Mr Telecom-dev.fr.",
  },
  {
    title: '10. Modifications',
    content:
      "La présente politique de confidentialité peut être mise à jour à tout moment pour refléter les évolutions légales ou techniques. La date de dernière mise à jour est indiquée ci-dessous. Je vous invite à consulter régulièrement cette page.",
  },
];

export default function Privacy({ onNavigate }: PrivacyProps) {
  const lastUpdate = '18 septembre 2026';

  return (
    <div className="animate-fade-in pt-32">
      <section className="py-12 sm:py-16">
        <div className="container-narrow">
          <div className="text-center">
            <span className="section-eyebrow">
              <Shield size={14} /> Confidentialité
            </span>
            <h1 className="mt-5 text-4xl font-bold text-slate-900 sm:text-5xl text-balance">
              Politique de confidentialité
            </h1>
            <p className="mt-6 text-slate-500">
              Dernière mise à jour : {lastUpdate}
            </p>
          </div>

          <div className="mt-10 rounded-2xl bg-teal-50 p-6 text-sm leading-relaxed text-teal-800">
            Cette politique décrit comment Mr Telecom Dev collecte, utilise et protège
            vos données personnelles, conformément au RGPD. Elle s'applique au
            présent site web ainsi qu'aux applications mobiles éditées par Mr Telecom Dev.
          </div>

          <div className="mt-10 space-y-8">
            {sections.map((section) => (
              <div key={section.title}>
                <h2 className="text-lg font-semibold text-slate-900">
                  {section.title}
                </h2>
                <p className="mt-3 leading-relaxed text-slate-600">
                  {section.content}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-14 rounded-2xl border border-slate-200 bg-slate-50 p-8 text-center">
            <h2 className="text-lg font-semibold text-slate-900">
              Une question sur vos données ?
            </h2>
            <p className="mt-2 text-sm text-slate-600">
              N'hésitez pas à me contacter, je vous répondrai dans les meilleurs délais.
            </p>
            <button onClick={() => onNavigate('contact')} className="mt-5 btn-primary">
              Me contacter
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
