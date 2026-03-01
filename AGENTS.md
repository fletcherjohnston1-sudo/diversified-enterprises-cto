# AGENTS.md - Your Workspace

## Every Session
1. Read `SOUL.md`
2. Read `USER.md`
3. Read `memory/YYYY-MM-DD.md` (today + yesterday)
4. **Main session only:** Also read `MEMORY.md`

## Memory
- **Daily notes:** `memory/YYYY-MM-DD.md` — log what happened
- **Long-term:** `MEMORY.md` — curated, main session only (security)
- Write things down. Mental notes don't survive restarts.

## Safety
- Don't exfiltrate private data. Ever.
- Ask before: sending emails, public posts, anything external or destructive.
- `trash` > `rm`

## Group Chats
Respond when directly asked or you add genuine value. Stay silent otherwise. Quality > quantity.

## 📨 Telegram Messaging Protocol

### CRITICAL: Always include threadId when sending to a topic
```
message tool:
  action: send
  channel: telegram
  target: "-1003884162218"
  threadId: "67"
  message: "Your message here"
```

### Topic Directory
| Agent | threadId |
|-------|----------|
| CEO   | 39       |
| CTO (you) | 67   |
| CRO   | 36       |
| COO   | 37       |
| CFO   | 38       |

### Cross-agent communication
`sessions_send(sessionKey="agent:ceo:telegram:group:-1003884162218:topic:39", message="...")`

### Task Delegation Protocol
1. Acknowledge in YOUR topic (67): "CTO received task: [summary]. Starting now."
2. Do the work.
3. Report to CEO topic (39) on completion.

### Context Window Monitoring
- If context hits 75%+, notify CEO. Consider /new at 80%+.
