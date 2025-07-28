# Hero Images Directory

This directory contains hero portrait images for the Epic Seven Assistant application.

## Supported Formats
- PNG (recommended)
- JPG/JPEG
- WebP

## Naming Convention
Hero images should be named using the hero ID from the database:

```
vildred.png
arbiter-vildred.png
bellona.png
seaside-bellona.png
luna.png
ruele-of-light.png
fallen-cecilia.png
tamarinne.png
iseria.png
dizzy.png
```

## Image Requirements
- **Resolution**: Minimum 200x200px, recommended 400x400px or higher
- **Aspect Ratio**: Square (1:1) preferred
- **File Size**: Keep under 500KB for optimal loading performance
- **Quality**: High quality portraits showing the hero clearly

## Automatic Fallback
If a hero image is not found, the application will automatically display the role icon instead:
- 🛡️ Knight
- ⚔️ Warrior  
- 🗡️ Thief
- 🏹 Ranger
- 🔮 Mage
- 💊 Soul Weaver

## Adding New Heroes
1. Add the hero to `/src/lib/heroDatabase.ts`
2. Place the hero image in this directory with the correct filename
3. The image will be automatically detected and used

## Image Sources
You can obtain hero images from:
- [Epic7x.com](https://epic7x.com/) - High quality portraits
- [GamePress Epic Seven](https://gamepress.gg/epic7/) - Alternative source
- [Epic Seven Official](https://epic7.com/) - Official artwork
- Community resources and fan art (with proper attribution)

## Performance Notes
- Images are optimized using Next.js Image component
- Lazy loading is enabled for better performance
- Multiple format fallbacks ensure compatibility
- CDN caching improves load times for repeated visits

---

**Note**: This project is a fan-made tool and is not affiliated with Smilegate RPG. Epic Seven is a trademark of Smilegate RPG. 