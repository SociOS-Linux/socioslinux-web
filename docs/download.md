---
title: Download SourceOS
description: Download prebuilt SourceOS installer images — Desktop, Server, and Edge editions for PC, ARM, and Apple Silicon.
---

<style>
.dl-grid { display:grid; grid-template-columns:repeat(auto-fit,minmax(240px,1fr)); gap:16px; margin:24px 0; }
.dl-card { border:1px solid var(--vp-c-divider); border-radius:12px; padding:20px 22px; background:var(--vp-c-bg-soft); display:flex; flex-direction:column; }
.dl-card h3 { margin:0 0 2px; border:0; padding:0; }
.dl-card .sub { color:var(--vp-c-text-2); font-size:13px; margin-bottom:12px; }
.dl-card p { color:var(--vp-c-text-2); font-size:14px; flex:1; margin:0 0 16px; }
.dl-btn { display:inline-block; text-align:center; background:var(--vp-c-brand-1); color:#fff !important; font-weight:600; padding:9px 14px; border-radius:8px; text-decoration:none !important; font-size:14px; }
.dl-btn:hover { background:var(--vp-c-brand-2); }
.dl-meta { margin-top:10px; font-size:12px; color:var(--vp-c-text-3); }
.dl-note { border:1px solid var(--vp-c-divider); border-left:3px solid var(--vp-c-brand-1); border-radius:0 8px 8px 0; padding:12px 16px; background:var(--vp-c-bg-soft); font-size:14px; margin:20px 0; }
</style>

# Download SourceOS

SourceOS is the immutable host core of the Socios Linux stack — self-updating, content-addressed, and built to roll back automatically when an update is unhealthy. Pick your architecture below; choose your **edition** during install.

<div class="dl-note">
<strong>Status: release candidate.</strong> Current builds are pre-release while we validate on hardware. Grab the latest from <a href="https://github.com/SourceOS-Linux/source-os/releases">all releases</a>. The buttons below resolve to the latest stable image once <code>v26.11</code> ships.
</div>

## Architectures

<div class="dl-grid">
  <div class="dl-card">
    <h3>PC — Intel &amp; AMD</h3>
    <div class="sub">x86_64 · UEFI / BIOS</div>
    <p>Desktops, laptops, servers, and VMs. Write to a USB stick and boot the live installer.</p>
    <a class="dl-btn" href="https://github.com/SourceOS-Linux/source-os/releases/latest/download/sourceos-installer-x86_64.iso">Download (x86_64)</a>
    <div class="dl-meta"><a href="https://github.com/SourceOS-Linux/source-os/releases/latest/download/sourceos-installer-x86_64.iso.sha256">SHA-256</a> · ~1.4 GB</div>
  </div>
  <div class="dl-card">
    <h3>ARM64</h3>
    <div class="sub">aarch64 · generic UEFI</div>
    <p>Ampere, ARM cloud instances, and UEFI single-board computers. Not for Macs — see Apple Silicon.</p>
    <a class="dl-btn" href="https://github.com/SourceOS-Linux/source-os/releases/latest/download/sourceos-installer-aarch64.iso">Download (ARM64)</a>
    <div class="dl-meta"><a href="https://github.com/SourceOS-Linux/source-os/releases/latest/download/sourceos-installer-aarch64.iso.sha256">SHA-256</a> · ~1.4 GB</div>
  </div>
  <div class="dl-card">
    <h3>Apple Silicon</h3>
    <div class="sub">M1 · M2 · M3 — via Asahi</div>
    <p>Installs alongside macOS using the official Asahi installer. One command in Terminal handles partitioning, firmware, and the bootloader.</p>
    <div style="background:var(--vp-c-bg); border:1px solid var(--vp-c-divider); border-radius:8px; padding:10px 12px; font-family:var(--vp-font-family-mono); font-size:13px; overflow-x:auto;">curl -fsSL https://get.sourceos.org | sh</div>
    <div class="dl-meta">macOS stays installed · one-time recovery step required by Apple</div>
  </div>
</div>

## Editions

One installer, three editions. Choose during install with `sourceos-install --edition <name>` (Desktop is the default).

<div class="dl-grid">
  <div class="dl-card">
    <h3>Desktop</h3>
    <div class="sub">GNOME workstation</div>
    <p>Full GNOME desktop for laptops and workstations. Boots straight to a graphical login.</p>
    <div class="dl-meta"><code>sourceos-install --edition desktop</code></div>
  </div>
  <div class="dl-card">
    <h3>Server</h3>
    <div class="sub">headless · SSH</div>
    <p>Lean headless server: OpenSSH, firewall, no desktop. For VMs, bare metal, and cloud.</p>
    <div class="dl-meta"><code>sourceos-install --edition server</code></div>
  </div>
  <div class="dl-card">
    <h3>Edge</h3>
    <div class="sub">appliance · mesh-ready</div>
    <p>Minimal-footprint appliance with the Socios mesh stack for edge and network nodes.</p>
    <div class="dl-meta"><code>sourceos-install --edition edge</code></div>
  </div>
</div>

## Install in three steps

1. **Write the image.** Flash the ISO to a USB stick (8 GB+) with `dd`, Raspberry Pi Imager, or Balena Etcher. Apple Silicon skips this — the command does it.
2. **Boot it.** Boot from the USB (PC/ARM) into the SourceOS live installer. Run `sourceos-install` and confirm the target disk.
3. **First boot.** Reboot into SourceOS. It self-updates from a signed content cache and rolls back automatically if an update is unhealthy.

## Verify your download

Each release ships a `SHA256SUMS` file. Before installing:

```sh
# Linux
sha256sum -c SHA256SUMS
# macOS
shasum -a 256 -c SHA256SUMS
```

All images are built reproducibly in CI and published to [GitHub Releases](https://github.com/SourceOS-Linux/source-os/releases). See the [SourceOS overview](/sourceos) for how the immutable core and self-update model work.
