import { MetadataRoute } from 'next'
import { supabaseAdmin } from '@/lib/supabase'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://www.whocalledus.net'

  // Static pages
  const staticPages: MetadataRoute.Sitemap = [
    { url: baseUrl, lastModified: new Date(), changeFrequency: 'daily', priority: 1 },
    { url: `${baseUrl}/blog/how-to-block-spam-calls`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${baseUrl}/privacy`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.3 },
    { url: `${baseUrl}/terms`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.3 },
    { url: `${baseUrl}/dmca`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.3 },
  ]

  // Phone number pages
  const { data: numbers } = await supabaseAdmin
    .from('phone_numbers')
    .select('number, created_at')
    .order('search_count', { ascending: false })
    .limit(5000)

  const numberPages: MetadataRoute.Sitemap = (numbers || []).map((n) => ({
    url: `${baseUrl}/number/${n.number}`,
    lastModified: new Date(n.created_at),
    changeFrequency: 'weekly',
    priority: 0.8,
  }))

  return [...staticPages, ...numberPages]
}
