UI_SPEC:
version: 1.0
page_name: Splash
framework: React
layout_system: Flexbox
responsive: false
theme:
primary_color: "#FF6D00"
secondary_color: "#0B3056"
background_color: "#FFFFFF"
font_family: "Inter"
base_font_size_px: 16

## NAMING CONVENTION

- PascalCase pattern: [Scope][Type][Role]
- Page (AppPageSplash)
- Container / Section / List / Item
- Leaf: Text | Image | Icon | Button | Input

## COMPONENT_TREE

AppPageSplash
├── TopDecorationImage
├── BrandContainer
│ ├── LogoMarkImage
│ ├── LogoTitleText
│ └── TaglineText
└── BottomDecorationImage

### AppPageSplash

type: page
visibility: visible
layout:
display: flex
flex_direction: column
justify_content: space-between
align_items: center
gap_px: 0
size:
width: 100%
height: 100%
spacing:
padding_px: 0 0 0 0
margin_px: 0 0 0 0
background:
color: "#FFFFFF"
border:
radius_px: 0
width_px: 0
color: none

### TopDecorationImage

type: image
visibility: visible
layout:
display: block
flex_direction: N/A
justify_content: N/A
align_items: N/A
gap_px: 0
size:
width: 100%
height: 300
spacing:
padding_px: 0 0 0 0
margin_px: 0 0 0 0
background:
color: transparent
border:
radius_px: 0
width_px: 0
color: none
image:
source_description: "Abstract light blue diagonal sound wave bars descending from top"
aspect_ratio: 16:9

### BrandContainer

type: container
visibility: visible
layout:
display: flex
flex_direction: column
justify_content: center
align_items: center
gap_px: 16
size:
width: 100%
height: auto
spacing:
padding_px: 0 24 0 24
margin_px: 0 0 0 0
background:
color: transparent
border:
radius_px: 0
width_px: 0
color: none

### LogoMarkImage

type: image
visibility: visible
layout:
display: block
flex_direction: N/A
justify_content: N/A
align_items: N/A
gap_px: 0
size:
width: 120
height: 120
spacing:
padding_px: 0 0 0 0
margin_px: 0 0 0 0
background:
color: transparent
border:
radius_px: 0
width_px: 0
color: none
image:
source_description: "Interlocking dark blue and orange gear-like shapes forming a circular logo"
aspect_ratio: 1:1

### LogoTitleText

type: text
visibility: visible
layout:
display: block
flex_direction: N/A
justify_content: N/A
align_items: N/A
gap_px: 0
size:
width: auto
height: auto
spacing:
padding_px: 0 0 0 0
margin_px: 8 0 0 0
background:
color: transparent
border:
radius_px: 0
width_px: 0
color: none
text:
content: "SONARO"
font_size_px: 40
font_weight: 900
line_height_px: 48
color: "#FF6D00"

### TaglineText

type: text
visibility: visible
layout:
display: block
flex_direction: N/A
justify_content: N/A
align_items: N/A
gap_px: 0
size:
width: auto
height: auto
spacing:
padding_px: 0 0 0 0
margin_px: 0 0 0 0
background:
color: transparent
border:
radius_px: 0
width_px: 0
color: none
text:
content: "Turning Noise Into Knowledge."
font_size_px: 16
font_weight: 700
line_height_px: 24
color: "#0B3056"

### BottomDecorationImage

type: image
visibility: visible
layout:
display: block
flex_direction: N/A
justify_content: N/A
align_items: N/A
gap_px: 0
size:
width: 100%
height: 200
spacing:
padding_px: 0 0 0 0
margin_px: 0 0 0 0
background:
color: transparent
border:
radius_px: 0
width_px: 0
color: none
image:
source_description: "Abstract light blue diagonal sound wave bars rising from bottom right"
aspect_ratio: 16:9
