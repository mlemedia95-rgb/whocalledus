import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { supabaseAdmin } from '@/lib/supabase'

interface Props {
  params: Promise<{ code: string }>
}

const AREA_CODE_DATA: Record<string, {
  city: string
  state: string
  stateAbbr: string
  population: string
  region: string
  timezone: string
  spamTypes: string[]
  knownSpamPrefixes: string[]
  tips: string[]
  neighborCodes: string[]
}> = {
  '212': {
    city: 'New York City',
    state: 'New York',
    stateAbbr: 'NY',
    population: '8.3 million',
    region: 'Manhattan',
    timezone: 'Eastern Time (ET)',
    spamTypes: ['IRS impersonation', 'Social Security scams', 'Real estate robocalls', 'Credit card offers', 'Student loan forgiveness'],
    knownSpamPrefixes: ['212-555', '212-800', '212-999'],
    tips: ['Manhattan residents report high rates of IRS impersonation calls', 'Many 212 spam calls claim to be from NYC government agencies', 'Real estate robocalls are especially common in NYC area'],
    neighborCodes: ['646', '718', '917', '347'],
  },
  '646': {
    city: 'New York City',
    state: 'New York',
    stateAbbr: 'NY',
    population: '8.3 million',
    region: 'Manhattan (overlay)',
    timezone: 'Eastern Time (ET)',
    spamTypes: ['Tech support scams', 'Warranty robocalls', 'Fake package delivery', 'IRS impersonation', 'Debt collection scams'],
    knownSpamPrefixes: ['646-555', '646-800'],
    tips: ['646 is an overlay code for Manhattan alongside 212', 'Many scammers spoof 646 numbers to appear local to NYC', 'High volume of fake package delivery calls in this area'],
    neighborCodes: ['212', '718', '917', '347'],
  },
  '718': {
    city: 'New York City',
    state: 'New York',
    stateAbbr: 'NY',
    population: '8.3 million',
    region: 'Brooklyn, Queens, Bronx, Staten Island',
    timezone: 'Eastern Time (ET)',
    spamTypes: ['Medicare scams', 'Utility company impersonation', 'Debt collection', 'Auto warranty', 'Prize/sweepstakes scams'],
    knownSpamPrefixes: ['718-555', '718-000'],
    tips: ['718 covers the outer boroughs of NYC', 'Utility scams impersonating Con Edison are common', 'Medicare and health insurance scams target seniors in this area'],
    neighborCodes: ['212', '646', '917', '347'],
  },
  '213': {
    city: 'Los Angeles',
    state: 'California',
    stateAbbr: 'CA',
    population: '3.9 million',
    region: 'Downtown Los Angeles',
    timezone: 'Pacific Time (PT)',
    spamTypes: ['Entertainment industry scams', 'Mortgage robocalls', 'IRS impersonation', 'Immigration scams', 'Lottery scams'],
    knownSpamPrefixes: ['213-555', '213-800'],
    tips: ['LA area sees many entertainment and casting scams', 'Immigration-related phone scams are very common in LA', 'Mortgage and real estate robocalls are frequent'],
    neighborCodes: ['310', '323', '424', '818'],
  },
  '310': {
    city: 'Los Angeles',
    state: 'California',
    stateAbbr: 'CA',
    population: '3.9 million',
    region: 'West LA, Santa Monica, Beverly Hills',
    timezone: 'Pacific Time (PT)',
    spamTypes: ['Real estate robocalls', 'Investment scams', 'Tech support', 'Auto warranty', 'Health insurance'],
    knownSpamPrefixes: ['310-555', '310-800'],
    tips: ['West LA area gets many luxury real estate robocalls', 'Investment scams frequently target 310 area residents', 'High rate of spoofed local numbers to appear trustworthy'],
    neighborCodes: ['213', '323', '424', '818'],
  },
  '312': {
    city: 'Chicago',
    state: 'Illinois',
    stateAbbr: 'IL',
    population: '2.7 million',
    region: 'Downtown Chicago',
    timezone: 'Central Time (CT)',
    spamTypes: ['Utility scams', 'IRS impersonation', 'Social Security', 'Auto warranty', 'Health insurance robocalls'],
    knownSpamPrefixes: ['312-555', '312-800'],
    tips: ['ComEd (utility) impersonation scams are very common in Chicago', 'Many scammers use 312 spoofed numbers to appear local', 'High volume of health insurance robocalls in Illinois'],
    neighborCodes: ['773', '872', '630', '847'],
  },
  '713': {
    city: 'Houston',
    state: 'Texas',
    stateAbbr: 'TX',
    population: '2.3 million',
    region: 'Central Houston',
    timezone: 'Central Time (CT)',
    spamTypes: ['Energy company scams', 'IRS impersonation', 'Contractor fraud calls', 'Medicare scams', 'Vehicle warranty'],
    knownSpamPrefixes: ['713-555', '713-800'],
    tips: ['Houston area sees many energy/utility company impersonation calls', 'Contractor scam calls are common especially after storms', 'High volume of Medicare and insurance robocalls'],
    neighborCodes: ['832', '281', '346'],
  },
  '832': {
    city: 'Houston',
    state: 'Texas',
    stateAbbr: 'TX',
    population: '2.3 million',
    region: 'Greater Houston (overlay)',
    timezone: 'Central Time (CT)',
    spamTypes: ['Debt collection', 'Auto warranty', 'IRS scams', 'Tech support', 'Payday loan robocalls'],
    knownSpamPrefixes: ['832-555', '832-800'],
    tips: ['832 is an overlay for Houston alongside 713', 'Many robocallers spoof 832 numbers to appear local', 'Payday loan and debt collection scams are very active'],
    neighborCodes: ['713', '281', '346'],
  },
  '305': {
    city: 'Miami',
    state: 'Florida',
    stateAbbr: 'FL',
    population: '470,000',
    region: 'Miami-Dade County',
    timezone: 'Eastern Time (ET)',
    spamTypes: ['Medicare fraud', 'Immigration scams', 'Lottery scams', 'Romance scams', 'IRS impersonation'],
    knownSpamPrefixes: ['305-555', '305-800'],
    tips: ['Miami is a major hub for Medicare fraud calls targeting seniors', 'Immigration scams in Spanish are very common in 305 area', 'High volume of international lottery and prize scams'],
    neighborCodes: ['786', '954', '561'],
  },
  '786': {
    city: 'Miami',
    state: 'Florida',
    stateAbbr: 'FL',
    population: '470,000',
    region: 'Miami-Dade County (overlay)',
    timezone: 'Eastern Time (ET)',
    spamTypes: ['Spanish-language robocalls', 'Medicare scams', 'Fake charity calls', 'Debt collection', 'Travel scams'],
    knownSpamPrefixes: ['786-555', '786-800'],
    tips: ['786 is an overlay for Miami alongside 305', 'Many bilingual (Spanish/English) scam calls use 786 numbers', 'Travel and vacation club scams are frequent in Miami area'],
    neighborCodes: ['305', '954', '561'],
  },
  '214': {
    city: 'Dallas',
    state: 'Texas',
    stateAbbr: 'TX',
    population: '1.3 million',
    region: 'Dallas',
    timezone: 'Central Time (CT)',
    spamTypes: ['Real estate robocalls', 'IRS impersonation', 'Business loan scams', 'Auto warranty', 'Utility scams'],
    knownSpamPrefixes: ['214-555', '214-800'],
    tips: ['Dallas area has high rates of real estate robocalls', 'Business loan and investment scams frequently target 214 numbers', 'Oncor (utility) impersonation calls are common'],
    neighborCodes: ['469', '972', '817'],
  },
  '404': {
    city: 'Atlanta',
    state: 'Georgia',
    stateAbbr: 'GA',
    population: '500,000',
    region: 'Atlanta',
    timezone: 'Eastern Time (ET)',
    spamTypes: ['IRS scams', 'Social Security impersonation', 'Health insurance', 'Auto warranty', 'Student loan forgiveness'],
    knownSpamPrefixes: ['404-555', '404-800'],
    tips: ['Atlanta area sees high rates of government impersonation calls', 'Many scammers spoof CDC or other Atlanta-based agency numbers', 'Student loan forgiveness scams are very active in Georgia'],
    neighborCodes: ['678', '770', '470'],
  },
  '602': {
    city: 'Phoenix',
    state: 'Arizona',
    stateAbbr: 'AZ',
    population: '1.6 million',
    region: 'Phoenix',
    timezone: 'Mountain Time (no DST)',
    spamTypes: ['Medicare scams', 'Social Security', 'Home warranty', 'Solar panel robocalls', 'Debt collection'],
    knownSpamPrefixes: ['602-555', '602-800'],
    tips: ['Phoenix area has many solar panel installation robocalls', 'High senior population means Medicare scams are very common', 'Home warranty robocalls are among the most reported in AZ'],
    neighborCodes: ['480', '623', '520'],
  },
  '415': {
    city: 'San Francisco',
    state: 'California',
    stateAbbr: 'CA',
    population: '870,000',
    region: 'San Francisco',
    timezone: 'Pacific Time (PT)',
    spamTypes: ['Tech support scams', 'Crypto investment fraud', 'IRS impersonation', 'Student loan', 'Fake job offers'],
    knownSpamPrefixes: ['415-555', '415-800'],
    tips: ['SF area sees many tech company impersonation scams (fake Google, Apple)', 'Cryptocurrency investment fraud calls are very common in Bay Area', 'Fake job offer scams frequently target tech workers'],
    neighborCodes: ['510', '650', '408', '628'],
  },
  '206': {
    city: 'Seattle',
    state: 'Washington',
    stateAbbr: 'WA',
    population: '750,000',
    region: 'Seattle',
    timezone: 'Pacific Time (PT)',
    spamTypes: ['Amazon impersonation', 'Microsoft tech support', 'IRS scams', 'Auto warranty', 'Health insurance'],
    knownSpamPrefixes: ['206-555', '206-800'],
    tips: ['Amazon impersonation scams are extremely common in Seattle area', 'Microsoft tech support scams frequently spoof Seattle area numbers', 'High rate of phishing calls targeting Amazon Prime members'],
    neighborCodes: ['253', '425', '360'],
  },
  '617': {
    city: 'Boston',
    state: 'Massachusetts',
    stateAbbr: 'MA',
    population: '675,000',
    region: 'Boston',
    timezone: 'Eastern Time (ET)',
    spamTypes: ['Student loan scams', 'IRS impersonation', 'Medicare', 'Utility scams', 'Charity fraud'],
    knownSpamPrefixes: ['617-555', '617-800'],
    tips: ['Boston area has many student loan-related scam calls targeting college students', 'Eversource/National Grid utility impersonation calls are common', 'High volume of Medicare scams targeting senior population'],
    neighborCodes: ['781', '339', '508', '978'],
  },
  '702': {
    city: 'Las Vegas',
    state: 'Nevada',
    stateAbbr: 'NV',
    population: '650,000',
    region: 'Las Vegas Valley',
    timezone: 'Pacific Time (PT)',
    spamTypes: ['Gambling/casino scams', 'Timeshare calls', 'IRS scams', 'Hotel deal robocalls', 'Debt collection'],
    knownSpamPrefixes: ['702-555', '702-800'],
    tips: ['Las Vegas area has many timeshare cancellation scam calls', 'Casino and gambling-related fraud calls are unique to this area', 'Hotel and vacation deal robocalls are very frequent'],
    neighborCodes: ['725', '775'],
  },
  '503': {
    city: 'Portland',
    state: 'Oregon',
    stateAbbr: 'OR',
    population: '650,000',
    region: 'Portland',
    timezone: 'Pacific Time (PT)',
    spamTypes: ['IRS impersonation', 'Social Security', 'Auto warranty', 'Health insurance', 'Charity fraud'],
    knownSpamPrefixes: ['503-555', '503-800'],
    tips: ['Portland area sees many IRS and SSA impersonation calls', 'High rate of fake charity calls especially around holidays', 'Auto warranty robocalls are among the most common complaints'],
    neighborCodes: ['971', '360', '541'],
  },
  '480': {
    city: 'Scottsdale / Mesa',
    state: 'Arizona',
    stateAbbr: 'AZ',
    population: '500,000',
    region: 'East Valley, Phoenix Metro',
    timezone: 'Mountain Time (no DST)',
    spamTypes: ['Solar panel robocalls', 'Medicare scams', 'Home warranty', 'Real estate', 'Debt collection'],
    knownSpamPrefixes: ['480-555', '480-800'],
    tips: ['480 area has very high solar panel installation robocall rates', 'Real estate robocalls are common in the Scottsdale market', 'Medicare and senior-targeted scams are highly active here'],
    neighborCodes: ['602', '623', '520'],
  },
  '773': {
    city: 'Chicago',
    state: 'Illinois',
    stateAbbr: 'IL',
    population: '2.7 million',
    region: 'Chicago (outer neighborhoods)',
    timezone: 'Central Time (CT)',
    spamTypes: ['Utility scams', 'Debt collection', 'Auto warranty', 'IRS impersonation', 'Payday loan robocalls'],
    knownSpamPrefixes: ['773-555', '773-800'],
    tips: ['773 covers Chicago neighborhoods outside downtown', 'Many scammers spoof 773 to appear as local Chicago calls', 'ComEd utility impersonation is very common in this area'],
    neighborCodes: ['312', '872', '708', '847'],
  },
  '720': {
    city: 'Denver',
    state: 'Colorado',
    stateAbbr: 'CO',
    population: '750,000',
    region: 'Denver Metro',
    timezone: 'Mountain Time (MT)',
    spamTypes: ['Cannabis investment scams', 'Solar panel robocalls', 'IRS impersonation', 'Auto warranty', 'Real estate'],
    knownSpamPrefixes: ['720-555', '720-800'],
    tips: ['Denver sees many cannabis-related investment scam calls', 'Solar panel installation robocalls are very common in Colorado', 'Real estate robocalls are frequent in the Denver market'],
    neighborCodes: ['303', '719', '970'],
  },
  '303': {
    city: 'Denver',
    state: 'Colorado',
    stateAbbr: 'CO',
    population: '750,000',
    region: 'Denver (original code)',
    timezone: 'Mountain Time (MT)',
    spamTypes: ['IRS impersonation', 'Social Security scams', 'Auto warranty', 'Health insurance', 'Solar robocalls'],
    knownSpamPrefixes: ['303-555', '303-800'],
    tips: ['303 is the original Denver area code, now shared with 720', 'Many scammers spoof 303 to appear as trusted local numbers', 'Health insurance robocalls are especially active in Colorado'],
    neighborCodes: ['720', '719', '970'],
  },
  '313': {
    city: 'Detroit',
    state: 'Michigan',
    stateAbbr: 'MI',
    population: '640,000',
    region: 'Detroit',
    timezone: 'Eastern Time (ET)',
    spamTypes: ['Auto warranty scams', 'Debt collection', 'IRS impersonation', 'Utility scams', 'Payday loan robocalls'],
    knownSpamPrefixes: ['313-555', '313-800'],
    tips: ['Detroit area has very high rates of auto warranty scam calls', 'DTE Energy utility impersonation calls are common in Michigan', 'Debt collection robocalls are frequently reported in 313'],
    neighborCodes: ['248', '586', '734'],
  },
  '612': {
    city: 'Minneapolis',
    state: 'Minnesota',
    stateAbbr: 'MN',
    population: '430,000',
    region: 'Minneapolis',
    timezone: 'Central Time (CT)',
    spamTypes: ['IRS impersonation', 'Medicare scams', 'Charity fraud', 'Auto warranty', 'Student loan forgiveness'],
    knownSpamPrefixes: ['612-555', '612-800'],
    tips: ['Minneapolis sees many IRS and government agency impersonation calls', 'Xcel Energy utility scams are common in the Twin Cities', 'Medicare scams frequently target the senior population in Minnesota'],
    neighborCodes: ['651', '763', '952'],
  },
  '813': {
    city: 'Tampa',
    state: 'Florida',
    stateAbbr: 'FL',
    population: '400,000',
    region: 'Tampa Bay',
    timezone: 'Eastern Time (ET)',
    spamTypes: ['Medicare fraud', 'Timeshare cancellation', 'IRS scams', 'Home warranty', 'Insurance robocalls'],
    knownSpamPrefixes: ['813-555', '813-800'],
    tips: ['Tampa Bay area has high rates of Medicare and senior-targeted scams', 'Timeshare cancellation scam calls are very common in Florida', 'Hurricane-related contractor fraud calls spike after storm season'],
    neighborCodes: ['727', '941', '863'],
  },
  '727': {
    city: 'St. Petersburg',
    state: 'Florida',
    stateAbbr: 'FL',
    population: '265,000',
    region: 'Pinellas County, Tampa Bay',
    timezone: 'Eastern Time (ET)',
    spamTypes: ['Medicare scams', 'Social Security', 'Home warranty', 'Timeshare calls', 'Charity fraud'],
    knownSpamPrefixes: ['727-555', '727-800'],
    tips: ['St. Pete area has a large senior population targeted by Medicare scams', 'Timeshare cancellation and vacation package scams are common', 'Duke Energy utility impersonation calls are reported frequently'],
    neighborCodes: ['813', '941', '863'],
  },
  '469': {
    city: 'Dallas',
    state: 'Texas',
    stateAbbr: 'TX',
    population: '1.3 million',
    region: 'Dallas Metro (overlay)',
    timezone: 'Central Time (CT)',
    spamTypes: ['Real estate robocalls', 'Business loan scams', 'Auto warranty', 'IRS impersonation', 'Debt collection'],
    knownSpamPrefixes: ['469-555', '469-800'],
    tips: ['469 overlays Dallas alongside 214 and 972', 'Many scammers use 469 to spoof local Dallas calls', 'Real estate and mortgage robocalls are very active in DFW area'],
    neighborCodes: ['214', '972', '817'],
  },
  '972': {
    city: 'Dallas suburbs',
    state: 'Texas',
    stateAbbr: 'TX',
    population: '2 million',
    region: 'DFW suburbs (Plano, Irving, Garland)',
    timezone: 'Central Time (CT)',
    spamTypes: ['Solar panel robocalls', 'Auto warranty', 'Health insurance', 'IRS scams', 'Tech support'],
    knownSpamPrefixes: ['972-555', '972-800'],
    tips: ['972 covers the affluent Dallas suburbs with many real estate calls', 'Tech support scams targeting corporate employees are common', 'Solar installation robocalls are very active in the DFW suburbs'],
    neighborCodes: ['214', '469', '817'],
  },
  '512': {
    city: 'Austin',
    state: 'Texas',
    stateAbbr: 'TX',
    population: '980,000',
    region: 'Austin',
    timezone: 'Central Time (CT)',
    spamTypes: ['Tech company impersonation', 'Student loan scams', 'Crypto investment fraud', 'IRS impersonation', 'Real estate robocalls'],
    knownSpamPrefixes: ['512-555', '512-800'],
    tips: ['Austin\'s tech industry makes it a target for tech company impersonation scams', 'Crypto and investment fraud calls are common in the Austin tech scene', 'Student loan forgiveness scams target the large university population'],
    neighborCodes: ['737', '210', '830'],
  },
  '210': {
    city: 'San Antonio',
    state: 'Texas',
    stateAbbr: 'TX',
    population: '1.5 million',
    region: 'San Antonio',
    timezone: 'Central Time (CT)',
    spamTypes: ['Military impersonation scams', 'IRS scams', 'Medicare fraud', 'Auto warranty', 'Payday loan robocalls'],
    knownSpamPrefixes: ['210-555', '210-800'],
    tips: ['San Antonio has a large military population targeted by military-themed scams', 'Medicare scams are very active due to the large senior population', 'CPS Energy utility impersonation calls are commonly reported'],
    neighborCodes: ['512', '830', '726'],
  },
  '678': {
    city: 'Atlanta',
    state: 'Georgia',
    stateAbbr: 'GA',
    population: '500,000',
    region: 'Atlanta Metro (overlay)',
    timezone: 'Eastern Time (ET)',
    spamTypes: ['IRS scams', 'Social Security', 'Debt collection', 'Auto warranty', 'Health insurance'],
    knownSpamPrefixes: ['678-555', '678-800'],
    tips: ['678 overlays Atlanta alongside 404 and 770', 'Many scammers spoof 678 to appear as local Atlanta calls', 'Georgia Power utility impersonation scams are common'],
    neighborCodes: ['404', '770', '470'],
  },
  '704': {
    city: 'Charlotte',
    state: 'North Carolina',
    stateAbbr: 'NC',
    population: '900,000',
    region: 'Charlotte',
    timezone: 'Eastern Time (ET)',
    spamTypes: ['Banking scams', 'IRS impersonation', 'Auto warranty', 'Mortgage robocalls', 'Health insurance'],
    knownSpamPrefixes: ['704-555', '704-800'],
    tips: ['Charlotte is a major banking hub — many bank impersonation scams', 'Duke Energy utility impersonation is very common in Charlotte', 'Mortgage and real estate robocalls are very active in the growing Charlotte market'],
    neighborCodes: ['980', '803', '336'],
  },
  '615': {
    city: 'Nashville',
    state: 'Tennessee',
    stateAbbr: 'TN',
    population: '700,000',
    region: 'Nashville',
    timezone: 'Central Time (CT)',
    spamTypes: ['Real estate robocalls', 'IRS impersonation', 'Auto warranty', 'Health insurance', 'Charity fraud'],
    knownSpamPrefixes: ['615-555', '615-800'],
    tips: ['Nashville\'s real estate boom has created a surge in real estate robocalls', 'TVA and Nashville Electric Service impersonation calls are reported', 'Many scammers use Nashville numbers to appear local to Tennessee'],
    neighborCodes: ['629', '931', '423'],
  },
  '901': {
    city: 'Memphis',
    state: 'Tennessee',
    stateAbbr: 'TN',
    population: '650,000',
    region: 'Memphis',
    timezone: 'Central Time (CT)',
    spamTypes: ['Debt collection', 'IRS scams', 'Auto warranty', 'Payday loan robocalls', 'Medicare fraud'],
    knownSpamPrefixes: ['901-555', '901-800'],
    tips: ['Memphis has high rates of debt collection robocalls', 'MLGW (utility) impersonation scams are common in Memphis', 'Payday loan and credit scams frequently target Memphis residents'],
    neighborCodes: ['731', '662'],
  },
  '314': {
    city: 'St. Louis',
    state: 'Missouri',
    stateAbbr: 'MO',
    population: '300,000',
    region: 'St. Louis',
    timezone: 'Central Time (CT)',
    spamTypes: ['IRS impersonation', 'Utility scams', 'Auto warranty', 'Debt collection', 'Social Security scams'],
    knownSpamPrefixes: ['314-555', '314-800'],
    tips: ['Ameren (electric utility) impersonation is very common in St. Louis', 'Many Medicare and senior-targeted scam calls in the St. Louis area', 'IRS impersonation calls are among the top reported scams'],
    neighborCodes: ['636', '573', '618'],
  },
  '216': {
    city: 'Cleveland',
    state: 'Ohio',
    stateAbbr: 'OH',
    population: '370,000',
    region: 'Cleveland',
    timezone: 'Eastern Time (ET)',
    spamTypes: ['Utility scams', 'IRS impersonation', 'Medicare fraud', 'Auto warranty', 'Debt collection'],
    knownSpamPrefixes: ['216-555', '216-800'],
    tips: ['Cleveland Electric Illuminating/FirstEnergy impersonation calls are common', 'Medicare scams target the large senior population in Northeast Ohio', 'Many scammers spoof Cleveland numbers to appear local and trustworthy'],
    neighborCodes: ['440', '330', '234'],
  },
  '614': {
    city: 'Columbus',
    state: 'Ohio',
    stateAbbr: 'OH',
    population: '900,000',
    region: 'Columbus',
    timezone: 'Eastern Time (ET)',
    spamTypes: ['Student loan scams', 'IRS impersonation', 'Auto warranty', 'Health insurance', 'Charity fraud'],
    knownSpamPrefixes: ['614-555', '614-800'],
    tips: ['Columbus has a large student population targeted by student loan scams', 'AEP Ohio utility impersonation calls are frequently reported', 'Health insurance robocalls are among the most common in Columbus'],
    neighborCodes: ['380', '740', '419'],
  },
  '919': {
    city: 'Raleigh',
    state: 'North Carolina',
    stateAbbr: 'NC',
    population: '470,000',
    region: 'Raleigh / Research Triangle',
    timezone: 'Eastern Time (ET)',
    spamTypes: ['Tech company impersonation', 'Student loan scams', 'IRS impersonation', 'Real estate robocalls', 'Health insurance'],
    knownSpamPrefixes: ['919-555', '919-800'],
    tips: ['Raleigh\'s Research Triangle tech sector attracts tech support and company impersonation scams', 'Real estate robocalls are very common in the fast-growing Triangle market', 'Student loan scams target the large university population in the area'],
    neighborCodes: ['984', '910', '336'],
  },
  '623': {
    city: 'Phoenix West Valley',
    state: 'Arizona',
    stateAbbr: 'AZ',
    population: '250,000',
    region: 'Glendale / Peoria / Surprise',
    timezone: 'Mountain Time (no DST)',
    spamTypes: ['Medicare scams', 'Solar panel robocalls', 'Home warranty', 'IRS impersonation', 'Real estate'],
    knownSpamPrefixes: ['623-555', '623-800'],
    tips: ['623 covers Phoenix\'s fast-growing west suburbs', 'Solar panel installation robocalls are extremely common in Arizona', 'Medicare scams target the large retiree population in the West Valley'],
    neighborCodes: ['602', '480', '928'],
  },
  '954': {
    city: 'Fort Lauderdale',
    state: 'Florida',
    stateAbbr: 'FL',
    population: '185,000',
    region: 'Broward County',
    timezone: 'Eastern Time (ET)',
    spamTypes: ['Medicare fraud', 'Timeshare scams', 'IRS impersonation', 'Insurance robocalls', 'Charity fraud'],
    knownSpamPrefixes: ['954-555', '954-800'],
    tips: ['Fort Lauderdale area is a major hub for Medicare and health fraud scams', 'Timeshare cancellation scams are very common in the South Florida area', 'Many debt collection scams originate from the Broward County area'],
    neighborCodes: ['305', '786', '561'],
  },
  '561': {
    city: 'West Palm Beach',
    state: 'Florida',
    stateAbbr: 'FL',
    population: '115,000',
    region: 'Palm Beach County',
    timezone: 'Eastern Time (ET)',
    spamTypes: ['Investment scams', 'Medicare fraud', 'Charity fraud', 'IRS impersonation', 'Timeshare cancellation'],
    knownSpamPrefixes: ['561-555', '561-800'],
    tips: ['Palm Beach County\'s wealthy demographic is targeted by investment and financial scams', 'Medicare and senior-targeted scams are very active in Palm Beach', 'FPL (Florida Power & Light) utility impersonation calls are common'],
    neighborCodes: ['954', '772', '305'],
  },
  '347': {
    city: 'New York City',
    state: 'New York',
    stateAbbr: 'NY',
    population: '8.3 million',
    region: 'Brooklyn/Queens/Bronx (overlay)',
    timezone: 'Eastern Time (ET)',
    spamTypes: ['Debt collection', 'IRS impersonation', 'Utility scams', 'Fake package delivery', 'Tech support'],
    knownSpamPrefixes: ['347-555', '347-800'],
    tips: ['347 is an overlay code for the NYC outer boroughs alongside 718', 'Con Edison utility impersonation is very common in this area', 'Package delivery scam calls are frequently reported in NYC'],
    neighborCodes: ['718', '212', '646', '917'],
  },
  '917': {
    city: 'New York City',
    state: 'New York',
    stateAbbr: 'NY',
    population: '8.3 million',
    region: 'New York City (mobile/overlay)',
    timezone: 'Eastern Time (ET)',
    spamTypes: ['Tech support scams', 'IRS impersonation', 'Fake delivery notifications', 'Credit card fraud', 'Social Security'],
    knownSpamPrefixes: ['917-555', '917-800'],
    tips: ['917 is primarily used for NYC mobile numbers', 'Many scammers spoof 917 to appear as NYC calls to out-of-state targets', 'Credit card and financial scam calls are common with 917 spoofed numbers'],
    neighborCodes: ['212', '646', '718', '347'],
  },
  '424': {
    city: 'Los Angeles',
    state: 'California',
    stateAbbr: 'CA',
    population: '3.9 million',
    region: 'West LA / South Bay (overlay)',
    timezone: 'Pacific Time (PT)',
    spamTypes: ['Entertainment scams', 'Mortgage robocalls', 'IRS impersonation', 'Auto warranty', 'Crypto investment'],
    knownSpamPrefixes: ['424-555', '424-800'],
    tips: ['424 overlays the 310 area code in West LA and South Bay', 'Entertainment industry casting scams are unique to the LA area', 'Crypto investment scams frequently use LA-area spoofed numbers'],
    neighborCodes: ['310', '213', '323', '818'],
  },
  '818': {
    city: 'San Fernando Valley',
    state: 'California',
    stateAbbr: 'CA',
    population: '1.8 million',
    region: 'San Fernando Valley (LA)',
    timezone: 'Pacific Time (PT)',
    spamTypes: ['Real estate robocalls', 'IRS impersonation', 'Auto warranty', 'Health insurance', 'Solar panel calls'],
    knownSpamPrefixes: ['818-555', '818-800'],
    tips: ['The San Fernando Valley is a major residential area with high real estate robocall rates', 'Solar panel installation calls are very common in the Valley', 'Many IRS and government impersonation scams target the diverse 818 communities'],
    neighborCodes: ['747', '310', '213', '323'],
  },
  '619': {
    city: 'San Diego',
    state: 'California',
    stateAbbr: 'CA',
    population: '1.4 million',
    region: 'San Diego',
    timezone: 'Pacific Time (PT)',
    spamTypes: ['Military impersonation scams', 'Medicare fraud', 'IRS scams', 'Real estate robocalls', 'Solar panel calls'],
    knownSpamPrefixes: ['619-555', '619-800'],
    tips: ['San Diego\'s large military population is targeted by military-themed scam calls', 'Medicare scams are very common due to the large retiree population in San Diego', 'Solar panel robocalls are among the most reported in Southern California'],
    neighborCodes: ['858', '760', '442'],
  },
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { code } = await params
  const data = AREA_CODE_DATA[code]
  if (!data) {
    return { title: 'Area Code Not Found | WhoCalledUs' }
  }
  return {
    title: `Area Code ${code} (${data.city}, ${data.stateAbbr}) - Spam Call Reports | WhoCalledUs`,
    description: `Getting calls from area code ${code}? See spam reports, scam warnings, and user comments for ${data.city}, ${data.state} phone numbers. Free reverse lookup.`,
    keywords: `area code ${code}, ${code} spam calls, who called from ${code}, ${data.city} spam calls, ${data.city} robocalls, ${code} scam calls, reverse lookup ${code}`,
    alternates: { canonical: `/area-code/${code}` },
    openGraph: {
      title: `Area Code ${code} Spam Reports - ${data.city}, ${data.stateAbbr}`,
      description: `Is a ${code} number calling you? Check spam reports for ${data.city}, ${data.state} phone numbers on WhoCalledUs.`,
      url: `https://whocalledus.net/area-code/${code}`,
    },
  }
}

