/**
 * DORKFORGE Core JavaScript App Engine (Classic B&W Theme & Strategic Refactoring)
 */

// 1. Translation Dictionary
const TRANSLATIONS = {
    en: {
        langToggle: "العربية",
        consoleTitle: "Target Search Vector",
        btnSearch: "Launch Search",
        footerBy: "BUILD BY",
        back: "Back",
        next: "Next",
        launch: "Launch",
        defaultPlaceholder: "Select target options below...",
        
        step: "Step",
        step1Title: "Target Engine",
        step1Subtitle: "Select the search engine. This sets the base search protocol and operator availability.",
        
        step2Title: "Dorking Objective",
        step2Subtitle: "Pick the primary strategy category you want to utilize.",
        
        step3Title: "Specify Operators & Parameters",
        step3Subtitle: "Provide values for search filters or pick a preset dork. Hover labels to see tactical use.",
        
        step4Title: "Define Search Scope",
        step4Subtitle: "Configure site and file restrictions. Exposed Cloud targets keep site scope enabled.",
        labelTargetSite: "Target Website (site:)",
        placeholderSite: "e.g. example.com or leave blank for default *",
        presetsTitle: "Fast Filetype Presets",
        
        step5Title: "Review Strategy",
        step5Subtitle: "Ensure all options meet search requirements before launching request payload.",
        
        summaryEngine: "Target Engine",
        summaryCategory: "Search Category",
        summaryScope: "Domain Scope",
        summaryFiletype: "File Extension Filter",
        summaryOperators: "Configured Strategic Operators",
        summaryPreload: "Preloaded Dork Pattern",
        summaryNone: "None / Default (*)",
        summaryNotApplicable: "Not Applicable",
        
        // Category Names
        catBounty: "Bug Bounty & Disclosures",
        catBountyDesc: "Identify active bug bounty policies, vulnerability disclosure programs, and reward rules.",
        catSqli: "SQLi Vulnerability Vectors",
        catSqliDesc: "Find potential SQL injection targets, database query extensions, and susceptible parameters.",
        
        dorkSelectionLabel: "Optionally Select a Pre-compiled Dork Strategy",
        chooseDorkOption: "-- Or Select a Dork Preset --"
    },
    ar: {
        langToggle: "English",
        consoleTitle: "متجه البحث المستهدف",
        btnSearch: "بدء البحث",
        footerBy: "تطوير بواسطة",
        back: "السابق",
        next: "التالي",
        launch: "بدء",
        defaultPlaceholder: "حدد خيارات البحث أدناه...",
        
        step: "الخطوة",
        step1Title: "محرك البحث المستهدف",
        step1Subtitle: "اختر محرك البحث لتهيئة بروتوكول البحث وتوفير المعاملات المدعومة تلقائيًا.",
        
        step2Title: "الهدف الاستراتيجي من البحث",
        step2Subtitle: "اختر فئة الاستراتيجية الرئيسية التي تريد استخدامها.",
        
        step3Title: "تخصيص معاملات البحث وقيمها",
        step3Subtitle: "أدخل قيم الفلترة أو اختر نموذج بحث جاهز. ضع مؤشر الفأرة فوق كل معامل لرؤية استخدامه التكتيكي.",
        
        step4Title: "تحديد نطاق ومجال البحث",
        step4Subtitle: "تكوين قيود الموقع والملفات. تظل فلترة الموقع نشطة حتى عند اختيار مستودعات السحاب.",
        labelTargetSite: "الموقع المستهدف (site:)",
        placeholderSite: "مثال: example.com أو اتركه فارغًا للبحث الافتراضي *",
        presetsTitle: "الامتدادات السريعة الجاهزة",
        
        step5Title: "المراجعة النهائية للمخطط",
        step5Subtitle: "تأكد من ملاءمة المعاملات والقيم المدخلة قبل إرسال حمولة البحث النهائية إلى المتصفح.",
        
        summaryEngine: "المحرك المختار",
        summaryCategory: "تصنيف البحث",
        summaryScope: "نطاق النطاق/الموقع",
        summaryFiletype: "فلترة امتداد الملفات",
        summaryOperators: "المعاملات الاستراتيجية المجهزة",
        summaryPreload: "نموذج البحث الجاهز",
        summaryNone: "لا يوجد / بحث عام (*)",
        summaryNotApplicable: "غير قابل للتطبيق",
        
        // Category Names
        catBounty: "مكافآت الثغرات والإفصاح",
        catBountyDesc: "تحديد سياسات مكافآت الثغرات النشطة وبرامج الإفصاح عن نقاط الضعف وقواعد المكافآت.",
        catSqli: "مؤشرات ونواقل حقن SQLi",
        catSqliDesc: "البحث عن أهداف حقن قواعد البيانات المحتملة، وامتدادات الاستعلام، والمعاملات القابلة للاختراق.",
        
        dorkSelectionLabel: "اختياري: اختر استراتيجية بحث جاهزة ومجهزة مسبقًا",
        chooseDorkOption: "-- أو اختر نموذج بحث جاهز --"
    }
};

// 2. Target Engines & Rules
const ENGINES = [
    { id: 'google', name: 'Google Search', url: 'https://www.google.com/search?q=', placeholder: 'intitle:"index of" site:example.com' },
    { id: 'duckduckgo', name: 'DuckDuckGo', url: 'https://duckduckgo.com/?q=', placeholder: 'site:example.com filetype:pdf' },
    { id: 'bing', name: 'Bing Search', url: 'https://www.bing.com/search?q=', placeholder: 'site:example.com filetype:xlsx' },
    { id: 'github', name: 'GitHub Code', url: 'https://github.com/search?q=', placeholder: 'filename:config.json "password"' },
    { id: 'shodan', name: 'Shodan IoT', url: 'https://www.shodan.io/search?query=', placeholder: 'port:21 "proftpd"' }
];

// 3. Category Data Mapping (Only two types: Bounty & SQLi)
const CATEGORIES = [
    { id: 'bounty', nameKey: 'catBounty', descKey: 'catBountyDesc' },
    { id: 'sqli', nameKey: 'catSqli', descKey: 'catSqliDesc' }
];

