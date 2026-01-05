# UI EXECUTION

## ABSOLUTE RULES (NON-NEGOTIABLE)

1. Treat the UI spec as a **binding contract**
2. If something is not specified, **DO NOT invent it**
3. `UNSPECIFIED — DO NOT INFER` means:
   - leave unstyled
   - leave default
   - or omit behavior, exactly as applicable
4. Do NOT add:
   - spacing
   - colors
   - font styles
   - responsiveness
   - accessibility
   - animations
5. Do NOT remove anything, even if it seems redundant or wrong
6. Numeric values must be applied **exactly** (unless they map to a project token)
7. Component names are **immutable**
8. **Project Defaults**: Always prefer existing project tokens (colors, typography, components) over raw values if they match.
9. Violations are implementation errors

---

## INPUT GUARANTEE

You will receive:

- A **UI_SPEC** document
- A **COMPONENT_TREE**
- One **annotation per tree node**
- Optional **REPEAT_RULES**

Assume the spec is intentional and authoritative.

---

## **CRITICAL: Project Alignment**

- Before applying raw values, check `commun.md` and `src/components/ui/` for existing tokens.
- **Color**: If a hex code matches a project color (e.g., `#FF6D00` → `primary`), use the Tailwind class (e.g., `bg-primary`).
- **Typography**: If font properties match a defined style (e.g., 40px/900 → `h1`), use the class (e.g., `text-h1`).
- **Components**: If a spec component matches a project component (e.g., Button), use the existing component from `src/components/ui/`.

Do NOT extend or normalize the theme beyond existing project defaults.

---

## Component Tree Construction

1. Create the component hierarchy **exactly** as defined in `COMPONENT_TREE`
2. Preserve:
   - parent/child relationships
   - ordering
   - nesting depth
3. Do NOT merge, split, or rename nodes
4. Every tree node MUST result in a concrete UI element

---

## Annotation Application (Node-by-Node)

For each component annotation, apply fields **literally**:

### Layout

- Use only the specified layout system
- If a layout value is `N/A`, do nothing
- Never infer missing flex/grid properties

### Size & Spacing

- Apply width, height, padding, margin exactly
- If `auto`, allow intrinsic sizing
- If `UNSPECIFIED`, do not define the value

### Background & Border

- Apply only specified colors and border values
- Do NOT add shadows, outlines, or effects unless specified

### Text Nodes

- Render text **exactly as written**
- No trimming, localization, casing changes, or substitutions
- Font values must match numeric specifications

### Image Nodes

- Render an image matching the description
- Preserve aspect ratio exactly
- Do NOT stylize or crop beyond specification

### Interactive Elements

- Implement only the listed trigger and result
- If interaction is unspecified, element is non-interactive

---

## Repeated Elements

If `REPEAT_RULES` exist:

1. Render the component as a loop
2. Respect min/max item counts exactly
3. Do NOT infer empty, loading, or fallback states
4. If data source is abstract, assume it exists

---

## STRICT FAILURE CONDITIONS

The implementation is INVALID if you:

- Add any visual detail not specified
- Infer missing values
- Modify component names
- Skip a node or annotation
- Apply “best practices” not explicitly defined
- Fix or reinterpret perceived mistakes in the spec

---

## MENTAL MODEL (IMPORTANT)

You are **not** a UI designer.
You are **not** a problem solver.
You are a **compiler** converting a visual contract into code.

If the spec is wrong → implement it wrong.
If the spec is incomplete → leave it incomplete.

---

## FINAL CHECK BEFORE COMPLETION

Confirm:

- [ ] Every tree node exists in implementation
- [ ] Every annotation field is applied or intentionally omitted
- [ ] No inferred values exist
- [ ] No extra styles or behaviors were added
- [ ] Output matches the spec 1:1

Only then is the task complete.
