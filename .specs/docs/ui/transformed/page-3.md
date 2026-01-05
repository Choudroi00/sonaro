UI_SPEC:
version: 1.0
page_name: Analyzing
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
- Page (AppPageAnalyzing)
- Container / Section / List / Item
- Leaf: Text | Image | Icon | Button | Input

## COMPONENT_TREE

AppPageAnalyzing
├── ContentContainer
│ ├── GearsIllustrationImage
│ ├── StatusMessageContainer
│ │ ├── AnalyzingTitleText
│ │ └── WaitMessageText
│ └── AudioVisualizerImage

### AppPageAnalyzing

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
color: "#0B3056"
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
gap_px: 40
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

### GearsIllustrationImage

type: image
visibility: visible
layout:
display: block
flex_direction: N/A
justify_content: N/A
align_items: N/A
gap_px: 0
size:
width: 200
height: 180
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
source_description: "Hand-drawn style illustration of two interlocking gears, one reddish-brown solid, one black outline"
aspect_ratio: 1.1:1

### StatusMessageContainer

type: container
visibility: visible
layout:
display: flex
flex_direction: column
justify_content: flex-start
align_items: center
gap_px: 12
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

### AnalyzingTitleText

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
content: "Analyzing engine sound..."
font_size_px: 24
font_weight: 400
line_height_px: 32
color: "#FFFFFF"

### WaitMessageText

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
content: "This will only take a few seconds"
font_size_px: 16
font_weight: 400
line_height_px: 24
color: "#80DEEA"

### AudioVisualizerImage

type: image
visibility: visible
layout:
display: block
flex_direction: N/A
justify_content: N/A
align_items: N/A
gap_px: 0
size:
width: 200
height: 80
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
source_description: "Abstract audio visualizer with vertical rounded bars of varying heights in white/light blue gradient"
aspect_ratio: 2.5:1