// 4. Preloaded Dork Lists (Fully contains all user-provided strings)
const PRELOADED_DORKS = {
    bounty: [
        'inurl:"/bug bounty"',
        'inurl:"/security"',
        'inurl:security.txt',
        'inurl:security "reward"',
        'inurl:"/responsible disclosure"',
        'inurl:"/responsible-disclosure/" reward',
        'inurl:"/responsible-disclosure/" swag',
        'inurl:"/responsible-disclosure/" bounty',
        'inurl:"/responsible disclosure" hoodie',
        'responsible disclosure swag r=h:com',
        'responsible disclosure hall of fame',
        'inurl:responsible disclosure $50',
        'responsible disclosure europe',
        'responsible disclosure white hat',
        'white hat program',
        'insite:"responsible disclosure" -inurl:nl',
        'intext:"responsible disclosure"',
        'site:eu "responsible disclosure"',
        'site:.nl "responsible disclosure"',
        'site: "responsible disclosure"',
        'responsible disclosure:sites',
        'responsible disclosure r=h:nl',
        'responsible disclosure r=h:uk',
        'responsible disclosure r=h:eu',
        'responsible disclosure bounty r=h:nl',
        'responsible disclosure bounty r=h:uk',
        'responsible disclosure bounty r=h:eu',
        'responsible disclosure swag r=h:nl',
        'responsible disclosure swag r=h:uk',
        'responsible disclosure swag r=h:eu',
        'responsible disclosure reward r=h:nl',
        'responsible disclosure reward r=h:uk',
        'responsible disclosure reward r=h:eu',
        '"powered by bugcrowd" -site:bugcrowd.com',
        '"submit vulnerability report"',
        '"submit vulnerability report" | "powered by bugcrowd" | "powered by hackerone"',
        'site:*.gov.* "responsible disclosure"',
        'intext:"we take security very seriously"',
        'site:responsibledisclosure.com',
        'inurl:"vulnerability-disclosure-policy" reward',
        'intext:"Vulnerability Disclosure" site:nl',
        'intext:"Vulnerability Disclosure" site:eu',
        'site:*.*.nl intext:"security report reward"',
        'site:*.*.nl intext:"responsible disclosure reward"',
        '"security vulnerability" "report"',
        'inurl:"security report"',
        '"responsible disclosure" university',
        'inurl:/responsible-disclosure/ university',
        'buy bitcoins "bug bounty"',
        'inurl:/security ext:txt "contact"',
        '"powered by synack"',
        'intext:"responsible disclosure bounty"',
        'inurl:private bugbountyprogram',
        'inurl:/.well-known/security ext:txt',
        'inurl:/.well-known/security ext:txt intext:hackerone',
        'inurl:/.well-known/security ext:txt -hackerone -bugcrowd -synack -openbugbounty',
        'inurl:reporting-security-issues',
        'inurl:security-policy.txt ext:txt',
        'site:*.*.* inurl:bug inurl:bounty',
        'site:help.*.* inurl:bounty',
        'site:support.*.* intext:"security report reward"',
        'intext:"security report monetary" inurl:security',
        'intext:"security report reward" inurl:report',
        'site:security.*.* inurl:bounty',
        'site:*.*.de inurl:bug inurl:bounty',
        'site:*.*.uk intext:"security report reward"',
        'site:*.*.cn intext:"security report reward"',
        '"vulnerability reporting policy"',
        '"van de melding met een minimum van een" -site:responsibledisclosure.nl',
        'inurl:responsible-disclosure-policy',
        '"If you believe you\'ve found a security vulnerability"',
        'intext:"BugBounty" AND intext:"BTC" AND intext:"reward"',
        'intext:bounty inurl:/security',
        'inurl:"bug bounty" AND intext:"€" AND inurl:/security',
        'inurl:"bug bounty" AND intext:"$" AND inurl:/security',
        'inurl:"bug bounty" AND intext:"INR" AND inurl:/security',
        'inurl:/security.txt "mailto*" -github.com -wikipedia.org -portswigger.net -magento',
        '/trust/report-a-vulnerability',
        'site:*.edu intext:"security report vulnerability"',
        '"cms" bug bounty',
        '"If you find a security issue" "reward"',
        '"responsible disclosure" intext:"you may be eligible for monetary compensation"',
        'inurl:"responsible disclosure" OR inurl:"bug bounty" OR inurl:"bugbounty"',
        'intext:"we offer a bounty"',
        'responsible disclosure inurl:in',
        'site:*.br "responsible disclosure"',
        'site:*.at "responsible disclosure"',
        'site:*.be "responsible disclosure"',
        'site:*.au "responsible disclosure"',
        'site:*/security.txt "bounty"',
        'inurl:"bug bounty" intext:"rupees"',
        'inurl:"bug bounty" intext:"₹"',
        'inurl:"responsible disclosure" intext:"INR"',
        '"vulnerability disclosure program" AND (bounty OR reward OR swag OR "hall of fame")',
        '"responsible disclosure" AND (monetary OR cash OR "gift card" OR crypto OR BTC)',
        '"security@*" AND ("bug bounty" OR "vulnerability disclosure") ext:txt',
        '"powered by yeswehack" OR "powered by intigriti" -site:yeswehack.com -site:intigriti.com',
        '"submit vulnerability report" -site:hackerone.com -site:bugcrowd.com -site:synack.com -site:openbugbounty.org',
        'inurl:/.well-known/security.txt intext:bounty -hackerone -bugcrowd -synack',
        '"security.txt" AND ("mailto" OR "contact") AND (bounty OR reward)',
        'intitle:"Bug Bounty" OR intitle:"Vulnerability Disclosure" OR intitle:"Security Rewards"',
        '("We value security researchers" OR "We appreciate security reports") AND (reward OR bounty)',
        '"If you discover a vulnerability" AND (swag OR "hall of fame" OR monetary)',
        'site:*.ca intext:"responsible disclosure" intext:reward',
        'site:*.jp intext:"vulnerability report" intext:swag',
        'site:*.it (intext:"bug bounty" OR intext:"security reward")',
        'site:*.ch filetype:txt inurl:security intext:bounty',
        'site:*.se intext:"responsible disclosure" intext:hall_of_fame',
        'site:*.pl inurl:/bezpieczenstwo intext:nagroda',
        'site:*.fr (intext:"bug bounty" OR "prime de sécurité")',
        'site:*.dk inurl:/sikkerhed intext:dusør',
        'site:*.no inurl:/sikkerhet intext:belønning',
        'site:*.es inurl:/seguridad intext:recompensa',
        'site:*.edu "responsible disclosure" AND (reward OR swag OR bounty)',
        'site:*.edu inurl:/security intext:"report a vulnerability"',
        'site:*.edu intext:"we run a bug bounty program"',
        'site:*.edu intext:"vulnerability disclosure policy" intext:hall_of_fame',
        'site:*.gov* "vulnerability disclosure program" OR "bug bounty"',
        'site:*.gov* inurl:/security intext:contact intext:reward',
        'site:*.gov* filetype:pdf "vulnerability disclosure policy"',
        'inurl:/hackerone.yml -site:hackerone.com',
        'inurl:/bug-bounty.json | inurl:/vdp.json',
        'intext:"Powered by Bug Bounty HQ" OR intext:"Powered by disclose.io"',
        'intext:"managed by huntr.dev"',
        'intext:"CVSS score" AND "eligible for a reward" -hackerone -bugcrowd',
        'inurl:/security/index.html intext:bounty',
        'inurl:/legal/security intext:monetary',
        '"security.txt" AND "PGP" AND (bounty OR reward)',
        'filetype:txt security reward rewards -"we currently" -"we do not" -"not offer"'
    ],
    sqli: [
        'inurl:show_item_details.cfm?item_id=',
        'inurl:showbook.cfm?bookid=',
        'inurl:shprodde.cfm?SKU=',
        'inurl:showStore.cfm?catID=',
        'inurl:specials.cfm?id=',
        'inurl:store_listing.cfm?id=',
        'inurl:store.cfm?id=',
        'inurl:store_bycat.cfm?id=',
        'inurl:storefront.cfm?id=',
        'inurl:Store_ViewProducts.cfm?Cat=',
        'inurl:store-details.cfm?id=',
        'inurl:StoreRedirect.cfm?ID=',
        'inurl:storefronts.cfm?title=',
        'inurl:storeitem.cfm?item=',
        'inurl:subcategories.cfm?id=',
        'inurl:tuangou.cfm?bookid=',
        'inurl:tek9.cfm?',
        'inurl:template.cfm?Action=Item&pid=',
        'inurl:topic.cfm?ID=',
        'inurl:type.cfm?iType=',
        'inurl:view_cart.cfm?title=',
        'inurl:updatebasket.cfm?bookid=',
        'inurl:updates.cfm?ID=',
        'inurl:view.cfm?cid=',
        'inurl:view_detail.cfm?ID=',
        'inurl:viewitem.cfm?recor=',
        'inurl:viewcart.cfm?CartId=',
        'inurl:viewCart.cfm?userID=',
        'inurl:viewCat_h.cfm?idCategory=',
        'inurl:viewevent.cfm?EventID=',
        'inurl:WsAncillary.cfm?ID=',
        'inurl:viewPrd.cfm?idcategory=',
        'inurl:ViewProduct.cfm?misc=',
        'inurl:voteList.cfm?item_ID=',
        'inurl:whatsnew.cfm?idCategory=',
        'inurl:WsPages.cfm?ID=HP',
        'inurl:".php?cid=" intext:"online betting"',
        'inurl:".php?cat=" intext:"Paypal" site:UK',
        'inurl:".php?cat=" intext:"/Buy Now/" site:.net',
        'inurl:".php?id=" intext:"View cart"',
        'inurl:".php?id=" intext:"/store/"',
        'inurl:".php?id=" intext:"Buy Now"',
        'inurl:".php?id=" intext:"add to cart"',
        'inurl:".php?id=" intext:"shopping"',
        'inurl:".php?id=" intext:"boutique"',
        'inurl:".php?cid=" intext:"Buy Now"',
        'inurl:".php?id=" intext:"/shop/"',
        'inurl:".php?id=" intext:"toys"',
        'inurl:".php?cid="',
        'inurl:".php?cid=" intext:"shopping"',
        'inurl:".php?cid=" intext:"add to cart"',
        'inurl:".php?cat="',
        'inurl:".php?cid=" intext:"View cart"',
        'inurl:".php?cid=" intext:"boutique"',
        'inurl:".php?cid=" intext:"/store/"',
        'inurl:".php?cid=" intext:"/shop/"',
        'inurl:".php?cid=" intext:"Toys"',
        'inurl:".php?cat=" intext:"/store/"',
        'inurl:".php?cat=" intext:"shopping"',
        'inurl:".php?cat=" intext:"add to cart"',
        'inurl:".php?cat=" intext:"Buy Now"',
        'inurl:".php?cat=" intext:"View cart"',
        'inurl:".php?cat=" intext:"boutique"',
        'inurl:".php?catid=" intext:"shopping"',
        'inurl:".php?cat=" intext:"/shop/"',
        'inurl:".php?cat=" intext:"Toys"',
        'inurl:".php?catid="',
        'inurl:".php?catid=" intext:"View cart"',
        'inurl:".php?catid=" intext:"Buy Now"',
        'inurl:".php?catid=" intext:"add to cart"',
        'inurl:".php?categoryid=" intext:"Buy Now"',
        'inurl:".php?catid=" intext:"boutique"',
        'inurl:".php?catid=" intext:"/store/"',
        'inurl:".php?catid=" intext:"/shop/"',
        'inurl:".php?catid=" intext:"Toys"',
        'inurl:".php?categoryid="',
        'inurl:".php?categoryid=" intext:"View cart"',
        'inurl:".php?categoryid=" intext:"Toys"',
        'inurl:".php?categoryid=" intext:"add to cart"',
        'inurl:".php?categoryid=" intext:"shopping"',
        'inurl:".php?categoryid=" intext:"boutique"',
        'inurl:".php?categoryid=" intext:"/store/"',
        'inurl:".php?categoryid=" intext:"/shop/"',
        'inurl:".php?pid="',
        'inurl:".php?pid=" intext:"toys"',
        'inurl:".php?pid=" intext:"shopping"',
        'inurl:".php?pid=" intext:"add to cart"',
        'inurl:".php?pid=" intext:"Buy Now"',
        'inurl:".php?pid=" intext:"View cart"',
        'inurl:".php?pid=" intext:"boutique"',
        'inurl:".php?pid=" intext:"/store/"',
        'inurl:".php?pid=" intext:"/shop/"',
        'inurl:".php?prodid=" intext:"/shop/"',
        'inurl:".php?prodid="',
        'inurl:".php?prodid=" intext:"shopping"',
        'inurl:".php?prodid=" intext:"add to cart"',
        'inurl:".php?prodid=" intext:"Buy Now"',
        'inurl:".php?prodid=" intext:"View cart"',
        'inurl:".php?prodid=" intext:"boutique"',
        'inurl:".php?prodid=" intext:"/store/"',
        'inurl:".php?productid=" intext:"/store/"',
        'inurl:".php?prodid=" intext:"toys"',
        'inurl:".php?productid="',
        'inurl:".php?productid=" intext:"shopping"',
        'inurl:".php?productid=" intext:"add to cart"',
        'inurl:".php?productid=" intext:"Buy Now"',
        'inurl:".php?productid=" intext:"View cart"',
        'inurl:".php?productid=" intext:"boutique"',
        'inurl:".php?product=" intext:"boutique"',
        'inurl:".php?productid=" intext:"/shop/"',
        'inurl:".php?productid=" intext:"Toys"',
        'inurl:".php?product="',
        'inurl:".php?product=" intext:"shopping"',
        'inurl:".php?product=" intext:"add to cart"',
        'inurl:".php?product=" intext:"Buy Now"',
        'inurl:".php?product=" intext:"View cart"',
        'inurl:".php?product=" intext:"/store/"',
        'inurl:".php?products=" intext:"boutique"',
        'inurl:".php?product=" intext:"/shop/"',
        'inurl:".php?product=" intext:"toys"',
        'inurl:".php?product=" intext:"DVD"',
        'inurl:".php?products="',
        'inurl:".php?products=" intext:"shopping"',
        'inurl:".php?products=" intext:"add to cart"',
        'inurl:".php?products=" intext:"Buy Now"',
        'inurl:".php?products=" intext:"View cart"',
        'inurl:".php?products=" intext:"/store/"',
        'inurl:".php?proid=" intext:"/store/"',
        'inurl:".php?products=" intext:"/shop/"',
        'inurl:".php?products=" intext:"toys"',
        'inurl:".php?products=" intext:"DVD"',
        'inurl:".php?proid="',
        'inurl:".php?proid=" intext:"shopping"',
        'inurl:".php?proid=" intext:"add to cart"',
        'inurl:".php?proid=" intext:"Buy Now"',
        'inurl:".php?proid=" intext:"View cart"',
        'inurl:".php?proid=" intext:"boutique"',
        'inurl:".php?proid=" intext:"/shop/"',
        'inurl:".php?itemid="',
        'inurl:".php?proid=" intext:"toys"',
        'inurl:".php?shopid="',
        'inurl:".php?shopid=" intext:"shopping"',
        'inurl:".php?shopid=" intext:"add to cart"',
        'inurl:".php?shopid=" intext:"Buy Now"',
        'inurl:".php?shopid=" intext:"View cart"',
        'inurl:".php?shopid=" intext:"boutique"',
        'inurl:".php?shopid=" intext:"/store/"',
        'inurl:".php?shopid=" intext:"/shop/"',
        'inurl:".php?shopid=" intext:"Toys"',
        'inurl:".php?orderid=" intext:"add to cart"',
        'inurl:".php?itemid=" intext:"shopping"',
        'inurl:".php?itemid=" intext:"add to cart"',
        'inurl:".php?itemid=" intext:"Buy Now"',
        'inurl:".php?itemid=" intext:"View cart"',
        'inurl:".php?itemid=" intext:"boutique"',
        'inurl:".php?itemid=" intext:"/shop/"',
        'inurl:".php?itemid=" intext:"/store/"',
        'inurl:".php?itemid=" intext:"Toys"',
        'inurl:".php?orderid="',
        'inurl:".php?orderid=" intext:"shopping"',
        'inurl:".php?catalogId=" intext:"View cart"',
        'inurl:".php?orderid=" intext:"Buy Now"',
        'inurl:".php?orderid=" intext:"View cart"',
        'inurl:".php?orderid=" intext:"boutique"',
        'inurl:".php?orderid=" intext:"/shop/"',
        'inurl:".php?orderid=" intext:"/store/"',
        'inurl:".php?orderid=" intext:"Toys"',
        'inurl:".php?catalogId="',
        'inurl:".php?catalogId=" intext:"shopping"',
        'inurl:".php?catalogId=" intext:"add to cart"',
        'inurl:".php?catalogId=" intext:"Buy Now"',
        'inurl:".php?aid=" intext:"/store/"',
        'inurl:".php?catalogId=" intext:"boutique"',
        'inurl:".php?catalogId=" intext:"/shop/"',
        'inurl:".php?catalogId=" intext:"/store/"',
        'inurl:".php?catalogId=" intext:"Toys"',
        'inurl:".php?aid="',
        'inurl:".php?aid=" intext:"shopping"',
        'inurl:".php?aid=" intext:"add to cart"',
        'inurl:".php?aid=" intext:"Buy Now"',
        'inurl:".php?aid=" intext:"View cart"',
        'inurl:".php?aid=" intext:"boutique"',
        'inurl:".php?aid=" intext:"/shop/"',
        'inurl:".php?articleid=" intext:"add to cart"',
        'inurl:".php?aid=" intext:"toys"',
        'inurl:".php?artid="',
        'inurl:".php?artid=" intext:"shopping"',
        'inurl:".php?artid=" intext:"add to cart"',
        'inurl:".php?artid=" intext:"Buy Now"',
        'inurl:".php?artid=" intext:"View cart"',
        'inurl:".php?artid=" intext:"boutique"',
        'inurl:".php?artid=" intext:"/shop/"',
        'inurl:".php?artid=" intext:"/store/"',
        'inurl:".php?artid=" intext:"toys"',
        'inurl:".php?articleid="',
        'inurl:".php?articleid=" intext:"shopping"',
        'index.cfm?pageid=',
        'inurl:".php?articleid=" intext:"Buy Now"',
        'inurl:".php?articleid=" intext:"View cart"',
        'inurl:".php?articleid=" intext:"boutique"',
        'inurl:".php?articleid=" intext:"/shop/"',
        'inurl:".php?articleid=" intext:"/store/"',
        'inurl:".php?articleid=" intext:"toys"',
        'cat.asp?cat=',
        'productlist.asp?catalogid=',
        'Category.asp?category_id=',
        'Category.cfm?category_id=',
        'category.asp?cid=',
        'category.cfm?cid=',
        'category.asp?cat=',
        'category.cfm?cat=',
        'category.asp?id=',
        'category.asp?catid=',
        'search_results.cfm?txtsearchParamCat=',
        'Category.asp?c=',
        'Category.cfm?c=',
        'productlist.cfm?catalogid=',
        'productlist.asp?catalogid=',
        'viewitem.asp?catalogid=',
        'viewitem.cfm?catalogid=',
        'catalog.cfm?catalogId=',
        'catalog.asp?catalogId=',
        'department.cfm?dept=',
        'department.asp?dept=',
        'itemdetails.cfm?catalogId=',
        'itemdetails.asp?catalogId=',
        'product_detail.asp?catalogid=',
        'product_detail.cfm?catalogid=',
        'product_list.asp?catalogid=',
        'product_list.cfm?catalogid=',
        'ShowProduct.cfm?CatID=',
        'ShowProduct.asp?CatID=',
        'displayproducts.cfm?category_id=',
        'search_results.asp?txtsearchParamCat=',
        'store-page.cfm?go=',
        'store-page.asp?go=',
        'Detail.cfm?CatalogID=',
        'Detail.asp?CatalogID=',
        'browse.cfm?category_id=',
        'view.cfm?category_id=',
        'products.cfm?category_id=',
        'index.cfm?Category_ID=',
        'detail.cfm?id=',
        'category.cfm?id=',
        'showitems.cfm?category_id=',
        'ViewProduct.asp?PID=',
        'ViewProduct.cfm?PID=',
        'shopdisplayproducts.asp?catalogid=',
        'shopdisplayproducts.cfn?catalogid=',
        'displayproducts.asp?category_id=',
        'product.php?product_id=',
        'DisplayProducts.asp?prodcat=',
        'DisplayProducts.cfm?prodcat=x',
        'productDetail.cfm?ProductID=',
        'products.php?subcat_id=',
        'showitem.cfm?id=21',
        'productdetail.cfm?pid=',
        'default.cfm?action=46',
        'products_accessories.asp?CatId=',
        'Store_ViewProducts.asp?Cat=',
        'category.cfm?categoryID=',
        'category.asp?category=',
        'tepeecart.cfm?shopid=',
        'view_product.asp?productID=',
        'ProductDetails.asp?prdId=12',
        'products.cfm?ID=',
        'detail.asp?product_id=',
        'product_detail.asp?product_id=',
        'view_product.cfm?productID=',
        'displayproducts.cfm?id=',
        'product_details.asp?prodid=',
        'shopdisplayproducts.cfm?id=',
        'paypal.php?id= site:de site:us',
        'paypal.php?coID= site:de site:us',
        'paypal.php?num= site:de site:us',
        'paypal.php?avd= site:de site:us',
        'paypal.php?category= site:de site:us',
        'paypal.php?file= site:de site:us',
        'paypal.php?cat= site:de site:us',
        'paypal.php?include= site:de site:us',
        'paypal.php?pageid= site:de site:us',
        'paypal.php?page_id= site:de site:us',
        'paypal.php?param= site:de site:us',
        'paypal.php?panel= site:de site:us',
        'paypal.php?sec= site:de site:us',
        'paypal.php?do=part&id= site:de site:us',
        'paypal.php?item_id= site:de site:us',
        'paypal.php?client= site:de site:us',
        'paypal.php?co_id= site:de site:us',
        'paypal.php?language= site:de site:us',
        'paypal.php?currency= site:de site:us',
        'paypal.php?checkout= site:de site:us',
        'paypal.php?cid= site:de site:us',
        'paypal.php?products_name= site:de site:us',
        'paypal.php?product_id= site:de site:us',
        'paypal.php?step= site:de site:us',
        'paypal.php?topicid= site:de site:us',
        'paypal.php?topic_id= site:de site:us',
        'paypal.php?id_category= site:de site:us',
        'paypal.php?tid= site:de site:us',
        'paypal.php?fid= site:de site:us',
        'user.php?id= site:us',
        'user.bmlid= site:us',
        'user.jsp?id= site:us',
        'user.cfm?id= site:us',
        'user.htlm?id= site:us',
        'user.php?CategoryID= site:us',
        'user.php?shopID= site:us',
        'user.php?shippingID= site:us',
        'user.php?infoID= site:us',
        'user.php?custID= site:us',
        'user.php?webID= site:us',
        'user.php?cad= site:us',
        'intitle:"human".php?id= title:education site:us',
        'intitle:"Publications".php?id= title:login site:us',
        'intitle:"project".php?id= title:join site:us',
        'intitle:"trade".php?id= title:orders site:us',
        'intitle:"commodity".php?id= title:join site:us',
        'intitle:"promotion".php?id= title:news site:us',
        'intitle:"center".php?id= title:join site:us',
        'intitle:"community".php?id= title:join site:us',
        'intitle:"marketing".php?id= title:join site:us',
        'intitle:"membership".php?id= title:info site:us',
        'intitle:"mountaineer".php?id= title:join site:us',
        'intitle:"bike".php?id= title:payment site:us',
        'intitle:"management".php?id= title:business site:us',
        'intitle:"insurance".php?id= title:join site:us',
        'inurl:business.php?cid= title:join site:us',
        'intitle:"company".php?id= title:sign in site:us',
        'intitle:"store".php?id= title:cart site:us',
        'intitle:"career".php?lang=en title:join site:us',
        'intitle:"jobs".php?lang=en intext:business site:us',
        'inurl:client.php?id= title:login site:us',
        'intitle:"event"product".php?id= title:login site:us',
        'intitle:"search".php?id= title:login site:us',
        'inurl:"content"index".php?id= title:login site:us',
        'intitle:"news"item".php?id= title:login site:us',
        'intitle:"equipment"buy".php?id= title:login site:us',
        'intitle:"action"buy".php?id= title:login site:us',
        'intitle:"action"product".php?id= title:login site:us',
        'intitle:"store".php?id= title:paypal site:us',
        'intitle:"home"shipping".php?id= title:login site:us',
        'inurl:activity.php?id= title:customer site:us',
        'inurl:market.php?id= title:customer site:us',
        'intitle:"campaigns".php?id= title:join site:us',
        'inurl:"store".php?cPath= title:login site:us',
        'intitle:"bussines"detail".php?id= title:join site:us',
        'intitle:"projects"view".php?id= title:join site:us',
        'intitle:"contact"us".php?page_id= title:shop site:us',
        'intitle:"news"song".php?id= title:login site:us',
        'inurl:"index".asp?id= title:login site:us',
        'inurl:newsone.php?cid= title:shop site:us',
        'inurl:showimg.php?cid= title:shop site:us',
        'intitle:"guitar".php?id= title:login site:us',
        'inurl:top10.php?cat= title:paypal site:us',
        'inurl:study.php?id= title:paypal site:us',
        'inurl:buy.php?category= title:paypal site:us',
        'inurl:join.php?id= title:business site:us',
        'inurl:show_item.php?id= title:paypal site:us',
        'inurl:store_item.php?id= title:paypal site:us',
        'inurl:Viewproduct.cfm?id= title:paypal site:us',
        'inurl:".php?cat="+intext:"Paypal" site:us',
        'inurl:search_product.php?id= title:payment site:us',
        'inurl:shop_product.php?id= title:paypal site:us',
        'inurl:department.php?id= title:bussiness site:us',
        'intitle:"clothing".php?id= title:login site:us',
        'intitle:"grooming".php?id= title:login site:us',
        'intitle:"Bags".php?id= title:login site:us',
        'inurl:product.php?cat= title:login site:us',
        'inurl:client.php?id= title:login site:us',
        'inurl:article.php?page_id= title:paypal site:us',
        'inurl:category.php?id= title:login page:2014 site:us',
        'inurl:viewItem.php?id= title:login site:us',
        'inurl:viewArticles.php?id= title:login site:us',
        'inurl:job.php?id= title:login site:us',
        'inurl:people.php?id= title:login site:us',
        'inurl:php?id= site:fr title:buy site:us',
        'inurl:Art.php?id= title:login site:us',
        'inurl:collection.php?id= title:login site:us',
        'inurl:song.php?id= title:login site:us',
        'inurl:play.php?id= title:paypal site:us',
        'inurl:staticpage.php?id= intext:paypal site:us',
        'inurl:showinfo.php?id= title:paypal site:us',
        'inurl:library.php?id= title:login site:us',
        'inurl:interior.php?id= title:login site:us',
        'inurl:view.php?id= title:login site:us',
        'inurl:release.php?id= title:login site:us',
        'inurl:podcast.php?id= title:login site:us',
        'inurl:news-event.php?id= title:login site:us',
        'inurl:articles.php?id= title:login page:2014 site:us',
        'inurl:view.php?id= title:login page:2014 site:us',
        'inurl:view_product.php?id= title:login paypal site:us',
        'inurl:item_list.php?cat_id= title:login site:us',
        'inurl:.php?cat_id= title:login site:us',
        'inurl:.php?categoryID= title:login site:us',
        'inurl:event_info.php?id= title:login site:us',
        'inurl:product_details.php?product_id= title:login site:us',
        'inurl:/files/prod_detail.php?lang= title:login site:us',
        'inurl:apartments.php?id= title:login site:us',
        'inurl:product_info.php?products_id= title:login site:us',
        'inurl:"Browse_Item_Details.asp?Store_Id=" title:login site:us',
        'intext:contact us .php?id= title:login site:us',
        'intext:gift card .php?id= title:login site:us',
        'intext:business .php?id= title:login site:us',
        'intext:"buy"clothing" .php?id= title:login site:us',
        'intext:"payment" .php?id= title:login site:us',
        'intext:"crystal" .php?id= title:login site:us',
        'intext:"styles" .php?id= title:login site:us',
        'intext:"kids"fashion" .php?id= title:login site:us',
        'intext:"international"delivery" .php?id= title:login site:us',
        'intext:"boot"up" .php?id= title:login site:us',
        'intext:"international"business" .php?id= title:join site:us',
        'intext:"magazine" .php?id= title:login site:us',
        'intext:shipping .php?id= title:login site:us',
        'intext:2014 .php?id= title:login site:us',
        'intext:booking .php?id= title:login site:us',
        'intext:Buy gift certificates .php?id= title:login site:us',
        'intext:business .php?id= 2014 site:us',
        'intext:news event.php?id= 2014 site:us',
        'intext:delivery item.php?id= 2014 site:us',
        'intext:buy .php?id= title:login site:uk site:us',
        'intext:business company.php?id= title:login site:us',
        'intext:business detail.php?id= title:login site:us',
        'intext:$100 detail.php?cat_id= title:login site:us',
        'intext:$100 category.php?cat_id= title:login site:us',
        'intext:size product.php?id= title:login site:us',
        'intext:about .php?id= title:login site:us',
        'intext:iron .php?id= title:login site:us',
        'intext:job .php?id= title:login site:us',
        'intext:action .php?id= title:login site:us',
        'intext:Copyright © 2014 .php?id= title:login site:us',
        'intext:deal .php?id= title:login site:us',
        'intext:seller .php?id= title:login site:us',
        'intext:support .php?id= title:login site:us',
        'intext:jewel .php?id= title:login site:us',
        'intext:jewelry .php?id= title:login site:us',
        'intext:goods .php?id= title:login site:us',
        'intext:drug .php?id= title:login site:us',
        'intext:milk .php?id= title:login site:us',
        'intext:everything .php?id= title:login site:us',
        'inurl:"php=id" +site:.uk intext:paypal site:us',
        'inurl:content"php=id" +site:.uk intext:paypal site:us',
        'inurl:Item"php=id" +site:.uk intext:login site:us',
        'site:uk item.asp?itemid= site:us',
        'intitle:"store".php?id= title:login site:us',
        'inurl:"index".php?id= title:login 2014 site:us',
        'intitle:"compay".php?id= title:login site:us',
        'inurl:productdetail.php?id= title:login 2014 site:us',
        'inurl:staff_id= title:login 2014 site:us',
        'inurl:Services.php?ID= title:login 2014 site:us',
        'inurl:events.php?id= title:login 2014 site:us',
        'inurl:products.php?id= title:login 2014 site:us',
        'inurl:boutique.php?id= title:login 2014 site:us',
        'inurl:article.php?id= title:login 2014 site:us',
        'inurl:social.php?id= title:login 2014 site:us',
        'inurl:catalog.php?cat_id= title:login 2014 site:us',
        'inurl:products.php?cat= title:login 2014 site:us',
        'inurl:show.php?id= title:login 2014 site:us',
        'inurl:content.php?id= title:login 2014 site:us',
        'inurl:main.php?id= title:login 2014 site:us',
        'inurl:".php?id=" intext:"View cart" 2014 site:us',
        'inurl:".php?cid=" intext:"Buy Now" 2014 site:us',
        'inurl:"php?id=" intext:"boutique" title:paypal site:us',
        'inurl:".php?id=" intext"my account" title:shop site:us',
        'inurl:".php?id=" intext"hoddies" title:login site:us',
        'inurl:".php?id=" intext"beauty" title:login site:us',
        'inurl:".php?id=" intext"perfume" title:login site:us',
        'inurl:".php?id=" intext"merchandise" title:login site:us',
        'inurl:"php?id=" intext:"couponcode" site:us',
        'inurl:"php?id=" intext:"gilets" 2014 site:us',
        'inurl:"php?id=" intext:"capes" 2014 site:us',
        'inurl:"php?id=" intext:"cardigans" title:login 2014 site:us',
        'inurl:"php?id=" intext:"goats" title:login 2014 site:us',
        'inurl:"php?id=" intext:"knitwear" title:login 2014 site:us',
        'inurl:".php?id=" intext:"components" title:login 2014 site:us',
        'inurl:".php?id=" intext:"batteries" title:login 2014 site:us',
        'inurl:".php?id=" intext:"apple" title:login 2014 site:us',
        'inurl:".php?id=" intext:"electronics" title:login 2014 site:us',
        'inurl:".php?id=" intext:"telescopes" title:login 2014 site:us',
        'inurl:".php?id=" intext:"watches" title:login 2014 site:us',
        'inurl:".php?id=" intext:"Drum" title:login 2014 site:us',
        'inurl:".php?id=" intext:"jewelry" title:login 2014 site:us',
        'inurl:".php?id=" intext:"membership" title:login 2014 site:us',
        'inurl:".php?id=" intext:"furniture" title:login 2014 site:us',
        'inurl:".php?id=" intext:"careers" title:login 2014 site:us',
        'inurl:".php?sub_cat=" intext:"equipment" site:us',
        'inurl:".php?sub_id=" intext:"products" 2014 site:us',
        'inurl:".php?sub_id=" intext:"buy" 2014 site:us',
        'inurl:".php?sub_id=" intext:"event" 2014 site:us',
        'inurl:.php?business_profile= intext:"login" 2014 site:us',
        'inurl:".php?pgID=" intext:"bathroom" 2014 site:us',
        'inurl:".asp?ID=" intext:"housekeeping" 2014 site:us',
        'inurl:".asp?ID=" intext:"boots" 2014 site:us',
        'inurl:".php?ID=" intext:"boots" 2014 site:us',
        'inurl:".php?ID=" intext:"collection" 2014 site:us',
        'inurl:".php?ID=" intext:"customer" 2014 site:us',
        'inurl:".php?ID=" intext:"members" 2014 site:us',
        'inurl:".php?ID=" intext:"join" 2014 site:us',
        'inurl:".php?ID=" intext:"business" 2014 site:us',
        'inurl:".php?ID=" intext:"DVD" 2014 site:us',
        'inurl:".php?ID=" intext:"checkout" 2014 site:us',
        'inurl:".php?ID=" intext:"boutiques" 2014 site:us',
        'inurl:"php?ID=" intext:"login" 2014 site:us',
        'inurl:"php?ID=" intext:"login" site:uk 2014 site:us',
        'inurl:"php?PID=" intext:"product" 2014 site:us',
        'intext:"buy" .php?id= title:"login" 2014 site:us',
        'intext:"product" .php?id= title:login 2014 site:uk site:us',
        'intext:"clothing" .php?id= title:"login" 2014 site:us',
        'intext:"£99" .php?id= title:"login" 2014 site:us',
        'intext:"shop" .php?id= title:"login" 2014 site:us',
        'inurl:"reviews".php?id= title:shop 2014 site:us',
        'inurl:"articles".php?id= title:login 2014 site:us',
        'inurl:ancillary.asp?ID= title:shop site:us',
        'inurl:basket.asp?id= title:login site:us',
        'inurl:buy.asp?bookid= title:login site:us',
        'inurl:"catalog_item".php?id= title:login site:us',
        'inurl:List.asp?CatID= title:login 2014 site:us',
        'inurl:product.php?item_id= intext:login 2014 site:us',
        'productDetails.php?idProduct= title:login 2014 site:us',
        'intext:"store" .php?id= title:login 2014 site:us',
        'intext:"men"women" .php?id= title:"login" 2014 site:us',
        'intext:"news"item" .php?id= title:"login" 2014 site:us',
        'intext:"stores" .php?cid= title:"paypal" 2014 site:us',
        'shop/category.asp?catid= title:login 2014 site:us',
        'intext:"customers" .cfm?id= title:login site:us',
        'intext:"doctor" .php?cid= title:login 2014 site:us',
        'intitle:"cosmetics".php?id= intext:login site:us',
        'inurl:"category".php?id= intext:login 2014 site:us',
        'inurl:"view_item".php?id= intext:login 2014 site:us',
        'intext:"watches" .php?category= title:login 2014 site:us',
        'intext:"jewelry" .php?item= title:login 2014 site:us',
        'intext:"jewelry" .php?cat= title:login 2014 site:us',
        'intext:"category" .php?cat= title:login 2014 site:us',
        'intext:"services" .php?cat= title:login 2014 site:us',
        'intext:"makeup" .php?cid= title:login 2014 site:us',
        'inurl:/reservations.php?id= title:login 2014 site:us',
        'inurl:/eventdetails.php?*= title:login 2014 site:us',
        'inurl:/*.php?id= title:login 2014 site:us',
        'inurl:/Content.asp?id= title:login 2014 site:us',
        'inurl:/prodotti.php?id= title:login 2014 site:us',
        'inurl:/Details.asp?id= title:shop 2014 site:us',
        'inurl:/category.asp?id= title:shop 2014 site:us',
        'intitle:"fashion" .php?id= intext:login 2014 site:us',
        'intitle:"gift" .php?id= intext:login 2014 site:us',
        'intitle:"market" .php?id= intext:login 2014 site:sg site:us',
        'intitle:"market" .php?id= intext:login 2014 site:uk site:us',
        'intitle:"market" .php?id= intext:login 2014 site:us',
        'intitle:"singapore" .php?id= intext:login 2014 site:us',
        'intitle:"10%" .php?id= intext:login 2014 site:us',
        'intitle:"20%" .php?id= intext:login 2014 site:us',
        'inurl:"info".php?product_info= intext:login site:us',
        'inurl:"storefront".php?cat= intext:login site:us',
        'inurl:"payment".php?cat= intext:login site:us',
        'inurl:"view_author".php?id= intext:login site:us',
        'inurl:"More_Details".php?id= intext:login site:us',
        'inurl:"store".php?ItemID= intext:login site:us',
        'inurl:events/index.php?id= intext:login site:us'
    ]
};

