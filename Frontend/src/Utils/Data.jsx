const ContactInfo = {
  contact_phone: "+00000000000000",
  contact_email: "abc@gmail.com",
  address: "Street 11 F 16 ----",
  facebook: "https://facebook.com",
  twitter: "https://facebook.com",
  linkedin: "https://facebook.com",
  instagram: "https://facebook.com",
  youtube: "https://facebook.com",
  time: "9:00 am - 4:00 pm Sunday Off",
};

const teamMembers = [
  { id: 1, name: "Alice Smith", title: "Project Manager" },
  { id: 2, name: "Bob Johnson", title: "Software Engineer" },
  { id: 3, name: "Catherine Lee", title: "UX Designer" },
  { id: 4, name: "David Brown", title: "Data Analyst" },
  { id: 5, name: "Emily Davis", title: "Marketing Specialist" },
  { id: 6, name: "Frank Wilson", title: "Quality Assurance" },
  { id: 7, name: "Grace Taylor", title: "Content Strategist" },
  { id: 8, name: "Henry Moore", title: "DevOps Engineer" },
];

let server_ip;

if (process.env.NODE_ENV === "production") {
  server_ip = "https://flash-tele-psychiatry.pk/";
} else {
  server_ip = "http://localhost:8000";
}

export { ContactInfo, teamMembers, server_ip };
