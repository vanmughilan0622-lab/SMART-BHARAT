"use client"

import { useState } from "react"
import { User, X } from "lucide-react"
import { useLanguage } from "@/components/providers/LanguageProvider"

const tr: Record<string, Record<string, string>> = {
  English:  { title: "Demographics", occupation: "Occupation", income: "Annual Income Bracket", category: "Social Category", loginRequired: "Login required", pleaseLogin: "Please login to fill details", editDetails: "Edit Details", editTitle: "Edit Demographics", selectOccupation: "Select Occupation", farmer: "Farmer / Agriculture", student: "Student", salaried: "Salaried Professional", selfEmployed: "Self-Employed / Business", unemployed: "Unemployed", retired: "Retired", selectIncome: "Select Income Bracket", below1L: "Below ₹1,00,000", income1: "₹1,00,000 - ₹2,50,000", income2: "₹2,50,000 - ₹5,00,000", income3: "₹5,00,000 - ₹8,00,000", above8L: "Above ₹8,00,000", selectCategory: "Select Category", general: "General", saveDetails: "Save Details", notProvided: "Not Provided" },
  Hindi:    { title: "जनसांख्यिकी", occupation: "व्यवसाय", income: "वार्षिक आय वर्ग", category: "सामाजिक श्रेणी", loginRequired: "लॉगिन आवश्यक", pleaseLogin: "विवरण भरने के लिए कृपया लॉगिन करें", editDetails: "विवरण संपादित करें", editTitle: "जनसांख्यिकी संपादित करें", selectOccupation: "व्यवसाय चुनें", farmer: "किसान / कृषि", student: "छात्र", salaried: "वेतनभोगी पेशेवर", selfEmployed: "स्व-नियोजित / व्यवसाय", unemployed: "बेरोजगार", retired: "सेवानिवृत्त", selectIncome: "आय वर्ग चुनें", below1L: "₹1,00,000 से कम", income1: "₹1,00,000 - ₹2,50,000", income2: "₹2,50,000 - ₹5,00,000", income3: "₹5,00,000 - ₹8,00,000", above8L: "₹8,00,000 से अधिक", selectCategory: "श्रेणी चुनें", general: "सामान्य", saveDetails: "विवरण सहेजें", notProvided: "प्रदान नहीं किया गया" },
  Tamil:    { title: "மக்கள்தொகையியல்", occupation: "தொழில்", income: "ஆண்டு வருமான வரம்பு", category: "சமூக வகை", loginRequired: "உள்நுழைவு தேவை", pleaseLogin: "விவரங்களை நிரப்ப உள்நுழையவும்", editDetails: "விவரங்களை திருத்து", editTitle: "மக்கள்தொகையியல் திருத்து", selectOccupation: "தொழிலை தேர்ந்தெடுக்கவும்", farmer: "விவசாயி / விவசாயம்", student: "மாணவர்", salaried: "சம்பளம் பெறும் நிபுணர்", selfEmployed: "சுயதொழில் / வணிகம்", unemployed: "வேலையில்லாதவர்", retired: "ஓய்வு பெற்றவர்", selectIncome: "வருமான வரம்பை தேர்ந்தெடுக்கவும்", below1L: "₹1,00,000க்கு கீழே", income1: "₹1,00,000 - ₹2,50,000", income2: "₹2,50,000 - ₹5,00,000", income3: "₹5,00,000 - ₹8,00,000", above8L: "₹8,00,000க்கு மேலே", selectCategory: "வகையை தேர்ந்தெடுக்கவும்", general: "பொது", saveDetails: "விவரங்களை சேமிக்கவும்", notProvided: "வழங்கப்படவில்லை" },
  Kannada:  { title: "ಜನಸಂಖ್ಯಾಶಾಸ್ತ್ರ", occupation: "ಉದ್ಯೋಗ", income: "ವಾರ್ಷಿಕ ಆದಾಯ ವರ್ಗ", category: "ಸಾಮಾಜಿಕ ವರ್ಗ", loginRequired: "ಲಾಗಿನ್ ಅಗತ್ಯ", pleaseLogin: "ವಿವರಗಳನ್ನು ತುಂಬಲು ದಯವಿಟ್ಟು ಲಾಗಿನ್ ಮಾಡಿ", editDetails: "ವಿವರಗಳನ್ನು ತಿದ್ದಿರಿ", editTitle: "ಜನಸಂಖ್ಯಾಶಾಸ್ತ್ರ ತಿದ್ದಿರಿ", selectOccupation: "ಉದ್ಯೋಗ ಆಯ್ಕೆಮಾಡಿ", farmer: "ರೈತ / ಕೃಷಿ", student: "ವಿದ್ಯಾರ್ಥಿ", salaried: "ವೇತನ ಪಡೆಯುವ ವ್ಯಾವಸಾಯಿಕ", selfEmployed: "ಸ್ವಯಂ ಉದ್ಯೋಗಿ / ವ್ಯಾಪಾರ", unemployed: "ನಿರುದ್ಯೋಗಿ", retired: "ನಿವೃತ್ತ", selectIncome: "ಆದಾಯ ವರ್ಗ ಆಯ್ಕೆಮಾಡಿ", below1L: "₹1,00,000 ಕ್ಕಿಂತ ಕಡಿಮೆ", income1: "₹1,00,000 - ₹2,50,000", income2: "₹2,50,000 - ₹5,00,000", income3: "₹5,00,000 - ₹8,00,000", above8L: "₹8,00,000 ಕ್ಕಿಂತ ಹೆಚ್ಚು", selectCategory: "ವರ್ಗ ಆಯ್ಕೆಮಾಡಿ", general: "ಸಾಮಾನ್ಯ", saveDetails: "ವಿವರಗಳನ್ನು ಉಳಿಸಿ", notProvided: "ನೀಡಲಾಗಿಲ್ಲ" },
  Telugu:   { title: "జనాభా శాస్త్రం", occupation: "వృత్తి", income: "వార్షిక ఆదాయ వర్గం", category: "సామాజిక వర్గం", loginRequired: "లాగిన్ అవసరం", pleaseLogin: "వివరాలు నింపడానికి దయచేసి లాగిన్ చేయండి", editDetails: "వివరాలు సవరించు", editTitle: "జనాభా శాస్త్రం సవరించు", selectOccupation: "వృత్తి ఎంచుకోండి", farmer: "రైతు / వ్యవసాయం", student: "విద్యార్థి", salaried: "జీతం పొందే నిపుణుడు", selfEmployed: "స్వయం ఉపాధి / వ్యాపారం", unemployed: "నిరుద్యోగి", retired: "పదవీ విరమణ", selectIncome: "ఆదాయ వర్గం ఎంచుకోండి", below1L: "₹1,00,000 కంటే తక్కువ", income1: "₹1,00,000 - ₹2,50,000", income2: "₹2,50,000 - ₹5,00,000", income3: "₹5,00,000 - ₹8,00,000", above8L: "₹8,00,000 కంటే ఎక్కువ", selectCategory: "వర్గం ఎంచుకోండి", general: "సాధారణ", saveDetails: "వివరాలు సేవ్ చేయి", notProvided: "అందించబడలేదు" },
  Marathi:  { title: "जनसांख्यिकी", occupation: "व्यवसाय", income: "वार्षिक उत्पन्न गट", category: "सामाजिक वर्ग", loginRequired: "लॉगिन आवश्यक", pleaseLogin: "तपशील भरण्यासाठी कृपया लॉगिन करा", editDetails: "तपशील संपादित करा", editTitle: "जनसांख्यिकी संपादित करा", selectOccupation: "व्यवसाय निवडा", farmer: "शेतकरी / शेती", student: "विद्यार्थी", salaried: "वेतनधारी व्यावसायिक", selfEmployed: "स्वयंरोजगार / व्यवसाय", unemployed: "बेरोजगार", retired: "निवृत्त", selectIncome: "उत्पन्न गट निवडा", below1L: "₹1,00,000 पेक्षा कमी", income1: "₹1,00,000 - ₹2,50,000", income2: "₹2,50,000 - ₹5,00,000", income3: "₹5,00,000 - ₹8,00,000", above8L: "₹8,00,000 पेक्षा जास्त", selectCategory: "वर्ग निवडा", general: "सामान्य", saveDetails: "तपशील जतन करा", notProvided: "दिले नाही" },
  Bengali:  { title: "জনসংখ্যাতত্ত্ব", occupation: "পেশা", income: "বার্ষিক আয় বর্গ", category: "সামাজিক বিভাগ", loginRequired: "লগইন প্রয়োজন", pleaseLogin: "বিবরণ পূরণ করতে লগইন করুন", editDetails: "বিবরণ সম্পাদনা করুন", editTitle: "জনসংখ্যাতত্ত্ব সম্পাদনা করুন", selectOccupation: "পেশা নির্বাচন করুন", farmer: "কৃষক / কৃষি", student: "ছাত্র", salaried: "বেতনভোগী পেশাদার", selfEmployed: "স্ব-কর্মসংস্থান / ব্যবসা", unemployed: "বেকার", retired: "অবসরপ্রাপ্ত", selectIncome: "আয় বর্গ নির্বাচন করুন", below1L: "₹1,00,000 এর নিচে", income1: "₹1,00,000 - ₹2,50,000", income2: "₹2,50,000 - ₹5,00,000", income3: "₹5,00,000 - ₹8,00,000", above8L: "₹8,00,000 এর উপরে", selectCategory: "বিভাগ নির্বাচন করুন", general: "সাধারণ", saveDetails: "বিবরণ সংরক্ষণ করুন", notProvided: "প্রদান করা হয়নি" },
  Gujarati: { title: "વસ્તી વિષયક", occupation: "વ્યવસાય", income: "વાર્ષિક આવક વર્ગ", category: "સામાજિક વર્ગ", loginRequired: "લૉગિન જરૂરી", pleaseLogin: "વિગતો ભરવા કૃપા કરી લૉગિન કરો", editDetails: "વિગતો સંપાદિત કરો", editTitle: "વસ્તી વિષયક સંપાદિત કરો", selectOccupation: "વ્યવસાય પસંદ કરો", farmer: "ખેડૂત / કૃષિ", student: "વિદ્યાર્થી", salaried: "પગારદાર વ્યાવસાયિક", selfEmployed: "સ્વ-રોજગાર / ધંધો", unemployed: "બેરોજગાર", retired: "નિવૃત્ત", selectIncome: "આવક વર્ગ પસંદ કરો", below1L: "₹1,00,000 થી ઓછું", income1: "₹1,00,000 - ₹2,50,000", income2: "₹2,50,000 - ₹5,00,000", income3: "₹5,00,000 - ₹8,00,000", above8L: "₹8,00,000 થી વધુ", selectCategory: "વર્ગ પસંદ કરો", general: "સામાન્ય", saveDetails: "વિગતો સાચવો", notProvided: "આપવામાં આવ્યું નથી" },
  Malayalam:{ title: "ജനസംഖ്യാശാസ്ത്രം", occupation: "തൊഴിൽ", income: "വാർഷിക വരുമാന വിഭാഗം", category: "സാമൂഹിക വിഭാഗം", loginRequired: "ലോഗിൻ ആവശ്യമാണ്", pleaseLogin: "വിശദാംശങ്ങൾ നൽകാൻ ലോഗിൻ ചെയ്യുക", editDetails: "വിശദാംശങ്ങൾ എഡിറ്റ് ചെയ്യുക", editTitle: "ജനസംഖ്യാശാസ്ത്രം എഡിറ്റ് ചെയ്യുക", selectOccupation: "തൊഴിൽ തിരഞ്ഞെടുക്കുക", farmer: "കർഷകൻ / കൃഷി", student: "വിദ്യാർഥി", salaried: "ശമ്പളക്കാരൻ", selfEmployed: "സ്വയം തൊഴിൽ / ബിസിനസ്", unemployed: "തൊഴിൽരഹിതൻ", retired: "വിരമിച്ചവർ", selectIncome: "വരുമാന വിഭാഗം തിരഞ്ഞെടുക്കുക", below1L: "₹1,00,000 ൽ താഴെ", income1: "₹1,00,000 - ₹2,50,000", income2: "₹2,50,000 - ₹5,00,000", income3: "₹5,00,000 - ₹8,00,000", above8L: "₹8,00,000 ൽ മുകളിൽ", selectCategory: "വിഭാഗം തിരഞ്ഞെടുക്കുക", general: "പൊതു", saveDetails: "വിശദാംശങ്ങൾ സേവ് ചെയ്യുക", notProvided: "നൽകിയിട്ടില്ല" },
  Punjabi:  { title: "ਜਨਸੰਖਿਆ ਵਿਗਿਆਨ", occupation: "ਕਿੱਤਾ", income: "ਸਾਲਾਨਾ ਆਮਦਨ ਵਰਗ", category: "ਸਮਾਜਿਕ ਸ਼੍ਰੇਣੀ", loginRequired: "ਲੌਗਇਨ ਜ਼ਰੂਰੀ ਹੈ", pleaseLogin: "ਵੇਰਵੇ ਭਰਨ ਲਈ ਕਿਰਪਾ ਕਰਕੇ ਲੌਗਇਨ ਕਰੋ", editDetails: "ਵੇਰਵੇ ਸੋਧੋ", editTitle: "ਜਨਸੰਖਿਆ ਵਿਗਿਆਨ ਸੋਧੋ", selectOccupation: "ਕਿੱਤਾ ਚੁਣੋ", farmer: "ਕਿਸਾਨ / ਖੇਤੀਬਾੜੀ", student: "ਵਿਦਿਆਰਥੀ", salaried: "ਤਨਖਾਹਦਾਰ ਪੇਸ਼ੇਵਰ", selfEmployed: "ਸਵੈ-ਰੁਜ਼ਗਾਰ / ਕਾਰੋਬਾਰ", unemployed: "ਬੇਰੁਜ਼ਗਾਰ", retired: "ਸੇਵਾਮੁਕਤ", selectIncome: "ਆਮਦਨ ਵਰਗ ਚੁਣੋ", below1L: "₹1,00,000 ਤੋਂ ਘੱਟ", income1: "₹1,00,000 - ₹2,50,000", income2: "₹2,50,000 - ₹5,00,000", income3: "₹5,00,000 - ₹8,00,000", above8L: "₹8,00,000 ਤੋਂ ਵੱਧ", selectCategory: "ਸ਼੍ਰੇਣੀ ਚੁਣੋ", general: "ਆਮ", saveDetails: "ਵੇਰਵੇ ਸੁਰੱਖਿਅਤ ਕਰੋ", notProvided: "ਪ੍ਰਦਾਨ ਨਹੀਂ ਕੀਤਾ" },
  Odia:     { title: "ଜନସଂଖ୍ୟା ବିଜ୍ଞାନ", occupation: "ବୃତ୍ତି", income: "ବାର୍ଷିକ ଆୟ ବର୍ଗ", category: "ସାମାଜିକ ବର୍ଗ", loginRequired: "ଲଗଇନ ଆବଶ୍ୟକ", pleaseLogin: "ବିବରଣୀ ପୂରଣ ପାଇଁ ଲଗଇନ କରନ୍ତୁ", editDetails: "ବିବରଣୀ ସଂପାଦନ", editTitle: "ଜନସଂଖ୍ୟା ବିଜ୍ଞାନ ସଂପାଦନ", selectOccupation: "ବୃତ୍ତି ଚୟନ କରନ୍ତୁ", farmer: "କୃଷକ / କୃଷି", student: "ଛାତ୍ର", salaried: "ବେତନଭୋଗୀ ବୃତ୍ତିଗତ", selfEmployed: "ସ୍ୱ-ନିଯୁକ୍ତ / ବ୍ୟବସାୟ", unemployed: "ବେକାର", retired: "ଅବସରପ୍ରାପ୍ତ", selectIncome: "ଆୟ ବର୍ଗ ଚୟନ", below1L: "₹1,00,000 ରୁ କମ", income1: "₹1,00,000 - ₹2,50,000", income2: "₹2,50,000 - ₹5,00,000", income3: "₹5,00,000 - ₹8,00,000", above8L: "₹8,00,000 ରୁ ଅଧିକ", selectCategory: "ବର୍ଗ ଚୟନ", general: "ସାଧାରଣ", saveDetails: "ବିବରଣୀ ସଂରକ୍ଷଣ", notProvided: "ପ୍ରଦାନ ହୋଇନାହିଁ" },
  Urdu:     { title: "آبادیاتی معلومات", occupation: "پیشہ", income: "سالانہ آمدنی گروپ", category: "سماجی زمرہ", loginRequired: "لاگ ان ضروری ہے", pleaseLogin: "تفصیلات بھرنے کے لیے لاگ ان کریں", editDetails: "تفصیلات ترمیم کریں", editTitle: "آبادیاتی معلومات ترمیم کریں", selectOccupation: "پیشہ منتخب کریں", farmer: "کسان / زراعت", student: "طالب علم", salaried: "تنخواہ دار پیشہ ور", selfEmployed: "خود روزگار / کاروبار", unemployed: "بے روزگار", retired: "ریٹائرڈ", selectIncome: "آمدنی گروپ منتخب کریں", below1L: "₹1,00,000 سے کم", income1: "₹1,00,000 - ₹2,50,000", income2: "₹2,50,000 - ₹5,00,000", income3: "₹5,00,000 - ₹8,00,000", above8L: "₹8,00,000 سے زیادہ", selectCategory: "زمرہ منتخب کریں", general: "عام", saveDetails: "تفصیلات محفوظ کریں", notProvided: "فراہم نہیں کیا گیا" },
}

