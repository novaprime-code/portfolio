#!/usr/bin/env python3
"""
Script to generate dummy PNG images for portfolio projects
Creates placeholder images with project names and descriptions
"""

import os
from PIL import Image, ImageDraw, ImageFont
import textwrap

# Create projects directory if it doesn't exist
projects_dir = "public/projects"
os.makedirs(projects_dir, exist_ok=True)

# Define all the images needed based on the portfolio configuration
project_images = {
    # Enterprise HRIS System
    "hris-thumbnail.png": {
        "title": "Enterprise HRIS System",
        "subtitle": "Human Resource Information System",
        "color": "#FF2D20"  # Laravel red
    },
    "hris-dashboard.png": {
        "title": "HRIS Dashboard",
        "subtitle": "Employee Management Interface",
        "color": "#4FC08D"  # Vue green
    },
    "hris-employee.png": {
        "title": "Employee Management",
        "subtitle": "Staff Records & Profiles",
        "color": "#3776AB"  # Python blue
    },
    "hris-payroll.png": {
        "title": "Payroll System",
        "subtitle": "Salary & Benefits Management",
        "color": "#777BB4"  # PHP purple
    },
    "hris-reports.png": {
        "title": "HR Reports",
        "subtitle": "Analytics & Insights",
        "color": "#FF9900"  # AWS orange
    },
    
    # International HRM System
    "international-hrm-thumbnail.png": {
        "title": "Multi-Country HRM",
        "subtitle": "International Compliance System",
        "color": "#0077B5"  # LinkedIn blue
    },
    "hrm-dashboard.png": {
        "title": "HRM Dashboard",
        "subtitle": "Global HR Management",
        "color": "#336791"  # PostgreSQL blue
    },
    "hrm-compliance.png": {
        "title": "Compliance Module",
        "subtitle": "Multi-Country Regulations",
        "color": "#092E20"  # Django green
    },
    "hrm-reports.png": {
        "title": "Global Reports",
        "subtitle": "Cross-Country Analytics",
        "color": "#4479A1"  # MySQL blue
    },
    
    # Handyman's Hub Marketplace
    "handymans-hub-thumbnail.png": {
        "title": "Handyman's Hub",
        "subtitle": "Service Marketplace Platform",
        "color": "#61DAFB"  # React blue
    },
    "handymans-hub-home.png": {
        "title": "Hub Homepage",
        "subtitle": "Service Provider Marketplace",
        "color": "#3178C6"  # TypeScript blue
    },
    "handymans-hub-services.png": {
        "title": "Services Listing",
        "subtitle": "Browse Available Services",
        "color": "#06B6D4"  # Tailwind cyan
    },
    "handymans-hub-admin.png": {
        "title": "Admin Dashboard",
        "subtitle": "Provider Verification System",
        "color": "#F7DF1E"  # JavaScript yellow
    },
    "handymans-hub-mobile.png": {
        "title": "Mobile Interface",
        "subtitle": "Responsive Design",
        "color": "#02569B"  # Flutter blue
    },
    
    # AI Parking Detection
    "parking-detection-thumbnail.png": {
        "title": "AI Parking Detection",
        "subtitle": "Computer Vision System",
        "color": "#5C3EE8"  # OpenCV purple
    },
    "parking-detection-demo.png": {
        "title": "Detection Demo",
        "subtitle": "Real-time Slot Detection",
        "color": "#239120"  # C# green
    },
    "parking-dashboard.png": {
        "title": "Parking Dashboard",
        "subtitle": "Monitoring Interface",
        "color": "#47A248"  # MongoDB green
    },
    "parking-analytics.png": {
        "title": "Analytics View",
        "subtitle": "Usage Statistics",
        "color": "#FF8C00"  # MATLAB orange
    },
    
    # Video Communication App
    "video-chat-thumbnail.png": {
        "title": "Video Communication",
        "subtitle": "Real-time Chat Application",
        "color": "#000000"  # Laravel/Vue black
    },
    "video-call-interface.png": {
        "title": "Video Call Interface",
        "subtitle": "WebRTC Implementation",
        "color": "#FF0000"  # YouTube red
    },
    "chat-interface.png": {
        "title": "Chat Interface",
        "subtitle": "Instant Messaging",
        "color": "#1877F2"  # Facebook blue
    },
    "video-features.png": {
        "title": "Communication Features",
        "subtitle": "Chat History & Notifications",
        "color": "#4CAF50"  # WhatsApp green
    },
    
    # GitHub Chess Game
    "github-chess-thumbnail.png": {
        "title": "GitHub Chess",
        "subtitle": "Interactive Chess via Issues",
        "color": "#6e7681"  # GitHub gray
    },
    "chess-board.png": {
        "title": "Chess Board",
        "subtitle": "Game State Visualization",
        "color": "#0A0A0A"  # Dev.to black
    },
    "chess-issues.png": {
        "title": "GitHub Issues",
        "subtitle": "Move Commands Interface",
        "color": "#2088FF"  # GitHub Actions blue
    },
    "chess-moves.png": {
        "title": "Move History",
        "subtitle": "Game Progress Tracking",
        "color": "#1DA1F2"  # Twitter blue
    },
    
    # Connect4 Game
    "connect4-thumbnail.png": {
        "title": "Connect4 Game",
        "subtitle": "Classic Strategy Game",
        "color": "#ED8B00"  # Java orange
    },
    "connect4-game.png": {
        "title": "Game Board",
        "subtitle": "Interactive Gameplay",
        "color": "#F05032"  # Git orange
    },
    "connect4-logic.png": {
        "title": "Game Logic",
        "subtitle": "Winner Detection Algorithm",
        "color": "#003B57"  # SQLite blue
    },
    
    # MahaNagar Services
    "mahanagar-thumbnail.png": {
        "title": "MahaNagar Services",
        "subtitle": "Home Service Platform",
        "color": "#7952B3"  # Bootstrap purple
    },
    "mahanagar-home.png": {
        "title": "Service Homepage",
        "subtitle": "Professional Home Services",
        "color": "#0769AD"  # jQuery blue
    },
    "mahanagar-services.png": {
        "title": "Service Categories",
        "subtitle": "Painting, Cleaning, Repairs",
        "color": "#E34F26"  # HTML5 orange
    },
    "mahanagar-booking.png": {
        "title": "Booking System",
        "subtitle": "Professional Scheduling",
        "color": "#1572B6"  # CSS3 blue
    }
}