export function generateStaticParams() {
  return Object.keys(AREA_CODE_DATA).map((code) => ({ code }))
}

export default async function AreaCodePage({ params }: Props) {
  const { code } = await params
  const data = AREA_CODE_DATA[code]

  if (!data) notFound()

  // Fetch top reported numbers for this area code from Supabase
  const { data: areaNumbers } = await supabaseAdmin
    .from('phone_numbers')
    .select('number, search_count')
    .like('number', `${code}%`)
    .order('search_count', { ascending: false })
    .limit(10)

  function fmtNum(n: string) {
    if (n.length === 10) return `(${n.slice(0,3)}) ${n.slice(3,6)}-${n.slice(6)}`
    return n
  }

  return (
    <main style={{ maxWidth: '860px', margin: '0 auto', padding: '32px 16px 64px' }}>
      {/* Breadcrumb */}
      <nav style={{ fontSize: '14px', color: '#6b7280', marginBottom: '24px' }}>
        <Link href="/" style={{ color: '#1d4ed8', textDecoration: 'none' }}>Home</Link>
        <span style={{ margin: '0 8px' }}>›</span>
        <span>Area Code {code}</span>
      </nav>

      {/* Header */}
      <div style={{ background: 'linear-gradient(135deg, #1e3a8a 0%, #1d4ed8 100%)', borderRadius: '16px', padding: '32px', color: 'white', marginBottom: '28px' }}>
        <div style={{ display: 'flex', alignItems: 'flex-start', gap: '20px', flexWrap: 'wrap' }}>
          <div style={{ background: 'rgba(255,255,255,0.15)', borderRadius: '12px', padding: '16px 24px', textAlign: 'center', flexShrink: 0 }}>
            <div style={{ fontSize: '40px', fontWeight: 'bold' }}>{code}</div>
            <div style={{ fontSize: '13px', opacity: 0.85 }}>Area Code</div>
          </div>
          <div>
            <h1 style={{ fontSize: '28px', fontWeight: 'bold', marginBottom: '8px', lineHeight: '1.2' }}>
              Area Code {code} — {data.city}, {data.state}
            </h1>
            <p style={{ opacity: 0.9, fontSize: '16px', marginBottom: '12px' }}>
              Getting unwanted calls from a {code} number? Search any number below or read about common spam calls from this area.
            </p>
            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', fontSize: '13px' }}>
              <span style={{ background: 'rgba(255,255,255,0.2)', padding: '4px 12px', borderRadius: '20px' }}>📍 {data.region}</span>
              <span style={{ background: 'rgba(255,255,255,0.2)', padding: '4px 12px', borderRadius: '20px' }}>🕐 {data.timezone}</span>
              <span style={{ background: 'rgba(255,255,255,0.2)', padding: '4px 12px', borderRadius: '20px' }}>👥 Pop. {data.population}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Quick search */}
      <div style={{ background: 'white', borderRadius: '12px', padding: '24px', boxShadow: '0 2px 8px rgba(0,0,0,0.08)', border: '1px solid #f3f4f6', marginBottom: '28px' }}>
        <h2 style={{ fontSize: '17px', fontWeight: '700', marginBottom: '14px', color: '#111827' }}>
          🔍 Look Up a Specific {code} Number
        </h2>
        <p style={{ color: '#6b7280', fontSize: '14px', marginBottom: '16px' }}>
          Enter the full 7-digit number after the area code to see spam reports:
        </p>
        <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', alignItems: 'center' }}>
          <span style={{ background: '#f3f4f6', padding: '12px 16px', borderRadius: '8px', fontWeight: '600', color: '#374151', fontSize: '16px' }}>
            ({code})
          </span>
          <Link
            href="/"
            style={{
              background: '#f97316',
              color: 'white',
              padding: '12px 24px',
              borderRadius: '8px',
              fontWeight: '700',
              textDecoration: 'none',
              fontSize: '15px',
            }}
          >
            Search on WhoCalledUs →
          </Link>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(380px, 1fr))', gap: '20px', marginBottom: '28px' }}>
        {/* Common spam types */}
        <div style={{ background: 'white', borderRadius: '12px', padding: '24px', boxShadow: '0 2px 8px rgba(0,0,0,0.08)', border: '1px solid #f3f4f6' }}>
          <h2 style={{ fontSize: '17px', fontWeight: '700', marginBottom: '16px', color: '#111827' }}>
            🚫 Most Common Spam Call Types in {data.city}
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {data.spamTypes.map((type, idx) => (
              <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '10px 12px', background: '#fef2f2', borderRadius: '8px' }}>
                <span style={{ color: '#dc2626', fontWeight: '700', fontSize: '13px', background: '#fee2e2', padding: '2px 8px', borderRadius: '10px', flexShrink: 0 }}>#{idx + 1}</span>
                <span style={{ color: '#374151', fontSize: '14px' }}>{type}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Local tips */}
        <div style={{ background: 'white', borderRadius: '12px', padding: '24px', boxShadow: '0 2px 8px rgba(0,0,0,0.08)', border: '1px solid #f3f4f6' }}>
          <h2 style={{ fontSize: '17px', fontWeight: '700', marginBottom: '16px', color: '#111827' }}>
            💡 {data.city} Spam Call Tips
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {data.tips.map((tip, idx) => (
              <div key={idx} style={{ display: 'flex', gap: '10px', padding: '12px', background: '#f0fdf4', borderRadius: '8px' }}>
                <span style={{ color: '#16a34a', flexShrink: 0, marginTop: '1px' }}>✓</span>
                <p style={{ color: '#374151', fontSize: '14px', lineHeight: '1.5', margin: 0 }}>{tip}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Most Reported Numbers for this area code */}
      {areaNumbers && areaNumbers.length > 0 && (
        <div style={{ background: 'white', borderRadius: '12px', padding: '24px', boxShadow: '0 2px 8px rgba(0,0,0,0.08)', border: '1px solid #f3f4f6', marginBottom: '28px' }}>
          <h2 style={{ fontSize: '17px', fontWeight: '700', marginBottom: '16px', color: '#111827' }}>
            🚨 Most Searched {code} Numbers on WhoCalledUs
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            {areaNumbers.map((item, idx) => (
              <Link key={item.number} href={`/number/${item.number}`} style={{ textDecoration: 'none' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '10px 14px', background: idx % 2 === 0 ? '#f9fafb' : 'white', borderRadius: '8px', border: '1px solid #f3f4f6', gap: '12px', flexWrap: 'wrap' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <span style={{ background: '#fee2e2', color: '#dc2626', fontWeight: '700', fontSize: '12px', padding: '2px 8px', borderRadius: '10px', minWidth: '24px', textAlign: 'center' }}>
                      {idx + 1}
                    </span>
                    <span style={{ fontWeight: '600', color: '#1d4ed8', fontSize: '15px' }}>{fmtNum(item.number)}</span>
                  </div>
                  <span style={{ color: '#9ca3af', fontSize: '13px' }}>{item.search_count} searches →</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}

      {/* Nearby area codes */}
      <div style={{ background: 'white', borderRadius: '12px', padding: '24px', boxShadow: '0 2px 8px rgba(0,0,0,0.08)', border: '1px solid #f3f4f6', marginBottom: '28px' }}>
        <h2 style={{ fontSize: '17px', fontWeight: '700', marginBottom: '16px', color: '#111827' }}>
          📍 Nearby Area Codes
        </h2>
        <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
          {data.neighborCodes.map((neighborCode) => (
            <Link
              key={neighborCode}
              href={AREA_CODE_DATA[neighborCode] ? `/area-code/${neighborCode}` : `/number/${neighborCode}0000000`}
              style={{
                background: '#eff6ff',
                color: '#1d4ed8',
                padding: '10px 20px',
                borderRadius: '8px',
                fontWeight: '700',
                textDecoration: 'none',
                fontSize: '15px',
              }}
            >
              {neighborCode}
              {AREA_CODE_DATA[neighborCode] && (
                <span style={{ fontWeight: '400', fontSize: '12px', display: 'block', color: '#6b7280' }}>
                  {AREA_CODE_DATA[neighborCode].city.split('/')[0].trim()}
                </span>
              )}
            </Link>
          ))}
        </div>
      </div>

      {/* How to protect yourself */}
      <div style={{ background: 'white', borderRadius: '12px', padding: '24px', boxShadow: '0 2px 8px rgba(0,0,0,0.08)', border: '1px solid #f3f4f6', marginBottom: '28px' }}>
        <h2 style={{ fontSize: '17px', fontWeight: '700', marginBottom: '16px', color: '#111827' }}>
          🛡️ How to Protect Yourself from {code} Spam Calls
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '14px' }}>
          {[
            { step: '1', title: 'Look up the number', desc: `Search the exact ${code} number on WhoCalledUs before calling back.` },
            { step: '2', title: 'Register for Do Not Call', desc: 'Visit donotcall.gov to add your number to the national registry.' },
            { step: '3', title: 'Report spam calls', desc: 'Report to the FTC at reportfraud.ftc.gov to help others avoid the same scam.' },
            { step: '4', title: 'Block on your phone', desc: 'Use your phone\'s built-in blocking or a call-blocking app like Hiya or Nomorobo.' },
          ].map(item => (
            <div key={item.step} style={{ display: 'flex', gap: '12px', padding: '14px', background: '#f8fafc', borderRadius: '8px' }}>
              <div style={{ background: '#1d4ed8', color: 'white', borderRadius: '50%', width: '28px', height: '28px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: '700', fontSize: '13px', flexShrink: 0 }}>
                {item.step}
              </div>
              <div>
                <strong style={{ color: '#111827', display: 'block', fontSize: '14px', marginBottom: '4px' }}>{item.title}</strong>
                <p style={{ color: '#6b7280', fontSize: '13px', margin: 0, lineHeight: '1.5' }}>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div style={{ background: 'linear-gradient(135deg, #1e3a8a 0%, #1d4ed8 100%)', borderRadius: '16px', padding: '32px', textAlign: 'center' }}>
        <h2 style={{ color: 'white', fontSize: '20px', fontWeight: 'bold', marginBottom: '10px' }}>
          Received a call from a {code} number?
        </h2>
        <p style={{ color: 'rgba(255,255,255,0.85)', marginBottom: '20px', fontSize: '15px' }}>
          Search the full number to see if others have reported it as spam.
        </p>
        <Link href="/" style={{
          background: '#f97316',
          color: 'white',
          padding: '13px 28px',
          borderRadius: '10px',
          fontWeight: '700',
          fontSize: '15px',
          textDecoration: 'none',
          display: 'inline-block',
        }}>
          🔍 Search a {code} Number
        </Link>
      </div>

      {/* Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'WebPage',
            name: `Area Code ${code} Spam Call Reports - ${data.city}, ${data.state}`,
            description: `Spam call reports and scam warnings for area code ${code} (${data.city}, ${data.state}). Free reverse phone lookup.`,
            url: `https://whocalledus.net/area-code/${code}`,
          })
        }}
      />
    </main>
  )
}
