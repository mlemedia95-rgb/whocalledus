import { MetadataRoute } from 'next'
import { supabaseAdmin } from '@/lib/supabase'

// Top FTC-reported spam numbers — always indexed with high priority
const TOP_SPAM_NUMBERS = [
  '8559090816','8774196664','8669591526','5044818700','3152158150',
  '8669591606','8668786251','8335883805','3149678711','8559090804',
  '3152158146','8556881429','8669590962','8335101147','8337279955',
  '8887215215','2015345822','8669708121','7712473445','6187954446',
  '8669591601','8335883801','8886529800','8004378994','8008779339',
  '8776662546','8772733411','8886647626','8003616327','8002758777',
]

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://www.whocalledus.net'

  const AREA_CODES = [
    '212','646','718','347','929',
    '213','310','323','424','747',
    '312','773','872',
    '713','832','281',
    '305','786','954','754',
    '214','469','972',
    '404','678','770',
    '602','480','623',
    '415','628',
    '206','425','253',
    '617','857',
    '702','725',
    '503','971',
    '512','737',
    '619','858',
    '704','980',
    '303','720',
    '410','443',
    '314','636',
    '813','727','941',
  ]

  // Static pages
  const staticPages: MetadataRoute.Sitemap = [
    { url: baseUrl, lastModified: new Date(), changeFrequency: 'daily', priority: 1 },
    { url: `${baseUrl}/blog/how-to-block-spam-calls`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${baseUrl}/blog/irs-scam-phone-numbers`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.88 },
    { url: `${baseUrl}/blog/medicare-scam-calls`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.88 },
    { url: `${baseUrl}/blog/social-security-scam-calls`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.88 },
    { url: `${baseUrl}/blog/robocall-blocker-apps`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.87 },
    { url: `${baseUrl}/blog/florida-phone-scams`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.87 },
    { url: `${baseUrl}/blog/texas-phone-scams`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.87 },
    { url: `${baseUrl}/blog/california-phone-scams`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.87 },
    { url: `${baseUrl}/blog/new-york-phone-scams`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.87 },
    { url: `${baseUrl}/blog/ohio-phone-scams`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.87 },
    { url: `${baseUrl}/area-code`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    ...AREA_CODES.map(code => ({
      url: `${baseUrl}/area-code/${code}`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.85,
    })),
    { url: `${baseUrl}/privacy`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.3 },
    { url: `${baseUrl}/terms`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.3 },
    { url: `${baseUrl}/dmca`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.3 },
  ]

  // Top spam number pages — high priority, always in sitemap
  const topSpamPages: MetadataRoute.Sitemap = TOP_SPAM_NUMBERS.map(number => ({
    url: `${baseUrl}/number/${number}`,
    lastModified: new Date(),
    changeFrequency: 'daily' as const,
    priority: 0.95,
  }))

  // All phone number pages from Supabase
  const { data: numbers } = await supabaseAdmin
    .from('phone_numbers')
    .select('number, created_at, search_count')
    .order('search_count', { ascending: false })
    .limit(10000)

  const numberPages: MetadataRoute.Sitemap = (numbers || [])
    .filter(n => !TOP_SPAM_NUMBERS.includes(n.number))
    .map((n) => ({
      url: `${baseUrl}/number/${n.number}`,
      lastModified: new Date(n.created_at),
      changeFrequency: 'weekly' as const,
      priority: n.search_count > 10 ? 0.85 : n.search_count > 3 ? 0.75 : 0.65,
    }))

  return [...staticPages, ...topSpamPages, ...numberPages]
}
