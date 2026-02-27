# GTM Agent Prompts

This directory contains the agent prompt files for the CarBot GTM pipeline.

## Agent Roster

| Agent | File | Role | Owner |
|-------|------|------|-------|
| GTM Orchestrator | `gtm-orchestrator.md` | Routes work through pipeline | GTM Lead |
| Product Intelligence | `product-intel.md` | Extracts facts from codebase | Dev Team |
| Market Positioning | `market-positioning.md` | Creates strategic messaging | Product Marketing |
| Website Copy | `website-copy.md` | Generates web content | Marketing/Content |
| Sales Enablement | `sales-enablement.md` | Creates sales tools | Sales Ops |
| Demo Architect | `demo-architect.md` | Designs demo flows | Product + Sales |

## Pipeline Flow

```
/gtm-orchestrator
    │
    ├─→ /product-intel (Stage 1)
    │       Creates: Intelligence Doc, Glossary, Claim Ledger
    │
    ├─→ /market-positioning (Stage 2)
    │       Creates: Positioning Brief, Claims Ladder
    │
    ├─→ /website-copy (Stage 3a)
    │       Creates: Website Copy Package
    │
    ├─→ /sales-enablement (Stage 3b)
    │       Creates: Sales Enablement Package
    │
    └─→ /demo-architect (Stage 3c)
            Creates: Demo Package
```

## Creating Slash Commands

To make these agents available as Cursor slash commands:

```bash
mkdir -p ~/.cursor/commands
for agent in gtm-orchestrator product-intel market-positioning website-copy sales-enablement demo-architect; do
  ln -sf "$(pwd)/$agent.md" ~/.cursor/commands/$agent.md
done
```

## Agent Structure

Each agent follows this structure:

1. **Role**: What the agent does
2. **Objectives**: Primary goals
3. **Non-Negotiables**: Truth discipline rules
4. **Inputs**: What the agent needs
5. **Required Outputs**: What the agent produces
6. **BMAD Mini-loop**: Per-output verification
7. **Workflow Phases**: Step-by-step process
8. **Quality Checklist**: Pre-handoff verification
9. **Examples**: Usage patterns
10. **Handoff Format**: JSON block for routing

## Policies

All agents must follow:
- `carbot/policies/gtm-content.md` - Evidence requirements
- `carbot/policies/brand.md` - Voice and tone
- `carbot/policies/compliance.md` - Legal guardrails

## Checklist

Stage acceptance criteria: `carbot/checklists/gtm-stage.md`


