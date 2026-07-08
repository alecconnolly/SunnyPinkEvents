# Sunny Pink Events Website

A responsive, mobile-friendly website for Sunny Pink Events rental business showcasing bounce houses, waterslides, and tables/chairs rentals.

## 🎯 Features

- **Responsive Design**: Fully mobile-friendly layout that works on all devices
- **Product Pages**: Individual pages for each rental item with detailed information
- **Image Gallery**: Interactive photo carousel for each product
- **Pricing Tables**: Clear, organized pricing information
- **Delivery Options**: Multiple delivery and pickup options with pricing
- **Calendar Integration**: Google Calendar embed to show availability
- **Booking System**: Google Form integration for rental requests
- **Social Integration**: Facebook link accessible from every page

## 📁 Project Structure

```
sunnypink/
├── index.html              # Main landing page
├── bouncehouse.html        # Bounce House product page
├── waterslide.html         # Waterslide product page
├── tables-chairs.html      # Tables & Chairs product page
├── css/
│   └── style.css          # All responsive styling
├── js/
│   └── script.js          # Interactive features (galleries, etc.)
├── images/                # Placeholder for product images
└── README.md              # This file
```

## 🚀 Quick Start

### 1. Add Your Content

**Update Facebook Link:**
- Find all instances of `https://www.facebook.com/sunnypinkevents` in the HTML files
- Replace with your actual Facebook page URL

**Add Google Calendar:**
- In each product page (bouncehouse.html, waterslide.html, tables-chairs.html)
- Replace `YOUR_GOOGLE_CALENDAR_ID` in this line:
  ```html
  <iframe src="https://calendar.google.com/calendar/embed?src=YOUR_GOOGLE_CALENDAR_ID@group.calendar.google.com&ctz=America%2FNew_York" ...></iframe>
  ```
- Get your calendar ID from Google Calendar settings

**Add Google Form:**
- Create a Google Form for rental requests
- In each product page, replace `YOUR_GOOGLE_FORM_ID` in:
  ```html
  <a href="https://forms.gle/YOUR_GOOGLE_FORM_ID" target="_blank" class="booking-button">
  ```

### 2. Add Product Images

1. Add your product photos to the `images/` folder:
   - `bouncehouse-1.jpg`, `bouncehouse-2.jpg`, `bouncehouse-3.jpg`
   - `waterslide-1.jpg`, `waterslide-2.jpg`, `waterslide-3.jpg`
   - `tables-1.jpg`, `tables-2.jpg`, `tables-3.jpg`

2. The gallery will automatically display them (currently shows emoji placeholders)

### 3. Customize Pricing

Edit pricing tables in each product page HTML file to match your rates.

### 4. Update Company Information

- Replace company name, phone, address, and contact info where needed
- Update descriptions to match your specific offerings

## 📱 Mobile Responsiveness

The website is fully responsive and optimized for:
- ✅ Desktop (1200px+)
- ✅ Tablet (768px - 1200px)
- ✅ Mobile (480px - 768px)
- ✅ Small Mobile (< 480px)

## 🎨 Customization

### Colors

The site uses a pink color scheme. To customize, edit the CSS variables in `css/style.css`:

```css
:root {
  --primary-color: #ff69b4;      /* Main pink */
  --secondary-color: #fff;        /* White */
  --dark-color: #333;             /* Dark text */
  --light-bg: #f9f9f9;            /* Light background */
  --border-color: #ddd;           /* Borders */
}
```

### Fonts

Default fonts are system fonts (Segoe UI, Tahoma, Geneva, Verdana). To use custom fonts, add them to the `<head>` section of HTML files.

## 🔧 Gallery Features

The image gallery includes:
- **Previous/Next Buttons**: Navigate between photos
- **Dot Navigation**: Click dots to jump to a specific photo
- **Keyboard Navigation**: Use arrow keys to browse
- **Image Counter**: Shows current position (e.g., "1 / 3")

The gallery automatically hides controls if there's only one image.

## 🌐 Deployment to GitHub Pages

### 1. Create a GitHub Repository

```bash
git init
git add .
git commit -m "Initial commit: Sunny Pink Events website"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/sunnypink.git
git push -u origin main
```

### 2. Enable GitHub Pages

1. Go to your repository settings
2. Scroll to "GitHub Pages"
3. Select "main" branch as source
4. Your site will be available at: `https://YOUR_USERNAME.github.io/sunnypink/`

### 3. Add Custom Domain (Optional)

1. Purchase a domain (GoDaddy, Namecheap, etc.)
2. Point domain to GitHub Pages (add DNS records)
3. In repository settings > GitHub Pages, add custom domain
4. GitHub will automatically create a CNAME file

## 📋 Content Checklist

Before launching:
- [ ] Add Facebook page URL to all pages
- [ ] Set up Google Calendar and add calendar ID
- [ ] Create Google Form and add form link
- [ ] Add product images to images/ folder
- [ ] Update pricing and descriptions
- [ ] Test all navigation links
- [ ] Test on mobile devices
- [ ] Set up GitHub repository
- [ ] Enable GitHub Pages

## 🖼️ Image Best Practices

- **File Format**: Use JPG for photos, PNG for graphics
- **Size**: Optimize images (aim for <200KB each)
- **Dimensions**: 
  - Gallery images: 600x400px or larger
  - Product cards: 300x200px
- **Naming**: Use descriptive names (e.g., `bouncehouse-kids-playing.jpg`)

## 🔒 Security Notes

- All external links open in new tabs (`target="_blank"`)
- No sensitive information stored in HTML
- Images are locally hosted (no external dependencies except Google services)

## 📞 Support

For questions or customization help:
- Contact Sunny Pink Events on Facebook
- Review the HTML comments in the code for additional guidance
- Test thoroughly before deploying to production

## 📄 License

This website template is created for Sunny Pink Events.

---

**Last Updated**: July 2026  
**Version**: 1.0
