"use client"

import { useState } from "react"
import { Lock } from "lucide-react"
import { useLanguage } from "@/components/providers/LanguageProvider"

const tr: Record<string, Record<string, string>> = {
  English:  { title: "Data Privacy", aiAccess: "AI Document Access", aiDesc: "Allow AI to read vault docs to pre-fill forms.", localMatch: "Local Scheme Matching", localDesc: "Use precise location to find municipal schemes.", shareData: "Share Anonymized Data", shareDesc: "Help improve transparency metrics." },
  Hindi:    { title: "डेटा गोपनीयता", aiAccess: "AI दस्तावेज़ पहुंच", aiDesc: "AI को फॉर्म पहले भरने के लिए वॉल्ट दस्तावेज़ पढ़ने दें।", localMatch: "स्थानीय योजना मिलान", localDesc: "नगरपालिका योजनाएं खोजने के लिए सटीक स्थान का उपयोग करें।", shareData: "गुमनाम डेटा साझा करें", shareDesc: "पारदर्शिता मेट्रिक्स सुधारने में मदद करें।" },
  Tamil:    { title: "தரவு தனியுரிமை", aiAccess: "AI ஆவண அணுகல்", aiDesc: "படிவங்களை முன் நிரப்ப AI ஐ காப்பக ஆவணங்களை படிக்க அனுமதி.", localMatch: "உள்ளூர் திட்ட பொருத்தம்", localDesc: "நகர திட்டங்களை கண்டறிய சரியான இடத்தை பயன்படுத்தவும்.", shareData: "அநாமதேய தரவு பகிர்வு", shareDesc: "வெளிப்படைத்தன்மை அளவீடுகளை மேம்படுத்த உதவுங்கள்." },
  Kannada:  { title: "ಡೇಟಾ ಗೌಪ್ಯತೆ", aiAccess: "AI ದಾಖಲೆ ಪ್ರವೇಶ", aiDesc: "ಫಾರ್ಮ್‌ಗಳನ್ನು ಮುಂಚಿತವಾಗಿ ತುಂಬಲು AI ಗೆ ವಾಲ್ಟ್ ದಾಖಲೆಗಳನ್ನು ಓದಲು ಅನುಮತಿ ನೀಡಿ.", localMatch: "ಸ್ಥಳೀಯ ಯೋಜನೆ ಹೊಂದಾಣಿಕೆ", localDesc: "ನಗರ ಯೋಜನೆಗಳನ್ನು ಹುಡುಕಲು ನಿಖರ ಸ್ಥಳ ಬಳಸಿ.", shareData: "ಅನಾಮಧೇಯ ಡೇಟಾ ಹಂಚಿಕೆ", shareDesc: "ಪಾರದರ್ಶಕತೆ ಮೆಟ್ರಿಕ್‌ಗಳನ್ನು ಸುಧಾರಿಸಲು ಸಹಾಯ ಮಾಡಿ." },
  Telugu:   { title: "డేటా గోప్యత", aiAccess: "AI పత్రాల యాక్సెస్", aiDesc: "ఫారాలను ముందే నింపడానికి AI వాల్ట్ పత్రాలు చదవడానికి అనుమతించండి.", localMatch: "స్థానిక పథకాల సరిపోలిక", localDesc: "మునిసిపల్ పథకాలు కనుగొనడానికి ఖచ్చితమైన స్థానం ఉపయోగించండి.", shareData: "అనామక డేటా పంచుకోండి", shareDesc: "పారదర్శకత కొలమానాలు మెరుగుపర్చడంలో సహాయం చేయండి." },
  Marathi:  { title: "डेटा गोपनीयता", aiAccess: "AI दस्तऐवज प्रवेश", aiDesc: "फॉर्म आधी भरण्यासाठी AI ला व्हॉल्ट दस्तऐवज वाचू द्या.", localMatch: "स्थानिक योजना जुळणी", localDesc: "महापालिका योजना शोधण्यासाठी अचूक स्थान वापरा.", shareData: "अज्ञात डेटा सामायिक करा", shareDesc: "पारदर्शकता मेट्रिक्स सुधारण्यास मदत करा." },
  Bengali:  { title: "ডেটা গোপনীয়তা", aiAccess: "AI নথি অ্যাক্সেস", aiDesc: "ফর্ম পূর্বপূরণের জন্য AI কে ভল্ট নথি পড়তে অনুমতি দিন।", localMatch: "স্থানীয় প্রকল্প মিলকরণ", localDesc: "মিউনিসিপাল প্রকল্প খুঁজতে সঠিক অবস্থান ব্যবহার করুন।", shareData: "বেনামী ডেটা শেয়ার করুন", shareDesc: "স্বচ্ছতা মেট্রিক্স উন্নত করতে সাহায্য করুন।" },
  Gujarati: { title: "ડેટા ગોપનીયતા", aiAccess: "AI દસ્તાવેજ ઍક્સેસ", aiDesc: "ફોર્મ પ્રી-ફિલ કરવા AI ને વૉલ્ટ દસ્તાવેજ વાંચવા દો.", localMatch: "સ્થાનિક યોજના મિલાન", localDesc: "નગરપાલિકા યોજના શોધવા ચોક્કસ સ્થાન ઉપયોગ કરો.", shareData: "અનામી ડેટા શેર કરો", shareDesc: "પારદર્શિતા મેટ્રિક્સ સુધારવામાં મદદ કરો." },
  Malayalam:{ title: "ഡേറ്റ സ്വകാര്യത", aiAccess: "AI ഡോക്യുമെന്റ് ആക്സസ്", aiDesc: "ഫോം മുൻകൂട്ടി നിറയ്ക്കാൻ AI ക്ക് വോൾട്ട് രേഖകൾ വായിക്കാൻ അനുവദിക്കുക.", localMatch: "പ്രാദേശിക പദ്ധതി ഒത്തുനോക്കൽ", localDesc: "മുനിസിപ്പൽ പദ്ധതികൾ കണ്ടെത്തുന്നതിന് കൃത്യ സ്ഥലം ഉപയോഗിക്കുക.", shareData: "അജ്ഞാത ഡേറ്റ പങ്കിടുക", shareDesc: "സ്വാഭാവിക മെട്രിക്കുകൾ മെച്ചപ്പെടുത്താൻ സഹായിക്കൂ." },
  Punjabi:  { title: "ਡੇਟਾ ਗੋਪਨੀਯਤਾ", aiAccess: "AI ਦਸਤਾਵੇਜ਼ ਪਹੁੰਚ", aiDesc: "ਫਾਰਮ ਪਹਿਲਾਂ ਭਰਨ ਲਈ AI ਨੂੰ ਵਾਲਟ ਦਸਤਾਵੇਜ਼ ਪੜ੍ਹਨ ਦਿਓ।", localMatch: "ਸਥਾਨਕ ਯੋਜਨਾ ਮਿਲਾਨ", localDesc: "ਮਿਉਂਸੀਪਲ ਯੋਜਨਾਵਾਂ ਲੱਭਣ ਲਈ ਸਹੀ ਸਥਾਨ ਵਰਤੋ।", shareData: "ਗੁਮਨਾਮ ਡੇਟਾ ਸਾਂਝਾ ਕਰੋ", shareDesc: "ਪਾਰਦਰਸ਼ਿਤਾ ਮੈਟ੍ਰਿਕਸ ਸੁਧਾਰਨ ਵਿੱਚ ਮਦਦ ਕਰੋ।" },
  Urdu:     { title: "ڈیٹا رازداری", aiAccess: "AI دستاویز رسائی", aiDesc: "فارم پہلے سے بھرنے کے لیے AI کو والٹ دستاویزات پڑھنے دیں۔", localMatch: "مقامی اسکیم ملاپ", localDesc: "میونسپل اسکیمیں تلاش کرنے کے لیے درست مقام استعمال کریں۔", shareData: "گمنام ڈیٹا شیئر کریں", shareDesc: "شفافیت میٹرکس بہتر بنانے میں مدد کریں۔" },
}