export function DemographicsEditor({ isGuest }: { isGuest: boolean }) {
  const { language } = useLanguage()
  const t = (key: string) => tr[language]?.[key] ?? tr["English"][key] ?? key

  const [isEditing, setIsEditing] = useState(false)
  const [occupation, setOccupation] = useState("")
  const [income, setIncome] = useState("")
  const [category, setCategory] = useState("")
  const [tempOccupation, setTempOccupation] = useState(occupation)
  const [tempIncome, setTempIncome] = useState(income)
  const [tempCategory, setTempCategory] = useState(category)

  const handleSave = () => {
    setOccupation(tempOccupation)
    setIncome(tempIncome)
    setCategory(tempCategory)
    setIsEditing(false)
  }

  const displayVal = (val: string) => val || t("notProvided")

  return (
    <>
      <div className="bg-white/[0.02] border border-white/[0.05] backdrop-blur-xl rounded-[2rem] p-10 shadow-xl transition-all hover:bg-white/[0.03] hover:border-orange-500/20 group">
        <h3 className="text-xl font-bold text-white mb-8 flex items-center gap-3">
          <div className="p-2.5 bg-orange-500/10 rounded-xl group-hover:bg-orange-500/20 transition-colors">
            <User className="w-5 h-5 text-orange-500" />
          </div>
          {t("title")}
        </h3>

        <div className="space-y-6">
          <div>
            <label className="text-[11px] font-extrabold text-zinc-500 uppercase tracking-wider ml-1">{t("occupation")}</label>
            <p className="text-[15px] font-semibold text-zinc-500 mt-2 bg-white/[0.02] border border-white/[0.05] p-4 rounded-xl group-hover:bg-white/[0.04] transition-colors">
              {isGuest ? t("loginRequired") : displayVal(occupation)}
            </p>
          </div>
          <div>
            <label className="text-[11px] font-extrabold text-zinc-500 uppercase tracking-wider ml-1">{t("income")}</label>
            <p className="text-[15px] font-semibold text-zinc-500 mt-2 bg-white/[0.02] border border-white/[0.05] p-4 rounded-xl group-hover:bg-white/[0.04] transition-colors">
              {isGuest ? t("loginRequired") : displayVal(income)}
            </p>
          </div>
          <div>
            <label className="text-[11px] font-extrabold text-zinc-500 uppercase tracking-wider ml-1">{t("category")}</label>
            <p className="text-[15px] font-semibold text-zinc-500 mt-2 bg-white/[0.02] border border-white/[0.05] p-4 rounded-xl group-hover:bg-white/[0.04] transition-colors">
              {isGuest ? t("loginRequired") : displayVal(category)}
            </p>
          </div>

          {isGuest ? (
            <div className="w-full mt-4 text-[13px] font-extrabold text-zinc-500 text-center tracking-wide uppercase pt-4 border-t border-white/[0.05]">
              {t("pleaseLogin")}
            </div>
          ) : (
            <button
              onClick={() => {
                setTempOccupation(occupation)
                setTempIncome(income)
                setTempCategory(category)
                setIsEditing(true)
              }}
              className="w-full mt-4 text-[13px] font-extrabold text-orange-500 hover:text-orange-400 transition-colors text-right tracking-wide uppercase"
            >
              {t("editDetails")}
            </button>
          )}
        </div>
      </div>

      {isEditing && !isGuest && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm px-4">
          <div className="bg-[#1C1C1E] border border-white/[0.1] rounded-[2rem] p-8 max-w-md w-full shadow-2xl relative animate-in zoom-in-95 fade-in duration-300">
            <button
              onClick={() => setIsEditing(false)}
              className="absolute top-6 right-6 w-8 h-8 flex items-center justify-center rounded-full bg-white/[0.05] hover:bg-white/[0.1] text-zinc-400 hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <h3 className="text-2xl font-black text-white tracking-wide mb-6">{t("editTitle")}</h3>

            <div className="space-y-5 mb-8">
              <div className="space-y-2">
                <label className="text-[12px] font-bold text-zinc-400 uppercase tracking-wider ml-1">{t("occupation")}</label>
                <select value={tempOccupation} onChange={(e) => setTempOccupation(e.target.value)} className="w-full bg-zinc-950 border border-white/[0.1] rounded-xl py-3.5 px-4 text-[15px] font-semibold text-white focus:outline-none focus:border-orange-500/50">
                  <option value="">{t("selectOccupation")}</option>
                  <option value={t("farmer")}>{t("farmer")}</option>
                  <option value={t("student")}>{t("student")}</option>
                  <option value={t("salaried")}>{t("salaried")}</option>
                  <option value={t("selfEmployed")}>{t("selfEmployed")}</option>
                  <option value={t("unemployed")}>{t("unemployed")}</option>
                  <option value={t("retired")}>{t("retired")}</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-[12px] font-bold text-zinc-400 uppercase tracking-wider ml-1">{t("income")}</label>
                <select value={tempIncome} onChange={(e) => setTempIncome(e.target.value)} className="w-full bg-zinc-950 border border-white/[0.1] rounded-xl py-3.5 px-4 text-[15px] font-semibold text-white focus:outline-none focus:border-orange-500/50">
                  <option value="">{t("selectIncome")}</option>
                  <option value={t("below1L")}>{t("below1L")}</option>
                  <option value={t("income1")}>{t("income1")}</option>
                  <option value={t("income2")}>{t("income2")}</option>
                  <option value={t("income3")}>{t("income3")}</option>
                  <option value={t("above8L")}>{t("above8L")}</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-[12px] font-bold text-zinc-400 uppercase tracking-wider ml-1">{t("category")}</label>
                <select value={tempCategory} onChange={(e) => setTempCategory(e.target.value)} className="w-full bg-zinc-950 border border-white/[0.1] rounded-xl py-3.5 px-4 text-[15px] font-semibold text-white focus:outline-none focus:border-orange-500/50">
                  <option value="">{t("selectCategory")}</option>
                  <option value="General">{t("general")}</option>
                  <option value="OBC">OBC</option>
                  <option value="SC">SC</option>
                  <option value="ST">ST</option>
                  <option value="EWS">EWS</option>
                </select>
              </div>
            </div>

            <button onClick={handleSave} className="w-full py-4 bg-orange-500 hover:bg-orange-600 text-zinc-950 font-extrabold text-[15px] rounded-xl transition-all shadow-[0_0_20px_rgba(255,87,34,0.2)]">
              {t("saveDetails")}
            </button>
          </div>
        </div>
      )}
    </>
  )
}
