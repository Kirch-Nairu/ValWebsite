# Facebook public leads — access log
Date: 2026-11-06 (local 07:01–07:06 PHT). Tool: Antigravity `read_url_content` (unauthenticated HTTP fetch, no login, no automation beyond a single page GET each). An interactive browser subagent was **not** used in this run.

| ID | URL requested | HTTP result | Page identity confirmed | Posts / permalinks visible | Media links |
|---|---|---|---|---|---|
| FB-001 | https://www.facebook.com/lguvalofficialpage | Page shell returned | ✅ "Municipal Government of Valencia, Bohol" — "This is the official FB Page of the Municipal Government of Valencia, Bohol." 21,852 followers, 933 talking about, 583 check-ins. Canonical `/lguvalofficialpage/`, profile id 100083574187733 | ❌ none | Profile image URL only (not stored) |
| FB-002 | https://www.facebook.com/profile.php?id=61595179684543 | Page shell returned | ✅ "SANG - AT Festival", 797 followers, 802 talking about. About text matches the user-supplied description. Canonical `/p/SANG-AT-Festival-61595179684543/` | ❌ none | Profile image URL only |
| FB-003 | https://www.facebook.com/skfederationvalenciabohol | Page shell returned | ✅ "SK Federation of Valencia, Bohol" — "The Official Sangguniang Kabataan Municipal Federation Page of Valencia, Bohol". 4,848 followers. Profile id 100084294996509 | ❌ none | Profile image URL only |

A script searched each captured HTML for `posts/`, `photos/`, `videos/`, `reel`, `permalink`, `story_fbid`, `creation_time` and post text: **0 matches**. Facebook serves timeline content only to logged-in sessions.

**Facebook original posts inspected: 0.** No post, date or photo has been invented.

## Mirror-only leads (not original)
- DILG Valencia, Bohol — FindGlocal mirror (S009)
- Municipal Youth Development Office — FindGlocal mirror (S010)

## Recommended next step
A human team member (or the LGU PIO) with a normal Facebook account should open each page and copy 10–15 post permalinks per page (Jul–Nov 2026 priority) into `facebook-original-posts.csv`. Better still, the PIO can export originals directly — that also resolves rights.