// 5. Operators Dictionary Map (Bounty & SQLi)
const OPERATORS_MAP = {
    github: [
        { op: 'filename:', nameEn: 'File Name', nameAr: 'اسم الملف', descEn: 'Match specific filename', descAr: 'البحث عن ملف باسمه تمامًا', hoverEn: 'Finds exact file names in repositories, e.g. filename:id_rsa', hoverAr: 'يبحث عن اسم ملف محدد، مثال: filename:wp-config.php', placeholder: 'e.g. id_rsa' },
        { op: 'path:', nameEn: 'Repo Path', nameAr: 'مسار المجلد', descEn: 'Match files in specific folder path', descAr: 'البحث عن ملفات داخل مجلد معين', hoverEn: 'Finds files residing inside a specified folder, e.g. path:config', hoverAr: 'يبحث داخل مجلد، مثال: path:src/config', placeholder: 'e.g. config' },
        { op: 'extension:', nameEn: 'File Extension', nameAr: 'امتداد الكود', descEn: 'Filter by programming code extension', descAr: 'تصفية النتائج حسب امتداد الكود', hoverEn: 'Filters files by code ending, e.g. extension:json', hoverAr: 'يصفي حسب الامتداد، مثال: extension:sql', placeholder: 'e.g. json, sql' },
        { op: 'language:', nameEn: 'Language Filter', nameAr: 'لغة البرمجة', descEn: 'Filter repositories by language', descAr: 'تصفية المستودعات حسب لغة البرمجة', hoverEn: 'Filter by programming language code. e.g. language:python', hoverAr: 'يصفي بلغة الكود، مثال: language:php', placeholder: 'e.g. php' },
        { op: 'stars:', nameEn: 'Repo Stars', nameAr: 'النجوم المكتسبة', descEn: 'Filter by star count range', descAr: 'تصفية حسب عدد نجوم المستودع', hoverEn: 'Find repositories with specific star counts. e.g. stars:>500', hoverAr: 'مستودعات بعدد نجوم معين، مثال: stars:>100', placeholder: 'e.g. >100' }
    ],
    google: [
        { op: 'intitle:', nameEn: 'Page Title', nameAr: 'عنوان الصفحة', descEn: 'Look for words in page title', descAr: 'البحث عن كلمات في عنوان الصفحة', hoverEn: 'Matches keywords in page title. e.g. intitle:"index of"', hoverAr: 'الكلمات داخل عنوان الصفحة في التبويب', placeholder: 'e.g. "index of"' },
        { op: 'inurl:', nameEn: 'URL Path', nameAr: 'مسار الرابط', descEn: 'Filter by text inside URL path', descAr: 'البحث عن كلمات داخل مسار الرابط', hoverEn: 'Matches keywords inside URL. e.g. inurl:security.txt', hoverAr: 'الروابط التي تحتوي على المعلم المحدد', placeholder: 'e.g. security.txt' },
        { op: 'intext:', nameEn: 'Body Text', nameAr: 'محتوى الصفحة', descEn: 'Require specific text inside body', descAr: 'تطلب وجود كلمة داخل جسم الصفحة', hoverEn: 'Matches words inside visible page text. e.g. intext:bounty', hoverAr: 'يبحث عن الكلمات داخل المحتوى النصي', placeholder: 'e.g. bounty' },
        { op: 'allintext:', nameEn: 'All Body Text', nameAr: 'كافة كلمات المحتوى', descEn: 'All keywords must appear in body text', descAr: 'يُلزم وجود كافة الكلمات المدخلة في نص الصفحة', hoverEn: 'All entered words must appear in the page body. e.g. allintext:admin password login', hoverAr: 'جميع الكلمات يجب أن تتواجد في محتوى الصفحة معًا', placeholder: 'e.g. admin password login' },
        { op: 'allintitle:', nameEn: 'All Title Words', nameAr: 'كافة كلمات العنوان', descEn: 'All keywords must appear in page title', descAr: 'يُلزم وجود جميع الكلمات في عنوان الصفحة', hoverEn: 'All entered words must be in the page title. e.g. allintitle:admin panel login', hoverAr: 'جميع الكلمات في عنوان الصفحة', placeholder: 'e.g. admin panel login' },
        { op: 'allinurl:', nameEn: 'All URL Parts', nameAr: 'كافة أجزاء الرابط', descEn: 'All keywords must appear in the URL', descAr: 'يُلزم وجود جميع الكلمات في الرابط', hoverEn: 'All entered words must appear in the URL. e.g. allinurl:php id login', hoverAr: 'جميع الكلمات يجب أن تكون في الرابط', placeholder: 'e.g. php id login' },
        { op: 'filetype:', nameEn: 'File Extension', nameAr: 'نوع/امتداد الملف', descEn: 'Filter by exact file extension', descAr: 'فلترة النتائج بامتداد ملف محدد', hoverEn: 'Finds specific file types. e.g. filetype:sql or filetype:env', hoverAr: 'البحث بامتداد ملف محدد، مثال: filetype:sql', placeholder: 'e.g. sql, pdf, env, txt' },
        { op: 'site:', nameEn: 'Site Restriction', nameAr: 'تقييد الموقع', descEn: 'Restrict results to a specific domain', descAr: 'تقييد النتائج لموقع أو نطاق معين', hoverEn: 'Limits results to a specific website. e.g. site:github.com', hoverAr: 'يحدد النطاق المستهدف، مثال: site:example.com', placeholder: 'e.g. github.com' },
        { op: 'ext:', nameEn: 'Extension (ext:)', nameAr: 'الامتداد (ext:)', descEn: 'Alias for filetype: filter', descAr: 'مرادف لـ filetype لفلترة الامتداد', hoverEn: 'Same as filetype:. e.g. ext:txt', hoverAr: 'مرادف لـ filetype، مثال: ext:txt', placeholder: 'e.g. txt, log, bak' },
        { op: 'cache:', nameEn: 'Cached Page', nameAr: 'النسخة المخزنة', descEn: 'View Google cached version of a URL', descAr: 'عرض النسخة المخزنة من صفحة', hoverEn: 'Shows cached version of a page. e.g. cache:example.com', hoverAr: 'النسخة المحفوظة في ذاكرة Google', placeholder: 'e.g. example.com' },
        { op: 'link:', nameEn: 'Backlinks', nameAr: 'الروابط الخلفية', descEn: 'Find pages linking to a specific URL', descAr: 'البحث عن صفحات ترتبط بموقع معين', hoverEn: 'Finds pages that link to a URL. e.g. link:example.com', hoverAr: 'الصفحات التي تحتوي رابطًا للموقع المحدد', placeholder: 'e.g. example.com' },
        { op: 'related:', nameEn: 'Related Sites', nameAr: 'مواقع مشابهة', descEn: 'Find websites similar to a given URL', descAr: 'البحث عن مواقع مشابهة لرابط معين', hoverEn: 'Shows sites related to specified URL. e.g. related:example.com', hoverAr: 'المواقع المشابهة للموقع المحدد', placeholder: 'e.g. example.com' },
        { op: 'info:', nameEn: 'Page Info', nameAr: 'معلومات الصفحة', descEn: "Display Google's information about a URL", descAr: 'عرض معلومات Google عن صفحة معينة', hoverEn: 'Shows info Google has about a page. e.g. info:example.com', hoverAr: 'معلومات Google عن صفحة', placeholder: 'e.g. example.com' },
        { op: 'define:', nameEn: 'Define Word', nameAr: 'تعريف كلمة', descEn: 'Get definition of a word or phrase', descAr: 'الحصول على تعريف كلمة أو جملة', hoverEn: 'Shows definition of a word. e.g. define:vulnerability', hoverAr: 'تعريف كلمة أو مصطلح', placeholder: 'e.g. vulnerability' },
        { op: 'AROUND(N):', nameEn: 'Proximity Search', nameAr: 'البحث بالقرب', descEn: 'Find words within N words of each other', descAr: 'البحث عن كلمتين على مسافة N كلمة من بعضهما', hoverEn: 'Finds terms near each other. e.g. security AROUND(3) breach', hoverAr: 'البحث عن كلمتين قريبتين من بعضهما بعدد كلمات محدد', placeholder: 'e.g. security AROUND(3) breach' }
    ],
    duckduckgo: [
        { op: 'intitle:', nameEn: 'Page Title', nameAr: 'عنوان الصفحة', descEn: 'Matches words in page title', descAr: 'البحث في عنوان الصفحة', placeholder: 'e.g. "index of"' },
        { op: 'inurl:', nameEn: 'URL Path', nameAr: 'مسار الرابط', descEn: 'Matches words in URL', descAr: 'البحث في مسار الرابط', placeholder: 'e.g. security.txt' },
        { op: 'allintext:', nameEn: 'All Body Text', nameAr: 'كافة كلمات المحتوى', descEn: 'All keywords must appear in body', descAr: 'جميع الكلمات في محتوى الصفحة', placeholder: 'e.g. admin password' },
        { op: 'filetype:', nameEn: 'File Extension', nameAr: 'نوع الملف', descEn: 'Filter by file extension', descAr: 'فلترة بامتداد ملف', placeholder: 'e.g. pdf, sql' }
    ],
    bing: [
        { op: 'intitle:', nameEn: 'Page Title', nameAr: 'عنوان الصفحة', descEn: 'Matches words in page title', descAr: 'البحث في عنوان الصفحة', placeholder: 'e.g. "index of"' },
        { op: 'inurl:', nameEn: 'URL Path', nameAr: 'مسار الرابط', descEn: 'Matches words in URL', descAr: 'البحث في مسار الرابط', placeholder: 'e.g. admin' },
        { op: 'allintext:', nameEn: 'All Body Text', nameAr: 'كافة كلمات المحتوى', descEn: 'All keywords must appear in body', descAr: 'جميع الكلمات في محتوى الصفحة', placeholder: 'e.g. password login' },
        { op: 'filetype:', nameEn: 'File Extension', nameAr: 'نوع الملف', descEn: 'Filter by file extension', descAr: 'فلترة بامتداد ملف', placeholder: 'e.g. xlsx, docx' }
    ],
    shodan: [
        { op: 'http.title:', nameEn: 'HTTP Title', nameAr: 'عنوان HTTP', descEn: 'Match device HTTP page title', descAr: 'مطابقة عنوان صفحة الجهاز', hoverEn: 'Matches HTTP banner title. e.g. http.title:"dashboard"', hoverAr: 'عنوان صفحة الويب المستجيب', placeholder: 'e.g. "dashboard"' },
        { op: 'port:', nameEn: 'Port Number', nameAr: 'رقم المنفذ', descEn: 'Target open network port', descAr: 'استهداف منفذ شبكي مفتوح', hoverEn: 'Filters by open port number. e.g. port:22', hoverAr: 'المنفذ الشبكي المفتوح', placeholder: 'e.g. 21, 22, 8080' },
        { op: 'product:', nameEn: 'Product Banner', nameAr: 'بانر المنتج', descEn: 'Match server product banner', descAr: 'مطابقة بانر برمجية الخادم', hoverEn: 'Filters by server software. e.g. product:Apache', hoverAr: 'اسم برمجية الخادم المشغّل', placeholder: 'e.g. Apache, nginx' },
        { op: 'country:', nameEn: 'Country Code', nameAr: 'رمز الدولة', descEn: 'Filter by country ISO code', descAr: 'فلترة النتائج حسب رمز الدولة', hoverEn: 'Filters by country code. e.g. country:US', hoverAr: 'رمز الدولة بالمعيار ISO', placeholder: 'e.g. US, DE, NL' },
        { op: 'org:', nameEn: 'Organization', nameAr: 'المنظمة/الموفر', descEn: 'Filter by ISP or organization owner', descAr: 'فلترة بالمنظمة أو مزود الخدمة', hoverEn: 'Filters by org/ISP. e.g. org:"Amazon.com"', hoverAr: 'المنظمة أو شركة الاستضافة', placeholder: 'e.g. "Amazon.com"' },
        { op: 'os:', nameEn: 'Operating System', nameAr: 'نظام التشغيل', descEn: 'Filter by device OS', descAr: 'فلترة حسب نظام التشغيل', hoverEn: 'Filters by OS. e.g. os:"Windows Server 2019"', hoverAr: 'نظام التشغيل للجهاز', placeholder: 'e.g. "Windows Server"' },
        { op: 'device:', nameEn: 'Device Type', nameAr: 'نوع الجهاز', descEn: 'Filter by device category type', descAr: 'فلترة حسب نوع الجهاز', hoverEn: 'Filters by device type. e.g. device:webcam', hoverAr: 'نوع الجهاز المتصل بالشبكة', placeholder: 'e.g. webcam, router' },
        { op: 'server:', nameEn: 'Server Header', nameAr: 'رأس الخادم', descEn: 'Match server HTTP header value', descAr: 'مطابقة قيمة رأس الخادم HTTP', hoverEn: 'Matches server header. e.g. server:GoAhead-Webs', hoverAr: 'برمجية الخادم في رأس HTTP', placeholder: 'e.g. GoAhead-Webs' }
    ]
};

