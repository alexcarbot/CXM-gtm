# GTM Content Policy

## Purpose

This policy ensures all GTM materials are accurate, provable, and consistent. Every claim must be traceable to evidence.

## Non-Negotiables

### 1. No Invention

**NEVER create from nothing:**
- Metrics, statistics, or percentages
- Customer testimonials or quotes
- Customer names, logos, or case studies
- Industry certifications or compliance badges
- Integration partnerships or endorsements
- Competitor capabilities or weaknesses
- Performance benchmarks without measurement

### 2. Evidence Required

**Every outward-facing claim must have an evidence tag:**

| Tag Format | Use Case |
|------------|----------|
| `[EVIDENCE: repo <path>]` | Code file reference |
| `[EVIDENCE: repo <path>#Lx-Ly]` | Specific line range |
| `[EVIDENCE: notion <page-title>]` | Notion documentation |
| `[EVIDENCE: transcript <date> <timestamp>]` | Meeting recording |
| `[EVIDENCE: provided-by-user]` | Stakeholder confirmation |
| `[EVIDENCE: demo]` | Demonstrable in live product |
| `[EVIDENCE: unknown]` | No proof located (last resort) |

### 3. Unverified Claims

If evidence cannot be found:
1. Mark the claim `[UNVERIFIED]`
2. Do NOT include in Tier A (public) materials
3. Request specific evidence from stakeholders
4. Document what artifact would prove the claim

## Claim Ledger Rules

All candidate claims must be added to the Claim Ledger with:

| Field | Required | Description |
|-------|----------|-------------|
| Claim | Yes | Plain language statement |
| Audience | Yes | GM, GSM, IT, or combination |
| Funnel Stage | Yes | Top, Mid, or Bottom |
| Confidence | Yes | High, Medium, or Low |
| Risk | Yes | Low, Medium, or High |
| Tier | Yes | A (public), B (sales), C (internal) |
| Evidence Tags | Yes | At least one tag |
| Approved Phrasing | Yes | Safe version to use |
| Bolder Phrasing | Optional | Must still be true |
| Notes | Optional | What NOT to imply |

### Confidence Levels

- **High**: Multiple evidence sources, demonstrable
- **Medium**: Single evidence source, reasonable inference
- **Low**: Logical but unproven, needs verification

### Risk Levels

- **Low**: Factual, easy to prove, no legal exposure
- **Medium**: Interpretation required, some ambiguity
- **High**: Could be challenged, legal sensitivity, competitive claims

## Claims Ladder

### Tier A: Safe Anywhere
- Website homepage, product pages, ads
- Marketing collateral, decks
- Social media, press releases
- Requires: High confidence + Low risk + Evidence

### Tier B: Sales Conversation Only
- Demo scripts, talk tracks
- Proposals, SOWs
- Email follow-ups
- Requires: Medium+ confidence + Context explanation

### Tier C: Internal Only
- Training materials
- Internal strategy docs
- Competitive analysis
- Can include: Speculation, hypotheses, risks

## Competitive Positioning Rules

### What You CAN Do
- State CarBot's own capabilities with evidence
- Ask questions that expose buyer risk
- Reference publicly available competitor information
- Use "typical competitor approach" framing

### What You CANNOT Do
- Assert competitor weaknesses without proof
- Make direct feature comparisons without evidence
- Claim competitor lacks capability unless documented
- Use competitor customer information

### Disqualifying Questions Pattern

Instead of asserting competitor weaknesses:

❌ "Competitor X doesn't have real TCPA compliance"

✅ "Ask them: 'How does your system handle quiet hours across multiple time zones? Can I see the audit log?'"

## Consistency Requirements

### Vocabulary
- Use only terms in the GTM Glossary
- No new feature names without Glossary entry
- Map internal code names to customer-facing names

### Metrics
- Use ranges if exact numbers unavailable
- Qualify with context: "based on typical deployment"
- Never round up to impressive numbers

### Outcomes
- Prefer qualitative descriptions over invented quantitative claims
- Use "designed to" not "guarantees"
- Focus on mechanisms, not promised results

## Review Process

### Before Publishing Tier A Content
1. All claims verified against Claim Ledger
2. Evidence coverage > 90%
3. No `[UNVERIFIED]` tags in final copy
4. Legal/compliance review if needed
5. Stakeholder sign-off recorded

### Before Using Tier B Content
1. Claims have Medium+ confidence
2. Context explanation documented
3. Escalation path if challenged

## Violations

Content that violates this policy:
- Cannot be published externally
- Must be revised with evidence or removed
- Repeat violations flagged in handoffs

## Exceptions

Request exceptions through:
1. Document the claim and why it matters
2. Identify who can provide evidence
3. Get written stakeholder approval
4. Add to Claim Ledger with exception note


