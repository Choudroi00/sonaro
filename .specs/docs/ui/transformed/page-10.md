UI_SPEC:
version: 1.0
page_name: EngineStatus
framework: React
layout_system: Flexbox
responsive: false
theme:
primary_color: "#FF6D00"
secondary_color: "#0B3056"
background_color: "#1E5185"
font_family: "Audiowide"
base_font_size_px: 16

## COMPONENT_TREE

AppPageEngineStatus
├── ContentColumn
│ ├── CarIllustration
│ ├── StatusTitle
│ ├── StatusBadge
│ │ └── BadgeText
│ └── DescriptionText

### AppPageEngineStatus

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
padding_px: 60 20 60 20
margin_px: 0 0 0 0
background:
color: "#1E5185"
border:
radius_px: 0
width_px: 0
color: none

### ContentColumn

type: container
visibility: visible
layout:
display: flex
flex_direction: column
justify_content: center
align_items: center
gap_px: 30
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

### CarIllustration

type: image
visibility: visible
layout:
display: block
flex_direction: N/A
justify_content: N/A
align_items: N/A
gap_px: 0
size:
width: 250px
height: 200px
spacing:
padding_px: 0 0 0 0
margin_px: 0 0 20 0
background:
color: transparent
border:
radius_px: 0
width_px: 0
color: none
image:
source_description: "Blue vector illustration of car front view"
aspect_ratio: 5:4

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
content: "Engine Status"
font_size_px: 24
font_weight: 400
line_height_px: 28
color: "#FFFFFF"

### StatusBadge

type: container
visibility: visible
layout:
display: flex
flex_direction: row
justify_content: center
align_items: center
gap_px: 0
size:
width: 200px
height: 50px
spacing:
padding_px: 0 0 0 0
margin_px: 0 0 0 0
background:
color: "#006400"
border:
radius_px: 8
width_px: 0
color: none

### BadgeText

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
content: "Normale"
font_size_px: 18
font_weight: 600
line_height_px: 22
color: "#FFFFFF"

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
width: 280px
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
content: "No abnormal engine sounds detected."
font_size_px: 16
font_weight: 400
line_height_px: 20
color: "#CDDC39"