// 6. Scope Presets (Always active in Step 4)
const SCOPE_SHORTCUTS = [
    { name: 'YouTube', domain: 'youtube.com' },
    { name: 'X / Twitter', domain: 'x.com' },
    { name: 'Instagram', domain: 'instagram.com' },
    { name: 'TikTok', domain: 'tiktok.com' },
    { name: 'LinkedIn', domain: 'linkedin.com' },
    { name: 'GitHub', domain: 'github.com' },
    { name: 'AWS S3', domain: 's3.amazonaws.com' }
];

const FILETYPE_PRESETS = [
    { label: 'PDF (.pdf)', ext: 'pdf' },
    { label: 'Excel (.xlsx)', ext: 'xlsx' },
    { label: 'Word (.docx)', ext: 'docx' },
    { label: 'Logs (.log)', ext: 'log' },
    { label: 'Dumps (.sql)', ext: 'sql' },
    { label: 'Config (.env)', ext: 'env' },
    { label: 'TXT (.txt)', ext: 'txt' }
];

// 7. Core Application State
let appState = {
    lang: 'en',
    step: 1,
    selectedEngine: ENGINES[0],
    selectedCategory: CATEGORIES[0],
    selectedPreloadDork: '', // User select index from PRELOADED_DORKS
    operatorsValues: {}, // Keyed by operator prefix
    domain: '',
    selectedFiletype: '',
    
    get stepsConfig() {
        if (this.selectedEngine.id === 'github') {
            return ['engine', 'operators', 'review'];
        }
        return ['engine', 'operators', 'scope', 'review'];
    }
};

