UI_SPEC:
version: 1.0
page_name: Welcome
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
- Page (AppPageWelcome)
- Container / Section / List / Item
- Leaf: Text | Image | Icon | Button | Input

## COMPONENT_TREE

AppPageWelcome
├── TopContentSection
│ ├── HeaderTitleText
│ ├── SubtitleText
│ └── HeroIllustrationImage
└── BottomActionContainer
├── GoogleAuthButton
│ ├── GoogleIcon
│ └── GoogleLabelText
├── GuestAuthButton
│ ├── GuestIcon
│ └── GuestLabelText
├── DividerLine
└── HowToUseButton
└── HowToUseLabelText

### AppPageWelcome

type: page
visibility: visible
layout:
display: flex
flex_direction: column
justify_content: space-between
align_items: stretch
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

### TopContentSection

type: section
visibility: visible
layout:
display: flex
flex_direction: column
justify_content: flex-start
align_items: center
gap_px: 16
size:
width: 100%
height: auto
spacing:
padding_px: 60 24 20 24
margin_px: 0 0 0 0
background:
color: transparent
border:
radius_px: 0
width_px: 0
color: none

### HeaderTitleText

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
margin_px: 0 0 8 0
background:
color: transparent
border:
radius_px: 0
width_px: 0
color: none
text:
content: "Welcome to Sonaro"
font_size_px: 28
font_weight: 700
line_height_px: 34
color: "#000000"

### SubtitleText

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
margin_px: 0 0 24 0
background:
color: transparent
border:
radius_px: 0
width_px: 0
color: none
text:
content: "AI-powered engine sound diagnostics"
font_size_px: 18
font_weight: 500
line_height_px: 24
color: "#FF6D00"

### HeroIllustrationImage

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
padding_px: 0 0 0 0
margin_px: 0 0 0 0
background:
color: transparent
border:
radius_px: 0
width_px: 0
color: none
image:
source_description: "Isometric car illustration on blue circular platform with diagnostic waves"
aspect_ratio: 1:1

### BottomActionContainer

type: container
visibility: visible
layout:
display: flex
flex_direction: column
justify_content: flex-start
align_items: center
gap_px: 16
size:
width: 100%
height: auto
spacing:
padding_px: 40 24 60 24
margin_px: -20 0 0 0
background:
color: "#0B3056"
border:
radius_px: 40
width_px: 0
color: none

### GoogleAuthButton

type: button
visibility: visible
layout:
display: flex
flex_direction: row
justify_content: center
align_items: center
gap_px: 12
size:
width: 100%
height: 56
spacing:
padding_px: 0 16 0 16
margin_px: 0 0 0 0
background:
color: "#FFFFFF"
border:
radius_px: 28
width_px: 0
color: none
interaction:
trigger: click
result: "Initiate Google authentication flow"

### GoogleIcon

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

### GoogleLabelText

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
content: "Continue with Google"
font_size_px: 16
font_weight: 500
line_height_px: 20
color: "#000000"

### GuestAuthButton

type: button
visibility: visible
layout:
display: flex
flex_direction: row
justify_content: center
align_items: center
gap_px: 12
size:
width: 100%
height: 56
spacing:
padding_px: 0 16 0 16
margin_px: 0 0 0 0
background:
color: "#FF6D00"
border:
radius_px: 28
width_px: 0
color: none
interaction:
trigger: click
result: "Navigate to guest onboarding or home"

### GuestIcon

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

### GuestLabelText

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
content: "Continue as a Guest"
font_size_px: 16
font_weight: 500
line_height_px: 20
color: "#FFFFFF"

### DividerLine

type: section
visibility: visible
layout:
display: block
flex_direction: N/A
justify_content: N/A
align_items: N/A
gap_px: 0
size:
width: 100%
height: 2
spacing:
padding_px: 0 0 0 0
margin_px: 8 0 8 0
background:
color: "#FFFFFF"
border:
radius_px: 1
width_px: 0
color: none

### HowToUseButton

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
padding_px: 0 16 0 16
margin_px: 0 0 0 0
background:
color: "#000000"
border:
radius_px: 28
width_px: 0
color: none
interaction:
trigger: click
result: "Open how to use tutorial"

### HowToUseLabelText

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
content: "How to use"
font_size_px: 16
font_weight: 500
line_height_px: 20
color: "#FFFFFF"