export function DataPrivacySettings() {
  const { language } = useLanguage()
  const t = (key: string) => tr[language]?.[key] ?? tr["English"][key] ?? key

  const [aiAccess, setAiAccess] = useState(true)
  const [localMatching, setLocalMatching] = useState(true)
  const [shareData, setShareData] = useState(false)

  const Toggle = ({ on }: { on: boolean }) => (
    <div className={`w-11 h-6 rounded-full relative shadow-sm transition-colors ${on ? "bg-orange-500 shadow-[0_0_10px_rgba(255,87,34,0.4)]" : "bg-white/[0.1] border border-white/[0.05]"}`}>
      <div className={`absolute top-1 w-4 h-4 rounded-full shadow-sm transition-all ${on ? "right-1 bg-zinc-950" : "left-1 bg-zinc-400"}`} />
    </div>
  )

  return (
    <div className="bg-white/[0.02] border border-white/[0.05] backdrop-blur-xl rounded-[2rem] p-10 shadow-xl transition-all hover:bg-white/[0.03] hover:border-orange-500/20 group">
      <h3 className="text-xl font-bold text-white mb-8 flex items-center gap-3">
        <div className="p-2.5 bg-orange-500/10 rounded-xl group-hover:bg-orange-500/20 transition-colors">
          <Lock className="w-5 h-5 text-orange-500" />
        </div>
        {t("title")}
      </h3>

      <div className="space-y-6">
        <div className="flex items-center justify-between p-3 -mx-3 rounded-xl hover:bg-white/[0.02] transition-colors cursor-pointer" onClick={() => setAiAccess(!aiAccess)}>
          <div>
            <h4 className="text-[15px] font-bold text-white">{t("aiAccess")}</h4>
            <p className="text-[12px] font-medium text-zinc-500 mt-0.5">{t("aiDesc")}</p>
          </div>
          <Toggle on={aiAccess} />
        </div>

        <div className="flex items-center justify-between p-3 -mx-3 rounded-xl hover:bg-white/[0.02] transition-colors cursor-pointer" onClick={() => setLocalMatching(!localMatching)}>
          <div>
            <h4 className="text-[15px] font-bold text-white">{t("localMatch")}</h4>
            <p className="text-[12px] font-medium text-zinc-500 mt-0.5">{t("localDesc")}</p>
          </div>
          <Toggle on={localMatching} />
        </div>

        <div className="flex items-center justify-between p-3 -mx-3 rounded-xl hover:bg-white/[0.02] transition-colors cursor-pointer" onClick={() => setShareData(!shareData)}>
          <div>
            <h4 className="text-[15px] font-bold text-white">{t("shareData")}</h4>
            <p className="text-[12px] font-medium text-zinc-500 mt-0.5">{t("shareDesc")}</p>
          </div>
          <Toggle on={shareData} />
        </div>
      </div>
    </div>
  )
}