// 8. Element References
const docElements = {
    indicatorContainer: document.getElementById('wizard-steps-indicator'),
    stepContainer: document.getElementById('wizard-step-body'),
    btnPrev: document.getElementById('btn-prev'),
    btnNext: document.getElementById('btn-next'),
    queryDisplay: document.getElementById('query-display'),
    engineLabel: document.getElementById('current-engine-label'),
    btnCopy: document.getElementById('btn-copy'),
    btnSearch: document.getElementById('btn-search'),
    langToggle: document.getElementById('lang-toggle-btn')
};

// 9. Bootstrap
function init() {
    setupLanguage();
    renderStepsIndicators();
    renderStepBody();
    bindEvents();
}

function setupLanguage() {
    document.documentElement.setAttribute('lang', appState.lang);
    document.documentElement.setAttribute('dir', appState.lang === 'ar' ? 'rtl' : 'ltr');
    
    docElements.langToggle.innerText = TRANSLATIONS[appState.lang].langToggle;
    document.getElementById('trans-console-title').innerText = TRANSLATIONS[appState.lang].consoleTitle;
    document.getElementById('trans-btn-search').innerText = TRANSLATIONS[appState.lang].btnSearch;
    document.getElementById('trans-footer-by').innerText = TRANSLATIONS[appState.lang].footerBy;
    
    docElements.btnPrev.innerText = TRANSLATIONS[appState.lang].back;
    docElements.btnNext.innerText = appState.step === appState.stepsConfig.length ? TRANSLATIONS[appState.lang].launch : TRANSLATIONS[appState.lang].next;
}

