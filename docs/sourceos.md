# SourceOS

SourceOS is the host-core doctrine and operating-system lane inside this broader stack.

## What belongs here

SourceOS is where we speak about:

- immutable host behavior
- update and rollback posture
- trust anchors
- hardware and boot assumptions
- base operating guarantees

## What does not belong here

SourceOS is not the whole product story.

It is one layer in a connected stack.

The public mistake we should avoid is turning “SourceOS” into a vague umbrella label that tries to explain everything at once.

## Practical framing

For the public Linux site, SourceOS should read as:

> the secure and constrained host foundation that makes the rest of the stack dependable.

That gives us a clean division:

- SourceOS = host core
- Socios Linux = Linux-stack public surface
- agent plane = bounded execution layer
