# Architecture

This site is the Linux-stack surface, so the architecture needs to stay sharp.

## Core split

The architecture is organized around three planes.

### 1. Host plane

The host plane is the durable operating substrate.

It should be:

- immutable or tightly governed
- updateable in an auditable way
- minimal enough to defend
- strong enough to serve as the base for everything above it

### 2. User plane

The user plane is where customization, application choice, workspace shape, and personal control live.

The user plane should remain expressive, but it should not silently erode host guarantees.

### 3. Agent plane

The agent plane is separate from ordinary user space.

It should have:

- explicit execution boundaries
- policy-aware capability routing
- controlled access to devices, files, and networks
- replayable and inspectable state transitions where practical

## Design thesis

The thesis is not “Linux plus some AI.”

The thesis is:

**a Linux stack whose architecture already assumes agentic execution as a permanent systems concern.**

## Why this matters

Most existing offerings either:

- bolt agentic behavior onto a conventional desktop model, or
- bury trust boundaries under convenience abstractions.

We want the opposite posture.

We want the operating model to stay legible even as the system becomes more capable.

## Next pages

- [SourceOS](/sourceos)
- [Agent Plane](/agent-plane)
- [Connected Stack](/connected-stack)