function renderStepsIndicators() {
    const steps = appState.stepsConfig;
    let html = `<div class="progress-line" id="progress-line"></div>`;
    steps.forEach((stepId, idx) => {
        const stepNum = idx + 1;
        let classes = 'indicator-step';
        if (stepNum === appState.step) {
            classes += ' active';
        } else if (stepNum < appState.step) {
            classes += ' completed';
        }
        html += `<div class="${classes}" data-step="${stepNum}">${stepNum}</div>`;
    });
    
    docElements.indicatorContainer.innerHTML = html;
    
    // Set line width
    const targetProgress = document.getElementById('progress-line');
    const percent = ((appState.step - 1) / (steps.length - 1)) * 100;
    if (targetProgress) {
        targetProgress.style.width = `${percent}%`;
    }
}

// 10. Dynamic Body Router
function renderStepBody() {
    const activeStepId = appState.stepsConfig[appState.step - 1];
    const trans = TRANSLATIONS[appState.lang];
    let html = '';

    switch(activeStepId) {
        case 'engine':
            html = `
                <h2 class="step-title"><span>${trans.step} 1:</span> ${trans.step1Title}</h2>
                <p class="step-subtitle">${trans.step1Subtitle}</p>
                <div class="engine-grid" id="engine-options">
                    ${ENGINES.map(eng => `
                        <div class="engine-option ${appState.selectedEngine.id === eng.id ? 'selected' : ''}" data-id="${eng.id}">
                            <div class="engine-icon">
                                <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 2C6.48 2 2 6.48 2 12S6.48 22 12 22 22 17.52 22 12 17.52 2 12 2M11 6H13V8H11V6M11 10H13V18H11V10Z"/>
                                </svg>
                            </div>
                            <div class="engine-name">${eng.name}</div>
                        </div>
                    `).join('')}
                </div>
            `;
            break;

        // 'objective' step removed — no case needed

        case 'operators':
            const currentStepNum = appState.stepsConfig.indexOf('operators') + 1;
            html = `
                <h2 class="step-title"><span>${trans.step} ${currentStepNum}:</span> ${trans.step3Title}</h2>
                <p class="step-subtitle">${trans.step3Subtitle}</p>
                
                ${renderPreloadedSelect()}

                <div class="operators-list-container" id="operators-inputs-container" style="margin-top: 1rem;">
                    ${renderOperatorsInputs()}
                </div>
            `;
            break;

        case 'scope':
            const scopeStepNum = appState.stepsConfig.indexOf('scope') + 1;
            html = `
                <h2 class="step-title"><span>${trans.step} ${scopeStepNum}:</span> ${trans.step4Title}</h2>
                <p class="step-subtitle">${trans.step4Subtitle}</p>
                
                <div class="form-group" style="margin-bottom: 1.5rem;">
                    <label class="form-label" for="input-site">${trans.labelTargetSite}</label>
                    <input type="text" id="input-site" class="input-cyber" value="${appState.domain}" placeholder="${trans.placeholderSite}">
                    
                    <div class="preset-chip-grid" style="margin-top: 0.75rem;" id="site-shortcuts">
                        ${SCOPE_SHORTCUTS.map(sc => `
                            <button type="button" class="preset-chip ${appState.domain === sc.domain ? 'active' : ''}" data-domain="${sc.domain}">${sc.name}</button>
                        `).join('')}
                    </div>
                </div>

                <div class="preset-section">
                    <span class="preset-title">${trans.presetsTitle}</span>
                    <div class="preset-chip-grid" id="filetype-presets">
                        ${FILETYPE_PRESETS.map(ft => `
                            <button type="button" class="preset-chip ${appState.selectedFiletype === ft.ext ? 'active' : ''}" data-ext="${ft.ext}">${ft.label}</button>
                        `).join('')}
                    </div>
                </div>
            `;
            break;

        case 'review':
            const reviewStepNum = appState.stepsConfig.indexOf('review') + 1;
            html = `
                <h2 class="step-title"><span>${trans.step} ${reviewStepNum}:</span> ${trans.step5Title}</h2>
                <p class="step-subtitle">${trans.step5Subtitle}</p>
                <div class="summary-grid" id="summary-details">
                    ${renderReviewSummary()}
                </div>
            `;
            break;
    }

    docElements.stepContainer.innerHTML = html;
    bindDynamicEvents(activeStepId);
    compileQuery();
}

