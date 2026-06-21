---
title: The SourceOS ecosystem
description: Noetica, BearBrowser, and TurtleTerm — the workspace, browser, and terminal surfaces on top of the SourceOS immutable core.
---

<style>
.eco-grid { display:grid; grid-template-columns:repeat(auto-fit,minmax(260px,1fr)); gap:16px; margin:24px 0; }
.eco-card { border:1px solid var(--vp-c-divider); border-radius:12px; padding:22px; background:var(--vp-c-bg-soft); }
.eco-card h3 { margin:0 0 2px; border:0; padding:0; }
.eco-card .role { color:var(--vp-c-brand-1); font-size:13px; font-weight:600; margin-bottom:12px; }
.eco-card p { color:var(--vp-c-text-2); font-size:14.5px; margin:0 0 12px; }
.eco-card ul { margin:0; padding-left:18px; color:var(--vp-c-text-2); font-size:13.5px; }
.eco-flow { border:1px solid var(--vp-c-divider); border-radius:12px; padding:18px 20px; background:var(--vp-c-bg-soft); font-family:var(--vp-font-family-mono); font-size:13px; line-height:1.8; overflow-x:auto; }
</style>

# The SourceOS ecosystem

SourceOS is the immutable host core. The stack you actually *work in* sits above it across three planes — host, user, and **agent**. These are the surfaces that make the agent plane usable by people and by agents.

<div class="eco-grid">
  <div class="eco-card">
    <h3>Noetica</h3>
    <div class="role">The AI workspace &amp; brain</div>
    <p>A SourceOS-native AI operating workspace where notes, chats, repositories, agents, mail, calendar, and graph intelligence converge — local-first, with external services as optional connectors, not authorities.</p>
    <ul>
      <li>Intent-routed dialogue: each request → model, retrieval, tools, surface, skill</li>
      <li>Deterministic core — answers computed by logic, attested in a replayable ledger</li>
      <li>On-device knowledge graph (Hellgraph); no egress by default</li>
    </ul>
  </div>
  <div class="eco-card">
    <h3>BearBrowser</h3>
    <div class="role">The governed web surface</div>
    <p>A hardened, Gecko-derived browser <em>and</em> a governed agent-browser runtime: best-in-class anti-fingerprinting for humans, and a policy-bounded, provenance-tracked surface for agents that browse.</p>
    <ul>
      <li>Tor-grade fingerprint resistance; spoof-normality, not exposure</li>
      <li>Agent browsing under policy, mounts, and provenance</li>
      <li>Human and agent sessions kept on separate trust boundaries</li>
    </ul>
  </div>
  <div class="eco-card">
    <h3>TurtleTerm</h3>
    <div class="role">The agentic terminal surface</div>
    <p>A GPU-accelerated cross-platform terminal emulator and multiplexer built for the agentic era — terminal-native ChatOps where operators and agents share the same command surface.</p>
    <ul>
      <li>Fast, multiplexed, cross-platform</li>
      <li>Agent and operator workflows in one console</li>
      <li>Bridges to language intelligence for command understanding</li>
    </ul>
  </div>
</div>

## How they fit: one brain, many hands

The agent plane separates **deciding** from **acting**. Noetica is the brain that decides *what* to do; the surfaces are the hands that *do* it. A computer-use capability lets an agent operate these surfaces the way a person would — and every action is governed.

<div class="eco-flow">
you ─▶ <b>Noetica</b> (intent router: model · retrieval · tools · surface · skill)<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;│<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├─▶ <b>BearBrowser</b> &nbsp;— web surface (governed agent browsing)<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├─▶ <b>TurtleTerm</b> &nbsp;&nbsp;— terminal surface (commands, ChatOps)<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─▶ <b>computer use</b> — GUI surface (drive any app like a human)<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;│<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;▼ every action → attested dispatch in the replayable ledger (provenance + rollback)
</div>

Because the host core is immutable and self-rolling-back, and every agent action is attested, the agent plane stays accountable: you can see what an agent did, replay it, and trust the boundary between user space and agent execution.

See the [Agent Plane](/agent-plane) for the control model and [SourceOS](/sourceos) for the immutable substrate. Ready to try it? [Download SourceOS](/download).
