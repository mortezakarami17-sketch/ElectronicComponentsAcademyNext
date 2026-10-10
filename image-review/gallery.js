const sourceBase = "https://commons.wikimedia.org/wiki/File:";
const items = [
  {id:"carbon-film",fa:"مقاومت کربنی و لایه‌ای",en:"Carbon-film resistor",media:[
    {id:"RIMG-CF-REAL-01",kind:"real",title:"عکس واقعی کامل",status:"تصویر مناسب پیدا نشد",note:"تصویر عمومی از مقاومت محوری وجود دارد، اما نوع ساخت آن از عکس منبع قابل تأیید نیست؛ بنابراین برای معرفی مشخصِ کربنی پیشنهاد نشده است."},
    {id:"RIMG-CF-CUT-01",kind:"cutaway",title:"نمای برش‌خورده",status:"دارایی موجود؛ بدون تغییر",path:"../assets/images/components/resistors/carbon-film-cross-section.jpg",alt:"برش واقعی مقاومت لایه‌کربنی محوری",dims:"4032 × 3024",author:"TubeTimeUS",license:"CC BY-SA 4.0",source:sourceBase+"Carbon_film_resistor_cross_section.jpg",note:"نمای واقعی از مقطع یک مقاومت لایه‌کربنی؛ نباید به‌عنوان عکس بیرونی معرفی شود."},
    {id:"RSYM-CF-01",kind:"symbol",title:"نماد شماتیک",status:"منبع و شکل بررسی شد؛ در درس استفاده می‌شود",path:"../assets/images/components/resistors/symbols/iec-ansi-resistor-symbols.svg",alt:"نماد مقاومت ثابت ANSI و IEC",symbol:"مقاومت ثابت IEC و ANSI",author:"Aumars",license:"CC0 1.0",source:sourceBase+"Resistors.svg",note:"شکل بالایی ANSI و پایینی IEC؛ نماد عمومی است و فناوری ساخت را نشان نمی‌دهد."}
  ]},
  {id:"carbon-composition",fa:"مقاومت کربنی ترکیبی",en:"Carbon-composition resistor",media:[
    {id:"RIMG-CC-REAL-01",kind:"real",title:"عکس واقعی سالم و کامل",status:"تصویر دارای کیفیت و مجوز روشن پیدا نشد",note:"یک تصویر Commons از نمونهٔ نیمه‌پوشش‌خورده و دارای عیب ساخت دیده شد؛ برای عکس اصلی قطعه مناسب نیست. تصاویر فروشگاهی با مجوز نامشخص کنار گذاشته شدند."},
    {id:"RIMG-CC-CUT-01",kind:"cutaway",title:"نمای داخلی",status:"نمای تأییدشده موجود نیست",note:"برش موجود در پروژه مربوط به مقاومت لایه‌کربنی است؛ آن را به‌عنوان کربنی ترکیبی معرفی نمی‌کنیم."},
    {id:"RSYM-CC-01",kind:"symbol",title:"نماد شماتیک",status:"نماد عمومی IEC/ANSI در درس استفاده می‌شود",path:"../assets/images/components/resistors/symbols/iec-ansi-resistor-symbols.svg",alt:"نماد مقاومت ثابت IEC و ANSI",symbol:"IEC و ANSI",author:"Aumars",license:"CC0 1.0",source:sourceBase+"Resistors.svg",note:"نماد عمومی مقاومت ثابت؛ روش ساخت ترکیبی را نشان نمی‌دهد."}
  ]},
  {id:"metal-film",fa:"مقاومت فلزفیلم دقیق",en:"Metal-film resistor",media:[
    {id:"RIMG-MF-REAL-01",kind:"real",title:"عکس واقعی",status:"جایگزین پیشنهادی",path:"../assets/images/components/resistors/candidates/metal-film.jpg",alt:"مقاومت فلزفیلم محوری آبی روی زمینه سفید",dims:"3520 × 640",author:"J nestor",license:"CC0 1.0",source:sourceBase+"Resistor_metal_film_0.5W_1%_82R.jpg",note:"مطابقت نوع خوب است؛ تصویر به‌طور دیجیتال دستکاری شده و نسبت تصویر غیرعادی کشیده است، پس پیش از انتخاب بررسی شود."},
    {id:"RIMG-MF-CUT-01",kind:"cutaway",title:"نمای داخلی",status:"تصویر مناسب پیدا نشد",note:"نمای داخلی مناسب و دارای مجوز روشن در این بررسی یافت نشد."},
    {id:"RSYM-MF-01",kind:"symbol",title:"نماد شماتیک",status:"نماد عمومی IEC/ANSI در درس استفاده می‌شود",path:"../assets/images/components/resistors/symbols/iec-ansi-resistor-symbols.svg",alt:"نماد مقاومت ثابت IEC و ANSI",symbol:"IEC و ANSI",author:"Aumars",license:"CC0 1.0",source:sourceBase+"Resistors.svg",note:"نماد عمومی مقاومت ثابت؛ فناوری فلزفیلم را نشان نمی‌دهد."}
  ]},
  {id:"wirewound",fa:"مقاومت سیمی و توان بالا",en:"Wirewound power resistor",media:[
    {id:"RIMG-WW-REAL-01",kind:"real",title:"عکس واقعی",status:"در درس استفاده نمی‌شود؛ رئوستا با مقاومت توان ثابت متفاوت است",path:"../assets/images/components/resistors/rheostat.jpg",alt:"رئوستای سیمی بزرگ و قدیمی",dims:"4032 × 3024",author:"Jrs9550",license:"CC BY-SA 4.0",source:sourceBase+"Rheostat.jpg",note:"این تصویر متعلق به رئوستا است و برای عکس اصلی مقاومت توان ثابت به‌کار نمی‌رود."},
    {id:"RIMG-WW-CUT-01",kind:"cutaway",title:"نمای داخلی/آموزشی",status:"در درس با توضیح محدود استفاده می‌شود",path:"../assets/images/components/resistors/wirewound-cutaway.jpg",alt:"مقاومت سیمی سرامیکی با سیم پیچیده‌شدهٔ نمایان",dims:"1024 × 1501",author:"Dilshan Jayakody",license:"CC BY-SA 2.0",source:sourceBase+"Ceramic_Wirewound_Resistor_(15842462344).jpg",note:"تصویر منبع یک مدل سیمی را نشان می‌دهد، اما وضوح متوسط است و نمای داخلی کامل نیست."},
    {id:"RSYM-WW-01",kind:"symbol",title:"نماد شماتیک",status:"نماد نیازمند بررسی فنی",symbol:"Device:R / Device:R_US",note:"نماد مقاومت ثابت معمولاً برای نوع سیمی نیز به‌کار می‌رود؛ جزئیات فناوری را از نماد نتیجه نگیرید."}
  ]},
  {id:"resistor-networks",fa:"شبکه‌های مقاومتی",en:"Resistor networks / arrays",media:[
    {id:"RIMG-RN-REAL-01",kind:"real",title:"عکس واقعی",status:"جایگزین پیشنهادی",remote:"https://upload.wikimedia.org/wikipedia/commons/2/2a/Resistor_Array_model_pic_J.PNG",alt:"بستهٔ شبکهٔ مقاومتی آرایه‌ای",dims:"850 × 520",author:"Tosaka",license:"CC BY 3.0",source:sourceBase+"Resistor_Array_model_pic_J.PNG",note:"شبکهٔ مقاومتی در بستهٔ SIP؛ تصویر قدیمی و وضوح متوسط است اما خود قطعه را نشان می‌دهد."},
    {id:"RIMG-RN-CUT-01",kind:"cutaway",title:"نمای داخلی",status:"تصویر مناسب پیدا نشد",note:"نمای داخلی معتبر برای این شبکه پیدا نشد؛ آرایش داخلی باید بر مبنای مدل دیتاشیت باشد."},
    {id:"RSYM-RN-01",kind:"symbol",title:"نماد شماتیک",status:"نماد نیازمند بررسی فنی",symbol:"Device:R_Network*",note:"آرایش داخلی (باس‌دار، جدا یا تقسیم‌کننده) به مدل وابسته است؛ نماد شبکهٔ عمومی کافی نیست."}
  ]},
  {id:"rotary-pot",fa:"پتانسیومتر چرخشی",en:"Rotary potentiometer",media:[
    {id:"RIMG-RP-REAL-01",kind:"real",title:"عکس واقعی",status:"دارایی موجود؛ بدون تغییر",path:"../assets/images/components/resistors/rotary-potentiometer.jpg",alt:"پتانسیومتر چرخشی با محور و سه پایه",dims:"1860 × 1880",author:"Evan-Amos",license:"Public domain",source:sourceBase+"Electronic-Component-Potentiometer.jpg",note:"عکس واضح روی زمینهٔ ساده؛ نمونهٔ یک مدل مشخص است."},
    {id:"RIMG-RP-CUT-01",kind:"cutaway",title:"نمای داخلی",status:"تصویر مناسب پیدا نشد",note:"نمای داخلی دارای مجوز و تطابق روشن یافت نشد."},
    {id:"RSYM-RP-01",kind:"symbol",title:"نماد شماتیک",status:"نماد IEC در درس استفاده می‌شود",path:"../assets/images/components/resistors/symbols/iec-variable-resistor-potentiometer-rheostat.svg",alt:"نمادهای IEC برای رئوستا و پتانسیومتر",symbol:"بخش راست تصویر",author:"ErikBuer",license:"CC BY-SA 4.0",source:sourceBase+"IEC_resistors.svg",note:"مجموعهٔ نمادها از چپ: مقاومت ثابت، رئوستا، پتانسیومتر؛ تصویر اصلی دستکاری نشده است."}
  ]},
  {id:"slide-pot",fa:"پتانسیومتر کشویی",en:"Slide potentiometer",media:[
    {id:"RIMG-SP-REAL-01",kind:"real",title:"عکس واقعی",status:"نامزد بررسی‌شده؛ در درس استفاده نمی‌شود",path:"../assets/images/components/resistors/candidates/slide-potentiometer.jpg",alt:"پتانسیومتر کشویی قدیمی با برچسب روسی",dims:"4942 × 2780",author:"Raimond Spekking",license:"CC BY-SA 4.0",source:sourceBase+"Mini_Star_416_-_Slide_potentiometer-2974.jpg",note:"برچسب روسی بزرگ و ظاهر فرسوده تمرکز بصری را کم می‌کند؛ عکس جایگزین مناسب هنوز یافت نشده است."},
    {id:"RIMG-SP-CUT-01",kind:"cutaway",title:"نمای داخلی",status:"تصویر مناسب پیدا نشد",note:"نمای داخلی مناسب یافت نشد."},
    {id:"RSYM-SP-01",kind:"symbol",title:"نماد شماتیک",status:"نماد نیازمند بررسی فنی",symbol:"Device:R_Potentiometer",note:"نماد پتانسیومتر بر اساس اتصال الکتریکی است و حرکت کشوییِ مکانیکی را از شکل قطعه نشان نمی‌دهد."}
  ]},
  {id:"rheostat",fa:"رئوستا",en:"Rheostat",media:[
    {id:"RIMG-RH-REAL-01",kind:"real",title:"عکس واقعی",status:"دارایی موجود؛ بدون تغییر",path:"../assets/images/components/resistors/rheostat.jpg",alt:"رئوستای سیمی لغزشی",dims:"4032 × 3024",author:"Jrs9550",license:"CC BY-SA 4.0",source:sourceBase+"Rheostat.jpg",note:"مطابقت موضوعی دارد؛ قاب شلوغ و قطعه قدیمی است."},
    {id:"RIMG-RH-CUT-01",kind:"cutaway",title:"نمای داخلی",status:"تصویر مناسب پیدا نشد",note:"نمای داخل سازوکار لغزنده/مسیر مقاومتی یافت نشد."},
    {id:"RSYM-RH-01",kind:"symbol",title:"نماد شماتیک",status:"نماد IEC در درس استفاده می‌شود",path:"../assets/images/components/resistors/symbols/iec-variable-resistor-potentiometer-rheostat.svg",alt:"نماد IEC رئوستا و پتانسیومتر",symbol:"بخش میانی تصویر",author:"ErikBuer",license:"CC BY-SA 4.0",source:sourceBase+"IEC_resistors.svg",note:"مجموعهٔ نمادهای IEC؛ نماد میانی برای رئوستا و راست برای پتانسیومتر است."}
  ]},
  {id:"trimmer",fa:"تریمر",en:"Trimmer potentiometer",media:[
    {id:"RIMG-TR-REAL-01",kind:"real",title:"عکس واقعی",status:"دارایی موجود؛ بدون تغییر",path:"../assets/images/components/resistors/trimmer-potentiometer.jpg",alt:"تریمر سرامیکی کوچک",dims:"1351 × 901",author:"Suyash Dwivedi",license:"CC BY-SA 4.0",source:sourceBase+"P103_cermet_trimming_potentiometer_10K.jpg",note:"قطعه درست است اما در کادر کوچک و فضای سفید زیادی دارد."},
    {id:"RIMG-TR-CUT-01",kind:"cutaway",title:"نمای داخلی",status:"تصویر مناسب پیدا نشد",note:"نمای داخلی مناسب یافت نشد."},
    {id:"RSYM-TR-01",kind:"symbol",title:"نماد شماتیک",status:"نماد نیازمند بررسی فنی",symbol:"Device:R_Potentiometer_Trim",note:"پایهٔ لغزنده و شکل نماد باید در منبع KiCad با قرارداد نقشه بررسی شود."}
  ]},
  {id:"multiturn-pot",fa:"پتانسیومتر چنددور",en:"Multi-turn potentiometer",media:[
    {id:"RIMG-MT-REAL-01",kind:"real",title:"عکس واقعی",status:"پیشنهادشده برای تأیید",remote:"https://upload.wikimedia.org/wikipedia/commons/5/53/Tune_Potentiometer.jpg",alt:"پتانسیومتر چنددور برای تنظیم سیگنال",dims:"3648 × 2736",author:"tony_duell",license:"CC BY 2.0",source:sourceBase+"Tune_Potentiometer.jpg",note:"تصویر واضح و پرجزئیات؛ قطعه درون تجهیزات دیده می‌شود، نه به‌صورت محصول جداشده."},
    {id:"RIMG-MT-CUT-01",kind:"cutaway",title:"نمای داخلی",status:"تصویر مناسب پیدا نشد",note:"نمای داخلی معتبر یافت نشد."},
    {id:"RSYM-MT-01",kind:"symbol",title:"نماد شماتیک",status:"نماد نیازمند بررسی فنی",symbol:"Device:R_Potentiometer",note:"چنددور بودن ویژگی مکانیکی است و معمولاً از نماد پایهٔ پتانسیومتر مشخص نمی‌شود."}
  ]},
  {id:"ldr",fa:"مقاومت وابسته به نور",en:"Light dependent resistor (LDR)",media:[
    {id:"RIMG-LDR-REAL-01",kind:"real",title:"عکس واقعی",status:"منبع و تصویر بررسی شد؛ در درس استفاده می‌شود",path:"../assets/images/components/resistors/ldr.jpg",alt:"یک LDR دیسکی ۲۵ میلی‌متری با مسیر رسانای زیگزاگی",dims:"2315 × 1543",author:"Suyash Dwivedi",license:"CC BY-SA 4.0",source:sourceBase+"25mm_light-dependent_resistor_(LDR)_(1).jpg",note:"تصویر واضح از خود قطعه روی زمینهٔ ساده؛ اندازه به این نمونه محدود است."},
    {id:"RIMG-LDR-CUT-01",kind:"cutaway",title:"نمای داخلی",status:"جایگزین پیشنهادی",remote:"https://commons.wikimedia.org/wiki/Special:FilePath/LDResistor.jpg",alt:"نمای بسیار کوچک از ساختار داخلی یک LDR",dims:"148 × 284",author:"پدیدآورنده در صفحهٔ فایل مشخص نشده",license:"Public domain اعلام‌شده در Commons",source:sourceBase+"LDResistor.jpg",note:"نمای داخلی/جزئیات واقعی اما وضوح بسیار پایین؛ برای نمایش بزرگ مناسب نیست و فقط به‌عنوان گزینهٔ ضعیف آورده شده است."},
    {id:"RSYM-LDR-01",kind:"symbol",title:"نماد شماتیک",status:"نماد متداول در درس استفاده می‌شود",path:"../assets/images/components/resistors/symbols/ldr-symbol.svg",alt:"نماد شماتیک مقاومت وابسته به نور با دو پیکان نور",symbol:"LDR",author:"bdesham",license:"Public domain (PD-ineligible)",source:sourceBase+"Light-dependent_resistor_schematic_symbol.svg",note:"نماد متداول LDR؛ انطباق با استاندارد خاص IEC/ANSI ادعا نمی‌شود."}
  ]},
  {id:"ntc",fa:"ترمیستور NTC",en:"Negative temperature coefficient thermistor",media:[
    {id:"RIMG-NTC-APP-01",kind:"application",title:"نمونهٔ کاربرد روی مدار",status:"با برچسب کاربردی در درس استفاده می‌شود",path:"../assets/images/components/resistors/ntc-application.jpg",alt:"ترمیستور NTC دیسکی روی برد تغذیه",dims:"1211 × 1140",author:"Soumyapatra13",license:"CC BY-SA 4.0",source:sourceBase+"NTC_Thermistor.jpg",note:"این عکس NTC روی برد است و جای عکس مستقل قطعه را نمی‌گیرد."},
    {id:"RIMG-NTC-CUT-01",kind:"cutaway",title:"نمای داخلی",status:"تصویر مناسب پیدا نشد",note:"نمای داخلی معتبر و مختص این قطعه یافت نشد."},
    {id:"RSYM-NTC-01",kind:"symbol",title:"نماد شماتیک",status:"نماد IEC/DIN در درس استفاده می‌شود",path:"../assets/images/components/resistors/symbols/ntc-symbol.svg",alt:"نماد شماتیک NTC",symbol:"IEC/DIN",author:"Sheevar",license:"CC0 1.0",source:sourceBase+"Widerstand_NTC_DIN-EN.svg",note:"نماد NTC در نمایش IEC/DIN؛ نسخهٔ ANSI ممکن است متفاوت باشد."}
  ]},
  {id:"ptc",fa:"ترمیستور PTC",en:"Positive temperature coefficient thermistor",media:[
    {id:"RIMG-PTC-REAL-01",kind:"real",title:"عکس واقعی",status:"تصویر مناسب پیدا نشد",note:"عکس واضح PTC که نوع قطعه‌اش از منبع قابل تأیید باشد در این بررسی پیدا نشد؛ تصویر NTC به‌جای آن استفاده نمی‌شود."},
    {id:"RIMG-PTC-CUT-01",kind:"cutaway",title:"نمای داخلی",status:"تصویر مناسب پیدا نشد",note:"نمای داخلی معتبر یافت نشد."},
    {id:"RSYM-PTC-01",kind:"symbol",title:"نماد شماتیک",status:"نماد PTC در درس استفاده می‌شود",path:"../assets/images/components/resistors/symbols/ptc-symbol.svg",alt:"نماد شماتیک PTC",symbol:"PTC",author:"اصل: Dorfjung؛ SVG مشتق: Bubinator",license:"CC BY-SA 3.0 / GFDL 1.2+",source:sourceBase+"PTC-Resistor.svg",note:"نماد شماتیکی PTC از اثر مشتق‌شدهٔ Commons."}
  ]},
  {id:"humidity-resistor",fa:"حسگر مقاومتی رطوبت",en:"Humidity-dependent resistive sensor",media:[
    {id:"RIMG-HS-REAL-01",kind:"real",title:"عکس واقعی",status:"تصویر مناسب پیدا نشد",note:"تصویر مجاز و تطبیق‌پذیر با یک حسگر مشخص پیدا نشد؛ بسیاری از حسگرهای رطوبت رایج خازنی‌اند."},
    {id:"RIMG-HS-CUT-01",kind:"cutaway",title:"نمای داخلی",status:"تصویر مناسب پیدا نشد",note:"مدل دقیق برای جست‌وجوی نمای داخلی مشخص نشده است."},
    {id:"RSYM-HS-01",kind:"symbol",title:"نماد شماتیک",status:"نماد نیازمند بررسی فنی",symbol:"مدل‌محور",note:"نماد یکتای عمومی برای همهٔ فناوری‌های مقاومتی رطوبت احراز نشد."}
  ]},
  {id:"fsr",fa:"مقاومت حساس به نیرو",en:"Force sensing resistor (FSR)",media:[
    {id:"RIMG-FSR-REAL-01",kind:"real",title:"عکس واقعی",status:"منبع و تصویر بررسی شد؛ در درس استفاده می‌شود",path:"../assets/images/components/resistors/fsr-402.jpg",alt:"حسگر مقاومتی نیرو Interlink FSR 402",dims:"1847 × 1114",author:"عکس اصلی: oomlout؛ برش: Bomazi",license:"CC BY-SA 2.0",source:sourceBase+"Force_Sensing_Resistor_cropped.jpg",note:"محصول مشخص و واضح؛ مشتقِ برش‌خورده است و شرایط انتساب رعایت شود."},
    {id:"RIMG-FSR-CUT-01",kind:"cutaway",title:"نمای داخلی",status:"تصویر مناسب پیدا نشد",note:"نمای داخلی معتبر و دقیق برای همین مدل یافت نشد."},
    {id:"RSYM-FSR-01",kind:"symbol",title:"نماد شماتیک",status:"نماد نیازمند بررسی فنی",symbol:"مدل/قرارداد خاص",note:"نماد FSR در منابع گوناگون متفاوت است؛ از نماد مقاومت عمومی به‌عنوان نماد قطعی حسگر استفاده نشده است."}
  ]},
  {id:"strain-gauge",fa:"کرنش‌سنج مقاومتی",en:"Strain gauge",media:[
    {id:"RIMG-SG-REAL-01",kind:"real",title:"عکس واقعی",status:"منبع و تصویر بررسی شد؛ در درس استفاده می‌شود",path:"../assets/images/components/resistors/strain-gauge.jpg",alt:"کرنش‌سنج فویلی نصب‌شده روی سطح",dims:"2179 × 2179",author:"Cristian V.",license:"CC BY 4.0",source:sourceBase+"Strain_gauge_-.jpg",note:"وضوح خوب؛ کرنش‌سنج نصب‌شده را نشان می‌دهد، نه نمونهٔ جداگانه."},
    {id:"RIMG-SG-DIAG-01",kind:"diagram",title:"تصویر آموزشی ساختار",status:"منبع و تصویر بررسی شد؛ در درس استفاده می‌شود",path:"../assets/images/components/resistors/strain-gauge-construction.svg",alt:"تصویر آموزشی مسیر فویلی کرنش‌سنج",dims:"SVG",author:"MADe؛ نسخهٔ فعلی AnonMoos",license:"CC BY-SA 2.5",source:sourceBase+"Strain_gauge.svg",note:"نمودار ساختار است، نه عکس برش‌خورده یا نماد شماتیک."},
    {id:"RSYM-SG-01",kind:"symbol",title:"نماد شماتیک",status:"نماد نیازمند بررسی فنی",symbol:"Device:R + برچسب کرنش‌سنج",note:"نماد عمومی مستقل و یکتا برای همهٔ نقشه‌ها احراز نشد؛ قرارداد مرجع/سازنده لازم است."}
  ]},
  {id:"varistor",fa:"وریستور",en:"Voltage dependent resistor (VDR / MOV)",media:[
    {id:"RIMG-VR-REAL-01",kind:"real",title:"عکس واقعی",status:"دارایی موجود؛ بدون تغییر",path:"../assets/images/components/resistors/varistor.jpg",alt:"وریستور دیسکی MOV با خط‌کش برای مقیاس",dims:"1485 × 1980",author:"Michael Schmid",license:"CC BY-SA 3.0",source:sourceBase+"Varistor_S14K385_photo.jpg",note:"قطعه به‌وضوح قابل شناسایی است؛ خط‌کش بخشی از کادر است."},
    {id:"RIMG-VR-CUT-01",kind:"cutaway",title:"نمای داخلی",status:"تصویر مناسب پیدا نشد",note:"نمای داخلی معتبر از وریستور پیدا نشد."},
    {id:"RSYM-VR-01",kind:"symbol",title:"نماد شماتیک",status:"نماد متداول در درس استفاده می‌شود",path:"../assets/images/components/resistors/symbols/varistor-symbol.svg",alt:"نماد شماتیک وریستور",symbol:"نماد متداول",author:"Горовато",license:"Public domain (PD-ineligible)",source:sourceBase+"Varistor.svg",note:"نماد متداول؛ استاندارد IEC/ANSI مشخص برای این تصویر ادعا نمی‌شود."}
  ]},
  {id:"magnetoresistive",fa:"حسگر مقاومتی میدان مغناطیسی",en:"Magnetoresistive sensor",media:[
    {id:"RIMG-MR-REAL-01",kind:"real",title:"عکس واقعی",status:"تصویر مناسب پیدا نشد",note:"حسگرهای مغناطیسی زیادی اثر هال دارند و مقاومتی نیستند؛ مدل خاص و عکس دارای مجوز روشن مشخص نشد."},
    {id:"RIMG-MR-CUT-01",kind:"cutaway",title:"نمای داخلی",status:"تصویر مناسب پیدا نشد",note:"برای فناوری/مدل مشخص، نمای داخلی قابل تأیید یافت نشد."},
    {id:"RSYM-MR-01",kind:"symbol",title:"نماد شماتیک",status:"نماد نیازمند بررسی فنی",symbol:"مدل‌محور",note:"نماد باید با فناوری خاص (AMR/GMR/TMR و مدل قطعه) تطبیق داده شود؛ نماد عمومی تأیید نشده است."}
  ]},
  {id:"other-resistive-sensors",fa:"سایر حسگرهای مقاومتی",en:"Other resistive sensors",media:[
    {id:"RIMG-ORS-REAL-01",kind:"real",title:"عکس واقعی",status:"تصویر مناسب پیدا نشد",note:"این دسته مدل یکتایی ندارد؛ باید نوع/مدل حسگر پیش از انتخاب تصویر مشخص شود."},
    {id:"RIMG-ORS-CUT-01",kind:"cutaway",title:"نمای داخلی",status:"تصویر مناسب پیدا نشد",note:"بدون تعیین فناوری و مدل، تصویر داخلی قابل تطبیق نیست."},
    {id:"RSYM-ORS-01",kind:"symbol",title:"نماد شماتیک",status:"نماد نیازمند بررسی فنی",symbol:"مدل‌محور",note:"زیرگروه‌های حسگری رفتار و قرارداد شماتیک متفاوت دارند؛ نماد کلی پیشنهاد نمی‌شود."}
  ]}
];

