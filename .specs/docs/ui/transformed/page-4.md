UI_SPEC:
version: 1.0
page_name: StatusAttention
framework: React
layout_system: Flexbox
responsive: false
theme:
primary_color: "#FF6D00"
secondary_color: "#0B3056"
background_color: "#FF0000"
font_family: "Inter"
base_font_size_px: 16

## NAMING CONVENTION

- PascalCase pattern: [Scope][Type][Role]
- Page (AppPageStatusAttention)
- Container / Section / List / Item
- Leaf: Text | Image | Icon | Button | Input

## COMPONENT_TREE

AppPageStatusAttention
├── StatusContentContainer
│ ├── SickCarImage
│ ├── EngineStatusTitleText
│ └── AttentionRequiredButton
│ └── AttentionLabelText

### AppPageStatusAttention

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
padding_px: 0 0 0 0
margin_px: 0 0 0 0
background:
color: "#FF0000"
border:
radius_px: 0
width_px: 0
color: none

### StatusContentContainer

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

### SickCarImage

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
source_description: "Cartoon illustration of a white car with a sick expression, tongue sticking out, X eyes, and shaking lines on a red background"
aspect_ratio: 1:1

### EngineStatusTitleText

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
font_size_px: 28
font_weight: 400
line_height_px: 36
color: "#FFFFFF"

### AttentionRequiredButton

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
color: "#FF6D00"
border:
radius_px: 8
width_px: 0
color: none
interaction:
trigger: click
result: "Navigate to detailed status report"

### AttentionLabelText

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
content: "Attention Required"
font_size_px: 20
font_weight: 400
line_height_px: 24
color: "#FFFFFF"
