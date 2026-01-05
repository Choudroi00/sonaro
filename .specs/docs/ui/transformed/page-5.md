UI_SPEC:
version: 1.0
page_name: HowToUse
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
- Page (AppPageHowToUse)
- Container / Section / List / Item
- Leaf: Text | Image | Icon | Button | Input

## COMPONENT_TREE

AppPageHowToUse
├── HeaderTitleText
└── InstructionsScrollContainer
├── StepOneContainer
│ ├── StepOneTitleText
│ └── StepOneDescriptionText
├── StepTwoContainer
│ ├── StepTwoTitleText
│ └── StepTwoDescriptionText
├── StepThreeContainer
│ ├── StepThreeTitleText
│ └── StepThreeDescriptionText
├── StepFourContainer
│ ├── StepFourTitleText
│ └── StepFourDescriptionText
└── StepFiveContainer
├── StepFiveTitleText
└── StepFiveDescriptionText

### AppPageHowToUse

type: page
visibility: visible
layout:
display: flex
flex_direction: column
justify_content: flex-start
align_items: stretch
gap_px: 0
size:
width: 100%
height: 100%
spacing:
padding_px: 60 24 0 24
margin_px: 0 0 0 0
background:
color: "#FFFFFF"
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
margin_px: 0 0 40 0
background:
color: transparent
border:
radius_px: 0
width_px: 0
color: none
text:
content: "how to use"
font_size_px: 24
font_weight: 700
line_height_px: 30
color: "#000000"

### InstructionsScrollContainer

type: container
visibility: visible
layout:
display: flex
flex_direction: column
justify_content: flex-start
align_items: flex-start
gap_px: 24
size:
width: 100%
height: auto
spacing:
padding_px: 0 0 40 0
margin_px: 0 0 0 0
background:
color: transparent
border:
radius_px: 0
width_px: 0
color: none

### StepOneContainer

type: container
visibility: visible
layout:
display: flex
flex_direction: column
justify_content: flex-start
align_items: flex-start
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

### StepOneTitleText

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
content: "1. Start the Engine"
font_size_px: 20
font_weight: 600
line_height_px: 24
color: "#FF6D00"

### StepOneDescriptionText

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
margin_px: 0 0 0 24
background:
color: transparent
border:
radius_px: 0
width_px: 0
color: none
text:
content: "Make sure your engine is running and stable."
font_size_px: 16
font_weight: 400
line_height_px: 24
color: "#666666"

### StepTwoContainer

type: container
visibility: visible
layout:
display: flex
flex_direction: column
justify_content: flex-start
align_items: flex-start
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

### StepTwoTitleText

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
content: "2. Record the Sound"
font_size_px: 20
font_weight: 600
line_height_px: 24
color: "#FF6D00"

### StepTwoDescriptionText

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
margin_px: 0 0 0 24
background:
color: transparent
border:
radius_px: 0
width_px: 0
color: none
text:
content: "Tap the Record button and hold your phone near the engine."
font_size_px: 16
font_weight: 400
line_height_px: 24
color: "#666666"

### StepThreeContainer

type: container
visibility: visible
layout:
display: flex
flex_direction: column
justify_content: flex-start
align_items: flex-start
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

### StepThreeTitleText

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
content: "3. Wait for Analysis"
font_size_px: 20
font_weight: 600
line_height_px: 24
color: "#FF6D00"

### StepThreeDescriptionText

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
margin_px: 0 0 0 24
background:
color: transparent
border:
radius_px: 0
width_px: 0
color: none
text:
content: "Sonaro analyzes the sound using AI. This takes a few seconds."
font_size_px: 16
font_weight: 400
line_height_px: 24
color: "#666666"

### StepFourContainer

type: container
visibility: visible
layout:
display: flex
flex_direction: column
justify_content: flex-start
align_items: flex-start
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

### StepFourTitleText

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
content: "4. View the Results"
font_size_px: 20
font_weight: 600
line_height_px: 24
color: "#FF6D00"

### StepFourDescriptionText

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
margin_px: 0 0 0 24
background:
color: transparent
border:
radius_px: 0
width_px: 0
color: none
text:
content: "Detected issues will appear clearly on your screen."
font_size_px: 16
font_weight: 400
line_height_px: 24
color: "#666666"

### StepFiveContainer

type: container
visibility: visible
layout:
display: flex
flex_direction: column
justify_content: flex-start
align_items: flex-start
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

### StepFiveTitleText

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
content: "5. Tap for Instructions"
font_size_px: 20
font_weight: 600
line_height_px: 24
color: "#FF6D00"

### StepFiveDescriptionText

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
margin_px: 0 0 0 24
background:
color: transparent
border:
radius_px: 0
width_px: 0
color: none
text:
content: "Select any detected problem to see recommendations and next steps."
font_size_px: 16
font_weight: 400
line_height_px: 24
color: "#666666"
