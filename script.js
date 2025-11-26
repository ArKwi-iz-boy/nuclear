$(document).ready(function() {
    console.log('helo')
    
    // --- 1. Language Dictionary ---
    const langData = {
        en: {
            home: "Home",
            basics: "Reactor Basics",
            library: "Digital Library",
            hero_title: "Understanding Nuclear Energy",
            hero_desc: "Explore the science behind nuclear reactors, fission, and safe energy production.",
            learn_more: "Start Learning",
            how_it_works: "How a Reactor Works",
            fission_title: "1. What Are Small Modular Nuclear Reactors?",
            fission_desc: "Small Modular Nuclear Reactors are compact, advanced power systems designed to deliver safe, reliable, and clean energy. They operate with simplified components and enhanced safety features, making them suitable for regions with limited infrastructure. By understanding how SMNRs function, citizens can clearly see how these reactors support sustainable growth.",
            control_title: "2. Why Nuclear Energy Is Safe for Myanmar",
            control_desc: "Modern nuclear systems use passive safety mechanisms that automatically prevent accidents even during power failures or natural disasters. Their resilient design ensures stable operation in Myanmar’s climate conditions. With proper management and strict international standards, nuclear energy becomes one of the safest and cleanest power sources available.",
            coolant_title: "3. Clean Energy for the Future",
            coolant_desc: "SMNRs produce zero greenhouse gas emissions during operation and help reduce dependence on fossil fuels such as diesel and coal. This shift supports national climate goals while improving air quality for communities. By adopting nuclear energy, Myanmar moves toward a greener, healthier, and more self-sufficient energy future.",
            library_title: "Nuclear Research Library",
            api_note: "Fetching live data from Open Library API (Subject: Nuclear Energy)...",
            footer: "Education for the Future."
        },
        mm: {
            home: "ပင်မစာမျက်နှာ",
            basics: "အခြေခံသဘောတရားများ",
            library: "စာကြည့်တိုက်",
            hero_title: "နျူကလီးယားစွမ်းအင်ကို လေ့လာခြင်း",
            hero_desc: "နျူကလီးယား ဓာတ်ပေါင်းဖိုများ၊ ဖစ်ရှင် (Fission) ဖြစ်စဉ်များနှင့် ဘေးကင်းသော စွမ်းအင်ထုတ်လုပ်မှု နောက်ကွယ်ရှိ သိပ္ပံပညာကို လေ့လာပါ။",
            learn_more: "စတင်လေ့လာရန်",
            how_it_works: "ဓာတ်ပေါင်းဖို အလုပ်လုပ်ပုံ",
            fission_title: "၁။ Small Modular Nuclear Reactor (SMNR) ဆိုတာဘာလဲ?",
            fission_desc: "Small Modular Nuclear Reactorများသည် သေးငယ်ပြီး မြင့်မားသော လုံခြုံရေးစနစ်များပါဝင်သည့် အဆင့်မြင့်ပါဝင်သည့် စွမ်းအင်ထုတ်လုပ်စက်ရုံများ ဖြစ်သည်။ ၎င်းတို့သည် လွယ်ကူသည့်ဖွဲ့စည်းပုံနှင့် လုံခြုံရေးနည်းပညာများဖြင့် သံသယကင်းစွာသော စွမ်းအင်ကို ထုတ်လုပ်နိုင်ပြီး အခြေခံအဆောက်အအုံနည်းပါးသော နယ်မြေများအတွက်ပါ သင့်တင့်သည်။ SMNRများ၏ လုပ်ဆောင်ပုံကို နားလည်ခြင်းက မြန်မာနိုင်ငံ၏ တိုးတက်မှုအတွက် အကျိုးကျေးဇူးများကို မြင်သာစေသည်။",
            control_title: "၂။ မဏ္ဍိုင်အင်အားသုံးခြင်းသည် မြန်မာနိုင်ငံအတွက် ဘယ်လိုလုံခြုံသလဲ?",
            control_desc: "ခေတ်သစ်နွူကလီးယားစနစ်များတွင် မီးသွားခြင်း သို့မဟုတ် သဘာဝဘေးအန္တရာယ်များ ဖြစ်ပွားစဉ်တွင်တောင် ကိုယ်တိုင်အလုပ်လုပ်သည့် လုံခြုံရေးစနစ်များပါဝင်သည်။ ၎င်းတို့၏ အားကြီးသည့်ဒီဇိုင်န์များက မြန်မာနိုင်ငံ၏ ရာသီဥတုအခြေအနေတွင်တောင် တည်ငြိမ်စွာ လည်ပတ်နိုင်စေသည်။ တိကျသော စီမံခန့်ခွဲမှုနှင့် အပြည်ပြည်ဆိုင်ရာစံချိန်များဖြင့် နွူကလီးယားအင်အားသည် အလုံခြုံဆုံးနှင့် သန့်ရှင်းဆုံး စွမ်းအင်အမျိုးအစားများထဲမှ တစ်မျိုးဖြစ်သည်။",
            coolant_title: "၃။ အနာဂတ်အတွက် သန့်ရှင်းသော စွမ်းအင်",
            coolant_desc: "SMNRများသည် အလုပ်လည်ပတ်စဉ်တွင် မည်သည့် မီးအိုးအိမ်ရှိန်ပတ်ဝန်းကျင် ဓာတ်ငွေ့မထုတ်လုပ်သလို ဒီဇယ်နှင့် ကျောက်မီးသွေးကဲ့သို့သော ရေနံသယံဇာတများపై မူတည်မှုကိုလည်း လျော့ချပေးသည်။ ဤပြောင်းလဲမှုသည် ရာသီဥတုကာကွယ်ရေးပန်းတိုင်များကို ထောက်ပံ့ပေးပြီး အသက်ရှူလမ်းဓာတ်အရည်အသွေးကို မြှင့်တင်စေသည်။ နွူကလီးယားစွမ်းအင်ကိုအသုံးပြုခြင်းဖြင့် မြန်မာနိုင်ငံသည် ပိုမိုအစိမ်းရောင်ပြီး ကျန်းမာကောင်းမွန်သော အနာဂတ်သို့ ရောက်ရှိသည်။",
            library_title: "နျူကလီးယား သုတေသန စာကြည့်တိုက်",
            api_note: "Open Library API မှ အချက်အလက်များကို ရယူနေသည် (ခေါင်းစဉ် - နျူကလီးယား)...",
            footer: "အနာဂတ်အတွက် ပညာရေး။"
        }
    };

    let currentLang = 'en';

    // --- 2. Language Switcher Logic ---
    $('#lang-toggle').click(function() {
        // Toggle state
        currentLang = (currentLang === 'en') ? 'mm' : 'en';
        
        // Update Button Text
        $('#current-lang').text(currentLang === 'en' ? 'MYANMAR' : 'ENGLISH');

        // Toggle Font Class for Body (for correct Myanmar font rendering)
        if(currentLang === 'mm') {
            $('body').addClass('mm-font');
        } else {
            $('body').removeClass('mm-font');
        }

        // Loop through all elements with data-i18n attribute
        $('[data-i18n]').each(function() {
            const key = $(this).data('i18n');
            // Fade out, change text, fade in
            $(this).fadeOut(200, function() {
                $(this).text(langData[currentLang][key]).fadeIn(200);
            });
        });
    });

});
