# GTM Pipeline Stage Acceptance Criteria

## Overview

Each pipeline stage has specific acceptance criteria that must be met before work moves downstream. Use this checklist to verify completeness.

---

## Stage 1: Product Intelligence (GTM-001)

**Owner**: Dev Team  
**Input**: Repo + Notion + Transcripts + Sales Notes  
**Output**: Product Intelligence Document + Glossary + Claim Ledger

### Acceptance Criteria

- [ ] **Executive Summary** exists and readable in 60 seconds
- [ ] **Glossary** created with:
  - [ ] All customer-facing terms defined
  - [ ] Internal code names mapped
  - [ ] "Say this / Don't say this" lists included
- [ ] **Capability Inventory** covers all major features:
  - [ ] Each capability has evidence tags
  - [ ] Outcomes mapped to buyer personas
  - [ ] Demo moments identified
- [ ] **Integration List** complete:
  - [ ] All integrations have evidence tags
  - [ ] Data flows documented
  - [ ] Auth models described
- [ ] **Security/Compliance Section** describes mechanisms only (no legal promises)
- [ ] **Operational Reality** answers IT questions without guessing
- [ ] **Claim Ledger** exists:
  - [ ] Each claim has evidence tags
  - [ ] Audience and funnel stage assigned
  - [ ] Confidence and risk assessed
- [ ] **Limitations** honestly documented
- [ ] **Handoff Notes** included with:
  - [ ] Confidence level by section
  - [ ] Evidence coverage %
  - [ ] Gaps identified
  - [ ] Risks flagged

### Quality Gate
- Evidence coverage ≥ 80%
- All major features documented
- No [UNVERIFIED] tags on critical claims

---

## Stage 2: Market Positioning (GTM-002)

**Owner**: Product Marketing  
**Input**: Intelligence Doc + Brand Foundation  
**Output**: Positioning Brief + Claims Ladder

### Acceptance Criteria

- [ ] **Positioning Snapshot** complete:
  - [ ] Category framing defined
  - [ ] Ideal customer profile documented
  - [ ] Wedge statement clear
  - [ ] One-sentence positioning tight
- [ ] **Audience Value Matrices** for all three audiences:
  - [ ] GM matrix complete (promise, jobs, messages, proof, objections)
  - [ ] GSM matrix complete
  - [ ] IT matrix complete
- [ ] **Narrative Pillars** defined (3-5 pillars):
  - [ ] Each pillar has proof architecture
  - [ ] Evidence tags included
  - [ ] Risk notes documented
- [ ] **Messaging Hierarchy** copy-ready:
  - [ ] Headlines per audience (5 options each)
  - [ ] Supporting statements (5 per audience)
  - [ ] Proof points with evidence
  - [ ] CTAs by funnel stage
- [ ] **Claims Ladder** complete:
  - [ ] Tier A claims identified (safe anywhere)
  - [ ] Tier B claims identified (sales only)
  - [ ] Tier C claims identified (internal only)
- [ ] **Competitive Positioning** evidence-gated:
  - [ ] Only evidenced statements or questions
  - [ ] Disqualifying questions documented
- [ ] **All claims map to Claim Ledger**
- [ ] **Handoff Notes** included

### Quality Gate
- Three distinct audience matrices
- Every proof point has evidence tags
- No competitor claims without evidence

---

## Stage 3a: Website Copy (GTM-003a)

**Owner**: Marketing/Content  
**Input**: Positioning Brief  
**Output**: Website Copy Package

### Acceptance Criteria

- [ ] **Home Page** complete:
  - [ ] 3 hero variants (GM, GSM, IT)
  - [ ] Social proof section (placeholders OK)
  - [ ] Outcome blocks per audience
  - [ ] Trust section (mechanisms, not promises)
- [ ] **Product Page** complete:
  - [ ] 3 headline variants
  - [ ] How It Works section
  - [ ] Audience blocks
  - [ ] FAQ (7-10 questions)
- [ ] **Use-Case Pages** (3-5):
  - [ ] Each has problem → solution → proof structure
  - [ ] Demo moments referenced
- [ ] **Integration Pages** (2-4):
  - [ ] IT-friendly setup info
  - [ ] Security summary
- [ ] **Trust Page** complete:
  - [ ] Mechanisms described (not promises)
  - [ ] "Questions IT should ask" included
- [ ] **Pricing Framing** (no prices unless provided)
- [ ] **About Page** aligned to Brand Foundation
- [ ] **SEO Metadata** for every page
- [ ] **Internal Linking Plan** documented
- [ ] **Only Tier A claims** in copy (Tier B marked [SALES-ONLY])
- [ ] **Handoff Notes** included

### Quality Gate
- All pages produced per spec
- A/B headline variants included
- Claims cited or marked
- No [UNVERIFIED] in final copy

---

## Stage 3b: Sales Enablement (GTM-003b)

