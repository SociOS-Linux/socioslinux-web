# Agent Plane

The agent plane is separate from ordinary user space.

That statement should remain simple and non-negotiable.

## Why separate it

Agents have different risk properties than ordinary applications.

They:

- aggregate context
- request capabilities dynamically
- initiate actions across tools and boundaries
- can become ambient very quickly if the system lets them

That means they should not be treated as just another app category.

## What the public site should say

The public claim does not need to dump internal implementation details.

It needs to say enough to make the posture legible:

- the agent plane is bounded
- agent access is policy-mediated
- the user remains legible in the loop
- the system distinguishes host, user, and agent concerns on purpose

## Where this connects upward

This is one of the clearest alignment points with the broader stack, but we do not need to overshare that on the landing page.

We can preserve the connection through architecture language and selective cross-links.
