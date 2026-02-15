TITLE: COST_POLICY

SECTION: COST_CONTROL
- Minimize SSR and API calls.
- Prefer caching first.
- Apply per-user and per-minute limits for LLM usage.
- Apply low-cost model and shorter output limits for free tier.

SECTION: CLOUDFLARE_BASELINE
- Assume Workers free-tier request and CPU limits.
- Avoid heavy server-side computation.
- Increase SSG/ISR ratio and keep server routes thin.

SECTION: MONITORING
- Keep kill switches for traffic spikes and failure spikes.
- Record cost-impacting changes in docs requests.
