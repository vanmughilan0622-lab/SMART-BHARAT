import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  console.log('Start seeding...')

  // Seed Government Services
  const passportService = await prisma.governmentService.create({
    data: {
      name: 'Passport Renewal',
      description: 'Renewal of Indian Passport for adults and minors.',
      eligibility: 'Must be an Indian citizen with an expiring or expired passport.',
      documentsRequired: 'Old Passport, Proof of Address (Aadhaar/Utility Bill), ECR/Non-ECR Proof.',
      fees: '₹1,500 for normal, ₹3,500 for Tatkaal (36 pages).',
      timeline: 'Normal: 30 days. Tatkaal: 1-3 days.',
      sourceUrl: 'https://passportindia.gov.in/',
      lastVerifiedAt: new Date(),
    },
  })

  // Seed Schemes
  const pmKisan = await prisma.scheme.create({
    data: {
      name: 'Pradhan Mantri Kisan Samman Nidhi (PM-KISAN)',
      description: 'Income support to all landholding farmer families.',
      benefits: '₹6,000 per year payable in three equal installments of ₹2,000 each.',
      eligibilityRules: 'Must be a landholding farmer family. Exclusions apply for institutional landholders, tax payers, and high-income professionals.',
      sourceUrl: 'https://pmkisan.gov.in/',
      lastVerifiedAt: new Date(),
    },
  })
  
  const ayushmanBharat = await prisma.scheme.create({
    data: {
      name: 'Ayushman Bharat Pradhan Mantri Jan Arogya Yojana (AB-PMJAY)',
      description: 'National public health insurance fund of the Government of India.',
      benefits: 'Health cover of ₹5 lakhs per family per year for secondary and tertiary care hospitalization.',
      eligibilityRules: 'Targeted at poor, deprived rural families and identified occupational category of urban workers based on SECC 2011 data.',
      sourceUrl: 'https://pmjay.gov.in/',
      lastVerifiedAt: new Date(),
    },
  })

  console.log('Seeding finished.')
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