function renderPreloadedSelect() {
    const isGithub = appState.selectedEngine.id === 'github';
    if (isGithub) return '';
    
    const trans = TRANSLATIONS[appState.lang];
    // Combined list: bounty + sqli dorks
    const dorksList = [...(PRELOADED_DORKS.bounty || []), ...(PRELOADED_DORKS.sqli || [])];
    
    return `
        <div class="form-group preloaded-dork-wrapper">
            <label class="form-label">${trans.dorkSelectionLabel}</label>
            <select class="dork-select-field" id="preloaded-dork-selector">
                <option value="">${trans.chooseDorkOption}</option>
                ${dorksList.map(d => `
                    <option value="${d}" ${appState.selectedPreloadDork === d ? 'selected' : ''}>${d}</option>
                `).join('')}
            </select>
        </div>
    `;
}

function renderOperatorsInputs() {
    const isGithub = appState.selectedEngine.id === 'github';
    let list = [];
    
    if (isGithub) {
        list = OPERATORS_MAP.github;
    } else {
        const engineId = appState.selectedEngine.id;
        list = OPERATORS_MAP[engineId] || [];
    }

    if (list.length === 0) {
        return `
            <div style="color: var(--text-muted); padding: 1.5rem 0; text-align: center;">
                No specialized dorking operators are registered.
            </div>
        `;
    }

    return list.map(item => {
        const val = appState.operatorsValues[item.op] || '';
        const opTitle = appState.lang === 'ar' ? item.nameAr : item.nameEn;
        const opDesc = appState.lang === 'ar' ? item.descAr : item.descEn;
        const opHover = appState.lang === 'ar' ? item.hoverAr : item.hoverEn;
        
        return `
            <div class="operator-input-row">
                <div class="operator-badge">
                    ${item.op}
                    <div class="tooltip-box">
                        <strong>${opTitle}</strong><br>
                        ${opDesc || ''}<br>
                        <em>${opHover || ''}</em>
                    </div>
                </div>
                <input type="text" class="op-input-field" data-op="${item.op}" value="${val}" placeholder="${item.placeholder || '...'}">
            </div>
        `;
    }).join('');
}