def hex_to_rgb(hex_color):
    """Convert hex color to RGB tuple"""
    hex_color = hex_color.lstrip('#')
    return tuple(int(hex_color[i:i+2], 16) for i in (0, 2, 4))

def create_dummy_image(filename, title, subtitle, color, width=800, height=600):
    """Create a dummy image with title and subtitle"""
    
    # Create image with gradient background
    img = Image.new('RGB', (width, height), color='white')
    draw = ImageDraw.Draw(img)
    
    # Create gradient background
    main_color = hex_to_rgb(color)
    light_color = tuple(min(255, c + 40) for c in main_color)
    
    # Draw gradient rectangles
    for i in range(height):
        ratio = i / height
        r = int(main_color[0] * (1 - ratio) + light_color[0] * ratio)
        g = int(main_color[1] * (1 - ratio) + light_color[1] * ratio)
        b = int(main_color[2] * (1 - ratio) + light_color[2] * ratio)
        draw.rectangle([(0, i), (width, i + 1)], fill=(r, g, b))
    
    # Add overlay for better text visibility
    overlay = Image.new('RGBA', (width, height), (0, 0, 0, 100))
    img = Image.alpha_composite(img.convert('RGBA'), overlay).convert('RGB')
    draw = ImageDraw.Draw(img)
    
    # Try to load a font, fallback to default if not available
    try:
        title_font = ImageFont.truetype("arial.ttf", 48)
        subtitle_font = ImageFont.truetype("arial.ttf", 32)
        watermark_font = ImageFont.truetype("arial.ttf", 24)
    except:
        try:
            # Try alternative font paths
            title_font = ImageFont.truetype("/System/Library/Fonts/Arial.ttf", 48)
            subtitle_font = ImageFont.truetype("/System/Library/Fonts/Arial.ttf", 32)
            watermark_font = ImageFont.truetype("/System/Library/Fonts/Arial.ttf", 24)
        except:
            # Fallback to default font with larger size
            title_font = ImageFont.load_default()
            subtitle_font = ImageFont.load_default()
            watermark_font = ImageFont.load_default()
    
    # Draw title
    title_bbox = draw.textbbox((0, 0), title, font=title_font)
    title_width = title_bbox[2] - title_bbox[0]
    title_height = title_bbox[3] - title_bbox[1]
    title_x = (width - title_width) // 2
    title_y = (height - title_height - 60) // 2
    
    # Add text shadow
    draw.text((title_x + 2, title_y + 2), title, font=title_font, fill=(0, 0, 0, 128))
    draw.text((title_x, title_y), title, font=title_font, fill='white')
    
    # Draw subtitle
    subtitle_bbox = draw.textbbox((0, 0), subtitle, font=subtitle_font)
    subtitle_width = subtitle_bbox[2] - subtitle_bbox[0]
    subtitle_x = (width - subtitle_width) // 2
    subtitle_y = title_y + title_height + 20
    
    # Add text shadow
    draw.text((subtitle_x + 2, subtitle_y + 2), subtitle, font=subtitle_font, fill=(0, 0, 0, 128))
    draw.text((subtitle_x, subtitle_y), subtitle, font=subtitle_font, fill='white')
    
    # Add watermark
    watermark = "Nova's Portfolio - Dummy Image"
    watermark_bbox = draw.textbbox((0, 0), watermark, font=watermark_font)
    watermark_width = watermark_bbox[2] - watermark_bbox[0]
    watermark_x = width - watermark_width - 20
    watermark_y = height - 40
    
    draw.text((watermark_x + 1, watermark_y + 1), watermark, font=watermark_font, fill=(0, 0, 0, 100))
    draw.text((watermark_x, watermark_y), watermark, font=watermark_font, fill=(255, 255, 255, 150))
    
    # Add decorative elements
    # Corner accent
    accent_color = tuple(max(0, c - 50) for c in main_color)
    draw.rectangle([(0, 0), (100, 100)], fill=accent_color)
    draw.rectangle([(width-100, height-100), (width, height)], fill=accent_color)
    
    # Save image
    filepath = os.path.join(projects_dir, filename)
    img.save(filepath, 'PNG', quality=95)
    print(f"✅ Created: {filepath}")

def main():
    """Generate all dummy images"""
    print("🎨 Generating dummy project images for Nova's portfolio...")
    print(f"📁 Creating images in: {os.path.abspath(projects_dir)}")
    print()
    
    total_images = len(project_images)
    for i, (filename, config) in enumerate(project_images.items(), 1):
        print(f"[{i:2d}/{total_images}] Generating {filename}...")
        create_dummy_image(
            filename=filename,
            title=config["title"],
            subtitle=config["subtitle"],
            color=config["color"]
        )
    
    print()
    print("🎉 All dummy images generated successfully!")
    print(f"📊 Total images created: {total_images}")
    print()
    print("📝 Next steps:")
    print("1. Copy the 'public' folder to your Next.js project root")
    print("2. Replace dummy images with real screenshots when available")
    print("3. Update image formats in config files if needed (.png vs .jpg)")
    print()
    print("💡 Tip: These dummy images will give you a working portfolio immediately!")

if __name__ == "__main__":
    main()