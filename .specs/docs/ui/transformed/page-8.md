UI_SPEC:
version: 1.0
page_name: MultipleIssues
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

AppPageMultipleIssues
├── ContentContainer
│ ├── WarningIcon
│ ├── TitleText
│ ├── InstructionText
│ ├── IssuesList
│ │ ├── IssueItem_1
│ │ │ ├── IssueLabel
│ │ │ └── IssueScore
│ │ │ ├── ScoreCircle
│ │ │ └── ScoreValue
│ │ ├── IssueItem_2
│ │ │ ├── IssueLabel
│ │ │ └── IssueScore
│ │ │ ├── ScoreCircle
│ │ │ └── ScoreValue
│ │ └── IssueItem_3
│ │ ├── IssueLabel
│ │ └── IssueScore
│ │ ├── ScoreCircle
│ │ └── ScoreValue
│ └── ActionButton
│ └── ActionButtonText

### AppPageMultipleIssues

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
padding_px: 0 0 0 0
margin_px: 0 0 0 0
background:
color: linear-gradient(to bottom, #FFFFFF 0%, #FF6D00 100%)
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
justify_content: flex-start
align_items: center
gap_px: 20
size:
width: 100%
height: auto
spacing:
padding_px: 60 20 40 20
margin_px: 0 0 0 0
background:
color: transparent
border:
radius_px: 0
width_px: 0
color: none

### WarningIcon

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
margin_px: 0 0 10 0
background:
color: transparent
border:
radius_px: 0
width_px: 0
color: none
image:
source_description: "Red triangle warning icon with exclamation mark and sparkles"
aspect_ratio: 1:1

### TitleText

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
content: "Multiple issues found"
font_size_px: 24
font_weight: 700
line_height_px: 28
color: "#D50000"

### InstructionText

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
margin_px: 0 0 20 0
background:
color: transparent
border:
radius_px: 0
width_px: 0
color: none
text:
content: "Select one to view instructions"
font_size_px: 16
font_weight: 400
line_height_px: 20
color: "#C0CA33"

### IssuesList

type: list
visibility: visible
layout:
display: flex
flex_direction: column
justify_content: flex-start
align_items: stretch
gap_px: 16
size:
width: 100%
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

### IssueItem_1

type: button
visibility: visible
layout:
display: flex
flex_direction: row
justify_content: space-between
align_items: center
gap_px: 10
size:
width: 100%
height: 80px
spacing:
padding_px: 0 20 0 20
margin_px: 0 0 0 0
background:
color: "#FF6D00"
border:
radius_px: 8
width_px: 0
color: none
interaction:
trigger: click
result: "Navigate to issue details"

### IssueLabel

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
content: "Belt noise"
font_size_px: 20
font_weight: 600
line_height_px: 24
color: "#FFFFFF"

### IssueScore

type: container
visibility: visible
layout:
display: flex
flex_direction: row
justify_content: center
align_items: center
gap_px: 0
size:
width: 50px
height: 50px
spacing:
padding_px: 0 0 0 0
margin_px: 0 0 0 0
background:
color: transparent
border:
radius_px: 25
width_px: 0
color: none

### ScoreCircle

type: icon
visibility: visible
layout:
display: block
flex_direction: N/A
justify_content: N/A
align_items: N/A
gap_px: 0
size:
width: 50px
height: 50px
spacing:
padding_px: 0 0 0 0
margin_px: 0 0 0 0
background:
color: transparent
border:
radius_px: 25
width_px: 4
color: "#FDD835"
image:
source_description: "Yellow progress ring with purple segment"
aspect_ratio: 1:1

### ScoreValue

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
content: "60"
font_size_px: 14
font_weight: 700
line_height_px: 16
color: "#FFFFFF"

### IssueItem_2

type: button
visibility: visible
layout:
display: flex
flex_direction: row
justify_content: space-between
align_items: center
gap_px: 10
size:
width: 100%
height: 80px
spacing:
padding_px: 0 20 0 20
margin_px: 0 0 0 0
background:
color: "#FF6D00"
border:
radius_px: 8
width_px: 0
color: none
interaction:
trigger: click
result: "Navigate to issue details"

### IssueItem_3

type: button
visibility: visible
layout:
display: flex
flex_direction: row
justify_content: space-between
align_items: center
gap_px: 10
size:
width: 100%
height: 80px
spacing:
padding_px: 0 20 0 20
margin_px: 0 0 0 0
background:
color: "#FF6D00"
border:
radius_px: 8
width_px: 0
color: none
interaction:
trigger: click
result: "Navigate to issue details"

### ActionButton

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
height: 56px
spacing:
padding_px: 0 0 0 0
margin_px: 0 0 0 0
background:
color: "#0B3056"
border:
radius_px: 8
width_px: 0
color: none
interaction:
trigger: click
result: "Record again"

### ActionButtonText

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
content: "Reccord Again"
font_size_px: 16
font_weight: 600
line_height_px: 20
color: "#FFFFFF"

## REPEAT_RULES

IssueItem_1:
repeat: true
data_source: ["Belt noise", "Belt noise", "Belt noise"]
min_items: 1
max_items: unlimited