function renderReviewSummary() {
    const trans = TRANSLATIONS[appState.lang];
    const isGithub = appState.selectedEngine.id === 'github';
    
    const configuredOps = Object.entries(appState.operatorsValues)
        .filter(([op, val]) => val.trim().length > 0)
        .map(([op, val]) => `${op}${val}`);

    return `
        <div class="summary-item">
            <div class="summary-label">${trans.summaryEngine}</div>
            <div class="summary-value">${appState.selectedEngine.name}</div>
        </div>
        <div class="summary-item">
            <div class="summary-label">${trans.summaryCategory}</div>
            <div class="summary-value">${isGithub ? trans.summaryNotApplicable : trans[appState.selectedCategory.nameKey]}</div>
        </div>
        <div class="summary-item">
            <div class="summary-label">${trans.summaryScope}</div>
            <div class="summary-value">${isGithub ? trans.summaryNotApplicable : (appState.domain || trans.summaryNone)}</div>
        </div>
        <div class="summary-item">
            <div class="summary-label">${trans.summaryFiletype}</div>
            <div class="summary-value">${appState.selectedFiletype || trans.summaryNone}</div>
        </div>
        <div class="summary-item" style="grid-column: 1 / -1;">
            <div class="summary-label">${trans.summaryPreload}</div>
            <div class="summary-value mono">${appState.selectedPreloadDork || trans.summaryNone}</div>
        </div>
        <div class="summary-item" style="grid-column: 1 / -1;">
            <div class="summary-label">${trans.summaryOperators}</div>
            <div class="summary-value mono">${configuredOps.join('  |  ') || trans.summaryNone}</div>
        </div>
    `;
}

// 11. Compiler Formula Logic
function compileQuery() {
    let queryParts = [];
    const engineId = appState.selectedEngine.id;

    // Standard Engines vs GitHub Code Search
    if (engineId === 'github') {
        Object.entries(appState.operatorsValues).forEach(([op, val]) => {
            if (val.trim()) {
                queryParts.push(`${op}${val.trim()}`);
            }
        });
    } else {
        // 1. If user selected a preloaded query, use that as the foundation
        if (appState.selectedPreloadDork) {
            queryParts.push(appState.selectedPreloadDork);
        }

        // 2. Append parameters logic (AND query variables)
        Object.entries(appState.operatorsValues).forEach(([op, val]) => {
            if (val.trim()) {
                // If there are space characters, join query keys using AND
                const words = val.trim().split(/\s+/);
                if (words.length > 1) {
                    const joined = words.map(w => `${op}${w}`).join(' AND ');
                    queryParts.push(`(${joined})`);
                } else {
                    queryParts.push(`${op}${val.trim()}`);
                }
            }
        });

        // 3. Append target website domain
        if (appState.domain) {
            queryParts.push(`site:${appState.domain}`);
        }

        // 4. Append filetype preset
        if (appState.selectedFiletype) {
            queryParts.push(`filetype:${appState.selectedFiletype}`);
        }
    }

    const finalQueryString = queryParts.join(' ');
    docElements.queryDisplay.innerText = finalQueryString || appState.selectedEngine.placeholder;
    docElements.engineLabel.innerText = `Engine: ${appState.selectedEngine.name}`;
    
    return finalQueryString;
}

function launchSearchQuery() {
    const query = compileQuery();
    const targetUrl = appState.selectedEngine.url + encodeURIComponent(query);
    window.open(targetUrl, '_blank');
}

// 12. Static & Dynamic Events bindings
function bindEvents() {
    docElements.langToggle.addEventListener('click', () => {
        appState.lang = appState.lang === 'en' ? 'ar' : 'en';
        setupLanguage();
        renderStepsIndicators();
        renderStepBody();
    });

    docElements.btnCopy.addEventListener('click', () => {
        const text = compileQuery();
        navigator.clipboard.writeText(text).then(() => {
            const originalIcon = docElements.btnCopy.innerHTML;
            docElements.btnCopy.innerHTML = `
                <svg width="18" height="18" fill="var(--success)" viewBox="0 0 24 24">
                    <path d="M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"/>
                </svg>
            `;
            setTimeout(() => {
                docElements.btnCopy.innerHTML = originalIcon;
            }, 1500);
        });
    });

    docElements.btnSearch.addEventListener('click', launchSearchQuery);

    docElements.btnNext.addEventListener('click', () => {
        const steps = appState.stepsConfig;
        if (appState.step === steps.length) {
            launchSearchQuery();
        } else {
            appState.step++;
            renderStepsIndicators();
            renderStepBody();
            
            docElements.btnPrev.disabled = appState.step === 1;
            docElements.btnNext.innerText = appState.step === steps.length ? TRANSLATIONS[appState.lang].launch : TRANSLATIONS[appState.lang].next;
        }
    });

    docElements.btnPrev.addEventListener('click', () => {
        if (appState.step > 1) {
            appState.step--;
            renderStepsIndicators();
            renderStepBody();
            
            docElements.btnPrev.disabled = appState.step === 1;
            docElements.btnNext.innerText = TRANSLATIONS[appState.lang].next;
        }
    });
}

function bindDynamicEvents(stepId) {
    switch(stepId) {
        case 'engine':
            const engineOptions = document.querySelectorAll('.engine-option');
            engineOptions.forEach(opt => {
                opt.addEventListener('click', () => {
                    const id = opt.getAttribute('data-id');
                    const eng = ENGINES.find(e => e.id === id);
                    if (eng) {
                        appState.selectedEngine = eng;
                        appState.operatorsValues = {}; // Reset inputs
                        appState.domain = '';
                        appState.selectedFiletype = '';
                        appState.selectedPreloadDork = '';
                        appState.step = 1; 
                        
                        renderEngines();
                        renderStepsIndicators();
                        renderStepBody();
                    }
                });
            });
            break;

        case 'objective':
            const categoryOptions = document.querySelectorAll('.category-option');
            categoryOptions.forEach(opt => {
                opt.addEventListener('click', () => {
                    const id = opt.getAttribute('data-id');
                    const cat = CATEGORIES.find(c => c.id === id);
                    if (cat) {
                        appState.selectedCategory = cat;
                        appState.operatorsValues = {}; // Reset parameters
                        appState.selectedPreloadDork = '';
                        
                        document.querySelectorAll('.category-option').forEach(c => c.classList.remove('selected'));
                        opt.classList.add('selected');
                        compileQuery();
                    }
                });
            });
            break;

        case 'operators':
            // Preloaded Select listener
            const selector = document.getElementById('preloaded-dork-selector');
            if (selector) {
                selector.addEventListener('change', (e) => {
                    appState.selectedPreloadDork = e.target.value;
                    compileQuery();
                });
            }

            // Input Fields listener
            const opFields = document.querySelectorAll('.op-input-field');
            opFields.forEach(field => {
                field.addEventListener('input', (e) => {
                    const op = field.getAttribute('data-op');
                    appState.operatorsValues[op] = e.target.value;
                    compileQuery();
                });
            });
            break;

        case 'scope':
            const inputSite = document.getElementById('input-site');
            const chips = document.querySelectorAll('#site-shortcuts .preset-chip');
            const ftChips = document.querySelectorAll('#filetype-presets .preset-chip');
            
            inputSite.addEventListener('input', (e) => {
                appState.domain = e.target.value.trim();
                chips.forEach(c => {
                    if (c.getAttribute('data-domain') === appState.domain) {
                        c.classList.add('active');
                    } else {
                        c.classList.remove('active');
                    }
                });
                compileQuery();
            });

            chips.forEach(chip => {
                chip.addEventListener('click', () => {
                    const dom = chip.getAttribute('data-domain');
                    if (appState.domain === dom) {
                        appState.domain = '';
                        chip.classList.remove('active');
                        inputSite.value = '';
                    } else {
                        appState.domain = dom;
                        chips.forEach(c => c.classList.remove('active'));
                        chip.classList.add('active');
                        inputSite.value = dom;
                    }
                    compileQuery();
                });
            });

            ftChips.forEach(chip => {
                chip.addEventListener('click', () => {
                    const ext = chip.getAttribute('data-ext');
                    if (appState.selectedFiletype === ext) {
                        appState.selectedFiletype = '';
                        chip.classList.remove('active');
                    } else {
                        appState.selectedFiletype = ext;
                        ftChips.forEach(c => c.classList.remove('active'));
                        chip.classList.add('active');
                    }
                    compileQuery();
                });
            });
            break;
    }
}

function renderEngines() {
    const opts = document.querySelectorAll('.engine-option');
    opts.forEach(o => {
        if (o.getAttribute('data-id') === appState.selectedEngine.id) {
            o.classList.add('selected');
        } else {
            o.classList.remove('selected');
        }
    });
}

// Kickstart on DOM Load
window.addEventListener('DOMContentLoaded', init);
