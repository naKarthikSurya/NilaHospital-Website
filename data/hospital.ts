export const hospital = {
  name: "Nila Hospital",
  fullName: "Nila Hospital Namakkal",
  tagline: "Obstetrics & Gynaecology",
  phoneDisplay: "+91 96552 25192",
  phoneHref: "tel:+919655225192",
  email: "", // User will fill this later
  mapsUrl: "https://maps.app.goo.gl/rYRuDj8rfa5Niuzi8",
  mapsEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3913.2183490634034!2d78.16326507578772!3d11.24534185036797!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3babcf0311c61c21%3A0xef2619b4195dd4b2!2sNila%20Hospital!5e0!3m2!1sen!2sin!4v1771914117542!5m2!1sen!2sin",
  address: {
    streetAddress: "743, A/1, A/2, Salem Road, Swamy Nagar",
    addressLocality: "Namakkal",
    addressRegion: "Tamil Nadu",
    postalCode: "637001",
    addressCountry: "IN",
    landmark: "Opposite Reynolds Car Showroom"
  },
  openingHours: [
    { days: "Mon – Fri", hours: "9:00 AM – 1:00 PM & 6:00 PM – 9:00 PM" },
    { days: "Sat & Sun", hours: "9:00 AM – 1:00 PM" }
  ],
  schemaHours: [
    {
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "13:00"
    },
    {
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "18:00",
      closes: "21:00"
    },
    {
      dayOfWeek: ["Saturday", "Sunday"],
      opens: "09:00",
      closes: "13:00"
    }
  ],
  socialProfiles: [
    { platform: "Facebook", url: "https://facebook.com/NilaHospitalNamakkal" },
    { platform: "Instagram", url: "https://instagram.com/NilaHospitalNamakkal" }
  ]
};
