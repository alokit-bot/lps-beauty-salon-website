// LPS Beauty Salon — core business data
export const BUSINESS = {
    name: "LPS Beauty Salon & Nail Art Studio",
    short: "LPS Beauty Salon",
    tagline: "Your Neighbourhood Beauty Destination in BTM Layout",
    phone: "+91 99009 14999",
    phoneDigits: "+919900914999",
    whatsappDigits: "919900914999",
    address: "22, 21st Main, 3rd Cross Rd, BTM Layout 2nd Stage, Bengaluru, Karnataka 560076",
    addressShort: "BTM Layout 2nd Stage, Bengaluru",
    rating: 4.8,
    reviewCount: 316,
    hoursText: "Mon – Sun · 10:00 AM – 9:00 PM",
    mapsEmbed:
        "https://www.google.com/maps?q=22,+21st+Main,+3rd+Cross+Rd,+BTM+Layout+2nd+Stage,+Bengaluru,+Karnataka+560076&output=embed",
    mapsLink:
        "https://www.google.com/maps/search/?api=1&query=LPS+Beauty+Salon+22+21st+Main+3rd+Cross+Rd+BTM+Layout+2nd+Stage+Bengaluru",
};

export const SERVICE_CATEGORIES = [
    {
        id: "hair",
        title: "Hair",
        accent: "From snips to glossy colour",
        image:
            "https://images.unsplash.com/photo-1562322140-8baeececf3df?w=900&auto=format&fit=crop&q=70",
        items: [
            { name: "Haircut & Styling", price: "₹300 – ₹600" },
            { name: "Hair Wash & Blow Dry", price: "₹250 – ₹400" },
            { name: "Hair Colouring (Global)", price: "₹1,200 – ₹2,500" },
            { name: "Highlights / Balayage", price: "₹2,000 – ₹4,500" },
            { name: "Hair Smoothening / Keratin", price: "₹3,500 – ₹6,000" },
            { name: "Hair Spa", price: "₹800 – ₹1,500" },
        ],
    },
    {
        id: "skin",
        title: "Skin & Face",
        accent: "Clean, calm, glowing",
        image:
            "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=900&auto=format&fit=crop&q=70",
        items: [
            { name: "Cleanup", price: "₹400 – ₹700" },
            { name: "Facial (basic)", price: "₹700 – ₹1,200" },
            { name: "Bleach (face)", price: "₹250 – ₹400" },
            { name: "D-Tan Treatment", price: "₹500 – ₹800" },
            { name: "Threading · Eyebrows", price: "₹50" },
            { name: "Threading · Full Face", price: "₹150" },
        ],
    },
    {
        id: "nails",
        title: "Nail Art Studio",
        accent: "Tiny canvases, big mood",
        image:
            "https://images.unsplash.com/photo-1610992015732-2449b76344bc?w=900&auto=format&fit=crop&q=70",
        items: [
            { name: "Basic Manicure", price: "₹300 – ₹500" },
            { name: "Gel Nail Extension", price: "₹1,200 – ₹2,000" },
            { name: "Nail Art (per nail)", price: "₹50 – ₹150" },
            { name: "Pedicure (basic)", price: "₹400 – ₹600" },
            { name: "Luxury Pedicure", price: "₹800 – ₹1,200" },
            { name: "French Tips", price: "₹600 – ₹800" },
        ],
    },
    {
        id: "waxing",
        title: "Waxing",
        accent: "Smooth, gentle, quick",
        image:
            "https://images.unsplash.com/photo-1519824145371-296894a0daa9?w=900&auto=format&fit=crop&q=70",
        items: [
            { name: "Full Arms", price: "₹200 – ₹350" },
            { name: "Full Legs", price: "₹350 – ₹500" },
            { name: "Full Body Waxing", price: "₹1,500 – ₹2,500" },
        ],
    },
    {
        id: "bridal",
        title: "Bridal & Makeup",
        accent: "Your day, dialled up",
        image:
            "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=900&auto=format&fit=crop&q=70",
        items: [
            { name: "Bridal Makeup (basic)", price: "₹5,000 – ₹8,000" },
            { name: "Party Makeup", price: "₹1,500 – ₹2,500" },
            { name: "Saree Draping", price: "₹300 – ₹500" },
        ],
    },
];

export const TESTIMONIALS = [
    {
        name: "Priya Ramesh",
        locale: "BTM Layout",
        service: "Balayage & Hair Spa",
        text: "Honestly my go-to salon in BTM. The team listens, they don't oversell, and my balayage turned out exactly like the reference I showed. So warm and welcoming.",
        rating: 5,
    },
    {
        name: "Ananya Kulkarni",
        locale: "Jayanagar",
        service: "Bridal Makeup",
        text: "Did my sister's bridal and my own party makeup here. Clean workspace, premium products, and the nail art studio is next level. Price is super reasonable for the quality.",
        rating: 5,
    },
    {
        name: "Sneha Iyer",
        locale: "BTM 2nd Stage",
        service: "Gel Extensions",
        text: "Came in for gel extensions with custom art — they nailed it on the first try. Girls here genuinely care how your nails feel two weeks later, not just on day one.",
        rating: 5,
    },
];

export const WHY_US = [
    {
        title: "4.8★ on Google",
        sub: "316+ happy neighbours",
        icon: "Star",
    },
    {
        title: "Trained stylists",
        sub: "Certified, always upskilling",
        icon: "Scissors",
    },
    {
        title: "Hygiene first",
        sub: "Sanitised tools, fresh linens",
        icon: "Sparkles",
    },
    {
        title: "Personal attention",
        sub: "No rush, your pace",
        icon: "HeartHandshake",
    },
];

export const GALLERY = [
    {
        label: "Nail Art",
        image:
            "https://images.unsplash.com/photo-1604654894610-df63bc536371?w=700&auto=format&fit=crop&q=70",
    },
    {
        label: "Hair Colour",
        image:
            "https://images.unsplash.com/photo-1522336572468-97b06e8ef143?w=700&auto=format&fit=crop&q=70",
    },
    {
        label: "Facial",
        image:
            "https://images.unsplash.com/photo-1571646034647-52e6ea84b28c?w=700&auto=format&fit=crop&q=70",
    },
    {
        label: "Bridal Look",
        image:
            "https://images.unsplash.com/photo-1596178065887-1198b6148b2b?w=700&auto=format&fit=crop&q=70",
    },
    {
        label: "Pedicure",
        image:
            "https://images.unsplash.com/photo-1519415510236-718bdfcd89c8?w=700&auto=format&fit=crop&q=70",
    },
    {
        label: "Hair Spa",
        image:
            "https://images.unsplash.com/photo-1526045478516-99145907023c?w=700&auto=format&fit=crop&q=70",
    },
];
