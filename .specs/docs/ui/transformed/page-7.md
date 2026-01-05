UI_SPEC:
version: 1.0
page_name: Home
framework: React
layout_system: Flexbox
responsive: false
theme:
primary_color: "#FF6D00"
secondary_color: "#0B3056"
background_color: "#0B3056"
font_family: "Inter"
base_font_size_px: 16

## NAMING CONVENTION

- PascalCase pattern: [Scope][Type][Role]
- Page (AppPageHome)
- Container / Section / List / Item
- Leaf: Text | Image | Icon | Button | Input

## COMPONENT_TREE

AppPageHome
├── LanguageSelectorButton
│ ├── LanguageText
│ └── ChevronDownIcon
└── BottomControlsContainer
├── GalleryButton
│ └── GalleryIcon
├── RecordButton
│ └── RecordIcon
└── MenuButton
└── MenuIcon

### AppPageHome

type: page
visibility: visible
layout:
display: flex
flex_direction: column
justify_content: space-between
align_items: flex-start
gap_px: 0
size:
width: 100%
height: 100%
spacing:
padding_px: 60 24 60 24
margin_px: 0 0 0 0
background:
color: "#0B3056"
border:
radius_px: 0
width_px: 0
color: none

### LanguageSelectorButton

type: button
visibility: visible
layout:
display: flex
flex_direction: row
justify_content: flex-start
align_items: center
gap_px: 8
size:
width: auto
height: auto
spacing:
padding_px: 8 8 8 8
margin_px: 0 0 0 0
background:
color: transparent
border:
radius_px: 0
width_px: 0
color: none
interaction:
trigger: click
result: "Open language selection modal"

### LanguageText

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
content: "En"
font_size_px: 18
font_weight: 400
line_height_px: 22
color: "#FFFFFF"

### ChevronDownIcon

type: icon
visibility: visible
layout:
display: block
flex_direction: N/A
justify_content: N/A
align_items: N/A
gap_px: 0
size:
width: 16
height: 16
spacing:
padding_px: 0 0 0 0
margin_px: 0 0 0 0
background:
color: transparent
border:
radius_px: 0
width_px: 0
color: none

### BottomControlsContainer

type: container
visibility: visible
layout:
display: flex
flex_direction: row
justify_content: space-between
align_items: center
gap_px: 20
size:
width: 100%
height: auto
spacing:
padding_px: 0 20 0 20
margin_px: 0 0 0 0
background:
color: transparent
border:
radius_px: 0
width_px: 0
color: none

### GalleryButton

type: button
visibility: visible
layout:
display: flex
flex_direction: column
justify_content: center
align_items: center
gap_px: 0
size:
width: 80
height: 80
spacing:
padding_px: 0 0 0 0
margin_px: 0 0 0 0
background:
color: "#FFFFFF"
border:
radius_px: 24
width_px: 0
color: none
interaction:
trigger: click
result: "Open gallery or history"

### GalleryIcon

type: icon
visibility: visible
layout:
display: block
flex_direction: N/A
justify_content: N/A
align_items: N/A
gap_px: 0
size:
width: 24
height: 24
spacing:
padding_px: 0 0 0 0
margin_px: 0 0 0 0
background:
color: transparent
border:
radius_px: 0
width_px: 0
color: none

### RecordButton

type: button
visibility: visible
layout:
display: flex
flex_direction: column
justify_content: center
align_items: center
gap_px: 0
size:
width: 96
height: 96
spacing:
padding_px: 0 0 0 0
margin_px: 0 0 20 0
background:
color: "#FFFFFF"
border:
radius_px: 48
width_px: 0
color: none
interaction:
trigger: click
result: "Start recording"

### RecordIcon

type: icon
visibility: visible
layout:
display: block
flex_direction: N/A
justify_content: N/A
align_items: N/A
gap_px: 0
size:
width: 32
height: 32
spacing:
padding_px: 0 0 0 0
margin_px: 0 0 0 0
background:
color: transparent
border:
radius_px: 0
width_px: 0
color: none

### MenuButton

type: button
visibility: visible
layout:
display: flex
flex_direction: column
justify_content: center
align_items: center
gap_px: 0
size:
width: 80
height: 80
spacing:
padding_px: 0 0 0 0
margin_px: 0 0 0 0
background:
color: "#FFFFFF"
border:
radius_px: 24
width_px: 0
color: none
interaction:
trigger: click
result: "Open menu or settings"

### MenuIcon

type: icon
visibility: visible
layout:
display: block
flex_direction: N/A
justify_content: N/A
align_items: N/A
gap_px: 0
size:
width: 24
height: 24
spacing:
padding_px: 0 0 0 0
margin_px: 0 0 0 0
background:
color: transparent
border:
radius_px: 0
width_px: 0
color: none
