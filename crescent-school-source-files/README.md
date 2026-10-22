# Crescent Matriculation Higher Secondary School - Website Replica

A complete, high-fidelity replication of the Crescent Matriculation Higher Secondary School homepage, recreated directly from the client's provided PDF snapshot.

---

## 🌟 Overview & Key Highlights

This project accurately reproduces every section, layout element, color scheme, typography choice, and image asset from the original school homepage:

1. **Top Utility Bar**: Displays trust management affiliation, clickable direct phone link (`tel:9751708735`), and email link.
2. **Main Header Navigation**: Responsive sticky navigation with the school emblem, condensed typography, smooth anchor links to all sections, and an interactive "Enquire Now" button.
3. **Hero Section Carousel**: Features the headline *"Labs, smart classes and a prayer hall"* with gold accent styling, frosted glass badges, action buttons, arrow navigation, and pagination indicators.
4. **Floating Quick Stats Card**: Highlights `1999` (Established), `Pre-KG – XII` (Classes), `English` (Medium of instruction), and `Coimbatore` (Our location).
5. **Welcome & About Section**: Correspondent photo card with campus location badge, history narrative, and core bullet points.
6. **Why Crescent (Strengths Grid)**: 6 feature cards with custom SVG icons detailing Academic development, Moral & spiritual formation, Sports & fitness, Leadership & character, Language skills, and School–home partnership.
7. **Key Facilities Grid**: High-resolution image cards for Computer Lab & Smart Classes, Physics Laboratory, Chemistry Laboratory, Biology Laboratory, Prayer Hall, and Sports Coaching.
8. **Announcements & Admissions Enquiry**: Date-badged announcement cards and an Admissions Enquiry action card.
9. **Academic Journey & Student Development**: Progressive stage cards (Kindergarten, Primary, Middle & High, Higher Secondary), curriculum badges, developmental pillars, and extracurricular activity tags.
10. **Admissions 4-Step CTA Banner**: Step-by-step guidance (Enquire, Apply, Submit, Confirm) with interactive application modal trigger.
11. **Gallery Grid ("Moments that make us proud")**: Full layout featuring Campus, Classrooms, Laboratories, Sports, and Celebrations with an interactive lightbox viewer.
12. **School Footer**: Complete contact information, phone numbers (K.G., Matric, Office), address in Coimbatore, navigation links, and copyright statement.

---

## 📂 Project Directory Structure

```
crescent-school-website/
├── index.html                  # Main homepage HTML5 document
├── css/
│   └── styles.css              # Custom styling, responsive breakpoints, and animations
├── js/
│   └── main.js                 # Carousel, modal handling, lightbox, and navigation
├── assets/
│   └── images/                 # Clean, high-resolution extracted web assets
│       ├── logo.png            # School crest emblem
│       ├── logo_full.png       # School crest with title
│       ├── hero_clean.jpg      # Computer lab hero background
│       ├── correspondent.jpg   # School correspondent photo
│       ├── facility_computer_lab.jpg
│       ├── facility_physics_lab.jpg
│       ├── facility_chemistry_lab.jpg
│       ├── facility_biology_lab.jpg
│       ├── facility_prayer_hall.jpg
│       ├── facility_sports_coaching.jpg
│       ├── announcements_bg_clean.jpg
│       ├── admissions_bg_clean.jpg
│       ├── gallery_campus.jpg
│       ├── gallery_classrooms.jpg
│       ├── gallery_laboratories.jpg
│       ├── gallery_sports.jpg
│       └── gallery_celebrations.jpg
└── README.md                   # Project documentation
```

---

## 🚀 How to Run Locally

You can open `index.html` directly in any web browser, or launch a lightweight local HTTP server:

```bash
# Navigate to the project directory
cd /Users/amirrebooted/.gemini/antigravity/scratch/crescent-school-website

# Start local server (Python 3)
python3 -m http.server 8080
```

Then visit [http://localhost:8080](http://localhost:8080) in your browser.

---

## 📱 Responsive & Interactive Features

- **Mobile First & Responsive**: Optimized for desktop (1240px+), tablet, and mobile screens (< 768px).
- **Interactive Carousel**: Auto-advancing slider with hover pause, manual arrow controls, and dot indicators.
- **Enquiry Modal**: Clean pop-up form with input validation for prospective admissions.
- **Gallery Lightbox**: Click any gallery or facility image to view full-resolution preview.
- **Zero Heavy Dependencies**: Pure vanilla HTML5, CSS3, and modern JavaScript for maximum speed, security, and portability.