**Owner**: Sales Ops  
**Input**: Positioning Brief + Intelligence Doc  
**Output**: Sales Enablement Package

### Acceptance Criteria

- [ ] **One-Pager** fits print constraints:
  - [ ] GM/GSM version (front only)
  - [ ] Technical appendix (back/separate)
- [ ] **Battle Card** complete:
  - [ ] Us vs. Them table (questions if no evidence)
  - [ ] "When they say / You say" (7 handlers)
  - [ ] Landmines to plant
  - [ ] Proof points with evidence tags
- [ ] **Talk Tracks** for all audiences:
  - [ ] GM talk track (20s, 60s, 3min)
  - [ ] GSM talk track
  - [ ] IT talk track
  - [ ] Objection responses (7 per audience)
- [ ] **Discovery Questions** by persona:
  - [ ] Opening, pain, impact, vision, decision questions
  - [ ] Fast disqualifiers included
- [ ] **Email Templates** complete:
  - [ ] Cold outreach
  - [ ] Post-demo follow-up
  - [ ] Proposal send
  - [ ] Stalled deal
  - [ ] IT handoff
- [ ] **Call Templates**:
  - [ ] Agenda template
  - [ ] Recap template
- [ ] **Handoff Notes** included

### Quality Gate
- One-pager printable
- Battle card has proof tags
- Talk tracks sound natural aloud
- Emails have specific next steps

---

## Stage 3c: Demo Architecture (GTM-003c)

**Owner**: Product + Sales  
**Input**: All previous outputs  
**Output**: Demo Package

### Acceptance Criteria

- [ ] **Demo Menu** complete:
  - [ ] 7-minute lightning demo
  - [ ] 15-minute standard demo
  - [ ] 30-minute deep dive
- [ ] **Demo Path Map** documented:
  - [ ] Entry question and routing
  - [ ] Time budgets per segment
  - [ ] Branch limits defined
- [ ] **Talk Track Scripts** per path:
  - [ ] GM version
  - [ ] GSM version
  - [ ] IT version
  - [ ] Proof moments mapped
- [ ] **Demo Environment** specified:
  - [ ] Accounts/logins documented
  - [ ] Data state requirements
  - [ ] Reset procedure
- [ ] **Reset Verification Checklist** under 5 minutes
- [ ] **Objection Moments** planned:
  - [ ] Price objection
  - [ ] Implementation objection
  - [ ] Compliance objection
  - [ ] Security objection
- [ ] **Backup Plans** for technical failures
- [ ] **Leave-Behind Checklist** by audience
- [ ] **Handoff Notes** included

### Quality Gate
- 7/15/30 minute paths runnable
- Proof moments mapped to evidence
- Reset checklist testable
- Backup plans documented

---

## Stage 4: Stakeholder Review

**Owner**: Stakeholders (Marketing, Sales, Product, Legal)  
**Input**: All materials  
**Output**: Approved set

### Acceptance Criteria

- [ ] **Proof Review** passed:
  - [ ] No invented claims
  - [ ] Evidence coverage ≥ 90%
  - [ ] [UNVERIFIED] items resolved or removed
- [ ] **Tone Check** passed:
  - [ ] Consistent with Brand Foundation
  - [ ] Vocabulary matches Glossary
- [ ] **Compliance Check** (if applicable):
  - [ ] Legal review completed
  - [ ] High-risk claims approved
- [ ] **Owner Sign-offs** recorded:
  - [ ] Marketing approval
  - [ ] Sales approval
  - [ ] Product approval
  - [ ] Legal approval (if needed)

### Quality Gate
- All sign-offs documented
- No outstanding compliance concerns
- Materials ready for production

---

## Stage 5: Publication

**Owner**: Web + Enablement Ops  
**Input**: Approved set  
**Output**: Published/Distributed assets

### Acceptance Criteria

- [ ] **Web Assets** live:
  - [ ] All pages published
  - [ ] Links verified
  - [ ] Analytics tracking confirmed
- [ ] **Sales Team** trained:
  - [ ] Materials distributed
  - [ ] Talk tracks reviewed
  - [ ] Demo paths practiced
- [ ] **Demo Environment** validated:
  - [ ] Test run completed
  - [ ] Reset procedure verified
  - [ ] Backup plans tested
- [ ] **Feedback Loop** created:
  - [ ] Reporting mechanism defined
  - [ ] Update process documented

### Quality Gate
- Assets accessible
- Team enabled
- Monitoring in place

---

## Handoff Notes Template

Every stage must end with:

```markdown
## Handoff Notes

**Confidence level:** High / Medium / Low by section (and why)
**Evidence coverage:** X% of outward-facing claims backed by evidence tags
**Gaps identified:** [Specific info needed but missing]
**Risks to watch:** [Legal, competitive, operational sensitivities]
**Recommendations for next agent:** [Concrete do's and don'ts]
**Questions for human review:** [Decisions requiring business judgment]
```