const gallery = document.querySelector("#gallery");
const search = document.querySelector("#search");
const count = document.querySelector("#result-count");
const empty = document.querySelector("#empty-state");
const dialog = document.querySelector("#image-dialog");
const dialogImage = document.querySelector("#dialog-image");
const dialogCaption = document.querySelector("#dialog-caption");
const kindNames = {real:"عکس واقعی",cutaway:"نمای داخلی / برش",application:"نمونهٔ کاربرد",diagram:"تصویر آموزشی ساختار",symbol:"مرجع نماد"};
const escapeHtml = (value="") => String(value).replace(/[&<>"']/g, ch => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[ch]));
function renderMedia(media){
  const existing = media.status.startsWith("دارایی موجود");
  const badgeClass = existing ? "badge existing" : "badge";
  const picture = media.path || media.remote;
  const visual = picture
    ? `<div class="preview"><button type="button" data-zoom="${escapeHtml(picture)}" data-alt="${escapeHtml(media.alt||media.title)}" data-caption="${escapeHtml(media.title+" — "+media.id)}"><img loading="lazy" src="${escapeHtml(picture)}" alt="${escapeHtml(media.alt||media.title)}"></button></div>`
    : media.kind === "symbol"
      ? `<div class="symbol-box"><div>تصویر نماد وارد نشده است<br><span class="symbol-id">${escapeHtml(media.symbol||"—")}</span><br>ارجاع فنی؛ نیازمند بازبینی</div></div>`
      : `<div class="no-image">${escapeHtml(media.note||"تصویر قابل تأیید موجود نیست")}</div>`;
  const meta = media.kind === "symbol"
    ? `<div class="metadata"><p><strong>شناسه:</strong> <bdi>${escapeHtml(media.id)}</bdi></p>${media.author?`<p><strong>پدیدآورنده:</strong> ${escapeHtml(media.author)}</p>`:""}${media.license?`<p><strong>مجوز:</strong> ${escapeHtml(media.license)}</p>`:""}<p>${escapeHtml(media.note||"")}</p>${media.source?`<p><a href="${escapeHtml(media.source)}" target="_blank" rel="noreferrer">صفحهٔ منبع و مجوز</a></p>`:`<p><a href="https://kicad.github.io/symbols/Device.html" target="_blank" rel="noreferrer">فهرست رسمی نمادهای KiCad</a></p>`}</div>`
    : `<div class="metadata"><p><strong>شناسه:</strong> <bdi>${escapeHtml(media.id)}</bdi> · <bdi>${escapeHtml(media.dims||"ابعاد ناموجود")}</bdi></p>${media.author?`<p><strong>پدیدآورنده:</strong> ${escapeHtml(media.author)}</p>`:""}${media.license?`<p><strong>مجوز:</strong> ${escapeHtml(media.license)}</p>`:""}<p>${escapeHtml(media.note||"")}</p>${media.source?`<p><a href="${escapeHtml(media.source)}" target="_blank" rel="noreferrer">صفحهٔ منبع و مجوز</a></p>`:""}</div>`;
  return `<section class="media-card ${media.kind==='symbol'?'wide':''}" aria-label="${escapeHtml(kindNames[media.kind])}"><div class="media-title"><h3>${escapeHtml(media.title)}</h3><span class="${badgeClass}">${escapeHtml(media.status)}</span></div>${visual}${meta}</section>`;
}
function render(){
  const query=search.value.trim().toLocaleLowerCase("fa");
  const filtered=items.filter(item=>`${item.fa} ${item.en} ${item.id}`.toLocaleLowerCase("fa").includes(query));
  gallery.innerHTML=filtered.map(item=>`<article class="component-card" id="item-${escapeHtml(item.id)}"><header class="component-heading"><h2>${escapeHtml(item.fa)}</h2><p>${escapeHtml(item.en)} · <bdi>${escapeHtml(item.id)}</bdi></p></header><div class="media-grid">${item.media.map(renderMedia).join("")}</div></article>`).join("");
  count.textContent=`${filtered.length} از ${items.length} قطعه`;
  empty.hidden=filtered.length!==0;
}
gallery.addEventListener("click",event=>{
  const button=event.target.closest("[data-zoom]");
  if(!button)return;
  dialogImage.src=button.dataset.zoom;
  dialogImage.alt=button.dataset.alt||"";
  dialogCaption.textContent=button.dataset.caption||"";
  dialog.showModal();
});
dialog.addEventListener("close",()=>{dialogImage.removeAttribute("src");});
search.addEventListener("input",render);
render();
