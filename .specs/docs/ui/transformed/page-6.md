UI_SPEC:
version: 1.0
page_name: Onboarding
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
- Page (AppPageOnboarding)
- Container / Section / List / Item
- Leaf: Text | Image | Icon | Button | Input

## COMPONENT_TREE

AppPageOnboarding
├── ContentContainer
│ ├── MainIllustrationImage
│ ├── HeadlineText
│ └── DescriptionText
└── GetStartedButton
└── ButtonLabelText

### AppPageOnboarding

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
padding_px: 0 24 40 24
margin_px: 0 0 0 0
background:
color: "#FFFFFF"
border:
radius_px: 0
width_px: 0
color: none

### ContentContainer

type: container
visibility: visible
layout:
display: flex
flex_direction: column
justify_content: center
align_items: center
gap_px: 32
size:
width: 100%
height: 100%
spacing:
padding_px: 0 0 0 0
margin_px: 0 0 0 0
background:
color: transparent
border:
radius_px: 0
width_px: 0
color: none

### MainIllustrationImage

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
height: auto
spacing:
padding_px: 20 20 20 20
margin_px: 0 0 0 0
background:
color: transparent
border:
radius_px: 0
width_px: 0
color: none
image:
source_description: "Robotic arms working on a car chassis with a human technician supervising"
aspect_ratio: 1:1

### HeadlineText

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
content: "Hear the Problem\nBefore It Breaks"
font_size_px: 28
font_weight: 700
line_height_px: 36
color: "#000000"

### DescriptionText

type: text
visibility: visible
layout:
display: block
flex_direction: N/A
justify_content: N/A
align_items: N/A
gap_px: 0
size:
width: 100%
height: auto
spacing:
padding_px: 0 10 0 10
margin_px: 0 0 0 0
background:
color: transparent
border:
radius_px: 0
width_px: 0
color: none
text:
content: "Sonaro listens to your engine and detects early warning signs through sound analysis, helping you identify potential issues before they turn into serious and costly failures."
font_size_px: 15
font_weight: 400
line_height_px: 24
color: "#666666"

### GetStartedButton

type: button
visibility: visible
layout:
display: flex
flex_direction: row
justify_content: center
align_items: center
gap_px: 0
size:
width: 100%
height: 56
spacing:
padding_px: 0 0 0 0
margin_px: 0 0 0 0
background:
color: "#0B3056"
border:
radius_px: 12
width_px: 0
color: none
interaction:
trigger: click
result: "Proceed to main application"

### ButtonLabelText

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
content: "Get Started"
font_size_px: 16
font_weight: 600
line_height_px: 20
color: "#FFFFFF"
