UI_SPEC:
version: 1.0
page_name: WornBrakePads
framework: React
layout_system: Flexbox
responsive: false
theme:
primary_color: "#FF6D00"
secondary_color: "#0B3056"
background_color: "#FFFFFF"
font_family: "Audiowide"
base_font_size_px: 16

## COMPONENT_TREE

AppPageWornBrakePads
├── MainContent
│ ├── BrakeIllustration
│ ├── StatusTitle
│ └── LoadingSpinner
│ ├── SpinnerRingBackground
│ └── SpinnerRingActive

### AppPageWornBrakePads

type: page
visibility: visible
layout:
display: flex
flex_direction: column
justify_content: center
align_items: center
gap_px: 0
size:
width: 100%
height: 100%
spacing:
padding_px: 20 20 20 20
margin_px: 0 0 0 0
background:
color: "#FFFFFF"
border:
radius_px: 0
width_px: 0
color: none

### MainContent

type: container
visibility: visible
layout:
display: flex
flex_direction: column
justify_content: center
align_items: center
gap_px: 40
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

### BrakeIllustration

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
source_description: "Realistic illustration of car brake rotors and pads with orange circular background"
aspect_ratio: 4:3

### StatusTitle

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
content: "Worn Brake Pads"
font_size_px: 28
font_weight: 700
line_height_px: 32
color: "#FF6D00"

### LoadingSpinner

type: container
visibility: visible
layout:
display: flex
flex_direction: row
justify_content: center
align_items: center
gap_px: 0
size:
width: 120px
height: 120px
spacing:
padding_px: 0 0 0 0
margin_px: 0 0 0 0
background:
color: transparent
border:
radius_px: 60
width_px: 0
color: none

### SpinnerRingBackground

type: icon
visibility: visible
layout:
display: block
flex_direction: N/A
justify_content: N/A
align_items: N/A
gap_px: 0
size:
width: 120px
height: 120px
spacing:
padding_px: 0 0 0 0
margin_px: 0 0 0 0
background:
color: transparent
border:
radius_px: 60
width_px: 12
color: "#FFEBEE"
image:
source_description: "Light pink half of spinner ring"
aspect_ratio: 1:1

### SpinnerRingActive

type: icon
visibility: visible
layout:
display: block
flex_direction: N/A
justify_content: N/A
align_items: N/A
gap_px: 0
size:
width: 120px
height: 120px
spacing:
padding_px: 0 0 0 0
margin_px: -120 0 0 0
background:
color: transparent
border:
radius_px: 60
width_px: 12
color: "#FF6D00"
image:
source_description: "Orange active half of spinner ring"
aspect_ratio: 1:1
